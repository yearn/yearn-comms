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

[Yearn Vaults](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) 是以开放的标准设计的，在过去几年 YFI 的合作伙伴在 Yearn Vaults 的基础之上开发了很棒的应用。本文将举例说明其他协议是如何在 Yearn 基础之上做开发的，希望能够激发大家更多的设计灵感。

## 案例

最常见的合作案例：
1. 以 yVaults 作为抵押品的借贷
2. 使用 yVaults 产生收益

上面的方式，合作伙伴都将分享机枪池的管理费。贡献的资金量越大，分享的收益就越多。

> 在 2021 年，Yearn 分享给合作伙伴的收益共计  $2,793,161。

接下来我们就通过案例深入了解下 Yearn 的几位最大的合作伙伴：

## Yearn + [Abracadabra](http://abracadabra.money/)

Abracadabra 基于 yVaults 提供借贷服务。他们最大的创新在于接受自生息代币作为抵押品，偿还债务时用户取回对应的机枪池代币，而这个代币随着时间推移价值在逐渐增大。

Abracadabra 概况：
1. 用户将 wETH 存入对应机枪池，收到 yvWETH
2. 用户将 yvWETH 存入 abracadabra 作为抵押品，借出稳定币 MIM

![](./image1.png?w=633&h=527)\
*[Abracadabra](http://abracadabra.money/) “借款”界面*

用户借出 MIM 时，存入的抵押品就被锁定直到用户偿还债务

- 用户及时偿还债务，取回抵押的 yVault，yVault 的价值在借款期间会逐渐增大。
- 用户未能及时还款，会失去部分抵押品用于清算。

理想情况下，机枪池的收益会大于借款利息。这就是以自生息代币作为抵押品的典型案例。

## Yearn + [Alchemix](https://alchemix.fi/)

Alchemix 使用 DAI 机枪池，产生的收益用于偿还用户的债务。

1. 用户将 DAI 或 ETH 存入 Alchemix
2. Alchemix 将用户的存款放入对应的机枪池产生收益（接下来自动偿还用户的债务）
3. 存入 DAI 可以最多借出存款价值 50% 的 alUSD，存入 ETH 则能够最多借出存款价值 25% 的 alETH (可以换为 DAI 或者 ETH) ，alUSD 和 alETH 按照对应的比例锁定存入的 DAI  和 ETH
4. 第 2 步产生的收益用于自动偿还用户的债务，随着债务逐步被自动偿还用户可以按比例提取存款

下图为 Alchemix 生态的概况，以及它是如何和 Yearn 结合的：

![](./image2.png?w=1400&h=950)\
*[Alchemix](https://alchemix.fi/) 生态*

## yVaults 在 B2B 方面

*在商用方面 Yearn DAO 绝对是与众不同的：Yearn 的基础设施确保了在当前的 DeFi 它的机枪池具有最好的安全性。*

根据对机枪池贡献的 TVL，合作伙伴将分享管理费，在 [Yearn 合作伙伴文档](https://docs.yearn.finance/partners/introduction)查看关于管理费分享的详细信息。 合作伙伴钱包应用和 yVault 收益部分，与为普通用户提供的服务是完全不同的：

**收益部分**：与普通用户完全不同的机枪池存款界面。 [ShapeShift](https://shapeshift.com/) 是个很好的案例，他们存款到 yVault 的合约可以在 [GitHub](https://github.com/shapeshift/yearn-router) 查看。

![](./image3.png?w=750&h=554)\
*[ShapeShift](https://shapeshift.com/) 收益部分*

**钱包**：合作伙伴在自己的生态内为用户提供基于 yVault 的不同的收益选择。[SteakWallet](https://www.steakwallet.fi/) 是个非常好的案例：

![](./image4.png?w=363&h=681)\
*[SteakWallet](https://www.steakwallet.fi/) 界面*

## 如何成为合作伙伴

如果你希望在 yVault 上做开发，可以这样做：

- 阅读[合作伙伴计划](https://docs.yearn.finance/partners/introduction)并填写表格
- 技术问题可以查看 [Yearn 接入方式指南](https://docs.yearn.finance/partners/integration_guide)

*你想基于 $YFI 做写什么呢？快告诉我们吧！*

作者：[Worms](https://twitter.com/MarcoWorms)，审稿人：[Corn](https://twitter.com/omgcorn)，[Dark Ghosty](https://github.com/DarkGhost7)
