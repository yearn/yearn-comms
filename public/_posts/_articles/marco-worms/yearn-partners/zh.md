---
title:  "Yearn 合作伙伴: 基于 yVaults 的开发"
image:
  src: ./cover.png
  width: 1500
  height: 729
date: '2022-03-07'
author: Marco_Worms
translator: Xiaona
---

![](./cover.png?w=1400&h=729)

[Yearn Vaults](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) 是以开放的标准设计的，在过去几年 YFI 的合作伙伴在 Yearn Vaults 的基础之上开发了很棒的应用。本文将展示其他协议是如何在 Yearn 基础之上做开发的，希望能够激发大家更多的设计灵感。

## 案例

最常见的合作案例：
1. 以 yVaults 作为抵押品的借贷
2. 使用 yVaults 来为用户产生收益

以上两种案例，合作伙伴都将分享机枪池赚取的管理费。贡献的资金量越大，分享的收益就会越多。

> 在 2021 年，Yearn 分享给合作伙伴的收益共计  $2,793,161。

接下来我们就通过一些案例深入了解一下 Yearn 的几位最大的合作伙伴：

## Yearn + [Abracadabra](http://abracadabra.money/)

Abracadabra 基于 yVaults 的应用是提供借贷服务。他们主要的创新在于接受自生息代币作为借贷的抵押品。偿还债务后用户取回对应的机枪池代币，由于其自动生息的功能，会随着时间的推移而逐渐增加价值。

Abracadabra 概叙：
1. 用户将 wETH 存入对应机枪池，收到 yvWETH
2. 用户将 yvWETH 存入 abracadabra 作为抵押品，借出 Abracadabra 用来錨定美元的稳定币 MIM

![](./image1.jpg?w=633&h=527)\
*[Abracadabra](http://abracadabra.money/) “借款”界面*

用户借出 MIM 时，存入的抵押品就被锁定直到用户偿还债务

- 如果用户及时偿还债务，取回抵押的 yVault 代币，yVault 代币的价值在借款期间会逐渐增大。
- 如果用户未能及时还款，他们会失去部分用于做清算的抵押品。

在理想情况下，机枪池的收益会大于 Abracadabra 收的借款利息。这就是以自生息代币作为抵押品的典型案例。

## Yearn + [Alchemix](https://alchemix.fi/)

Alchemix 使用 DAI 机枪池，其产生的收益将会被用于偿还用户的债务。

1. 用户将 DAI 或 ETH 存入 Alchemix
2. Alchemix 将 DAI 或 ETH 放入对应的 Yearn 机枪池以为用户产生收益（然后用这些收益来自动偿还用户的债务）
3. 存入 DAI 可以最多借出值存款价值的 50% 的 alUSD，而存入 ETH 则能够最多借出值存款价值的 25% 的 alETH (可以直接在 Alchemix 的生态系统里换为 DAI 或者 ETH) ，alUSD 和 alETH 按照对应的比例锁定存入的 DAI  和 ETH
4. 第 2 步产生的收益将被用于自动偿还用户的债务，随着债务逐步被自动偿还用户可以按比例提取存款

下图为 Alchemix 生态系统的概况，以及它是如何和 Yearn 结合的：

![](./image2.png?w=1400&h=950)\
*[Alchemix](https://alchemix.fi/) 生态*

## yVaults 在 B2B 方面

*在商用方面 Yearn DAO 绝对是与众不同的：Yearn 的基础设施为其机枪池提供在 DeFi 领域中最好的安全性。*

合作伙伴可分享的管理费是根据他们对机枪池贡献的 TVL，你可以在 [Yearn 合作伙伴文档](https://docs.yearn.finance/partners/introduction)查看关于管理费分享的详细信息。合作伙伴钱包应用和 yVault Earn 部分，与为普通用户提供的服务是完全不同的：

**Earn 部分**：完全不同的机枪池存款用户界面。 [ShapeShift](https://shapeshift.com/) 是个很好的案例，他们存款到 yVault 的合约可以在 [GitHub](https://github.com/shapeshift/yearn-router) 查看。

![](./image3.jpg?w=750&h=554)\
*[ShapeShift](https://shapeshift.com/) 收益部分*

**钱包**：合作伙伴在自己的生态内为用户提供基于 yVaults 的不同的收益选择。[SteakWallet](https://www.steakwallet.fi/) 钱包服务是个非常好的案例：

![](./image4.jpg?w=363&h=681)\
*[SteakWallet](https://www.steakwallet.fi/) 界面*

## 如何成为合作伙伴

如果你希望在 yVaults 上做开发，我们建议你：

- 阅读[合作伙伴计划](https://docs.yearn.finance/partners/introduction)并填写表格
- 如果你有技术问题，可以查看 [Yearn 接入方式指南](https://docs.yearn.finance/partners/integration_guide)

*如果你有计划应用 YFI 的基础设施做创新，欢迎你与我们分享你的想法！*

作者：[Worms](https://twitter.com/MarcoWorms)，审稿人：[Corn](https://twitter.com/omgcorn)，[Dark Ghosty](https://github.com/DarkGhost7)
