---
title:  "Parceiros de Yearn: Construindo usando yVaults"
image:
  src: ./cover.png
  width: 1500
  height: 729
date: '2022-03-07'
author: Marco_Worms
translator: jameskbh
---

![](./cover.png?w=1400&h=729)

[Yearn Vaults](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) são construídos com padrões abertos e os parceiros YFI criaram aplicativos incríveis nos últimos dois anos. Este artigo mostra como outros protocolos estenderam a aplicação dos produtos Yearn, e esperamos que ele inspire mais experimentos utilizando os serviços YFI!

## Exemplos de casos

Os casos de parceria mais comuns são:
1. Usar tokens yVaults como garantia para empréstimos/empréstimos
2. Usar yVaults para gerar rendimento com fundos dos usuários

Em ambos os casos, o parceiro é recompensado com taxas de desempenho retiradas dos lucros gerais do vault: quanto mais o volume total que um parceiro contribui para um vault, maior a parcela do lucro que recebe.

> Em 2021, a Yearn compartilhou US$ 2.793.161 com parceiros, por meio de seu programa de parceria

Vamos nos aprofundar agora nos casos de uso de nosso maior parceiro:

## Yearn + [Abracadabra](http://abracadabra.money/)

Abracadabra usa yVaults em seu serviço de empréstimo: A principal inovação é aceitar tokens recebedores de rendimento como garantia para empréstimo. Quando este empréstimo quando pago, o usuário recebe os tokens do vault usados como garantia de volta, e isto inclui os lucros que foram gerados ao longo do tempo em que ele esteve bloqueado.

Uma visão geral do Abracadabra seria:
1. O usuário deposita wETH (Ethereum envelopado, o mesmo que Ethereum) em um yVault, e recebe yvWETH
2. O usuário deposita o yvWETH em Abracadaba como garantia, o Abracadabra permite que o usuário emita uma porcentagem de sua garantia como uma stablecoin em dólar chamada Magic Internet Money (MIM)

![](./image1.png?w=633&h=527)\
*[Abracadabra](http://abracadabra.money/) “borrow” interface*

Quando o usuário emite MIM, a garantia depositada é bloqueada até que o MIM emprestado seja devolvido

- Se o usuário pagar a tempo, a garantia é desbloqueada, se for um token yVault, isso significaria que seus tokens do yVault serão devolvidos com todos os lucros obtidos enquanto estiveram bloqueados como garantia!
- Se o usuário não pagar a tempo, parte da sua garantia será usada para pagar o serviço (liquidação)

Idealmente, os juros gerados pelo token do vault depositado superarão o custo da taxa de empréstimo da Abracadabra, então o caso de uso completo aqui seria bloquear um token gerador de rendimento como garantia

## Yearn + [Alchemix](https://alchemix.fi/)

Alchemix usa o DAI (outra stablecoin atrelada ao dólar, muito parecida com o MIM) yVault, a fim de gerar rendimentos a partir do DAI depositado pelo usuário e pagar automaticamente os empréstimos.

1. Usuário deposita DAI ou ETH em Alchemix
2. Alchemix deposita DAI ou ETH em Yearn Vaults para gerar rendimento para o usuário (e pagar automaticamente o empréstimo feito no próximo passo).
3. O usuário pode tomar emprestado até 50% das garantias depositadas como DAI e até 25% como ETH como alUSD ou alETH (que podem ser convertidos em DAI ou ETH no ecossistema Alchemix), o que bloqueia o valor depositado proporcionalmente ao valor tomado emprestado
4. Como o valor depositado na etapa 2 gera rendimento, ele paga o empréstimo do usuário automaticamente, e o usuário pode então sacar proporcionalmente ao rendimento gerado

Aqui está a visão geral completa do ecossistema Alchemix e como ele se integra ao Yearn:

![](./image2.png?w=1400&h=950)\
*Ecossistema [Alchemix](https://alchemix.fi/)*

## yVaults em B2B

*Para casos de uso comercial, o DAO Yearn realmente faz a diferença: ele tem a infraestrutura para fornecer a melhor segurança de vaults no DeFi no momento.*

Os parceiros ganham uma parte das taxas com base na TVL que contribuem para os vaults. Você pode ler mais sobre nosso modelo de participação nos lucros em [Documentação para Parceiro Yearn](https://docs.yearn.finance/partners/introduction). Os aplicativos de carteira de parceiros e as seções deinvestimentos implementam o yVaults e os atendem aos usuários de diferentes formas:

**Seções de Investimento:** páginas que fornecem uma interface alternativa para os usuários depositarem seus ativos no yVaults. Um bom exemplo da seção de inverstimento (Earn) pode ser encontrado em [ShapeShift](https://shapeshift.com/). Seu contrato para depositar os ativos no Yearn Vaults é de [código aberto no GitHub](https://github.com/shapeshift/yearn-router).

![](./image3.png?w=750&h=554)\
*Seção "Earn" de[ShapeShift](https://shapeshift.com/)*

**Carteiras**: os parceiros fornecem opções de geração de rendimento de Yearn dentro de seu ecossistema usando o yVaults. O [SteakWallet](https://www.steakwallet.fi/) é um bom exemplo de um serviço de carteira que se integra ao Yearn:

![](./image4.png?w=363&h=681)\
* Interface [SteakWallet](https://www.steakwallet.fi/) *

## Recursos para se tornar um parceiro

Se você gostaria de construir utilizando nossos yVaults é recomendável:

- Ler a [documentação do Programa de Parceria](https://docs.yearn.finance/partners/introduction) e o formulário do parceiro
- Para orientações técnicas, consulte a [Documentação dos Métodos de Integração Yearn](https://docs.yearn.finance/partners/integration_guide)

*Gostaríamos de ouvir de você sobre o que está construindo com os protocolos $ YFI!*

Produtor: [Worms](https://twitter.com/MarcoWorms), Revisores: [Corn](https://twitter.com/omgcorn), [Dark Ghosty](https://github.com/DarkGhost7)
