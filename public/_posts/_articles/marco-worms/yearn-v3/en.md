---
title:  "Yearn Vaults v3"
image:
  src: ./image1.jpg
  width: 900
  height: 429
date: '2022-05-03'
author: Marco Worms
translator: 
---

![](./image1.jpg?w=900&h=429)

As we look ahead to the exciting changes v3 Vaults are bringing for both developers and degens, I spoke with the Yearn contributor leading the v3 design team. I was surprised to learn about the number of new features! Initially, our conversation started around the [ERC-4626](https://twitter.com/iearnfinance/status/1511444220850184197) standard which standardizes vaults across protocols but it turns out that’s just the tip of the iceberg.

# The purpose of v3 is to improve all core aspects of Yearn Vaults

### Security

Maintain Yearn’s position as best in class for DeFi security practices.

### Development

Reduce friction for creating strategies, and allow a wider range of strategies for a vault.

### Automation

Allow more vault functions to be automated besides harvest, getting one step closer to the dream of the 100% automated vault.

## In order to tackle the v3 scope, the developers are working on the following:

### Increase modularity

Implementing code that is simple in a robust way in the yVault contract, which allows smarter logic to be placed in modules that can be iterated.

Adopting the ERC-4626 standard which allows our vaults to be compatible with any other protocols that follow it.

### Improve Strategy <-> Vault relation

Allow for simpler strategy testing, deploying, and overall including more tools to tackle a wider range of yield possibilities, including locking funds, riskier strategies, and multichain strategies.

### Create new products

Create new products like Junior Tranches which enables riskier strategies and allows users to choose a higher-risk deposit option.

Allow more than 1 vault for each token type

Allow vaults to be controlled by multisigs that can be shared with partner protocols

## Flexibility

v3 will give developers and strategists more flexibility for shipping code to production. It increases the modularization of the contracts and also opens doors for new ways to deposit in vaults.

We’ll also see a better automatization of peripheral contracts: in v2 only the harvest functions are automated and, in v3 we’ll get closer to a 100% automated vault because now more important functions are easier to automate with the [Keep3r Network](https://keep3r.network/).

> **We want to move fast and not break things** — Skeletor

## Strategies on steroids

v2 Vaults had a limit of 20 strategies per vault, in v3 this limit will be increased. Additionally, riskier strategies will now follow a contract model analogous to the [Senior/ Junior Tranches](https://corporatefinanceinstitute.com/resources/knowledge/finance/junior-tranche-debt/).

Riskier strategies will now have a Junior Tranche contract, meaning the user will first deposit tokens into a vault and can then choose to deposit the vault tokens into a junior tranche contract for a higher-risk/higher-reward option. Users can also choose specific strategies to focus on. This is an optional feature that people with a higher risk appetite might want to explore.

Another thing the v3 team is working on is how to decentralize [strategy endorsement](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d). Today many security audit aspects at Yearn are centralized. But being able to decentralize this process would give more room to scale the product.

Further features focus on improving the overall usage of vaults by users, strategists, and developers, such as:

- ySwaps (the service that strategists use to make token swaps) is being optimized for gas efficiency.
- v2 harvests take 6 hours for share-prices to go up, but in v3 the time is dynamic, improving MEV protection.
- The increased modularity around vault’s processes allows us to make tighter partnerships with other protocols and build solutions more specialized to their cases.

## Vaults code
v2 vaults code is written in [Vyper](https://vyper.readthedocs.io/en/stable/), but v3 is built with [Solidity](https://docs.soliditylang.org/en/v0.8.13/).

Vyper is a solid language as proven by the v2 system, but has a smaller developer pool. Our decision to go with solidity was based, among other factors, on accessing the larger developer pool necessary for a critical project like this. We see a bright future for Vyper and will continue exploring it in Yearn for smart contracts, any of the modules around vaults can be done using it.

![](./image2.jpg?w=900&h=253)
*[Defillama blockchain programming language usage statistics](https://defillama.com/languages)*

Statistics on coding languages used across blockchains can be monitored on [Defillama](https://defillama.com/languages), at the moment Vyper makes up around 10% and Solidity 69%. This reflects Solidity’s market dominance, and since we needed more contributors to ship v3 we chose the tech that would allow us to build an experienced team faster.

## The future awaits
I’ve only scratched the surface of what’s to come in v3. Yearn contributors are also working on building a number of other exciting products and functionalities! **[Learn more about opportunities to join Yearn here!](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)**

Made in [yearn.finance](https://yearn.finance/#/portfolio)




