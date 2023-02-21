---
layout: post
title: "Web Engineering Update: Mar. 14, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-22"
translator: 
---

original source: [Web Engineering Update 14 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-report?s=r)

#### Week of March 14, 2022

## **Summary 💌**

A particular win this week is getting our partner tracking setup on the front end and SDK. This will help us figure out which services are being utilized most (ledger, shapeshift, etc) so we can start to bring in more features specific to our partners and get a better idea of which partners are being utilized by the community. We also had some nice visual fixes this week: fixing the toggle switch to clearly indicate if it is on or off, and a new vault broke our UI with the amount of 0’s it passed into the front end (speaking of which, Curve’s Rocket Pool is now live on Yearn.) Shout out to our dev’s who, late at night on a weekend, make some quick changes to get the site looking clean again.

## **Accomplishments 🎊**

**V3 Front End v1.0.29**

- fix: toggle switch on & off clarity
- fix: avoid showing vault graph for single data point
- feat: set new zapper zap in contract address
- fix: wallet connected before getTokenAllowance
- fix: re-enable tally wallet
- fix: apy overflow

**SDK v1.2.1-0**

- refactor: handle zapper data fetching errors more gracefully
- fix: change if statement to switch for fetching token balances
- test: add cache unit tests
- fix: pass vaultDynamic addresses through so the lens adapter will be called with the correct parameters
- refactor: return all supported tokens in available network
- feat: use address provider to fetch contract addresses
- fix: add config for mainnet decentralized subgraph
- feat: add partner service for depositing into vaults

## **Ongoing Focus and Outstanding Issues 🍙**

**Cycle Focus 🔎**

- Uncouple / minimize dependencies
- Finish UI revamp
- Zap in Fantom

**Outstanding issues 🏴‍☠️**

- A few wallet issues (ambire batch transactions, rainbow wallet)
- One vault isn’t passing it’s TVL to the front end
- Still need some unit tests created in the SDK
- https://github.com/yearn/yearn-finance-v3/issues
- https://github.com/yearn/yearn-sdk/issues

## **Come Build with us! 👷**

We’re continually adding public issues to our GitHub and always welcome new contributions in any of our repos

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta