---
title:  "Auto-hébergement de services Web3"
image:
  src: ./image1.jpg
  width: 1400
  height: 702
date: '2022-03-31'
author: Marco_Worms
translator: Cryptouf
---

![](./image1.jpg?w=1400&h=702)

Le Web3 offre une nouvelle façon de communiquer avec les applications: les applications ne sont plus hébergées sur des serveurs centralisés mais plutôt sur des blockchains, qui sont des systèmes décentralisés. Ce type d'applications, construites sur des fondations décentralisées, résistent aux coupures et à la censure. Mais cela pose un problème : l'interface de l'application que les utilisateurs utilisent avec leur navigateur Web repose souvent sur des entités centralisées.
Dans cet article, nous allons voir comment auto-héberger des interfaces d'application pour les services de base de l'ecosysteme Yearn et d'autres protocoles Defi. Si les sites Web officiels ne sont plus accessibles pour une raison quelconque, vous pourez toujours utiliser ces services par vous-même puisque la blockchain, elle, n'est jamais en panne ou censurée !

## Back-end, Front-end, Web3!

Une introduction rapide de ces concepts:

- **Front-end** est le nom donné à la partie de l'application qui est vue par l'utilisateur, comme un site Web ou une application mobile.
- **Back-end** est le nom donné à la partie de l'application qui n'est pas visible par l'utilisateur. De nombreuses actions front-end s'appuient sur le back-end pour être réalisées.

Sur le Web3, la blockchain parvient à décentraliser le back-end, mais le front-end sera toujours proposé à l'utilisateur en utilisant la méthode centralisée par défaut:

- L'utilisateur demande au navigateur d'accéder à une page (exemple http://yearn.finance)
- Le navigateur demande au DNS l'adresse IP de cette adresse (13.227.124.73)
- Le navigateur demande les fichiers pour l'IP

Et si l'un de ces deux évènements se produit:

**Le DNS ne résout pas votre domaine en adresse IP**
ou
**L'adresse IP ne vous montre pas les fichiers front-end**

Vous ne pourrez pas voir le front-end et ainsi cliquer sur les éléments du site et communiquer avec le back-end. Afin de pouvoir utiliser les services Web3 sans ces problèmes, vous pouvez auto-héberger le front-end et contourner à la fois le problème de "résolution DNS" et le problème "IP non en ligne" !

![](./image2.jpg?w=1400&h=679)


## Pourquoi l'auto-hébergement ?

L'auto-hébergement d'un site Web sur le web3 signifie que le front-end fonctionnera même lorsque le fournisseur par défaut est inaccessible. Cela supprime de nombreux intermédiaires qu'il peut exister pour atteindre les fichiers front-end ! C'est une relation gagnant/gagnant pour l'utilisateur et le service.

* L'individu gagne en résilience en accédant au service même lorsque les conditions pour atteindre le front-end sont mauvaises.
* Le serveur qui fournit les fichiers front-end reçoit moins de requêtes, ce qui permet de réduire sont encombrement.
* La version locale de l'application sera figée dans une version spécifique. Si cette version fonctionne correctement, il est bon d'avoir une sauvegarde. Si le front-end dispo bug, vous pouvez toujours accéder à la version précédente.

Afin d'auto-héberger un service, il faut tout d'arbord parcourir la documentation du développeur pour savoir comment le télécharger, et ensuite configurer et exécuter un environnement local pour chaque application.

Après l'avoir exécuté localement, plutôt que d'accéder à l'URL du site Web par défaut dans le navigateur, nous utiliserons "localhost:application". Le terme "application" est un nombre qui est souvent le 3000 par défaut.

![](./image3.jpg?w=1400&h=1115)

##  Points importants

**Pour les utilisateurs utilisant Windows :** Selon le service, il peut être plus simple pour vous d'utiliser Linux, mais si vous avez Windows, ne vous inquiétez pas, de nombreux services fonctionnent correctement, et pour ceux qui vous ne pouvez pas utiliser, vous pouvez toujours utiliser [WSL (Windows Subsystem for Linux)]( https://docs.microsoft.com/en-us/windows/wsl/install). Une [Virtual Machine](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html) ou [Debian](https://www.debian.org/) qui dispose souvent de nombreuses ressources pour contourner les erreurs. Si vous rencontrez des erreurs inattendues sous Windows, il est recommandé d'essayer sur Mac/Linux.

**Pour les utilisateurs Mac/Linux** : si une commande affiche des erreurs inattendues, essayez de l'exécuter en utilisant le mot-clé `sudo` avant votre commande, exemple `sudo command`, cela force la commande à être exécutée en tant qu'administrateur et parfois vos autorisations par défaut ne sont celles correspondant à celle l'administrateur.

**Pour toute erreur inattendue :** Lisez attentivement le fichier readme du repository ! Si rien ne fonctionne, Google est votre meilleur ami, il est impossible de faire un guide prennant en compte toutes les versions de tous les systèmes d'exploitatio. Donc si quelque chose ne vfonctionnea pas, je vous recommande fortement de copier/coller l'erreur sur Google ;) Cela résout souvent le problème !

**Si tout s'est bien passé mais que les transactions en chaîne échouent :** Il existe un fichier appelé `.env` utilisé par les projets pour configurer les "default keys". C'est ici qu'il faudra ajouter les clés de projet pour des services comme [Infura](https://infura.io/) et [The Graph](https://thegraph.com/studio/), certaines des applications peuvent nécessiter que vous utilisiez vos propres clés. Pour récupérer une clé, vous devez créer un compte sur le site Web du service en question !

**Réexécuter un service apres l'avoir exécuté :** Vous pouvez passer les étapes `git clone` et `yarn install` et les autres étapes de configuration, il vous suffit généralement de `cd` (changer de répertoire) dans le dossier du projet que vous souhaitez et lancez `yarn start`.

**Exécuter un autre service :** Vous devrez soit fermer la fenêtre du terminal, soit arrêter l'exécution vous-même : pour cela, utilisez "Ctrl+C". Vous pouvez aussi quitter le dossier du projet avec la commande ` CD ..`


## Allons-Y !

**Prérequis**
1) Installez [Node.js](https://nodejs.org/en/)
1) Installez [git](https://git-scm.com/downloads)
1) Tapez `npm install --global yarn` dans une fenêtre de terminal pour configurer [Yarn](https://yarnpkg.com/) (utilisé pour installer les dépendances pour la plupart des projets)


### Comment ouvrir le terminal:

* **Windows:** Windows + R -> tapez `cmd` -> Enter
* **Mac:** CMD + Space -> Terminal

**Index**
- [Site Yearn](#Yearn-Website)
- [Blog Yearn](#Yearn-Blog)
- [Yearn Dev Docs](#Yearn-Dev-Docs)
- [Yearn Website](#Yearn-Website)
- [Descriptions des Vaults Yearn](#Yearn-Vaults-Descriptions)
- [Yearn Mini](#Yearn-Mini)
- [Yearn Watch](#Yearn-Watch)
- [Uniswap](#Uniswap)
- [Curve](#Curve)
- [Cowswap](#Cowswap)
- [Gnosis Safe](#Gnosis-Safe)

### Site Yearn

#### Repository: https://github.com/yearn/yearn-finance-v3 

1) Ouvrir le terminal
2) `git clone https://github.com/yearn/yearn-finance-v3`
3) `cd yearn-finance-v3`
4) `yarn install`
5) No-Windows: `yarn dev` / Windows: `yarn dev-win`
6) Le navigateur devrait automatiquement ouvrir un onglet en direction de`localhost:3000`

![](./image4.jpg?w=1145&h=667)

### Blog Yearn

#### Repository: https://github.com/yearn/yearn-comms

1) Ouvrir le terminal
2) `git clone https://github.com/yearn/yearn-comms`
3) `cd yearn-comms`
4) `yarn install`
5) `yarn dev`
6) Ouvrez le navigateur et aller sur`localhost:3000`

![](./image5.jpg?w=1235&h=703)

### Yearn Dev Docs

#### Repository: https://github.com/yearn/yearn-devdocs

1) Ouvrir le terminal
2) `git clone https://github.com/yearn/yearn-devdocs`
3) `cd yearn-devdocs`
4) `yarn install`
5) `yarn start`
6) Le navigateur devrait automatiquement ouvrir un onglet en direction de`localhost:3000`

![](./image6.jpg?w=1093&h=447)

### Descriptions des Vaults Yearn

#### Repository: https://github.com/yearn/yearn-vaults-descriptions

1) Ouvrir le terminal
2) `git clone https://github.com/yearn/yearn-vaults-descriptions`
2) `cd yearn-vaults-descriptions`
3) `yarn install`
4) `yarn dev`
5) Ouvrez le navigateur et aller sur`localhost:3000`

![](./image7.jpg?w=1223&h=517)

### Yearn Mini

#### Repository: https://github.com/DarkGhost7/yearn-mini

1) Ouvrir le terminal
2) `git clone https://github.com/DarkGhost7/yearn-mini`
3) `cd yearn-mini`
4) `yarn install`
5) `yarn start`
6) Le navigateur devrait automatiquement ouvrir un onglet en direction de`localhost:3000`

![](./image8.jpg?w=1400&h=986)

### Yearn Watch

#### Repository: https://github.com/yearn/yearn-watch

1) Ouvrir le terminal
2) `git clone https://github.com/yearn/yearn-watch`
3) `cd yearn-watch`
4) `yarn install`
5) `cp .env.example .env`
6) Ajoutez les keys [Infura](https://infura.io/dashboard), [The Graph](https://thegraph.com/studio/apikeys/), et [Alchemy](https://www.alchemy.com/) sur `.env`
7) `yarn start`
8) Le navigateur devrait automatiquement ouvrir un onglet en direction de`localhost:3000`

![](./image9.jpg?w=1191&h=531)

### Uniswap

#### Repository: https://github.com/Uniswap/interface

*Ne fonctionne pas sur Windows*

1) Ouvrir le terminal
2) `git clone https://github.com/Uniswap/interface`
3) `cd interface`
4) `yarn install`
5) `yarn start`
6) Ouvrez le navigateur et aller sur`localhost:3000`

![](./image10.jpg?w=1400&h=628)

### Curve

*Ancienne UI. La version actuelle n'est pas open source*

#### Repository: https://github.com/curvefi/crv.finance

1) Ouvrir le terminal
2) `git clone https://github.com/curvefi/crv.finance`
3) `cd crv.finance`
4) `yarn install`
5) `yarn start`
6) Le navigateur devrait automatiquement ouvrir un onglet en direction de`localhost:3000`

![](./image11.jpg?w=1400&h=568)

### Cowswap

#### Repository: https://github.com/gnosis/cowswap

*Ne fonctionne pas sur Windows*

1) Ouvrir le terminal
2) `git clone https://github.com/gnosis/cowswap`
3) `cd cowswap`
4) `yarn install`
5) `yarn start`
6) Le navigateur devrait automatiquement ouvrir un onglet en direction de`localhost:3000`

![](./image12.jpg?w=983&h=511)

### Gnosis Safe

#### Repository: https://github.com/gnosis/safe-react

1) Ouvrir le terminal
2) `git clone https://github.com/gnosis/safe-react`
3) `cd safe-react`
4) `yarn install`
5) Ajoutez [Infura](https://infura.io/dashboard) keys to `.env`
6) `yarn start`
7) Le navigateur devrait automatiquement ouvrir un onglet en direction de`localhost:3000`

![](./image13.jpg?w=1400&h=550)


---

#### *Rédacteur: [Worms](https://twitter.com/MarcoWorms), Relécteurs: [Cryptouf](https://twitter.com/cryptouf), [Dark Ghosty](https://github.com/DarkGhost7)*

