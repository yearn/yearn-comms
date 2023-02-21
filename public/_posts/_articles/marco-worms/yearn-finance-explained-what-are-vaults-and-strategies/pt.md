---
title: "Yearn Finance explicada: O que são Vaults e Estratégias?"
image:
  src: ./image3.jpg
  width: 1024
  height: 597
date: '2022-01-18'
author: Marco_Worms
translator: jameskbh
---

![](./image1.jpg?w=900&h=478)\
*Exemplo Simples de Vault Yearn na rede Ethereum*

[Yearn Finance](http://yearn.finance/) é um conjunto de produtos em Finanças Descentralizadas (DeFi) que fornece geração de rendimento, agregação de empréstimos e muito mais na blockchain. O protocolo é mantido por vários desenvolvedores independentes e é governado pelos detentores de $YFI.

O produto principal atual de Yearn é o **yVault**, que fornece geração automatizada de rendimento para muitos criptoativos diferentes, cada um impulsionado por uma ou mais **Estratégias**. O design do yVault é aberto, o que significa que outros protocolos podem construir e inovar no topo do Yearn, [como o caso Abracadabra + Yearn](https://twitter.com/MarcoWorms/status/1483223651684081670).

# Yearn Vaults (yVaults)

O diminutivo do nome Vault Yearn é **yVault**. Na versão atual do Yearn (v2), estas são as características de um yVault:

- **O token que você deposita em um yVault é o token que você receberá rendimento**, sempre automaticamente composto no yVault
- **Um yVault pode ter muitas estratégias ativas ao mesmo tempo.** Um yVault pode alterar sua alocação de capital de estratégias quando julgar necessário
- Ao contrário de muitos outros agregadores de rendimento **não há taxas de depósito/retirada** cobradas do usuário
- **yVaults implementa o padrão ERC20 **, isso significa que eles podem ser facilmente movimentados entre carteiras e mercados, pois podem ser usados por qualquer aplicativo que lide com tokens erc20 (como bolsas descentralizadas)

## Estratégias e Estrategistas

**Estrategistas** são pessoas que constroem uma ou mais **estratégias** para os yVaults

[Qualque um pode criar uma Estratégia](https://docs.yearn.finance/developers/v2/getting-started), mas para adicioná-lo a um yVault, o estrategista precisa passar a estratégia pelo [processo de verificação de estratégia](https://docs.yearn.finance/developers/v2/getting-started#overview-of-our-vetting-process), que inclui verificação de conceito, revisão de código, revisão de segurança e teste na mainnet.

![](./image2.jpg?w=4000&h=588)\
*Processo de verificação de estratégia*

Por seus esforços, os estrategistas são recompensados com uma parte da taxa de desempenho da estratégia.

- Até 10% das taxas de rendimento geradas por uma estratégia específica (taxa de desempenho) vão para o estrategista
- 10% das taxas de rendimento geradas por todas as estratégias (taxa de desempenho) vão para a tesouraria do DAO Yearn.
- Ao longo do ano, 2% dos ativos totais do vault são tomados como taxas que vão para a Yearn para pagar despesas como gás, subsídios de desenvolvedores e outros serviços.

Agora que sabemos o que são yVaults e Estratégias, vamos nos aprofundar um pouco mais em seu funcionamento interno

# Mergulhando mais fundo em Vaults e Estratégias

### Detalhamento de uma estratégia

![](./image3.jpg?w=1024&h=597)\
*Obrigado Finematics por esta imagem!*

A imagem acima é uma visão geral da estratégia do vault Ethereum em uma versão 1 do yVault. Os yVaults agora estão na versão 2 e podem lidar com várias estratégias ao mesmo tempo, mas este exemplo se concentrará em uma única estratégia. Há um [post e vídeo inteiro da Finematics](https://finematics.com/yearn-vaults-eth-vault-explained/) sobre como isso funciona, caso você queira se aprofundar!

Neste exemplo, podemos ver como uma estratégia pode usar outros vaults! Na estratégia Ethereum do v1 yVault:

- Quando um usuário deposita ETH, o ETH é emprestado no MakerDAO como garantia
- A garantia é usada para tomar emprestado DAI
- O DAI tomado emprestado é depositado no DAI yVault

Então, usamos ETH para tomar emprestado DAI e gerar rendimento usando a estratégia do DAI yVault.

### Como/quando a Yearn move os fundos para dentro do vault e cobra taxas?

Uma das principais funções de uma estratégia é chamada de “coleta”. Quando executada, desencadeia um processo de rebalanceamento onde o lucro é realizado e reinvestido na estratégia.

### Como Yearn garante uma estratégia para sempre gerar tokens ao invés de perdê-los?

Os estrategistas usam várias ferramentas para monitorar dados na cadeia para garantir a integridade da estratégia. Uma dessas ferramentas é [Yearn Watch](https://yearn.watch/), que apresenta uma interface do usuário agradável, com muitas das principais métricas ao vivo no blockchain.

Tão importante quanto monitorar estratégias depois que elas vão para a produção, é a diligência feita antes de serem enviadas para a produção com dinheiro real. A equipe de estratégia de Yearn também tem um "Sistema de Pontuação de Estratégia" que avalia o nível de risco para as estratégias subjacentes usadas (esperamos expor isso melhor aos nossos usuários em nossa documentação e aplicativos no futuro).

### As estratégias têm restrições aprendidas pela experiência com vaults anteriore

- Os fundos do vault devem "apenas valorizar" e não perder valor
- Evitar perdas impermanentes (por exemplo, não fornecer liquidez YFI/ETH em um pool de liquidez)
- Os usuários devem poder fazer retiradas a qualquer momento (então a estratégia não pode bloquear todos os fundos do vault, apenas uma pequena fração)
- Usar apenas protocolos com histórico comprovado e contratos bem compreendidos e imutáveis

### Keep3rs e yVaults

Yearn e [Keep3r](https://docs.keep3r.network/) têm uma sinergia muito forte: Keep3r é usado pelo yVaults para automatizar tarefas comuns para vaults!

Por exemplo, os Keepers podem se beneficiar de chamar a função de coleta sempre que as condições fizerem sentido para o yVault, como:

- Uma estratégia ganhou X quantidade de lucro
- Já se passou Y quantidade de tempo desde a última coleta
- Não há perda se a coleta for feita agora

E há muitos casos como estes, outro exemplo seria um Keeper acionando um rebalanceamento da alocação de ativos do Vault, para evitar a liquidação em alguma parte da estratégia

![](./image4.jpg?w=562&h=651)

### Construindo estratégias

- **yVaults** estão programados em [Vyper](https://vyper.readthedocs.io/en/stable/)
- **As estratégias** são programadas em [Solidity](https://docs.soliditylang.org/en/v0.8.11/)

> Você não precisa ser um desenvolvedor avançado ou analista financeiro para se tornar um estrategista!

Embora a manutenção do yVaults seja uma questão de desenvolvimento mais complexa, as Estratégias foram projetadas para que qualquer pessoa possa escrever uma, o requisito para uma boa estratégia é:

- Conhecimento sobre o ecossistema de blockchain no qual você implantará, que pode ser adquirido fazendo uma pesquisa aprofundada do modelo econômico do token e documentação, para todos os tokens usados na própria estratégia.
- Conhecimento de programação de solidity semelhante a [completar o Nível 4 em CryptoZombies](https://cryptozombies.io/)
- Saiber como mexer no [git](https://git-scm.com/), [eth-brownie](https://eth-brownie.readthedocs.io/en/stable/) e [ganache](https://trufflesuite.com/ganache/).
- Depois de entender o básico das ferramentas acima, você está pronto para [copiar nosso modelo de estratégia](https://github.com/yearn/brownie-strategy-mix)! As funções que você deve começar a alterar neste modelo para construir com sua primeira estratégia são prepareReturn, adjustPosition e liquidatePositon.

Uma última coisa: depois que uma estratégia é endossada pela Yearn e colocada em produção, você deve ajudar a monitorá-la!

### Saiba mais

Se você quiser mais conteúdo sobre Vaults e Estratégias, confira esses recursos! Todos eles me ajudaram a entender os conceitos explicados neste artigo, e também os Yearn contribuooooors são as pessoas mais gentis e sempre me ajudaram a encontrar o melhor recurso para obter informações de qualidade sobre cada assunto.

* [descrições de yVaults](https://vaults.yearn.finance/)
* [yVault Docs](https://docs.yearn.finance/getting-started/products/yvaults/overview)
* [Torne-se um poderoso estrategista](https://www.youtube.com/watch?v=NVR3teJw0Y0)
* [Vídeo externo/artigo da Finematics sobre yVaults](https://finematics.com/yearn-vaults-eth-vault-explained/)
* [Recursos adicionais de Yearn](https://docs.yearn.finance/developers/v2/additional-resources)

### Tome a Pílula Azul!

Se você amou a abstração deos Vaults e Estratégias:

- Mantenha-se atualizado com nossas últimas notícias no Twitter de Yearn Finance
- Leia nosso [Livro Blue Pill](https://thebluepill.eth.limo/) descrevendo a visão e a história de Yearn
- E pesquise sobre [participar da equipe Yearn](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)!

*Produtor: [Worms](https://twitter.com/MarcoWorms), Revisores: [Wavey](https://twitter.com/wavey0x)*

*Obrigado Farrah e Weaver para me ajudar a entrar em Yearn e me conectar com pessoas impressionantes e recursos que me permitiram escrever este primeiro artigo aqui!*
