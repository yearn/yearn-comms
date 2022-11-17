---
title: "YearnV3 : Motivation and design"
image:
  src: ./image1.jpg
  width: 1000
  height: 491
date: '2022-05-09'
author: jmonteer
translator: 
---

*After the [brief overview](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0) of the next version of Yearn vaults and several questions about it, I decided to write about YearnV3 in detail.*

## TL;DR

![](image1.jpg?w=1000&h=491)\
*Core (light blue) and Smart Modules (dark blue) will initially replicate V2 functionality. After that, contributors can improving Smart Modules to achieve the long term objectives. Periphery (green) is independent from the Vault. This representation is just my guess of how it will be but could end up being very differently.*

**V3 iterates on V2 to increase robustness and develop yearn’s path towards further decentralisation**, while keeping the same proven product (yield bearing tokens) that abstract builders and users from the hard work of yield farming. This is, V3 will initially have the same functionality than V2 but it will make vaults more robust and allow to start iterating on Smart Modules (read below).

> **Yearn’s long term objectives:**
> - security
> - reduce required effort to write a new strategy
> - allow a wider range of strategies (locking funds strategies, EV+ but potentially lossy, …)
> - allow for multi-chain liquidity and strategies
> - become immutable without migrations
> - decentralise strategy whitelisting
> - automate / decentralise debt allocation
> 
> **How are we doing that?**
> - **Modularised Architecture**: split the code into a very robust “dumb” logic that handles the very few things a vault needs to get right (deposits, accounting, roles, …) and modules that allow to iterate on the “smart” logic (optimised debt allocation, strategy whitelisting, dynamic fees, …)
> - **Rethinking strategy <> vault relationship** to simplify strategy creation, allow for wider range of strategies, and reduce their responsibilities (i.e. accounting is handled by the vault), lowering the number of potential issues  
> - **Adding new products** like yJuniorTranches (allow for different risk profiles for advanced users) or or ySwaps (increasing swap efficiency, increasing net APY) + solving other minor issues found in late stages of V2 operation

## Yearn, today

### What is a Yearn vault?

Yearn vaults are funnels, they take funds from users and put them to work in other underlying protocols, by providing liquidity to get returns. So Yearn vaults are just huge liquidity providers to other DeFi parts. Vault tokens are yield bearing tokens that abstract the holder from the yield source.

> Can Yearn vertically integrate and build protocols directly connected to the vault? I think it can, but that’s probably too far away. Back to vaults and strategies.

### YearnV2

![](image2.jpg?w=1000&h=491)\
*YearnV2 Vaults debt allocation is done in a simple way: fixed percentages. Strategies are added to the vault by governance, which doesn’t scale.*

V2 introduced **multi-strategy vaults**, which **allowed to create a yield bearing token that adapts to market conditions** by adding and rotating strategies. In my opinion, the value of abstracting a user/integrator from yield sources is understated. Integrators started to build awesome stuff on top of yvTokens as a reliable yield source (see Alchemix, Element, Abracadabra, …) and are now a huge percentage of TVL in Yearn Vaults.

During V2 life, some issues have been detected or confirmed.

- Strategy whitelisting depends on Governance Multisig
- Vault’s debt allocation is a manual unoptimised process
- Strategies handle too much responsibility in critical things like accounting
- It is VERY hard to write your first strategy (and it doesn’t have to be, subsequents are fairly easy), which leads to lower amount of strategies
- Certain types of strategies are not suitable for Yearn vaults (strategies that lock funds, send funds to other chains, could be lossy while EV+, …)
- Iteration on V2 code is painful for users and contributors due to required migrations

## Yearn, tomorrow

Yearn Vaults are a proven product. They just need to continue doing what they do, better.

For that, mechanisms around different parts of the protocol need to be set up so vaults can survive longer than the contributors currently around. This means that strategy writing, strategy whitelisting, debt allocation, and front-end, among others need specific incentives systems around each of them to make working on them a permissionlessly profitable task, that will lead to decentralisation.

## YearnV3

YearnV3 is focused on iterating on V2. Current version knows how to do certain things very well (accounting, deposits, roles, …). Other things are yet to be completely solved in a decentralised way (strategy whitelisting, debt allocation, …). So V3 just settles those things it knows well and builds the foundation for a safe iteration on those things that are not yet clear. This means that the release of V3 will do the exact same things V2 vaults do but in a more reliable and efficient way. The main difference is that it will set the foundation for safe iteration on the still-to-be-solved logic.

> For example, strategy whitelisting can be handled by a smart module that just takes votes of the yvToken holders and adds the strategy to the vault if a threshold is passed. Another option is to rely on yJuniorTranches for strategy whitelisting… it is not yet decided and it doesn’t need to thanks to V3.

## 1. Modularised Architecture

Yearn vaults need to do few things in a very robust way. However, some of those few things can be done in a smart way or need to change over time. **Introducing Robust Core and Smart Modules.**

![](image3.jpg?w=1000&h=491)\
*The three main blocks of the YearnV3 architecture: Robust Core, Smart Modules and Periphery*

### Robust Core

Core code will implement the few very important things that a vault needs to get right. They are not subject to innovation, which means that can be written to last and be immutable. They are:

- **Deposits and withdrawals**: Correctly handling user interactions with the vault by minting and burning the right amount of shares.
- **Accounting**: Keeping a record of where funds are, profit and losses to calculate value of shares.
- **Managing funds**: Sending allocated funds to each of the strategies and retrieving them back from vaults in a safe way.
- **Access control**: Establishing a granular role system that allows group of functions to be called by specific actors, that can be users, multi-sigs or smart contracts.

Core will also include a VaultFactory contract so several instances of vaults can be deployed for any token effortlessly.

### Smart Modules

They will implement complex but required logic that is expected to continue to be iterated on until it can be made immutable. If any of the Smart Modules fails, the vault can live without them just enough so it can return funds to depositors.

**At V3 launch, the Smart Modules will just replicate V2 vault behavior.** After launch, contributors can start working on innovative logic to solve current issues. They will be upgraded following a safe process. They are:

- **Debt Allocator**: A module that will be called by the vault to see what’s the maximum debt it can send to a strategy. For example, an article is coming about how a group of contributors is using zk-STARKS to solve this in an optimal way.
- **Strategy Registry**: This will handle strategy adding and removing from the vault. It will be used mainly to allow strategy endorsement logic to be implemented (e.g. strategy endorsement is voted by YFI/yvToken holders) but can also include useful strategy metadata.
- **Fee Manager**: A module that will implement vault’s fee assessment logic. It will allow to use dynamic fees or different values per vault.
- **HealthCheck**: This module was introduced in V2. It allows to put guardrails to vault operation so that P&L reporting is always under acceptable values, unless explicitly forced. It will allow to specify that acceptable range and other rules for generic or specific strategies.

The first versions of these modules will just replicate V2 functionality (i.e. relying on multi-sigs). After launch, contributors will start iterating on them to decentralise strategy whitelisting and automate debt allocation.

### Periphery

There are some optional functions of the vault that will be integrated in a separate layer. They are not needed to operate a vault but they facilitate the creation of UI, tools or other protocols on top of Yearn.

- **yRouter**: a wrapper that handles deposits and withdrawals to/from vault.
- **Yearn Lens**: an information aggregator for off-chain apps.
- **APY TWAP Oracle**: a reliable source of Yearn vault’s past performance.
- **ySwaps:** strategies and other stakeholders can use the internal swap system currently being developed. This will reduce slippage and thus improve net APY.
- *or any other you can come up with! Start contributing now.*

## 2. Strategy <> Vault relationship

Robust core means that all the responsibilities it takes are correctly thought through. Things like P&L accounting should be very robust to reduce issues and don’t need to be reinvented every time. **Strategy writing should be as simple as possible and handle the lower amount of code possible**.

In V3, **the strategy <> vault relationship has been redesigned so that strategies will have reduced responsibilities and a very simple interface.** This means that the strategy writer just needs to implement functions with clear goals (e.g. *depositFunds()*, *freeFunds()*, *totalAssets()*, …) and **the vault will be in charge of managing the strategy**. This will reduce issues coming from strategies, like bad reporting or accounting.

These changes make it possible to **write a strategy without knowing all the details of the protocol** and allow for a **wider range of possible strategies**, like locking funds or strategies that are expected to earn in the long term but can loss some funds in the short term.

**Strategies are now independent of the vaults**. They can be created permissionlessly and be proposed to yvToken or YFI holders to endorse them.

Lastly, they now have more flexibility to do whatever they want as long as it conforms to the expected interface.

## 3. Other products: yJuniorTranches

**Several other products will come after V3**. Some are made possible by it, others have been initially thought as a V3 feature but decided to be stripped away for the sake of simplicity and robustness.

The one that is the most exciting in my opinion is what I call yJuniorTranches.

> In the finance world, junior tranches are the part of the capital that is used first in case of losses (aka first-loss capital). Because they get the losses first, they also get a proportionally bigger share of the profits. This makes them perfect for advanced users that can assess risks and take them in exchange of higher returns.

I will leave the details for a later post but very simply put: **yJuniorTranches will allow advanced users to provide first-loss capital to specific strategies**, getting part of their profit while allowing for yvTokens to keep being “only-up” yield bearing tokens.

The amount of first-loss capital provided to one strategy can also be used to determine the risk of the strategy and the amount of senior funds that can be taken by the strategy, informing the debt allocation process.

## Conclusion

YearnV3 is being worked on right now by a committed group of contributors and is anticipated to be finished later this year. The main focus is to continue doing what vaults do best but in a way that can reduce dependence on current contributors by furthering sustainable incentive mechanisms (aka new structure to support even further decentralisation).

**Robust Core will settle main code but Smart Modules is where the magic will happen in the next months. This means V3, at launch, will just replicate V2 behavior, then contributors will start working on implementing the “smart” logic in Smart Modules.**

After V3 release, new products thought prior or during V3 development will be gradually released. Stay tuned.

**If this long article got you excited, [contact me](https://twitter.com/jmonteer23) and I’ll help you start contributing to Yearn today.** Work on Smart Modules, Periphery, Testing, strategies, infrastructure is infinite so there are a lot of opportunities to contribute.

*Thanks to 16slim, anticlimactic, and Poolpitako*