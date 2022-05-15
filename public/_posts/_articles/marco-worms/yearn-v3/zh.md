---
title:  "Yearn 机枪池 v3"
image:
  src: ./image1.jpg
  width: 900
  height: 429
date: '2022-05-03'
author: Marco Worms
translator: Xiaona
---

![](./image1.jpg?w=900&h=429)

v3 机枪池由开发者和 degen 共同打造，怀着对它的期待，我找到 v3 的设计团队并跟他们做了交流。我惊讶于 v3 增加的功能之多。最初我们的对话是围绕着 [ERC-4626](https://twitter.com/iearnfinance/status/1511444220850184197) 的代币标准展开的，也就是标准化机枪池，但后来才发现这只是冰山一角。

# v3 的目标是要改进 Yearn 机枪池的所有核心功能

### 安全性

保持 Yearn 在 DeFi 安全实践方面的最佳地位。

### 开发

减少创建策略的摩擦，为机枪池提供更广泛的策略。

### 自动化

除了收获的功能以外，实现机枪池更多功能的自动化，距离 100% 自动化的终极目标再近一步。

## v3 要解决的问题，也是开发者们的工作重心如下：

### 增强模块化

在 yVault 合约部署代码会更简单更稳健，智能逻辑将以模块化的方式呈现以便于多次反复使用。

采用 ERC-4626 标准，提高机枪池与采用此标准的其他协议之间的兼容性。

### 改进策略 <-> 机枪池的关系

策略测试和部署将会更容易，总体而言将通过使用更多的工具来实现更广泛的收益可能性，包括锁定资金、高风险策略以及多链策略等。

### 创建新产品

新产品如 Junior Tranches，将采用风险较高的策略，用户可以选择使用不同风险级别的产品。

一种代币将会有多个机枪池

机枪池资产将通过多签来控制，并邀请合作伙伴共同执行多签。

## 灵活性

v3 将赋予开发者和策略家更多的灵活性。v3 将会增强合约模块化，为机枪池的存款方式打开新的大门。

我们将会看到更多的外围合约实现自动化：在 v2 只有收获是自动化的，而 v3 让我们距离 100% 自动化的目标更近一步。因为现在重要的功能也能够通过 [Keep3r Network](https://keep3r.network/) 来轻松的实现自动化。

> **我们想要跑地快，但更重要的是我们要跑地稳** — Skeletor

## 更加激进的策略

v2 每个机枪池的策略不能超过 20 个，v3 将打破这个限制。此外，使用 [Senior/ Junior Tranches](https://corporatefinanceinstitute.com/resources/knowledge/finance/junior-tranche-debt/) 合约模型的机枪池将采取较高风险的策略。

使用 Junior Tranche 合约来采用高风险策略，这意味着用户首先存款到机枪池，然后可以选择将机枪池代币存入高风险/高收益的 junior tranche 合约，甚至还可以选择某特定策略。这比较适合于风险承受能力较高的用户。

v3 团队正在研究的另一件事情是如何实现[策略背书](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d)的去中心化。目前 Yearn 在安全审计方面还是中心化的，如果能够让这个过程去中心化，这将会大大提高产品的扩展空间。

提高用户、策略家和开发者对机枪池的整体使用体验感的更多改进：

- 优化 ySwaps（策略家进行代币互换的服务）的汽油费。
- 为了保证份额单价的增加，v2 的收获需要 6 个小时数据才会显示，但在 v3 这个时间是动化的以改善 MEV 保护。
- 围绕机枪池流程所增强的模块化，将使我们与合作伙伴之间的关系更加紧密，以便于为他们提供更具有针对性的解决方案

## 机枪池代码
v2 机枪池代码是用 [Vyper](https://vyper.readthedocs.io/en/stable/) 编写的，而 v3 使用的是 [Solidity](https://docs.soliditylang.org/en/v0.8.13/)。

v2 已经证明了 Vyper 的可靠性，但使用它的开发者并不多。考虑到像 v3 这样重要的项目需要更多的开发者，我们决定使用 solidity。我们依然看好 Vyper 未来的发展，也会在 Yearn 的智能合约中继续使用它，任何围绕机枪池的模块都可以继续使用 Vyper 来编码。

![](./image2.jpg?w=900&h=253)\
*[Defillama 区块链编码语言使用数据统计](https://defillama.com/languages)*

根据 [Defillama](https://defillama.com/languages) 提供的区块链编码语言使用统计数据，目前使用 Vyper 的占 10%，Solidity 占 69%。这反映了 Solidity 是市场主流。而 v3 需要更多的贡献者，选择 Solidity 将有助于更快的打造一支有经验的开发团队。

## 未来可期

本文内容只触及了 v3 的皮毛，Yearn 的贡献者还在努力开发更多令人兴奋的产品和功能。 

**[你可以在这里找到更多加入 Yearn 的机会！](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)**

**来自 [yearn.finance](https://yearn.finance/#/portfolio)**
