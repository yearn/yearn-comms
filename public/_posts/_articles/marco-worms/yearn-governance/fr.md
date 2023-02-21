---
title:  "Explication de la gouvernance chez Yearn: Propositions, jeton $YFI token, et exécution"
image:
  src: ./image1.jpg
  width: 900
  height: 482
date: '2022-04-19'
author: Marco_Worms
translator: Cryptouf
---

![](./image1.jpg?w=900&h=482)

Tout le monde peut participer et/ou proposer des idées sur: [Discord](https://discord.com/invite/6PNv2nF), [Twitter](https://twitter.com/iearnfinance), [Reddit](https://www.reddit.com/r/yearn_finance), [la Pool of Ideas](https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b), [Telegram](https://t.me/yearnfinance/), et [le forum de gouvernance](https://gov.yearn.finance/). Au fur et à mesure que les propositions mûrissent, elle se transforment en vote structuré. Le [jeton YFI](https://www.coingecko.com/en/coins/yearn-finance) est ensuite utilisé comme pouvoir de vote.

- Les détenteurs de jetons peuvent voter sur [la page Snapshot de Yearn](https://yearn.snapshot.page/#/), le vote n'utilise pas de gas, il est donc gratuit !
- Il existe également un [retired governance repository](https://docs.yearn.finance/contributing/governance/proposal-repository) qui n'est plus utilisé mais qui peut être exploré pour en savoir plus sur l'histoire de Yearn et les propositions ont déjà été faites !

Les types de propositions les plus courantes sur le forum sont les propositions d'amélioration de Yearn (Yearn Improvement Proposal=YIP), mais il existe d'autres types de propositions que vous pouvez retrouver [ici](https://gov.yearn.finance/t/yip-61-governance-2-0/10460):

- **Yearn Improvement Proposal (YIP)** Une proposition d'exécution déléguée aux détenteurs de YFI
- **Yearn Delegation Proposal (YDP):** Une proposition visant à modifier le pouvoir ou la portée d'une yTeam
- **Yearn Signaling Proposal (YSP):** Une proposition non contraignante pour signaler un sentiment ou l'intention de la communauté sur n'importe quel problème

### Champs de la gouvernance

Le [YIP-61](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) détermine le fonctionnement actuel de la gouvernance Yearn: Les [yTeams](https://gov.yearn.finance/t/yip-61-governance-2-0/10460#yteams-9) possédent  l'autorité, qui est donnée par les détenteurs de YFI via la déléguation, pour utiliser des pouvoirs limités de manière autonome. Détenir du YFI permet de contrôler la répartition du pouvoir entre les équipes, le YFI donne un pouvoir de vote exclusif pour passer ou refuser les changements qui modifient la dynamique du pouvoir au sein du protocole, tels que :

- Modifier les signataires du Multisig ou des yTeams
- Ratifier les yTeams
- Dépenser des fonds de la trésorerie
- Définir les frais de protocole
- Changer le contrat du YFI

## Processus de la gouvernance sur le forum

N'importe qui peut créer une nouvelle proposition sur [le forum de gouvernance Yearn](https://gov.yearn.finance/):

![](./image2.jpg?w=900&h=486)

### Template pour les propositions

Comme établi par le [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959), voici la méthode standard pour rédiger des propositions :

**Résumé**:
Le résultat attendu de la modification proposée, rédigé de manière non technique et accessible

- **Statut :** *(Ce champ n'est pas obligatoire mais il est utilise pour les autres membres)*
    - **Discussion :** Cette proposition est actuellement en phase de discussion. Conformément à nos règles, décrites dans le YIP-55, elle sera en discussion pendant au moins 3 jours et comportera avec un sondage non contraignant pour évaluer le sentiment des autres membres avant qu'il ne puisse se voir attribuer un numéro YIP et passer sur Snapshot pour un vote contraignant.
     - **Voting :** Cette proposition est actuellement en phase de vote. Votez sur Snapshot. Vous pouvez en savoir plus sur nos règles concernant le vote dans le YIP-55
     - **Passed :** Cette proposition a été adoptée le 25 avril 2021 à 7h00 UTC avec 99,97 % de votes pour

**Abstract:**
Une courte description (~200 mots) de la modification proposée. Expliquer clairement ce qu;il va se passer si la proposition est acceptée.

**Motivation:**
Le problème actuel qui justifie cette proposition

**Specification:**
Une longue description de la façon dont cette proposition résout le problème et  de la façon dont le YIP sera mis en en œuvre 

**Poll:**
Un vote intégrée au forum de gouvernance pour évaluer le sentiment de la communauté sur la proposition. Le résultat doit être supérieure à 50 %

### Discussion

Il doit y avoir suffisamment de temps (au moins 3 jours) pour la discussion afin que la proposition puisse être abordée sous plusieurs angles par les membres de la communauté. Il faut que le vote sur le post Discourse rassemble plus de 50% de vote positifs afin de pouvoir passer à l'étape suivante.

![](./image3.jpg?w=900&h=351)

Idéalement, les discussions devraient prendre le temps nécessaire pour clarifier tous les points soulevés par communauté. Discuter avec les différentes parties prenantes **avant** de proposer quelque chose est un bon moyen de mesurer le sentiment et vous aide à introduire et proposer des idées ou modifactions complexes avec un meilleur soutien dès le départ. Un exemple de proposition avec une excellente discussion est le [YIP-57](https://gov.yearns.finance/t/yip-57-funding-yearns-future/9319) qui a permis de minter 6 666 jetons YFI supplémentaires.

### Vote

Une fois l'étape de discussion passée, la proposition devient un YIP (ou peut-être un YDP selon son contenu) et sera soumise à la phase de vote. Pour soumettre un vote sur [la page Snapshot de Yearn](https://yearn.snapshot.page/#/) vous devez détenir au moins 1 YFI ou demander à quelqu'un de le faire pour vous, si la proposition est solide, cela ne devrait pas être un problème. Discutez avec un mod du forum pour obtenir un numéro officiel pour ce nouveau YIP !

Le pouvoir de vote correspond au nombre de YFI dont dispose un votant avec un ratio de 1:1. Ainsi, un portefeuille avec 10 YFI a 10 fois plus de pouvoir de vote qu'une personne ayant 1 YFI.

Le vote prend au moins 5 jours et nécessite plus de 50 % de votes positifs, il n'y a pas de quorum à respecter comme indiqué dans le [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959) : "l'exigence de quorum pourrait être difficile à quantifier et pourrait conduire à un ralliement chronophage d'électeurs apathiques"

![](./image4.jpg?w=900&h=543)

Détenir ou staker des YFI dans aux endroits suivants vous permet de voter :
- Votre portfeuille
- YFI yVault V2 
- Balancer YFI/WETH LP token
- Uniswap YFI/WETH LP token
- Sushiswap YFI/WETH LP token stakés sur MasterChef
- YFI comme collatérale sur MakerDAO
- YFI comme collatérale sur Unit Protocol
- Bancor

### Conclusion & Exécution

Si le vote passe avec plus de 50% de votes, la Yearn DAO doit l'exécuter. La façon dont la [Yearn DAO](https://yearnfinance.notion.site/yearnfinance/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249) fonctionne n'est pas similaire à une société, donc elle n'appliquera ni n'obligera une équipe ou un individu à exécuter la proposition. La DAO s'assurera que des incitations correctes sont à disposition pour que la proposition soit exécutée (en allouant par exemple un budget pour payer le travail effectué par les contributeurs)

Récemment, 2 YIP sont passés et sont en cour d'exécution par Yearn au moment cet article est écrit :

* [YIP-65: Evolving YFI Tokenomics](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
* [YIP-66: Streamlining contributor compensation](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)

## Lancement équitable du YFI

![](./image5.jpg?w=900&h=228)

[Andre Cronje](https://medium.com/@andrecronje) a été le premier constructeur de Yearn et ce qu'il a créé est devenu une DAO composée de plus de 200 participants actifs. Il n'est possible d'exister dans cette conficuration que parce que Cronje a cédé chaque centimètre de pouvoir qu'il avait sur le protocole, et il l'a fait par le biais du YFI. Quiconque a utilisé les services et l'écosystème de Yearn au début a reçu ce pouvoir, et vous pouvez trouver des informations sur la façon dont ce processus s'est déroulé dans les article de Andre :

1) [YFI](https://medium.com/iearn/yfi-df84573db81)
2) [Earning YFI curve.fi/y](https://medium.com/iearn/earning-yfi-y-curve-fi-53b5fd347f0f) 
3) [YFI rewards pool](https://medium.com/iearn/yfi-rewards-pool-810ef9256ec6)
4) [Pool #3 Meta Yield Governance](https://medium.com/iearn/pool-3-meta-yield-governance-58f68e6d2f19)

## Ressources supplémentaires

Si vous êtes à la recherche d'inspiration pour faire une nouvelle proposition, vous pouvez consulter les YIP suivants qui ont fait l'objet de discussions approfondies et ont modifié la dynamique du pouvoir au sein du protocole :

* [YIP 32: Remove YFI burning](https://gov.yearn.finance/t/yip-32-remove-yfi-burning/1907)
* [YIP 36: System Rewards as Operational Capital](https://gov.yearn.finance/t/yip-36-system-rewards-as-operational-capital/2311)
* [YIP 41: Temporarily Empower Multisig](https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630/2)
* [YIP-51: Set Vault v2 fee structure](https://gov.yearn.finance/t/yip-51-set-vault-v2-fee-structure/7752)
* [YIP-52: Make Strategist Skin in Game Partner for Make Benefit of Glorious Brain of Yearn](https://gov.yearn.finance/t/yip-52-make-strategist-skin-in-game-partner-for-make-benefit-of-glorious-brain-of-yearn/7856)
* [YIP-54: Formalize Operations Funding](https://gov.yearn.finance/t/yip-54-formalize-operations-funding/7956)
* [YIP-55: Formalize the YIP Process](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)
* [YIP-56: Buyback and Build](https://gov.yearn.finance/t/yip-56-buyback-and-build/8929)
* [YIP-57: Funding Yearn’s Future](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319)
* [YIP-61: Governance 2.0](https://gov.yearn.finance/t/yip-61-governance-2-0/10460)
* [YIP-65: Evolving YFI Tokenomics](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
* [YIP-66: Streamlining contributor compensation](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)
