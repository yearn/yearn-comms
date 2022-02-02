---
title:  "Recompensas De Mineração de Liquidez v2"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: JKtranslator
---

# Recompensas De Mineração de Liquidez v2

Conceito e arquitetura por [pods.finance](https://www.pods.finance/)

[Contrato de recompensas de opções de LM](https://twitter.com/AndreCronjeTech/status/1426580528510251008)

## **História**

Mineração de Liquidez (Liquidity Mining)/Recompensas/Incentivos, como você quiser chamá-los, são inatamente parte do cripto. Mesmo a prova de trabalho (mineração) está fornecendo algo em troca de recompensas (na prova de trabalho, fornecendo segurança [ou melhor, eletricidade] para as redes criptográficas)

O primeiro (que eu saiba) a fornecer recompensas por liquidez foi [synthetix.io](https://synthetix.io/), isso começou com o pool `sETH/ETH`, que eventualmente mudou para o pool` sUSD` [curve.fi](https://curve.fi/). Se você forneceu liquidez a esses pools, foi recompensado com SNX (o token nativo de Synthetix).

O lendário contrato [StakingRewards](https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol) foi originalmente desenvolvido em parceria com Anton de [1inch.exchange](https://1inch.exchange/). Esse contrato se tornou a base para o que é a mineração de liquidez como a conhecemos hoje.

## **Descrição do Problema**

À medida que a mineração de liquidez crescia, algumas falhas, não não incontornáveis, tornaram-se aparentes. Acredito que as duas seguintes sejam as mais preocupantes;

- Consumidores de liquidez (ou lealdade), também conhecido como "viscosidade"
- Fidelidade ao token, ou despejo (dumping) oportunista

A liquidez desaparece rapidamente quando os incentivos cessam, e programas agressivos de liquidez podem muitas vezes prejudicar o preço do token, o que, embora eu acredite que este último não seja necessariamente uma coisa ruim (uma vez que depende inteiramente do modelo econômico "tokenomics" / propósito) mas, da percepção do público, é claro, quando o preço cai, um projeto é uma farsa.

## **Exemplo de problema**

Eu acredito que, em sua essência, o problema é o problema do "algo por nada". Se você receber algo em troca de nada, simplesmente embolsará seus lucros. Vamos tomar [curve.fi](https://curve.fi/) como um exemplo prático, se você fornecer liquidez na forma de DAI / USDC / USDT para o 3pool, você receberá recompensas de CRV. Para o propósito deste exemplo, vamos supor que o provedor de liquidez é um consumidor de liquidez, então ele está apenas interessado em receber CRV e vendê-lo imediatamente por mais DAI / USDC / USDT.

A razão para isso, é que eles receberam "algo" por praticamente "nada". Forneça liquidez, seja recompensado, simples assim.

## **Introdução Rápida às Opções**

Tentando manter isso simples, existem duas opções, um `PUT` (o direito de vender) e um `CALL` (o direito de comprar). Nesse caso, você pode pensar em `PUT` como uma venda de mercado e em `CALL` como uma compra de mercado. Portanto, continuando a usar o CRV, para fins de simplicidade, digamos que o CRV está sendo negociado a $2. Uma opção `CALL` com um `preço de exercício` de $2, me permitiria comprar CRV a $2, uma opção `PUT` com um `preço de exercício` de $2, me permitiria vender CRV a $2.

No restante deste artigo, vamos nos concentrar apenas no CALL, o direito de compra. Portanto, uma opção tem 3 propriedades básicas;

- O que você está comprando? (Em nosso exemplo CRV)
- Qual é o `preço de exercício`? (também conhecido como, quanto você está pagando por isso? Em nosso exemplo $2 ~ ou 2 DAI)
- Quando é a `expiração`? (normalmente alguma data futura, em nosso exemplo, a expiração era `data e hora atual/agora`)

## **Mineração de Liquidez como Opções**

Seguindo nosso exemplo [curve.fi](https://curve.fi/), se você fornecer liquidez e reivindicar CRV como recompensa, isso pode ser visto como o exercício de uma opção CRV CALL com `preço de exercício` $0, e `expiração` de agora. Quando você começa a pensar em termos de opções de CALL, de repente isso dá ao projeto muito mais poder, por exemplo, agora um projeto poderia oferecer ele como;

- preço de exercício = à vista - 50%
- expiração = data atual + 1 mês

Em seu nível mais básico, poderíamos simplesmente dizer, `expiração` = agora `preço de exercício` = preço de mercado - 50%, o que isso significa? Digamos que o mineirador de liquidez extraiu 1000 CRV e, em vez de simplesmente receber a opção CRV CALL no `preço de exercício` $0 e `expiração` agora (1000 tokens de graça), agora eles receberiam o direito de comprar 1000 CRV a$ 1000. Mesmo se eles forem um consumidor de liquidez, eles ainda seriam incentivados a fazer isso, uma vez que ainda têm $1.000 de lucro (valor de negociação 1.000 CRV @ $2 = $ 2.000 - compra de $1.000).

Os "lucros" ($ 1000 no exemplo acima), agora podem ser distribuídos aos detentores de veCRV ou ir para a fundação, tesouraria DAO, etc. Esses fundos poderiam até mesmo ser usados para ser market maker e fornecer liquidez adicional.

Agora, vamos dar um passo adiante e adicionar um vencimento futuro, digamos 1 mês, agora para fins de argumentação, todos que estavam recebendo liquidez estavam reivindicando o token e o despejando no mercado, então daqui 1 mês o preço é $1, mas o preço da opção CALL também é $1, portanto, neste ponto, não há mais razão para o "dumper" reivindicar a opção, uma vez que não teria lucro adicional. Portanto, isso significa ainda que ele estabeleceu um preço mínimo adicional para os tokens recebidos. Como esses tokens simplesmente não serão reivindicados (podem até mesmo ser enviados de volta para o DAO)

## **Conclusão**

Fazer algumas modificações simples no contrato atual da StakingRewards nos permite adicionar a funcionalidade acima, enquanto mantemos a mesma interface e experiência do usuário.

Código de protótipo disponível [aqui](https://gist.github.com/andrecronje/6c3da8b294488001adeda528f70bc301)

Mudar para Opções de Mineração de Liquidez em vez da tradicional Mineração de Liquidez significa;

- Diminuição de Consumidores de Liquidez
- Diminuir a pressão de venda
- Preço mínimo natural (twap - desconto% ao longo da época)
- Receita em taxas adicionais para o DAO/detentores de token

## **Créditos**

Obrigado à equipe de [pods.finance](https://www.pods.finance/), @josephdelong e [sushi.com](https://sushi.com/) por criar este conceito e compartilhá-lo comigo
