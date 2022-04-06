---
title: "Configurer des notifications pour suivre des transactions sur la blockchain avec Tenderly"
image:
  src: ./cover.jpg
  width: 1200
  height: 675
date: '2022-03-18'
author: Marco_Worms
translator: Cryptouf
---

Dans l'[article](https://medium.com/iearn/yearn-finance-partners-with-tenderly-to-supercharge-development-debugging-incident-analysis-6489260298a5) annonçant le partenariat entre Yearn et Tenderly, une section mentionnait:

> "Tenderly propose des alertes personnalisables intégrées qui permettent même aux utilisateurs novices de créer des alertes sur pratiquement n'importe quel événement  on-chain."
>
Un contributeur de Yearn m'a contacté pour en savoir plus à ce sujet, et je pense que c'est une excellente occasion de présenter cette fonctionnalité et de donner un exemple pour comprendre comment cela fonctionne ! Commençons par examiner quels réseaux nous pouvons utiliser avec Tenderly en plus du mainnet Ethereum:

![](./image1.jpg?w=909&h=441)\
*Réseaux supportés par Tenderly*

Nous allons explorer le service **“Monitoring -> Alerting”** situé dans la barre latérale du [Dashboard Tenderly](https://dashboard.tenderly.co/) après s'être connecté à n'importe quel projet:

![](./image2.jpg?w=237&h=199)\
*Barre latérale sur le côté gauche après s'être connecté*

Il y a une mise en garde concernant l'utilisation gratuite qui s'affichera lorsque vous ouvrirez la page d'alerte:

`Vous recevrez des alertes toutes les 15 minutes environ. Mettez à niveau votre abonnement Tenderly Pro/Dev pour recevoir des alertes en temps réel`

Pour faire un test, cela n'est pas un problème, vous pouvez donc continuer avec la version gratuite. Pour une utilisation plus robuste des alertes, vous devrez mettre à jour votre compte.

Commençons par vérifier tout ce que nous pouvons faire lorsque nous essayons de créer une nouvelle alerte (**create a new alert**). L'article n'explorera pas toutes les possibilités, c'est a vous de faire des tests pour comprendre la meilleure utilisation pour vos besoins:

![](./image3.jpg?w=1537&h=669)\
*Créer une alerte*

- **Alert Type** seront les conditions que nous définirons pour qu'un événement on-chain déclenche une notification:

![](./image4.jpg?w=1437&h=413)\
*tous les types d'alerte*

- **Alert Target** sera le contrat surveillé par les événements et conditions ci-dessus:

![](./image5.jpg?w=991&h=253)\
*toutes les cibles d'alerte*

- **Alert Destinations** est l'endroit ou il y aura les notifications lorsque le contrat ci-dessus remplira les conditions d'une alerte: 

![](./image6.jpg?w=937&h=195)\
*toutes les destinations d'alerte*

Avant de créer une nouvelle alerte, nous devons d'abord:

- Décidez quels événements et de quel contrats nous voulons être informés
- Ajoutez le contrat que nous voulons suivre dans l'onglet "Contracts", ainsi nous pourrons le cibler à l'étape 2
- Connectez-vous aux programmes de destination (nous utiliserons telegram pour cet exemple) afin que nous puissions envoyer des notifications à l'étape 3

Maintenant commençons!

### Ajouter Telegram comme destination

Dans l'onglet Alerte, allez dans « Destinations » dans le menu du haut et cliquez sur « Telegram »:

![](./image7.jpg?w=1364&h=617)\
*Ajouter Telegram comme destination*

Annotez-le et suivez les instructions pour permettre au bot de vous envoyer des messages:

![](./image8.jpg?w=591&h=475)\
*suivez les instructions pour permettre au bot de vous envoyer des messages*

Pour terminer le processus ci-dessus, copiez les "magic words" de l'étape 3. Collez-le dans le chat avec le bot telegram de Tenderly qui s'ouvrira en cliquant sur [@TenderlyRobot](https://t.me/TenderlyRobot).

![](./image9.jpg?w=772&h=235)\
*Message de confirmation indiquant que le bot peut désormais envoyer des messages dans ce chat!*

### Surveiller les dépôts/retraits d'un Vault Yearn

Commençons par surveiller certains événements effectués sur le SPELL yVault sur le réseau Fantom. Nous avons besoin de connaître l'adresse du contrat SPELL yVault, nous pouvons la trouver en allant sur l'[interface Yearn Vaults](https://yearn.finance/#/vaults) et en cliquant sur le coffre SPELL.

![](./image10.jpg?w=625&h=287)\
*Yearn Vaults sur Fantom*

Après avoir cliqué dessus, nous verrons cette page avec tous les détails du coffre-fort, cliquez sur le bouton « Explorateur de blocs » qui vous mènera au contrat du coffre-fort: 

![](./image11.jpg?w=1157&h=757)\
*Details du SPELL yVault*

Cela ouvrira le [Contrat SPELL yVault](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d) sur FTMScan (Fantom fork of [Etherscan](https://etherscan.io/)) : 

![](./image12.jpg?w=1367&h=845)\
*[Contrat SPELL yVault sur FTMScan](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d)*

Voici les informations importantes pour notre exemple:
- D'abord l'adresse du contrat
- Ensuite, le "Token Name" (aide lorsque vous avez de nombreux onglets de contrat ouverts)
- Enfin l'historique des méthodes (fonctions) que ce contrat a exécuté

Pour notre exemple, **nous ajouterons une notification lorsque quelqu'un déposera des jetons dans le vault**. Pour ce faire, copiez l'URL de la page de contrat:

https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d

Allez ensuite dans l'onglet contrat de Tenderly et cliquez pour importer ce contrat sur le dashboard, cela nous permettra de créer des alertes:

![](./image13.jpg?w=1399&h=681)\
*Contrat importé dans Tenderly*

Collez l'adresse, sélectionnez le “Vyper Contract” (le nom s'affiche comme ceci car les Vaults Yearn utilise le [langage de programmation Vyper] (https://vyper.readthedocs.io/en/stable/index.html)). Lorsqu'il apparaît, cliquez sur "Import":

![](./image14.jpg?w=1155&h=909)\
*Importation de contact dans Tenderly*

Après l'importation, le contrat est prêt pour que nous créions une alerte pour celui-ci!

![](./image15.jpg?w=865&h=467)\
*Importation de contact dans Tenderly*

C'est parti ! Maintenant créons une alerte:

![](./image16.jpg?w=1817&h=713)\
*Créer une nouvelle alerte*

Nous voulons recevoir une notification chaque fois que quelqu'un dépose dans le yVault SPELL. Pour ce faire, nous allons vérifier la méthode "Deposit" qui se trouve dans le contrat. "méthode" est un nom analogue à "function call", c'est donc le type d'alerte que nous utiliserons dans ce cas.

![](./image17.jpg?w=761&h=265)\
*Sélectionnez le type d'alerte

La cible sera une adresse :

![](./image18.jpg?w=759&h=245)\
*Sélectionnez l'alerte cible*

Vous pourrez sélectionner le contrat que nous avons ajouté précédemment, puis choisir n'importe quelle fonction qui existe dans ce dernier. Notez que de nombreuses fonctions peuvent avoir des noms similaires, les fonctions qui commencent par "_" sont souvent des fonctions internes privées et ne seront pas celles que nous recherchons.

Dans notre exemple, nous avons _deposit (privé : pour usage interne) et deposit (public : pour utilisateurs externes). Nous choisirons celle qui est public:

![](./image19.jpg?w=1319&h=679)\
*Sélectionnez la cible de l'alerte*

Enfin, choisissez la destination telegram qui a été configurée précédemment et enregistrez l'alerte: 

![](./image20.jpg?w=1325&h=909)\
*Sélectionnez la destination de l'alerte*

Nous avons fini! L'alerte est créée et vous recevrez un message chaque fois que quelqu'un dépose des $SPELL dans ce yVault!

![](./image21.jpg?w=1521&h=739)\
*Alerte créée avec succès !*

Voici un exemple de notification que vous recevrez après avoir configuré cette alerte et que quelqu'un aura déposédans le vault.

![](./image22.jpg?w=495&h=579)\
*Notification d'un nouveau dépôt de SPELL sur le Fantom yVault envoyée sur Telegram!*

## Remarque finale

Cet exemple, utilisant Yearn, présente un moyen simple de surveiller l'appel d'une fonction d'un contrat. Si vous prnez le temps d'explorer les différentes  options, vous verrez qu'il existe de nombreuses positibilités et que les applications sont très variées, par exemple:

- Les créateurs de collections NFT peuvent surveiller chaque fois que leur contrat appelle la création d'un nouveau jeton et le partager automatiquement sur Discord
- Les personnes surveillant les flux Tokenomics peuvent utiliser des notifications pour garder un œil sur les soldes de portefeuille et les actions des contrats pour voir si les développeurs font ce qui est prévu

Vous pouvez surveiller tout type d'activité on-chain chaîne et être averti, faites vos propres tests et utilisez votre imagination!

Rédacteur: [Worms](https://twitter.com/MarcoWorms), Relécteurs: [Cryptouf](https://twitter.com/cryptouf), [Dark Ghosty](https://github.com/DarkGhost7)
