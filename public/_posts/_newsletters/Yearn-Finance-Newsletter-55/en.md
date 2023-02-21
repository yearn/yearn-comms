---
layout: post
title: "Yearn Finance Newsletter #55"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1152
  height: 576
author: Yearn
date: '2022-01-26'
translator:
---

### Week Ending January 23rd, 2022

![](./image1.jpg?w=1100&h=554)

Welcome to the 55th edition of the Yearn Finance Newsletter. Our aim with this newsletter is to keep the Yearn and the wider crypto community informed of the latest news, including product launches, governance changes, and ecosystem updates. If you’re interested in learning more about Yearn Finance, follow our official [Twitter](https://twitter.com/iearnfinance) and [Medium](https://medium.com/iearn) accounts.

## Summary

- State of the Fantom Vaults
- Fantom Ecosystem Spotlight - Yearn
- Yearn Web Updates
- Yearn Finance Explained
- Vaults at Yearn
- Ecosystem News

# State of the Fantom Vaults

![](./image2.jpg?w=674&h=680)

With the rise of Andre Cronje & Daniele Sesta's new project Solidly ve(3,3), vampire attacks have come to Fantom in order to qualify for the Solidly airdrop to the Top 20 projects by TVL on Fantom.

To take advantage of this, you can tuck your holdings into a comfy [yearn.finance](https://yearn.finance/#/home) vault. Yearn fetches the best yield across 0xDAO, veDAO, Scream, Curve, Beets, Tarot, and beyond. Our Fantom Vaults have strategies for all of them, automatically rotate to the most profitable one and realize profits every 30 minutes so you won't be left holding the bag. We'll be by your side long after the vampwars become another page in a history manga.

What's your move? Start depositing today at [yearn.finance/vaults](https://yearn.finance/vaults).

# Fantom Ecosystem Spotlight - Yearn

![](./image3.jpg?w=1456&h=819)

Yearn contributor Tracheopteryx gives a brief overview of Yearn and our mission, with our focus being on everyday users, partners, and builders.

The core products of Yearn are the Vaults, the Iron Bank, Labs, and the YFI/WOOFY tokens. YFI’s origins are further explored, and Tracheopteryx explains why Fantom is the first sidechain that Yearn has chosen to build on.

The interview ends off by mentioning upcoming upgrades to the YFI token, such as buybacks being given to holders, xYFI, veYFI, and vault gauges.

Check out the new full article [here](https://fantom.foundation/blog/fantom-ecosystem-spotlight-yearn/?__cf_chl_rt_tk=rdrT2KHoFbjTe1yyUOmIDA92AeTmrMPKtQW5yT18mwk-1643234302-0-gaNycGzNCH0).

# Yearn Web Updates

![](./image4.jpg?w=900&h=734)

This week's Yearn web update includes an APY hover tooltips added to UI and a Dust fix for vault withdrawals

Coming soon are security improvements, with a detailed write-up, improved multi-chain UI/UX, and support for a new chain.

Check out the full new update [here](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7?r=2y79e&utm_campaign=post&utm_medium=web).

# Yearn Finance Explained

![](./image5.jpg?w=1000&h=531)

Yearn vaults are yielding IOU tokens built by strategists who undertake a difficult vetting process to ensure that Yearn users are receiving the best risk-adjusted yield in the crypto ecosystem.

One previously used strategy at Yearn can be seen in the v1 Ethereum yVault: When a user deposits ETH the ETH is then lent at MakerDAO as collateral, which is used to borrow DAI that is then deposited into the DAI yVault.

Some common questions users may have are “How/when does Yearn move the funds inside the vault and charge fees?” and “How does Yearn guarantee a strategy to always generate tokens instead of losing them?”. One of the key functions of a strategy is called “harvest”. When called, it triggers a rebalancing process where profit is realized and reinvested back into the strategy. Strategists also use a number of tools to monitor on-chain data to ensure strategy health. One of those tools is Yearn Watch, which presents a nice UI with many of key metrics live on the blockchain.

Yearn and Keep3r additionally have a strong synergy in automating the tasks needed for vaults to maintain their performance. In order to build strategies, you will need a good understanding of Vyper (for yVaults) and Solidity (for strategies). The basic requirements to become a strategist are: knowledge about the blockchain ecosystem you’ll deploy in, which can be acquired by doing in-depth research of tokenomics and documentation for all tokens used in the strategy itself, Solidity programming knowledge similar to completing Level 4 on CryptoZombies, and knowing how to get around git, eth-brownie, and ganache.

After understanding the basics of the above tools you are ready to copy our strategy template! The functions you should start changing in this template in order to build with your own first strategy are prepareReturn, adjustPosition, and liquidatePositon. You can find the strategy template [here](https://github.com/yearn/brownie-strategy-mix).

Thank you to MarcoWorms for the writeup which can be found [here](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432).

# Vaults at Yearn

You can read a detailed description of the strategies for all of our active yVaults [here](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Ecosystem News

[Deposit directly into Yearn vaults with the Ambire Wallet’s new integration](https://twitter.com/AmbireWallet/status/1483087593285820416)

[Use Yearn vaults on Shapeshift DAO](https://twitter.com/ShapeShift_io/status/1484599573289086984)

[New updates on Tesseract Finance’s collaboration with VESQ](https://twitter.com/tesseract_fi/status/1483484524143128578)

[Yearn has become the number 1 aggregator by TVL on Fantom](https://twitter.com/vannny365/status/1484385291947368448)

[Check out ApeFramework made with the help of Yearn contributors](https://twitter.com/ApeFramework)

[Read this short overview of Yearn and its metrics](https://twitter.com/fuuurma/status/1484503576076599298)
