---
title: "Tout savoir sur le yCRV"
image:
  src: ./cover.jpg
  width: 900
  height: 608
date: '2022-11-09'
author: Yearn
translator:
---

![](image1.jpg?w=424&h=218)

## Qu'est ce que le yCRV

yCRV est le nouveau wrapper veCRV de Yearn, conçu pour tokeniser les différents avantages de la position veCRV offert par Yearn. Ce système est composé d'un [`base-token`](https://docs.yearn.finance/getting-started/products/ycrv/overview#base-token) appelé yCRV ainsi que de 3 jetons dérivés appelés [`activated tokens`](https://docs.yearn.finance/getting-started/products/ycrv/overview#activated-tokens).

### Base-token

Le yCRV est le base-token, qui ne comporte aucune récompense native, mais permet aux utilisateurs d'entrer facilement dans les autres jetons 'activated' qui le proposent.

Le nouveau yCRV peut être "mint" de deux manières :

- Verrouillez des CRV dans la position veCRV de Yearn (verrouillage permanent à sens unique).

*ou*

- Migrer à partir de jetons [yveCRV et yvBOOST](#comment-les-fonctionnalités-du-yveCRV-et-yvBOOST-ont-migrées-vers-le-yCRV).

Les deux opérations "mint" à un taux de 1:1. Les utilisateurs migrant depuis yvBOOST peuvent utiliser le zap sur [y.finance](https://y.finance/) pour "unwrap" efficacement leurs jetons en yveCRV et migrer ensuite vers le yCRV en une seule étape. Bien sûr, les utilisateurs peuvent également choisir d'acheter des yCRV à partir de la nouvelle pool sur Curve [ici](https://curve.fi/factory/192).

### 'Activated'-tokens

Yearn transmet tous les avantages de sa position veCRV aux utilisateurs de yCRV qui détiennent l'un de ses **'Activated'-tokens :**

- [**st-yCRV (Staking Rewards) :**](https://docs.yearn.finance/getting-started/products/ycrv/overview#staked-ycrv) [yVault](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) qui reçoit des frais d'administration et des pots-de-vin de provenant de CRV verrouillés.
- [**lp-yCRV (Liquidity Pool Rewards) :**](https://docs.yearn.finance/getting-started/products/ycrv/overview#lpd-ycrvcrv) yVault pour les jetons CRV/yCRV LP, autocompound les émissions et les frais.
- [**vl-yCRV (Curve Gauges Voting Power) :**](https://docs.yearn.finance/getting-started/products/ycrv/overview#voting-with-ycrv) Mécanisme de vote pour voter sur les jauges de Curve.

Les utilisateurs peuvent choisir de passer d'un 'Activated'-token à l'autre, à tout moment en fonction des avantages qu'ils souhaitent obtenir, à l'exception du vl-yCRV qui a une [restriction](https://docs.yearn.finance/getting-started/products/ycrv/overview#voting-with-ycrv) de verrouillage temporel variant de 14 à 28 jours.

![](image2.jpg?w=900&h=506)

## Staked yCRV

![](image3.jpg?w=499&h=199)

Le yCRV staké est conçu pour être une position optimisée en termes de rendement «définir et oublier» pour les utilisateurs de yCRV. La source de rendement provient de deux endroits principaux :

- **Frais d'administration :** Chaque semaine, les détenteurs de veCRV gagnent des "frais d'administration" hebdomadaires du protocole Curve. Le yCRV jalonné est l'endroit où 100 % des frais d'administration gagnés par la position veCRV de Yearn sont envoyés et composés automatiquement en plus de yCRV.
- **Pots-de-vin :** Pour tous les yCRV au sein de st-yCRV, 1 veCRV de pouvoir de vote sera utilisé pour voter en faveur de la jauge Curve qui optimise les revenus de pot-de-vin pour les utilisateurs de st-yCRV. Les pots-de-vin (ou revenus divers) collectés à partir de ces votes seront alloués en tant que rendement supplémentaire aux utilisateurs de st-yCRV.

En arrière plan, le st-yCRV est un yVault Yearn v2, permettant aux utilisateurs de s'asseoir, de se détendre et d'avoir leur jeton sous-jacent s'accumuler par une stratégie qui vend les 3CRV et certains pots-de-vin pour du yCRV.

## Le LP de yCRV/CRV

![](image4.jpg?w=463&h=201)

La "Liquidity Pool yCRV" fournit de la liquidité a la nouvelle pool CRV/yCRV de Curve, et les détenteurs de lp-yCRV reçoivent les frais et émissions de LP. Lorsque vous zappez sur ce jeton, en arrière plan, vous entrez dans une position LP sur la pool yCRV/CRV et déposez les jetons LP dans le lp-yCRV yVault.

Il s'agit également d'un yVault v2 avec une stratégie qui re-dépose tous les CRV générées dans la pool pour agrandir la position. Comme le st-yCRV, il est conçu pour fonctionner de manière autonome et ne plus avoir a s'en occuper.

## Voter avec le yCRV

![](image5.jpg?w=513&h=207)

Le vl-yCRV est la position avec laquelle les utilisateurs peuvent entrer et qui leur permet de voter sur les [jauges](https://resources.curve.fi/reward-gauges/understanding-gauges) de Curve.

**Ceci est actuellement en phase finale de développement, ce n'est pas encore tout a fait prêt.**

Avec cette position, les utilisateurs peuvent voter pour les jauges (pas pour les votes concernant la DAO).

Les utilisateurs  ne gagneront pas de frais hebdomadaires (admin fees) ou les pots-de-vin (bribes), et seront soumis à un verrouillage minimum de 14 jours (28 jours maximum). Une fois la période de verrouillage terminée, l'utilisateur est libre de se retirer vers le yCRV s'il le souhaite et de se déplacer librement dans/ou hors de l'écosystème yCRV.

Nous nous attendons à ce que ce système soit particulièrement utile pour les protocoles qui cherchent à augmenter les émissions des jauges Curve de leur pool sans s'engager dans un verrouillage de veCRV de 4 ans ou en soumettant à plusieurs reprises des bribes importants.

### Details des votes

- Les périodes de vote durent 14 jours.
- Les utilisateurs peuvent voter sur une seule jauge ou répartir leurs votes sur plusieurs jauges.
- Les utilisateurs doivent voter à chaque période. Les votes ne peuvent pas être reportés automatiquement d'une période à l'autre.
- Le vote est entièrement on-chain et n'est donc pas gratuit. Essayez de voter lorsque le réseau n'est pas trop encombré.
- Des votes peuvent être ajoutés tout au long de la semaine tant que le solde de l'utilisateur le permet.
- Une fois le vote effectué pour une jauge, ce ou ces votes ne peuvent pas être supprimés ou remplacés jusqu'à la période suivante.

#### Délégation de vote

- Chaque utilisateur de vl-yCRV peut choisir un délégué pour voter en son nom.
- Le but de la délégation est de permettre aux multisigs d'automatiser leurs activités de vote à chaque période, réduisant ainsi les votes manqués en raison de signatures lentes ou d'oublis.

#### Verrouillage

- Un verrouillage pour voter (vote lock) dure au minimum 1 période de vote (14 jours) et pas plus de 28 jours selon le moment où le vote a été mis en place.
- Chaque vote réactive le verrou d'un utilisateur pour le reste de la période en cours + la durée totale de la période suivante.
- Une fois le temps de déverrouillage expiré, les utilisateurs peuvent se retirer du vl-yCRV et se déplacer librement dans le système yCRV.

![](image6.jpg?w=900&h=367)

### Pots-de-vin (bribe) et incitations

- Avec le vl-yCRV, les utilisateurs renoncent au rendement des autres parties du système yCRV.
- Les utilisateurs de vl-yCRV ne collecteront pas de pots-de-vin (bribes) sur les jauges pour lesquelles ils votent.

## Comment les fonctionnalités du yveCRV et yvBOOST ont migrées vers le yCRV

Le yveCRV et yvBOOST sont maintenant obsolètes et les utilisateurs doivent réaliser une migration. Celle ci est disponible directement depuis le site web. La fonctionnalité de ces 2 wrappers a été intégrée dans le [st-yCRV](#staked-ycrv). Si vous recherchez les mêmes avantages, consultez le [guide](https://docs.yearn.finance/getting-started/products/ycrv/guide#how-to-migrate-from-yvecrv-andor-yvboost) pour en savoir plus.

![](image7.jpg?w=900&h=450)

## Adresses

- **yCRV:** [0xFCc5c47bE19d06BF83eB04298b026F81069ff65b](https://etherscan.io/token/0xFCc5c47bE19d06BF83eB04298b026F81069ff65b)
- **st-yCRV (vault):** [0x27B5739e22ad9033bcBf192059122d163b60349D](https://etherscan.io/token/0x27B5739e22ad9033bcBf192059122d163b60349D)
- **lp-yCRV (vault):** [0xc97232527B62eFb0D8ed38CF3EA103A6CcA4037e](https://etherscan.io/token/0xc97232527B62eFb0D8ed38CF3EA103A6CcA4037e)
- **vl-yCRV:** in audit
- **CRV/yCRV Curve Pool:** [0x453D92C7d4263201C69aACfaf589Ed14202d83a4](https://etherscan.io/token/0x453D92C7d4263201C69aACfaf589Ed14202d83a4)
- **ZapYCRV.vy (zapper):** [0x01D7f32B6E463c96c00575fA97B8224326C6A6B9](https://etherscan.io/token/0x01D7f32B6E463c96c00575fA97B8224326C6A6B9)
- **yCRV Interface:** [http://y.finance/](http://y.finance/)

## En savoir plus

- [yCRV Interface Guide](https://docs.yearn.finance/getting-started/products/ycrv/guide)
- [yCRV FAQ](https://docs.yearn.finance/getting-started/products/ycrv/faq)
