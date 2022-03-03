---
title: "Yearn Finance Partners with Tenderly to Supercharge Development, Debugging & Incident Analysis"
image:
  src: ./cover.png
  width: 1280
  height: 800
date: '2022-03-02'
author: Weaver
translator: 
---

The Yearn-Tenderly partnership has proven to be a mutually beneficial one.

Tenderly has given Yearn access to best-in-class developer tools, deeper insights into on-chain activity and support by a rockstar team of developers. While Yearn has supplied key use cases and requirements from a major DeFi protocol, helping the Tenderly product to iterate and adapt to the needs of the industry.

![](cover.png?w=1400&h=670)

## Situation
Yearn Finance prides itself on being one of the most secure and highest TVL protocols in all of DeFi. Yearn also has a massive amount of on-chain infrastructure: over 300 v2 vault and strategy smart contracts on mainnet alone (not to mention v1 vaults, keep3r infrastructure, helper contracts, sidechain deployments, etc.).

Yearn is also a permissionless *money lego*. Meaning it uses many different protocols across the DeFi landscape to help generate yield, and in turn, many different protocols use Yearn to generate yield for their users and treasuries. While being so deeply integrated enables massive opportunity, it also comes at a cost of stacking risk: as the number of integrations across protocols grow, the attack surface grows as well.

## Challenge
With such a large team of dev contributors and vast on-chain infrastructure, it becomes important to find and utilize best-in-class developer tooling. Some of the challenges Yearn is faced with running its operations at scale are:

#### Monitoring & Alerting
Monitoring of on-chain data is critical for learning about events potentially impacting Yearn's security, the security of an integration, or simply for tracking patterns in user behavior.

For example: What if one of the yield sources Yearn utilizes implements a new governance proposal to eliminate farming rewards? Or maybe a farm updates signers its multisig, creating a security concern and we want to know about it.

Spending developer time and resources building and maintaining off-chain infrastructure rather than core protocol work isn't a great investment for Yearn.

#### Debugging
Solidity smart contract development environments are still immature compared to traditional programming environments like Java, Javascript, etc. Writing secure code for a protocol that has $6 Billion in assets under management is a feat. To be successful, Yearn developers and security teams need tools that can debug code and transactions both in local environments and live on mainnet.

#### Incident Analysis
When a security event happens on chain that impacts user funds, whether against Yearn or another protocol, we need the proper tooling to quickly understand what has happened and how to respond. Beyond simple alerting, we must be able to dive deep into the trace of a particular transaction or set of transactions and share our findings with the team.

## Solution
Once Yearn developers discovered Tenderly is the most reliable and helpful analysis tool available during war rooms, Yearn decided to enter into a more formal relationship with Tenderly. 

The Yearn team brought to the table an expertise in the DeFi landscape and the use cases inherent in any highly active DeFi protocol, while the Tenderly team shared some of the brightest minds in Ethereum who have some of the highest-performance and reliable node infrastructure in the industry.

For the past few months, Yearn developers have become heavy users of Tenderly products, providing feedback and influence over the product roadmap. In that time, Tenderly has shipped some incredibly useful tooling and capability that helped address each of the challenges listed above.

#### Monitoring and alerting
Tenderly has built-in customizable alerts that allow even novice users to create alerts on virtually any on-chain event. Internally, Yearn uses this extensively to keep an eye on critical events and on-chain values. For example, our multisig Telegram groups each get alerted with a hyperlink when a new multisig transaction is mined.

Web3 actions is another feature from Tenderly allowing users to trigger internal scripts in reaction to on-chain events (e.g. send a transaction to disable keep3r activity if a bug in a strategy causes repeated harvesting).

#### Debugging
Using the Tenderly debugger has been a huge leap forward for Yearn developers. Gone are the days of using Ganache to fork mainnet in local development environments. While Ganache can be slow, unreliable, and lead to RPC crashes; Tenderly forks are especially robust, and have saved many developer hours by helping find the exact line that caused a transaction to revert. Further, individual forks and transaction traces can be shared via URL so that you know you're looking at the same thing peers and code reviewers are.

#### Incident Analysis
Tenderly offers the best UI debugger in the industry. It has been invaulable for the Yearn team getting to the bottom of security events and helping to dissect bugs and attacks. War room environments are stressful and noisy, so it's helpful to have shareable URL's which help everyone get on the same page. More efforts are underway regarding incident analysis, but we’ll cover this in a separate post. 

## Tenderly UI preview

*Transaction overview:*
![](image1.png?w=1140&h=609)

*Error context:*
![](image2.png?w=1131&h=432)

*Error simulation*
![](image3.png?w=1280&h=672)

## What's Next
One thing Yearn is most excited about is bringing in new contributors and attracting talent. In collaboration with the Tenderly team, we offer 90-day free access to Tenderly for members of YFI Boarding School (a community for upcoming strategists). We believe this has helped boarding school members get deeper insights into their own strategy code, helping them learn more efficiently, while also showing them the power of Tenderly's product.

Yearn Finance is DeFi made simple. Learn more by checking out our docs, our vision, and how to join us. 

Tenderly provides an end-to-end developer platform for teams and companies looking to build innovative blockchain products. Learn more at tenderly.co.
