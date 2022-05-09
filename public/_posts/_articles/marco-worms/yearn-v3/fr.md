---
title:  "Vaults Yearn v3"
image:
  src: ./image1.jpg
  width: 900
  height: 450
date: '2022-05-02'
author: Marco Worms
translator: Cryptouf
---

![](./image1.jpg?w=688&h=900)

Alors que nous anticipons les changements incroyables que les Vaults v3  apporteront aux degens et aux développeurs, nous avons pu parlé avec le le leader de l'équipe de conception de la v3. Nous avons été surpris de découvrir le nombre de nouvelles fonctionnalités ! Au départ, notre conversation a commencé autour de la norme [ERC-4626](https://twitter.com/iearnfinance/status/1511444220850184197) qui normalise les vaults à travers les protocoles, mais il s'avère que ce n'est que la partie émergée de l'iceberg.

# Le but de la v3 est d'améliorer tous les aspects essentiels des yVaults de Yearn 

### Sécurité

Maintenir la position de Yearn en tant que leader de sa catégorie concernant la sécurité de l'écosystème DeFi.

### Développement

Réduit les frictions lors de la création de stratégies et permet un plus large éventail de stratégies à l'intérieur d'un vault.

### Automation

Allow more vault functions to be automated besides harvest, getting one step closer to the dream of the 100% automated vault.

Permettre d'automatiser plus de fonctions a l'interieur des vaults en plus des récoltes, et se rapprocher un peu plus du vault ultime qui sera 100 % automatisé.

## Afin de s'attaquer au grand projet de lav3, les développeurs travaillent sur les éléments suivants :

### Augmenter la modularité

Implémenter du code simple et de manière robuste dans le contrat des yVaults, afin de permettre une logique plus intelligente dans les modules pouvant être itérés.

Adopter la norme ERC-4626 qui permet à nos vaults d'être compatibles avec tous les autres protocoles voulant l'utiliser.

### Améliorer la relation Stratégie <-> Vault

Permettre de tester les stratégies plus simplement, le déploiement et, globalement, l'inclusion de plus d'outils pour permettre un plus large éventail de possibilités de générer des rendements, y compris des fonds de vérouillés, des stratégies plus risquées et des stratégies multichaînes.

### Créer de nouveaux produits

Créez de nouveaux produits comme les "Junior Tranches" qui permettent des stratégies plus risquées et permettent aux utilisateurs de choisir une option de dépôt avec un plus haut risque.

Autoriser plus d'un vault pour chaque type de jeton

Autoriser les vaults à être contrôlés par des multisigs et ainsi permettre de les partagés entre protocoles partenaires

## Flexibilité

La v3 donnera aux développeurs et aux stratèges plus de flexibilité pour déployer leur code. Cela augmentera la modularité des contrats et ouvre également les portes à de nouvelles façons de déposer dans des vaults.

Cela permettre également une meilleure automatisation des contrats périphériques : avec la v2 seules les fonctions de harvest sont automatisées . Avec la v3 on se rapprochera d'un vault 100% automatisé car d'autres fonctions sont plus faciles à automatiser avec le [Keep3r Network] (https://keep3r.network/).

> **Nous voulons aller vite et ne rien perturber** — Skeletor

## Stratégies sous stéroïdes

Les coffres v2 avaient une limite de 20 stratégies par coffre, dans la v3 cette limite sera augmentée. De plus, les stratégies plus risquées suivront désormais un modèle de contrat analogue aux [tranches senior/junior](https://corporatefinanceinstitute.com/resources/knowledge/finance/junior-tranche-debt/).

Les stratégies plus risquées auront désormais un contrat de tranche junior, ce qui signifie que l'utilisateur déposera d'abord des jetons dans un coffre-fort et pourra ensuite choisir de déposer les jetons de coffre-fort dans un contrat de tranche junior pour une option à risque plus élevé/récompense plus élevée. Les utilisateurs peuvent également choisir des stratégies spécifiques sur lesquelles se concentrer. Il s'agit d'une fonctionnalité facultative que les personnes ayant un appétit pour le risque plus élevé pourraient vouloir explorer.

Une autre chose sur laquelle l'équipe v3 travaille est de savoir comment décentraliser [l'approbation de la stratégie](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d). Aujourd'hui, de nombreux aspects de l'audit de sécurité chez Yearn sont centralisés. Mais être capable de décentraliser ce processus donnerait plus de place pour faire évoluer le produit.

D'autres fonctionnalités se concentrent sur l'amélioration de l'utilisation globale des coffres par les utilisateurs, les stratèges et les développeurs, telles que :

- ySwaps (le service que les stratèges utilisent pour effectuer des échanges de jetons) est optimisé pour l'efficacité du gaz.
- Les récoltes v2 prennent 6 heures pour que les cours des actions montent, mais dans la v3, le temps est dynamique, améliorant la protection MEV.
- La modularité accrue autour des processus de voûte nous permet de nouer des partenariats plus étroits avec d'autres protocoles et de créer des solutions plus spécialisées pour leurs cas.

## Code des Vaults
Le code des vaults V2 est ecrit en [Vyper](https://vyper.readthedocs.io/en/stable/), mais les V3 sont développés avec [Solidity](https://docs.soliditylang.org/en/v0.8.13/).

Vyper est un langage robuste comme le prouve le système v2, mais dispose d'une communauté de développeurs plus petite. Notre décision d'opter pour solidity est basée, entre autres facteurs, sur la possibilite d'interagir avec beaucoup plus de développeurs. Ce qui est crucial et nécessaire pour un projet comme celui-ci. Mais nous n'enterront pas Vyper et nous prevoyont un futur flamboyant. C'est pour cela que nous continuerons à l'utiliser pour nos smart contracts, n'importe lequel des modules autour des vault peut être développé avec Vyper.

![](./image2.jpg?w=688&h=900)
*[Statistiques d'utilisation des langages de programmation par Defillama blockchain](https://defillama.com/languages)*

Les statistiques sur les langages de codage utilisés dans les blockchains peuvent être retrouvées sur [Defillama](https://defillama.com/languages). Actuellement Vyper représente environ 10 % et Solidity 69 %. Cela reflète la domination de Solidity, et comme nous avions besoin de plus de contributeurs pour déployer la v3, nous avons choisi cette technologie qui nous permettra de constituer une équipe expérimentée plus rapidement.

## Le meilleur est a venir

Nous n'avons qu'effleurer la surface de ce que v3 offrira. Les contributeurs de Yearn travaillent également à la création d'un certain nombre d'autres produits et fonctionnalités passionnantes ! 

Made by [yearn.finance](https://yearn.finance/#/portfolio)
