---
title:  "关于 Yearn 的治理：提案，$YFI 代币和执行"
image:
  src: ./image1.jpg
  width: 900
  height: 482
date: '2022-04-19'
author: Marco_Worms
translator: Xiaona
---

![](./image1.jpg?w=900&h=482)

任何人都可以在 Yearn 的 [Discord](https://discord.com/invite/6PNv2nF)，[Twitter](https://twitter.com/iearnfinance)，[Reddit](https://www.reddit.com/r/yearn_finance)，[Pool of Ideas](https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b)，[Telegram](https://t.me/yearnfinance/) 和 [Governance Forum](https://gov.yearn.finance/)  讨论和提出想法。提案逐渐成熟后，会在治理论坛上形成投票，[YFI ](https://www.coingecko.com/en/coins/yearn-finance) 代币就代表投票权。

- 代币持有者可以在 [Yearn 的 Snapshots 网页](https://yearn.snapshot.page/#/) 投票，无需消耗汽油费。
- 另外，还有个 [退休治理库](https://docs.yearn.finance/contributing/governance/proposal-repository) 目前已经不再被使用了，但可以用于查看 Yearn 的历史。

论坛上最常见的提案形式是 Yearn Improvement Proposals (YIPs)，当然还有其他形式，你可以在 [当前的治理实施 (YIP-61)](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) 查看：

- **Yearn Improvement Proposal (YIP):** 授予 YFI 持有人或超过所列举权利范围的任何提案
- **Yearn Delegation Proposal (YDP):** 改变 yTeam 权利范围的提案
- **Yearn Signaling Proposal (YSP):** 不具约束力的提案，用于表明社区对某个问题的感受或意图

### 治理范围

[YIP-61](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) 决定了当前 Yearn 的治理方式：[yTeams](https://gov.yearn.finance/t/yip-61-governance-2-0/10460#yteams-9) 授权 YFI 持有人自主使用有限的权利。持有 YFI 允许你控制权利在团队中的分配。YFI 赋予持有人通过或拒绝改变协议内权力的特殊投票权：

- 更改 Multisig 或 yTeams 的签名者
- 批准 yTeams
- 花费 Treasury 资金
- 设定协议费用
- 更改 YFI 合约

## 治理论坛流程 

任何人都可以在 [Yearn 治理论坛](https://gov.yearn.finance/)上创建新提案：

![](./image2.jpg?w=900&h=486)

### 提案模板

根据 [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)，以下是编写提案的标准方法：

**概述**：
用非技术的语言描述提案的目的

- **状态：** *（非必须但会有帮助）*
    - **讨论中：** 提案当前正处于讨论阶段。根据 YIP-55 中所规定的投票规则，提案在被分配 YIP 编号之前要经过至少 3 天的不具约束力的论坛民意调查来评估情绪，然后再进入 Snapshot 进行有约束力的投票
    - **投票中：** 提案当前正处于投票阶段。你可以在 Snapshot 上投票。关于投票规则请参考 YIP-55
    - **已通过：** 提案在 2021 年 4 月 25 日，以 99.97% 的支持率投票通过

**摘要：**
简短（约 200 字）描述更改的内容。要写清楚假设提案通过会带来的结果。

**动机：**
当前是因为什么问题让你提出该提案。

**具体介绍：**
详细描述提案所解决的问题，以及如何实施该 YIP

**民意调查：**
在治理论坛对提案进行民意情绪调查，动态支持率需要应大于 50%

### 讨论

要给社区成员足够的讨论时间（至少 3 天）以便从多个角度进行评估。使用 Discourse 的内置投票工具来评估社区对提案的情绪，在进入正式投票之前，至少要有 50% 的支持率。

![](./image3.jpg?w=900&h=351)

在理想情况下要讨论到把提案完全讲清楚为止。在提案**之前**跟不同的治理代币持有者进行沟通是做情绪调查的很好的方式，有助于你从一开始就获得支持。关于 [YIP-57](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319) 的讨论就是个很好的例子，在最初 30，000 枚 YFI 总供应量的基础上增发 6，666 枚，要平衡从 DAO 成员到 YFI 巨鲸持有者这些不同类型持币者的利益。

### 投票

讨论之后提案就正式成为 YIP（或 YDP，根据其内容）并进入投票阶段。在 [Yearn 的 Snapshots 网页](https://yearn.snapshot.page/#/) 投票需要你至少持有 1 枚 $YFI 或者你可以找其他满足条件的人帮你投票，只要提案是优质的就没有什么问题。从论坛的管理者那边获取新 YIP 的编号。

投票权与持有的 $YFI 数量 1:1 对应。所以持有 10 枚 $YFI 的投票权就是持有 1 枚的 10 倍。

投票需要至少 5 天，并要获得 50% 的支持率才能通过，根据 [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959) 不设最低投票率门槛：“最低投票率可能很难做到，且会导致毫无意义的时间消耗。”

![](./image4.jpg?w=900&h=543)

以下的几种持有或质押 YFI 的方式，都具有投票权：
- 钱包
- YFI yVault V2（相当于持有 yvYFI）
- Balancer 上的 YFI/WETH LP 代币
- Uniswap 上的 YFI/WETH LP 代币
- Sushiswap 上质押在 MasterChef 的 YFI/WETH LP 代币
- MakerDAO 上作为抵押品
- Unit Protocol 上作为抵押品
- Bancor

### 结论 & 执行

如果投票获得 50% 以上的支持率，Yearn DAO 就必须执行。[Yearn DAO](https://yearnfinance.notion.site/yearnfinance/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249) 的工作方式与自上而下命令式的公司不同，不会强迫团队或任何个人去执行提案。DAO 会确保使用正确的激励方式使提案得到实施（例如使用财库支付贡献者的报酬）。

以下是最近通过的 2 个 YIP，目前正在执行中：

- [YIP-65: 升级 YFI 代币模型](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: 简化贡献者薪酬支付体系](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)

## YFI 的公平发行

![](./image5.jpg?w=900&h=228)

[Andre Cronje](https://medium.com/@andrecronje) 创建了 Yearn，他当初的一个想法现在已经发展为拥有 200 多名活跃参与者的 DAO。这一切都是因为 Cronje 通过 YFI 代币，把他个人对协议的控制权完全交了出来。早期使用 Yearn 的服务或生态的人都获得了这个权利，以下 Cronje 的文章有相关的详细内容：

1) [YFI](https://medium.com/iearn/yfi-df84573db81)（赚取 YFI 很简单，在这些平台提供流动性）
2) [Earning YFI curve.fi/y](https://medium.com/iearn/earning-yfi-y-curve-fi-53b5fd347f0f)（在 curve 提供流动性赚取 YFI）
3) [YFI rewards pool](https://medium.com/iearn/yfi-rewards-pool-810ef9256ec6)（销毁 YFI 的奖励池）
4) [Pool #3 Meta Yield Governance](https://medium.com/iearn/pool-3-meta-yield-governance-58f68e6d2f19)（包括参与治理在内的多重奖励池）

## 其他资源

如果你正在为写提案找灵感可以参考以下的 YIPs，这些 YIP 的形成都经历了广泛的讨论并有较大的改动：

- [YIP 32: 取消销毁 YFI](https://gov.yearn.finance/t/yip-32-remove-yfi-burning/1907)
- [YIP 36: 用系统奖励支付运营成本](https://gov.yearn.finance/t/yip-36-system-rewards-as-operational-capital/2311)
- [YIP 41: 临时授权多签](https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630/2)
- [YIP-51: 机枪池 v2 的费用设置](https://gov.yearn.finance/t/yip-51-set-vault-v2-fee-structure/7752)
- [YIP-52: 让策略家分享更多的机枪池收益](https://gov.yearn.finance/t/yip-52-make-strategist-skin-in-game-partner-for-make-benefit-of-glorious-brain-of-yearn/7856)
- [YIP-54: 运营资金正式化](https://gov.yearn.finance/t/yip-54-formalize-operations-funding/7956)
- [YIP-55: YIP 流程正式化](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)
- [YIP-56: 回购和建设](https://gov.yearn.finance/t/yip-56-buyback-and-build/8929)
- [YIP-57: 资助 Yearn 的未来](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319)
- [YIP-61: 治理 2.0](https://gov.yearn.finance/t/yip-61-governance-2-0/10460)
- [YIP-65: 升级 Yearn 的代币模型](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: 简化贡献者薪酬支付体系](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)
