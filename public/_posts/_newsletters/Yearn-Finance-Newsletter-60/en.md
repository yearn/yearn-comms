---
layout: post
title: "Yearn Finance Newsletter #60"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-04-13'
translator:
---

### Week Ending April 12th, 2022

![](./image1.jpg?w=900&h=453)

Welcome to the 60th edition of the Yearn Finance Newsletter. Our aim with this newsletter is to keep the Yearn and the wider crypto community informed of the latest news, including product launches, governance changes, and ecosystem updates. If you’re interested in learning more about Yearn Finance, follow our official [Twitter](https://twitter.com/iearnfinance) and [Medium](https://medium.com/iearn) accounts.

## Summary

- Yearning for Yearn
- The Great Vault Standardization
- How Web3 Enables an Uncensorable Yearn
- How yVault Strats Are Born
- Tips for New DAO Contributors
- Vaults at Yearn
- Ecosystem News

# Yearning for Yearn

![](./image2.jpg?w=1000&h=563)

A premium report on Yearn from Messari is now available for all. Originally shared with their paying subscribers in November, the piece contains a trove of data and explainers.

Excerpts from the article state, "We all know Yearn. It’s the set-it-and-forget-it yield aggregator running on top of DeFi’s yield-generating protocols like Compound, Aave, Curve, and Convex. Users can passively earn with the click of a button. Over time, the protocol has become synonymous with yield and has garnered an industry reputation as a leading risk-minimized yield source… The flagship protocol used by most users, Vaults account for 67% of Yearn’s TVL. Users deposit into a vault which is defined per asset and the underlying yield strategies are executed to deploy the capital… Yearn is able to offer a single, trusted integration point to other protocols for yield so that time is not wasted and integration risk is not introduced managing and maintaining strategies themselves… Where Yearn grows from here is largely dependent on its V3 UI, multi-chain strategy, and the defensibility of its position”.

Fantom and Arbitrum are live. Where to next?

Access it here at [messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn).

# The Great Vault Standardization

![](./image3.jpg?w=900&h=577)

You’ve heard of ERC-20s, ERC-721s and ERC-1155s. Soon you shall know ERC-4626s. The Tokenized Vault Standard (ERC-4626) is final. And the Great Vault Standardization begins now.

Here’s a short overview on ERC-4626: Yield-bearing tokens are a mess. Yield aggregators, vaults, lending markets and native yield tokens like $xSUSHI are often implemented with slight variations. To build a single app on top of DeFi's yield-bearing tokens, you have to write dozens of complex, error-prone adapters that can handle each unique variation.

ERC-4626 makes that a thing of the past. It’s composability at its finest. Build an app on top of one ERC-4626 vault, and it will work for all other ERC-4626 tokens.

Yearn V3 using ERC-4626 was inevitable. Contributors are already working hard implementing the standard for Yearn’s V3 vaults. So are developers at Alchemix, Balancer, Rari Capital, Fei Protocol, Yield Protocol, OpenZeppelin and more. Perhaps one day, we’ll even see a ERC-4626 tab on Etherscan. In a word, ERC-4626 will be the gold standard for any sort of interest-bearing token… from Yearn Vaults to AAVE deposits and Balancer linear pools.

Ready to join the Great Vault Standardization? Check out Joey Santoro’s thread [here](https://twitter.com/joey__santoro/status/1504603906726240258) for more details and a baseline implementation by transmissions11.

The future is composable.

Want more code? Check out [this demo ERC-4626 Vyper 0.3.2 implementation](https://github.com/fubuloubu/ERC4626) by Yearn contributors fubuloubu and banteg along with transmissions11 and Joey Santoro.

Read a follow-up CoinDesk article on ERC-4626 [here](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/).

# How Web3 Enables an Uncensorable Yearn

![](./image4.jpg?w=900&h=451)

The grand vision of Web3 is an internet (and financial system) that’s never down, never censored, & accessible to all.

Blockchains and self-hosting help make that possible. Curious how you can use Yearn, Uniswap and other Web3 apps without touching their websites? In the Web2 paradigm, if a website goes down, end users are out of luck. With Web3, a service is always available to anyone with an internet connection (assuming the underlying blockchain is online).

Since Web3 is open-source, you can use Yearn, Uniswap and other Web3 services by downloading their files and self-hosting their websites directly on your computer. No third-party servers needed!

To self-host, all you need is a computer (Windows, Mac or Linux) and some special software. Once you’re set up, you can use Yearn and other services directly in your browser without visiting their URLs (but instead typing in something like "localhost:3000").

Click [here](https://medium.com/iearn/self-hosting-web3-services-299306b706ee) to slay the Web2 middleman and realize the grand vision of Web3 with a simple article from MarcoWorms.

# How yVault Strats Are Born

![](./image5.jpg?w=900&h=650)

Strategies are the backbone of Yearn, with every single vault containing multiple of these moving parts. To allow our users to earn the best risk-adjusted yield in DeFi, we must keep up with the constantly changing space and write new strategies. Above is a guide on how newly written yVault strategies are endorsed to go into production.

Check out [this piece](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) from Yearn contributor MarcoWorms for more information on yVault strategy endorsement.

# Tips for New DAO Contributors

![](./image6.jpg?w=900&h=473)

Yearn’s culture is global, friendly, and composed of several builders, collaborators, and self-starters. While there may seem to be a primarily monetary reason to join most DAOs, joining the Yearn DAO is a fulfilling experience that allows one a chance to work in a new and constantly changing space.

In DAOs like Yearn, you can become an owner by taking responsibility for outcomes and being empowered to make the decisions that will lead to those outcomes.

Following are some comments from various Yearn contributors from all walks of life on advice for new DAO contributors: 

Tracheopteryx, one of our core governance contributors, says, “Do the work that you love, that you’re best at, that you can get paid for, while also keeping in mind the needs of the DAO”. Additionally, Storming0x, who focuses on security and protocol development, says, “Get involved, don’t feel bad about being overwhelmed or asking questions. Plenty of folks are here to help newcomers, and we have a much better onboarding process these days”. Lastly, an anon contributor says, “1. Understand our culture. Read everything you can get ahold of. 2. Build trust. 3. Absorb your cost of onboarding. 4. Write onboarding docs. 5. Meet everyone. 6. Figure out what the hell is going on. 7. Have an opinion on that direction. 8. Delegate”.

Check out the full article [here](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d) from Kish to read further tips from Yearn contributors and approach DAOs with more in-depth knowledge.

We invite you to engage, give feedback, and participate in the Yearn community by joining us on [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), or [Github](http://github.com/yearn). Come build with us.

# Vaults at Yearn 

You can read a detailed description of the strategies for all of our active yVaults [here](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Ecosystem News

[MAI vaults to leverage Yearn strategies at 0% interest are now possible on Fantom](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[A new yearn.watch site is under development](https://watch.major.tax/)

[Read storming0x’s short thoughts on Yearn in a YFI Boarding School interview](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Tips on security from a Yearn contributor](https://twitter.com/storming0x/status/1509769575021178886)

[Check out the new coordinape update](https://twitter.com/coordinape/status/1512247042806005763)
