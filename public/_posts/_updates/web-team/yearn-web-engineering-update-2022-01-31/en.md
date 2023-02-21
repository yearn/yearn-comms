---
layout: post
title: "Web Engineering Update: Jan. 31, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin & dudesahn
date: "2022-02-04"
translator:
---

original source: [Web Engineering Update 31 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update-160?s=r)

#### Week of January 31, 2022

## **Summary**

A few weeks of housekeeping as we wrap up Jan 2022:

- Support for Arbitrum has been included in a recent release for the main site as well as YearnWatch. With a bit more testing Yearn will be ready to launch vaults and strategies on our 3rd chain.
- The web team also faced some growing pains as we tackled the largest spike of unique user visits we’ve ever had. This spawned the growth of an infrastructure team with more details to come.
- Web and strategists teamed up to begin overhauling our APY: add more data, make it more usable to users, and make it more accessible visually.
- Finally, we’ve had a nice push of new contributors helping with issues in multiple web repos.

## **Accomplishments ✅**

**SDK Release 1.0.28**

- feat: support multi strategies on vault details
- fix: update simulation example address
- fix: migrate to new cache endpoint
- feat: improve error handling for simulations 🤬
    - When simulations fail, our support team has done an amazing job with troubleshooting but it’s time to give them more tools. This feature will help users and support team resolve issues with increased precision.
- fix: made disableAllowlist not required
- fix: read strategies metadata from API

**SDK Release 1.0.27**

- fix: improve pagination performance

**SDK Release 1.0.26**

- fix: user correct scopes for validateCallData with allowlist service

**SDK Release 1.0.25**

- fix: add new iron bank metadata types
    - Specifically, this tackled the collateral cap feature that Iron Bank recently implemented

**Web Release 1.0.13**

- feat: add error type to txError
- fix: pagination fetch

**Web Release 1.0.10**

- fix: remove APY details if has override
- fix: increase confirmation blocks for transactions

**Web Release 1.0.9**

- fix: token balance fetch error
- feat: add testing id fields for integration
- feat: support arbitrum 🚀

**Miscellaneous**

- feat: github ci, linting dependencies, readme.md added
- fix: fixed tests for strategy helper contract
- feat: manageable ownership
- fix: tests for strategy helper contractfix: removed lens contract and test
- test: added test for the ironbank registry adapter
- fix: vault description link
- fix: add pagination for dynamic assets
- feat: add 0xDAO strategies 🤑
    - Though short-lived, this was fun while it lasted 🙃
- feat: add multicall to prices helper
- feat: add TUSD and UST fantom IB
- fix: remove lens contract

## **Ongoing Focus and Outstanding Issues**

**Cycle Focus 🎯**

- We decided to keep previous themes of security and stability this cycle as we realign our cycle schedule. End to end testing has proven more than useful along with alert bots to update the team with any errors or performance issues.

**Current issues 🐛**

- Fantom RPC. While this isn’t specific to Yearn it continues to affect users. Yearn has shifted our infra to a self-hosted node, which hopefully should smooth out any previous issues users experienced with the public RPC.
- APY calculations continue to be a source of questions, especially on Fantom. New additions to the yearn-exporter repo are almost complete, and will provide:
    - Per-strategy forward-looking (Curve/Convex) and prior harvest (all other vaults) APY
    - Weekly, monthly, and since inception APY snapshots at the vault level.
    - To display all of these new numbers, we will be adding a very basic stats page. 📊

## **Come Build with us! 👷**

We’re continually adding public issues to our GitHub and always welcome new contributions in any of our repos

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta