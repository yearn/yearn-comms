---
title:  "Présentation de Deposit Together: Faites des économies lors de vos dépôts dans un coffre"
image:
  src: ./cover.jpg
  width: 576
  height: 344
author: Yearn
date: '2021-11-01'
translator: Cryptouf
---

# Présentation de Deposit Together (Dépôser Ensemble): économisez plus de 80% de frais de dépots sur yearn.finance… 💥

Chez [Wido](https://app.joinwido.com/?page=detail&address=0x8cc94ccd0f3841a468184aCA3Cc478D2148E1757), nous pensons que tout le monde devrait pouvoir utiliser la DeFi. Les développeurs derrière yearn.finance développent des coffres offrant des APY exceptionnelles tout en permettant le “Set and forget” . C’est a dire que vous déposez du capital et qu'il n’y a ensuite plus rien a faire. Les baleines (Whales) ont déposées des millions de dollars dans ces coffres pour générer des intérets.  Mais pour beaucoup, ces APY sont économiquement non rentables en raison des coûts de transaction très élevés. C’est maintenant une chose du passé- découvrez **[Wido Deposit Together](https://app.joinwido.com/?page=detail&address=0x8cc94ccd0f3841a468184aCA3Cc478D2148E1757)**. 

Avec Wido Deposit Together, les utilisateurs économisent jusqu'à 80% sur les frais de dépôt. Cela se traduit par des centaines de dollars d'économies, ce qui pour beaucoup est suffisant pour transformer cette opération de non réalisable en très rentable.



## Comment Wido Deposit Together fonctionne 

Essayez-le avec le coffre [Curve mUSD](https://app.joinwido.com/?page=detail&address=0x8cc94ccd0f3841a468184aCA3Cc478D2148E1757). D'autres coffres seront bientôt disponibles.

Au lieu de déposer directement dans un coffre et de payer la totalité des frais, vous regroupez votre transaction de dépôt avec d'autres utilisateurs et partagez ainsi les frais.

Vous pouvez ajouter votre transaction de dépôt au lot du lundi au vendredi. Le vendredi, le lot se clôture et plus aucun dépôt n'est autorisé.

Le week-end, lorsque le gaz est plus bas, Wido regroupera toutes les transactions, les déposera dans Yearn en une seule transaction et divisera les frais de dépôt de manière égale entre tous les déposants.

![](/_posts/_announcements/deposit-together/deposit-together.png?w=800&h=800)

Techniquement, en rejoignant un lot Deposit Together, vous donnerez à Wido la permission pour une transaction de dépôt signée pour un montant ERC-20 donné et un coffre Yearn en particulier. Lors de l'exécution du dépôt par lots, notre contrat intelligent exécutera ces étapes pour chaque coffre avec des dépôts par lots :

1. Transférer les ERC-20 de tout le monde dans le lot
2. Déposez tous les ERC-20 dans le coffre de yearn
3. Recevez des y tokens de yearn et distribuez-les à chaque déposant au prorata du montant de leur dépôt


Toutes ces étapes se font en une seule transaction. À l'étape 3, une partie des jetons sera utilisée pour couvrir les frais de transaction. Wido ne facturera aucun frais supplémentaire. Le code est disponible ici.

De cette façon, vous garderez le controle de vos fonds. Vous pourrez changer d'avis et retirer votre cépôt du lot.

Le dépôt minimum est de 1000 $. Le nombre minimum de participants dans uh lot est de 2. S'il n'y a qu'une seule personne au moment de la clôture du lot, le lot restera ouvert jusqu'à vendredi prochain.

Wido ne peut pas accéder à vos fonds ni les déposer dans un autre coffre. Votre transaction de dépôt signée n'est valable que pour le dépôt de USDC dans le coffre que vous avez choisi.


# Bonus : gagnez 50 $  pour chaque personne que vous invitez dans le lot
Plus il y a d'utilisateur dans le lot,  plus les économies de chacun augmentent.

Pour le rendre Deposit Together encore meilleur, nous proposons un bonus de parrainage de 50 $. Après avoir rejoint un lot, vous obtiendrez un lien de parrainage. Vous pouvez le partager avec votre communauté et vos amis pour les inviter à déposer a leur tour. Pour chaque personne qui dépose, Wido vous offre 50 $.

 ### : Pas à pas: Comment gagner 50 $ en utilisant Wido Deposit Together

1. Déposez vos USDC dans un coffre en utilisant Wido Deposit Together
2. Après votre dépôt, vous obtiendrez un lien de parrainage
3. Suivez @joinwido sur Twitter
4. Tweetez ce lien de parrainage et mentionnez @joinwido et @iearnfinance

Pour chaque personne qui rejoint Wido Deposit Together en utilisant votre lien de parrainage, Wido vous offrira 50 $ en USDC. Surveillez un DM de la part de @joinwido sur Twitter.


Nous prévoyons 8 000 $ pour notre programme de parainage. Dépêchez-vous !

Remarque : Yearn.Finance a contribué à hauteur de 4 000 $ au budget de ce programme. Merci beaucoup !



# Exemple : Curve mUSD avec Wido Together

1. Approuvez l'utilisation de vos USDC par Wido et rejoignez un lot: 0,003 ETH (13 $).
2. 9 autres utilisateurs rejoignent le lot.
3. Wido exécute le lot pour les 10 utilisateurs. Les frais de dépôt totaux, y compris les zaps, sont de 700 $.
4. Wido répartit les 700 $ entre les 10 utilisateurs. Cela se traduit par des frais de 70 $ pour tout le monde. Ces frais sont déduits des dépôt de chaque personne. Wido ne facture **aucun frais supplémentaire**.
5. Résultat : en utilisant Deposit Together, vous n'avez dépensé que 1/10ème de la totalité des frais de dépôt. c'est-à-dire  70 $ au lieu de 700 $ !
6. Bonus : vous pouvez utiliser votre lien de parrainage pour inviter d'autres personnes à déposer avec vous. Pour chaque dépôt, Wido vous offrira 50 $ supplémentaires en USDC


# Pourquoi est-ce si bon marché ?
Wido regroupe toutes les transactions en un seul dépôt dans un coffre. Cela couvre le dépôt, les Zaps et toutes les autres étapes requises. Cela signifie qu'une seule transaction doit être effectuée pour toutes les étapes. Cela signifie également qu'avec plus de personnes dans le lot, les économies augmentent.



# Qu'en est-il des retraits ?
Pour l'instant, nous ne faisons que regrouper les transactions de dépôt. Les retraits seront ajoutés plus tard si la demande est suffisante. Si vous souhaitez vous une telle fonction, faites-le nous savoir sur [Twitter](https://twitter.com/joinwido)  ou [Telegram](https://t.me/joinwido) .


Essayez [joinwido](https://app.joinwido.com/?page=detail&address=0x8cc94ccd0f3841a468184aCA3Cc478D2148E1757)

