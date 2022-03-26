---
layout: post
title: "Yearn Finance 最新动态 #52"
categories: [Newsletters]
image:
  src: ./cover.jpeg
  width: 1152
  height: 576
author: Yearn
date: '2022-01-02'
translator: Xiaona
---
### 2022 年 1 月 2 日结束的一周

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/cover.jpeg?w=880&h=440)

欢迎阅读第 52 期的 Yearn Finance 周报。本周报的目的是让 Yearn 和更广泛的加密社区了解最新消息，包括产品发布、治理变化和生态系统更新。如果你有兴趣了解有关 Yearn Finance 的更多信息，请关注我们的官方 [Twitter](https://twitter.com/iearnfinance) 和 [Medium](https://medium.com/iearn)。

## 概述

- YIP-65 进入投票阶段

- [提案] Mean - DCA 回购试点计划

- 反思 Yearn

- Yearn 从 Fantom 基金会获得 100 万 FTM 赠款

- Yearn 的机枪池

- 生态系统最新消息

## YIP-65 进入投票阶段

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image2.jpg?w=980&h=871)

概括说，YIP-65 旨在通过四个不同的阶段来发展 YFI 在 Yearn 中扮演的角色，巩固代币作为治理基础的愿景。

具体实现方式是，通过 [BABY](https://yips.yearn.finance/YIPS/yip-56) 被财库回购的一部分 YFI，将作为奖励分配给那些积极参与 Yearn Governance 的 YFI 代币持有者。

之后，YFI 在 Yearn Governance 中扮演的角色将通过四个独特的组成部分进行演变。

1: xYFI。分配用财库回购的 YFI 到 YFI 机枪池作为奖励。

2: 投票锁定的 YFI。引入 ve 模式的 YFI (veYFI)，锁定最长四年（确切的最长锁定持续时间待定），锁定持续时间越长，投票权份额和 YFI 奖励份额就越大。可以提前退出锁定，但需要支付惩罚，这些惩罚将奖励给其他锁定代币持有者。

3: Vault Gauges + 投票。引入 Vault Gauges，机枪池存款人可以在其中质押他们的机枪池代币，并根据他们的 veYFI 权重获得 YFI 奖励。YFI 将根据每周治理投票来进行分配。

4: “有用的工作”功能。扩大 veYFI 投票人及其锁定的 YFI 的职责和责任，以换取额外的协议奖励。v3 机枪池设计待定。

接下来，将授权 Yearn 开发人员在可行时自行决定推出上述组件。

最后，有资格在 Yearn 治理中投票的 YFI 将仅限于质押在 xYFI（从第 1 阶段及以后）或在 Yearn 中投票锁定（从第 2 阶段及以后）的那些人。

你可以在[这里](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)了解更多关于所提出的代币经济模型升级和好处，在[这里](https://snapshot.org/#/ybaby.eth/proposal/0x8f7417fa5565d9f46e16618503e8808c36d51b2a9e8217a68c632d7c090d69d9)投票。

特别感谢作者: @0xJiji, @banteg, daryllautk, HAtTip3675, @onlylarping, @vany365, and @Wot_Is_Goin_On 创建了这个重要的提案。

## [提案] Mean - DCA 回购试点计划

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image3.jpg?w=690&h=301)

该计划的目的，是通过实际操作案例，给大家展示一个更好的财库执行回购的方式。

在 Snapshot 投票通过的基础上，Yearn 团队将为此回购计划分配价值 100 万美元的 ETH（249.376559 ETH @ 4010 美元/ETH），并在 Mean Finance 内以每天 8.31255197 ETH 的比率创​​建一个 YFI 到 ETH 的 30 天头寸。

Mean 团队希望至少在 DAO 的社区和领导层内产生一些不错的影响。

你可以在[这里](https://gov.yearn.finance/t/proposal-mean-dca-buyback-pilot-program/12065)阅读有关该提案的更多信息。

## 反思 Yearn

回顾过去，展望 2022 新的一年。以下是关于为什么 Yearn 与众不同的简短概述。

Yearn 经常被贴上“收益聚合器”的标签，从而导致人们认为 Yearn 团队就是致力于产生收益的。更糟糕的是，它有时被认为是一个简单的 CRV 农民。这样理解 Yearn 是有问题的。

目前，收益生成存在重大限制，例如一小群人制定策略、高 gas 费用限制某些策略、构建策略的协议缺乏经过实战测试以及缺乏自动化流程的方法。

与其等待这些限制缓解（同时期已经有更多的策略家加入，并扩展到其他费用低的链和 L2），Yearn 一直在悄悄地建立基础设施，以大规模优化协议。

Yearn 一直在构建用于构建收益聚合机器的机器（用马斯克先生的话说），为代币、复杂协议、链、策略家、工具和资本数量不断增加的世界做好准备。

2021 年有 70 亿美元的 DeFi 黑客，大家现在的主要关注点是安全性。大多数 DeFi 协议通过调整参数来限制金融风险（例如贷款协议降低风险资产的贷款对抵押品的价值），并通过专注于一件事（例如贷款）来最小化技术风险。

Yearn 选择了 DeFi 最艰难的一条路，因为它在单个机枪迟中结合了多种协议和策略。当其他协议正在吹嘘他们已经完成的审计数量的时候，Yearn's yAcademy 正在培训下一代审核员以帮助加快新战略的审批时间。

在安全之后是资本效率——弄清楚应该如何在贷款协议、LP、杠杆农场机会和其他策略之间分配机枪池资金，以优化风险调整后的回报。然后尝试将其自动化。

YFI “公平发布”背后的部分原因，是意识到为 TradFi 中的数万亿美元产生高风险调整后的收益，远非一个团队能够做到的。YFI 学校现在正在培训新手策略家。

可扩展性需要减少各种手动流程——回购、收获、改变策略权重、价格变动后的对冲，Andre 创造 Keep3r 绝非巧合 。甚至还有一个数据分析小组在研究回购的最佳时间。

去中心化协作 —— 你如何建立一个系统来激励素未谋面的人实现这一切？用Coordinape 来帮忙 —— 来自于 Yearn 小组第一次遇到这个问题时发明的小工具 —— 现在被无数 DAO 使用。

每一个新的 DeFi 协议都为策略家创造了一个潜在的机会。新策略提高了机枪池的风险调整收益率，激励更多资本，从而产生更多费用，可用于构建这个巨兽平台。

此推文中的示例展示了 Yearn 如何尝试解决 DeFi 中的普遍问题。“DeFi 协议”这个词似乎并不适合 Yearn，金融科技 DAO 或许可以更好地描述 Yearn。

感谢 Wot_Is_Goin_On，你可以在[这里](https://twitter.com/Wot_Is_Goin_On/status/1477277152336916484)找到精彩的推文。

## Yearn 从 Fantom 基金会获得 100 万 FTM 赠款

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image4.jpg?w=1100&h=1092)

Yearn 从 Fantom 基金会获得 100 万 FTM 赠款。

我们没有抛售，超过 90% 都捐赠给了 FTM 机枪池。其他机枪池也获得了对应比例的捐赠，价值立即增加了 1%。

这笔赠款是众多赠款中的第一笔，随着我们达到 TVL 目标，我们将继续获得更多赠款。

## Yearn 的机枪池

你可以在[这里](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3)阅读我们所有活跃的 yVault 策略的详细说明。

## 生态系统最新消息

[查看 DeFi Saver 包括 Yearn 的新 Smart Savings 的仪表板](https://twitter.com/DeFiSaver/status/1476614075815809028?s=20)

[查看 loldefi 制作的 2021 Yearn 贡献者连帽衫](https://twitter.com/loldefi/status/1477062572595884032)

[Yearn 将继续回购 yvBOOST](https://twitter.com/wavey0x/status/1474946151006842884)

[阅读对 $CRV 贿赂的分析，涉及到 yvBOOST](https://twitter.com/0xSEM/status/1475284063204388867)
