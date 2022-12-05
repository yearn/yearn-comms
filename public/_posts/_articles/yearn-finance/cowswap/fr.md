---
title: "Yearn <> CoW Swap"
image:
  src: ./cover.jpg
  width: 900
  height: 800
date: '2022-11-16'
author: Yearn
translator: 
---

![](cover.jpg?w=900&h=903)\
*Yearn s'associe à CoW Swap*

*tl;dr; After months of working on a yearn cowswap solver, we reached production ready code. Starting from today you will be able to do complex swaps in CoW Swap like, **3CRV <-> yvSNX**.*
*tl;dr; Après des mois de travail sur un solveur de cowswap, nous avons atteint un code prêt pour la production. À partir d'aujourd'hui, vous pourrez effectuer des échanges complexes dans CoW Swap comme **3CRV <-> yvSNX**.*


*Yearn is committed to settle all strategies trades through CoW Swap and trying to get as much cows as possible to increase users revenue.*
*Yearn s'engage à régler toutes les stratégies commerciales via CoW Swap et à essayer d'obtenir autant de vaches que possible pour augmenter les revenus des utilisateurs.*

## Background

Typical Yearn strategies deposit capital into a protocol for yield and sometimes the strategy claims additional tokens which are converted to the user’s wanted token.

An example: There is a **yvDAI** strategy that is depositing **DAI** in curve’s **3POOL**. The liquidity pool token is staked to earn **CRV**. After some time, the **CRV** is converted to **DAI**.

If you verify strategies’ code, you will see that often there is a hardcoded path on where to do rewards -> want trades. A typical approach is using a uni-v2 compatible smart-contract. While this approach is working fine, there are pitfalls:

- Transaction fees
- Optimal path is not static
- MEV protected harvests are complicated
- Can’t settle trades against other strategies and/or internal liquidity

We found out that working with CoW Swap would allow us to tackle our concerns and leap into the future.

Les stratégies typiques de Yearn déposent du capital dans un protocole de rendement et parfois la stratégie réclame des jetons supplémentaires qui sont convertis en jeton souhaité par l'utilisateur.

Un exemple : il existe une stratégie **yvDAI** qui dépose **DAI** dans le **3POOL** de la courbe. Le jeton de pool de liquidités est jalonné pour gagner **CRV**. Après un certain temps, le **CRV** est converti en **DAI**.

Si vous vérifiez le code des stratégies, vous verrez qu'il existe souvent un chemin codé en dur sur l'endroit où faire des récompenses -> vouloir des échanges. Une approche typique consiste à utiliser un contrat intelligent compatible uni-v2. Bien que cette approche fonctionne bien, il y a des pièges :

- Les frais de transaction
- Le chemin optimal n'est pas statique
- Les récoltes protégées MEV sont compliquées
- Impossible de régler des transactions contre d'autres stratégies et/ou des liquidités internes

Nous avons découvert que travailler avec CoW Swap nous permettrait de répondre à nos préoccupations et de nous lancer dans l'avenir.

## Décentralisation

At Yearn we want to continue evolving our code to be as decentralized as possible. It would have been easy to set a path for a trade from an off-chain service, but we want to make sure we are not the only ones offering a solution. While we will participate in the orders bidding inside CoW Swap, the field is open for someone else to find a better solution and we encourage you to do it. The more competition in the CoW Swap ecosystem, the better settlements Yearn’s users will get.

Chez Yearn, nous voulons continuer à faire évoluer notre code pour être aussi décentralisé que possible. Il aurait été facile de tracer une voie pour un commerce à partir d'un service hors chaîne, mais nous voulons nous assurer que nous ne sommes pas les seuls à proposer une solution. Bien que nous participions aux enchères dans CoW Swap, le champ est ouvert à quelqu'un d'autre pour trouver une meilleure solution et nous vous encourageons à le faire. Plus il y a de concurrence dans l'écosystème CoW Swap, meilleurs seront les règlements que les utilisateurs de Yearn obtiendront.

## Weiroll

To improve our settlement prices we decided to invest in [Weiroll](https://github.com/weiroll/weiroll). Weiroll brings the possibility of having a small virtual machine inside a smart contract. The big benefit for a solver is the possibility of chaining interactions without leaving dust behind.

Let’s use an example to explain its power. Let’s say we want to do the following trade:

Pour améliorer nos prix de règlement, nous avons décidé d'investir dans [Weiroll](https://github.com/weiroll/weiroll). Weiroll apporte la possibilité d'avoir une petite machine virtuelle dans un contrat intelligent. Le gros avantage pour un solveur est la possibilité d'enchaîner les interactions sans laisser de poussière.

Prenons un exemple pour expliquer sa puissance. Disons que nous voulons faire le commerce suivant :


**WETH -> yvSNX**

If we use the CoW Swap settlement contract, a solver would be sending a list of interactions which does the following:

1. Approve **WETH** on 1inch
2. Swap **WETH** for **SNX** in 1inch
3. Approve **SNX** in **yvSNX**
4. Deposit **SNX** in **yvSNX**

There are two issues here.

First, is it ok for CoW Swap’s settlement to approve third party contracts like 1inch and Yearn vaults?

Second, the amounts in each interaction need to be hardcoded. The way solvers work is they simulate each interaction and instead of “deposit 100 **SNX** in **yvSNX**” it is actually “deposit xxxx **SNXs** in **yvSNX**”.

Our implementation moves tokens from the cowswap settlement to our Weiroll smart contract. There we send a weiroll execution which links the interactions. Basically, whatever the 1inch **swap()** call returns, we use it for the **deposit()** call in the yearn vault. Leaving no dust behind!

In the following image you can see an example of the settlement using Weiroll:

![](image1.jpg?w=900&h=218)\
*Weiroll being used inside CoW Swap*

-  User sends **WETH** to CoW Swap settlement
-  Settlement sends **WETH** to TradeHandler (Weiroll powered contract)
    - TH converts **WETH** to **SNX**
    - TH deposits **SNX** in the Yearn vault
    - TH returns **yvSNX** to CoW Swap settlement
    - CoW Swap settlement returns **yvSNX** to the user

Si nous utilisons le contrat de règlement CoW Swap, un solveur enverra une liste d'interactions qui fait ce qui suit :

1. Approuver **WETH** sur 1 pouce
2. Remplacez **WETH** par **SNX** en 1 pouce
3. Approuver **SNX** dans **yvSNX**
4. Déposez **SNX** dans **yvSNX**

Il y a deux problèmes ici.

Tout d'abord, est-il acceptable que le règlement de CoW Swap approuve les contrats de tiers comme les coffres-forts 1 pouce et Yearn ?

Deuxièmement, les montants de chaque interaction doivent être codés en dur. La façon dont les solveurs fonctionnent est qu'ils simulent chaque interaction et au lieu de "déposer 100 **SNX** dans **yvSNX**", c'est en fait "déposer xxxx **SNXs** dans **yvSNX**".

Notre implémentation déplace les jetons du règlement cowswap vers notre contrat intelligent Weiroll. Là nous envoyons une exécution weiroll qui relie les interactions. Fondamentalement, quel que soit le retour de l'appel **swap()** de 1 pouce, nous l'utilisons pour l'appel **deposit()** dans le coffre-fort yearn. Ne laissant aucune poussière derrière vous !

Dans l'image suivante, vous pouvez voir un exemple de règlement utilisant Weiroll :

![](image1.jpg?w=900&h=218)\
*Weiroll utilisé dans CoW Swap*

- L'utilisateur envoie **WETH** au règlement CoW Swap
- Le règlement envoie **WETH** à TradeHandler (contrat alimenté par Weiroll)
    - TH convertit **WETH** en **SNX**
    - TH dépose **SNX** dans le coffre Yearn
    - TH renvoie **yvSNX** au règlement CoW Swap
    - Le règlement CoW Swap renvoie ** yvSNX ** à l'utilisateur

---

If you want to start using Weiroll you have two flavor's available,

1. js: [https://weiroll.github.io/weiroll.js/](https://weiroll.github.io/weiroll.js/)
2. python: [https://github.com/fp-crypto/weiroll-py](https://github.com/fp-crypto/weiroll-py)

*PRO TIP: If you are running a safe multi-sign, you can use weiroll-py in conjunction with [ape-safe](https://github.com/banteg/ape-safe).*

Si vous voulez commencer à utiliser Weiroll, vous avez deux saveurs disponibles,

1. js : [https://weiroll.github.io/weiroll.js/](https://weiroll.github.io/weiroll.js/)
2. python : [https://github.com/fp-crypto/weiroll-py](https://github.com/fp-crypto/weiroll-py)

*CONSEIL DE PRO : si vous utilisez un multi-sign sécurisé, vous pouvez utiliser weiroll-py en conjonction avec [ape-safe](https://github.com/banteg/ape-safe).*

## CoWs

Another big regret of using hardcoded trade paths in our contracts is the lack of settlements between strategies. An example of what’s possible from now on. In prod, we have the following two strategies:

- A **DAI** strategy selling **CRV** for more **DAI**
- A **yCRV** strategy that claims **3CRV** and buys **CRV**

These will generate the following orders:

- SELL **CRV** for **DAI**
- SELL **3CRV** for **CRV**

Today, Yearn’s cowswap solver will see these two orders and expand them as the following:

- SELL **CRV** for **DAI**
- UNWRAP **3CRV** for **DAI**
- SELL **DAI** for **CRV**

and there we have our internal CoW. Lowering the LP fee for both strategies and increasing revenue.

Un autre grand regret de l'utilisation de chemins commerciaux codés en dur dans nos contrats est le manque de règlements entre les stratégies. Un exemple de ce qui est désormais possible. En prod, nous avons les deux stratégies suivantes :

- Une stratégie **DAI** vendant **CRV** pour plus de **DAI**
- Une stratégie **yCRV** qui réclame **3CRV** et achète **CRV**

Ceux-ci généreront les commandes suivantes :

- VENDRE **CRV** pour **DAI**
- VENDRE **3CRV** pour **CRV**

Aujourd'hui, le solveur de cowswap de Yearn verra ces deux commandes et les développera comme suit :

- VENDRE **CRV** pour **DAI**
- UNWRAP **3CRV** pour **DAI**
- VENDRE **DAI** pour **CRV**

et là nous avons notre vache à lait interne. Réduire les frais de LP pour les deux stratégies et augmenter les revenus.

## Using Yearn internal liquidity

Having our own solver allows us to settle trade against internal liquidity from Yearn treasury. Yearn is doing **YFI** buybacks, why wouldn’t we do it through CoW Swap and CoWing?

Le fait d'avoir notre propre solveur nous permet de régler les échanges avec la liquidité interne de la trésorerie de Yearn. Yearn fait des rachats **YFI**, pourquoi ne le ferions-nous pas via CoW Swap et CoWing?

## Matching deposit() and witdrawals()

Deposits to Yearn vaults are very efficient gas wise. Depositor transfers tokens to the vault, there are some internal information updated and done.  

For withdrawals, it depends. If the vault has a buffer, withdrawals are as cheap as deposits. If there is no buffer, the amount needs to be retrieved from strategies. If the amount requested is bigger than the buffer, the vault might unwind more than one position, costing the user a lot of gas.  

Now that CoW Swap understands Yearn tokens, a depositor can create a **USDC** -> **yvUSDC** order and a withdrawer can create **yvUSDC** -> **USDC** and those two will be matched even when buffer is not present. Reducing user’s gas cost considerably for worst case scenarios.

Les dépôts dans les voûtes Yearn sont très efficaces en termes de gaz. Le déposant transfère les jetons vers le coffre-fort, certaines informations internes sont mises à jour et effectuées.

Pour les retraits, ça dépend. Si le coffre-fort dispose d'un tampon, les retraits sont aussi bon marché que les dépôts. S'il n'y a pas de tampon, le montant doit être extrait des stratégies. Si la quantité demandée est supérieure à la mémoire tampon, le coffre-fort peut se dérouler de plusieurs positions, ce qui coûte beaucoup de gaz à l'utilisateur.

Maintenant que CoW Swap comprend les jetons Yearn, un déposant peut créer un ordre **USDC** -> **yvUSDC** et un retrait peut créer **yvUSDC** -> **USDC** et ces deux seront jumelés même lorsque le tampon n'est pas présent. Réduire considérablement le coût du gaz de l'utilisateur pour les pires scénarios.

## Strategies’ rewards as CoW liquidity

At the moment, strategies are harvested by keepers based on certain parameters in each strategy. Yearn’s CoW Swap solver will use that information to provide liquidity for CoWs. If someone is buying **CRV** for **DAI**, and one of our strategies is ready to harvest, the solver will be able to work as a keeper and release the rewards to be cowed.

À l'heure actuelle, les stratégies sont récoltées par les gardiens en fonction de certains paramètres de chaque stratégie. Le solveur CoW Swap de Yearn utilisera ces informations pour fournir des liquidités aux CoW. Si quelqu'un achète **CRV** pour **DAI**, et que l'une de nos stratégies est prête à être récoltée, le solveur pourra travailler en tant que gardien et libérer les récompenses à intimider.

## Conclusion

Dinobots, the team inside Yearn in charge of this project, is extremely excited to be working with the CoW Swap team. Helping CoW Swap understand more complex orders, converts CoW Swap from a token dex to an intent dex. Some of our test trades have up to 7 different interactions which would take a long time for a user to do. Imagine pushing a bit forward, and using CoW Swap to rebalance a portfolio. It feels like a Layer 1.5.

Dinobots, l'équipe de Yearn en charge de ce projet, est extrêmement enthousiaste à l'idée de travailler avec l'équipe CoW Swap. Aider CoW Swap à comprendre des commandes plus complexes, convertit CoW Swap d'un dex de jeton à un dex d'intention. Certains de nos échanges de test ont jusqu'à 7 interactions différentes, ce qui prendrait beaucoup de temps à un utilisateur. Imaginez que vous poussiez un peu en avant et que vous utilisiez CoW Swap pour rééquilibrer un portefeuille. Cela ressemble à une couche 1.5.
