---
title:  "在旧的yGov中未被认领的资产"
image:
  src: ./cover.jpg
  width: 1783
  height: 716
date: "2021-07-10"
author: Dudesahn
translator: Bee926
published: true
---

original source: [twitter](https://twitter.com/dudesahn/status/1413567068583104512)

##### 1

看一下旧的[@iearnfinance](https://twitter.com/iearnfinance)质押合约:

~30 YFI 还未被领出原来的质押池
~8.5 YFI 还质押在v1的质押合约
~764 YFI 还质押在v2的质押合约，并有值75万美元yCRV还没被领出😬

值约2900万美元的资产仍能质押在LP，YFI，和可领取的奖励中 :point_down:

![](image1.png)

##### 2

不确定你是否有资金可领取？

到 https://etherscan.io ，输入以下地址:

- YFI 农场池 1: 0x0001FB050Fe7312791bF6475b96569D83F695C9f
- YFI 农场池 2: 0x033E52f513F9B98e129381c6708F9faA2DEE5db5

##### 3

- YFI 农场池 3: 0x3A22dF48d84957F907e67F4313E3D43179040d6E
- YFI Gov 质押 v1: 0xb01419E74D8a2abb1bbAD82925b19c36C191A701
- YFI Gov 质押 v2: 0xBa37B002AbaFDd8E89a1995dA52740bbC013D992

在Contract, 点击Read Contract, 然后把你的地址输入balanceOf 👀

![](image2.png)

##### 4

如果看到value >0， 恭喜你，你有YFI或其他奖励可领取! :partying_face:

要领取你所有的质押资产和奖励，请到Write Contract，连接你的钱包，然后call exit()。

![](image3.png)

##### 5

拿到你的YFI或yCRV后，请到http://yearn.finance/vaults 以存入我们其中一个机枪池。 或应用你的yvYFI在 @MIM_Spell 🧙‍♂️ 借出你要的资产。

##### 6

请注意: 如果你已经没质押你还是可以领取奖励！和 balanceOf() 一样的，你可以在 Read Contract with earned() 查看可领取的奖励，然后用 Write Contract using getReward() 来领取！🤑

![](image4.png?w=694&h=422) <br>

![](image5.png?w=378&h=252)
