---
layout: post
title: "Yearn Finance Newsletter #52"
categories: [Newsletters]
image:
  src: ./cover.jpeg
  width: 1152
  height: 576
author: Yearn
date: '2022-01-02'
translator:
---
### Week Ending January 2nd, 2022

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/cover.jpeg?w=880&h=440)

Welcome to the 52th edition of the Yearn Finance Newsletter. Our aim with this newsletter is to keep the Yearn and the wider crypto community informed of the latest news, including product launches, governance changes, and ecosystem updates. If you’re interested in learning more about Yearn Finance, follow our official [Twitter](https://twitter.com/iearnfinance) and [Medium](https://medium.com/iearn) accounts.

## Summary

- YIP-65 Enters Voting

- [Proposal] Mean - DCA Buyback Pilot Program

- Reflecting on Yearn

- Yearn Has Received a 1M FTM Grant From the Fantom Foundation

- Vaults at Yearn

- Ecosystem News

## YIP-65 Enters Voting

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image2.jpg?w=980&h=871)

In summary, YIP-65 seeks to evolve the role YFI plays in Yearn over four distinct phases, cementing the vision of the token as the fundamental foundation of governance.

This will be done by directing a portion of YFI that is bought back by the Treasury as a result of [BABY](https://yips.yearn.finance/YIPS/yip-56) as rewards to those YFI token holders who actively participate in Yearn Governance.

Then, the role YFI plays in Yearn Governance will be evolved through four distinct components.

1: xYFI. Distribute YFI that's been bought back with Treasury tokens as rewards in a YFI vault.

2: Vote-locked YFI. Introduce ve-style locking of YFI (veYFI) for up to four years (exact max duration tbd), where a longer locking duration gives a greater share of voting power and share of YFI rewards. An early exit from the lock is possible by paying a penalty that is rewarded to the other locked token holders.

3: Vault Gauges + Voting. Introduce vault gauges where vault depositors stake their vault tokens and earn YFI rewards according to their veYFI weight. YFI are allocated to gauges based on weekly governance votes.

4: "Useful work" features. Expand the duties and responsibilities of veYFI voters, and their locked YFI, in exchange for earning additional protocol rewards. Pending the tbc v3 vault design.

Next, a mandate will be given to Yearn Developers to roll out the above components at their discretion as and when they become feasible.

Finally, the YFI eligible to vote in Yearn Governance will be restricted to only those staked in xYFI (from Phase 1 and onwards) or vote-locked in Yearn (from Phase 2 and onwards).

Read more about the proposed tokenomics upgrades and benefits [here](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994) and vote on the snapshot [here](https://snapshot.org/#/ybaby.eth/proposal/0x8f7417fa5565d9f46e16618503e8808c36d51b2a9e8217a68c632d7c090d69d9).

Special thanks to authors: @0xJiji, @banteg, daryllautk, HAtTip3675, @onlylarping, @vany365, and @Wot_Is_Goin_On for creating this important proposal.

## [Proposal] Mean - DCA Buyback Pilot Program

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image3.jpg?w=690&h=301)

The objective of this pilot program is to provide a better understanding through example that DCAing is a better way to execute buy-backs within the treasury.

The Yearn team, on the basis that a Snapshot vote passes, will allocate $1M worth of ETH (249.376559 ETH @ $4010 per ETH) towards this buyback program and create a 30 days position YFI to ETH within Mean Finance at a rate of 8.31255197 ETH per day

The Mean team hopes to at least have some resounding effects within the community & leadership of the DAO.

Read more about the proposal [here](https://gov.yearn.finance/t/proposal-mean-dca-buyback-pilot-program/12065).

## Reflecting on Yearn

It’s 2022, time to re-analyze your DeFi bets. Here's a short overview of why Yearn is different.

Whilst Yearn is usually labeled as a “yield aggregator” this can lead to the idea that a team works on generating a yield. Even worse it's sometimes considered a simple CRV farmer. This is not a useful way to understand Yearn.

There are currently significant constraints on yield generation such as a small pool of people who can build strategies, high gas fees limiting certain strategies, lack of battled-tested protocols to build strategies and a lack of ways to automate processes.

Rather than wait for these constraints to ease (and they already are with more strategists being on-boarded, other chains and L2s with low fees), Yearn has been quietly building infrastructure to optimize the interaction between protocols, strategists and capital at scale.

Yearn has been building the machine that builds the machine of yield aggregation (to paraphrase Mr. Musk), ready for a world of an ever-increasing number of tokens, complex protocols, chains, strategists, tooling and capital.

With $7bn of DeFi hacks in 2021 the primary focus has been on security. Most DeFi protocols limit financial risks by tweaking parameters (e.g. lending protocols reduce the loan-to-collateral value of riskier assets), and minimize technological risks by focusing on one thing (e.g. lending).

Yearn does DeFi the hard way as it combines multiple protocols and strategies within a single vault. Other protocols boast about the number of audits they've done. Yearn's yAcademy is training the next generation of auditors - helping speed up the approval of new strategies.

After security comes capital efficiency – figuring out how a vault should be split across lending protocols, LPs, leveraged farm opportunities and other strategies to optimize the risk-adjusted returns. And then trying to automate it.

Part of the reason behind YFI's "fair launch" was the realization that producing a high risk-adjusted yield for the trillions of dollars sitting in TradFi would be too much work for one team. The YFI boarding school is now training first-time strategists.

Scalability requires reducing manual processes - buybacks, harvests, changing the strategy weightings, hedging after price movements. It's no coincidence Andre created

Keep3r. There's even a data analysis group working on the optimal time to do buybacks.

Coordination with decentralization – how do you build a system that incentivizes people who’ve never met to make all this happen? Coordinape helps - a tool whose origins go back to a Yearn group that first ran into the problem - is now being used by countless DAOs.

Each new DeFi protocol creates a potential opportunity for a strategist. The new strategy improves the risk-adjusted yield for the vaults which incentivizes more capital, leading to more fees which can be used to build this beast of a platform.

The examples in this thread show how Yearn is attempting to solve the generalized problems in DeFi. The term "DeFi protocol" doesn't seem to do it justice, maybe Yearn could be better described as a fintech DAO.

Thank you to Wot_Is_Goin_On for the amazing thread that can be found [here](https://twitter.com/Wot_Is_Goin_On/status/1477277152336916484).

## Yearn Has Received a 1M FTM Grant From the Fantom Foundation

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image4.jpg?w=1100&h=1092)

Yearn has received a 1M FTM grant from the Fantom Foundation.

We didn't dump, over 90% was donated to the FTM vault. Other vaults got a proportional donation for an immediate 1% increase in value.

This grant is the first of many, we will continue receiving more as we hit TVL goals.

## Vaults At Yearn

You can read a detailed description of the strategies for all of our active yVaults [here](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Ecosystem News

[Check out DeFi Saver’s new Smart Savings dashboard including Yearn](https://twitter.com/DeFiSaver/status/1476614075815809028?s=20)

[See the 2021 Yearn contributor hoodie made by loldefi](https://twitter.com/loldefi/status/1477062572595884032)

[Yearn continues to buyback yvBOOST](https://twitter.com/wavey0x/status/1474946151006842884)

[Read an analysis on $CRV bribes including yvBOOST](https://twitter.com/0xSEM/status/1475284063204388867)
