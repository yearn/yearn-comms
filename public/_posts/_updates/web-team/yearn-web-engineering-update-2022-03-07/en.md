---
layout: post
title: "Web Engineering Update: Mar. 07, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-15"
translator:
---

original source: [Web Engineering Update 07 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-updates?s=r)

#### Week of March 7, 2022

## **Summary 💌**

This week we had a couple errors crop up that we needed to take down quick while we tried to focus in hard on our UI revamp. Zapper gave us an updated ZapIn contract which caused some issues until we squashed it by updating it in code. The UI revamp includes some much needed font updates along with new icons and images the design team built out. This will also include some variable name changes that should make themes easier to maintain for the Front End team and clearer for the community to implement their own. Lastly, we’re getting support from the community by tackling an issue where you perform an approve transaction, refresh the page, and it asks for your to do another approval.

## **Accomplishments 🎊**

**V3 Front End v1.0.27**

- feat: add huobi wallet support
- feat: signed approvals for withdrawls
- fix: tx success exit button on vault details
- fix: add vault token to MetaMask
- fix: quickfix for subgraph date format
- feat: validate tx using using allow list
- feat: update zapper contract

**SDK v1.1.1**

- refactor: handle zapper data fetching errors
- fix: change if statement to switch for fetching token balances
- fix: add deprecated comment to protocol earnings
- test: add cahce unit test

## **Ongoing Focus and Outstanding Issues 🍙**

**Cycle Focus**

- Uncouple / minimize dependencies
- Finish UI revamp
- Zap in Fantom

**Outstanding issues**

- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **Come Build with us! 👷**

We’re continually adding public issues to our GitHub and always welcome new contributions in any of our repos

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta