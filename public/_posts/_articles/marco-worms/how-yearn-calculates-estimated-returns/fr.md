---
title: "Comment Yearn calcule les rendements estimés (APY)"
image:
  src: ./image1.jpg
  width: 469
  height: 246
date: '2022-02-14'
author: Marco_Worms
translator: Cryptouf
---

![](./image1.jpg?w=469&h=246)\
*Ancien affichage des APY*

Au cours des dernières semaines, nous avons eu beaucoup de commentaires sur la façon dont notre tableau de bord v3 affiche le « Annual Percentage Yield » (APY) des actifs déposés. Surtout sur Fantom où l'écosystème est beaucoup plus volatils que ce soit en terme de prix ou de stratégies. Nous avons donc déployé des changements à court terme sur la façon dont les APY sont affichés pour représenter au mieux les rendements reçus. Lorsque nous sommes penchés sur nos calculs précédents, nous ne considérions pas que les calculs de l'APY à long terme étaient "gonflés", maintenant nous avons effectué une mise à jour pour corriger cette erreur. Cet article vise à donner plus de contexte sur ce qui s'est passé et sur notre solution !

## Contexte: APR et APY !

Dans la DeFI ces 2 termes sont souvent utilisés:

- **APR :** Taux annuel effectif global
- **APY :** Rendement annuel en pourcentage

Les deux sont utilisés pour communiquer à l'utilisateur combien il s'attend à gagner sur son investissement :

- **APR** suppose qu'il n'y a pas de composition automatique du rendement
- **APY** indique que le rendement est auto-composé dans l'investissement

## Ce que nous avons appris

Nous avons mis à jour la façon dont notre interface affiche les APY il y a quelques semaines lors de la [ve(3,3) wars sur Fantom](https://twitter.com/iearnfinance/status/1484570907041357828) afin de mieux refléter l'APY en utilisant les dernières données disponibles. Avant ce changement, nous montrions des APY plus conservateurs basés sur des données historiques à long terme, mais pendant cette "guerre", la plupart des APY des yVaults Fantom sont montés en flèche et les gains à court terme n'étaient pas correctement présentés aux utilisateurs. Nous avons apporté une modification pour afficher un nombre basé sur les récoltes récentes afin que les utilisateurs puissent voir que nos yVaults utilisent les strategies les plus rentables:

![](./image2.jpg?w=591&h=397)

L'inconvénient du calcul de l'APY via des données récentes, est que lorsque les gains issus de la "guerre" ont commencé à diminuer, nous montrons un chiffre provenant de récoltes récentes. qui est donc élevé, mais les récoltes suivantes n'allaient probablement pas être aussi rentables, nous avons donc décidé d'apporter quelques modifications pour résoudre ce problème.

Nous avions donc un calcul d'APY très conservateur avant l'épisode mentionné ci-dessus, puis nous l'avons mondifié pour nous concentrer sur les données récentes. Passer par ces 2 extrêmes nous a beaucoup appris sur ce qui fonctionne et ce qui ne fonctionne pas ! Voici comment nous procéderons maintenant :

### Pour les yVaults qui n'utilisent pas Curve:

![](./image3.jpg?w=150&h=190)\
*Nouvel affichage des APY pour les yVault non Curve*

- **APR brut :** APR total du yVault avant la déductions des frais 
- **APY net :** APY actuel du yVault
- **APY hebdomadaire :** Basé sur les récoltes des 7 derniers jours
- **APY mensuel :** Basé sur les récoltes des 30 derniers jours
- **APY de début :** Basé sur toutes les récoltes depuis l'existence du yVault

### Pour les yVaults qui utilise Curve:

![](./image4.jpg?w=182&h=196)\
*Nouvel affichage des APY pour les yVault Curve*

- **Pool APY** :  APY provenant des frais de swaps de Curve sur cette pool, la moitié va dans le yVault et l'autre moitié va aux détenteurs de veCRV.
- **Bonus Rewards APR :** Récompenses ajoutées généralement par le projet émettant  le jeton. Exemple: La pool frax vous distribue égalementdes jetons frax. Cette valeur représente l'APY si vous vendez le jeton a son prix actuel.
- **Base CRV APR :** L'APR de la quantité minimale de crv reçue par cette pool. (si vous n'avez pas staké vosa veCRV pour obtenir le boost, vous obtenez cette valeur + **Pool APY** + **Bonus Rewards APR**.
- **Boost :** augmentez la valeur du multiplicateur que vous obtenez en stakant vos veCRV 
- **APR convexe :** APR que vous obtiendrez en déposant sur convexe
- **APR brut :** APR total du yVault avant les frais déduits
- **APY net :** APY actuel du yVault

---

Merci à tous ceux qui ont donné leur avis et fait des retours sur cette fonctionnalité ainsi qu'aux équipes qui ont rapidement réagi. Nous espérons que le nouvel affichage reflète mieux la réalité des gains des nos yVaults !

Ecriture : [Worms](https://twitter.com/MarcoWorms), Relécture : [x48](https://twitter.com/x48_crypto), [Vany](https://twitter.com/vannny365), [Dark Ghosty](https://github.com/DarkGhost7)