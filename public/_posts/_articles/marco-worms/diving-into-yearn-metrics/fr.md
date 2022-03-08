---
title: "Plonger dans les métriques de Yearn"
image:
  src: ./image3.jpg
  width: 1400
  height: 625
date: '2022-02-17'
author: Marco_Worms
translator: Cryptouf
---

Faire ses propres recherches est un exercice nécessaire lorsqu'il s'agit de crypto et concernant les [yVaults and strategies](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) il existe plusieurs outils pour comprendre tout les chiffres. Dans cet article, nous allons explorer toutes les ressources publiques d'analyse de Yearn utilisées par les stratèges pour surveiller la santé des vaults et des stratégies. Apprendre à utiliser ces outils vous permettra d'avoir le même niveau d'informations sur les vaults que les membres de l'équipe d'Yearn. Les trois outils que nous allons explorer aujourd'hui sont :
### **[The Vaults at Yearn](https://vaults.yearn.finance/)**

Un aperçu complet de tous les yVaults et des descriptions de stratégies qui les composent. Un excellent outil pour comprendre comment et où les fonds des vaults sont délégués.
### **[Yearn Vision](https://yearn.vision/)**

Un tableau de bord interactif qui peut être utilisé pour analyser les données historiques de tous les vaults et stratégies. C'est avec cet outil que vous pourrez extraire et analyser tout type de données historiques concernant les yVaults et l'utilisation des stratégies.
### **[Yearn Watch](https://yearn.watch/)**

Un tableau de bord créé par des stratèges pour des stratèges qui permet un accès rapide à des données utiles sur la santé des stratégies pour chaque yVault.

### **[The Vaults at Yearn](https://vaults.yearn.finance/)**

The Vaults at Yearn est une excellente ressource pour commencer à comprendre comment les fonds sont gérés par un coffre-fort. Vous trouverez ici les descriptions de tous les yVaults et leurs stratégies :

![](./image1.jpg?w=1211&h=733)

Sur le côté gauche, vous avez la possibilité de choisir entre les coffres Ethereum ou Fantom. Ils sont regroupés comme suit :

- **Stables** : yVaults conçus pour les stablecoins
- **DeFi Tokens** : yVaults conçus pour les jetons de l'écosystème DeFi du réseau choisi (ETH ou FTM)
- **Curve Pools** : yVaults conçus pour les jetons de l'écosystème [curve.fi](https://curve.fi/)
- **Retired Vaults** : anciens yVaults qui ne sont plus utilisés

Lorsque vous choisissez une section, vous verrez une liste de yVaults. Vous pouvez cliquer l'un d'eux pour en savoir plus et voir les descriptions de toutes les stratégies qu'il utilise : 

![](./image2.jpg?w=897&h=856)

Si vous voulez en savoir plus sur les chiffres de chaque vault/strat, il faudra utiliser notre prochain outil  ! Yearn Vision:

## **Yearn Vision**

**Lien: https://yearn.vision/**

Yearn Vision est une suite complète de tableaux de bord d'analyse comportant de nombreus graphiques prédéfinies pour analyser les données historiques des vaults et des stratégies. Découvrons une partie de ce que vous pouvez y trouver, en commençant par la page d'accueil : 

![](./image3.jpg?w=1400&h=625)

![](./image4.jpg?w=1400&h=445)

Cette page offre beaucoup d'informations sur la santé globale de tous les Vaults Yearn .

Il existe des données sur la TVL (Total Value Locked) qui correspond à tous les fonds déposés dans tous les yVaults. Nous pouvons voir la TVL totale sur Ethereum et Fantom. Il existe des graphiques montrant les deltas quotidiens/hebdomadaires, qui sont des comparaisons avec les données actuelles et passées. Le "prix de l'action" (share price) est également une valeur importante à suivre, elle représente les gains à vie du vault sous la forme d'un nombre qui augmente au fil du temps (supérieur à 1). Ci-dessous, vous pouvez voir un exemple de prix de l'action pour ETH dans le vault yETH. Voici comment fonctionne le "share price":

![](./image5.jpg?w=1400&h=849)\
*Comment le “share price” fonctionne*

Depuis le tableau de bord Vision (dans le coin supérieur droit) vous pouvez modifier l'interval de temps. Cela mettra à jour la plupart des graphiques.

![](./image6.jpg?w=226&h=469)\
*modifier l' de temps dans le coin supérieur droit*

Ne soyez pas effrayé par les graphiques avec de nombreuses couleurs, ils affichent normalement tous les vaults/stratégies. Mais vous pouvez ne sélectionner uniquement celui qui vous Intéresse. Vous pouvez cliquer sur la liste des éléments pour filtrer les analyses:

![](./image7.jpg?w=884&h=231)\
*Non filtré*


![](./image8.jpg?w=895&h=258)\
*filtré*

"time since last report" signifie quand ces stratégies ont été récoltées pour la dernière fois. Le graphique "filtré" ci-dessus est un exemple de toutes les récoltes du yVault USDC qui ont eu lieu la semaine passée, les sauts verticaux signifient qu'une récolte s'est produite, donc "time since last report" passe à 0.

Vous pouvez naviguer sur d'autres tableaux de bord depuis le côté gauche de l'écran : 

![](./image9.jpg?w=225&h=221)\
*voir tous les tableaux de bord: https://yearn.vision/dashboards*

Vous trouverez ici de nombreux tableaux de bord pour en savoir plus sur ce qui se passe chez Yearn !

![](./image10.jpg?w=1395&h=565)\
*tableaux de bord utilisés par le stratège*

Jetons un coup d'œil au tableau de bord “Vault Overview”:

![](./image11.jpg?w=1400&h=640)\
*tableau de bord “Vault Overview”: https://yearn.vision/d/ibsIoEknkdffd/vault-overview?orgId=1*

Dans ce tableau de bord, vous pouvez voir qu'il existe 6 stratégies actives pour le yVault USDC : "totalDebt" est le montant que le vault délègue à ces stratégies, "amount of free funds" signifie combien de fonds sont disponibles pour un retrait "pas cher" (en terme de gas) , lorsque ce nombre est inférieur au montant que vous souhaitez retirer, la transaction coûtera un peu plus de gaz car le vault devra prendre des fonds délégués aux stratégies et effectuer plus d'opérations pour réaliser ce processus.

Nous utiliserons yearn.watch plus tard pour voir comment les fonds sont délégués proportionnellement pour chaque stratégie.

Il existe également d'excellents tableaux de bord pour inspecter la santé globale de Yearn, et vous pouvez même surveiller la trésorerie de la DAO :

![](./image12.jpg?w=1363&h=201)\
*tableau de bord de la trésorerie: https://yearn.vision/d/9_ppKhd7z/treasury*

## **Yearn Watch**

**Lien: https://yearn.watch/**

Yearn Watch est un tableau de bord conçu par des stratèges pour des stratèges, afin que vous puissiez naviguer rapidement parmi les informations importantes sur la santé de chaque stratégie. L'écran d'accueil vous montre tous les coffres :

![](./image13.jpg?w=1255&h=799)

Si vous ouvrez un vault, vous verrez des informations sur l'allocation des actifs. 

![](./image14.jpg?w=855&h=855)

La vue "details" montre tout sur l'allocation globale des fonds. Si vous utilisez  la vue "strategies", vous pouvez en savoir encore plus et découvrir chaque stratégie individuellement et trouver facilement leurs contrats et transactions "on-chain".
Une fois à l'intérieur d'une stratégie, une vue interessante est le"reports" (harvests/récoltes) qui vous montrent les 10 dernières récoltes afin que vous puissiez surveiller les gains en temps réel du vault et monitorer le profit de chaque récolte :

![](./image15.jpg?w=1253&h=759)

Développer un rapport individuel pour obrenir plus d'informations :

![](./image16.jpg?w=1157&h=415)

### **Voila ce qu'est Yearn !**

J'espère que cet article aidera les utilisateur à trouver et extraire les bonnes informations concernant leurs dépôts dans les yVaults de Yearn ! Vous pouvez retrouver beaucoup d'informations sur le passé et le présent des yVaults et des produits de Yearn.

Rédacteur: [Worms](https://twitter.com/MarcoWorms), Relecteur: [Dark Ghosty](https://github.com/DarkGhost7)

**Made in[ yearn.finance](https://yearn.finance/)**