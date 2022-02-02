---
title:  "公平发布、去中心化协作和固定外汇"
image: ./Fair-launches-decentralized-collaboration-and-Fixed-Forex/andre-hero.png
author: Andre
translator: Xiaona
published: true
---

# 公平发布、去中心化协作和固定外汇

**\-公平发布-**

我花了一段时间才终于意识到公平发布背后的本质。它不是把代币送出去，不是因为没有预售。简单地说，是因为对每个人都是平等的，每个人都遵循同样的规则，没有秘密的“朋友和亲人”轮，种子轮，大V分配，没有白名单，没有参与限制，根据规则，人人都可以参与。我终于可以放心地说，公平发布是所有参与者都遵循相同规则的发布。

**\-去中心化协作-**

我仍然看到很多部落主义，我想这是可以理解的，我一直不明白人们为什么会对球队如此部落主义的，我起初怀疑这种部落主义是因为对球队下注，毕竟，加密货币也一样，投注你最喜欢的。就像我从不了解体育中的部落主义一样，我也不了解加密货币的部落注意。按照我的标准，我只看到“对”和“错”，无论是否是我所在的团队，如果我看到“正确”，我就赞美，如果我看到“错误” ，我就批评。
但我认为合作的价值，往往被有些团队低估了。这就是我一直喜欢yveCRV的地方，包括它的克隆，stCRV和cvxCRV。它是curve、yearn、sushi和pickle之间合作的产物。没有所有这些协议，它就不可能存在。在yveCRV之前同理，y 池是让我最骄傲和喜欢的，它是curve、yearn、aave、compound和dydx之间的合作产物。
考虑到这一点，我意识到，要继续取得成功，产品不能被孤立，它们需要产品和团队的融合。我最初的Fixed Forex迭代是独立的、不可升级的、不可管理的、没有任何价值可提取、也无代币。

**\-固定外汇-**

我们一直在讨论摆脱交易所的控制，摆脱法币。Tether和Circle以他们自己的方式，在摆脱交易所控制方面，做得比加密货币多。交易所的规则很简单，未经特别许可钱不能离开它的管辖区域。Tether和Circle都在本地接受存款，法币永远不会离开银行账户，因此没有外汇管制（这是理论上的，实际上就是另一个故事了）。所以让我们考虑一下你想从美国付款到韩国，从美元到韩元，一条“简单”的路径，将美元存入 USDT，将USDT转移到Upbit，将USDT换成韩元，提取韩元。
Fixed Forex希望在终端用户无需了解这些步骤的情况下完成上述任务，Fixed Forex 有两个核心组成，外汇链上流动性和去中心化的法币出入金。
虽然我对后者最兴奋，但只有在我们实现链上流动性之后，它才有可能被投入真正的使用中。因此，本文的目的，将解释固定外汇的运作方式以及用户如何参与。

**\-Iron Bank固定外汇 (ibff)-**

固定外汇使用杠杆Iron Bank，Yearn，Sushi，和Curve

![](image1.jpg?w=500&h=500)

**免责声明;**

- 未经审计。
- 无早期参与收益，只有风险。
- 初始代币分配将是释放量的一小部分，仅用于测试。
- 鉴于初始分配非常低，不要购买这些代币，不要为这些代币提供流动性，你会赔钱的。

Fixed Forex是USD、EUR、ZAR、JPY、CNY、AUD、AED、CAD、INR以及以 Fixed Forex名称推出的任何其他外汇对的统称。

第一个推出的产品是[ibEUR](https://www.coingecko.com/en/coins/iron-bank-euro)，可以通过 [yearn.fi/lend](https://yearn.fi/lend) 来铸造。

![](image2.png?w=700&h=194)

所有外汇产品都可以通过 [yearn.fi](https://yearn.fi/lend) 上任何可接受的抵押品铸造。

![](image3.png?w=645&h=874)

有关最新的抵押因数，你可以在[此处](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)访问Iron Bank的文档。

每个外汇对将有2个流动性池；

ib\*/\* ([curve.fi](https://curve.fi/))  
ib\*/ETH ([sushi.com](https://sushi.com/))

![](image4.png?w=700&h=243)

对于每种资产，流动性提供者将有四种可能的收益；

1.  将 ib\* 提供给 [yearn.fi/lend](https://yearn.fi/lend) 并赚取利息（目前为 6.38%)
2.  向 [sushi.com](https://sushi.com/) ib\*/ETH  (目前为 390%)
3.  将 ib\*/\* 提供给 [curve.fi](https://curve.fi/) (待定)
4.  在Iron Bank Fixed Forex质押并赚取原生代币IBFF (vested, veIBFF)

\-veIBFF-

IBFF机制复杂，请仔细了解再决定是否参与。

初始发布将只针对一个池，[ibEUR/ETH](https://analytics.sushi.com/tokens/0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27)

作为LP，你可以将LP代币质押在IBFF [faucet](https://etherscan.io/address/0x7d254d9adc588126edaee52a1029278180a802e8)，这提供了部分代币滴注，这是vesting合约[veIBFF](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1)中创建代币锁定所必需的。

系统真正的原生代币是veIBFF，或者说是vesting IBFF，veIBFF赚取协议费用，这些费用是根据供需要动态变化的。目前，这些费用是TVL的10.15%。

IBFF所有者可以选择创建一个vesting锁，最长4年，在veIBFF[合约](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1)上线性衰减。

一旦锁被创建，LP就可以在分配[合约](https://etherscan.io/address/0x1da8a6fe33bd35b99505d67843eec9fa124f2d4b)中质押ibEUR/ETH，分配合约将每7天线性分配代币。

分配代币根据你的vesting锁定时间长短获得奖励。如果vesting为1年，你将收到 1/4 代币作为veIBFF，它将在1年内解锁。剩余的3/4代币分配给费用分配[合约](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859).

veIBFF持有者每两周可以提取1次奖励，奖励是协议累积费用（目前为TVL的10.15%），并从[分配和约](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859)中分配IBFF。

简而言之，你投入的时间越多，你的回报就越不成比例。

**免责声明;**

- 未经审计。
- 无早参与收益，只有风险。
- 初始代币分配将是释放量的一小部分，仅用于测试。
- 鉴于初始分配非常低，不要购买这些代币，不要为这些代币提供流动性，你会赔钱的。

**链接;**

[论坛](https://gov.yearn.finance/c/projects/fixed-forex/26)  
[网站](https://yearn.fi/lend)  
没有社交媒体
