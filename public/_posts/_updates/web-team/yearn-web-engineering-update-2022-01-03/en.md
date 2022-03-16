---
layout: post
title: "Web Engineering Update: Jan. 3, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: Dudesahn
date: "2022-01-05"
translator:
---

original source: [Web Engineering Update 4 Jan](https://yearnweb.substack.com/p/update-jan-5-2022)

#### Week of January 3, 2022

## **Summary**

Release of v3 beta site to production in December has gone well. We continue to address bugs as they arise, and are currently focused on increased security and monitoring of the website.

## **Accomplishments**

- Release 1.0.4
  - Fix: alchemy link on footer
  - Fix: pickle API link
  - Fix: labs deposit expected token amount
  - Fix: detailed view vault fetching on network switch
  - Fix: allow cancel fetches for news ones when user performs asynchronous actions
  - Feat: created NFT access (disabled for now)
  - Feat: vault historical earnings in underlying token
  - Feat: improved footer UI
  - Feat: improved network switching UI
  - Feat: support for Fantom in yearn-exporter

- Fix: yvBoost deposit expected token outcome
- Feat: add prompt to "add network" if user doesn't have in MetaMask
- Feat: add reddit link and logo to footer
- Feat: support fantom in yearn-exporter
- Fix: remove beta languages

## **Ongoing Focus and Outstanding Issues**

- Cycle Focus: Web Security
  - In response to the increasing sophistication of front-end attacks on DeFi protocols, we have spent the last several weeks designing and implementing several improvements to Yearn's web security, including monitoring, real-time verification, and implementation of a web multisig. More details to follow upon release.

- Vault migration bug
  - Some users have reported an issue when migrating vaults requiring a page refresh for their new vault balance to appear. While this issue has proven a bit difficult to replicate, engineers are debugging this week.

## **Come Build with us!**

- We're continually adding public issues to our GitHub and always welcome new contributions in any of our repos

  - https://github.com/yearn/yearn-finance-v3
  - https://github.com/yearn/yearn-sdk
  - https://github.com/yearn/yearn-exporter
  - https://github.com/yearn/yearn-lens
  - https://github.com/yearn/yearn-meta
