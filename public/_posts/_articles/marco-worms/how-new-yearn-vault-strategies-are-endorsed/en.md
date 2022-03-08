---
title: "How new Yearn Vault strategies are endorsed"
image:
  src: ./image1.jpg
  width: 1280
  height: 800
date: '2022-02-02'
author: Marco_Worms
translator:
---

![](./image1.jpg?w=900&h=478)\
*Strategy Vetting Process*

In the last article about [Yearn Vaults and Strategies](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) we have briefly outlined the **Strategy Vetting Process**. We’ll now dive deeper into how anyone can propose a new strategy to Yearn and what steps are taken in order to ensure that endorsed strategies are resilient.

![](./image2.jpg?w=900&h=478)\
*Quick recap: a Strategy is a contract that will invest and harvest profits using yVault’s funds.*

Before submitting a strategy to be endorsed by Yearn the strategist should write a Due Diligence document about it: [SNX](https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view) and [Vesper](https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O) are good templates to follow. The Due Diligence document is important because it describes all specifications of the processes that a strategy uses and reviews smart-contract common security practices. Yearn will use this document to validate processes and assess risks of what was built!

Some of the things the doc should outline are:

- Protocol decentralization: Does protocol use a multisig? What powers does it have? Are contracts mutable?
- List of audit reports
- All intrinsic strategy details
- Path to deploy in the production environment

The strategist can code a strategy using the [“brownie-strategy-mix” template repository](https://github.com/yearn/brownie-strategy-mix). When the strategy is completed and reviewed by 2 peers it should be deployed on ape.tax which is a website that allows experimental vaults to be tested in a production environment.

![](./image3.jpg?w=352&h=28)\
*ape.tax vaults warning!*

With the document done and after some harvest cycles are completed successfully with no issues, the strategist can now [reach for Yearn contributors](https://docs.yearn.finance/developers/v2/DEPLOYMENT#deploying-a-new-strategy) to get the strategy approved by the [Safe Farming Committee](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533). A complete security review will be done by internal Yearn reviewers.

After every feedback is addressed and code is approved, the strategy can be promoted to production either by redeploying and attaching to an existing vault or by endorsing the ape tax vault.

**The strategy is now endorsed and live in [yearn.finance](https://yearn.finance/)!!**

From now on the strategist + any supporting committee will be rewarded with a 10% performance fee from the vault’s strategies yield. Since security is a high priority concern we expect to raise monitoring and auditing frequency as the strategy scales in Total Locked Value:

- When the strategy has **more than 10M in TVL** the strategist should — create a committee of 3 people with deep knowledge monitoring the strategy 24/7.
- When the strategy has **more than 100M in TVL** it will be then audited by one reputable external audit company and we’ll start doing recurring internal reviews on it.

For more information on how strategies are developed and endorsed you can read these documents:

- [What are Vaults and Strategies?](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)
- [Official Docs — Getting Started with Vaults and Strategies](https://docs.yearn.finance/developers/v2/getting-started)
- [Official Docs — Deploying a Vault and Strategy V2](https://docs.yearn.finance/developers/v2/DEPLOYMENT)
- [Proposal on Yearn Safe Farming](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533)