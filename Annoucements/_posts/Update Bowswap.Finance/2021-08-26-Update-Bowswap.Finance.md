---
layout: post
title:  "Update Bowswap"
categories: [ Annoucements ]
image: ./Update-Bowswap.Finance/image1.jpg
author: Yearn
translator:
publish: true
---

# Bowswap.Finance [Update](https://t.me/yearnupdates/483)

It now has two parts:

## 1. Between Yearn Vaults

![](image1.jpg)

It swaps funds from one vault to another. There's no liquidity pool. It withdraws and redeposits into the desired vault. The only swaps it does is using Curve. If the vaults have a token in common (same metapool or 3CRV for example) it will use them. While it's not cheap gas-wise, it is gas efficient - Cheaper than doing it manually, for sure

## 2. From DeFi to Yearn Vaults

[Bowswap.finance](https://bowswap.finance/), now with simple migration to the best yield available. Migrate from AAVE and Compound to Yearn Finance in a few clicks, with no fees.

Sorry Stani

![](image2.jpg)

This next feature helps users migrate funds from Compound and AAVE to Yearn. It's the same concept as above, withdraw from the protocol and deposit into a Yearn Vault. Also shows both protocol's APY in the list and let's you select multiple tokens at the same time.

No fees are charged by Yearn on these swaps.
