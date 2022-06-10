---
layout: post
title: "Yearn Finance 最新动态 #62"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-05-23'
translator: Xiaona
---

![](./image1.jpg?w=900&h=453)

欢迎来到 Yearn Finance 最新动态第 62 版。此周报的目的是让 Yearn 和所有更广泛的加密社区了解最新消息，包括新产品发布，治理变化和生态系统更新。如果你有兴趣了解更多有关 Yearn Finance 的信息，请关注我们的官方 [Twitter](https://twitter.com/iearnfinance) 和 [Medium](https://medium.com/iearn) 账户.

**摘要**

- Yearn 机枪池 V3
- Yearn Watch 新网站
- Yearn 白名单
- Yearn 人物访谈：MarcoWorms
- Yearn 想要购买你的 YFI
- Yearn 的机枪池
- 生态系统最新消息

## Yearn 机枪池 V3

![](./image2.jpg?w=900&h=429)

Yearn v3 机枪池是对我们系统的彻底改造，以下是让我们特别兴奋的六大功能。

Junior tranches：Yearn 一直致力于打造“只上不下”的机枪池 - 也就是尽最大可能性地避免有黑客攻击和资产损失风险的机枪池。然而，高安全性的代价就是收益很低。v3 推出的 “junior tranches” 将会是高风险、高收益的机枪池。

Solidity：v2 机枪池是用 Vyper 语言编写的，而 v3 使用的是 Solidity。这意味着 Yearn 将可以利用更大的开发者群体（根据 DefiLlama，DeFi 编码中使用 Solidity 的占 ~69%，而 Vyper 仅占 ~10%）。最棒的是 Vyper 爱好者还可以继续使用 Vyper 语言来开发 v3 的模块。

标准化机枪池代币 ERC-4626：Yearn 的贡献者协助制定了以太坊的新代币标准：ERC-4626。v3 的生息代币是基于 ERC-4626 标准的，可以很好地与其他项目进行组合。

Gas 优化：策略家使用 ySwaps 做机枪池代币之间的兑换。大量的代码改进让包括 ySwaps 在内的很多操作的 Gas 费用从根本上得到了优化，进而提升所有机枪池的 APY。

灵活的策略：更多具有更好模块化的策略，让 Yearn 的机枪池的灵活性获得数量级的提升。每个机枪池的策略数量将不再限制在 20 个以内，合作伙伴能够与我们共同管理机枪池。我们迫不及待地想看到其他协议使用 Yearn v3。

自动化：通过使用 Keep3r 网络，Yearn v3 几乎可以实现机枪池的全面自动化。v3 就是要做到 100% 的机枪池自动化。这将让实时收获成为可能，从而实现更好的 MEV 保护。

v3 的升级将成为 Yearn 的历史上最大的更新。

Junior tranches，模块化，具有可组合性的收益代币和更广泛使用的编程语言，这些都将让 v3 成为 Yearn 发展创新的动力。

借用 Skeletor Spaceman 的话，“我们想要跑地快，但更重要的是我们要跑地稳”。v3 就是 Yearn 实现这个目标的方式，即将疯狂起航。

你可以在[这里](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0)阅读关于 v3 机枪池的更多内容。

我们诚邀你通过 [Discord](https://discord.gg/8rF374XkXy)，[Twitter](http://twitter.com/iearnfinance), 或 [Github](http://github.com/yearn) 加入 Yearn 的社区，参与，提供反馈。和我们一起建设吧。

## Yearn Watch 新网站

![](./image3.jpg?w=900&h=705)

[yearn.watch](https://yearn.watch/) 新网站上线了，在上一次迭代的基础上有更多的升级。

其中包括极快的加载时间，UI/UX 新皮肤以及大量改进和警报。

新网站添加了很多重要的细节，比如对风险等的可视化等。新网站将由新的贡献者团队接管，更多的东西都在酝酿当中。

## Yearn 白名单

![](./image4.jpg?w=900&h=429)

为了让 Yearn 的网站更安全，我们推出了一项新功能“白名单”。它的本质是这样的，所有通过网站/SDK 的交易都需要经过链上合约的验证，这个链上合约记录着所有网站生成的有效呼叫数据。

这将使得网站不会轻易受到各种向网站提供数据的中间人的攻击，无论是通过 Zapper/0x 的 API 还是 Yearn 自己的网站。例如，如果 Yearn 的 API 返回带有恶意地址的机枪池列表，目的是让用户在存款的时候批准其中一个，白名单就会阻止这个交易。

我们邀请其他协议也能够通过使用自己的白名单来加强安全性。创建白名单的方法将在后面做详细说明。

你可以点击[这里](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4)了解更多关于 Yearn 白名单。

## Yearn 人物访谈: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms 是 Yearn 的贡献者，从事市场和写作方面的工作，你可能经常在周报和 Twitter 上看到他的名字。

加入 Yearn 之前，Marco 就有涉足加密圈，他厌倦了科技金融和 VC 模式。学习 DeFi 和阅读了 Blue Pill 宣言后，他发现了 Yearn。

在 Yearn，Marco 通常是与其他人协作或写新文章来度过他的一天。如果没有写文章，那他就在 Yearn 的社群帮忙解答其他人的问题。

Yearn 一直以来都提倡随和的文化，认为任何背景的人都能够成功，Marco 认识到我们是真正在鼓励贡献者们做他们相信的事情。

你可以在这里查看来自 Yearn 贡献者 Defiglenn 的[完整采访](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e)。

## Yearn 想要购买你的 YFI

![](./image6.jpg?w=900&h=450)

我们听说有人在卖。

太棒了，因为我们在买。

YFI 对 Yearn 的建设至关重要（因为薪酬和策略中都需要），所以我们一直不断地从市场上回购。从现在开始，我们将通过这项服务来取代完全的手动市场购买。

由 Chainlink 预言机提供服务，我们的回购账户会定期存入 DAI，并以现价购买你的 YFI。统计数据是实时的，回购是完全公开透明的。

[https://yearn.clinic](https://yearn.clinic/) 和 [https://buyback.yearn.finance/](https://buyback.yearn.finance/) 是链接，把 YFI 卖给我们吧。
## Yearn 的机枪池

你可以在[这里](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3)查阅我们所有活跃机枪池对应策略的详细描述。

## 生态系统最新消息

[Incognito Chain 为 YFI 提供隐私服务](https://twitter.com/IncognitoChain/status/1527045614273544200)

[由 Yearn 提供支持，Sturdy Finance 提供的 USDC 的 APY 是所有链中最高的](https://twitter.com/pgpsam/status/1526301386173992961)

[Yearn 即将启动 Bancor v3 策略](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap 公布与 Yearn 合作推出的 Iron Fleet](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[查看 Skeleter Spaceman 的 Yearn 的研讨会](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Yearn 的机枪池可以在 DefiLlama 上独立跟踪](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[针对新的集中 Curve 池的 Lido stETH 机枪池上线](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[收听关于 Coordinape 的讨论的录音](https://twitter.com/YFI_interns/status/1525159821321830403)
