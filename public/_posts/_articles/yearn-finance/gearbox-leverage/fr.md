---
title: "Gearbox V2 Alpha: Yearning pour plus d'… APY"
image:
  src: ./image1.jpg
  width: 900
  height: 450
date: '2022-09-05'
author: Gearbox
translator: Cryptouf
---

Ceci est une traduction et une simplification d'un article de GearBox. Vous pouvez retrouver l'article original [ici](https://medium.com/gearbox-protocol/gearbox-v2-allowedlist-alpha-yearning-for-more-apy-c6c6f87427f4).

Voici le 2ᵉ volet de la série *Alpha* ! Si vous avez manqué le précédent, c'est par ici:

<autoslot link="https://medium.com/gearbox-protocol/gearbox-v2-allowedlist-alpha-the-frax-of-life-frax-teaser-fe99e6536532"><autoslot>

Nous sommes à l'aube de la sortie de Gearbox V2 et du mode [Leverage Ninja](https://medium.com/gearbox-protocol/leverage-ninja-gearbox-early-v2-access-a-leverage-user-teaser-8939e7eab30d). Gearbox V2 offrira non seulement un tas de nouvelles fonctionnalités impressionnantes, mais proposera également de nouveaux actifs et pools [ajoutés à la AllowedList](https://gov.gearbox.fi/t/pre-gip-17-pools-assets- and-allowedlist-policy-for-v2/1438)… Cela offrira un éventail de nouvelles possibilités d'utiliser un effet de levier, que vous soyez un farmer, un trader degen ou encore un monstre de l'arbitrage. **Voyons comment - avec Yearn** !

> Arrête de parler, wen yield ser ?!

Attendez une minute ! Avec l'arrêt des ["performance fees"](https://twitter.com/iearnfinance/status/1565217164122103809) chez Yearn, il se pourrait bien que la pool stETH/ETH Lido devienne le vault le plus rémunérateur. Avec un effet de levier… vous pourriez atteindre **jusqu'à 30 % d'APY**. Lire *comment* ci-dessous.

![](image1.jpg?w=900&h=450)

> Gearbox V2 débutera initialement en mode Leverage Ninja : le côté effet de levier (pas le côté "pool", qui est ouvert à tout le monde) sera temporairement limité quelque degen qui aideront à tester la v2 en prod. Autrement dit, cela nous servira de test grandeur nature.

## Ajout de plusieurs yVaults Yearn à la liste autorisée (AllowedList)

Aujourd'hui, nous allons passer en revue les yVaults de Yearn qui feront partie de Gearbox V2.

Qu'est-ce que la liste autorisée (AllowedList)? En termes simples, c'est la liste des jetons et des smart contracts approuvés par la gouvernance qui peuvent interagir avec les "Credit Accounts" de Gearbox. **Si un actif ou un contrat ne figure pas sur cette liste, vous ne pouvez pas interagir avec lui depuis un "Credit Account"**.

> En réalité, c'est un peu plus compliqué que cela. Gearbox a été conçu pour être modulaire et composable, donc théoriquement, il peut y avoir plusieurs pools d'actifs différents pour un prêt (par exemple, plusieurs pools pour le DAI), chacun avec son propre gestionnaire de crédit, qui a sa propre liste… Si vous voulez en savoir plus à ce sujet, vous pouvez [lire la documentation](https://docs.gearbox.finance/overview/credit-account/allowedlist-policy).

![](image2.jpg?w=900&h=449)\
*La prophétie dit que le leverage ninja pourrait tuer un ours*

À noter - tout ce qui est présenté dans cet article est soumis à l'approbation de la DAO. Si la DAO considère l'un des nouveaux ajouts proposés à la liste comme trop risqué (ou pour une autre raison), les informations contenues dans cet article changeront. Vous pouvez retrouver la discussion ici:

<autoslot link="https://gov.gearbox.fi/t/v2-discussion-pools-assets-and-allowedlist-policy-for-v2/1438"><autoslot>

## Qu'est-ce que Yearn et comment ça marche

*Si vous lisez cet article, les chances que vous connaissiez déjà Yearn sont probablement très importante. Nous n'allons donc pas rentrer dans les détails*

[Yearn](https://yearn.finance/vaults) est un gestionnaire d'actifs open source et décentralisé qui vous aide à automatiser et à composer automatiquement votre rendement.

Ils offrent une grande variété de "vaults" qui utilisent différentes stratégies pour générer du rendement sur n'importe quel actif de base que vous avez déposé. Que ce soit pour quelque chose de simple comme de l'ETH ou de quelque chose de plus complexe comme les jetons LP de la pool 3Crv ou Steth/Eth sur Curve. Si vous voulez en savoir plus sur Yearn, [vous pouvez lire leur « manifeste »](https://thebluepill.eth.limo/) ou leurs [docs](https://docs.yearn.finance/).

## Yearn + Gearbox V2 : quelles nouvelles pools arrivent ?

![](image11.jpg?w=900&h=450)\
*[https://gov.gearbox.fi/t/v2-discussion-pools-assets-and-allowedlist-policy-for-v2/1438/24](https://gov.gearbox.fi/t/v2-discussion-pools-assets-and-allowedlist-policy-for-v2/1438/24)*

Nous ajoutons 4 nouveaux yVaults à la AllowedList. Dans la v1, Gearbox n'avait que 2 yVaults intégrés - le yDAI et yUSDC. En d'autres termes, dans la v2, nous avons plus que doublé le nombre de yVaults.

Il est également important de garder à l'esprit que **de nouveaux actifs et contrats peuvent être ajoutés à la Gearbox AllowedList à tout moment**. S'il y a un yVault (ou toute autre chose) que les utilisateurs souhaitent ajouter à la liste, ils peuvent le faire savoir et se faire entendre sur le [discord](https://t.co/kueBdSelhA).

![](image3.jpg?w=900&h=532)

Les 4 futurs yVaults sont les suivants:
- Curve stETH Pool yVault
- Curve FRAX Pool yVault
- ETH yVault
- WBTC yVault

Vous pouvez retrouver beaucoup plus d'infos sur ces yVaults sur [l'article original](https://medium.com/gearbox-protocol/gearbox-v2-allowedlist-alpha-yearning-for-more-apy-c6c6f87427f4).

## Potentiel du yield farming à effet de levier avec Yearn

Par souci de brièveté, nous allons seulement passer en revue le potentiel de rendement le plus élevé. C'est à dire avec le Curve stETH Pool yVault.

**Le stETH Vault rapporte actuellement 6,58 %.**

En supposant que Gearbox a un coût d'emprunt de l'ETH similaire à Aave (actuellement 2,68%), nous obtenons les résultats suivants:

![](image5.jpg?w=900&h=658)

Avec un effet de levier de 7x (*le maximum que vous pouvez emprunter serait d'environ 9x en fonction des LT et de la LTV - mais nous recommandons généralement de ne pas maximiser votre effet de levier afin d'avoir une marge de sécurité*), vous pourriez gagner environ 30 % sur votre position ETH en utilisant l'effet de levier + le yVault Curve stEth.

Encore une fois  il faut garder à l'esprit que cette stratégie comporte des risques. Par exemple, **en cas d'écart important entre le stETH et ETH, vous pourriez tout à fait finir par être liquidé avec un effet de levier 7x**. Si le depeg est > ~6% (par exemple, stETH passe à 0,94 ETH, ce qui **s'est produit dans le passé**, alors vous risquez d'être liquidé.

> Vous pouvez opter pour un effet de levier 5x, auquel cas vous gagneriez ~22% et le depeg devrait être > 14% (1 stETH = 0,86 ETH) pour que vous soyez à risque de une liquidation.

C'est la beauté de Gearbox - **vous choisissez votre propre destin** !

![](image10.jpg?w=900&h=450)

*Si vous souhaitez nous rejoindre, rejoignez le Discord. :*

- Main website: [https://gearbox.fi/](https://gearbox.fi/)
- General Docs: [https://docs.gearbox.finance/](https://docs.gearbox.finance/)
- Developer Docs: [https://dev.gearbox.fi/](https://dev.gearbox.fi/)
- Mainnet dApp: [https://app.gearbox.fi/](https://app.gearbox.fi/)
- Governance Forum: [https://gov.gearbox.fi/t/start-here-forum-rules/](https://gov.gearbox.fi/t/start-here-forum-rules/)
- Blog: [https://medium.com/@gearboxprotocol](https://medium.com/@gearboxprotocol)
- Snapshot: [https://snapshot.org/#/gearbox.eth](https://snapshot.org/#/gearbox.eth)
- Github: [https://github.com/Gearbox-protocol](https://github.com/Gearbox-protocol)
- Twitter: [https://twitter.com/GearboxProtocol](https://twitter.com/GearboxProtocol)
- Et les pages notion: [https://gearboxprotocol.notion.site](https://gearboxprotocol.notion.site/gearboxprotocol/Gearbox-DAO-23966f122ae4421492819242b30a0e7a)
