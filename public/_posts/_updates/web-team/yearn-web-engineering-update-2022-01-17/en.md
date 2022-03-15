---
layout: post
title: "Web Engineering Update: Jan. 7, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-01-20"
translator:
---

original source: [Web Engineering Update 7 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7)

### Week of January 17, 2022

## **Summary**

A big release this week with APY tooltips making an appearance; you can now see more detailed information when you hover over the APY of a vault. Finalizing security improvements remains the top focus, with the addition of Arbitrum vaults coming up next, and more work to improve our multi-chain UI/UX as well.

Other updates include no more dust following vault withdrawals, support for a new LINK vault on Fantom, and UI fixes for yvBOOST and the Iron Bank.

## **Accomplishments ✅**

### **Web Release 1.0.8 (17 Jan 2022)**

- feat: readme instructions improved 📚
- feat: APY tooltips for vaults and labs
  - Hovering over a vault's APY on the vaults page or the detail page will now provide a similar breakdown as seen on the v2 website, with extra info included for Curve LP vaults.
- feat: add health status route 🏘️
- feat: withdraw all for vaults
  - Previously, when withdrawing the UI would convert the user's input of underlying token balance into vault shares, and then pass this to the vault contract via `withdraw(shares)`. However, if share price was increasing following a harvest, this could leave a user with dust (a tiny, fractional amount of vault shares). Now, the UI detects if a user is trying to withdraw all of their vault position, and instead passes `withdraw(max_uint)`, which will burn all of the user's vault shares and leave no dust even if the share price is increasing each block.
- fix: labs withdraw share calculation
  - There was an issue displaying the amount of yveCRV a user would receive from a yvBOOST withdrawal due to special handling of the vault token (yvBOOST) as the display token. This has been corrected.
- style: eslint rule for import order 📝

### **SDK Release 1.0.15 (19 Jan 2022)**

- feat: add allow list
- chore(deps): bump shelljs from 0.8.4 to 0.8.5
- feat: enable ci tests on pull requests
- fix(account.summaryof): ignore lab vaults for holdings calculation
- fix: resolve missing fetch import

### **Miscellaneous**

- feat: live puppeteer site monitoring framework
- fix: update user borrow limit
  - This UI fix considers an asset's collateral cap when displaying a user's borrow limit for Iron Bank
- fix: update curve calculations for new pools
- fix: yvBoost display error
- feat: remove new type override for curve vaults
- fix: display total assets
- fix: yvBoost withdraw error
- feat: add fantom link vault logo
- feat: add link vault info
- fix: ignore lab vaults for holdings calculation
- fix: resolve missing fetch import

## **Ongoing Focus and Outstanding Issues**

- **Cycle Focus 🎯 **

  - Finalize and ship security improvements, with a full deep-dive post coming soon.
  - Arbitrum is coming! This cycle the web team is bringing Arbitrum to the forefront as we begin vault testing and integration.
  - With vaults soon launching on our third chain, Yearn is designing a multi-chain UI/UX to allow users to more easily view current positions and new opportunities across all supported chains within the Yearn ecosystem.

- **Current issues 🐛**

  - Vault migration bug: Following migration, some users must refresh the page before the new vault appears and the old vault goes away. Difficult to reproduce consistently (2/16 tries on Fantom), this error appears to be due to misalignment of data between wallet RPC and our SDK.
  - JSON-RPC Error: This one seems to appear most commonly on Fantom. Improved error messaging in the frontend will better help users determine if they are experiencing a true RPC error or something else.

## **Come Build with us! :man_mechanic:**

- We're continually adding public issues to our GitHub and always welcome new contributions in any of our repos

  - https://github.com/yearn/yearn-finance-v3
  - https://github.com/yearn/yearn-sdk
  - https://github.com/yearn/yearn-exporter
  - https://github.com/yearn/yearn-lens
  - https://github.com/yearn/yearn-meta
