---
title: "Yearn Finance expliqué : Qu'est ce que sont les vaults et les stratégies ?"
image:
  src: ./image3.jpg
  width: 1024
  height: 597
date: '2022-01-18'
author: Marco_Worms
translator: Cryptouf
---

![](./image1.jpg?w=1400&h=707)\
*Un exemple simple d'un yVault sur Ethereum*

[Yearn Finance](http://yearn.finance/) est une suite de produits de la finance décentralisée (DeFi) qui permet de générer du rendement, l'agrégation des prêts, et plus encore sur la blockchain. Le protocole est maintenu par divers développeurs indépendants et est régi par les détenteurs du jeton $YFI.

Le produit de base de Yearn est le **yVault**, qui permet de générer des rendements automatisés avec de nombreux actifs cryptographiques différents, chacun piloté par une ou plusieurs **Stratégies**. La conception d'un yVault est ouverte, ce qui signifie que d'autres protocoles peuvent construire et innover au-dessus de Yearn, [comme c'est le cas avec la collaboration avec Abracadabra](https://twitter.com/MarcoWorms/status/1483223651684081670).

# Yearn Vaults (yVaults)

Le moyen le plus simple de nommer un coffre Yearn est: **yVault**. Dans la version actuelle de Yearn (v2), voici les caractéristiques d'un yVault :

- **Le jeton que vous déposez dans un yVault est le jeton avec lequel vous recevrez les intérêts**, toujours automatiquement composé dans le yVault
- **Un yVault peut avoir plusieurs stratégies actives en même temps.** Un yVault peut modifier l'allocation du capital de ses stratégies lorsqu'il le juge nécessaire
- Contrairement à de nombreux autres agrégateurs de rendement ** il n'y a pas de frais de dépôt/retrait ** facturés à l'utilisateur
- **yVaults utilise le standard norme ERC20**, cela signifie qu'ils (les jetons) peuvent être facilement déplacés entre les portefeuilles et les marchés car ils peuvent être utilisés par n'importe quelle application qui gère les jetons erc20 (comme les échanges décentralisés)

## Stratégies et stratèges

Les **stratèges** sont des personnes qui élaborent une ou plusieurs **stratégies** sous-jacentes pour les yVaults

[N'importe qui peut créer une stratégie](https://docs.yearn.finance/developers/v2/getting-started), mais pour l'ajouter à un yVault, le stratège doit passer la stratégie par le [processus de vérification de la stratégie](https://docs.yearn.finance/developers/v2/getting-started#overview-of-our-vetting-process) qui comprend la vérification du concept, l'examen du code, l'examen de la sécurité et des tests sur le mainet. 

![](./image2.jpg?w=1000&h=531)\
*Processus de vérification de la stratégie*

Pour leurs efforts, les stratèges sont récompensés en recevant une partie de la commission de performance de la stratégie.

- Jusqu'à 10 % des commissions de rendement générées par une stratégie spécifique (commission de performance) reviennent au stratège
- 10% des commissions de rendement générées par toutes les stratégies (commission de performance) vont à la trésorerie de Yearn.
- Au cours de l'année, 2% des actifs totaux des Vaults sont considérés comme des frais qui vont à Yearn pour payer les dépenses telles que le gaz, les subventions aux développeurs et d'autres services.

Maintenant que nous savons ce que sont les yVaults et les stratégies, approfondissons un peu comment ils fonctionnent. 

# Appronfondir vos connaissances sur les vaults et les stratégies

### Décomposer une stratégie

![](./image3.jpg?w=352&h=28)\
*Thanks Finematics for this image!*

L'image ci-dessus est un aperçu de la stratégie d'un yVault v1 sur Ethereum.Ce yVaults est maintenant en disponible dans sa version 2 et peut gérer plusieurs stratégies en même temps, mais cet exemple se concentrera sur une seule stratégie. Il y a un [article et une vidéo complete sur Finematics](https://finematics.com/yearn-vaults-eth-vault-explained/) expliquand la façon dont cela fonctionne au cas où vous voudriez en savoir encore plus !

Dans cet exemple, nous pouvons voir comment une stratégie peut utiliser d'autres yVaults ! Dans la stratégie de ce yVault v1 sur Ethereum:

- Lorsqu'un utilisateur dépose des ETH, les ETH sont ensuite prêtés sur MakerDAO sous sous forme de garantie
- La garantie est utilisée pour emprunter du DAI
- Le DAI emprunté est déposé dans le yVault DAI
Nous utilisons donc de l'ETH pour emprunter du DAI et générer du rendement en utilisant la stratégie du yVault DAI.

### Comment/quand Yearn déplace-t-il les fonds d'un yVault et facture-t-il des frais ?

L'une des fonctions clés d'une stratégie est appelée «harvest». Lorsqu'il est appelée, elle déclenche un processus de rééquilibrage où le profit est réalisé et réinvesti dans la stratégie.

### Comment Yearn garantit-il qu'une stratégie est toujours gagnante ?

Les stratèges utilisent un certain nombre d'outils pour surveiller les données "on chain" afin de garantir la santé de la stratégie. L'un de ces outils est [Yearn Watch](https://yearn.watch/) qui présente une belle interface utilisateur avec de nombreuses mesures clés, en direct et provenant direcement de la blockchain.

Mais avant tout la diligence effectuée avant qu'elles ne soient envoyées en production avec de l'argent réel est crutiale. L'équipe de stratéges Yearn dispose également d'un "système de notation de stratégie" qui évalue le niveau de risque des stratégies sous-jacentes utilisées, nous allons expliquer cela de facon plus claire et transparente à nos utilisateurs dans notre documentation et nos applications à l'avenir !

### Les stratégies se developpent avec notre expérience avec les anciens yVaults et sont de plus en plus contraignantes

- Les fonds du yVault doivent augmenter "uniquement" et non diminuer
- Évitez les pertes impermanentes (par exemple, ne pas fournir de liquidités  dans une pool YFI / ETH)
- Les utilisateurs doivent pouvoir retirer à tout moment (la stratégie ne peut donc pas verrouiller tous les fonds du yVault, seulement une petite fraction)
- Utilisez uniquement des protocoles ayant fait leurs preuves et des contrats bien compris et immuables

### Keep3rs et yVaults

Yearn et [Keep3r](https://docs.keep3r.network/) ont une très forte synergie : Keep3r est utilisé par les yVaults afin d'automatiser les tâches courantes !

Par exemple, les Keepers pourraient bénéficier de l'appel de la fonction de récolte(harvest) chaque fois que cela semble intéréssant. Par exemple:

- Une stratégie a généré X bénéfices
- Cela fait Y temps depuis la dernière récolte
- Aucune perte ne se produira si la récolte est appelée

Et il existe de nombreux cas comme celui-ci... Un autre exemple serait un Keeper appelant à un rééquilibrage de l'allocation des actifs du yVault afin d'éviter la liquidation d'une partie de la stratégie

![](./image4.jpg?w=562&h=651)

### Contruction des stratégies 

- **yVaults** sont dévelopés avec [Vyper](https://vyper.readthedocs.io/en/stable/)
- **Strategies** sont dévelopées avec [Solidity](https://docs.soliditylang.org/en/v0.8.11/)

> Vous n'avez pas besoin d'être un développeur avancé ou un analyste financier pour devenir un stratège !

Bien que la maintenance des yVaults soit  plus complexe, les stratégies ont été conçues pour que quiconque puisse en écrire une. Les points importants sont :

- Connaissance de l'écosystème blockchain dans lequel vous allez vous déployer, qui peut être acquise en effectuant des recherches approfondies sur la tokenomics et la documentation de tous les jetons utilisés dans la stratégie elle-même.
- Connaissances en programmation Solidity similaires à [l'achèvement du niveau 4 sur CryptoZombies](https://cryptozombies.io/)
- Savoir comment se utiliser [git](https://git-scm.com/), [eth-brownie](https://eth-brownie.readthedocs.io/en/stable/) et [ganache](https://trufflesuite.com/ganache/).
- Après avoir compris les bases des outils ci-dessus, vous êtes prêt à [copier notre modèle de stratégie](https://github.com/yearn/brownie-strategy-mix) ! Les fonctions que vous devez modifier dans ce modèle afin de créer votre propre première stratégie sont prepareReturn, adjustPosition et liquidatePosition.

Une dernière chose : une fois qu'une stratégie est approuvée par Yearn et mise en production, vous devez aider à la surveiller et la maintenir !

### Apprendre encore plus

- [Descriptions des yVaults](https://vaults.yearn.finance/)
- [Documents sur les yVault](https://docs.yearn.finance/getting-started/products/yvaults/overview)
- [Devenez un puissant stratège](https://www.youtube.com/watch?v=NVR3teJw0Y0)
- [Vidéo/article externe de Finematics sur yVaults](https://finematics.com/yearn-vaults-eth-vault-explained/)
- [Ressources supplémentaires de Yearn](https://docs.yearn.finance/developers/v2/additional-resources)

### Prenez la pilule bleue !

Si vous avez aimé cet article sur les yVaults et les Stratégies:

- Restez à jour avec le [Twitter de Yearn Finance](https://twitter.com/yearn_france)
- Lisez le [Blue Pill Book](https://thebluepill.eth.link/) décrivant la vision et l'histoire de Yearn
- Et découvrez notre page [Rejoindre l'équipe Yearn](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) !

*Rédaction : [Worms](https://twitter.com/MarcoWorms), Relécture : [Wavey](https://twitter.com/wavey0x)*