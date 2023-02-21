---
layout: post
title: "Web Engineering Update: Jan. 10 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-01-12"
translator:
---

original source: [Web Engineering Update 10 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update)

#### Week of 10 Jan 2022

## **Summary**

Fast start to the year with multiple releases coming down the pipeline. Small bugs are addressed as they arise and security continues to be our top priority. Several first-time contributors have opened PRs'an exciting trend as we look to continually expand the website's functionality for current and future chains. 🚀

This week saw several updates to yearn-meta, including token and strategy descriptions for our 12 new vaults, as well as backend updates to Iron Bank and improved pricing logic for Curve LP tokens.

## **Accomplishments ✅**

- Release 1.0.5
  - fix: tx token price update
  - fix: downgrade bnc-onboard

- Release 1.0.6
  - refactor: pin new dependencies
  - fix: add dev timeouts for reduxtoolkit
  - feat: supported assets validation \[WEB-1060\] (#418)
  - fix: yvBoost balance displayed correctly \[WEB-1080\] (#423)
  - fix: update link to security policy
  - feat: update sdk (#427)
  - feat: remove unsupported tokens (#425)

- Miscellaneous
  - fix: handle custom vaults response on camelCase to snake_case (web-1104)
  - fix: refactor normalize casing of composite object (web-1103)
  - fix: paginate token balances (web-1125)
  - feat: add collateral cap properties to types (web-1124)
  - fix: added descriptions for underlying tokens (web-1119)
  - feat: small improvement to setup documentation (web-946)
  - fix: use checksummed address (web-1113)
  - feat: swap out white for black rai curve logo (web-1112)
  - feat: add updated crypto pool token logos (web-1111)
  - fix: icons for crv-eth, cvx-eth, and ust-wormhole (web-1108)
  - fix: mainnet api stopped workout without notification (web-1091)
  - fix: update vault detail page graph to "up-only" (web-1045)
  - fix: assetsPositionsof fetch error on ftm (web-1075)
  - fix: yvBoost balance incorrect (web-1080)
  - fix: FE validate supported assets addresses (web-1060)
  - fix: fix preview build and pin dependencies (web-942)
  - fix: vault deposit zapper error (web-1056)

## **Ongoing Focus and Outstanding Issues**

- Cycle Focus: Web Security
  - Two-week cycle continues our focus on mitigating front-end attacks. Be on the lookout for an in-depth post regarding these updates once they are completed.

- Outstanding Issues
  - Update test suite for SDK
  - Improve simulation errors to be more specific and informative
  - Refactor APY code in API and write documentation

## **Come Build with us! :man_mechanic:**

- We're continually adding public issues to our GitHub and always welcome new contributions in any of our repos

  - https://github.com/yearn/yearn-finance-v3
  - https://github.com/yearn/yearn-sdk
  - https://github.com/yearn/yearn-exporter
  - https://github.com/yearn/yearn-lens
  - https://github.com/yearn/yearn-meta
