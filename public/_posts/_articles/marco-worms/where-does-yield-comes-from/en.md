---
title: "Where does on-chain yield come from?"
image:
  src: ./cover.png
  width: 800
  height: 500
date: '2022-07-05'
author: Marco_Worms
translator:
---

![](cover.jpg?w=800&h=500)

DeFi is a large ecosystem with many different protocols, each offering different services and yield options. It can be thrilling to be on the hunt for the highest APY/APR (Annual Percentage Yields/Rates), still, it is essential to keep track of the sustainability of the source that pays out the yields so you don’t end up with unexpected losses.

> **If you don’t know where the yield comes from, then it comes from you**
> 
> *— I don’t know who wrote this originally but it fits the subject very well*

## Services that create value

The most reliable source of yield is taxing a useful service. Services provide real value to people using them and users are willing to let the service have a fair share of the money that traffics through since this often translates to a better and more secure product. Some examples of sustainable crypto services:

- **Bitcoin** is the most resilient global permissionless money ledger–to use it, you have to spend Bitcoin to pay for service fees
- **Ethereum** is the most secure platform to deploy services for DeFi and Web3 — to use it, you have to spend Ethereum to pay for service fees
- **Chainlink** is the largest oracle provider–to use it, you have to spend Chainlink

In the above services, we can see the pattern of the “protocol access token” (read more at [fat procools](https://www.usv.com/writing/2016/08/fat-protocols/)) which creates a sustainable long-term cycle that rewards everyone invested in the protocol which brings more interest to it and fuels ever-more building around it, but this is not the only way to achieve long-term protocol sustainability:

- **Curve** largest DeFi stablecoins trading protocol. CRV token holders receive trading fees
- **AAVE** is a DeFi lending platform where users can either use their borrowing service (paying fees) and/or provide tokens that will be used as protocol liquidity (receiving fees)

In this second pattern, services allow users to become holders and earn a share of the profits by holding (and often locking) a specific token. Notice that in both patterns there are functioning services that people are willing to use and pay fees, and this is where the “Yield” comes from: in BTC and ETH miners receive the fees paid by the service usage, and in DeFi protocols the token-holders and liquidity providers get those instead.

There are other ways to generate sustainable yield on-chain, most of them revolve around providing a financial service and charging for operational risks, for example: providing insurance, or liquidity, or creating a new derivative asset with extra utility (like cvxCRV makes veCRV tradeable for example). Sustainability can be achieved by many methods but understanding how it is actually achieved should be always clear and documented and preferably on-chain.

## Zero-sum games

If yields are high and service usability is low, it means that the money used to incentivize a part of the service is not coming from the service itself, so if the external money source dries the service breaks because yields will tend to go to 0.

A potential problem with zero-sum games is that people may not realize they have entered one. Economic relations are built on trust and overall trust goes down when a large-scale protocol breaks the expectation of many people.

Zero-sum games can be a misnomer. Not everyone is guaranteed to win with no losses. Here is an example that has impacted any DeFi newbie:

- A new Dex is released: HentaiSwap!! Also releases the $HENTAI token!
- $HENTAI token gets trading fees from HentaiSwap!
- You can stake $HENTAI for 420% APY! Just buy some and stake!!

Red flags users should keep an eye on:

- Why do we need another Dex? What does this service does that other doesn’t? Why would someone unstake liquidity from Uniswap/Sushiswap/Curve and put it in HentaiSwap?
- How much fees is this DEX generating? How close is it to 420%? Take a look at all other swap protocols: how much they pay for the same pairs when they have a lot of liquidity to compare fees/returns?
- Why should I stake $HENTAI? Why is someone paying me to hold this token? Seems like they want me to buy this token to make the price go up for previous bag holders to profit, but what can I do with it besides just selling back staking profits to the market?
- And finally: How many $HENTAI tokens the team mint for themselves in order to sell when market speculation is making it worth something in the market? Who is gonna lose money when they do?

## Positive-sum games

If in Zero-sum games someone always takes a loss for another to take a win, in positive-sum games both parties feel like they end up with more value after a transaction. Any service that provides value to users while charging a fair fee creates a positive-sum environment.

Let’s say we have 2 parties wanting to transact:

- a **User** needs to exchange 1 ETH to $2000 USD in order to pay rent
- a **Developer** maintains a smart contract that allows exchange between both coins

The transaction happens roughly like:

1. Maintaining software is a costly and constant exercise, so in order to keep the service running the  **Developer**  charges 0.5% swap fees
2. **User** can’t pay bills with ETH and needs it converted, and every exchange will charge a swap fee to maintain their services
3. So the user swaps 1 ETH in the developer service and receives $1990, knowing that $10 went to pay for service maintenance

Let’s take a snapshot of both parties before and after the transaction:

**Before**

- User: Had 2000$ in an illiquid asset that needed to become liquid for daily usage
- Developer: Had 0$ income from this user to maintain service

**After**

- User: Had 1990$ in a liquid asset that can be used to pay bills
- Developer: Had 10$ income from this user to maintain service


I hope that this example makes it clear that both parties feel like winning from this transaction. The 10$ that the user paid for the service is not seen as a loss from the user perspective because a service was provided and the fee that was paid allows this service to be here the next time the user needs it again.

## Yearning for Yearn

When I joined DeFi I lost a lot of the money I put into rugs and zero-sum games, and I’m not alone in having this sort of experience. After learning more about the fundamentals of both trading and DeFi, I figured out the most important thing is understanding the underlying value of the assets and the quality of the protocols I am investing into, **but there is a huge problem**: the complexity to audit smart contracts and tokenomics is very high since it requires extensive financial, programming, and security experience, and for the average user the research might be too extensive for a “simple investment”, and for portfolios that have many tokens this research only gets more extensive.

[Yearn Vaults + Strategies](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) provides “DeFi investment experts as a service”: Yearn can focus on maintaining strategists that generate yield for tokens and the user can focus on which tokens they want to hold. This way any other protocol or even retail user can have a channel that safely generates yields for their funds and Yearn charges fees on top of yield profits, a positive-sum scenario, [fully transparent](https://medium.com/iearn/diving-into-yearn-metrics-8c3fb0520927) on-chain.

DeFi still has a long road to run in order to become digestible to the average FIAT investor, today it relies heavily on yield-aggregators to minimize some of the common risks, if you will invest your money *(or even more sensitive: other people’s money)* today make sure you know exactly where your investment’s yield comes from so you don’t become another person’s yield.
