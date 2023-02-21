---
title:  "What can you do with YFI?"
image:
  src: ./cover.png
  width: 768
  height: 429
date: '2021-05-05'
author: Dark Ghosty
translator: Xiaona
published: false
---

# 你能用 YFI 做什么？
在本文中，我们将探讨如何使用 YFI 来获得 [DeFi](https://www.coindesk.com/what-is-defi) 收益，每种方式相关的风险以及获得的大概收益率。

- 所有 APY 均来自 4 月 27 日
- 所有偿还债务的头寸都假设以最高利率的 70% 借款，以便能够承受YFI价格降低 30%。
- 这不是财务建议。与 DeFi 协议交互是有风险的，请做你自己的研究。

___

## **在开始之前，请考虑使用 DeFi 保险为你的 YFI 投保**
关于 DeFi 保险及其工作原理的说明。DeFi保险主要涵盖因 solidity 代码中的错误，而导致该协议的资金损失。但请务必仔细阅读每个 Defi 保险文档，以了解它们的作用和不涵盖的内容。

举个例子，假设有人为他们 Yearn 的机枪池购买了保险，但是 MakerDAO 的代码错误，导致机枪池 CDP 资金损失。这个人只有 Yearn 的保险，将无法获得赔付，在这种情况下，他们的保险也不会支付。因为这不是Yearn的智能合约错误导致的损失。有关保险的更多信息，欢迎随时在 [discord](discord.yearn.finance) 的 #support 咨询.

### **DeFi 保险提供商**
- [Nexus Mutual](https://app.nexusmutual.io/#/SmartContractCover)
    - [文档](https://nexusmutual.gitbook.io/docs/)
- [Cover Protocol](https://app.coverprotocol.com/)
    - [文档](https://docs.coverprotocol.com/)

___

## ***直接存款***
本节介绍你可以单独使用 YFI 的方法。获得收益的其他方法，例如向去中心化交易所的 [自动做市商 (AMM)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers) 提供流动性，可能需要你将 YFI 与另一个代币配对，这可能会影响你对 YFI 的全部敞口。这并不是说这种方式是无风险的，而是说你不必处理所谓的[无常损失 (IL)](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi)。 *使用智能合约总是会带来一些风险。*

### Yearn: v2 YFI yVault
你只需要轻松地存入 YFI，Yearn Finance YFI v2 yVault 将会选择最佳策略为您赚取收益。撰写本文时的策略为，机枪池打开一个 CDP，并使用铸造的DAI进行耕种。此外，yVault 将 YFI 借给 CREAM 和 AAVE 以获得更高的产量。

#### 网站
- [Yearn.Finance](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)

#### 工具
- [Yearn Hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): 此链接将显示机枪池中有多少资金分配给哪些策略。
- [Yearn 机枪池](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3): 在这里你可以看到yvYFI v2机枪池中的每个策略。
- [Yearn Vision](yearn.vision): 机枪池统计信息的仪表板。
- [Zap into v2 YFI yVault](https://zapper.fi/invest?protocol=yearn&contractAddress=0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1&modal=invest)

#### 风险
目前，与该机枪池相关的风险是Yearn的机枪池智能合约 (经过[审计](https://github.com/yearn/yearn-security/tree/master/audits)) 风险，MakerDAO CDP 风险，以及 CREAM 和 AAVE 两个平台的智能合约风险 (由于策略将 YFI 借给 CREAM 和 AAVE 以获得额外收益)。机枪池监控其 CDP 并保持 [health ratio](https://medium.com/iearn/delegated-vaults-explained-fa81f1c3fce2) 为 3，这意味着它只会铸造可允许铸造的最大值的1/3的 DAI，然后使用这些 DAI 进行耕种。

#### 保险
在撰写本文时，要在 YFI v2 机枪池中完全投保，你需要在 Yearn，MakerDAO，AAVE 和 CREAM 都投保。当然你可以选择性只为你认为风险较高的协议投保。在 [yearn hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1) 可以查看到此yVault与哪些协议有交互。

#### APY
APY: 2.866%
计算: 年化上个月净值。
资料来源: [vaults.finance: yearn v2 API](https://vaults.finance/all)
备注: APY 一度达到 24% 的峰值

这个机枪池是 Yearn 团队中最新的 YFI 机枪池，最近的策略是在 BDP 的农场，如果证明可以安全地做农场并获得更好的收益，将很快正式进入 YFI 农场。

- [Yearn.Finance: YFI Vault](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): earn的机枪池页面显示根据公式得到的每周或每月 APY。  

___

## ***直接存款，可能有 IL***
一些农场技术的设计旨在降低 IL 的风险，但不能完全消除它。一个典型例子就是为 Bancor 协议提供流动性。如果资金在 Bancor 中存款超过 100 天，如果存在IL，则在提款时将由BNT补贴等值损失的价值（用户可以自由转换回 YFI）。实际上这意味着如果你使用 Bancor 的存款超过 100 天，则不必担心 IL。

### Bancor: YFI/BNT 单面保护池

Bancor是一个 AMM，就像 Sushiswap 和 Uniswap 一样，但在新推出的 Bancor v2.1 中有一个关键的区别。如果你在流动性池中停留超过 100 天，Bancor 将保护IL。此保护从 30 天开始部分保护，在 100 天内逐步扩展到完全保护。目前，对YFI池的激励奖励已经停止，但有一项[提案](https://gov.bancor.network/t/proposal-re-enable-lm-rewards-on-yfi/1838)将其恢复，如果获得批准，将意味着该YFI池将有更高的收益。


#### 网站

[Bancor YFI Pool](https://app.bancor.network/eth/portfolio/stake/add/single/0xAeB3a1AeD77b5D6e3feBA0055d79176532e5cEb8)

#### 工具

- [Ceazor's Guide to Bancor v2.1: YFI/BNT Single-Sided Protected Pool](https://youtu.be/LhLMhizDNwE?t=23)
- [Bancor 文档](https://docs.bancor.network/)
- [Bancor Dune 仪表盘](https://duneanalytics.com/Bancor/bancor_1)
- [Bancor v2.1 Staking for (DeFi) Dummies](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e)
- [Zap into YFI/BNT Single-Sided Protected Pool](https://zapper.fi/invest?protocol=bancor&contractAddress=0x555981b82743aa443cb1c3002c85ba9d795d4596&modal=legacy-invest)

#### 风险

Bancor 智能合约风险和对 [bancor v2.1 model](https://blog.bancor.network/proposing-bancor-v2-1-single-sided-amm-with-elastic-bnt-supply-bcac9fe655b) 模型的信任风险。Bancor [已审计](https://docs.bancor.network/ethereum-contracts/security).

##### 保险

对于 DeFi 保险，你只需要为 Bancor 投保，一旦因智能合约错误导致资金损失， 你将获得全面赔偿。  

#### APY

APY: 3.7%
计算: 年化上个月净值。
资料来源: Bancor Team

- [YFI 池 APY](https://duneanalytics.com/queries/30793/62118): 单击每个池，直到只剩下YFI。这将显示池的APY统计信息。

___

## ***[抵押债务头寸](https://defipulse.com/blog/what-is-a-cdp)***

基于 CDP 的协议允许你存入 YFI，以换取较少数量的协议发行的代币，通常是稳定币。然后，你可以使用这些代币进行农耕并生成收益。使用此方法比其他方法更耗时，并且需要持续监控 CDP 以确保你不被清算。此外，你还需要使用铸造的稳定币在其他地方寻找收益并进行管理。

在本节中，我们使用抵押品比率，即百分比。以 Unit Protocol 为例，其抵押品比率为 69%，那么如果你存入价值 1000 美元的 YFI，你能够铸造稳定币的最高限额是 690 美元。请注意，这是你可以借出的 MAX，如果它高于此比率，你将被清算 - 我们建议你借出的远低于此比率，这样就不会被清算了。


### MakerDAO
MakerDAO 是为你的加密货币提供贷款的运行时间最久的 Dapp。通过 MakerDAO 你可以使用 YFI 铸造稳定币 DAI，然后使用这些 DAI 进行农业耕种。

#### 网站
- [Oasis.app](https://oasis.app/borrow)

#### 工具
- [DeFiSaver](https://app.defisaver.com/): 管理你的 CDP 健康比的工具

#### 风险
如果你的 CDP 高于 57% 的抵押品比率被清算的风险，Makerdao 的智能合约风险，预言机故障风险以及你使用借出的 DAI 的协议的智能合约风险。

#### 保险
对于 DeFi 保险，你需要为 MakerDAO 以及你借出或存入 DAI 稳定币的协议投保，以便在智能合约错误导致资金损失的情况下获得全面保障。

#### APY
APY: -5.5% + (21.07% * 0.44) = 3.7708%
计算: 借 DAI 的费用 - （稳定币收益农场 APY （Zap to v2 crvIB yVault） * DAI 的可以安全铸造百分比）。
附注: 借用 DAI 需要向 MakerDAO 支付 5.5% 的年费。
资料来源: [Oasis App Borrow - Select collateral type YFI-A](https://oasis.app/borrow)

### Unit Protocol
Unit Protocol 是一个类似于 MakerDAO 的 CDP 平台，与 MakerDAO 不同的是，你在 Unit Protocol 铸造的稳定币是 USDP 而不是 DAI。对于 Unit，他们的抵押品比率为 69%，高于 MakerDAO，并且他们已经过审计，但他们是一个较新的平台。

#### 网站
- [Unit Protocol](https://unit.xyz/)

#### 工具
- [文档](https://docs.unit.xyz/)
- [Ceazor Video Tutorial](https://youtu.be/zlFBeoTHJUs?t=33)

#### 风险
如果抵押品比率超过 69%，则有被清算的风险；Unit Protocol 的智能合约风险；预言机故障风险以及你使用借出的 USDP 的智能合约风险。你可以在[这里](https://github.com/unitprotocol/protocol_docs)找到他们的审计报告。

#### 保险
对于 DeFi 保险，你需要为 Unit Protocol 以及将 USDP 稳定币借出到的任何地方投保，以便在智能合约错误导致资金损失的情况下获得全面保障。

#### APY
APY: -5.5% + (21.07% * 0.53)  = 5.67%
计算: Unit Protocol 5.5年费 +（使用 [v2 crvIB yVault](https://yearn.finance/vaults/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7) * 可以安全铸造的 USDP 的百分比）。
旁注: 你可以在任何地方使用您的USDP以产生更高的收益，我们使用Yearn的USDP机枪池仅作为示例。
资料来源: [Unit Protocol](https://unit.xyz/asset/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)

___

## ***借贷***


在本节中，我们将介绍允许你借出 YFI，或者使用你的 YFI 作为抵押品来借入稳定币或其他代币的平台，然后你可以使用它们来耕种。这与开立 CDP 不同，CDP 允许你以固定的年利率铸造稳定币，而贷款和借款通常是可变利率。使用这类借贷平台，你不仅要担心在哪里借出你借入的稳定币，还要担心借贷利率以及矿池的利用率。如果你借出 YFI 的 YFI 池已充分利用，这意味着用户借入了借出的所有 YFI，那么你将只能等到池中有流动性才能提款。

### Cream Finance
Cream.Finance 是一个去中心化借贷协议。您可以用 YFI 作为抵押品借出稳定币，最高可借出总抵押品价值的 50%。

#### 网站
- [Cream.Finance](https://app.cream.finance)

#### 工具
- [Cream 文档](https://docs.cream.finance/)
- [Ceazor Video Tutorial: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=598)

#### 风险
如果你超过50%的抵押品比率被清算的风险；Cream Finance 的智能合约风险，预言机故障风险以及你使用借出的稳定币的智能合约风险。此外，你需要人工查看收益农场的APY是否超过借款APY，否则你将亏损。你可以在[这里](https://docs.cream.finance/audit-report)找到他们的审计报告。

#### 保险
对于 DeFi 保险，你需要为 Cream Finance 以及你将稳定币借出的任何协议投保，以便在智能合约错误导致资金损失的情况下获得全面保障。

#### APY
APY: 0.27% - 18.81% + (60.30% * .39) = 4.977%
计算: 存款APY （YFI） - 借款APY （USDC） + （稳定币收益率农场APY （Zap to v1 crvEURS yVault） * 可安全借出的稳定币百分比）。
旁注: 这是一个例子，但你可以在任何地方产生收益。
资料来源: [Cream](https://app.cream.finance) 和 [Yearn](https://yearn.finance/vaults/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC) 收益.

### Iron Bank
Iron Bank 其实跟 Cream v1 一样，但他们对他们列出的资产更具选择性，他们允许白名单协议以很少抵押品或无抵押品借出资金，如 Alpha Homora v2 和 Yearn Finance。由于协议可以在几乎没有抵押品的情况下借款，因此 Iron Bank 的利用率往往高于 CREAM 或 AAVE。

#### 网站
- [Iron Bank](https://v1.yearn.finance/lending)

#### 工具
- [Iron Bank 文档](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

#### 风险
如果你超过要求的抵押品比率被清算的风险；Iron Bank的智能合约风险；预言机故障风险以及你使用借出的稳定币的智能合约的风险。你可以在[这里](https://github.com/trailofbits/publications/blob/master/reviews/CREAMSummary.pdf)找到他们的审计报告。

#### 保险
对于 DeFi 保险，你需要为 Ironbank、以及使用借出的稳定币的协议投保，才能在智能合约错误导致资金损失的情况下获得全面保障。

#### APY
APY:
计算:
资料来源:
备注: 目前你无法在 Ironbank 上以 YFI 借款，但将来可能会发生变化。

### AAVE
AAVE 是另一个你可以使用 YFI 上贷款的地方。在 AAVE 抵押 YFI 可以借出高达 40% 的其他代币。AAVE 对借出稳定币有固定利率和可变利率可选，而在 MakerDAO 和 Unit，它始终为 5.5%。在 AAVE 借款有可能获得更便宜的利率，但即便使用固定利率，你需要同时注意你的抵押品水平和借贷利率。

#### 网站
- [AAVE](https://app.aave.com/)

#### 工具
- [Ceazor Video Tutorial: AAVE v2](https://youtu.be/eMP_uIwniHc?t=46)
- [Ceazor Video Tutorial: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=407)

#### 风险
如果你超过 40% 的抵押品比率被清算的风险；AAVE 的智能合约风险；预言机故障（使用 Chainlink）风险以及你使用借出稳定币的智能合约风险。你可以在[这里](https://docs.aave.com/developers/security-and-audits)找到他们的审计报告。

#### 保险
对于 DeFi 保险，你需要为 AAVE 以及使用借出稳定币的协议投保，以便在智能合约错误导致资金损失的情况下获得全面保障。

#### APY
APY: 0.11% - 3.98% + (60.30% * .31) = 14.83%
计算: 存款 APY （YFI） - 借款 APY （TUSD） + （稳定币收益率农场 APY （Zap to v1 crvEURS yVault） * 安全借出的稳定币百分比）
旁注: T这只是一个例子。你可以选择任何其他协议使用借出的稳定币。
资料来源: [AAVE - YFI](https://app.aave.com/deposit/YFI-0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5)

___

## ***提供流动性***

本节讨论策略会面临无常损失，并且你还必须为AMM池的两侧提供流动性。 **如果你想使用YFI，你还必须添加相等价值的ETH。**

### Sushiswap YFI/WETH 流动性池
Sushiswap 是 AMM，其收益率通常高于 Uniswap，因为它的池子有 $Sushi 的奖励。

#### 网站
- [Sushiswap](https://app.sushi.com/yield)
#### 工具
- [YFI Sushi pools](https://analytics.sushi.com/tokens/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)
- [apy.vision YFI/ETH Sushi Pool](https://app.apy.vision/pools/sushiswap_eth-YFI-WETH-pool-0x088ee5007c98a9677165d78dd2109ae4a3d04d0c)
- [Zap into Sushiswap YFI/WETH Pool](https://zapper.fi/invest?protocol=sushiswap&contractAddress=0x088ee5007c98a9677165d78dd2109ae4a3d04d0c&modal=invest)

#### 风险
无常损失风险，Sushiswap的智能合约风险。

#### 保险
对于 DeFi 保险，你只需要为 Sushiswap 投保，以便在智能合约错误导致资金损失时获得全额保险。

#### APY
APY: 39.08%
计算: 在 Sushiswap 上抵押你的 YFI / WETH SLP 代币的年化 APY。
资料来源: [Sushiswap Yield](https://app.sushi.com/yield)

### Uniswap v2 YFI/WETH 流动性池
一般来说，在 AMM（如 Uniswap，Bancor 和 Sushiswap）上，进入交易量最大的池是比较好的选择，因为交易量大意味着流动性提供商的收入更高。平均而言，Sushiswap 比 Uniswap 具有更多的流动性，因此一般来说，在那里LP会更好，但 Uniswap 可能比 Sushiswap 有更好的收益率。

#### 网站
- [Uniswap YFI/WETH Pool](https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e)

#### 工具
- [Zapper Uni YFI/WETH](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)
- [YFI/WETH 的 IL 计算器](https://app.sommelier.finance/pair?id=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&timeWindow=total): 显示从进入该池的某个日期开始，收益或亏损情况。
- [Uniswap Analytics YFI/WETH](https://info.uniswap.org/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Apy.vision YFI/WETH](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Zap into Uniswap v2 YFI/WETH Pool](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)

#### 风险
无常损失和智能合约风险是在 Uniswap 提供流动性时需要注意的问题。

#### 保险
对于 DeFi 保险，你只需要为 Uniswap 投保，以便在智能合约错误导致资金损失的情况下获得全面承保。

#### APY
APY: 20.79%
计算: 减去 IL 后的最近 30 天年化。
资料来源: [apy.vision](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)

### Pickle.Finance pSUSHI YFI/WETH jar
Pickle 类似 Yearn 的机枪池（称为 Jar 罐子），可让你自动复投从 YFI / WETH 池中获得的 $SUSHI 奖励，此外还有 PICKLE 作为额外奖励。

要使用 Pickle.Finance，你需要在[这里](https://app.pickle.finance/jars)将SLP（Sushiswap LP 代币）存入他们的泡菜罐 Pickle Jar，然后在[这里](https://app.pickle.finance/farms)将其存入他们的农场。现在，你还可以通过锁定 PICKLE 获得 DILL，将你在农场中获得的 PICKLE 奖励提升最高 2.5 倍。

#### 网站
- [Pickle.Finance Farm](https://app.pickle.finance/farms)
- [Pickle.Finance Jar](https://app.pickle.finance/jars)

#### 工具
- [Dill boost 计算器](https://app.pickle.finance/dill)
- [Ceazor's tutorial: Yearn Zap into yveCRV-ETH Pickle Farm](https://youtu.be/Q3HELI9TfjQ?t=25)

#### 风险
Sushiswap LP 头寸的无常损失，Pickle.Finance 和 Sushiswap 的智能合约风险。

#### 保险
对于 DeFi 保险，你需要为 Sushiswap 和 Pickle.Finance 投保，以便在智能合约错误导致资金损失的情况下获得全面保障。

#### APY
APY: 43% 未提升，58% 完全提升。
计算: APY, 通过锁定 PICKLE 获得 DILL 完全提升
资料来源: [Pickle.Finance Farms](https://app.pickle.finance/farms)

___

## ***提供杠杆流动性***
在本节中，你可能会遭受无常的损失，并且你必须注意您的债务比率以确保你没有被清算。

### Alpha Homora v2
允许你存入 Uniswap 或 Sushiswap 的 LP 代币，并提供高达 1.75 倍的杠杆率进行农耕。使用 Alpha Homora，你可以使用 1 个资产（自动兑换为池中的其他资产）进入农场，通过3笔交易自动执行所有步骤，并且与 pickle.finance 一样自动复投从获得的奖励。就像 pickle.finance 会给你 PICKLE，如果你使用他们的协议，使用杠杆耕种 AMM 池（Uniswap 或 Sushiswap），Alpha Homora 会给你额外的 ALPHA 作为奖励，在[这里](https://alphafinancelab.gitbook.io/alpha-homora/where-does-apy-come-from-for-each-pool)查看。

#### 网站
- [Alpha Finance](https://homora.alphafinance.io/farm)

#### 工具
- [文档](https://alphafinancelab.gitbook.io/alpha-homora/)
- [Ceazor Video Tutorial](https://youtu.be/WKW8TsTyGOg?t=41)

#### 风险
如果你的债务比率超过 60% LTV（贷款价值比）被清算的风险，Alpha Homora v2 的智能合约风险，你正在利用的池的智能合约风险（Uniswap 或 Sushiswap）。你可以在[这里](https://github.com/peckshield/publications/blob/master/reviews/PeckShield-Security-Review-Alpha-Homora-v1.0.pdf)找到他们的审计报告。

#### 保险
对于 defi 保险，你需要为 Alpha Finance 和你正在使用的AMM投保，以便在智能合约错误导致资金损失的情况下获得全面保障。

#### APY
APY: 75.38%
计算: Sushiswap ETH / YFI 池的 1.5 倍杠杆。
资料来源: [Alpha Homora - Farm](https://homora.alphafinance.io/farm)
