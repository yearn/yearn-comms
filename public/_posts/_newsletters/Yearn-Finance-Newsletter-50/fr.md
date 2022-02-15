---
title: "Yearn Finance Newsletter #50"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator: Cryptouf
---

### Semaine du 5 Decembre 2021

![](./cover.jpeg?w=576&h=288)

Bienvenue à la 50e édition de la Newsletter Yearn Finance. Notre objectif avec cette newsletter est de tenir la communauté Yearn, et plus généralement la communauté crypto, au courant des dernières nouvelles, y compris les lancements de produits, les changements de gouvernance et les mises à jour de l'écosystème. Si vous souhaitez en savoir plus sur Yearn Finance, suivez nos comptes [Twitter](https://twitter.com/iearnfinance) et [Medium](https://medium.com/iearn) officiels.

## Résumé

- Nouvelle UI chez Yearn
- Proposition de mise à jour de la Tokenomics du YFI
- Yearn Docs
- La YIP-64 n'a pas atteind le Quorum
- Yearn Snapshot Strategy
- Vaults chez Yearn
- Nouvelles de l’écosystème

## Nouvelle UI chez Yearn

![](./image2.jpg?w=512&h=512)

Nous avons reconstruit [yearn.finance](https://yearn.finance/) à partir de zéro avec des tonnes de commentaires de notre communauté. C'est en direct maintenant, alors faites-le faire un tour.

L'une des fonctionnalités les plus intéressantes (à notre avis) est la fonctionnalité Simulations. Pour déposer dans des coffres dans les versions précédentes de l'interface utilisateur, nous avons ajouté la prise en charge de Zapper afin, par exemple, que vous puissiez déposer dans un coffre 3CRV avec ETH ou n'importe quel jeton pris en charge par Zapper, ce qui est rapide et pratique et implique qu'un échange se produira dans votre dépôt. Quel est ce message « Simulation. » que vous pouvez demander ? Eh bien, cette étiquette "Simuler..." vérifie vos jetons d'entrée et avec l'API et Tenderly de Zapper, un service génial qui exécute avec impatience une simulation de votre transaction. Cette simulation calcule quelle serait la sortie exacte, comme un aperçu de votre dépôt. par exemple ETH>3crv.

Pourquoi est-ce utile et génial ? Eh bien, étant donné les protocoles impliqués et l'état dynamique de la chaîne, il est difficile de prédire une bonne estimation des jetons de coffre que vous pouvez recevoir. Votre glissement peut être plus important que prévu, ou votre chemin de jeton peut échouer et vous coûter de l'essence, etc. Cette simulation peut vous faire économiser de l'essence sur les dépôts ou les retraits.

Les retraits sont un autre domaine difficile à prévoir. Des simulations permettent de vérifier si vous pouvez retirer compte tenu des conditions du coffre, certaines sont plus liquides que d'autres en fonction des allocations de stratégies.

Si vous obtenez un message "Échec de la simulation..", il y a de fortes chances que si vous poursuivez la transaction, elle reviendra.

L'interface utilisateur v3 est nouvelle, donc plus de travail est fait pour améliorer cette UX pour qu'elle soit encore plus fluide.

Regardez sous le capot [ici](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f). Si vous êtes développeur, contribuez [ici](https://github.com/yearn/yearn-finance-v3).

## Proposition de mise à jour de la Tokenomics du YFI

Un sondage sur snapshot est en court pour évaluer le soutien aux propositions de la communauté sur les tokenomiques YFI.

Il existe actuellement 5 options pour le vote, les noms de travail étant ySplit, veYFI, xYFI, BurnKeYs et Status Quo. La proposition [ySplit](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) suggère de diviser le jeton YFI en 10 000 à 1 000 000 pour lutter contre la partialité des unités. La proposition [veYFI](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit) suggère de verrouiller YFI pendant une période de temps donnée afin de recevoir des droits de gouvernance qui dictent les coffres où les revenus de trésorerie devraient aller. [xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit) suggère la création d'un coffre-fort de jalonnement YFI où les revenus de trésorerie excédentaires doivent être envoyés. [BurnKeYs](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit) demande que la fonction menthe du jeton YFI soit définitivement désactivée, plafonnant ainsi l'offre à 36 666 jetons. Le statu quo laisserait le tokenomics YFI dans son état actuel et informerait les détenteurs et les investisseurs potentiels des avantages.

Votez [la page snapshot](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea). Merci à tous les membres de la communauté qui ont contribué. Une mise à jour du groupe de travail, haïku inclus, peut être trouvée ici.

## Yearn Docs

Il y a plusieurs mois, les contributeurs de Yearn ont entrepris de réécrire nos documents pour les rendre conviviaux et accessibles.

Les documents entièrement actualisés sont là pour guider les utilisateurs, les développeurs, les partenaires et pour nourrir votre curiosité avec de nombreuses entrées inédites.

Découvrez les nouveaux documents [ici](https://docs.yearn.finance/).

## La YIP-64 n'a pas atteind le Quorum

![](./image3.jpg?w=1100&h=759)

YIP-64 : Ajuster les frais sur les yVaults non stables est entré dans la phase de vote et s'est terminé par un vote majoritaire contre l'ajustement des frais.

Consultez la proposition [ici](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2).

## Yearn délègue 23 millions de veCRV à Convexe

![](./image4.jpg?w=873&h=615)

Yearn a délégué 23 millions de veCRV à Convex Finance à l'aide de la nouvelle fonctionnalité native de délégation de boost de Curve. Cela augmentera les rendements des pools d'usine pour nos deux DAO. Cela n'affecte pas les pools réguliers, les frais ou le vote.

Déléguer des veCRV inutilisés [ici](https://convex-boost-delegation.vercel.app/) augmente les récompenses d'usine pour tous les participants Convex, cela contribue encore à augmenter le rendement pour Convex et Yearn. Notre opération de délégation se trouve [ici](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f).

## Yearn Snapshot Strategy

En prévision de plusieurs votes importants, la stratégie de Yearn's Snapshot a été rafraîchie.

Il vous permet de voter avec vos YFI productifs, à savoir les YFI dans votre portefeuille, tous les coffres-forts Yearn v2, Bancor, Balancer v2, Uniswap v2, Sushi (incl. MasterChef), MakerDAO, Unit, Instadapp (incl. MakerDAO).

Le contrat peut être trouvé ici et le déploiement peut être trouvé [ici](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code).

## Vaults chez Yearn

Vous pouvez lire une description détaillée des stratégies pour tous nos yVaults actifs [ici](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Nouvelles de l’écosystème

[Securely use your YFI on Qredo Network’s platform](https://twitter.com/QredoNetwork/status/1461031928564436994)

[Listen to Into the Byte Code with tracheopteryx](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet now supports Yearn’s beta vaults on Fantom](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract enters top five fastest growing protocols on Polygon](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[Watch the Coordinape onboarding video](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[Checkout Yearn on Argent’s L2 wallet with fees as low as $2](https://twitter.com/argentHQ/status/1468934923264401419)

[Tesseract vaults have increased their deposit limits](https://twitter.com/tesseract_fi/status/1468217220966801413)

[Get a discount on ETHDubai tickets by holding $yvBOOST or $yvYFI](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[See Zapper’s spotlight on Yearn Simulations](https://twitter.com/zapper_fi/status/1466447565302517765)

[Listen in to Facu’s insights on Yearn with the On the Ledger podcast](https://twitter.com/Ledger/status/1465678701635506185)

[YFI is now spendable in Flexa’s app](https://twitter.com/FlexaHQ/status/1469092114038415364)
