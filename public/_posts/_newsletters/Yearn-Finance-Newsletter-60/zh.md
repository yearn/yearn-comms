---
layout: post
title: "Yearn Finance 最新动态 #60"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 1000
  height: 500
author: Yearn
date: '2022-04-13'
translator: Xiaona
---

### 2022 年 4 月 12 日之前的一周

![](./cover.jpg?w=1000&h=500)

欢迎来到 Yearn Finance 最新动态第 60 版。 此周报的目的是让 Yearn 和更广泛的加密货币社区了解最新消息，包括新产品发布，治理变化和生态系统更新。如果你有兴趣了解更多有关 Yearn Finance 的信息，请关注我们的官方 [Twitter](https://twitter.com/iearnfinance) 和 [Medium](https://medium.com/iearn) 账户。

## 摘要

- 向往 Yearn
- 机枪池标准化
- Web3 如何成就抗审查的 Yearn
- 机枪池策略诞生记
- 给 DAO 的新贡献者的建议
- Yearn 的机枪池
- 生态系统最新消息

# 向往 Yearn

![](./image2.jpg?w=1000&h=563)

Messari 已向公众发布了他们关于 Yearn 的报告。这份报告于 11 月发布，最初只提供给付费会员查看。该报告包含大量的数据及分析。

摘录自原文：“我们都知道 Yearn 是个收益聚合器，为用户在各种 DeFi 协议赚取收益，例如 Compound，Aave，Curve 和 Convex 等。通过 Yearn 用户可以轻松地赚取被动收益。随着时间的推移 Yearn 已逐渐地成为收益的代名词，并获取了行业声誉，成为旨在将风险降至最低的领先收益来源。机枪池是用户使用最多的旗舰产品，占 Yearn 的总 TVL 的 67%。机枪池是按资产来划分的，用户存入的资产通过该机枪池对应的策略进行部署。Yearn 为其它需要获取收益的协议提供简单可信的集成方式，这样其它协议就无需再浪费时间去考虑风险、策略、收益等方面的问题了。未来 Yearn 的发展将很大程度上取决于它的 V3 UI，多链策略，及其对自身地位的巩固。”

Fantom 和 Arbitrum 都已经上线，接下来会是？

你可以在这里 [messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn) 查看原文。

# 机枪池标准化

![](./image3.jpg?w=900&h=577)

你听说过 ERC-20s, ERC-721s 和 ERC-1155s，很快你将会知道 ERC-4626s。代币化机枪池标准来啦！机枪池标准化的时代开始了！

以下是关于 ERC-4626 的简要概述：自生息代币的标准目前很杂乱。收益聚合器、机枪池、借贷市场、类似 $xSUSHI 的自生息代币等都略有不同的标准。如果要在 DeFi 的生息代币基础上做应用开发，就不得不为每个生息代币都各自分别编写各种复杂、容易出错的适配程序。

有了 ERC-4626 这些就都将成为过去。它具有最好的可组合性。为 ERC-4626 机枪池构建的应用程序将适用于所有其它 ERC-4626 代币。

Yearn V3 使用的将是 ERC-4626。贡献者们已经把这个标准部署到 Yearn V3 机枪池。还有 Alchemix, Balancer, Rari Capital, Fei Protocol 的开发团队也都已经部署了 ERC-4626 的标准。或许有一天我们能够在 Ethersacan 上看到 ERC-4626 的标签。总而言之，ERC-4626 将会是任何生息代币的黄金标准，无论是 Yearn 的机枪池，AAVE 的存款代币，或者是 Balancer 的线性流动性池。

准备好加入机枪池标准化了吗？如果你想了解更多，请在[这里](https://twitter.com/joey__santoro/status/1504603906726240258)查看 Joey Santoro 的推文，以及 transmissions11 编写的部署代码。

未来就是各种可组合性。

想看更多的代码？请在 [this demo ERC-4626 Vyper 0.3.2 implementation](https://github.com/fubuloubu/ERC4626) 查看，这是由 Yearn 贡献者 fubuloubu，banteg， transmissions11 和 Joey Snatoro 共同编写的。

你可以在[这里](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/)查阅 CoinDesk 关于 ERC-4626 的文章。

# Web3 如何成就抗审查的 Yearn

![](./image4.jpg?w=900&h=451)

Web3 的宏大愿景就是成为永不间断、抗审查、任何人都可用的互联网（和金融系统）。

区块链和自托管让这一切成为可能。想知道如何可以不通过他们的网站，来使用 Yearn，Uniswap 以及其他 Web3 的应用吗？在 Web2 的模式下，如果网站宕机，终端用户就遭殃了。而在 Web3，只要能够连上网络这些服务对任何人将永远可用（假设其区块链是一直在线的）。

因为 Web3 是开源的，你可以下载文件，把 Yearn，Uniswap 等 Web3 应用的网站自托管到自己的电脑上，不需要任何第三方。

要做到自托管，你只需要一台电脑（Windows，Mac 或 Linux）和一些专用软件。设置好了之后，你就可以在自己的浏览器直接使用 Yearn 或其他应用，而不再需要访问他们的 URLs（取而代之的是 "localhost:3000"）。

你可以在[这里](https://medium.com/iearn/self-hosting-web3-services-299306b706ee)查看 MarcoWorms 的文章，剔除 Web2 的中间人并实现 web3 的宏大愿景。

# 机枪池策略诞生记

![](./image5.jpg?w=900&h=650)

策略是 Yearn 的根本，每个机枪池都包含多个策略。为了让用户获得 DeFi 领域最佳的风险调整后收益，我们必须跟上变化并编写新的策略。上图展示了新的机枪池策略是如何经历各种流程并最终正式上线使用的。

你可以在[这里](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d)查看 Yearn 的贡献者 MacroWorms 关于 yVault 策略的文章。

# 给 DAO 的新贡献者的建议

![](./image6.jpg?w=900&h=473)

Yearn 的文化是全球的、友好的，是由开发者、合作者和自我驱动者构成的。不可否认在大部分的 DAO 很多人加入是出于金钱的原因，但加入 Yearn 的 DAO 更是一种经历，一种有机会体验全新的持续变化的工作节奏的经历。

在像 Yearn 这样的 DAO 组织，你就是那个决策者，并要为所做的决定导致的最终结果负责。

下面是来自各行各业的 Yearn 的贡献者给予新参与 DAO 的贡献者的建议： 

治理方面的核心贡献者 Tracheopteryx 说，“做你喜欢的，擅长的，能够得到回报的工作，同时要铭记于心 DAO 需要的是什么。” 专注在安全和协议开发的 Storming0x 说：“要主动参与，不要因为觉得自己什么都不懂而感到难过，更不要害怕提出问题。有很多人都会很愿意帮助你，我们现在的新人入职流程也越来越好了。” 还有位匿名贡献者说：“1.了解我们的文化，查看你能够找到的所有资料；2.建立信任；3.承担你的入职成本；4.写下入职经历；5.认识所有人；6.弄清楚现状；7.有自己的观点；8.授权”

你可以在[这里](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d)查看 Kish 的文章，给 Yearn 的贡献者的建议以及关于 DAOs 的更深入的认知。

我们欢迎你通过 [Discord](https://discord.gg/8rF374XkXy)，[Twitter](http://twitter.com/iearnfinance) 或 [Github](http://github.com/yearn) 加入 Yearn 的社区，参与和提供反馈。与我们一起建设吧！

# Yearn 的机枪池 

你可以在[这里](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3)查阅我们所有活跃机枪池对应策略的详细描述。

# 生态系统最新消息

[MAI 的机枪池使用 Yearn 的策略，让 0 利率贷款在 Fantom 上成为可能](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[yearn.watch 新网站建设中](https://watch.major.tax/)

[storming0x 接受 YFI 训练营学校的采访时谈到对于 Yearn 的一些看法](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Yearn 的贡献者关于安全性的建议](https://twitter.com/storming0x/status/1509769575021178886)

[查看 coordinape 的更新](https://twitter.com/coordinape/status/1512247042806005763)
