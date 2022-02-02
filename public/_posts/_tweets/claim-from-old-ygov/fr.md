---
title:  "Réclamer vos récompenses provenant vieux yGov"
image:
  src: ./cover.jpg
  width: 1783
  height: 716
date: "2021-07-10"
author: Dudesahn
translator: Cryptouf
---

source: [twitter](https://twitter.com/dudesahn/status/1413567068583104512)

##### 1

Allez vérifier le contract de staking de [@iearnfinance](https://twitter.com/iearnfinance) 

~30 YFI non reclamés dans la pool de staking originelle
~8.5 YFI stakés dans le contrat de staking v1
~764 YFI toujours stakés dans le contract de staking v2 avec  $750k de yCRV réclamables😬

Presque $29m de jetons LPs, YFI, et récompense réclamables :point_down:

![](image1.png)

##### 2

Vous n'êtes pas sûr d'avoir des fonds à réclamer ?

Allez sur https://etherscan.io, and enter one of the following addresses:

• YFI Farming Pool 1: 0x0001FB050Fe7312791bF6475b96569D83F695C9f
• YFI Farming Pool 2: 0x033E52f513F9B98e129381c6708F9faA2DEE5db5

##### 3

• YFI Farming Pool 3: 0x3A22dF48d84957F907e67F4313E3D43179040d6E
• YFI Gov Staking v1: 0xb01419E74D8a2abb1bbAD82925b19c36C191A701
• YFI Gov Staking v2: 0xBa37B002AbaFDd8E89a1995dA52740bbC013D992

Sous **Contract**, cliquez sur **Read Contract**, et entrez votre adresse au niveau de **balanceOf** 👀

![](image2.png)

##### 4

Si une valeur de >0 est indiquée, alors félicitations, vous avez des YFI et/ou des récompenses à réclamer ! :partying_face:

Pour réclamer tous vos actifs et récompenses stakés, allez sur **Write Contract**, connectez votre portefeuille et appelez **exit()**.


![](image3.png)

##### 5

Avec vos YFI ou yCRV en main, vous pouvez vous rendre sur http://yearn.finance/vaults et les déposer dans l'un de nos coffres. Sinon, rendez-vous chez nos amis de @CreamdotFinance 🍦 et empruntez deposez ces actifs sous forme de colatéral, ou utilisez @MIM_Spell 🧙‍♂️ pour emprunter contre vos nouveaux jetons yvYFI.


##### 6
Cela vaut également la peine d'être mentionné : ce n'est pas parce que vous n'avez pas encore de fonds stakés que vous ne pouvez pas réclamer de récompenses ! Comme avec **balanceOf()**, vous pouvez vérifier les récompenses pouvant être réclamées sous **Read Contract** avec **earned()**, puis réclamer toutes celles disponibles sous **Write Contract** en utilisant **getReward()** ??

![](image4.png?w=694&h=422) </br>

![](image5.png?w=378&h=252)
