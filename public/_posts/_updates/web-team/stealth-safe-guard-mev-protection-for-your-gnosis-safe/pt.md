---
layout: post
title: "Stealth Safe Guard: Proteção contra MEV para o seu Gnosis Safe"
categories: [Atualizações]
image:
  src: ./cover.png
  width: 1256
  height: 1024
author: "0x71B1"
date: "2021-11-16"
translator: jameskbh
---

![](./cover.png?w=1000&h=500)

artigo original: [Yearn.Finance Engineering](https://mirror.xyz/yearn-finance-engineering.eth)

## Introdução

O Gnosis Safe é um produto brilhante e a escolha unânime para multisigs de equipes de protocolo em todo o Ethereum. Mas, sem o devido cuidado dos utilizadores, existem algumas ameaças à espreita quando se trata de proteção contra MEV:

1. Ameaça de um terceiro ser o executor
2. Ameaça no mempool público
3. Ameaça do bloco "uncled"

Protocolos como Yearn são grandes alvos para ataques MEV, dado o enorme volume de negociações que acontecem diariamente (alguns dias acima de US$ 1.000.000). Até agora, tem sido uma luta para implementar os processos de nível humano certos para se proteger contra essas ameaças e ficar a salvo contra oportunidades de ataques MEV.

Este post apresenta "**Stealth Safe Guard**", um guarda recém-desenvolvido que visa resolver todas as 3 ameaças que podem tornar as interações com o seu vault vulneráveis.

## Ameaça de um terceiro ser o executor

### Definição do problema:

As transações Gnosis Safe podem ser executadas por qualquer pessoa que tenha as assinaturas necessárias, que estão publicamente disponíveis através da API e UI oficial de Gnosis. Isso abre um vetor de ataque onde um ator malicioso pode adicionar transações personalizadas antes e depois da execução da tx multisig e ser capaz de obter seu MEV.

### Solução:

Gnosis Safe >=1.3.0 resolve isso permitindo que o Safe atribua um contrato de guarda que pode ser definido para permitir que apenas endereços confiáveis definidos pelo usuário possam executar as transações do Safe. Mais detalhes sobre o porquê [aqui](https://blog.gnosis.pm/gnosis-safe-mev-how-to-mitigate-it-347e13535e34).

Em [StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol) este é o [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol).

## Ameaça no mempool público

### Definição do problema:

Executar transações seguras através do mempool público abre a mesma ameaça como indicado acima, qualquer um pode ver a transação e rapidamente gerar um pacote de flashbots que vai extrair o MEV dentro dela.

### Solução:

[StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol) exige que os executores usem o contrato [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol), que protege contra a entrada da txs no mempool público, adicionando uma recompensa vinculada a qualquer pessoa que veja a tx e relate seu hash secreto. Assim, a tx não será executada e removerá a penalidade do executor. Graças à equipe do Tenderly, temos um conjunto de scripts automáticos à procura desses tipos de txs que as relatarão imediatamente, e pagarão ao minerador a penalidade total de executor.

## Ameaça do bloco "uncled"

### Definição do problema:

Mesmo que tudo isso seja feito corretamente, ainda há uma maneira de nossa tx acabar nas mãos erradas. A maneira mais comum de isso acontecer é quando nossa tx furtiva acaba sendo incluído APENAS em um bloco "uncled". Isso permite que um invasor pegue nossa tx do bloco "uncled" e a inclua no bloco a seguir.

### Solução:

Há uma maneira fácil de evitar que isso aconteça, que é exigir que nossa tx seja bem-sucedida apenas em um número de bloco específico. **StealthRelayer** pode ser definido para exigir que o executor envie um número de bloco de destino nos argumentos de execução. Fazer isso com flashbots também nos permite direcionar o bloco exato na configuração do pacote e do smart contract, para evitar txs revertidas. A proteção de bloco pode ser desativada para redes não suportadas por Flashbots (como FTM).

## Descrição

### Links úteis:

- [o que é o gnosis safe guard?](https://help.gnosis-safe.io/en/articles/5496893-add-a-transaction-guard)
- [alguns contratos de exemplo com o guarda oficial](https://github.com/gnosis/safe-contracts/tree/main/contracts/examples/guards)

**StealthSafeGuard** é um contrato de guarda do Gnosis safe que permite que transações multisig sejam assinadas com segurança na interface do usuário, sem o risco de um terceiro executá-lo, também garante que executemos usando um mempool privado + proteção de bloco para evitar sermos atacados e|ou entrarmos num bloco "uncled", ao usar [bonded-stealth-txs](https://github.com/lbertenasco/bonded-stealth-tx).

Isto é conseguido exigindo que o `msg.sender` em **StealthSafeGuard** seja o nosso **StealthRelayer** e que o nosso `StealthRelayer.caller()` exista em `StealthSafeGuard.executors()`.

## Implantação e configuração

### Guardas

**StealthSafeGuard** pode ser facilmente implantado com o seguinte script: [/guard/00-stealth-safe-guard-deploy.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/00-stealth-safe-guard-deploy.ts)

Lembre-se de definir corretamente seu endereço `StealthRelayer` no arquivo [utils/contracts.ts](https://github.com/yearn/strategies-keep3r/blob/main/utils/contracts.ts#L73) e inserir corretamente o endereço de seu Safe, ao qual será atribuído como a função `Manager`, pois o `msg.sender` receberá a função `Owner`.

### Executor

A (s) conta(s) que você usará para executar as transações seguras precisaram realizar algumas transações, incluindo vincular algum ETH ao [StealthVault](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthVault.sol), para poder executar corretamente através do **StealthRelayer**. Além disso, o *Governor* ou *Manager* do **StealthSafeGuard** precisaria adicionar essas contas como executores. Você pode verificar nas interações do contrato como executá-las. A chave privada do *Executor* também será usada nos scripts abaixo.

### Interações contratuais

- *Executor* precisa chamar `bond(1 ether)`
- Usado pelo **StealthRelayer** para validar a vinculação dos executores e StealthHash
- *Executor* precisa habilitar `StealthRelayer` como um `StealthVault.job`

### StealthRelayer

- *Governor* precisa chamar `.addJob(GnosisSafeAddress)`
- *Governor* pode desativar a proteção de bloco chamando `setForceBlockProtection(bool)`
    - a proteção do bloco deve ser desativada para redes em que os flashbots não são suportados
- *Executor* pode então chamar `execute(GnosisSafeAddress, data, stealthHash, blockNumber)` usando um pacote flashbots
    - ou `executeWithoutBlockProtection(GnosisSafeAddress, data, stealthHash)` em cadeias sem flashbots

### GnosisSafe

- Deve ser a versão `≥1.3.0`
- O Safe deve executar em si mesmo `setGuard(StealthSafeGuard)`

### StealthSafeGuard

- *Governor* deve chamar `addExecutor(executor)`
- *Governor* pode chamar `setOverrideGuardChecks(true)` para desativar todas as verificações de guarda em caso de erro

## Solução de problemas e salvaguardas

Adicionar um guarda em um Safe é uma ação extremamente delicada, uma vez que pode quebrar/tornar inoperante o Safe completamente (você ficará trancado fora do seu Safe e perderá todos os ativos que ele possui). *Incentivamos novos usuários a experimentar isso em um Safe novo para pegar o jeito.*

**StealthSafeGuard** tem algumas proteções em vigor que garantem que você nunca será trancado fora do seu Safe.

1. O "owner" de **StealthSafeGuard** NÃO deve ser o mesmo Safe que está protegendo
    1. você deve, em vez disso, definir o Safe com a função de "manager".
        1. `StealthSafeGuard.setPendingManager(Safe)` como "owner" (segundo Safe)
        2. `StealthSafeGuard.acceptManager()` como Safe principal
    2. **StealthSafeGuard** *.owner* deve ser um Safe separado, cujo único objetivo é resgatar o Safe principal em caso de problema.
2. Tanto o *Owner* quanto o *Manager* podem desativar TODAS AS verificações (requisitos **StealthRelayer** e *Executor*) habilitando uma bandeira
    1. `StealthSafeGuard.setOverrideGuardChecks(true)` como "owner" (segundo Safe)
    2. `StealthSafeGuard.setOverrideGuardChecks(false)` como "owner" (segundo Safe)
        1. lembre-se de que a bandeira precisa ser ajustada manualmente para falso
3. Tanto o *Owner* quanto o *Manager* podem alterar o **StealthRelayer** chamando `StealthSafeGuard.setStealthRelayer(address_newStealthRelayer)`
4. Tanto o *Owner* quanto o *Manager* podem adicionar e remover endereços de executores
    1. `StealthSafeGuard.addExecutor(address_executor)`
    2. `StealthSafeGuard.removeExecutor(address _executor)`

## Automação

A execução pode ser automatizada executando um script que a cada X minutos:

1. consulta o API do gnosis safe por txs em fila e suas confirmações
2. gera a tx do safe
3. acrescenta e codifica as assinaturas para a tx
4. gera a execução da transação bruta do Safe
5. pega os detalhes do gás e da rede
6. gera um hash furtivo e atribui o número do bloco alvo
7. assina com o executor EOA
8. cria, simula e transmite o pacote para flashbots
9. faz um loops de 5. e 8. até que o pacote seja incluído em um bloco

Você pode ver um exemplo em: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

## Assinatura e Execução Manual

O comando a seguir solicitará que você insira o *Safe address* e o *safeTxHash* e, em seguida, vai exibir a mensagem assinada.

`npx hardhat run` [scripts/guard/02-stealth-relayer-guard-sign.ts](https://github.com/yearn/strategies-keep3r/blob/main/scripts/guard/02-stealth-relayer-guard-sign.ts) `--network rinkeby`

A mensagem assinada pode ser adicionada a `offchainSignatures` em: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

Em seguida, você pode executar o script para pegar a primeira Tx do Safe na fila, e ele irá pegar assinaturas da API gnosis e adicionar o `offchainSignatures` à transação, e enviá-lo para flashbots (se estiver na mainnet) através do relayer stealth. `npx hardhat run scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts --network rinkeby`

## Melhorias

- reduz o consumo de gás
- adiciona eventos úteis, como sucesso da execução e hash+nonce

## Créditos

**StealthSafeGuard** existe graças aos esforços das equipes Flashbots, Gnosis e Yearn.

- A equipe da Gnosis adicionou o sistema de guarda em sua [safe-contracts versão 1.3.0](https://github.com/gnosis/safe-contracts/releases/tag/v1.3.0)
- A equipe Flashbots fornece a base sobre a qual a stealth-tx pode ser executada com segurança e precisão

### Interessado em construir soluções semelhantes?

💡 [Colabore conosco em yearn!](https://yearnfinance.notion.site/)

### Interessado em ter isso para o seu multisig, mas não tem certeza de como?

*git é seu amigo.* Brincadeira, você pode entrar em contato com qualquer moderador de yearn por meio de nosso [discord](https://discord.yearn.finance/) ou [telegram](https://t.me/yearnfinance) e pedir para falar com nosso próprio especialista em stealth [skeletor_spaceman](https://t.me/skeletor_spaceman) ou qualquer um de nossos outros membros da equipe yMechanic por telegram, ficaremos felizes em orientá-lo.
