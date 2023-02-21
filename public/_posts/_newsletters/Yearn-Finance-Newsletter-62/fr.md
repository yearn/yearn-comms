---
layout: post
title: "Yearn Finance Newsletter #62"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 1000
  height: 500
author: Yearn
date: '2022-05-23'
translator: Cryptouf
---

### Semaine du 23 Mai, 2022

![](./cover.jpg?w=1000&h=500)

Bienvenue à la 62e édition de la Newsletter Yearn Finance. Notre objectif avec cette newsletter est de tenir la communauté Yearn, et plus généralement la communauté crypto, au courant des dernières nouvelles, y compris les lancements de produits, les changements de gouvernance et les mises à jour de l’écosystème. Si vous souhaitez en savoir plus sur Yearn Finance, suivez nos comptes [Twitter](https://twitter.com/iearnfinance) et [Medium](https://medium.com/iearn) officiels.

## Résumé

- La V3 des Vaults arrive
- Nouveau site  Yearn Watch
- La Allowlist de Yearn
- People of Yearn: MarcoWorms
- Yearn veut acheter vos YFI
- Vaults chez Yearn 
- Nouvelles de l’écosystème

## La V3 des Vaults arrive

![](./image2.jpg?w=900&h=429)

La v3 des nos vaults est une refonte complète de nos systèmes. Voici six des principales fonctionnalités que nous allons déployer.

Tranches juniors : Yearn s'est toujours engagé à utiliser des coffres "up only" - des coffres qui font tout leur possible pour éviter les hacks ou les pertes. Le compromis pour une plus grande sécurité/sûreté est souvent des rendements plus faibles. La v3 introduira des "tranches juniors", pour offrir des vaults avec des risques un peu plus élevés et plus rémunérateurs.

Solidity : Les v2 Vaults sont dévelopés avec le language Vyper. La v3 utilisera Solidity. Cela signifie que Yearn peut exploiter une base de développeurs beaucoup plus large (~ 69 % du code DeFi est écrit dans Solidity contre ~ 10 % pour Vyper). Mieux encore, les fans de Vyper peuvent toujours l'utiliser avec les modules v3.

Jetons de coffre normalisés avec ERC-4626 : les contributeurs de Yearn ont aidé à créer une nouvelle norme de jeton pour Ethereum : le ERC-4626. Les jetons porteurs de rendement de la v3 seront entièrement composables avec tous les autres projets basés sur les jetons ERC-4626.

Gaz optimisé : les stratèges utilisent ySwaps pour effectuer des échanges de jetons dans les vaults. De nombreuses améliorations du code rendront ce processus et d'autres processus radicalement plus économes en gaz, ce qui devrait augmenter les APY de tout nos vaults.

Stratégies flexibles : plus de stratégies avec une meilleure modularité rendront les vaults plus flexibles. Ils ne sont plus limités à 20 stratégies par vault et les partenaires pourront même partager le contrôle de la gestion des vaults. Nous avons hâte de voir comment d'autres protocoles vont utiliser cette v3.

Automatisation : en tirant parti du réseau Keep3r, Yearn v3 automatisera presque tous les aspects de la gestion des vaults. La v3 permettra l'automatisation à 100 % des vaults. Cela permettra ainsi une meilleure protection MEV avec des récoltes en temps réel.

La mise à niveau v3 est la plus importante de l'histoire de Yearn.

Pour reprendre les mots de Skeletor Spaceman, "Nous voulons aller vite et ne pas tout casser". La v3 est la façon dont Yearn va y parvenir. 

En savoir plus sur les v3 Vaults [ici](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0).

Nous vous invitons à vous engager, à donner votre avis et à participer à la communauté Yearn en nous rejoignant sur [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), ou [Github](http://github.com/yearn). Venez construire avec nous.

## Nouveau site  Yearn Watch

![](./image3.jpg?w=900&h=705)

Le nouveau site [yearn.watch](https://yearn.watch/) a été mis en ligne et propose de nombreuses mises à jour.

Certaines de ces mises à niveau incluent des temps de chargement ultra rapides, de nouveaux skins et améliorations UI/UX à gogo, et des alertes.

Une quantité importante de détails a en outre été ajoutée au nouveau site, avec de nouvelles visualisations et plus encore. Et ce n'est pas fini, le site a été en main par une nouvelle équipe de contributeurs.

## La Allowlist de Yearn

![](./image4.jpg?w=900&h=429)

Pour rendre le site Web Yearn encore plus sécurisé, une nouvelle fonctionnalité a récemment été introduite. C'est la liste blanche. Cela permet à toutes les transactions effectuées via le site Web/SDK a être validées par un contrat on-chain qui conserve un enregistrement de toutes les données d'appel valides que le site Web peut produire.

Cela empêche le site Web d'être vulnérable à diverses attaques de type "man-in-the-middle" lorsque des données sont fournies au site Web, que ce soit via l'API de Zapper / 0x ou celle de Yearn. Par exemple, si l'API de Yearn renvoie une liste de vaults avec des adresses malveillantes, avec l'intention que les utilisateurs approuvent l'un d'entre eux lorsqu'ils tentent de déposer, la liste blanche empêchera la transaction d'être effectuée.

Cliquez [ici](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4) pour en savoir.

## People of Yearn: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms est contributeur chez Yearn. Il est impliqué dans le marketing et écrit du contenu que vous pouvez retrouver sur cette newsletter et sur Twitter.

Avant de rejoindre Yearn, Marco s'adonnait à la cryptographie et en avait assez de la fintech et du modèle VC. Il a découvert Yearn après avoir entendu parler de la DeFi et avoir lu notre manifeste "The Blue Pill".

Chez Yearn, Marco passe généralement sa journée a collaborer ou a écrire de nouveaux articles. S'il n'écrit pas d'articles.

Découvrez [l'interview complète](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e).

## Yearn veut acheter vos YFI

![](./image6.jpg?w=900&h=450)

Nous avons entendu dire que certaines personnes vendent.

Super, parce que nous achetons.

Le $YFI est essentiel à la construction de Yearn. Cela fait partie de notre stratégie de rémunération et de rétention pour attirer et garder les meilleurs contributeurs de l'écosystème DeFi pour travailler avec Yearn, aligner leurs incitations avec le protocole et leur donner du "skin in the game". Fondamentalement, nous aimons notre jeton.

Notre tirelire de rachat (buyback piggybank) sera régulièrement alimentée en DAI et est toujours ouverte pour racheter votre YFI au prix actuel, en utilisant un oracle Chainlink. Les statistiques sont maintenant dispos en temps réel pour plus de transparence sur l'activité de rachat. Décentralisation avant tout !

[https://yearn.clinic](https://yearn.clinic/) et [https://buyback.yearn.finance/](https://buyback.yearn.finance/) pour nous vendre vos YFI.

# Vaults chez Yearn

Vous pouvez trouver une description détaillée des stratégies de tous nos yVaults actifs [ici](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Nouvelles de l’écosystème

[YFI has been privacy enabled by Incognito Chain](https://twitter.com/IncognitoChain/status/1527045614273544200)

[Sturdy Finance is offering the highest APYs on USDC across all chains, powered by Yearn](https://twitter.com/pgpsam/status/1526301386173992961)

[Bancor v3 strategies are coming soon to Yearn](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap announces Iron Fleet in collaboration with Yearn](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Check out a Yearn workshop from Skeleter Spaceman](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Yearn pools are now individually tracked on DefiLlama](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[A new Lido stETH vault has gone live for the new concentrated Curve pool](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Check out the recording of a Coordinape discussion](https://twitter.com/YFI_interns/status/1525159821321830403)
