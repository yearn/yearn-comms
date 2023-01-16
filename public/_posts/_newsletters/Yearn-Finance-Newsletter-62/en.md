---
layout: post
title: "Yearn Finance Newsletter #62"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 1000
  height: 500
author: Yearn
date: '2022-05-23'
translator: 
---

![](./cover.jpg?w=1000&h=500)

Welcome to the 62nd edition of the Yearn Finance Newsletter. Our aim with this newsletter is to keep the Yearn and the wider crypto community informed of the latest news, including product launches, governance changes, and ecosystem updates. If you’re interested in learning more about Yearn Finance, follow our official [Twitter](https://twitter.com/iearnfinance) and [Medium](https://medium.com/iearn) accounts.

**Summary**

- V3 Vaults Are Coming
- New Yearn Watch Site
- Yearn Allowlist
- People of Yearn: MarcoWorms
- Yearn Wants to Buy Your YFI
- Vaults at Yearn
- Ecosystem News

## V3 Vaults Are Coming

![](./image2.jpg?w=900&h=429)

Yearn v3 Vaults are a complete overhaul of our systems, and here are six of the top features we are excited to roll out.

Junior tranches: Yearn has always been committed to "up only" vaults - vaults that do everything possible to avoid hacks or losses. The tradeoff for higher security/safety is often lower yields. v3 will introduce "junior tranches", to enable higher-risk, higher-reward vaults.

Solidity: v2 Vaults are written in Vyper, and now v3 uses Solidity. This means Yearn can tap a much larger developer base (per DefiLlama ~69% of DeFi code is written in Solidity vs ~10% for Vyper). Best of all, Vyper fans can still use it with v3 modules.

Standardized vault tokens with ERC-4626: Yearn contributors helped author a new token standard for Ethereum: ERC-4626. v3’s yield-bearing tokens will be fully composable with every other project building on ERC-4626.

Gas optimized: Strategists use ySwaps to make token swaps in vaults. Numerous code improvements will make this and other processes radically more gas efficient, which should boost APYs on all vaults.

Flexible strategies: More strategies with better modularity will make Yearn vaults an order of magnitude more flexible. They're no longer capped at 20 strategies per vault and partners can even share control over vault management. We can't wait to see how other protocols use Yearn v3.

Automation: By leveraging Keep3r Network, Yearn v3 will automate nearly every aspect of vault management. v3 will put 100% automation of vaults within sight. And it will allow for better MEV protection with real-time harvests.

The v3 upgrade is the biggest collection of updates in Yearn history.

With junior tranches, modularization, composable yield-bearing tokens and a more accessible programming language, v3 will pour rocket fuel on Yearn's ability to innovate.

In the words of Skeletor Spaceman, "We want to move fast and not break things". v3 is how Yearn gets there. Mad shipping incoming.

Read more about the v3 Vaults [here](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0).

We invite you to engage, give feedback, and participate in the Yearn community by joining us on [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), or [Github](http://github.com/yearn). Come build with us.

## New Yearn Watch Site

![](./image3.jpg?w=900&h=705)

The new [yearn.watch](https://yearn.watch/) site has gone live, and it provides many upgrades to our last iteration.

Some of these upgrades include blazing fast loading times, UI/UX new skins and improvements galore, and alerts.

A significant amount of detail has additionally been added to the new site, with new visualizations for risks and more. Plenty more stuff is coming down the pipeline, as the site has been taken over by a new team of contributors.

## Yearn Allowlist

![](./image4.jpg?w=900&h=429)

To make the Yearn website even more secure a new feature has recently been introduced, termed the Allowlist. In essence, it allows all transactions that are made through the website/SDK to be validated against an on-chain contract that keeps a record of all valid calldata that is possible for the website to produce.

This prevents the website from being susceptible to various man-in-the-middle attacks where data is provided to the website, whether it be through Zapper/0x’s API, or Yearn’s own. For example, if Yearn’s API returns a list of vaults with malicious addresses, with the intention that users approve one of them when trying to deposit, the Allowlist would block the transaction from being made.

We invite other protocols to also take advantage of their own Allowlists to enhance their security. Instructions for creating your own Allowlist are detailed further on.

Click [here](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4) to learn more about the Yearn allowlist.

## People of Yearn: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms is a Yearn contributor who does marketing and writes content that you may often see in these newsletters and on Twitter.

Before joining Yearn, Marco was dabbling in crypto and was tired of fintech and the VC model. He found out about Yearn after learning about DeFi and reading the Blue Pill manifesto.

At Yearn, Marco usually goes about his day by collaborating on or writing new articles. If he’s not writing articles, he’s in the Yearn social groups helping out people whenever they have questions.

As always, Yearn promotes an easygoing culture that allows anyone of all backgrounds to flourish, and Marco recognizes that we truly do encourage contributors to do what they believe in.

Check out [the full interview](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e) from Yearn contributor Defiglenn.

## Yearn Wants to Buy Your YFI

![](./image6.jpg?w=900&h=450)

We heard some people are selling.

Great, because we’re buying.

As YFI is crucial to building Yearn (due to its role in our compensation and retention strategies), we are continually buying back YFI from the open market. Starting now, we will offer this service in place of fully manual market buys.

Our buyback piggybank will be regularly topped-up with DAI and is always willing to buy back your YFI at the current price, served by a Chainlink oracle. The stats are now real time for full transparency of buyback activity.

[https://yearn.clinic](https://yearn.clinic/) or [https://buyback.yearn.finance/](https://buyback.yearn.finance/) are the links to sell YFI to us.

## Vaults At Yearn

You can read a detailed description of the strategies for all of our active yVaults [here](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Ecosystem News

[YFI has been privacy enabled by Incognito Chain](https://twitter.com/IncognitoChain/status/1527045614273544200)

[Sturdy Finance is offering the highest APYs on USDC across all chains, powered by Yearn](https://twitter.com/pgpsam/status/1526301386173992961)

[Bancor v3 strategies are coming soon to Yearn](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap announces Iron Fleet in collaboration with Yearn](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Check out a Yearn workshop from Skeleter Spaceman](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Yearn pools are now individually tracked on DefiLlama](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[A new Lido stETH vault has gone live for the new concentrated Curve pool](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Check out the recording of a Coordinape discussion](https://twitter.com/YFI_interns/status/1525159821321830403)
