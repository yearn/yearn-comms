---
layout: post
title:  "Introducing Fixed Forex"
categories: [ Articles ]
image: ./Introducing-Fixed-Forex/andre-hero.png
author: Andre
translator:
publish: true
---

# Introducing Fixed Forex (USD, EUR, ZAR, JPY, CNY, etc)

**Disclaimer;**

- No token
- Audit has not been completed
- Contract is experimental

**Key features;**

- 0 governance (or multisig)
- 0 configuration
- 0 fees
- 0 value extraction
- Gentle liquidations
- Dynamic minting caps based on on-chain liquidity
- Dynamic LTVs based on on-chain protocols

**Fixed Forex**

Fixed Forex is designed to be an immutable, 0 fee, 0 governance, decentralized stable coin framework.

LTVs (Loan-to-value ratios) are derived from Compound, Aave v1, Aave v2, and Iron Bank. As these systems add or update their accepted collateral, so does Fixed Forex dynamically update.

Minting caps (how much liquidity a user can mint against a given collateral) are derived from available on-chain liquidity, the higher the on-chain liquidity, the higher the minting caps.

Fixed Forex introduces gentle liquidations, the absolute minimum amount of debt is repaid to bring a users position back to even, no more worrying about the full stack being liquidated during draw down events.

For purposes of this release, the contract will not be verified on etherscan, however, you can find the address and ABI below;

[0x92FC8E6EfdF389e2527d14393b15F543f9a03420](https://etherscan.io/address/0x92fc8e6efdf389e2527d14393b15f543f9a03420)

[ABI](https://gist.github.com/andrecronje/4ce11e8603a7f61af4619a86647db1d4)

The full release will be based on curve.fi’s crypto pools, to allow for a decentralized forex market.
