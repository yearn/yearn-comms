---
layout: post
title: "Web Engineering Update: Feb. 21, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-02-24"
translator:
---

original source: [Web Engineering Update 21 Feb](https://yearnweb.substack.com/p/yearn-web-engineering-update-b04?utm_source=url)

#### Week of February 21, 2022

## **Summary**

Arbitrum is officially launched for Yearn. Currently there is only one vault employing one strategy (shout out curve’s tricrypto.) We’ve learned from the growing pains we went through with Fantom to deliver a smoother roll out; for our users, our strategists, and our engineers.

Our team continues to expand as we add chains, strategies, and vaults. We’ve brought in additional project managers and product owners to help wrangle the work and keep our community engaged.

## **Accomplishments ✅**

**SDK Release 1.0.3**

- fix: improve pagination performance
- feat: allow signed approvals on withdraw
- test: Add specs for the earningsInterface
- test: Add specs for the VaultInterface
- feat: Add token unit tests
- chore: update iron bank registry adapter address

**v3 Front End Release**

- fix: removed lens contract and test
- feat: enable arbitrum
- fix: add initial case for reduce on vault deposit
- fix: fix incorrect url for labs icons
- fix: allow withdraw all from ETH
- feat: add error handling for simulations
- fix: update onboard with latest pr fix for connect

## **Ongoing Focus and Outstanding Issues**

**Cycle Focus 🎯**
- Arbitrum Launch
- Revamping the UI

**Current issues 🐛**
- When using a trustwallet and you change network from within, it doesn’t trigger the same network switch event the other wallets utilize.
- the pickle jar pSLPyvBOOST vault card doesn’t display properly

## **Come Build with us! 👷**

We’re continually adding public issues to our GitHub and always welcome new contributions in any of our repos

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta