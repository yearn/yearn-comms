---
title:  "Yearn UI v3.0"
image:
  src: ./cover.png
  width: 800
  height: 450
date: '2021-09-17'
author: Dudesahn
translator:
---


# Yearn UI v3.0

### The next iteration of the yearn.finance UI is here

![](image1.png?w=800&h=450)

_v3 landing page design exploration_

We’ve rebuilt yearn.finance from the ground up. We’ve worked to address feedback and pain points from v2, and _a lot_ more. v3 is built with user experience, composability, and the multi-chain future in mind, and the beta is live now: [beta.yearn.finance](http://beta.yearn.finance).

## A vision realized

![](image2.png?w=300&h=398)

_v3 design exploration_

A few months after shipping yearn.finance v2 in January, Yearn contributors began a major rewrite with a vision of a fully-featured, scalable system built for the continually evolving DeFi landscape.

Today, this vision is finally coming to fruition with the new, rebuilt from the ground up, v3 beta being released today to both users and contributors.

We’ve carefully listened to community feedback and the most pressing pain points have been addressed. The rewrite goes far beyond this however, and features multiple additions and features which aim to greatly improve the user experience and simplify the entire process from beginning to end.

## Key Improvements

-   You can now see your total position, total historical earnings, and predicted yearly earnings, with vault deposits denominated in both the underlying token and $.
-   Any transaction through the interface, including zaps in and out of vaults, is simulated using [Tenderly](https://tenderly.co), showing you the estimated tokens received. No more unexpected slippage or mysteriously failing transactions.
-   Wallet page that allows you to easily zap into vaults or supply to Iron Bank with almost any token you hold.
-   Vault detail page view with historical vault earnings, underlying token info, and strategy descriptions.
-   New “Labs” section to serve as a home for more experimental vaults.
-   Fully integrated Iron Bank with dust-free loan repayments and withdrawals.
-   Completely redesigned experience for mobile.
-   Multiple UI themes, with unique unlockable themes for Yearn NFT holders coming soon. You’ll notice for all screenshots, the cyberpunk theme (find it under settings) is used.

Please keep in mind that this is a **_beta release:_**  nothing is final yet, and we plan to iterate over the next few weeks as we receive feedback and implement further refinements. If you’d like to provide feedback, head to our new [discord channel](https://discord.gg/Rw9zA3GbyE) created for v3 web UI feedback.

![](image3.png?w=300&h=354)

_v3 design exploration_

## Wait, which website is this again?

This is the new yearn.finance, which is maintained by a group of Yearn contributors. [yearn.fi](https://yearn.fi/) is a website maintained primarily by [Andre](https://twitter.com/AndreCronjeTech) and [Anton](https://twitter.com/AntonNellCrypto).

The sites are complementary; Anton implements features that we add (such as the SDK), and we plan to add new features that Andre and Anton release, such as the risk/protocol dashboard.

Read below for a **deeper dive** on the beta release (especially useful for B2B or potential integrators), and for future roadmap items at the end.

## Yearn web infra

Our new v3 front-end and back-end were designed with scalability and composability in mind, and can be divided up into multiple distinct components: **Lens, Meta, Subgraph, Exporter, SDK, and Front-end.**

We briefly describe each of them below:

### Lens

![](image4.png?w=800&h=500)

_Lens block diagram_

Yearn’s lens is a group of contracts that aggregate on-chain data to make it easily consumable. The lens includes an oracle, registries, address generators, adapters, and helper contracts. Lens contracts are configurable (allowing calculations to be added/updated individually), all adapters are extendable, and all storage variables can be updated. Lens provides information scoped to any user by asset or protocol, information scoped to a specific vault or Iron Bank market, and information scoped to the entire protocol.

#### Use cases

Important use cases for Yearn’s lens include on-chain user balances, vault balances, and TVL (all normalized to USDC via an on-chain oracle) for the entire Yearn protocol. In summary, lens serves as a simple integration point for any protocol or partner who wishes to pull Yearn data on-chain quickly.

[Lens source code](https://github.com/yearn/yearn-lens/)

### Meta

Yearn’s metadata repo is a simple framework that allows front-end vault settings to be tweaked very quickly without requiring any code editing. Yearn team members simply need to edit a JSON file that will automatically build and deploy the updated IPFS metadata files.

#### Currently supported schemas and features include:

-   Hide a vault from the UI
-   Disable deposit/withdraw and/or zap in/out for a vault
-   Indicate if a vault has an available migration to a newer version
-   Override APY values
-   Strategy name and description
-   Vault symbol, name, or token icon override
-   Underlying token symbol, name, or icon override

#### Use cases

-   Quickly configure many aspects of a vault even if you are not a programmer (still requires PR review)
-   Edit configuration in one place and all integrators are updated
-   Maintain control over token and vault names, icons, and symbols

[Meta source code](https://github.com/yearn/yearn-meta)

### Subgraph

![](image5.png?w=800&h=680)

_Earnings displayed in dashboard and for each vault_

The primary use case of Yearn’s subgraph is to aggregate and transform historical on-chain data and to make it easily queryable. As you can see in the image above, the subgraph is currently used to display:

-   User historical earnings scoped to a vault
-   Overall historical user earnings
-   Vault historical earnings (shown on vault detail page)

Since the earnings of each vault are not natively integrated at the contract level we use our subgraph to track events of deposits, withdrawals, and harvests which are then aggregated so earnings can be [calculated](https://github.com/yearn/yearn-sdk/blob/master/src/interfaces/earnings.ts).

Yearn’s ecosystem is inherently complex which means having a subgraph that provides large amounts of accurate data is difficult. As with all aspects of the website, the code is open-source, so if you notice any problems with your earnings feel free to let us know or submit a PR to the subgraph repo below.

[Subgraph source code](https://github.com/yearn/yearn-vaults-v2-subgraph/)

### Exporter

Yearn exporter functions as our primary API, and contains all APY and TVL calculations. It depends only on the on-chain data, and also provides tools for anyone to permissionlessly verify any measurable aspect of Yearn products. It supports exporting both realtime and historical data.

[Exporter source code](https://github.com/yearn/yearn-exporter)

### SDK

![](image6.png?w=800&h=638)

_SDK block diagram_

Yearn’s new SDK is the engine that powers our new v3 website, and the front-end was specifically designed around consuming data from the SDK. The SDK aggregates on-chain and off-chain data to serve front-ends and B2B integrations by fetching data from lens, exporter, subgraph, meta, and [Zapper](https://zapper.fi).

#### Use cases

-   V3 front-end
-   B2B integrators: vault management and configuration is taken care of for the integrator. An update in the data our SDK fetches means integrators are automatically taken care of.
-   Strategist dashboards

[SDK source code](https://github.com/yearn/yearn-sdk)

### Front-end

While the back-end infrastructure listed above generates the data needed, the front-end consumes it and presents it in a way that users can easily interact with it.

![](image7.png?w=913&h=696)

_v3 FE block diagram_

Our front-end code is divided in two different pieces: **v3 core logic** and **UI layer**.

The **v3 core logic** is meant to be easy to implement in any repo and is in charge of communicating with the SDK and other external data providers, not only by fetching data but also by making POST/WRITE requests. The core logic also models and feeds the UI with a more suitable and traditional data schema, combining all of the different pieces of data (vaults, tokens, user balances, etc).

The **UI layer** consumes the data directly from the core and displays it as desired in each repo. It can be broken down into five main pages, described below.

[Front-end source code](https://github.com/yearn/yearn-finance-v3)

![](image8.png?w=659&h=398)

_Closeup of side navbar and dashboard_

#### Home

The home page contains an overview of all of your assets in your wallet, as well as all three Yearn product categories: Vaults, Labs, and Iron Bank.

#### Wallet

The wallet view displays all assets in your wallet, their total value, and allows you to either deposit them to any vault or supply the tokens to Iron Bank if a market is available.

#### Vaults

Our new vaults page contains a dashboard with user info regarding vault deposits, recommendations (currently displaying highest-yielding vaults), underlying token balance, dollar value, and historical earnings for any vault deposits as well as current APY. Clicking on any vault will bring up the vault detail page.

#### Vault Detail Page

![](image9.png?w=800&h=554)

_Vault detail page_

The vault detail page is a unique URL for each vault (coming soon to labs) that displays vault TVL, APY, underlying token info, strategy descriptions, historical vault earnings, and allows users to deposit and withdraw.

#### Labs

One thing users will notice is that yveCRV, yvBOOST, and our yvBOOST-ETH pJar (a product launched in collaboration with [pickle.finance](https://www.pickle.finance)) are no longer on our vaults page. Instead, these have all been moved to our new Labs section.

What is Labs, you ask?

Yearn’s vaults were originally created with the idea of being “up-only”, and that users could withdraw at any time. As Yearn’s strategies became more sophisticated and we searched for new ways to generate yield, we realized that many strategies are not well-suited to this specific framework.

For instance, several strategists have been working on single-sided LP strategies. Between trading fees and staking incentives, the yield on funds in AMM LPs can be quite lucrative — but there is an obvious risk of impermanent loss and/or short-term drawdowns depending on market fluctuations.

Additionally, protocols like Bancor may require a 24-hour cooldown period to unstake funds. Previously, a requirement like this would break the “withdraw any time” aspect of vaults.

In labs, we allow more flexibility, and as long as users are aware of the conditions up-front, strategies will allow lock-ups and the potential for temporary losses in pursuit of increased, long-term sustainable yield.

#### Iron Bank

Similar to vaults and labs, Iron Bank shows a dashboard with relevant info, including total supplied, total borrowed, borrow limit used, and total borrow limit.

### Additional Features

![](image10.png?w=300&h=410)

_Simulation of a zap exceeding slippage tolerance_

#### Simulations

Before deposits, withdrawals, or zaps into or out of a vault **we use** [**Tenderly**](https://tenderly.co/) **to simulate the transaction.** This gives a lot of beneficial information to users before they even submit a transaction and commit to spending gas:

-   If the simulation is successful they’ll be able to see roughly the number of tokens that will be received.
-   If it’s simulated that the transaction will result in more slippage than the user’s tolerance (for zaps) then a warning will be displayed to the user with how much the actual slippage would likely be.
-   If the simulated transaction fails a warning will be displayed to the user.

In order to simulate a transaction, we first need to make a call to [Zapper’s API](https://docs.zapper.fi/zapper-api/api-guides/zap-in#check-zap-allowance) to see whether the user needs to approve the zap. If they do, then we create a Tenderly fork so we can preserve state between simulations. We then simulate the approval transaction, again using Zapper, to fetch the transaction data that needs to be simulated for the approval. After the approval simulation succeeds we then [fetch](https://docs.zapper.fi/zapper-api/api-guides/zap-in#zap-in) the transaction data for the actual zap and execute another simulation. Finally, we’re able to see the fully simulated data about the zap, without needing the user to approve it first.

Please note that a simulation will fail if you’re trying to simulate a transaction for which you do not have enough gas. Although we have tested them extensively, simulations are complex actions, so please pass on feedback if you experience any issues or failing simulations.

#### Mobile

![](image11.png?w=300&h=518)

_v3 mobile experience_

Another key requirement for the new website was full mobile support, something that was sorely lacking in the past.

The website now supports displaying all information from both a full-sized and mobile screen. This includes the user dashboard, search functionality, all action buttons (deposit, withdraw, supply, borrow), APY information, and transaction modals designed specifically with mobile layouts in mind.

While we don’t currently have a native Yearn app due to some App Stores’ restrictions, we’ve committed to providing a native-like experience on mobile browsers.

## Future Roadmap

![](image12.png?w=800&h=462)

_v3 design exploration_

### The Merge

Though not quite as dramatic as the merging of Ethereum’s PoW with PoS, the goal of launching v3 web as a beta was to establish full feature parity with our existing web UI before replacing it. In addition to a beta period to collect public feedback and catch bugs, here are some items we are in the process of implementing:

-   Labs page detail views
-   Hover tooltips to match v2 (APY, headers, etc)

### … And Beyond (post-merge)

-   New landing page with improved onboarding — **the sketches in this post are some of the pieces from our v3 design exploration.**
-   Historical APY for vaults
-   Historical protocol yield and user gas savings
-   Gasless zap out approvals
-   Gas cost estimations
-   Multi-language support
-   Integrate [yearn.fi](http://yearn.fi/) risk dashboard
-   Integration of [Bowswap](https://bowswap.finance/) to ease moving from low- to high-yield vaults
-   Ability to add custom skins
-   More detailed user position info on home page
-   Ability to hide dust on the wallet page
-   Several other things that we can’t announce yet, but will be going live very soon 👻

## A Word of Gratitude

![](image13.png?w=2000&h=1125)

_Yearn web team self-portrait_

None of this would be possible without the amazing Yearn community, including dozens of those who have submitted feedback/ideas over the past few months, our web advisor group, all contributors at Yearn, and especially the designers and engineers who worked tirelessly to make this new site a reality (many of whom are pictured in the artwork above).

If you’d like to help contribute in any way, come join our public [discord](https://discord.gg/8rF374XkXy), create an issue in one of the [repos](https://github.com/yearn) linked above, or share your designs with us on [twitter](https://twitter.com/iearnfinance)!
