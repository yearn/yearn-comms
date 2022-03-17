---
title: "深入了解 Yearn 的数据指标"
image:
  src: ./image3.jpg
  width: 1400
  height: 625
date: '2022-02-17'
author: Marco_Worms
translator: Xiaona
---

在加密货币领域，自己做好研究是非常必要的，对于 [yVaults 和策略](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)，可以通过很多的工具来理解数字背后的意义。在本文中，我将深入探讨  Yearn 所有公开的分析资源，这些资源都是策略家用于监视机枪池和策略运行状况的。学会了如何使用这些工具，你将能够获得与 Yearn 团队成员相同的机枪池信息。我们今天将探讨的三个工具是：

### **[The Vaults at Yearn](https://vaults.yearn.finance/)**

所有 yVault 和策略的完整信息。想了解机枪池资金如何配置以及在配置在什么地方？就从这里开始吧。

### **[Yearn Vision](https://yearn.vision/)**

交互式仪表板，可用于分析所有机枪池和策略的数据。可以提取和分析 yVaults 和策略相关的所有历史数据。

### **[Yearn Watch](https://yearn.watch/)**

由策略家为策略家制作的仪表板，可以快速查看每个 yVault 的策略运行状况。

### **[The Vaults at Yearn](https://vaults.yearn.finance/)**

了解机枪池如何管理资金就从这里开始。在这里，可以找到所有 yVault 及其策略的信息：

![](./image1.jpg?w=1211&h=733)

在左侧，你可以选择以太坊或 Fantom 机枪池，机枪池被分类为：

- **Stables**: 稳定币的 yVaults
- **DeFi Tokens**: 所选网络（ETH 或 FTM）的 DeFi 生态中的非稳定币代币的 yVaults
- **Curve Pools**: 来自 [curve.fi](https://curve.fi/) 的代币的 yVaults
- **Retired Vaults**: 不再使用的旧机枪池

选择某个分类后，你将看到该分类的机枪池列表。单击某个机枪池，可以查看其使用的所有策略：

![](./image2.jpg?w=897&h=856)

如果想进一步了解每个机枪池/策略的数据的意义，就需要我们的下一个工具了！这就是 Yearn Vision：

## **Yearn Vision**

**链接: https://yearn.vision/**

Yearn Vision 是一个分析仪表板套件，有许多预制视图，用于分析机枪池和策略的历史数据。让我们从主页开始，对数据做些分析。

![](./image3.jpg?w=1400&h=625)

![](./image4.jpg?w=1400&h=445)

此页面为我们提供了所有 Yearn 机枪池的整体健康状况的详细信息。

有关于 TVL（总锁仓量）的信息，代表所有 yVaults 中存入的资金总量。我们可以看到以太坊和 Fantom 的总 TVL 以及每个网络单独的 TVL。有些图表显示的每日/每周变化量，是当前数据相对历史数据所得。"share price" 也是一个重要的指标，表示该机枪池的收益情况，这个数据随着时间会大于 1.0。下图为 ETH 到 yETH 的 share price 示例。"share price" 的工作原理：

![](./image5.jpg?w=1400&h=849)\
*“share price” 如何运作*

Vision 仪表板的右上角，可以选择时间范围，大多数图表会随选择时间而更新。

![](./image6.jpg?w=226&h=469)\
*更改右上角的时间范围*

不要被具有布满密密麻麻的各种颜色吓到，默认会显示所有机枪池/策略，可以只选择那个你想要了解更多信息的机枪池/策略，其他内容会被过滤掉。

![](./image7.jpg?w=884&h=231)\
*过滤前*

![](./image8.jpg?w=895&h=258)\
*过滤后*

“time since last report” 是指此保险库策略上一次的获利时间。上面的“过滤”图表是上周发生在 USDC yVault 的所有获利，垂直下降意味着发生了获利行为，因此“time since the last harvest/report” 变为 0。

切换到仪表板的左侧：

![](./image9.jpg?w=225&h=221)\
*查看所有仪表板：https://yearn.vision/dashboards*

在这里，你会发现更多的仪表板，可以更深入地了解 Yearn 正在发生的事情！

![](./image10.jpg?w=1395&h=565)\
*策略家使用的仪表板*

我们来看一下 “Vault Overview”：

![](./image11.jpg?w=1400&h=640)\
*Vault Overview 仪表板: https://yearn.vision/d/ibsIoEknkdffd/vault-overview?orgId=1*

在这个 Vault Overview 仪表板中，我们可以看到 USDC yVault 有 6 种有效策略：“totalDebt” 是机枪池正在使用策略的资金金额，“amount of free funds” 表示有多少资金可以很省钱地（指汽油费）提款，当这个数字小于你想要提款的金额时，交易将花费更多的汽油费，因为机枪池将不得不将正在策略中的资金提取出来。

稍后我们将使用 yearn.watch 来查看资金是如何按比例分配给每个策略的。

还有用于检查 Yearn 整体健康状况的仪表板，甚至还可以监控 DAO Treasury：

![](./image12.jpg?w=1363&h=201)\
*Yearn Treasury 仪表板：https://yearn.vision/d/9_ppKhd7z/treasury*

## **Yearn Watch**

**链接: https://yearn.watch/**

Yearn Watch 是由策略家为策略家制作的仪表板，可以快速查看每个策略运行状况。主页面展示所有机枪池：

![](./image13.jpg?w=1255&h=799)

打开某个机枪池，可以看到资金分配的相关信息。在 Yearn Vision 部分我们查看了 USDC yVault 的部分信息，现在来看看 USDC yVault 的更多信息：

![](./image14.jpg?w=855&h=855)

“details” 显示了资金分配的整体情况。如果切换到 “strategies”，可以更深入地查看每个策略的详细信息，包括合约地址和链上交易等。进入 “strategies”，选择 “report”（harvest），可以查看最近 10 次获利的交易，可以监控机枪池的实时收益以及每次获利的利润情况：

![](./image15.jpg?w=1253&h=759)

展开单个报告以获取更多信息：

![](./image16.jpg?w=1157&h=415)

### **朋友们，这就是 Yearn！**

我希望这篇文章能过对大家有帮助，更好地查看自己在 Yearn 的存款信息！这些工具真是很好用，有关 Yearn 的 yVault 和其他产品的历史数据是非常有价值的。

作者：[Worms](https://twitter.com/MarcoWorms), 审稿人：[Dark Ghosty](https://github.com/DarkGhost7)

感谢 Dark Ghosty 向我展示了如何使用这些仪表盘 ❤

**Made in [yearn.finance](https://yearn.finance/)**