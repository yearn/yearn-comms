---
layout: post
title: "Yearn Finance Newsletter #55"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1152
  height: 576
author: Yearn
date: '2022-01-26'
translator: Cryptouf
---

### Semaine du 23 Janvier, 2022

![](./image1.jpg?w=1100&h=554)

Bienvenue à la 55e édition de la Newsletter Yearn Finance. Notre objectif avec cette newsletter est de tenir la communauté Yearn, et plus généralement la communauté crypto, au courant des dernières nouvelles, y compris les lancements de produits, les changements de gouvernance et les mises à jour de l'écosystème. Si vous souhaitez en savoir plus sur Yearn Finance, suivez nos comptes [Twitter](https://twitter.com/iearnfinance) et [Medium](https://medium.com/iearn) officiels.

## Résumé

- État des vaults sur Fantom
- Plein phare sur l'écosystème Fantom - Yearn
- Mises à jour de Yearn Web
- Yearn Finance expliqué
- Vaults chez Yearn
- Nouvelles de l'écosystème

# État des vaults sur Fantom

![](./image2.jpg?w=674&h=680)

Avec la montée en puissance du nouveau projet d'Andre Cronje & Daniele Sesta, Solidly ve(3,3), les attaques vampires (vampire attacks) ont débarquées sur Fantom pour que de nouveaux projets beneficent du Airdrop de Solidly et se retrouve dans le Top 20 des projets avec le plus de TVL sur Fantom.

Pour en profiter, vous pouvez déposer vos avoirs dans un coffre Yeanrn [yearn.finance](https://yearn.finance/#/home). Yearn offre le meilleur rendement en utilisant 0xDAO, veDAO, Scream, Curve, Beets, Tarot et d’autres. Nos coffres sur Fantom ont des stratégies pour chacun de ces protocoles, et passent de l’une a l’autre pour toujours offrir la plus rentable et ils réalisent des bénéfices toutes les 30 minutes. Yearn sera encore là meme après que les vampires soient partis ailleurs et fasse partie de l’histoire.

Quelle est votre stratégie ? Déposer aujourd'hui sur [yearn.finance/vaults](https://yearn.finance/vaults).

# Plein phare sur l'écosystème Fantom - Yearn

![](./image3.jpg?w=1456&h=819)

Le contributeur Yearn, Tracheopteryx, donne un bref aperçu de Yearn et de notre mission, en ce concentrant sur les utilisateurs quotidiens, les partenaires et les constructeurs.

Les principaux produits de Yearn sont les coffres, la banque de fer, les laboratoires et les jetons YFI/WOOFY. Les origines du YFI sont explorées plus en détail et Tracheopteryx explique pourquoi Fantom est la première "sidechain" sur laquelle Yearn a choisi de se déployer.

L'interview se termine en mentionnant les prochaines mises à niveau du jeton YFI, telles que les rachats (buybacks) distribués aux détenteurs, xYFI, veYFI et les jauges de coffre.

Découvrez le nouvel article complet [ici](https://fantom.foundation/blog/fantom-ecosystem-spotlight-yearn/?__cf_chl_rt_tk=rdrT2KHoFbjTe1yyUOmIDA92AeTmrMPKtQW5yT18mwk-1643234302-0-gaNycGzNCH0).

# Mises à jour de Yearn Web

![](./image4.jpg?w=900&h=734)

La mise à jour du Web Yearn de cette semaine comprend l’ajout d’ info-bulles lors du survol des APY à l'interface utilisateur et un correctif anti-poussière pour les retraits des coffres.

Bientôt des améliorations concernant la sécurité, avec une description détaillée, une interface utilisateur/UX multi-chaînes améliorée et la prise en charge d'une nouvelle chaîne.

Découvrez la nouvelle mise à jour complète [ici](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7?r=2y79e&utm_campaign=post&utm_medium=web).

# Yearn Finance expliqué

![](./image5.jpg?w=1000&h=531)

Les coffres Yearn produisent des jetons IOU construits par des stratèges qui entreprennent un processus de vérification approfondi pour s'assurer que les utilisateurs de Yearn reçoivent le meilleur rendement ajusté au risque dans l'écosystème crypto.

Prenons un exemple: Une stratégie précédemment utilisée chez Yearn dans la v1 du Ethereum yVault : lorsqu'un utilisateur dépose de l'ETH, l'ETH est ensuite prêté sur MakerDAO sous forme de garantie, qui est utilisé pour emprunter du DAI qui est ensuite déposé dans le DAI yVault.

Certaines questions que les utilisateurs peuvent se pose souvent sont "Comment/quand Yearn déplace-t-il les fonds à l'intérieur du coffre et facture-t-il des frais ?" et "Comment Yearn garantit-il une stratégie pour toujours générer des jetons au lieu de les perdre ?". L'une des fonctions clés d'une stratégie est appelée «récolte». Lorsque cette fonction est appelée, elle déclenche un processus de rééquilibrage où le profit est récuperé et réinvesti dans la stratégie. Les stratèges utilisent également un certain nombre d'outils pour surveiller les données on-chain afin de garantir la santé de la stratégie. L'un de ces outils est Yearn Watch, qui propose une belle interface utilisateur avec de nombreuses mesures clés.

Yearn et Keep3r ont en outre une forte synergie dans l'automatisation des tâches nécessaires aux coffres pour maintenir leurs performances. Afin de construire des stratégies, vous avez besoin d'une bonne compréhension de Vyper (pour yVaults) et de Solidity (pour les stratégies). Les exigences de base pour devenir un stratège sont les suivantes : connaissances de l'écosystème de la blockchain dans laquel vous voulez vous déploierez, qui peuvent être acquises en effectuant des recherches approfondies sur la tokenomics et la documentation de tous les jetons utilisés dans la stratégie elle-même, des connaissances en programmation Solidity similaires à l'achèvement du niveau 4 sur CryptoZombies, et savoir comment utiliser git, eth-brownie et ganache.

Après avoir compris les bases des outils ci-dessus, vous êtes prêt à copier notre modèle de stratégie ! Les fonctions que vous devriez commencer à modifier dans ce modèle afin de créer votre propre première stratégie sont prepareReturn, adjustPosition et liquidatePositon. Vous pouvez trouver le modèle de stratégie [ici](https://github.com/yearn/brownie-strategy-mix).

Merci à MarcoWorms pour cet article qui peut être trouvé [ici](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432).

# Vaults chez Yearn

Vous pouvez trouver une description détaillée des stratégies de tous nos yVaults actifs [ici](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Nouvelles de l'écosystème

[Deposit directly into Yearn vaults with the Ambire Wallet’s new integration](https://twitter.com/AmbireWallet/status/1483087593285820416)

[Use Yearn vaults on Shapeshift DAO](https://twitter.com/ShapeShift_io/status/1484599573289086984)

[New updates on Tesseract Finance’s collaboration with VESQ](https://twitter.com/tesseract_fi/status/1483484524143128578)

[Yearn has become the number 1 aggregator by TVL on Fantom](https://twitter.com/vannny365/status/1484385291947368448)

[Check out ApeFramework made with the help of Yearn contributors](https://twitter.com/ApeFramework)

[Read this short overview of Yearn and its metrics](https://twitter.com/fuuurma/status/1484503576076599298)
