---
title:  "Yearn governance explained: Proposals, $YFI token, and execution"
image:
  src: ./image1.jpg
  width: 900
  height: 482
date: '2022-04-19'
author: Marco_Worms
translator: 
---

![](./image1.png?w=900&h=482)

Anyone can discuss or propose ideas in the Yearn's [Discord](https://discord.com/invite/6PNv2nF), [Twitter](https://twitter.com/iearnfinance), [Reddit](https://www.reddit.com/r/yearn_finance), [Pool of Ideas](https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b), [Telegram](https://t.me/yearnfinance/), and [Governance Forum](https://gov.yearn.finance/). As proposals mature it becomes a structured vote in the Governance Forum where the [YFI token](https://www.coingecko.com/en/coins/yearn-finance) is used as voting power.

* Token holders can vote at [Yearn's Snapshots Page](https://yearn.snapshot.page/#/), there is no gas consumption in the voting transaction!
* There is also a [retired governance repository](https://docs.yearn.finance/contributing/governance/proposal-repository) which is now unused but can be explored to learn about yfi history!

The most common type of proposals in the forum are Yearn Improvement Proposals (YIPs) but there are other types covered in the [current Yearn governance implementation (YIP-61)](https://gov.yearn.finance/t/yip-61-governance-2-0/10460):

- **Yearn Improvement Proposal (YIP):** A proposal to execute any power delegated to YFI holders or outside the scope of enumerated powers	
- **Yearn Delegation Proposal (YDP):** A proposal to change how a yTeam has power over a scope
- **Yearn Signaling Proposal (YSP):** A non-binding proposal to signal community feelings or intent on any issue

## Governance Scope

[YIP-61](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) determines how Yearn governance currently works: [yTeams](https://gov.yearn.finance/t/yip-61-governance-2-0/10460#yteams-9) have delegated authority from YFI holders to utilize limited powers autonomously. Holding YFI allows one to have control over how the power is distributed among teams, YFI gives exclusive voting power to pass or deny changes that shift power dynamics within the protocol such as:

* Change Multisig or yTeams Signers
* Ratify yTeams
* Spend Treasury Funds
* Set Protocol Fees
* Change YFI contract

# Governance Forum Process 

Anyone is able to create a new proposal at [Yearn Governance Forums](https://gov.yearn.finance/):

![](./image2.png?w=900&h=486)

## Proposal Template

As established by [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959) here is a standard way to write proposals:

**Summary**:
The outcome of the proposed change, written in a non-technical and accessible manner

- **Status:** *(This field is not required but it helps everyone)*

    - **Discussion:** This proposal is currently in the discussion phase. As per our voting rules outlined in YIP-55, it will be in discussion for at least 3 days with a non-binding forum poll to gauge sentiment before it can be assigned a YIP number and move to Snapshot for a binding vote
    - **Voting:** This proposal is currently in the voting phase. Cast your vote on Snapshot. You can learn about our voting rules in YIP-55
    - **Passed:** This proposal passed on April 25, 2021 at 7:00 UTC with 99.97% voting for

**Abstract:**
A short (~200 words) description of the proposed change. Should clearly describe what happens if the proposal passes.

**Motivation:**
The current problem that made you write the change proposal

**Specification:**
A long description of how this proposal solves the problem, should describe how to implement the YIP

**Poll:**
A voting dynamic that is built in the governance forum to gauge the community sentiment on the proposal, should be greater than 50%

## Discussion

There should be enough time (at least 3 days) of discussion so the proposal can be tackled from many angles by community members. Use discourse's built-in Poll tool to gauge the community sentiment about the proposal before raising a formal vote, the poll should have at least 50% passing votes.

![](./image3.png?w=900&h=351)

Discussions ideally should take as long as it takes to clarify what was proposed to the community. Talking to different stakeholders **before** proposing something is a good way to measure sentiment and helps you introduce complex ideas with better support right from the start. An example of proposal with excellent discussion is [YIP-57](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319) which minted 6,666 YFI tokens beyond the 30,000 initial supply and had to align different types of stakeholders from DAO members to big YFI holders.

## Voting

After the discussion step passed the proposal becomes a YIP (or maybe a YDP depending on its content) and will be put through the voting phase. To submit a vote at [Yearn's Snapshots Page](https://yearn.snapshot.page/#/) you need to hold at least 1 $YFI or ask someone to do it for you, if the proposal is solid this won't be a barrier. Communicate with a forum mod to get an official number for the new YIP! 

Voting power corresponds 1:1 to how much $YFI a voter has. So a wallet with 10 $YFI has 10x the voting power as someone with 1 $YFI.

Voting takes at least 5 days and needs more than 50% passing votes, there is no quorum to be met as outlined by [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959): "quorum requirement might be difficult to quantify and could lead to time-consuming rallying of apathetic voters"

![](./image4.png?w=900&h=543)

Holding or staking YFI in the following places allows you to vote:
- Your wallet
- YFI yVault V2 (equivalent to holding the yvYFI token)
- Balancer YFI/WETH LP token
- Uniswap YFI/WETH LP token
- Sushiswap YFI/WETH LP token staked in MasterChef
- MakerDAO YFI collateral
- Unit Protocol YFI collateral
- Bancor

## Conclude & Execute

If the voting has passed with over 50% votes Yearn DAO must execute it. The way [Yearn DAO](https://yearnfinance.notion.site/yearnfinance/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249) works is not like a top-down command & control company, so it won't enforce or obligate a team or any individual to execute the proposal. The DAO will ensure that the correct incentives are set for the proposal to be executed (for example allocate treasure to pay for work done by contributors)

Recently 2 YIPs were passed and are being executed by Yearn as I write this:

- [YIP-65: Evolving YFI Tokenomics](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Streamlining contributor compensation](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)

# Fair launch of YFI

![](./image5.png?w=900&h=228)

 [Andre Cronje](https://medium.com/@andrecronje) was the first builder of Yearn and what he sparked became a DAO with now over 200 active participants. This is only possible to exist as is today because Cronje gave away every inch of power he had over the protocol, and the way he did it was through YFI. Whoever used Yearn services and ecosystem in the early days received this power, and you can find information on how this process happened in Cronje's posts:

1) [YFI](https://medium.com/iearn/yfi-df84573db81) (Earning YFI is simple, provide liquidity to one of the platforms)
1) [Earning YFI curve.fi/y](https://medium.com/iearn/earning-yfi-y-curve-fi-53b5fd347f0f) (Earn YFI by providing liquidity to curve)
1) [YFI rewards pool](https://medium.com/iearn/yfi-rewards-pool-810ef9256ec6) (Reward pool for burning YFI)
1) [Pool #3 Meta Yield Governance](https://medium.com/iearn/pool-3-meta-yield-governance-58f68e6d2f19) (Pool that rewarded many things including participating in governance)

# Additional Resources

If you are looking for inspiration to make a proposal you can take a look at the following YIPs which had extensive discussion and changed power dynamics within the protocol:

- [YIP 32: Remove YFI burning](https://gov.yearn.finance/t/yip-32-remove-yfi-burning/1907)
- [YIP 36: System Rewards as Operational Capital](https://gov.yearn.finance/t/yip-36-system-rewards-as-operational-capital/2311)
- [YIP 41: Temporarily Empower Multisig](https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630/2)
- [YIP-51: Set Vault v2 fee structure](https://gov.yearn.finance/t/yip-51-set-vault-v2-fee-structure/7752)
- [YIP-52: Make Strategist Skin in Game Partner for Make Benefit of Glorious Brain of Yearn](https://gov.yearn.finance/t/yip-52-make-strategist-skin-in-game-partner-for-make-benefit-of-glorious-brain-of-yearn/7856)
- [YIP-54: Formalize Operations Funding](https://gov.yearn.finance/t/yip-54-formalize-operations-funding/7956)
- [YIP-55: Formalize the YIP Process](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)
- [YIP-56: Buyback and Build](https://gov.yearn.finance/t/yip-56-buyback-and-build/8929)
- [YIP-57: Funding Yearn’s Future](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319)
- [YIP-61: Governance 2.0](https://gov.yearn.finance/t/yip-61-governance-2-0/10460)
- [YIP-65: Evolving YFI Tokenomics](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Streamlining contributor compensation](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)
