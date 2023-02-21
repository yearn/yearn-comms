---
layout: post
title: "Yearn Finance Newsletter #52"
categories: [Newsletters]
image:
  src: ./cover.jpeg
  width: 1152
  height: 576
author: Yearn
date: '2022-01-02'
translator: Cryptouf
---

### Semaine du 2 Janvier, 2022

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/cover.jpeg?w=880&h=440)

Bienvenue à la 52e édition de la Newsletter Yearn Finance. Notre objectif avec cette newsletter est de tenir la communauté Yearn, et plus généralement la communauté crypto, au courant des dernières nouvelles, y compris les lancements de produits, les changements de gouvernance et les mises à jour de l'écosystème. Si vous souhaitez en savoir plus sur Yearn Finance, suivez nos comptes [Twitter](https://twitter.com/iearnfinance) et [Medium](https://medium.com/iearn) officiels.

## Résumé

- Le vote pour YIP-65 est passé
- [Proposition] - Programme pilote de rachat en DCA
- Repenser Yearn
- Yearn a reçu une subvention de 1 million FTM de la part de la Fondation Fantom
- Vaults chez Yearn
- Nouvelles de l'écosystème

## YIP-65 Enters Voting

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image2.jpg?w=980&h=871)

En résumé, le YIP-65 cherche à faire évoluer le rôle que joue le jeton $YFI chez Yearn sur quatre points distincts. Cela cimentera la vision du jeton comme fondement de la gouvernance.

Cela se fera en dirigeant une partie des $YFI qui est rachetée par la Trésorerie à la suite du [BABY](https://yips.yearn.finance/YIPS/yip-56) en tant que récompenses aux détenteurs de jetons $YFI qui participent activement à la gouvernance de Yearn.

Ensuite, le rôle que joue le $YFI dans la gouvernance de Yearn évoluera à travers quatre composants distincts.

1: xYFI. Distribuez les $YFI qui ont été rachetés comme récompenses dans un vault YFI.

2: YFI verrouillé par le vote. Introduira le verrouillage de style ve du $YFI (veYFI) jusqu'à quatre ans (la durée maximale exacte reste à déterminer), où une durée de verrouillage plus longue donne une plus grande part du pouvoir de vote et une plus grande part des récompenses $YFI. Une sortie anticipée de ce verrouillage est possible en payant une pénalité qui est redistribuée aux autres détenteurs de jetons verrouillés.

3: Jauges de coffre + Vote. Introduira des jauges de coffre où les déposants stakent leurs jetons et gagnent des récompenses $YFI en fonction de leur quantité de veYFI. Les $YFI sont affectés à des jauges en fonction des votes hebdomadaires sur la gouvernance.

4: Fonctionnalités « Travail utile ». Élargissez les devoirs et les responsabilités des votants et de leur $YFI verrouillé, en échange de l'obtention de récompenses supplémentaires. Dans attente de la conception du coffre tbc v3.

Ensuite, un mandat sera donné aux développeurs de Yearn pour déployer les composants ci-dessus à leur discrétion au fur et à mesure qu'ils deviennent disponibles.

Enfin, les $YFI éligibles pour voter sur la Yearn Governance seront limités à ceux qui sont stakés sur forme de xYFI (à partir de la phase 1 et au-delà) ou verrouillés (à partir de la phase 2 et au-delà).

En savoir plus sur les mises à niveau et les avantages de la tokenomics proposés [ici](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994) et voter sur le snaposhot [ici](https://snapshot.org/#/ybaby.eth/proposal/0x8f7417fa5565d9f46e16618503e8808c36d51b2a9e8217a68c632d7c090d69d9).

Un grand merci aux auteurs : @0xJiji, @banteg, daryllautk, HAtTip3675, @onlylarping, @vany365 et @Wot_Is_Goin_On pour avoir créé cette proposition importante.

## [Proposition] - Programme pilote de rachat en DCA

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image3.jpg?w=690&h=301)

L'objectif de ce programme pilote est de fournir une meilleure compréhension à travers un exemple concret, que le “DCAing” est le meilleur moyen d'exécuter des rachats pour la trésorerie.

L'équipe Yearn, sur la base d'un vote snapshot, allouera 1 million de dollars d'ETH (249,376559 ETH @ 4010 $ par ETH) à ce programme de rachat et créera une position de 30 jours sur Mean Finance à une vitesse de 8,31255197 ETH par jour

En savoir plus sur la proposition [ici](https://gov.yearn.finance/t/proposal-mean-dca-buyback-pilot-program/12065).

## Repenser Yearn

Nous sommemes en 2022, il est temps de ré-analyser vos paris concernant la DeFi. Voici un bref aperçu des raisons pour lesquelles Yearn est différent.

Alors que Yearn est généralement étiqueté comme un « agrégateur de rendement », cela peut conduire à l'idée qu'une équipe travaille à générer du rendement. Pire encore, il est parfois considéré comme un simple farmeur de CRV. Ce n'est pas le cas.

Il existe actuellement des contraintes importantes sur la génération de rendement, seulement un petit groupe de personnes est capable élaborer des stratégies, des frais de gas élevés limitant certaines stratégies, un manque de protocoles fiables pour élaborer des stratégies et un manque de moyens pour automatiser les processus.

Plutôt que d'attendre que ces contraintes se relâchent (et elles le sont déjà, avec plus de stratèges dans nos équipes, d'autres chaînes et L2 avec des frais bas), Yearn a secrètement construit une infrastructure pour optimiser l'interaction entre les protocoles, les stratègies et le capital à grande échelle.

Yearn a construit la machine qui construit la machine d'agrégation de rendement (pour paraphraser M. Musk), prête pour utiliser toujours plus de jetons , de protocoles complexes, de chaînes, de stratègies, d'outils et de capitaux.

Avec 7 milliards de dollars piratés dans la DeFi en 2021, l'accent a été mis sur la sécurité. La plupart des protocoles DeFi limitent les risques financiers en ajustant les paramètres (par exemple, les protocoles de prêt réduisent la valeur prêt/garantie des actifs plus risqués) et minimisent les risques technologiques en se concentrant sur une seule chose (par exemple, les prêts).

Yearn utilise tous les aspects de la DeFi car il combine plusieurs protocoles et stratégies dans un seul coffre.. D'autres protocoles se vantent du nombre d'audits qu'ils ont effectués. La yAcademy forme la prochaine génération d'auditeurs - aidant à accélérer l'approbation et la vérification de nouvelles stratégies.

Après la sécurité vient l'efficacité du capital - déterminer comment un coffre doit être divisé entre les protocoles de prêt, les LP, les opportunités de farming à effet de levier et d'autres stratégies pour optimiser les rendements ajustés au risque. Il faut ensuite essayer de l'automatiser.

Une partie de la raison derrière le "lancement équitable" du $YFI était l’idée que de produire un rendement ajusté au risque élevé pour les milliards de dollars présents dans la TradFi serait trop de travail pour une seule équipe. L’academie Yean forme désormais des stratèges.

L'évolutivité nécessite de réduire les processus manuels - rachats, récoltes, modification des pondérations de la stratégie, hedging après les mouvements de prix. Ce n'est pas un hasard si André a créé Keep3r. Il existe même un groupe d'analyse de données qui travaille sur le moment optimal pour effectuer des rachats.

La coordination avec de la décentralisation - comment construire un système qui incite les personnes qui ne se sont jamais rencontrées à faire tout cela ? Coordinape nous aide beaucoup - un outil dont les origines remontent à un problème rencontré par un groupe Yearn - est maintenant utilisé par d'innombrables DAO.

Chaque nouveau protocole DeFi crée une opportunité potentielle pour un stratège. La nouvelle stratégie améliore le rendement ajusté au risque des coffres, ce qui incite à plus de capital, générant plus de frais pour Yearn pouvant être utilisés pour nous développer.

Les exemples de ce fil montrent comment Yearn tente de résoudre les problèmes généralisés de la DeFi. Le terme "protocole DeFi" ne semble pas lui rendre justic. ,Peut-être que Yearn pourrait plutôt être décrit comme une DAO fintech.

Merci à Wot_Is_Goin_On pour ce fil incroyable qui peut être retrouvé [ici](https://twitter.com/Wot_Is_Goin_On/status/1477277152336916484).

## Yearn a reçu une subvention de 1 million FTM de la part de la Fondation Fantom

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image4.jpg?w=1100&h=1092)

Yearn a reçu une subvention de 1M de FTM de là par de la Fantom Foundation.

Nous n'avons pas dump, plus de 90 % de ces FTM ont été déposés dans le coffre FTM. les autres coffres ont reçus un don proportionnel pour une augmentation immédiate de valeur de 1%.

Cette subvention est la première d'une longue série, nous continuerons à en recevoir davantage au fur et à mesure que nous atteindrons les objectifs en terme de TVL.

## Vaults chez Yearn

Vous pouvez trouver une description détaillée des stratégies de tous nos yVaults actifs [ici](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Nouvelles de l'écosystème

[Check out DeFi Saver’s new Smart Savings dashboard including Yearn](https://twitter.com/DeFiSaver/status/1476614075815809028?s=20)

[See the 2021 Yearn contributor hoodie made by loldefi](https://twitter.com/loldefi/status/1477062572595884032)

[Yearn continues to buyback yvBOOST](https://twitter.com/wavey0x/status/1474946151006842884)

[Read an analysis on $CRV bribes including yvBOOST](https://twitter.com/0xSEM/status/1475284063204388867)
