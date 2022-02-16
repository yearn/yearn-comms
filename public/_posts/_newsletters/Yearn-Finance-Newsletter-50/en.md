---
title: "Yearn Finance Newsletter #50"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator:
---

### Week Ending December 5th, 2021

![](./cover.jpeg?w=576&h=288)

Welcome to the 50th edition of the Yearn Finance Newsletter. Our aim with this newsletter is to keep the Yearn and the wider crypto community informed of the latest news, including product launches, governance changes, and ecosystem updates. If you’re interested in learning more about Yearn Finance, follow our official [Twitter](https://twitter.com/iearnfinance) and [Medium](https://medium.com/iearn) accounts.

## Summary

- New Yearn UI
- YFI Tokenomics Update Proposal
- Updated Yearn Docs
- YIP-64 Fails To Meet Quorum
- Yearn Delegates 23M veCRV to Convex
- Yearn Snapshot Strategy
- Vaults at Yearn
- Ecosystem News

## New Yearn UI

![](./image2.jpg?w=512&h=512)

We’ve rebuilt [yearn.finance](https://yearn.finance/) from scratch with tons of feedback from our community. It's live now, so take it for a spin.

One of the most interesting features (in our opinion) is the Simulations feature. To deposit into vaults in previous UI versions we added Zapper support so, for example, you can deposit into 3CRV vault with ETH or any token supported by Zapper, which is fast and convenient and implies that a swap will happen in your deposit. What is that "Simulating.." message you may ask? Well that "Simulating..." label checks your input tokens and with Zapper's API and Tenderly, an awesome service that eagerly executes a simulation of your transaction.This simulation calculates what the exact output would be, like a preview of your deposit. e.g ETH>3crv.

Why is this useful and great? Well, given the protocols involved and on-chain state being dynamic, it's hard to predict a good estimate of vault tokens you can receive. Your slippage may be bigger than expected, or your token path may fail and cost you gas, etc. This simulation may save you gas either on deposit or withdrawals.

Withdrawals are another area that is hard to predict. Simulations help check if you can withdraw given the vault conditions, some are more liquid than others depending on strategies allocations.

If you get a "Simulation Failed.." msg, odds are that if you move forward with the transaction it will revert.

The v3 UI is new so more work is being done to improve this UX to be even more smooth.

Look under the hood [here](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f). If you’re a developer, contribute [here](https://github.com/yearn/yearn-finance-v3).

## YFI Tokenomics Update Proposal

A snapshot poll is live to gauge support for community proposals on YFI tokenomics.

There are currently 5 options up for vote, with the working names being ySplit, veYFI, xYFI, BurnKeYs, and Status Quo. The [ySplit proposal](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) suggests splitting the YFI token into 10,000 to 1,000,000 to combat unit bias. The [veYFI proposal](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit) suggests locking YFI for a given period of time in order to receive governance rights that dictate the vaults where treasury earnings should go. [xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit) suggests the creation of a YFI staking vault where excess treasury earnings are to be sent. [BurnKeys](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit) calls for the mint function of the YFI token to be permanently disabled, thus capping the supply at 36,666 tokens. Status Quo would leave the YFI tokenomics in its current state and inform holders and potential investors of the benefits.

Vote here at [the Snapshot page](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea). Thank you to all in the community who have contributed. An update from the working group, haiku included, can be found [here](https://docs.google.com/document/d/1-YEfXqXgTm-qzhPRUKs5allfX1XqYUOYwr_49FApnLU/edit).

## Yearn Docs

Several months ago Yearn contributors set out to rewrite our docs to make them friendly and approachable.

The completely refreshed docs are here to guide users, devs, partners, and to feed your curiosity with many previously unseen entries.

Check out the new docs [here](https://docs.yearn.finance/).

## YIP-64 Fails To Meet Quorum

![](./image3.jpg?w=1100&h=759)

YIP-64: Adjust fees on non-stablecoin yVaults entered the voting phase and ended in the majority voting against adjusting fees.

Check out the proposal [here](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2).

## Yearn Delegates 23M veCRV to Convex

![](./image4.jpg?w=873&h=615)

Yearn has delegated 23 million veCRV to Convex Finance using Curve’s new native boost delegation feature. This will increase yields of factory pools for both our DAOs. This does not affect regular pools, fees or voting.

Delegating unused veCRV [here](https://convex-boost-delegation.vercel.app/) increases factory rewards for all Convex participants, this further helps increase yield for Convex and Yearn. Our delegation transaction can be found [here](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f).

## Yearn Snapshot Strategy

In preparation for several important votes, Yearn's Snapshot strategy got refreshed.

It allows you to vote with productive YFI, namely YFI in wallet, all Yearn v2 vaults, Bancor, Balancer v2, Uniswap v2, Sushi (incl. MasterChef), MakerDAO, Unit, Instadapp (incl. MakerDAO).

The contract can be found [here](https://github.com/yearn/snapshot-strategy) and the deployment can be found [here](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code)

## Vaults At Yearn

You can read a detailed description of the strategies for all of our active yVaults [here](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Ecosystem News

[Securely use your YFI on Qredo Network’s platform](https://twitter.com/QredoNetwork/status/1461031928564436994)

[Listen to Into the Byte Code with tracheopteryx](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet now supports Yearn’s beta vaults on Fantom](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract enters top five fastest growing protocols on Polygon](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[Watch the Coordinape onboarding video](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[Checkout Yearn on Argent’s L2 wallet with fees as low as $2](https://twitter.com/argentHQ/status/1468934923264401419)

[Tesseract vaults have increased their deposit limits](https://twitter.com/tesseract_fi/status/1468217220966801413)

[Get a discount on ETHDubai tickets by holding $yvBOOST or $yvYFI](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[See Zapper’s spotlight on Yearn Simulations](https://twitter.com/zapper_fi/status/1466447565302517765)

[Listen in to Facu’s insights on Yearn with the On the Ledger podcast](https://twitter.com/Ledger/status/1465678701635506185)

[YFI is now spendable in Flexa’s app](https://twitter.com/FlexaHQ/status/1469092114038415364)
