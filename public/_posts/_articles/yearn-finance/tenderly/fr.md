---
title: "Yearn Finance s'associe à Tenderly pour accélérer le développement, le débugage et l'analyse d'incidents"
image:
  src: ./cover.png
  width: 1280
  height: 800
date: '2022-03-02'
author: Weaver
translator: Cryptouf 
---

Le partenariat entre Yearn et Tenderly s'est avéré mutuellement bénéfique.

Tenderly a donné à Yearn l'accès aux meilleurs outils de développement, à des informations plus approfondies sur l'activité on-chain et à l'assistance d'une équipe de développeurs talenteux. De son coté, Yearn a fourni des cas d'utilisation concretsa et des exigences de la part d'un protocole majeur de l'écosysteme Defi , aidant Tenderly à s'améliorer et à s'adapter aux besoins de l'industrie.

![](cover.png?w=1400&h=670)

## Situation
Yearn Finance est fier d'être un protocole avec l'une des TVL les plus importantes et l'un de protocoles plus sécurisés. Yearn dispose également d'une infrastructure massive on-chain : plus de 300  vault v2 et smart contracts sur le mainet (sans parler des v1, de l'infrastructure keep3r, des contrats d'assistance, des déploiements de sidechain, etc.).

Yearn est également un *money lego* sans permission (permissionless). Cela signifie que nous utilisons de nombreux protocoles différents dans le paysage DeFi pour générer du rendement. De la même façon, de nombreux protocoles utilisent Yearn pour générer du rendement pour leurs utilisateurs et leurs trésoreries. Bien qu'être si profondément intégré offre des opportunités énormes, cela se fait également au prix d'un empilement des risques : à mesure que le nombre d'intégrations entre les protocoles augmente, la surface d'attaque ou le risque de bug augmente également.

## Défi

Avec une équipe si importante de contributeurs pour son développement et une vaste infrastructure on-chain, il devient important de trouver et d'utiliser les meilleurs outils de développement. Certains des défis auxquels Yearn est confronté pour gérer ses opérations à grande échelle sont :

#### Surveillance et alerte
La surveillance des données on-chain est essentielle pour détécter les événements potenntiellement impactant pour la sécurité de Yearn, la sécurité d'une intégration ou simplement pour suivre les comportements des utilisateurs.

Par exemple : que se passe-t-il si l'une des sources de rendement que Yearn utilise met en œuvre une nouvelle proposition de gouvernance pour éliminer les récompenses de yield farming ? Ou qu'un protocole met à jour ses signataires multisig, créant un problème de sécurité ? Nous voulons le savoir !

Consacrer du temps et des ressources pour développer,construire et maintenir une infrastructure off-chain plutôt que de travailler sur le protocole en lui-même n'est pas un excellent investissement pour Yearn.

#### Débugage
Les environnements pour le développement de smart contract Solidity sont encore immatures par rapport aux environnements de programmation traditionnels comme Java, Javascript, etc. Écrire du code sécurisé pour un protocole qui a 6 milliards de dollars d'actifs sous gestion est un challange. Pour réussir, les développeurs et les équipes de sécurité de Yearn ont besoin d'outils capables de débuguer le code et les transactions à la fois sur "les environnements locaux" et directement on-chain. 

#### Analyse des incidents
Lorsqu'un événement se produit on-chain et affecte les fonds des utilisateurs, que ce soit pour Yearn ou un autre protocole, nous avons besoin d'outils appropriés pour comprendre rapidement ce qu'il se passe et savoir comment réagir. Au-delà de la simple alerte, nous devons être capables d'étudier une transaction particulière ou un ensemble de transactions de la facon la plus précise possible et de partager nos découvertes avec l'équipe et les utilisateurs.

## Solution
Une fois que les développeurs de Yearn ont découvert que Tenderly est l'outil d'analyse le plus fiable et le plus utile disponible, Yearn a décidé de colaborer de façon plus formelle avec Tenderly.

L'équipe de Yearn a apporté une expertise et des cas d'utilisation inhérents à tout protocole de pointe, tandis que l'équipe de Tenderly a partagé certains des talents les plus brillants de l'écosystème Ethereum et qui possèdent certaines des infrastructures de nœuds les plus performantes et les plus fiables de L'industrie.

Au cours des derniers mois, les développeurs de Yearn sont devenus de gros utilisateurs des produits Tenderly, permettant de faire des retours et des commentaires et ainsi influencer la feuille de route de Tenderly. De son coté, Tenderly a offert des outils et des capacités incroyablement utiles qui ont aidé à relever chacun des défis énumérés plus haut.

#### Surveillance et alerte
Tenderly propose des alertes personnalisables intégrées qui permettent même aux utilisateurs novices de créer des alertes sur pratiquement n'importe quel événement on-chain. En interne, Yearn utilise largement cet outil pour garder un œil sur les événements critiques et les valeurs on-chain. Par exemple, nos groupes Telegram multisig sont chacun alertés par un lien hypertexte lorsqu'une nouvelle transaction multisig est extraite.

Les "actions Web3" sont une autre fonctionnalité de Tenderly permettant aux utilisateurs de déclencher des scripts internes en réponse à des événements on-chain (par exemple, envoyer une transaction pour désactiver l'activité keep3r si un bug dans une stratégie provoque une récolte répétée).

#### Débugage
L'utilisation du débugueur Tenderly a été un énorme pas en avant pour les développeurs Yearn. Fini le temps où l'on utilisait Ganache forker le mainnet sur des environnements de développement locaux. Alors que Ganache peut être lent, peu fiable et entraîner des plantages RPC ; Les forks Tenderly sont particulièrement robustes et font gagner des heures précieuses aux développeurs en aidant à trouver le bug et la ligne exacte qui provoque l'annulation d'une transaction. De plus, les forks individuels et les traces de transaction peuvent être partagées via une URL afin d'être certain que tout le monde regarde la même chose !

#### Analyse des incidents
Tenderly propose la meilleur UI, pour un débugueur, de l'industrie. En cas de problème, la tension et le stress peuvent monter très vite, il est donc utile d'avoir des URL partageables qui aident tout le monde regarder et travailler sur le même point. D'autres améliorations sont en cours concernant l'analyse des incidents, mais nous en parlerons plus tard. 

## Aperçu de l'interface utilisateur de Tenderly

*Aperçu des transactions:*
![](image1.png?w=1140&h=609)

*Contexte d'erreur :*
![](image2.png?w=1131&h=432)

*Simulation d'erreur*
![](image3.png?w=1280&h=672)

## Et après
Attirer de nouveaux talents est l'une des choses les plus importantes pour Yearn. En collaboration avec l'équipe de Tenderly, nous offrons un accès gratuit de 90 jours à Tenderly aux membres de la YFI Boarding School (une communauté pour les futurs stratèges Yearn). Nous pensons que cet outil aide les membres à mieux comprendre leur propre code et leur stratégie, les aidant à apprendre plus efficacement, tout en leur montrant la puissance de Tenderly.

