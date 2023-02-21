---
title: "Como a Yearn calcula os retornos estimados (APY)"
image:
  src: ./image1.jpg
  width: 469
  height: 246
data: '2022-02-14'
author: Marco_Worms
translator: jameskbh 
---

![](./image1.jpg?w=469&h=246)
*Exibição APY antiga*

Nas últimas semanas, recebemos muitos comentários sobre como nosso painel v3 exibe o “Rendimento percentual anual” (APY) dos ativos depositados. Especialmente no Fantom, onde o ecossistema tem preços e estratégias mais voláteis, implantamos mudanças de curto prazo em como o APY é exibido para representar o rendimento recebido por [weve e 0xdao](https://twitter.com/iearnfinance/status/1484570907041357828) . Quando voltamos aos nossos cálculos anteriores, não consideramos os cálculos APY de longo prazo como sendo inflados, mas agora enviamos uma atualização para corrigir esse erro. Este artigo tem como objetivo dar mais contexto sobre o que aconteceu e nossa solução!

## Contexto Rápido: APR e APY?

No DeFI, muitas vezes vemos muito esses 2 termos:

- **APR:** Taxa Percentual Anual
- **APY:** Rendimento Percentual Anual

Ambos são usados para comunicar ao usuário quanto eles podem esperar ganhar com um investimento:

- **APR** não assume nenhum reinvestimento automático do rendimento
- **APY** indica que o rendimento é reinvestido automaticamente

## O que aprendemos

Atualizamos a maneira como nossa interface mostra APYs algumas semanas atrás, ao passar pelas [guerras ve(3,3) no Fantom](https://twitter.com/iearnfinance/status/1484570907041357828) para refletir melhor o APY usando dados da colleta. Antes dessa mudança, mostramos APYs mais conservadores com base em dados históricos de longo prazo, mas durante as guerras a maioria dos APYs do Fantom vault disparou, e os ganhos de curto prazo não estavam sendo mostrados adequadamente aos usuários. Fizemos uma alteração para mostrar um número baseado na coleta recente para que as pessoas pudessem ver que nossos vaults estavam investindo nos protocolos mais lucrativos:

![](./image2.jpg?w=591&h=397)

A desvantagem de calcular o APY por meio de dados recentes é: quando os ganhos das guerras começaram a diminuir, mostramos um número que veio de coletas recentes realmente lucrativas, mas as próximas colheitas provavelmente não seriam tão lucrativas (diminuição das emissões de protocolos comunitários construídos para aproveitar a "guerra", menos especulação após a definição dos 20 maiores TVL), então decidimos fazer algumas alterações para corrigir este caso.

Então tínhamos um cálculo de APY realmente conservador antes do episódio mencionado acima, então mudamos para focar em dados recentes. Passar por esses 2 extremos nos fez aprender muito sobre o que funciona e o que não funciona! Aqui está como o fazemos agora:

### Para vaults que usam ativos não negociados em Curve.fi:

![](./image3.jpg?w=150&h=190)\
*nova exibição APY para vault não crv*

- **APR bruto:** APR total do vault antes da dedução das taxas
- **APY Líquido:** APY atual do Vault
- **APY semanal:** com base nas coletas dos últimos 7 dias
- **APY mensal:** com base nas coletas dos últimos 30 dias
- **APY desde o início:** com base em todas as coletas desde que o vault existe

### Para vaults que usam ativos de Curve.fi:

![](./image4.jpg?w=182&h=196)\
*nova exibição APY para vault crv*

- **Pool APY:** APY da taxa de swaps de curve nesse pool, metade vai aqui, metade para os detentores de veCRV.
- **APR de recompensas de bônus:** recompensas adicionadas geralmente pelo proprietário desse token. Pools IE frax também lhe dá token frax. O APY se você vendeu o token no preço atual.
- **APR de base CRV:** O APR da quantidade mínima de emissões de crv que esse pool curve recebe. (se você não tiver feito stake de veCRV para o incentivo, você recebe isso + pool apy + as recompensas de bônus.
- **Incentivo:** Aumente quanto do multiplicador você obtém do veCRV em stake
- **APR Convex:** Apr Convex atual, se você depositar no protocolo Convex
- **APR bruto:** APR total do vault antes da dedução das taxas
- **APY Líquido:** APY atual do Vault

---

Obrigado a todos que deram feedback sobre esse recurso e também às equipes que agiram rapidamente. Esperamos que a nova tela reflita melhor a realidade dos ganhos de um vault!

Produtor: [Worms](https://twitter.com/MarcoWorms), Revisores: [x48](https://twitter.com/x48_crypto), [Vany](https://twitter.com/vannny365), [ Dark Ghosty](https://github.com/DarkGhost7)