---
title:  "Claim from old yGov"
image:
  src: ./cover.jpg
  width: 1783
  height: 716
date: "2021-07-10"
author: Dudesahn
translator:
---

original source: [twitter](https://twitter.com/dudesahn/status/1413567068583104512)

##### 1

Just checked out the old [@iearnfinance](https://twitter.com/iearnfinance) staking contracts:

~30 YFI unclaimed in the original staking pools
~8.5 YFI staked in v1 staking contract
~764 YFI still staked in v2 staking contract with $750k in claimable yCRV 😬

Almost $29m in staked LPs, YFI, and claimable rewards :point_down:

![](image1.png?w=1187&h=1177)

##### 2

Unsure if you might have some funds to claim?

Head to https://etherscan.io, and enter one of the following addresses:

• YFI Farming Pool 1: 0x0001FB050Fe7312791bF6475b96569D83F695C9f
• YFI Farming Pool 2: 0x033E52f513F9B98e129381c6708F9faA2DEE5db5

##### 3

• YFI Farming Pool 3: 0x3A22dF48d84957F907e67F4313E3D43179040d6E
• YFI Gov Staking v1: 0xb01419E74D8a2abb1bbAD82925b19c36C191A701
• YFI Gov Staking v2: 0xBa37B002AbaFDd8E89a1995dA52740bbC013D992

Under Contract, click Read Contract, and put in your address under balanceOf 👀

![](image2.png?w=1162&h=820)

##### 4

If a value >0 shows up, then congrats, you have YFI and/or rewards to claim! :partying_face:

To claim all of your staked assets and rewards, head over to Write Contract, connect your wallet, and call exit().

![](image3.png?w=1018&h=694)

##### 5

With your fresh YFI or yCRV in hand, you can head to http://yearn.finance/vaults and deposit them into one of our vaults. Alternatively, head over to our good friends at @CreamdotFinance 🍦 and borrow against those assets, or even use @MIM_Spell 🧙‍♂️ to borrow against your new yvYFI.

##### 6

Also worth adding here: just because you don't have any funds still staked doesn't mean you can't claim rewards! Similar to balanceOf(), you can check for claimable rewards under Read Contract with earned(), and then claim any available under Write Contract using getReward()! 🤑

![](image4.png?w=694&h=422)  

![](image5.png?w=378&h=252)
