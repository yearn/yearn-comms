---
title: "Yearn Finance Newsletter #50"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator:
---

### Semana encerrada em 5 de dezembro de 2021

![](./cover.jpeg?w=576&h=288)

Bem-vindo à 50ª edição da Yearn Finance Newsletter. Nosso objetivo com este boletim é manter a comunidade da Yearn e a comunidade cripto em geral informadas sobre as notícias mais recentes, incluindo lançamentos de produtos, mudanças de governança e atualizações do ecossistema. Se você estiver interessado em aprender mais sobre Yearn Finance, siga nossas contas oficiais [Twitter](https://twitter.com/iearnfinance) e [Medium](https://medium.com/iearn).

## Sumário

- Nova IU do Yearn
- Proposta de atualização do Modelo Econômico do Token YFI
- Documentos atualizados do Yearn
- O YIP-64 não atinge o quorum
- Yearn Delega 23M VeCRV para Convex
- Estratégia de Snapshot Yearn
- Vaults no Yearn
- Notícias do Ecossistema

## Nova IU do Yearn

![](./image2.jpg?w=512&h=512)

Nós reconstruímos [yearn.finance](https://yearn.finance/) do zero com toneladas de feedback de nossa comunidade. Está ao vivo agora, então dê uma visita.

Um dos recursos mais interessantes (em nossa opinião) é o recurso Simulações. Para depositar em vaults nas versões anteriores da IU, adicionamos o suporte Zapper para, por exemplo, você pode depositar em vaults 3CRV com ETH ou qualquer token suportado pelo Zapper, o que é rápido e conveniente e implica que uma troca acontecerá em seu depósito. O que é essa mensagem "Simulando ..", você pode perguntar? Bem, esse rótulo "Simulando ..." verifica seus tokens de entrada e com a API do Zapper e o Tenderly, um serviço incrível que executa uma simulação de sua transação. Esta simulação calcula qual seria a saída exata, como uma prévia do seu depósito por exemplo, ETH> 3crv.

Por que isso é útil e interessante? Bem, dados os protocolos envolvidos e o estado na cadeia sendo dinâmico, é difícil prever com uma boa estimativa quantos tokens do vault que você pode receber. Sua slippage pode ser maior do que o esperado, ou sua troca de tokens pode falhar e custar gás, etc. Esta simulação pode economizar gás em depósitos ou retiradas.

As retiradas são outra área difícil de prever. As simulações ajudam a verificar se você pode retirar, dadas as condições do vault, pois alguns são mais líquidos do que outros, dependendo das alocações de estratégias.

Se você receber a mensagem "Simulation Failed ..", as chances são de que, se você prosseguir com a transação, ela será revertida.

A UI v3 é nova, então mais trabalho está sendo feito para melhorar esta UX para ser ainda mais suave.

Olhe debaixo do capô [aqui](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f). Se você é um desenvolvedor, contribua [aqui](https://github.com/yearn/yearn-finance-v3).

## Proposta de atualização do Modelo Econômico do Token YFI

Uma pesquisa no Snapshot está ativa para avaliar o suporte da comunidade para a propostas pro novo modelo econômico do token YFI.

Existem atualmente 5 opções para votação, com os nomes de trabalho sendo ySplit, veYFI, xYFI, BurnKeYs e Status Quo. A [proposta ySplit](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) sugere a divisão do token YFI de 10.000 a 1.000.000 para combater o viés da unidade. A [proposta veYFI](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit) sugere o bloqueio de YFI por um determinado período de tempo para receber direitos de governança que ditam para quais vaults os ganhos da tesouraria devem ir. [xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit) sugere a criação de um vault de staking de YFI para onde os lucros da tesouraria excedentes devem ser enviados. [BurnKeYs](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit) exige que a função mint do token YFI seja permanentemente desativada, limitando assim o fornecimento em 36.666 tokens. O Status Quo deixaria o modelo econômico do token (tokenomics) YFI em seu estado atual e informa os titulares e potenciais investidores sobre os benefícios.

Vote aqui na [página Snapshot](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea). Obrigado a todos na comunidade que contribuíram. Uma atualização do grupo de trabalho, haiku incluído, pode ser encontrada [aqui](https://docs.google.com/document/d/1-YEfXqXgTm-qzhPRUKs5allfX1XqYUOYwr_49FApnLU/edit).

## Documentos atualizados do Yearn

Vários meses atrás, os contribuidores do Yearn decidiram reescrever nossos documentos para torná-los amigáveis e acessíveis.

Os documentos completamente atualizados estão aqui para orientar usuários, desenvolvedores, parceiros e para alimentar sua curiosidade com muitas entradas nunca antes vistas.

Confira os novos documentos [aqui](https://docs.yearn.finance/).

## O YIP-64 não atinge o quorum

![](./image3.jpg?w=1100&h=759)

YIP-64: Ajustar as taxas de yVaults não-stablecoin entrou em fase de votação e terminou em votação por maioria contra o ajuste de taxas.

Confira a proposta [aqui](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2).

## Yearn Delega 23M VeCRV para Convex

![](./image4.jpg?w=873&h=615)

Yearn delegou 23 milhões de veCRV à Convex Finance usando o novo recurso de delegação nativo da Curve. Isso aumentará os rendimentos dos pools de fábrica, para ambos os DAOs. Isso não afeta pools regulares, taxas ou votação.

Delegar o veCRV não utilizado [aqui](https://convex-boost-delegation.vercel.app/) aumenta as recompensas de fábrica para todos os participantes do Convex, o que ajuda ainda mais a aumentar o rendimento do Convex e do Yearn. Nossa transação de delegação pode ser encontrada [aqui](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f).

## Estratégia de Snapshot Yearn

Em preparação para vários votos importantes, a estratégia Snapshot de Yearn foi atualizada.

Ele permite que você vote com YFI produtivo, ou seja, YFI na carteira, todos os vaults Yearn v2, Bancor, Balancer v2, Uniswap v2, Sushi (incl. MasterChef), MakerDAO, Unit, Instadapp (incl. MakerDAO).

O contrato pode ser encontrado [aqui](https://github.com/yearn/snapshot-strategy) e a implantação pode ser encontrada [aqui](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code)

## Vaults na Yearn

Você pode ler uma descrição detalhada das estratégias para todos os nossos yVaults ativos [aqui](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Notícias do Ecossistema

[Use com segurança seu YFI na plataforma da Qredo Network](https://twitter.com/QredoNetwork/status/1461031928564436994)

[Ouça Into the Byte Code com tracheopteryx](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet agora é compatível com os vaults beta de Yearn na rede Fantom](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract entra na lista dos cinco principais protocolos de crescimento mais rápido no Polygon](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[Assista ao vídeo de integração do Coordinape](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[Confira Yearn na carteira L2 da Argent com taxas tão baixas quanto $ 2](https://twitter.com/argentHQ/status/1468934923264401419)

[Os vaults Tesseract aumentaram seus limites de depósito](https://twitter.com/tesseract_fi/status/1468217220966801413)

[Obtenha um desconto em ingressos da ETHDubai tendo $ yvBOOST ou $ yvYFI](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[Veja o destaque de Zapper sobre as Simulações Yearn](https://twitter.com/zapper_fi/status/1466447565302517765)

[Ouça as ideias de Facu sobre Yearn com o podcast On the Ledger](https://twitter.com/Ledger/status/1465678701635506185)

[YFI agora pode ser gasto no aplicativo Flexa](https://twitter.com/FlexaHQ/status/1469092114038415364)
