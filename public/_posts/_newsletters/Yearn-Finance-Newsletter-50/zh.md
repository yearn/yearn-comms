---
title: "Yearn Finance 最新动态 #50"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator: Xiaona
---

### 2021 年 12 月 5 日结束的一周

![](./cover.jpeg?w=576&h=288)

欢迎来到 Yearn 最新动态第 49 版。 此新闻简报的目的是让 Yearn 和所有加密货币社区了解最新消息，包括新产品发布，治理变化和生态系统更新。如果你有兴趣了解更多有关 Yearn Finance 的信息，请关注我们的官方 [Twitter](https://twitter.com/iearnfinance) 和 [Medium](https://medium.com/iearn) 账户.

## 摘要

- 新用户界面
- YFI 代币经济模型更新提案
- Yearn 的更新文档
- YIP-64 未通过
- Yearn 将 23M veCRV 委托到 Convex
- Yearn Snapshot 策略
- Yearn 机枪池
- 生态系统最新消息

## 新用户界面

![](./image2.jpg?w=512&h=512)

基于来自社区的大量反馈，我们重建了 [yearn.finance](https://yearn.finance/)，新网站现在已经上线，可以去体验啦。

最有意思的功能之一（在我们看来）是模拟功能。在以前 UI 版本的机枪池存款界面，我们添加了 Zapper 的支持功能。举例来说，用户可以使用 ETH 或 Zapper 支持的任何代币存入 3CRV 机枪池。这是快速方便的，并且意味着在你的存款过程中将发生代币交换。你可能会问"模拟.."是什么意思呢？"模拟..."根据你的输入代币，使用 Zapper 的 API 和 Tenderly，对交易进行模拟，并计算确切的输出结果，可以当作是存款预览。例如，ETH>3crv。

为什么这很有用呢？原因是机枪池所涉及的协议和链上状态是动态的，很难预测你可以收到的机枪池代币的具体数量。实际滑点可能比预期的要大，或者交易可能会失败但却花费了 Gas 费等。这种模拟可以节省存款或取款的花费。

取款也是很难预测的。模拟有助于检查你是否可以在给定的机枪池条件下取款，取决于不同的策略，有些机枪池的流动性较深。

如果你收到"模拟失败.."的消息，这意味着如果继续进行交易，你的交易很可能不会成功。

这个 v3 的 UI 是全新的，因此还有很多的工作还在进行当中以改进 UX，使其更加流畅。

更多信息请查看[这里](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f)。如果你是个开发人员，你可以在[此处](https://github.com/yearn/yearn-finance-v3)找到做贡献的机会。

## YYFI 代币经济模型更新提案

关于 YFI 代币经济模型更新的相关提案已经上线 Snapshot，正式进入投票阶段。

目前有 5 个选项，分别命名为 ySplit，veYFI，xYFI，BurnKeYs 和 Status Quo。[ySplit](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) 建议将 YFI 拆分为 10,000 倍至 1,000,000 倍，以解决单位偏见。[veYFI](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit) 建议将 YFI 锁定一段时间以获得治理权，这些权利将决定财库收益的分配。[xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit) 建议创建一个 YFI 质押机枪池，用于接收多余的收益。[BurnKeYs](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit) 提议永久禁止 YFI 代币的造币功能，从而将总供应量限制在 36,666 枚。Status Quo 将保持现状，并告知 YFI 持有人和潜在投资者保持当前现状的好处。

你可以在[这里](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea)投票。感谢所有的社区贡献者。你可以在[这里](https://docs.google.com/document/d/1-YEfXqXgTm-qzhPRUKs5allfX1XqYUOYwr_49FApnLU/edit)查看工作组的更新情况，包括 haiku。

## Yearn 文档

几个月前，Yearn 的贡献者开始重写我们的文档，以使其更友好、更易于理解。

更新后的文档将为用户，开发者，和合作伙伴提供指南。这些文档增加了许多之前看不到的条目，以满足你的好奇。

请在[此处](https://docs.yearn.finance/)查看更新过的文档。

## YIP-64 未通过

![](./image3.jpg?w=1100&h=759)

YIP-64：调整非稳定币 yVault 的费用进入投票阶段，并以多数投票反对调整费用结束。

查看提案请点击[此处](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2)。

## Yearn 将 2300 万 veCRV 委托到 Convex

![](./image4.jpg?w=873&h=615)

Yearn 使用 Curve 的新原生 boost 委托功能向 Convex Finance 委托了 2300 万 veCRV。这将提高我们两个 DAO 的 factory 池的收益。这不会对常规池，费用或投票产生影响。

在[这里](https://convex-boost-delegation.vercel.app/)委托未使用的 veCRV 可以增加所有 Convex 参与者的 factory 奖励，这将有助于进一步提高 Convex 和 Yearn 的收益。你可以在[这里](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f)查看我们的委托交易。

## Yearn Snapshot 策略

通过了准备多次重要的投票，Yearn Snapshot 策略得到了更新。

它允许你使用可生息的 YFI，即钱包中的 YFI，所有 Yearn v2 机枪池，Bancor，Balancer v2，Uniswap v2，Sushi（包括MasterChef），MakerDAO，Unit，Instadapp（包括 MakerDAO）进行投票。

在[这里](https://github.com/yearn/snapshot-strategy)查看合约，部署可以在[这里](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code)找到。

## Yearn 机枪池

你可以在[此处](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3)查看关于我们所有活跃 yVault 的策略的详细说明。

## 生态系统最新消息

[在 Qredo Network 上安全地使用 YFI](https://twitter.com/QredoNetwork/status/1461031928564436994)

[收听 《Into the Byte Code》播客对 tracheopteryx 的访谈](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet 现在支持 Fantom 上的 Yearn 测试版机枪池](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract 成为 Polygon 上增长最快的前五大协议](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[观看 Coordinape 入职视频](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[在 Argent 的 L2 钱包上使用 Yearn，费用低至 $2](https://twitter.com/argentHQ/status/1468934923264401419)

[Tesseract 机枪池提高存款限额](https://twitter.com/tesseract_fi/status/1468217220966801413)

[通过持有 $yvBOOST 或 $yvYFI 可获得 ETHDubai 门票的折扣](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[查看 Zapper 关于 Yearn Simulations 的推文](https://twitter.com/zapper_fi/status/1466447565302517765)

[在播客《On the Ledger》收听 Facu 对 Yearn 的见解](https://twitter.com/Ledger/status/1465678701635506185)

[在 Flexa 的应用程序中使用 YFI 消费](https://twitter.com/FlexaHQ/status/1469092114038415364)
