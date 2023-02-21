---
title: "Yearn Finance explained: What are Vaults and Strategies?"
image:
  src: ./image3.jpg
  width: 1024
  height: 597
date: '2022-01-18'
author: Marco_Worms
translator:
---

![](./image1.jpg?w=900&h=478)\
*Simple Ethereum Yearn Vault Example*

[Yearn Finance](http://yearn.finance/) is a suite of products in Decentralized Finance (DeFi) that provides yield generation, lending aggregation, and more on the blockchain. The protocol is maintained by various independent developers and is governed by $YFI holders.

The current user-facing core product of Yearn is **yVault**, which provides automated yield generation to many different crypto assets, each driven by one or more **Strategies**. The yVault design is open-ended, which means other protocols can build and innovate on top of Yearn, [like the Abracadabra + Yearn case](https://twitter.com/MarcoWorms/status/1483223651684081670).

# Yearn Vaults (yVaults)

The short way to name a Yearn Vault is **yVault**. In Yearn’s current version (v2) these are the characteristics of a yVault:

- **The token you deposit in a yVault is the token you’ll receive yield**, always automatically compounded into the yVault
- **A yVault may have many strategies active at the same time.** A yVault may change its strategies capital allocation when it deems necessary
- Unlike many other yield aggregators **there are no deposit/withdrawal fees** charged to the user
- **yVaults implements the ERC20 standard**, this means that they can be easily moved between wallets and markets since they can be used by any app that handles erc20 tokens (like decentralized exchanges)

## Strategies and Strategists

**Strategists** are people that build one or more underlying **Strategies** for yVaults

[Anyone can build a Strategy](https://docs.yearn.finance/developers/v2/getting-started), but in order to get it added to a yVault, the strategist needs to pass the strategy through [the strategy vetting process](https://docs.yearn.finance/developers/v2/getting-started#overview-of-our-vetting-process) which includes concept vetting, code review, security review, and mainnet testing.

![](./image2.jpg?w=4000&h=588)\
*Strategy Vetting Process*

For their efforts, strategists are rewarded with a portion of the strategy’s performance fee.

- Up to 10% of the generated yield fees by a specific strategy (performance fee) goes to the strategist
- 10% of the generated yield fees by all strategies (performance fee) goes to the Yearn DAO treasury.
- Over the year 2% of the vault’s total assets are taken as fees which go to Yearn to pay for expenses like gas, developer grants, and other services.

Now that we know what yVaults and Strategies are, let’s dig a bit deeper into how their inner workings

# Diving Deeper into vaults and Strategies

### Breaking down one strategy

![](./image3.jpg?w=1024&h=597)\
*Thanks Finematics for this image!*

The above image is an overview of the Ethereum vault strategy on a version 1 yVault. yVaults are now in version 2 and can handle multiple strategies at the same time, but this example will focus on a single strategy. There is an [entire Finematics post and video](https://finematics.com/yearn-vaults-eth-vault-explained/) on how this works in case you want to dive deeper!

In this example, we can see how a strategy may use other vaults! In the Ethereum v1 yVault strategy:

- When a user deposits ETH the ETH is then lent at MakerDAO as collateral
- The collateral is used to borrow DAI
- The borrowed DAI is deposited into the DAI yVault

So then we use ETH to borrow DAI and generate yield using the DAI yVault strategy.

### How/when does Yearn move the funds inside the vault and charge fees?

One of the key functions of a strategy is called “harvest”. When called, it triggers a rebalancing process where profit is realized and reinvested back into the strategy.

### How does Yearn guarantee a strategy always generate tokens instead of losing them?

Strategists use a number of tools to monitor on-chain data to ensure strategy health. One of those tools is [Yearn Watch](https://yearn.watch/) which presents a nice UI with many of key metrics live on the blockchain.

Just as importantly as monitoring strategies after they go to production is the due diligence done before they are sent to production with real money. The Yearn strategy team also has a “Strategy Scoring System” which evaluates the risk level for the underlying strategies used, we hope to expose this better to our users in our documentation and apps in the future!

### Strategies have constraints learned by experience with past vaults

- Vault funds should go “up only” and not down
- Avoid Impermanent Loss (e.g. don’t provide YFI/ETH liquidity in a liquidity pool)
- Users should be able to withdraw at any time (so the strategy can’t timelock all vault funds, only a small fraction)
- Use only protocols with proven track record and well understood, immutable contracts

### Keep3rs and yVaults

Yearn and [Keep3r](https://docs.keep3r.network/) have a really strong synergy: Keep3r is used by yVaults in order to automate common tasks for vaults!

For example, Keepers could benefit from calling the harvest function whenever conditions make sense for the yVault, like:

- A strategy has earned X amount of profit
- It has been Y amount of time since last harvest
- There is no loss that will happen if harvest is called

And there are many cases like this, another example would be a Keeper calling for a rebalancing of the vault assets allocation in order to avoid liquidation in some part of the strategy

![](./image4.jpg?w=562&h=651)

### Building Strategies

* **yVaults** are programmed in [Vyper](https://vyper.readthedocs.io/en/stable/)
* **Strategies** are programmed in [Solidity](https://docs.soliditylang.org/en/v0.8.11/)

> You don’t need to be an advanced developer or financial analyst to become a strategist!

While the maintenance of yVaults is a more complex development matter, Strategies were designed for anyone to be able to write one, the requirement for a good strategy is:

- Knowledge about the blockchain ecosystem you’ll deploy in, which can be acquired by doing in-depth research of tokenomics and documentation for all tokens used in the strategy itself.
- Solidity programming knowledge similar to [completing Level 4 on CryptoZombies](https://cryptozombies.io/)
- Know how to get around [git](https://git-scm.com/), [eth-brownie](https://eth-brownie.readthedocs.io/en/stable/), and [ganache](https://trufflesuite.com/ganache/).
- After understanding the basics of the above tools you are ready to [copy our strategy template](https://github.com/yearn/brownie-strategy-mix)! The functions you should start changing in this template in order to build with your own first strategy are prepareReturn, adjustPosition, and liquidatePositon.

One last thing: after a strategy is endorsed by Yearn and put in production you should help monitor it!

### Learn more

If you want more content about Vaults and Strategies check out these resources! They all helped me understand the concepts explained in this article, also Yearn contributooooors are the kindest people and always help me find the best resource to get quality information on each subject.

- [yVaults descriptions](https://vaults.yearn.finance/)
- [yVault Docs](https://docs.yearn.finance/getting-started/products/yvaults/overview)
- [Become a mighty strategist](https://www.youtube.com/watch?v=NVR3teJw0Y0)
- [External video/article from Finematics about yVaults](https://finematics.com/yearn-vaults-eth-vault-explained/)
- [Additional Resources from Yearn](https://docs.yearn.finance/developers/v2/additional-resources)

### Take the Blue Pill!

If you loved the Vaults and Strategies abstraction:

- Stay updated with our latest news at the Yearn Finance Twitter
- Read our [Blue Pill Book](https://thebluepill.eth.link/) outlining Yearn’s vision and history
- And see about [Joining the Yearn team](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)!

*Producer: [Worms](https://twitter.com/MarcoWorms), Reviewers: [Wavey](https://twitter.com/wavey0x)*

*Thanks Farrah and Weaver for helping me onboard Yearn and connecting me with awesome people and resources that allowed me to write this first article here!*