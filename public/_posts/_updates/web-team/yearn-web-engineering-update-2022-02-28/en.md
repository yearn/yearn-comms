---
layout: post
title: "Web Engineering Update: Feb. 28, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-09"
translator:
---

original source: [Web Engineering Update 28 Feb](https://yearnweb.substack.com/p/yearn-web-engineering-update-18a?s=w)

#### Week of February 28, 2022

## **Summary 🌅**

You can tell spring is in the air by the amount of change happening in the Web3 space. Iron Bank has branched out independently from Yearn’s UI; they’ve developed an awesome site (app.ib.xyz) as their team sets out to provide a streamlined user experience. Zapper was temporarily brought down due to surging API calls (and a memory leak) which gave our token balances a bit of a headache. This issue made us reconsider our reliance on 3rd party applications which was reflected in our retrospective. We’re looking forward to our planning cycle next week to hopefully decouple ourselves from outside reliance and and ensure our Front End is more resilient than ever.

## **Accomplishments ♨**

**V3 Front End**

- fix: temp alert for zapper error
- feat: iron bank changes
- fix: lint warnings
- fix: Yield under modal displaying 0
- fix: tw.card img

**SDK v1.1.1**

- test: add spec for EarningsInterface#accountAssetsData
- fix: manually use allow list before writes
- test: add spec for AllowListService

## **Ongoing Focus and Outstanding Issues 🏴‍☠️**

**Cycle Focus**

- We’ve pushed our engineers this cycle to get issues into GitHub for our community to work on.
- The Arbitrum launch went fantastically well and, as of the time of this writing, is already just over $2 million in assets managed.

**Outstanding issues**

- Managing the ever growing list of vaults with yearn-exporter
- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **Come Build with us! 👷**

We’re continually adding public issues to our GitHub and always welcome new contributions in any of our repos

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta