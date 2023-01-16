---
layout: post
title: "Yearn Finance Newsletter #59"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1000
  height: 500
author: Yearn
date: '2022-04-06'
translator: Cryptouf
---

### Semaine du 5 Avril, 2022

![](./cover.png?w=1000&h=500)

Bienvenue à la 59e édition de la Newsletter Yearn Finance. Notre objectif avec cette newsletter est de tenir la communauté Yearn, et plus généralement la communauté crypto, au courant des dernières nouvelles, y compris les lancements de produits, les changements de gouvernance et les mises à jour de l’écosystème. Si vous souhaitez en savoir plus sur Yearn Finance, suivez nos comptes [Twitter](https://twitter.com/iearnfinance) et [Medium](https://medium.com/iearn) officiels.

## Résumé

- Présentation de notre dernier yVault
- Parlons strategies avec Facu à l'ETHDubai
- Rejoindre la DAO Yearn: Onboarding
- Comment Yearn utilise Tenderly
- La YFI Boarding School
- Les contributeurs chez Yearn
- Vaults chez Yearn 
- Nouvelles de l’écosystème

# Présentation de notre dernier yVault

![](./image2.png?w=900&h=473)

Notre nouveau yVault Curve Rocket Pool est dispo et vous pouvez gagner des récompenses de staking ETH avec les 2 côtés de la pool Curve Finance comprenant le Rocket Pool ETH (rETH) et le Lido stETH (wstETH). Étant donné que les deux côtés de la pool sont des jetons ETH de staking liquides, vous gagnerez des récompenses de staking Ethereum, des récompenses $CRV et une partie des frais de négociation de Curve. Yearn récoltera et redéposera automatiquement les récompenses CRV et CVX dans le yVault pour augmenter votre rendement.

Utilisez Yearn Zaps pour déposer n'importe quel jeton principale ($ETH, $USDC, etc.) dans ce yVault. Zaps convertira automatiquement votre dépôt en rETH + wstETH, le déposera sur Curve et le stakera sur Yearn, le tout en une seule transaction.

Vous pouvez également déposer dans la Curve Rocket Pool manuellement en déposant des jetons Rocket Pool ETH (rETH) + Lido stETH (wstETH) sur Curve et en déposant ensuite vos jetons rETH + wstETH LP sur Yearn.

Rejoingez ce yVault dès maintenant en allant sur [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults)

# Parlons strategies avec Facu à l'ETHDubai

![](./image3.jpg?w=1024&h=512)

Lors du récent du ETHDubai qui s'est déroulé recemment, Saltyfacu, a passé en revue le coeur des stratégies chez Yearn, la partie centrale de Yearn.

Il a parlé les relations entre les yVaults, qui sont des ERC-20 écrits en Vyper, et les strategies, la partie comptable de Yearn écrite en Solidity. Les stratégies sont a la base de l'écosystème Yearn. Par exemple, le yVault yvUSDC est un yVault qui utilise jusqu'à 20 stratégies.

Les stratégies comportent chacune une allocation du capital différente et peuvent être attachées sans capital. Les utilisateurs interagissent avec les jetons des yVaults, qui possèdent des stratégies sous-jacentes pour interagir avec d'autres protocoles et dex.

Pour écrire une stratégie, vous aurez besoin de git, eth-brownie, ganache, du brownie-strategy-mix repository et du code VS. En termes de connaissances, vous aurez besoin de solides bases en programmation, de l'achèvement du niveau 4 (et +) de CryptoZombies, de la compréhension de l'interaction des protocoles DeFi et de beaucoup de volonté et de motivation.

Terminer et publier une stratégie nécessitent six étapes : diligence raisonnable, codage, examen par les pairs, expérimentation (avec des ape tax vaults), verifiation par des core devs/et comité pour vérifier la sureté des statégies de farming, puis production. Après tout cela, vous devez rester actif et surveiller la stratégie pour vous assurer que tout fonctionne comme prévu.

Découvrez la conférence complète [ici](https://youtu.be/ooYgIMlqITQ?t=21266)(à partir de 5:54:26).

Nous vous invitons à nous rejoindre et à donner votre avis en partocopant sur [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), ou [Github](http://github.com/yearn). Venez construire avec nous.

# Rejoindre la DAO Yearn: Onboarding

![](./image4.png?w=1024&h=768)

Dans cet article, Cryptouf et Farrahmay présente le processus d'onboarding pour rejoindre un DAO, et plus particulièrement celle de Yearn. Un résumé ci-dessous: 

Que doit savoir un nouveau contributeur lorsqu'il souhaite rejoindre une DAO ?Tout d'abord la choisir en fonction de la philosphie de la DAO et de ce qu'ils cherchent. 

Compte tenu de l'afflux quotidien de nouvelles personnes souhaitant rejoindre le web3, une vague de nouveaux contributeurs sur des canaux comme Discord, Telegram et Twitter déferle. Que fait Yearn pour permettre un bon recrutement ? Nous pensons qu'il est important de clarifier notre mission et nos objectifs, pour attirer les contributeurs avec le bon profil.

Le recrutement peut signifier différentes choses pour différentes DAO. Yearn a-t-il un plan de recrutement formel pour les nouveaux contributeurs ? Notre processus de recrutement utilise les 4 C - conformité, clarification, culture et connexion.

Que doivent faire les contributeurs pour réussir lorsqu'ils rejoignent une DAO ? Chaque membre a des comptetences différentes. Pour contribuer avec succès à une DAO, il faut être autonome et ne pas avoir peur de discuter et de poser des questions.

La première vague de contributeurs rejoignant les DAOs était beaucoup moins préoccupée par la rémunération, mais été principalement concentrée sur la construction du cadre et des fondations de la DAO. À mesure que de nouvelles vagues de contributeurs nous rejoignent, la rémunération est devenu un facteur essentiel. 

Consultez l'article complet [ici](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc). Un grand merci à Cryptouf et Farrahmay pour leur travail.

# Comment Yearn utilise Tenderly

![](./image5.png?w=1200&h=675)

Les étudiants en droit ont adderall. Les stratèges chez Yearn ont Tenderly. Avec des outils de surveillance, d'alerte, de débugage et d'analyse des incidents, Tenderly transforme les utilisateurs harcore de la DeFi en surhumains.

C'est tellement simple que n'importe qui peut l'utiliser. Dans son dernier article MarcoWorms vous comment configurer des alertes Telegram pour surveiller pratiquement toutes les actions on-chain sur toutes les principales chaînes EVM. Zéro codage requis!

Cliquez [ici](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba) pour découvrir un exemple concret. Dans cet exemple, Worms vous montre comment configurer un bot Telegram pour surveiller les dépôts et les retraits du $SPELL yVault.

La suite dépend de vous.

# Les contributeurs chez Yearn

![](./image6.jpg?w=800&h=510)

Si Yearn valorise une compétence plus qu'une autre, c'est la volonté de faire. Cela est tellement ancré dans la culture de Yearn que nous appelons nos contributeurs les plus actifs  les*Doers*. C'est un nom, mais c'est fondamentalement plus que ça… c'est une philosophie.

En tant que DAO décentralisé, Yearn n'a pas de patrons, pas de codes vestimentaires, pas de sorties au golf avec le PDG. Yearn n'a que des contributeurs. Comme pour toute DAO, il existe différents niveaux de participation.

Au premier niveau, il y a les utilisateurs, les détenteurs de jetons, les votants et les investisseurs. Au niveau de la couche plus profonde, il y a des contributeurs - des personnes du monde entier qui passent du temps sur un ou plusieurs projets.

Les contributeurs unissent leurs efforts (et sont rémunérés s'ils le souhaitent) via l'outil de coordination pour les DAOs créé chez Yearn : Coordinape. Chaque mois les contributeurs se répartissent en cercles et se portent garants des efforts les uns et des autres. Certains contributeurs travaillent pour Yearn une heure par semaine;  d'autres plusieurs heures par jour. Les tâches ne sont pas assignées. Et il n'y a pas de contrat obligeant les contributeurs à rester.

Beaucoup ont un autre travail. Certains contribuent à une demi-douzaine de DAO. Mais tous sont attirés par la passion de construit Yearn. Lorsqu'un contributeur veut tout quitter, il peut devenir un Doer.

Mais qu'est-ce que cela signifie exactement ? Les Doers contribuent avec plus de régularité. Ils aident à huiler les pièces mobiles de la machine Yearn. Ce ne sont pas des employés. Ils sont seulement ce que leur nom décrit : ce sont des Doers.

Ils font ce que Yearn doit faire pour évoluer, grandir et changer. Ils se heurtent à des murs, Mais ils les abattent. Ils construisent ce dont les autres ne font que parler. Comme tous les contributeurs de Yearn, les Doers n'accepte pas le statu quo. Ce sont des acteurs du changement. Ce sont des explorateurs. Ce sont des chercheurs. Ce sont des bâtisseurs. Il y a un Doer en chacun de nous.

L'industrialisation et les entreprises ont passé des générations à supprimer la volonté de faire. Ils voudraient que nous demandions avant d'agir. Ils confondent analyse et progrès. Ils utilisent des consultants pour développer des feuilles de route fantaisistes. Ils fixent des marqueurs et des jalons pour chaque centimètre de progrès. Ils doivent savoir comment chaque minute dépensée se traduit en bénéfices. c'est pour cela que les entreprises n'ont pas inventé les blockchains ^^

Contribuer à Yearn est un acte de rébellion. C'est un acte de reprise de permission. Ce n'est pas simplement rêver. C'est Faire !

CQFD

Chez Yearn, la porte est toujours ouverte. Mais vous seul pouvez la franchir.

# La YFI Boarding School

![](./image7.png?w=968&h=625)

La "YFI boarding school" est un nouveau programme permettant aux futurs stratèges de poser des questions et d'apprendre. Mais ce n'est pas une école ordinaire, les des stratèges experimentés organisent régulierement des heures de permanances ("office hours") pour aider les jeunes talents à évoluer.

Pour rejoindre la "YFI boarding school", vous devez : suivre le processus d'onboarding, manifester votre intérêt pour le développement d'une stratégie, trvailler ou élaborer activement une stratégie, et enfin, être invité à la rejoindre.

Vous pouvez également vous joindre en étant "blue pilled", autrement dit, invité, par n'importe quel contributeur principal de Yearn.

Vous vous demandez surement ce que c'est ? Vous le saurez quand ils viendront vers vous.

Postulez [ici](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) pour avoir une chance de rejoindre le pensionnat Yearn.

# Vaults chez Yearn

Vous pouvez trouver une description détaillée des stratégies de tous nos yVaults actifs [ici](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Nouvelles de l’écosystème

[Yearn has integrated Huobi Wallet onto our UI](https://twitter.com/HuobiWallet/status/1503939305135247365)

[Alchemix, a protocol built on Yearn infrastructure, has recently launched their V2](https://twitter.com/AlchemixFi/status/1503747272143740942)

[Check out new Yearn art from the PILLS Universe](https://twitter.com/pillsuniverse/status/1502662158810759168)

[Steakwallet provides one of the simplest UIs to deposit in Yearn vaults](https://twitter.com/steakwallet/status/1502018618506293248)

[Sturdy Finance has added new fBEETS collateral powered by Yearn on Fantom](https://twitter.com/SturdyFinance/status/1509962174629875726)

[Check out a sneak peek at the Yearn v3 design](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[Listen in to tracheopteryx speaking about DAOs on the Delphi DISRUPTORS podcast](https://twitter.com/tracheopteryx/status/1511000392552763399)

[Earn high fixed yields on USDC and DAI at Tempus Finance, powered by Yearn](https://twitter.com/TempusFinance/status/1508823240768167943)

[A vote to add yvYFI as collateral for the MAI stablecoin has been launched](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[Gas-free Yearn transactions on Fantom are possible thanks to wido](https://twitter.com/joinwido/status/1506718710836436996)
