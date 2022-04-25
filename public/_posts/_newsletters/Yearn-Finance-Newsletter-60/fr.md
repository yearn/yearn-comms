---
layout: post
title: "Yearn Finance Newsletter #60"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-04-13'
translator: Cryptouf
---

### Semaine du 11 Avril, 2022

![](./image1.jpg?w=900&h=453)

Bienvenue à la 60e édition de la Newsletter Yearn Finance. Notre objectif avec cette newsletter est de tenir la communauté Yearn, et plus généralement la communauté crypto, au courant des dernières nouvelles, y compris les lancements de produits, les changements de gouvernance et les mises à jour de l’écosystème. Si vous souhaitez en savoir plus sur Yearn Finance, suivez nos comptes [Twitter](https://twitter.com/iearnfinance) et [Medium](https://medium.com/iearn) officiels.

## Summary

- Yearning pour Yearn
- La standardisation des vaults
- Comment le Web3 permet de proposer un Yearn non censurée
- Comment les Strats yVault naissent
- Conseils pour les nouveaux contributeurs dans DAOs
- Vaults chez Yearn 
- Nouvelles de l’écosystème

# Yearning pour Yearn

![](./image2.jpg?w=1000&h=563)

Un rapport premium de Messari sur Yearn est désormais disponible gratuitement. Disponible seulement pour les abonnés payants en novembre, l'article contient une mine de données et d'explications.

Des extraits de l'article déclarent: "Nous connaissons tous Yearn. C'est l'agrégateur de rendement set-it-and-forget-it (déposez et oubliez) fonctionnant au-dessus des protocoles générateurs de rendement de la DeFi comme Compound, Aave, Curve et Convex. Les utilisateurs peuvent passivement générer des interets. Au fils du temps le protocole est devenu synonyme de rendement et s'est forgé une réputation dans l'industrie en tant que principale source de rendement avec un risque minimisé… Produit phare utilisé par la plupart des utilisateurs, les yVaults représente 67 % de la TVL de Yearn.... ».

Yearn est dispo sur Fantom et Arbitrum. Quelle est la prochaine étape ?

Vous pouvez le consulter sur [messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn).

# La standardisation des vaults

![](./image3.jpg?w=900&h=577)

Vous avez entendu parler des ERC-20, ERC-721 et ERC-1155. Bientôt, vous connaîtrez les ERC-4626. La norme Tokenized Vault (ERC-4626) est définitive. Et la grande standardisation des vaults commence maintenant.

Voici un bref résumé de ce que sont les ERC-4626 : les jetons à rendement (Yield-bearing token) sont un gâchis. Les agrégateurs de rendement, les vaults, les marchés de prêt et les jetons de rendement natifs (yield tokens) comme $xSUSHI sont souvent mis utilisés avec de légères variations. Pour créer une seule application utilisant ce genre de jetons, vous devez utiliser des dizaines d'adaptateurs complexes et sujets aux erreurs et capable de gérer chaque variation.

ERC-4626 range tout cela au placard. C'est la composabilité à son paroxysme. Créez une application au-dessus d'un vault ERC-4626, et cela fonctionnera pour tous les autres jetons de ce type.

L'utilisation des ERC-4626 par Yearn V3 était inévitable. Nos membres travaillent déjà dur pour mettre en œuvre la norme pour les yVaults V3 de Yearn. Les développeurs d'Alchemix, Balancer, Rari Capital, Fei Protocol, Yield Protocol, OpenZeppelin et plus encore sont également sur le coup. Un jour, nous verrons peut être un onglet ERC-4626 sur Etherscan, soyons fous ! En un mot, l'ERC-4626 sera le choix n'1 pour tout type de jeton portant intérêt… des Yearn Vaults aux dépôts sur AAVE, en passant par les pools Balancer.

Prêt à rejoindre la normalisation des Vaults ? Consultez le fil de discussion de Joey Santoro [ici](https://twitter.com/joey__santoro/status/1504603906726240258) pour plus de détails.

Le futur est composable.

Vous voulez plus de code ? Découvrez [cette démo ERC-4626 Vyper 0.3.2 ](https://github.com/fubuloubu/ERC4626) par les contributeurs fubuloubu, banteg, transmissions11 et Joey Santoro.

Retrouvez un article de CoinDesk sur les ERC-4626 [ici](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626 -token-standard-adoption/).

# Comment le Web3 permet de proposer un Yearn non censurée

![](./image4.jpg?w=900&h=451)

La vision de Web3 est un Internet (et un système financier) qui n'est jamais en panne, non censurable et accessible à tous.

Les blockchains et l'auto-hébergement rendent cela possible. Vous voulez savoir comment utiliser Yearn, Uniswap et d'autres applications Web3 sans aller directement sur leurs sites Web ? Dans le paradigme Web2, si un site Web tombe en panne, les utilisateurs n'ont plus aucun acces. Avec le Web3, un service est toujours disponible pour toute personne disposant d'une connexion Internet (en supposant que la blockchain sous-jacente soit encore en ligne).

Le Web3 étant open-source, vous pouvez utiliser Yearn, Uniswap et d'autres services Web3 en téléchargeant leurs fichiers et en auto-hébergant leurs sites Web directement sur votre ordinateur. Aucun serveur tiers n'est nécessaire !

Pour auto-héberger un site, tout ce dont vous avez besoin est d'un ordinateur (Windows, Mac ou Linux) et un logiciel spécifique. Une fois que vous tout est configuré, vous pouvez utiliser Yearn et d'autres services directement depuis votre navigateur sans avoir aller sur le site des projets et utiliser leurs URL.

Cliquez [ici](https://medium.com/iearn/self-hosting-web3-services-299306b706ee) pour tuer l'intermédiaire Web2 et faire parti de la grande vision du Web3 et découvrir l'article de MarcoWorms.

# Comment les Strats yVault naissent

![](./image5.jpg?w=900&h=650)

Les stratégies sont l'épine dorsale de Yearn, chaque yVault contient plusieurs de ces pièces mobiles. Pour permettre à nos utilisateurs d'obtenir le meilleur rendement ajusté au risque de la DeFi, nous devons suivre l'évolution constante de l'écosystème et développer de nouvelles stratégies. Vous trouverez ci-dessus un guide sur la façon dont les nouvelles stratégies sont approuvées pour pouvoir être utilisées.

Consultez [cet article](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) de MarcoWorms, pour plus d'informations sur l'approbation des stratégies.

# Conseils pour les nouveaux contributeurs dans DAOs

![](./image6.jpg?w=900&h=473)

La culture de Yearn est globale, conviviale et composée de plusieurs builders, collaborateurs et autodidactes. Bien que le coté financier reste une part importante dans le choix de rejoindre une DAO, rejoindre la DAO Yearn est également une expérience enrichissante qui permet de travailler dans un espace nouveau et en constante évolution.

Dans les DAOs comme celle de Yearn, vous pouvez devenir un actionnaire principal en assumant la responsabilité des résultats et en étant habilité à prendre des décisions qui mèneront à ces résultats.

Voici quelques conseils de divers contributeurs de Yearn aux nouveaux membres :

Tracheopteryx, l'un de nos membres les plus impliqué dans la gouvernance, déclare : "Faites le travail que vous aimez, dans lequel vous êtes le meilleur, pour lequel vous pouvez être payé, tout en gardant à l'esprit les besoins de la DAO". De plus, Storming0x, qui se concentre sur la sécurité et le développement du protocole, déclare : « Impliquez-vous, ne vous sentez pas mal de ne pas tout comprendre ou de poser des questions. Beaucoup de gens sont là pour aider les nouveaux arrivants, et nous avons notre processus d'intégration est bien meilleur maintenant ».

Consultez l'article complet [ici](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d) pour découvrir d'autres conseils.

Nous vous invitons à vous engager, à donner votre avis et à participer à la communauté en nous rejoignant sur [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), ou [Github](http://github.com/yearn). Venez construire avec nous.

# Vaults chez Yearn

Vous pouvez trouver une description détaillée des stratégies de tous nos yVaults actifs [ici](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Nouvelles de l’écosystème

[MAI vaults to leverage Yearn strategies at 0% interest are now possible on Fantom](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[A new yearn.watch site is under development](https://watch.major.tax/)

[Read storming0x’s short thoughts on Yearn in a YFI Boarding School interview](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Tips on security from a Yearn contributor](https://twitter.com/storming0x/status/1509769575021178886)

[Check out the new coordinape update](https://twitter.com/coordinape/status/1512247042806005763)
