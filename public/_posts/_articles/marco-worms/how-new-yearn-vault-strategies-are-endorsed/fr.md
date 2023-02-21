---
title: "Comment les nouvelles stratégies de Yearn sont approuvées"
image:
  src: ./image1.jpg
  width: 1280
  height: 800
date: '2022-02-02'
author: Marco_Worms
translator: Cryptouf
---

![](./image1.jpg?w=900&h=478)\
*Strategy Vetting Process*

Dans le dernier article sur [Vaults Yearn  et les Stratégies](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432), nous avons brièvement décrit le processus **d'approbation d'une stratergie**. Nous allons maintenant approfondir la manière dont ,n'importe qui, peut proposer une nouvelle stratégie et quelles mesures sont prises pour s'assurer que les stratégies approuvées sont résilientes.

![](./image2.jpg?w=900&h=478)\
*Récapitulatif rapide : une stratégie est un contrat qui investira et récoltera des bénéfices en utilisant les fonds déposés dans un Vault.*

Avant de soumettre une stratégie, le stratège doit rédiger un document de diligence: [SNX](https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view) et [Vesper](https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O) sont de bons exemples à suivre. Le document *Due Diligence* est important car il décrit toutes les spécificités des processus utilisés par une stratégie et passe en revue les pratiques de sécurité courantes des contrats intelligents. Yearn utilisera ce document pour valider les processus et évaluer les risques !
Voici une liste des informations que doit contenire ce document:

- Décentralisation du protocole : le protocole utilise-t-il un multisig ? De quels pouvoirs dispose-t-il ? Les contrats sont-ils modifiables ?
- Liste des rapports d'audit
- Tous les détails intrinsèque de la stratégie 
- Chemin de déploiement dans l'environnement de production

Le stratège peut coder une stratégie à l'aide du [“brownie-strategy-mix” template repository](https://github.com/yearn/brownie-strategy-mix). Lorsque la stratégie est terminée et examinée par 2 pairs, elle doit être déployée sur ape.tax qui est un site Web permettant de tester des vaults expérimentaux en conditions réelles.

![](./image3.jpg?w=352&h=28)\
*ape.tax vaults warning!*

Une fois le document terminé et après un certain nombre de récolt realisées avec succès, le stratège peut désormais [atteindre les contributeurs de Yearn](https://docs.yearn.finance/developers/v2/DEPLOYMENT#deploying-a-new-strategy ) pour faire approuver la stratégie par le [Safe Farming Committee](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533). Un examen de sécurité complet sera effectué par des examinateurs internes de Yearn.

Une fois que chaque commentaire (si il y en a) a été traité et que le code a été approuvé, la stratégie peut être envoyée en production soit en la redéployant et en la rattachant à un vault existant, soit en créant un nouveau vault.

**La stratégie est maintenant approuvée et accessible sur [yearn.finance](https://yearn.finance/) !!**

Désormais, le stratège + tous les contributeurs ayant participé a valider et verifier la statégie  recevront une commission de performance de 10 % sur le rendement des stratégies du vault. Étant donné que la sécurité est une préoccupation prioritaire, nous prévoyons d'augmenter la fréquence de surveillance/vérification et d'audit à mesure que la stratégie évolue et est utilisée:

- Lorsque la stratégie a **plus de 10 millions de TVL**, le stratège doit — créer un comité de 3 personnes ayant des connaissances approfondies surveillant la stratégie 24h/24 et 7j/7.
- Lorsque la stratégie a **plus de 100 millions de TVL**, elle sera ensuite auditée par une société d'audit externe réputée et nous commencerons à effectuer des examens internes récurrents.

Pour plus d'informations sur la façon dont les stratégies sont développées et approuvées, vous pouvez lire ces documents:

- [What are Vaults and Strategies?](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)
- [Official Docs — Getting Started with Vaults and Strategies](https://docs.yearn.finance/developers/v2/getting-started)
- [Official Docs — Deploying a Vault and Strategy V2](https://docs.yearn.finance/developers/v2/DEPLOYMENT)
- [Proposal on Yearn Safe Farming](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533)