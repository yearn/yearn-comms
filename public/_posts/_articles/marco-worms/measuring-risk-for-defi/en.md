---
title: "Measuring risk for DeFi yield strategies"
image:
  src: ./cover.jpg
  width: 900
  height: 356
date: '2022-10-27'
author: Marco_Worms
translator:
---


![](./cover.jpg?w=900&h=)

> _If you struggle with the lingo for this article check our_ [_Strategy Descriptions Glossary_](https://docs.yearn.finance/getting-started/guides/how-to-understand-strategies-descriptions) _which has most of the terms used here explained._

DeFi investments are like the wild west:  _Learn how to use your gun and ride your horse. Otherwise, you are dead!_  As yield-generation options across the ecosystem mature, some places are explicitly more dangerous than others. However, as veterans trailed and survived, they left tools for newer adventurers to explore DeFi with and avoid known dangers.

Yearn assess DeFi strategy risks by examining each investment strategy for key dimensions. In this article we will break down how retail investors can use some of the same tools that the pros use to measure DeFi risks, showcasing the  [**Yearn DeFi Strategy Risk Score Framework**](https://docs.yearn.finance/resources/risks/risk-score).

## Risk Dimensions

-   **Complexity**  — How complex it is to enter and exit this strategy investment position fully.
-   **Protocol Safety**  — Overall best practices of the protocol, including devs, audits, security procedures, timelock, etc.
-   **TVL Impact**  — How much is our entire investment portfolio impacted if this strategy fails?
-   **Team Knowledge**  — A measurement of how many folks in Yearn know about the code and can react in an emergency.
-   **Longevity**  — How long has the strategy been live without an issue since deployment?
-   **Testing Score**  — How covered by automated tests are the strategy contracts?
-   **Code Review**  — Quantity and frequency of code reviews done for this strategy’s automation.
-   **Audit**  — Quantity and frequency of audits for yearn strategy contracts involved.

We will go into how to assess some of the above by ourselves, but before, we must know  **there are always risks involved**  in DeFi operations, such as:

-   **Governance**  — Admin keyholders may change contract parameters in unexpected ways.
-   **Technological**  — Smart contract bugs or exploits.
-   **Market**  — Low trading volume can be fatal for yields.
-   **Oracles**  — Dependency on centralized price feeds.
-   **Operational Risk**  — Manual position management can lead to bad timing.

With that in mind, let’s dive into each dimension and how to analyze them for a strategy:

![](./image1.jpg?w=900&h=)

Let’s break down a strategy called “GenLevCompV3” (the strategy is on version 3, but it uses Compound v2). It currently holds about $30m in the Yearn DAI vault (and $37m in other stablecoin vaults running the same strategy), so it is a real example for us to learn from.

-   [Link to this strategy details and address on yearn.watch](https://yearn.watch/vault/0xdA816459F1AB5631232FE5e97a05BBBb94970c95/0x1676055fE954EE6fc388F9096210E5EbE0A9070c)

Briefly, if we were to try to replicate this strategy manually it does the following:

1.  Supply DAI at Compound
2.  Borrow DAI from Compound
3.  Loop between steps 1 and 2 until the desired leverage ratio is met
4.  Continuously sell any COMP rewards for more DAI to reinvest in step 1

But Yearn does an optimization so the strategy doesn’t need to do many loop operations and still meets the desired leverage:

1.  Flashmint DAI at MakerDAO
2.  Supply deposited DAI + flashminted DAI to Compound
3.  Borrow DAI from Compound so we acheive the desired leverage ratio
4.  Repay the mint from step 1 (everything happens in the same transaction, so it’s a flashmint combined with a flashloan to repay the mint)
5.  Continuously sell any COMP rewards for more DAI to reinvest in step 1

Both achieve the same result. You can start with an amount of DAI and leverage a position up a desired loan-to-value ratio. Be mindful that the more you lever up, the more exposed you are to the risk of being liquidated (losing locked assets). There is some math to be done to know how much you want to lever up, depending on the net APR and the protocol emission rewards, levering too much may end up in a negative APR.

At  [yearn.watch/risk](https://yearn.watch/risk)  we can see the exact scores yearn strategists gave for this operation:

![](./image2.jpg?w=900&h=)

Breaking down the score for each dimension:

![](./image3.jpg?w=900&h=)

> _1 = lower risk, 5 = higher risk. This score is more tangible when compared to another strategy score, it doesn’t really mean much by itself but it gives us a quantitative ground to measure against others._

Now that we have a grasp of how this strategy works, let’s analyze its risks using the risk framework dimensions:

## What contracts are used in this operation?

Since we will scavenge for audits, we must first know what contracts we should be looking for. The easiest way to discover the contracts involved is by doing the operation once and analyzing what happened on-chain so we can see exactly which smart contracts are triggered. You could also just inspect your wallet transaction before executing it, but I’ll perform all for this example to see them happen in practice:

-   Supply 10 DAI:

![](./image4.jpg?w=900&h=)

-   Borrow DAI at max limit:

![](./image5.jpg?w=900&h=)

-   Repay DAI borrow (triggers claiming COMP rewards):

![](./image6.jpg?w=900&h=)

-   Withdraw supplied DAI (exit position and/or collect supply yield + claim COMP rewards):

![](./iimage7.jpg?w=900&h=)

-   Only claim COMP rewards (claim COMP rewards):

![](./image8.jpg?w=900&h=)

By doing this 5 actions, we interacted with at least two contracts:

-   cDAI Token contract:  [0x5d3a536e4d6dbd6114cc1ead35777bab948e3643](https://etherscan.io/token/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643)
-   Comptroller contract:  [0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b](https://etherscan.io/address/0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b)

So I headed to  [Compound Github repo](https://github.com/compound-finance/compound-protocol)  and searched for the contracts I interacted with. I found some that seem to be the version deployed in a branch for compound version 2.2:

-   CToken:  [https://github.com/compound-finance/compound-protocol/blob/compound/2.2-prerelease/contracts/CToken.sol](https://github.com/compound-finance/compound-protocol/blob/compound/2.2-prerelease/contracts/CToken.sol)
-   Comptroller:  [https://github.com/compound-finance/compound-protocol/blob/compound/2.2-prerelease/contracts/Comptroller.sol](https://github.com/compound-finance/compound-protocol/blob/compound/2.2-prerelease/contracts/Comptroller.sol)

![](./image9.jpg?w=900&h=)

**Complexity Score: 5**

![](./image10.jpg?w=900&h=)

For complexity, I would assess how many steps we have to take to enter or exit (unwind) this strategy and, for each step, how cost-effective and available it is:

-   **Cost-effective**: What are the fees to execute one step
-   **Availability:**  Can you execute this step at any give time? What are the constraints?

Another interesting point is the  **Health Check**: At Yearn strategies are made to be as automated as possible via  [Keep3r Network](https://keep3r.network/)  and there is tooling to measure how healthy the current state of the strategy is. Since we are making a manual investment, our health check would be something like setting up  [Tenderly](https://tenderly.co/)  alerts so you can manually unwind when you notice a specific on-chain event.

For this strategy, let’s say we loop 5 times, doing it manually without Yearn’s optimization:

-   Supply DAI (**6 times to enter**, initial supply + 5 loops)
-   Borrow DAI at max limit (**5 times to enter**)
-   Withdraw supplied DAI (exit position + claim supply rewards + claim COMP rewards)  **(6 times when we want to exit)**
-   Repay DAI borrow (also claim COMP rewards)  **(6 times when we want to exit)**
-   Claim COMP rewards (claim COMP rewards)  **(periodically for autocompounding)**
-   Sell COMP in the market for DAI to resupply  **(periodically for autocompounding)**

Entering the strategy like this would take about 10 transactions, and exiting would take 10. This operation is cumbersome to do manually and might be very expensive on Ethereum, especially if the capital used is small, which is why Yearn does the flashmint + flashlend optimization. Comparing this to a simple “buy and hold ETH” strategy, for example, makes it clear that it requires many more steps and states to monitor.

![](./image11.jpg?w=900&h=)

**Protocol Safety Score: 1**

![](./image12.jpg?w=900&h=)

Compound code readme said to read this page for security concerns:

-   [https://docs.compound.finance/v2/security/](https://docs.compound.finance/v2/security/)

The Compound protocol has been reviewed & audited by  [Trail of Bits](https://www.trailofbits.com/)  and  [OpenZeppelin](https://www.openzeppelin.com/)  and it is one of the most reputable protocols in DeFi for lending, existing since Sep 2018, so a score 1 makes sense in this context.

![](./image13.jpg?w=900&h=)

It’s harder to dive into other scores as a retail investor but I think there are things to learn from and consider for every investment strategy you execute:

-   How much does the money invested matter to you compared to your entire available capital? How will this affect you if the strategy explodes and you lose part of the money?
-   How long have other people used this strategy, and how well has it performed historically?
-   How much knowledge do you  _really_  have about all the nuances in every entry and exit step?

All of these should be taken into consideration when assessing the risk of entering a strategy, for example:

-   If the strategy is super risky and unknown, but you are allocating an amount of capital you are willing to see vanish, it might be worth considering.
-   If the strategy has low risk and is very well known, but you are allocating an amount of capital that matters to you if lost, you will be super careful about the risks and use tools to manage it like a “stop-loss” (automatically sells an asset when a price is met).

# Yearn and Risk

The  [yearn.watch/risk](https://yearn.watch/risk)  page is a very nice way to see all available strategies and their risks. There is also an extra dimension of likelihood, so the final assessment takes into account both risk score and the chance that those risks are exploited:

![](./image14.jpg?w=900&h=)

_horizontal axis is likelihood, vertical axis is risk score_

I hope this case study has elucidated the whys and hows Yearn views risk. The modern wild west is out there, and you can go as far as you are well-equipped and informed! Have fun and travel safely!

![](./image15.jpg?w=900&h=)
