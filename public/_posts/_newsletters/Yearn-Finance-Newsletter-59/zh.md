---
layout: post
title: "Yearn 最新动态 #59"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1000
  height: 500
author: Yearn
date: '2022-04-06'
translator: Xiaona
---

### 2022 年 4 月 5 日之前的一周

![](./cover.png?w=1000&h=500)

欢迎来到 Yearn 最新动态第 59 版。 此新闻简报的目的是让 Yearn 和所有加密货币社区了解最新消息，包括新产品发布，治理变化和生态系统更新。如果你有兴趣了解更多有关 Yearn Finance 的信息，请关注我们的官方 [Twitter](https://twitter.com/iearnfinance) 和 [Medium](https://medium.com/iearn) 账户.

## 摘要

- 介绍我们最新最棒的机枪池
- Facu 在 ETHDubai 有关策略的演讲
- 加入 Yearn 的 DAO: 入职
- Yearn 如何使用 Tenderly
- Yearn 的贡献者
- YFI 训练营学校
- Yearn 的机枪池 
- 生态系统最新消息

# 介绍我们最新最棒的机枪池

![](./image2.png?w=900&h=473)

我们最新的 Curve Rocket Pool 机枪池上线了，这个机枪池赚取来自 rETH 和 wstETH 的两笔 ETH 质押奖励。rETH 和 wstETH 是具有流动性的以太坊 2.0 质押代币，除了上面提到的质押奖励外，还可以赚取 $CRV 奖励和交易手续费。Yearn 会自动收获 $CRV 和 $CVX 奖励，然后复投来提高收益。

通过 Yearn Zaps，你可以直接将任何主流代币 ($ETH, $USDC 等) 存入到这个机枪池。只需一笔交易，Zaps 会自动将存入资产换为 rETH+wstETH，放入 Curve 的流动性池，然后存入 Yearn。

或者你也可以到 Curve Rocket Pool 手动存入 ETH (rETH) + Lido stETH (wstETH)，再把获得的 LP 代币放入 Yearn。

现在就去 [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults) 体验吧！

# Facu 在 ETHDubai 有关策略的演讲

![](./image3.jpg?w=1024&h=512)

在最近的 ETHDubai 上，Yearn 的贡献者 saltyfacu 发表了关于 Yearn 的策略的演讲。介绍了策略的本质，它也是 Yearn 的核心所在。

机枪池是用 Vyper 编写的 ERC20 代币，Facu 介绍了机枪池和与其对应的策略（用 Solidity 编写）之间的关系。策略是整个 Yearn 生态中最重要的内容，也是 Yearn 工作的重点，例如仅 yvUSDC 这一个机枪池，就部署有 20 种策略。 

每个策略都有不同的资金分配，当然也可以配置 0 资金量。用户简单持有机枪池代币，与其他的协议和 dex 的交互由其背后的策略来完成。

编写策略，你需要了解 git，eth-brownie，ganache，brownie-strategy-mix 存储库，以及 VS code。在经验方面，你需要具备编程方面的知识，拥有 CryptoZombies 4 级及以上等级的资质，了解如何与 DeFi 协议交互，以及坚定的学习意愿。

策略上线前需要经过六个步骤：透彻的调研，编写代码，同行审核，实验性上线（使用 ape tax），核心开发者/安全农耕委员会审核，最终才能正式上线。正式上线之后，你必须持续地监控策略，以保证其按照预期正常运行。

你可以在[这里](https://youtu.be/ooYgIMlqITQ?t=21266)查看完整的演讲，从 5:54:26 开始。

我们欢迎你通过 [Discord](https://discord.gg/8rF374XkXy)，[Twitter](http://twitter.com/iearnfinance) 或 [Github](http://github.com/yearn) 加入 Yearn 的社区，参与、提供反馈。和我们一起建设吧！

# 加入 Yearn 的 DAO: 入职

![](./image4.png?w=1024&h=768)

在本章，Cryptouf 和 farrahmay 介绍了进入 DAO 组织的基本流程，尤其是 Yearn。下面是他们对话的总结。

对于一个新的贡献者，当他们决定要加入一个 DAO 的时候，必须要铭记于心的是什么呢？他们要对这个 DAO 做比较深入的了解并理解它的价值观。

现在每天都有很多新人进入到 web3 领域，可以想象的到在 Discord，Telegram 和 Twitter 等渠道会涌现大量的贡献者。Yearn 应该如何做才算是成功的呢？很重要的一点是让我们的使命和目标更加清晰，以吸引适合的人来 Yearn 做贡献。

入职这件事在不同的 DAO 有不同的含义。你是如何定义 DAO 的入职的呢？Yearn 的新人入职方式是怎样的呢？我们用的是 4 个 C 的入职流程，也就是：合规，澄清，文化和人际关联。

进入 DAO 之后贡献者应该如何做才能确保成功呢？web3，DeFi，工程管理的知识水平，对 DAO 的了解程度，每个人都是不一样的，想要在 DAO 成功，要有自我驱动力，敢于讲话，敢于提出问题。

第一批加入 DAO 的贡献者不会太在意报酬，而是更加关注 DAO 的基础建设。随着更多新的贡献者的加入，报酬就显得非常重要了。它确保了贡献者们能够切身感受到自己的付出是有回报的，愿意长期做贡献帮助 DAO 发展。能否分享下 Yearn 是如何使用 Coordinape 的以及这个工具的优缺点？Coordinape 是 DAO 管理的工具，用于激励和奖励贡献者们。

Coordinape 有个担保的功能，所有成员都可以选择添加其他成员。这个功能用于去中心化是很棒的，但随着 circle 的人数逐渐增加，它会变得越来越游戏化，circle 成员往往会为自己的朋友做担保。Yearn 是如何避免这种情况的呢？有些成员可能参与了几个月，然后离开或者是参与度没有那么高了（出于任何原因！）如果是在乌托邦社会，这些人应该主动告诉其他成员，他收到的报酬应该变少，甚至干脆直接出局这样就不会收到报酬。但实际情况是这样吗？任何工具都可能被游戏化，Coordinape 也不例外。

你可以在[这里](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc)查看全文。特别感谢作者 cryptouf 和 farrahmay 的洞察。

# Yearn 如何使用 Tenderly

![](./image5.png?w=1200&h=675)

学法律的有 adderall，Yearn 的策略家们有 Tenderly。通过监控、警报、调试和事件分析工具，Tenderly 让所有的 DeFi 用户变成超人。

而且非常简单，任何人都能用。Yearn 的贡献者 MarcoWorms 在他最近的一篇文章中，介绍了 Telegram 警报的设置方法，适用于几乎所有 EVM 兼容网络的链上行为。

你可以在[这里](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba)查看实例。Worms 将展示如何设置 Telegram bot，来监控 $SPELL 机枪池的存取款，并在存取款行为发生时接到警报。

之后该如何做就由你来决定啦！

# Yearn 的贡献者

![](./image6.jpg?w=800&h=510)

如果要选出一个 Yearn 最注重的特质，那就是强大的行动力。它已经深入到 Yearn 的文化，我们称最活跃的贡献者们为 Doer。Doer 是个名词，是种描述，更是行动的使命。

作为去中心化的 DAO 组织，Yearn 没有老板，没有着装要求，没有晋升通道，更不存在和 CEO 一起打高尔夫的事情。Yearn 只有贡献者，与任何 DAO 一样，贡献者有不同的参与程度。

最初级的，是普通用户、代币持有人、投票人和投资者。再深一层的，就是贡献者 - 分布在全球各地的主动投入时间在 Yearn 的一个或多个项目的贡献者。

Coordinape 是 Yearn 创建的 DAO 内部协作工具，贡献者们的付出通过 Coordinape 来体现并作为获得报酬（如果这是他们的选择）的依据。贡献者被分为若干 circles，每个月为同一个 circle 的其他人的贡献做评估。有些人一周为 Yearn 工作 1 个小时，有些一天几个小时。没有人指派工作给你，你需要自己去发现。更没有强迫贡献者们必须要出现在办公间。

贡献者可以跨 circles 工作：从工程到图形设计，从翻译到策略，从协作到筹划活动。来自不同地区的贡献者们以各种方式在做贡献。他们是奇幻动画师，是实验性码农，是协调沟通的项目经理，他们共同感受经历着这个变革的时代。每一份贡献都加深了他们与 DAO 之间的连接。

很多人在其他地方还有全职工作，有些任职于多个 DAO。但所有人都对 Yearn 在做的事情饱有激情。当某位贡献者要全身心投入时，他就是那个 Doer。

但这究竟是什么意思呢？Doer 会做更加规律的贡献。他们负责协调整个组织以确保各个部分能够正常的运作。他们不是雇员，他们就是那群被称为 doer 的人。

他们推动着 Yearn 的发展、成长和改变。他们打破围墙，他们做别人只是在说的事情。跟 Yearn 所有的贡献者一样，doer 不安于现状，而是变革的推动者。他们是探索家，是创建者。他们相信每个人的内心深处都有个 doer。 

工业化和公司制度压制了几代人做事情的意愿。他们让我们做事情之前要先问，他们将分析和进步混为一谈，他们请顾问制定精美的路线图，他们为每一寸的进步设定标记和里程碑，他们要知道每一分钟的花费是如何转化为利润的。在这种制度下他们是永远发明不了区块链的。

在 Yearn 做贡献就是打破传统。做事情不需要任何人的批准，别以为这是在做梦，在 Yearn 做贡献就是这样。

CODA

Yearn 的大门总是敞开的，是否走进来就看你自己了！

# YFI 训练营学校

![](./image7.png?w=968&h=625)

YFI boarding school (训练营学校）是为有潜质的策略家们提供咨询的地方。不同于常规的学校，在这里资深的策略家会定期开放 office hours 来为学员答疑解惑。

加入 YFI boarding school (训练营学校），需要：经历入学流程，对制定策略表现有兴趣，实际制定策略，最后才能正式被邀请入学。

此外，你也可以通过 Yearn 核心贡献者的推荐（blue pilled）来加入。

你可能会问这是什么呢？来了你就知道了！

你可以在[这里](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)申请，加入 YFI boarding school 吧！

# Yearn 的机枪池 

你可以在[这里](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3)查阅我们所有活跃机枪池对应策略的详细描述。

# 生态系统最新消息

[Yearn UI 集合接入火币钱包](https://twitter.com/HuobiWallet/status/1503939305135247365)

[搭建在 Yearn 的协议上的 Alchemix 近期上线其 v2 版本](https://twitter.com/AlchemixFi/status/1503747272143740942)

[在 PILLS Universe 查看 Yearn 的最新艺术品](https://twitter.com/pillsuniverse/status/1502662158810759168)

[通过 Steakwallet 简单的用户界面存款到 Yearn 的机枪池](https://twitter.com/steakwallet/status/1502018618506293248)

[搭建在 Yearn (Fantom) 的协议上的 Sturdy Finance 新添加抵押品 fBEETS](https://twitter.com/SturdyFinance/status/1509962174629875726)

[一起来看看 Yearn v3 的设计](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[收听 tracheopteryx 在 Delphi DISRUPTORS 博客节目中谈论 DAOs](https://twitter.com/tracheopteryx/status/1511000392552763399)

[由 Yearn 支持的 Tempus Finance，为用户提供 USDC 和 DAI 存款的高收益](https://twitter.com/TempusFinance/status/1508823240768167943)

[以 yvYFI 作为抵押品借出稳定币 MAI 的提案已经上线](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[感谢 wido，在 Fantom 上可以免汽油费地使用 Yearn 了](https://twitter.com/joinwido/status/1506718710836436996)
