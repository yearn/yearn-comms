---
title:  "A governança da Yearn explicada: Propostas, token $YFI e execução"
image:
  src: ./image1.jpg
  width: 900
  height: 482
date: '2022-04-19'
author: Marco_Worms
translator: jameskbh 
---

![](./image1.jpg?w=900&h=482)

Qualquer pessoa pode discutir ou propor ideias no [Discord] da Yearn (https://discord.com/invite/6PNv2nF), [Twitter](https://twitter.com/iearnfinance), [Reddit](https://www.reddit.com/r/yearn_finance), [Pool of Ideas](https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b), [Telegram](https://t.me/yearnfinance/) e [Fórum de Governança](https://gov.yearn.finance/). À medida que as propostas amadurecem, torna-se uma votação estruturada no Fórum de Governança, onde o [token YFI](https://www.coingecko.com/en/coins/yearn-finance) é usado como poder de voto.

- Os detentores de tokens podem votar na [página Snapshot da Yearn](https://yearn.snapshot.page/#/), não há consumo de gás na transação de votação!
- Há também um [repositório de governança aposentado](https://docs.yearn.finance/contributing/governance/proposal-repository) que agora não é utilizado, mas pode ser explorado para aprender sobre a história da Yearn!

O tipo mais comum de propostas no fórum são as Propostas de Melhoria da Yearn (YIPs), mas existem outros tipos cobertos na [implementação atual da governança da Yearn (YIP-61)](https://gov.yearn.finance/t/yip-61-governance-2-0/10460):

- **Proposta de Melhoria Yearn (YIP):** Uma proposta para executar qualquer poder delegado aos detentores de YFI ou fora do escopo dos poderes enumerados
- **Proposta de Delegação Yearn (YDP):** Uma proposta para mudar a forma como um yTeam tem poder sobre um escopo.
- **Proposta de Sinalização Yearn (YSP):** Uma proposta não vinculativa para sinalizar sentimentos ou intenções da comunidade sobre qualquer questão.

### Escopo de Governança

[YIP-61](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) determina como a governança do Yearn funciona atualmente: [yTeams](https://gov.yearn.finance/t/yip-61-governance-2-0/10460#yteams-9) possuem autoridade delegada pelos detentores de YFI, para utilizar poderes limitados de forma autônoma. Ser detentor de YFI permite que se tenha controle sobre como o poder é distribuído entre as equipes, YFI dá poder de voto exclusivo para passar ou negar mudanças que mudam a dinâmica de poder dentro do protocolo, tais como:

- Alterar os Signatários Multisig ou yTeams
- Ratificar yTeams
- Como Gastar Fundos do Tesouro
- Definir Taxas de Protocolo
- Alterar o contrato YFI

## Processo do Fórum de Governança 

Qualquer pessoa pode criar uma nova proposta no [Fórum de Governança Yearn](https://gov.yearn.finance/):

![](./image2.jpg?w=900&h=486)

### Modelo de Proposta

Conforme estabelecido pelo [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959), aqui está a maneira padrão de escrever propostas:

**Resumo**:
O resultado da mudança proposta, escrito de forma não técnica e acessível

- **Status:** *(Este campo não é obrigatório, mas ajuda a todos)*
- **Discussão:** Esta proposta está atualmente em fase de discussão. De acordo com nossas regras de votação descritas no YIP-55, ela estará em discussão por pelo menos 3 dias com uma enquete no fórum (não-vinculativa) para avaliar o sentimento antes que possa ser atribuída um número YIP e passar para o Snapshot para uma votação vinculativa
- **Votação:** Esta proposta está atualmente em fase de votação. Vote no Snapshot Você pode aprender sobre nossas regras de votação na YIP-55
- **Aprovada:** Esta proposta foi aprovada em 25 de abril de 2021 às 7:00 UTC com 99,97% votando a favor

**Descrição:**
Uma breve (~200 palavras) descrição da alteração proposta. Deve descrever claramente o que acontece se a proposta for aprovada.

**Motivação:**
O problema atual que fez você escrever a proposta de mudança

**Especificação:**
Uma longa descrição de como esta proposta resolve o problema, deve descrever como implementar a YIP

**Enquete:**
Uma plataforma de votação que é construída no fórum de governança, para avaliar o sentimento da comunidade sobre a proposta: deve ser superior a 50%

### Discussão

Deve haver tempo suficiente (pelo menos 3 dias) de discussão para que a proposta possa ser abordada por diferente ângulos pelos membros da comunidade. Use a ferramenta de votação integrada do Discourse para avaliar o sentimento da comunidade sobre a proposta. Antes de a levar à votação formal, a enquete deve ter pelo menos 50% de votos à favor.

![](./image3.jpg?w=900&h=351)

Idealmente, as discussões devem levar o tempo necessário para esclarecer o que foi proposto à comunidade. Conversar com diferentes partes interessadas **antes de** propor algo é uma boa maneira de medir o sentimento e ajuda você a introduzir ideias complexas com melhor suporte desde o início. Um exemplo de proposta com excelente discussão é [YIP-57](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319) que emitiu 6.666 tokens YFI além do fornecimento inicial de 30.000 e teve que alinhar diferentes tipos de partes interessadas, desde membros do DAO, até grandes detentores de YFI.

### Votação

Depois que a etapa de discussão for aprovada, a proposta se tornará um YIP (ou talvez um YDP, dependendo de seu conteúdo) e será submetida à fase de votação. Para enviar uma votação para a [página Snapshot da Yearn](https://yearn.snapshot.page/#/), você precisa possuir pelo menos 1$ YFI ou pedir a alguém para fazer isso por você. Se a proposta for sólida, isso não será uma barreira. Comunique-se com um mod de fórum para obter um número oficial para a nova YIP!

O poder de voto corresponde 1:1 a quanto $YFI um eleitor tem. Assim, uma carteira com 10 $YFI tem 10x o poder de voto de alguém com 1 $YFI.

A votação leva pelo menos 5 dias e precisa de mais de 50% de aprovação, não há quórum a ser cumprido conforme descrito por [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959): "o requisito de quórum pode ser difícil de quantificar e pode levar a uma reunião demorada de eleitores apáticos".

![](./image4.jpg?w=900&h=543)

Possuir ou ter em stake YFI nos seguintes locais permite que você vote:
- Sua carteira
- YFI yVault V2 (equivalente a ter o token yvYFI)
- Balancer YFI/WETH LP token
- Uniswap YFI/WETH LP token
- Sushiswap YFI/WETH LP token em stake no MasterChef
- Garantia YFI no MakerDAO
- Garantia YFI no Unit Protocol
- Bancor.

### Concluir e Executar

Se a votação tiver passado com mais de 50% dos votos, a DAO Yearn deve executá-la. A maneira como [Yearn DAO](https://yearnfinance.notion.site/yearnfinance/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249) funciona não é  como a de uma empresa, de comando e controle de cima para baixo, portanto, ela não imporá ou obrigará uma equipe ou qualquer indivíduo a executar a proposta. A DAO garantirá que os incentivos corretos sejam definidos para que a proposta seja executada (por exemplo, alocar recursos para pagar pelo trabalho feito pelos contribuidores)

Recentemente, 2 YIPs foram aprovados e estão sendo executados pela Yearn enquanto eu escrevo isso:

- [YIP-65: Evolução do modelo econômico do token YFI](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Simplificação da remuneração do contribuidor](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)

## Lançamento justo de YFI

![](./image5.jpg?w=900&h=228)

[Andre Cronje](https://medium.com/@andrecronje) foi o primeiro construtor de Yearn e o que ele provocou tornou-se uma DAO com mais de 200 participantes ativos. Isso só é possível de existir como é hoje porque Cronje entregou cada centímetro de poder que tinha sobre o protocolo, e a maneira como ele fez isso foi através do YFI. Quem usou os serviços e ecossistema da Yearn nos primeiros dias recebeu esse poder, e você pode encontrar informações sobre como esse processo aconteceu nas postagens de Cronje:

1) [YFI](https://medium.com/iearn/yfi-df84573db81) (Ganhar YFI é simples, fornecer liquidez a uma das plataformas)
2) [Ganhando YFI em curve.fi/y](https://medium.com/iearn/earning-yfi-y-curve-fi-53b5fd347f0f) (Ganhe YFI fornecendo liquidez à Curve)
3) [YFI Rewards pool](https://medium.com/iearn/yfi-rewards-pool-810ef9256ec6) (Reward pool por queimar YFI)
4) [Pool #3 Meta Yield Governance](https://medium.com/iearn/pool-3-meta-yield-governance-58f68e6d2f19) (Pool que recompensou muitas coisas, incluindo a participação na governança)

## Recursos Adicionais

Se você está procurando inspiração para fazer uma proposta, você pode dar uma olhada nos seguintes YIPs que tiveram uma extensa discussão e mudaram a dinâmica de poder dentro do protocolo:

- [YIP 32: Remover queima de YFI](https://gov.yearn.finance/t/yip-32-remove-yfi-burning/1907)
- [YIP 36: Recompensas do Sistema como Capital Operacional](https://gov.yearn.finance/t/yip-36-system-rewards-as-operational-capital/2311)
- [YIP 41: Temporariamente Empoderar o Multisig](https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630/2)
- [YIP-51: Definir estrutura de taxas do Vault v2](https://gov.yearn.finance/t/yip-51-set-vault-v2-fee-structure/7752)
- [YIP-52: Fazer o Estrategista ter "Skin in Game" Para Gerar Benefícios para o Glorioso Cérebro de Yearn](https://gov.yearn.finance/t/yip-52-make-strategist-skin-in-game-partner-for-make-benefit-of-glorious-brain-of-yearn/7856)
- [YIP-54: Formalizar o Financiamento das Operações](https://gov.yearn.finance/t/yip-54-formalize-operations-funding/7956)
- [YIP-55: Formalizar o Processo YIP](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)
- [YIP-56: Recompra e Construção](https://gov.yearn.finance/t/yip-56-buyback-and-build/8929)
- [YIP-57: Financiamento do Futuro da Yearn](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319)
- [YIP-61: Governança 2.0](https://gov.yearn.finance/t/yip-61-governance-2-0/10460)
- [YIP-65: Evolução do modelo econômico do token YFI](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Simplificação da remuneração do contribuidor](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)
