---
title: "Yearn <> CoW Swap"
image:
  src: ./cover.jpg
  width: 900
  height: 800
date: '2022-11-16'
author: Yearn
translator: Cryptouf
---

![](cover.jpg?w=900&h=903)\
*Yearn s'associe à CoW Swap*

*tl;dr; Après des mois de travail sur un solveur cowswap, nous avons développé qui est maintenant prêt ! À partir d'aujourd'hui, vous pourrez effectuer des échanges complexes avec CoW Swap comme le **3CRV <-> yvSNX**.*

*Yearn s'engage à utiliser CoW Swap pour toutes ses stratégies et à essayer d'obtenir autant de cow que possible pour augmenter les revenus des utilisateurs.*

## Background

Les stratégies typiques de Yearn déposent du capital dans un protocole générant du rendement et parfois cette stratégie réclame des jetons supplémentaires qui sont convertis en jeton souhaité par l'utilisateur.

Exemple : il existe une stratégie **yvDAI** qui dépose du **DAI** dans la **3POOL** de Curve. Le jeton de la pool de liquidités est staké pour gagner du **CRV**. Après un certain temps, le **CRV** est converti en **DAI**.

Si vous vérifiez le code des stratégies, vous verrez qu'il existe souvent un chemin codé en dur sur quoi faire  des récompenses -> faire des échanges. Une approche typique consiste à utiliser un contrat intelligent compatible uni-v2. Bien que cette approche fonctionne bien, il y a des problèmes :

- Les frais de transaction
- Le chemin optimal n'est pas statique
- Les récoltes protégées par MEV sont compliquées
- Impossible de réaliser des transactions avec d'autres stratégies et/ou des liquidités internes

Nous avons découvert que travailler avec CoW Swap nous permettrait de répondre à nos préoccupations et de nous lancer dans l'avenir.

## Décentralisation

Chez Yearn, nous voulons continuer à faire évoluer notre code pour être aussi décentralisé que possible. Il aurait été facile se diriger vers un service off-chain , mais nous voulons nous assurer que nous ne sommes pas les seuls à proposer une solution. Bien que nous participions aux enchères sur CoW Swap, le champ est ouvert à quelqu'un d'autre pour trouver une meilleure solution et nous vous encourageons à le faire. Plus il y a de concurrence dans l'écosystème CoW Swap, meilleurs seront les échanges et cela sera favorable pour les utilisateurs de Yearn obtiendront.

## Weiroll

Pour améliorer nos prix, nous avons décidé d'investir dans [Weiroll](https://github.com/weiroll/weiroll). Weiroll propose la possibilité d'avoir une petite machine virtuelle dans un contrat intelligent. Le gros avantage pour un solveur est la possibilité d'enchaîner les interactions sans laisser de poussière.

Prenons un exemple :

**WETH -> yvSNX**

Si nous utilisons CoW Swap, un solveur enverra une liste d'interactions réalisant les taches suivantes :

1. Approuver **WETH** sur 1inch
2. Echanger le **WETH** par du **SNX** sur 1inch
3. Approuver **SNX** par **yvSNX**
4. Déposez **SNX** dans **yvSNX**

Il y a deux problèmes ici.

Tout d'abord, est-il acceptable que CoW Swap approuve les contrats (1inch et Yearn) ?

Deuxièmement, les montants de chaque interaction doivent être codés en dur (hardcoded). La façon dont les solveurs fonctionnent est qu'ils simulent chaque interaction. Ensuite, au lieu de "déposer 100 **SNX** dans le **yvSNX**", ils font : "déposer xxxx **SNXs** dans **yvSNX**".

Notre implémentation déplace les jetons du "cowswap settlement" vers notre smart contract Weiroll. Ensuite nous envoyons une exécution sur weiroll qui relie les interactions. Fondamentalement, quel que soit le retour de l'appel **swap()** de 1inch, nous l'utilisons pour l'appel **deposit()** dans le coffre-fort yearn. Ne laissant aucune poussière derrière vous !

Dans l'image suivante, vous pouvez voir un exemple de règlement utilisant Weiroll :

![](image1.jpg?w=900&h=218)\
*Weiroll utilisé par CoW Swap*

- L'utilisateur envoie du **WETH** au CoW Swap settlement
- Le CoW Swap settlement envoie du **WETH** à TradeHandler (contrat alimenté par Weiroll)
    - TH convertit le **WETH** en **SNX**
    - TH dépose le **SNX** dans le coffre Yearn
    - TH renvoie **yvSNX** au CoW Swap settlement
    - Le CoW Swap settlement renvoie le **yvSNX** à l'utilisateur

---

Si vous voulez commencer à utiliser Weiroll, vous avez deux options,

1. js : [https://weiroll.github.io/weiroll.js/](https://weiroll.github.io/weiroll.js/)
2. python : [https://github.com/fp-crypto/weiroll-py](https://github.com/fp-crypto/weiroll-py)

*CONSEIL DE PRO : si vous utilisez un multi-sign sécurisé, vous pouvez utiliser weiroll-py en conjonction avec [ape-safe](https://github.com/banteg/ape-safe).*

## CoWs

Un autre grand regret de l'utilisation de solution codés en dur dans nos contrats est le manque de règlements entre les stratégies. Un exemple de ce qui est désormais possible. En prod, nous avons les deux stratégies suivantes :

- Une stratégie **DAI** vendant du **CRV** pour plus de **DAI**
- Une stratégie **yCRV** qui réclame les **3CRV** et achète du **CRV**

Elles généreront les commandes suivantes :

- VENDRE **CRV** pour **DAI**
- VENDRE **3CRV** pour **CRV**

Aujourd'hui, le solveur cowswap de Yearn verra ces deux commandes et les développera comme suit :

- VENDRE **CRV** pour **DAI**
- UNWRAP **3CRV** pour **DAI**
- VENDRE **DAI** pour **CRV**

Et là, nous avons notre vache à lait interne. Réduire les frais de LP pour les deux stratégies et augmenter les revenus.

## Utilisation de la liquidité interne de Yearn

Le fait d'avoir notre propre solveur nous permet de régler les échanges avec la liquidité interne de la trésorerie de Yearn. Yearn fait déjà des rachats **YFI**, pourquoi ne le ferions-nous pas via CoW Swap et CoWing?

## Correspondance des deposit() et witdrawals()

Les dépôts dans les vaults Yearn sont très efficaces en termes de gaz. Le déposant transfère les jetons vers le coffre-fort, certaines informations internes sont mises à jour et voilà !

Pour les retraits, cela dépend. Si le coffre-fort dispose d'un tampon, les retraits sont aussi bon marché que les dépôts. S'il n'y a pas de tampon, le montant doit être extrait des stratégies. Si la quantité demandée est supérieure à la mémoire tampon, le coffre-fort peut se défausser de plusieurs positions, ce qui coûte beaucoup de gaz à l'utilisateur.

Maintenant que CoW Swap prend en compte les jetons Yearn, un déposant peut créer un ordre **USDC** -> **yvUSDC** et un retrait peut créer **yvUSDC** -> **USDC** et ces deux seront jumelés même lorsque le tampon n'est pas présent. Cela permet de réduire considérablement le coût en gaz pour l'utilisateur durant les pires scénarios.

## Les récompenses des stratégies en tant que liquidité CoW 

À l'heure actuelle, les stratégies sont récoltées par les "keepers" en fonction de certains paramètres pour chaque stratégie. Le solveur CoW Swap de Yearn utilisera ces informations pour fournir des liquidités aux CoW. Si quelqu'un achète du  **CRV** avec du **DAI**, et que l'une de nos stratégies est prête à être récoltée, le solveur pourra devenir "keeper" et libérer les récompenses à "cowed".

## Conclusion

Dinobots, l'équipe de Yearn en charge de ce projet, est extrêmement enthousiaste à l'idée de travailler avec l'équipe de CoW Swap. Aider CoW Swap à comprendre des commandes plus complexes. Certains de nos transactions ont jusqu'à 7 interactions différentes, ce qui prendrait beaucoup de temps à faire manuellement pour un utilisateur.
