---
title: "Diving into Yearn Metrics"
image:
  src: ./image3.jpg
  width: 1400
  height: 625
date: '2022-02-17'
author: Marco_Worms
translator:
---

Doing your own research is a necessary exercise when dealing with crypto and for [yVaults and strategies](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) there are a handful of views that you can explore and use to crunch all the numbers. In this article I will dive into all public Yearn analytics resources used by strategists to monitor vaults and strategies health, so learning how to navigate these tools will allow you to have the same level of information about vaults as a Yearn team member. The three tools we’ll explore today are:

### **[The Vaults at Yearn](https://vaults.yearn.finance/)**

A comprehensive overview of all yVaults and strategy descriptions. A great place to start learning about how and where vault funds are delegated.

### **[Yearn Vision](https://yearn.vision/)**

A complete interactive dashboard that can be used to analyze historical data for all vaults and strategies. This is where we’ll be able to extract and analyze any kind of historical data from yVaults and strategies usage.

### **[Yearn Watch](https://yearn.watch/)**

A dashboard made by strategists for strategists that contains quick access to useful data about strategies health for each yVault.

### **[The Vaults at Yearn](https://vaults.yearn.finance/)**

The Vaults at Yearn is a great resource to start understanding how funds are managed by a vault. Here you’ll find descriptions for all yVaults and their strategies:

![](./image1.jpg?w=1211&h=733)

On the left side, you can choose either Ethereum or Fantom vaults and they are aggregated as:

- **Stables**: yVaults made for stablecoins
- **DeFi Tokens**: yVaults made for tokens from the DeFi ecosystem of the chosen network (ETH or FTM)
- **Curve Pools**: yVaults made for tokens from the [curve.fi](https://curve.fi/) ecosystem
- **Retired Vaults**: old yVaults that aren’t used anymore

When you choose a section you’ll see a list of vaults. You can click on a vault to expand it and see the descriptions of all the strategies that it uses:

![](./image2.jpg?w=897&h=856)

If you want to dive deeper into numbers for each vault/strat you’ll need to hop into our next tool! Which is Yearn Vision:

## **Yearn Vision**

**Link: https://yearn.vision/**

Yearn Vision is a complete analytics dashboard suite with many pre-made views to analyze historical data from vaults and strategies. Let’s breakdown some of what can be found here, starting with the home page:

![](./image3.jpg?w=1400&h=625)

![](./image4.jpg?w=1400&h=445)

This page gives us a lot of information on the overall health of all Yearn Vaults.

There is information about TVL (Total Value Locked) which represents all funds deposited across all yVaults. We can see both Ethereum and Fantom total TVL and also each network slice. There are some charts showing daily/weekly deltas, which are comparisons with present data and past ones. “share price” is also an important metric to follow, it represents the vault’s lifetime gains in the form of a number which grows over time above 1.0. Below you can see a share price example for ETH to yETH. Here is how “share price” works:

![](./image5.jpg?w=1400&h=849)\
*how “share price” works*

Back to the Vision dashboard, on the top-right corner, you can always change the time range which will update most charts.

![](./image6.jpg?w=226&h=469)\
*change the time range in the top-right corner*

Don’t get scared by the charts with many colors they normally show all vaults/strategies and you reduce the noise by selecting only the one you want to learn more about. You can click on the list of items to filter analytics by a single part, most of them will come with all items selected by default so you’ll have to pick the vault you want to check:

![](./image7.jpg?w=884&h=231)\
*Unfiltered*

![](./image8.jpg?w=895&h=258)\
*Filtered*

“time since last report” means when this vault strategies were last harvested. The above “Filtered” chart is an example of all harvest from the USDC yVault that happened the last week, the vertical drop means that a harvest happened so “time since the last harvest/report” goes to 0

You can switch to other dashboards on the left side of the screen:

![](./image9.jpg?w=225&h=221)\
*see all dashboards: https://yearn.vision/dashboards*

Here you’ll find plenty of dashboard to dive deeper into what’s happening at Yearn!

![](./image10.jpg?w=1395&h=565)\
*dashboards used by strategist*

Let’s take a peek at the “Vault Overview” dashboard:

![](./image11.jpg?w=1400&h=640)\
*Vault Overview Dashboard: https://yearn.vision/d/ibsIoEknkdffd/vault-overview?orgId=1*

In this Vault Overview dashboard we can see there are 6 active strategies for the USDC yVault: “totalDebt” is the amount that the vault is delegating to these strategies, “amount of free funds” means how many funds are available for cheap (gas-wise) withdrawal, when this number is less than the amount you’d like to withdraw then the transaction will cost a bit more gas because the vault will have to take funds delegated to strategies and make more operations in the process.

We’ll use yearn.watch later to look at how the funds are delegated proportionally for each strategy.

There are also great dashboards for inspecting Yearn’s overall health, and you can even monitor the DAO’s treasury:

![](./image12.jpg?w=1363&h=201)\
*Yearn Treasury Dashboard: https://yearn.vision/d/9_ppKhd7z/treasury*

## **Yearn Watch**

**Link: https://yearn.watch/**

Yearn Watch is a dashboard made by strategists for strategists, so you can quickly navigate through important information about each strategy’s health. The home screen already greets you with all vaults:

![](./image13.jpg?w=1255&h=799)

If you open a vault you’ll see information on assets allocation. I used a part of this view in the Yearn Vision section, let’s see the complete view for that USDC yVault:

![](./image14.jpg?w=855&h=855)

The “details” view shows everything about the overall fund’s allocation. If you change to the “strategies” view you can dive even deeper and inspect each strategy individually and easily find their contracts and on-chain transactions.
Once inside a strategy, an insightful view is the “reports” (harvests) which show you the last 10 harvest transactions so you can monitor the real-time gains of the vault and monitor the profit from each harvest:

![](./image15.jpg?w=1253&h=759)

Expanding an individual report for more information:

![](./image16.jpg?w=1157&h=415)

### **That’s Yearn Folks!**

I hope this article helps people extract good information about their deposits at Yearn! It’s great to be able to access the same tools that the veterans working on these products use to monitor them, there is a lot of valuable information about the past and present of Yearn’s yVaults and products.

Producer: [Worms](https://twitter.com/MarcoWorms), Reviewer: [Dark Ghosty](https://github.com/DarkGhost7)

Thanks a lot Dark Ghosty for going through all these dashboards and showing me how to navigate them ❤

**Made in [yearn.finance](https://yearn.finance/)**