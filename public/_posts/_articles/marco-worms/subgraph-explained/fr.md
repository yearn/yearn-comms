---
title: "Explication des Subgraphs : soif de données"
image:
  src: ./cover.jpg
  width: 900
  height: 406
date: "2022-08-04"
author: Marco_Worms
translator: Cryptouf
---

Un Subgraph est un service qui permet aux développeurs et aux utilisateurs d'interroger les données de la blockchain à l'aide de requête écrite dans un langage bien connu. Dans cet article, nous allons explorer le [Yearn Ethereum Subgraph](https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-subgraph-mainnet/graphql) et apprendre à l'interroger  (c'est-à-dire lui demander des données). Cela est extrêmement important pour les développeurs web3, mais de façon générale, tous les utilisateurs d'une blockchain.

Heureusement pour nous, nous avons aujourd'hui des services comme [The Graph](https://thegraph.com/en/) qui fournissent une interface conviviale pour communiquer avec les Subgraphs. Il faut noter que The Graph est un protocole complexe qui maintient un écosystème d'incitations pour faire en sorte que l'infrastructure continue à fonctionner.

![](image1.jpg?w=900&h=259)\
*Ce que vous pouvez faire avec The Graph*

Avant de plonger dans un exemple de subgraph, expliquons clairement pourquoi nous en avons besoin et ce qu'il offrer: la blockchain est une chaîne de blocs en croissance constante et chaque bloc contient une information à l'intérieur. Lorsque nous voulons retrouver une information, nous devons lire et agréger toutes les données. Il s'avère que cela peut devenir extrêmement complexe et difficile à maintenir (pour en savoir plus le dessus, vous pouvoir trouver des infos sur le "Event Sourcing"). Nous avons déjà des solutions pour traiter ces requêtes, les "Databases". Le subgraph maintiendra donc une base de données que nous pouvons interroger de manière plus conviviale.

![](cover.jpg?w=900&h=406)\
*Aperçu de ce que subgraph peut faire*

Maintenant que nous savons ce qu'est un subgraph, interagissons avec celui-ci : rendez-vous sur [**Yearn Vaults V2 Subgraph Mainnet** sur The Graph](https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-subgraph-mainnet/graphql). Vous devriez tomber sur cet écran :

![](image2.jpg?w=900&h=437)\
*[https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-subgraph-mainnet/graphql](https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-subgraph-mainnet/graphql)*

Dans le coin supérieur gauche, cliquez sur "Explorer" pour ouvrir un onglet avec de nombreuses entités que nous pouvons interroger :

![](image3.jpg?w=900&h=438)\
*Ouvrir l'onglet explorer*

Vous pouvez maintenant cliquer sur les entités dans la barre de gauche pour les ajouter à votre requête. Lorsque vous cliquez sur l'une d'entre elles, tous les champs que vous pouvez interroger seront développés.

Commençons par cliquer sur "vaults" et sélectionnez quelques champs à interroger. Les flèches rouges indiquent ce sur quoi nous avons cliqué. Cela remplira automatiquement le champ "query" pour vous et vous pourrez appuyer sur le bouton "Play" pour exécuter la requête et voir les résultats sur la droite. Dans cet exemple, nous avons répertorié tous les vaults Yearn avec leurs adresses et les jetons de dépôt :

![](image4.jpg?w=900&h=440)\
*Cliquez sur des paramètres et voyez ce qu'il se passe *!

Le résultat sont dispos dans un format appelé JSON. Ce format est un moyen standard de structurer les données sur le Web et il existe des tonnes de façons de visualiser et de manipuler ces données. Pour obtenir un tableau plus lisible, collez le résultat dans une application telle que [json2table](http://json2table.com/) :

![](image5.jpg?w=900&h=315)\
*Format semblable à un tableau suite a la requête sur json2table.com*

Vous pouvez filtrer les éléments et utiliser n'importe quelle fonctionnalités de [GraphQL](https://graphql.org/) pour créer des requêtes comme vous le souhaitez. Tous les champs contiennent les filtres suivants :

- **First** : Limite le nombre total de résultats dans une requête aux X premiers résultats
- **OrderBy / OrderDirection** : Vous aide à ordonner les résultats comme vous le souhaitez
- **Skip** : Ignorer les X premiers résultats.
- **Where** : Ouvre une liste avec toutes les propriétés et vous permet de filtrer les résultats qui ont des propriétés spécifiques que vous souhaitez

Explorons un peu avec "Where" pour interroger uniquement les vaults "Endorsed"(approuvées) : cliquez sur le filtre "where" dans les coffres :

![](image6.jpg?w=285&h=237)

Sélectionnez la propriété "classification" dans "where" et choisissez le champ "Endorsed"

![](image7.jpg?w=300&h=111)

Désormais, nous n'interrogeons que pour les vaults en fonctionnement :

[](image8.jpg?w=900&h=586)

Voici un autre exemple de requête où nous pouvons voir toutes les harvests qui se produisent à l'intérieur des stratégies de vault :

![](image9.jpg?w=900&h=581)

Il n'y a pas de limites à ce que vous pouvez faire subgraph. J'espère que ce petit tuto vous a inspiré et donne des idées pour explorer les subgraphs. Vous pouvez approfondir vos connaissance en utilisant [GraphQL](https://graphql.org/) pour apprendre toutes découvrir des astuces de requête.

Pour les programmeurs, vous pouvez utiliser GraphQL dans votre langage de programmation préféré et créer des applications Web3 avec quelque chose comme [ethers-io](https://github.com/ethers-io/ethers.js) (bibliothèque pour aider à signer les transactions sur le blockchain) par exemple.
