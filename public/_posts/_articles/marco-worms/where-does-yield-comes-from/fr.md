---
title:  "D'où vient le rendement on-chain ?"
image:
  src: ./cover.png
  width: 800
  height: 500
date: '2022-07-05'
author: Marco_Worms
translator: Cryptouf
---

![](cover.png?w=800&h=500)

La DeFi est un vaste écosystème dans lequel il existe de nombreux protocoles différents, chacun offrant différents services et options pour générer du rendement. Chercher les APY/APR (rendements/taux annuels en pourcentage) les plus élevés peu se révéler passionnant, mais il est essentiel de comprendre d'ou provient ce rendement et si sa source est durable afin de ne pas vous retrouver avec pertes inattendues.

> **"If you don’t know where the yield comes from, then it comes from you" (Si vous ne savez pas d'où vient le rendement, alors il vient de vous)**
>
> *— Je ne sais pas qui a écrit ceci à l'origine mais cela correspond très bien au sujet*

## Les services qui créent de la valeur 

La source de rendement la plus fiable consiste à taxer un service utile. Les services offrent une valeur réelle aux personnes qui les utilisent. Ainsi les utilisateurs sont prêts à payer pour ce  service, car cela leur permet de gagner du temps et/ou d'être plus efficace. Quelques exemples de services crypto durables :

- **Bitcoin** est le service mondial d'argent permissionless le plus résistant - pour l'utiliser, vous devez dépenser du Bitcoin pour payer les frais du service
- **Ethereum** est la plateforme la plus sécurisée pour déployer des services pour la DeFi et le Web3 — pour l'utiliser, vous devez dépenser de l'Ethereum pour payer les frais de service
- **Chainlink** est le plus grand fournisseur d'oracle - pour l'utiliser, vous devez dépenser des Link

Dans les services ci-dessus, nous pouvons voir le modèle du "jeton d'accès au protocole" (en savoir plus sur [fat procools](https://www.usv.com/writing/2016/08/fat-protocols/) qui crée sur le long terme un cycle durable qui récompense toutes les personnes impliquées et permettant le maintient du protocole. Mais ce n'est pas le seul moyen d'atteindre la durabilité à long terme :

- **Curve** le plus grand protocole de trading de stablecoins de la DeFi. Les détenteurs de jetons CRV reçoivent une partie des frais de négociation
- **AAVE** est une plateforme de prêt DeFi où les utilisateurs peuvent emprunter (payer des frais) et/ou fournir des jetons qui seront utilisés par les emprunteurs (recevoir des frais)

Dans ce deuxième modèle, les services permettent aux utilisateurs de gagner une part des bénéfices en détenant (et souvent en verrouillant) un jeton spécifique. Notez que dans les deux modèles, il existe des services fonctionnels et les utilisateurs sont prêts à payer des frais pour l'utiliser. C'est de là que vient le «rendement».

Il existe d'autres moyens de générer un rendement durable on-chain, la plupart d'entre proposent la fourniture d'un service financier et de la facturation des risques opérationnels, par exemple : fournir une assurance ou des liquidités, ou créer un nouvel actif dérivé avec une utilité supplémentaire (comme le cvxCRV, qui rend le veCRV échangeable, par exemple). La durabilité peut être atteinte par de nombreuses méthodes, mais comprendre comment elle est réellement atteinte doit toujours être claire et documentée et de préférence on-chain.

## "Zero-sum games": jeux à somme nulle

Si les rendements sont élevés et que l'utilité du service est faible, cela signifie que l'argent utilisé pour ce rendement ne provient pas du service lui-même, donc si la source d'argent externe s'assèche, le service s'interrompt car les rendements auront tendance à devenir nuls.

Un problème potentiel est que les gens peuvent ne pas s'en rendre compte. Les relations économiques sont fondées sur la confiance et la confiance globale diminue lorsqu'un protocole ne répond pas aux attentes des utilisateurs.

Les jeux à somme nulle (Zero-sum games) peuvent être un abus de langage. Tout le monde n'est pas assuré de gagner sans perdre. Voici un exemple qui a impacté débutants dans la DeFi :

- Un nouveau Dex est sorti : HentaiSwap !! Il distribue son jeton $HENTAI !
- Le jeton $HENTAI permet de recevoir des frais de négociation de HentaiSwap !
- Vous pouvez staker du $HENTAI pour recevoir 420 % d'APY ! Il suffit d'en acheter et de staker !!

Les Red flags (drapeaux rouges) sur lesquels il faut être attentif:

- Pourquoi avons-nous besoin d'un autre Dex ? Qu'est-ce que ce service propose que les autres ne font pas ? Pourquoi quelqu'un retirerait-il des liquidités d'Uniswap/Sushiswap/Curve et les mettrait-il dans HentaiSwap ?
- Combien de frais ce DEX génère-t-il ? À quel point est-il proche de 420 % ? Jetez un œil à tous les autres protocoles du même type : combien paient-ils pour les mêmes paires alors qu'ils ont beaucoup plus de liquidités ?
- Pourquoi devrais-je staker du $HENTAI ? Pourquoi quelqu'un me paie-t-il pour détenir ce jeton ? Il semblerait qu'ils veulent que j'achète ce jeton pour que le prix augmente pour que les anciens détenteurs  en profitent, mais que puis-je en faire hormis revendre les bénéfices du stacking au marché ?
- Et enfin : combien de jetons $HENTAI l'équipe garde t-elle ? Qui va perdre de l'argent quand ils les revendront ?

## "Positive-sum games": jeux à somme positive

Si dans les jeux à somme nulle, quelqu'un subit toujours une perte pour qu'un autre gagne, dans les jeux à somme positive, les deux parties ont l'impression qu'elles se retrouvent avec plus de valeur après une transaction. Tout service qui offre de la valeur aux utilisateurs tout en facturant des frais équitables crée un environnement à somme positive.

Disons que nous avons 2 parties qui souhaitent effectuer une transaction :

- un **Utilisateur** doit échanger 1 ETH contre 2 000 USD pour payer le loyer
- un **Développeur** maintient un smart contract qui permet l'échange entre ces 2 jetons

La transaction se passe à peu près comme cela :

1. La maintenance du logiciel est un exercice coûteux et constant. Par conséquent, pour que le service continue de fonctionner, le **Développeur** facture des frais d'échange de 0,5 %.
2. **L'Utilisateur** ne peut pas payer ses factures avec de l'ETH et doit le convertir, des frais d'échange  lui seront facturés pour maintenir le service
3. Ainsi, l'utilisateur échange 1 ETH avec le service développeur et reçoit 1990 $, sachant que 10 $ ont servi à payer la maintenance du service.

Prenons un instantané avant et après la transaction :

**Avant**

- Utilisateur : Avait 2 000 $ d'un actif illiquide qui devait devenir liquide pour une utilisation quotidienne
- Développeur : Avait un revenu de 0 $ avec cet utilisateur pour maintenir le service

**Après**

- Utilisateur : A 1990 $ dans un actif liquide pouvant être utilisé pour payer des factures
- Développeur : a reçu 10 $ de revenus de cet utilisateur pour maintenir le service

J'espère que cet exemple montre clairement que les deux parties ont envie de tirer profit de cette transaction. Les 10 $ que l'utilisateur a payés pour le service ne sont pas considérés comme une perte du point de vue de l'utilisateur, car un service a été fourni et les frais payés permettent à ce service d'exister.

# Yearning pour Yearn

Quand j'ai rejoint la DeFi, j'ai perdu une grande partie de mon capital. Malheureusement et je ne suis pas le seul à avoir ce genre d'expérience. Après en avoir appris davantage sur les fondamentaux du trading et de la DeFi, j'ai compris que le plus important était de comprendre la valeur sous-jacente des actifs et la qualité des protocoles dans lesquels j'investis, **mais il y a un énorme problème**:  la complexité des audits des smart contracts et de la tokenomics est très complexe et elle nécessite de l'expérience et des connaissances en matière de finance, de programmation et de sécurité. Ce qui n'est pas toujours le cas pour l'utilisateur moyen.

Les [Yearn Vaults + Strategies](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) fournissent une solution clé en mains pour les utilisateurs. L’équipe de Yearn est composé d' experts en investissement DeFi et des meilleurs stratèges pour vous permettre de génèrent du rendement avec les jetons que l’utilisateur choisi.De son cote Yearn et ses experts placent la sécurité des fonds en priorité numéro 1 ! Yearn facture des frais en plus des bénéfices de rendement, un scénario à somme positive, [entièrement transparent](https://medium.com/iearn/diving-into-yearn-metrics-8c3fb0520927) on-chain.

La DeFi a encore un long chemin à parcourir pour devenir digeste pour l'investisseur  moyen, aujourd'hui, il s'appuie fortement sur les aggrégateurs de rendement pour minimiser certains des risques courants, si vous investissez votre argent, assurez-vous de savoir exactement d'où vient le rendement de votre investissement afin de ne pas devenir le rendement d'une autre personne.
