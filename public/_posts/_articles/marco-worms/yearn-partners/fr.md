---
title:  "Partenaires de Yearn : Construire avec les yVaults"
image:
  src: ./cover.png
  width: 1500
  height: 729
date: '2022-02-17'
author: Marco_Worms
translator: Cryptouf
---

Les [Vaults Yearn ](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) sont construits avec des normes et les partenaires YFI ont créé des applications étonnantes en en les utilisant durant les deux dernières années. Cet article montre comment d'autres protocoles ont permis de développer les produits Yearn, et nous espérons que cela en inspirera certains !

## Exemples de cas

Les cas de partenariat les plus courants sont :
1. Utiliser les yVaults comme garantie pour prêter/emprunter
2. Utiliser les yVaults pour générer du rendement avec les fonds des utilisateurs


Dans les deux cas, le partenaire est récompensé en recevant des commissions de performance prélevées sur les bénéfices globaux du yVault, plus un partenaire contribue au volume total, plus la part des bénéfices qu'il reçoit est importante.

> En 2021, Yearn a partagé 2 793 161 $ avec des partenaires via le programme de partenariat

Plongeons maintenant en profondeur et prennons des exemples avec nos plus grands partenaire :

## Yearn + [Abracadabra](http://abracadabra.money/)

Abracadabra utilise les yVaults pour son service d'emprunt : l'innovation consiste à accepter des jetons portant intérêt (interest-bearing) comme garantie pour l'emprunt, une fois remboursé, l'utilisateur reçoit les jetons du yVault qui étaient garantie, qui incluent les bénéfices générés au cours du temps de verrouillouage.

Voilà un aperçu d'Abracadabra:

1. L'utilisateur dépose des wETH (Ethereum enveloppé, identique à Ethereum) dans un yVault, puis reçoit du yvWETH
2. L'utilisateur dépose ses yvWETH sur Abracadaba en garantie, Abracadabra permet à l'utilisateur de minter un pourcentage de sa garantie sous la forme d'un stablecoin en dollars appelé Magic Internet Money (MIM)

![](./image1.png?w=633&h=527)\
*L'interface “borrow” de Abracadabra*

Lorsque l'utilisateur mint du MIM, la garantie déposée est verrouillée jusqu'à ce que le MIM emprunté soit remboursé

- Si l'utilisateur rembourse dans les temps, la garantie est déverrouillée. S'il s'agit d'un yVault, cela signifie que vos jetons yVault seront restitués avec tous les bénéfices réalisés pendant qu'ils étaient verrouillés !
- Si l'utilisateur ne rembourse pas à temps, une partie de votre garantie sera utilisée pour payer le service (liquidation)

Idéalement, les intérêts générés par le jeton du yVault déposé dépasseront le coût des frais d'emprunt d'Abracadabra, de sorte que le cas d'utilisation complet ici serait de verrouiller un jeton portant l'intérêt en garantie.

## Yearn + [Alchemix](https://alchemix.fi/)

Alchemix utilise du le DAI yVault afin de générer des intérêts à partir du DAI déposé par les utilisateurs et de rembourser automatiquement les prêts.

1. L'utilisateur dépose du DAI ou de l'ETH sur Alchemix
2. Alchemix dépose ce DAI ou ETH dans un yVault pour générer un rendement pour l'utilisateur (et rembourser automatiquement le prêt effectué à l'étape suivante).
3. L'utilisateur peut emprunter jusqu'à 50 % de la garantie déposée sous forme de DAI et jusqu'à 25 % sous forme d'ETH  sous forme d'alUSD ou alETH (peut être converti en DAI ou ETH dans l'écosystème Alchemix), ce qui verrouille le montant déposé proportionnellement au montant emprunté.
4. Comme le montant déposé à l'étape 2 génère un rendement, il rembourse automatiquement le prêt de l'utilisateur et l'utilisateur peut alors retirer proportionnellement le rendement généré

Voici l'aperçu complet de l'écosystème Alchemix et comment il intéragie avec Yearn :

![](./image2.png?w=1400&h=950)\
*écosystème Alchemix*

## yVaults B2B

*Pour les cas d'utilisation professionnels, la DAO Yearn  fait vraiment la différence: il dispose de l'infrastructure pour fournir la meilleure sécurité de ses yVaults dans la DeFi pour le moment.*

Les partenaires gagnent une part des frais en fonction de la TVL qu'ils apportent aux yVault, vous pouvez en savoir plus sur notre modèle de partage des bénéfices dans la [Documentation des partenaires Yearn](https://docs.yearn.finance/partners/introduction). Les applications de portefeuille partenaires utilisent les yVault en arrière plan pour proposer différents types de services à leurs clients :

**Sections Earn :** pages qui offrent aux utilisateurs une alternative pour déposer leurs actifs dans les yVaults. Un bon exemple de section Earn peut être trouvé sur [ShapeShift](https://shapeshift.com/), leur contrat pour déposer les actifs chez Yearn Vaults est [open-source sur GitHub](https://github.com/shapeshift/yearn-router).

![](./image3.png?w=750&h=554)\
*Section earn de ShapeShift*

**Wallets** : les partenaires proposent des options de génération de rendement Yearn dans leur écosystème à l'aide de yVaults. Le [SteakWallet](https://www.steakwallet.fi/) est un bon exemple de service de portefeuille qui s'intègre avec Yearn:

![](./image4.png?w=363&h=681)\
*Interface de SteakWallet*

## Ressources pour devenir partenaire

Si vous souhaitez construire au-dessus de nos yVaults, il est recommandé de :

- Lire la [documentation du programme de partenariat](https://docs.yearn.finance/partners/introduction) et suivez le formulaire de partenariat
- Pour les directives techniques, consultez la [documentation sur les méthodes d'intégration de Yearn](https://docs.yearn.finance/partners/integration_guide)

*Nous aimerions avoir de vos nouvelles !*

Rédacteur: [Worms](https://twitter.com/MarcoWorms), Relécteurs: [Corn](https://twitter.com/omgcorn), [Dark Ghosty](https://github.com/DarkGhost7)