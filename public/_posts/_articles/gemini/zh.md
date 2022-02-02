---
title:  "Yearn Finance和投资机器人"
image:
  src: ./cover.png
  width: 1281
  height: 721
date: '2021-03-25'
author: Gemini/Cryptopedia
translator: Bee926
published: true
---

原始发布: [https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol](https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol)

# Yearn Finance和投资机器人：自动化的DeFi策略

Yearn Finance提供了一套由机器人驱动的投资策略，这些机器人应用“来自人群的智慧”-而这都来自于Yearn自己的社区中。

![](image1.png?w=1281&h=721)

## 简介

Yearn Finance投资机器人在各种DeFi平台上执行投资策略，旨在以最低的风险产生最高的回报。这些投资策略包括提供贷款资产，通过挖矿赚取项目代币，提供流动性，或者将这些和其他投资策略结合起来，用于在各种的DeFi贷款协议上。Yearn协议可让您轻松的在其平台上存入货币就即可参与复杂的投资策略。其不断扩展的产品套件旨在于简化Defi投资，因此吸引了很多投资者的注意。

## 内容

- Yearn.Finance: yVaults机枪池 
- yVault策略案例研究: GUSD
- DeFi产品套件
- 人群的智慧

Yearn Finance开发自动化的产品，目标是通过“投资机器人”来简化DeFi的复杂性，这些机器人可以让付费的用户获得最大化的回报。Yearn开始时只有一位[以太坊](https://www.gemini.com/cryptopedia/ethereum-smart-contracts-tokens-use-cases)开发人 —[Andre Cronje](https://www.gemini.com/cryptopedia/glossary#andre-cronje)— 他最初开始时只是想自动化和优化自己的DeFi收益。而如今，Yearn已发展为以太坊上最活跃和参与度最高的去中心化社区之一，其目标是不断地开发创新的方式来产生回报。

投资机器人实际上就是Yearn自动化的投资策略，而这些都是在基于以太坊的平台上执行的。越来越多的DeFi产品有无数的投资策略。举些例子，Yearn投资机器人可以在[Curve 协议](https://www.gemini.com/cryptopedia/curve-crypto-automated-market-maker)上赚取交易费，使用[Aave的闪电贷](https://www.gemini.com/cryptopedia/aave-flashloans)借钱以及将资产借给[Compound](https://www.gemini.com/cryptopedia/compound-finance-defi-crypto)。

## Yearn.Finance: yVaults机枪池

Yearn生态系统中最受欢迎的产品是[yVaults](https://www.gemini.com/cryptopedia/glossary#y-vaults)，而这些池遵循在各种DeFi平台之间部署的投资策略。将货币存入yVault机枪池会自动铸造新的[yToken](https://www.gemini.com/cryptopedia/glossary#y-tokens)，而这是一种[流动性提供者（LP）代币](https://www.gemini.com/cryptopedia/liquidity-provider-amm-tokens)。流动性提供者LP代币是在将货币存入[流动性池](https://www.gemini.com/cryptopedia/glossary#liquidity-pool)后自动铸造的代币，而这些代币代表着此流动性池中基础资产的索取权。每个yToken都可以随时被用来赎回最初存入的货币，再加上货币在yVault中被使用时积累的任何奖励。

举个例子，您可用[GUSD](https://www.gemini.com/cryptopedia/gusd-gemini-dollar-stablecoin-features)存入GUSD yVault而获得yGUSD LP代币。当您用yGUSD来换回基础GUSD货币时， 您会收到GUSD和GUSD在yVault中被使用时积累的任何奖励。Yearn机枪池将DeFi应用程序和组件的复杂层压缩为简单化的交易策略，投资者可直接地在其中提供资产并持着LP代币就可轻松的参与复杂和算法性的策略。

## yVault策略案例研究: GUSD

yVault策略是可变的, 如果策略可得的利润变得越来越少，Yearn的社区可以决定改变或调整。在 yGUSD的 2020 年 10 月策略中（此策略已针对优化被进行了调整），该策略可通过以下步骤为yGUSD持有者赚取收益:

1. GUSD存入由各种[稳定币](https://www.gemini.com/cryptopedia/what-are-stablecoins-how-do-they-work)（GUSD，[DAI](https://www.gemini.com/cryptopedia/dai-stablecoin-what-is-dai-token)，USDC和USDT）组成的Curve资金池中以赚取收益。
2. 从稳定币池铸造的LP代币被押入Curve中以赚取[CRV代币](https://www.gemini.com/cryptopedia/glossary#crv-token)。
3. 90％所赚取的CRV代币被出售以获取更多DAI。
4. DAI被存回原来的GUSD， DAI， USDC， USDT稳定币池以赚取更多收益。

从用户的角度来看，以上步骤是在算法罩下进行的。与其它yVault策略相比，这个GUSD策略本身其实相当简单，然而其它yVault策略可涉及一些比较复杂的步骤例如应用[杠杆](https://www.gemini.com/cryptopedia/glossary#leverage)贷款以维持对市场的敞口。

举个例子，截至 2020 年 12 月仍处于试验阶段且尚未完全发布的yETH机枪池，这个策略同时使用了[MakerDAO](https://www.gemini.com/cryptopedia/makerdao-defi-mkr-dai-coins)和Curve协议。通过这个yETH策略，ETH持有人以下列出的步骤获利的同时仍然保持市场敞口（ ETH 的价格升值或贬值）:

1. ETH作为抵押品存入MakerDao。
2. DAI是使用存入的ETH作为抵押品从MakerDao借来的。
3. 借出的DAI被存入yDAI机枪池。
4. yDAI机枪池将DAI存入Curve中以赚取收益。
5. 从DAI池中铸造的LP代币将被押在Curve中以赚取CRV代币。
6. CRV代币被出售以获取更多ETH。
7. ETH作为抵押品被存回MakerDao。

由于yETH机枪池的主要动作是从MakerDao借用DAI，因此会有清算的风险 — 这意思是投资机器人可以出售您的ETH以偿还您的DAI贷款。当ETH抵押品的价值跌至借入的DAI的价值的 150％ 以下时，清算将会发生。为了避免清算，yETH机器人旨在将ETH抵押品的价值与DAI债务的价值相比保持在 200％ 的安全户限上。如果ETH抵押品的价值开始降至 200％ 目标以下，则机器人将自动还清DAI的部分债务，以保持超额抵押。管理债务，抵押品和清算为Yearn的机枪池增加了另一层复杂性。

重要的是要知道, yVault策略如依赖于很多协议和平台，它就会变得越复杂，这会间接地增加yVault策略的风险。例如像yETH的例子，它不但具有使用杠杆的风险，还有清算和智能合约失败的风险。

## DeFi产品套件

Yearn系列产品是DeFi产品不断扩展和发展的集合。除了各种yVault策略之外，Yearn还提供其他多种活跃的产品，而这些产品一起构成了整体生态系统。

其他Yearn产品包括yEarn应用程式，该应用程式专注于使用像DAI之类的稳定币，并将其投入到Compound或Aave的高利率借贷池中。 ZAP是另一个产品旨在于通过将多种手动交易动作简化为只需一键操作的交易，这会降低在以太坊上的交易成本。 yInsure的功能是提供智能合约在代码中有漏洞或缺陷的情况下提供保险。

目前还处于研发阶段的产品很多，包括用于交易的yTrade，用于自动清算的yLiquidate和用于贷款的yBorrow。迄今Yearn已被认同为研发的沃土，随着DeFi空间的成熟，其产品供应将会继续扩展。

## 人群的智慧

Yearn投资机器人执行数字资产投资的策略: 如何分配它们，放置在哪里，何时移动它们以及何时出售它们。实际上，任何人都可以通过在Yearn治理论坛上发布新策略并向社区解释其逻辑和潜在回报。如果得到社区的批准，该策略将被实施，而策略创建者会赚取费用 — 得益于他们成功的策略执行。

尽管DeFi空间在各个平台上均具有许多自动化和算法机制，但Yearn投资机器人的策略是由社区成员创建和影响的。Yearn的社区管理“[公平分发](https://www.gemini.com/cryptopedia/what-is-yearn-finance-yfi-coin-yearnfinance)”其高度稀缺的[YFI治理代币](https://www.gemini.com/cryptopedia/glossary#yfi-token)。即使在自动化算法的时代，其社区合作性质是人类创造力和功效的标志。在Yearn，想法可以来自任何地方，而智慧则来自人群。而这智慧的效力将被反复的用真钱实时地测试，迭代和改善。

Yearn Finance在DeFi领域中呈现了一个分层，互操作性和众包的独特主张。这是一个自动化投资和产品开发，应用激励与协调方面的实验。而这也是一个实验，看看具有广泛优化回报目标的去中心化社区是否可以在没有组织冲突之下有效地发挥作用。尽管许多DeFi平台专注于和传统的机构和系统脱节，Yearn的创新是充当中介，将去中心化的社区和平台集合在一起，共同的目标是使用户受益。
