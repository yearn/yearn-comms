---
title:  "Hacking with Yearn"
image:
  src: ./cover.jpg
  width: 900
  height: 450
date: '2022-05-05'
author: Farrahmay
translator: 
---

### 📣Yearn Finance is calling on hackers, developers, and creatives to build on top of our protocol!

![](cover.jpg?w=900&h=450)

### Whether you are building an innovative dapp or launching a yield strategy, there are no shortage of ways to build on top of Yearn. This guide will provide you with resources to get you started hacking on Yearn.

### We will cover 1- vault and smart contract integrations, 2- front-end and SDK integrations, 3- strategy development, 4- data analytics, and lastly provide a host of examples to get you inspired.

# What is Yearn?

Yearn Finance is a suite of decentralized finance (DeFi) products that let users optimize their earnings on crypto assets through lending and trading services.

Yearn’s core product is the  **Vault**  (also known as yVault) — a set-it-and-forget-it yield aggregator running on top of DeFi’s yield-generating protocols like Compound, Aave, Curve, and Convex.

Vaults, in essence, are pools of funds with an associated yield strategy for maximizing returns on the asset in the vault. Vault strategies are more active than just lending out coins. Most strategies can do multiple things to maximize the returns, including supplying collateral and borrowing other assets such as stable coins, providing liquidity and collecting fees or farming other tokens and selling them for profit.

**Because of the Vault’s open design, you can incorporate the generated yield as a design component of your project.**

# DeFi and Hacking

DeFi is slowly finding its way into every facet of the blockchain space. Whether you are building a P2E game, an NFT project, or DAO tooling, it is s likely that there is a DeFi functionality you can incorporate to build a better product.

> With Yearn, you can incorporate yield generation into your product, without having to build a a yield strategy from scratch.

Yearn Vaults are built with open standards and many projects have leveraged available vault integrations to build amazing applications on top of them.

**Common use-cases:**

-   **Using Vaults as collateral for lending/borrowing**
-   **Using Vaults to generate yield with user funds**

# Integrating with Yearn’s Vaults

## **Getting Started**

Check out our dev docs to  [set up your machine](https://docs.yearn.finance/developers/v2/getting-started).

## How to Integrate with the Vaults?

The most simple integration with Yearn is redirecting funds from a service into a yVaults in order to generate yield for your users on assets that otherwise wouldn’t generate yield. This opens up exciting new functionalities within your product or application.

## _Background_

-   _Written in Vyper 🐍_
-   _They are an ERC20, so you can — Transfer, Swap, use them as collateral, and everything you do with other tokens._
-   _Keep track of your shares (amount, price per share)_
-   _Immutable code managed by Yearn Governance_
-   _A vault can run multiple strategies at the same time 😱_
-   _Keep3rs integrated 🤖_

**Figure 1. You can interact with yVaults through depositing or withdrawing.**

![](image1.jpg?w=900&h=368)

![](image2.jpg?w=900&h=368)

Learn more about the implications of both of these methods  [here](https://docs.yearn.finance/partners/integration_guide)

## Starter Kit

Here is a detailed example for integrating V2 vaults and ERC-4626. We’ve created a SugarVault, where a holder can donate yields to a second address with both VaultAPI and 4626 examples.

[](https://github.com/storming0x/ystarter-foundry-kit)

## GitHub - storming0x/ystarter-foundry-kit: Starter Kit for integrating V2 yearn vaults and ERC4626…

### Basic example Solidity Smart Contracts for integrating with Yearn Vaults. Both V2 and ERC4626 interfaces. ERC4626…

github.com

**What you’ll find in the kit:**

-   Basic example Solidity Smart Contracts for integrating with Yearn Vaults for both V2 and ERC4626 interfaces.
-   ERC4626 adapter to wrap yearn vaults.
-   Example Contracts
-   Sample test suite.

## Workshop

Learn how to leverage the power of Yearn by creating a money making integration on top of v2 vaults by taking advantage of the brand new EIP-4626: Tokenized Vault Standard! This workshop will guide you through creating a B2B/business router for yearn v2 vaults, which complies with the new EIP-4626. You’ll be able to choose from multiple fee strategies for your users to maximize your profit.

To get a glimpse of Yearn’s current vaults and smart contracts, peruse t[his repository](https://github.com/yearn/yearn-vaults#readme)  to view the set of smart contracts that are used for the Yearn Vaults. It contains the requirements, code, deployment scripts, and tests necessary for the core protocol, including an inheritable template strategy for use with Solidity-based strategies that interact with Yearn Vaults. These contracts are used to create a simple way to generate high risk-adjusted returns for depositors of various assets via best- in-class lending protocols, liquidity pools, and community-made yield farming strategies on Ethereum.

## Playground

We have set up a test environment for you deploy and test your vaults. Access it here:  [https://hack.yearn.finance/](https://hack.yearn.finance/)

-   Deploy your vault with your own token
-   Mint your own tokens
-   Hack!

## Additional Resources:

-   [https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens](https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens)
-   [https://github.com/yearn/yearn-integration-hardhat](https://github.com/yearn/yearn-integration-hardhat)

# Web and SDK Integrations

Yearn uses a JavaScript SDK for formatting protocol data and generating transactions for reading/writing protocol data. Yearn SDK integrates several components, both on-chain and off-chain.

[The repository here](https://github.com/turtlemoji/yearn-sdk-examples)  contains a live preview and example usage of the  [Yearn SDK](https://github.com/yearn/yearn-sdk).  _Explore this codebase to learn how to start interacting with the Yearn protocol in your own app!_

## Live Preview Sandbox

-   [Click here to go to the live preview sandbox](https://codesandbox.io/s/github/turtlemoji/yearn-sdk-examples/tree/main/)

![](image3.jpg?w=900&h=284)

[](https://github.com/turtlemoji/yearn-sdk-examples)

## GitHub - turtlemoji/yearn-sdk-examples: Created with CodeSandbox

### This repository contains a live preview and example usage of the Yearn SDK Explore this codebase to learn how to start…

github.com

**Additional Resources:**

-   [https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack)

# Building a Strategy

A Yearn Strategy is a set of smart contracts that implement different farming strategies that utilize the deposited assets to generate the best yields for users.

Strategy implementation entails essentially moving assets from one farming application to another one with higher interest. This will be mostly done automatically. Rewards/profits generated by strategies are regularly updated, harvested, swapped for the original vault asset, and deposited again for compound farming. Each vault has a unique strategy and the strategy will be improved constantly based on the observations of our monitoring engines.

By having a strategy, users only need to deposit single assets and let the strategies generate profits from the funds.

Yearn automates the whole compounding process, making it as close to optimal as possible. The compounding frequency depends on different variables in the system such as Total Value Locked (TVL), and Annual Percentage Rate (APR).

![](image4.jpg?w=900&h=819)

## Getting Started:

**Additional Resources:**

-   [https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md](https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md)
-   [https://github.com/yearn/brownie-strategy-mix](https://github.com/yearn/brownie-strategy-mix)

# Data Analytics

Yearn aims to provide more insights on our products to our customers and partners through analyzing the on-chain and off-chain data. Given that all Yearn protocol data is publicly stored on-chain, there are lots of insights to be gained from analyzing these transactions.

Two common tools for on-chain data analysis are:

1.  **Dune Analytics- Query contract data and generate dashboards with SQL**

-   [Current Dashboards](https://dune.com/projects/yearn)

Here’s a list of all new things you can query for:

-   harvests
-   deployments
-   transactions
-   contract_tokens
-   contract_strategy
-   v2_deployments

Fiddle with them all at  [https://dune.com/queries/625814](https://dune.com/queries/625814)

**2. The Graph- Query contract data with GQL using the Yearn subgraphs**

The Graph is a decentralized protocol for indexing and querying data from blockchains, starting with Ethereum. It is an easier way to retrieve specific data from the blockchain, within the ethos of web3, with the advantages of decentralization and reliability.

GraphQL is the underlying query language used in The Graph.

What is the difference between standard RESTFUL API calls and GraphQL calls? The difference is that traditional APIs require the developers to create specific endpoints for users that return specific data. If the user requires more information, they may need to make multiple API calls, sometimes hundreds of API calls, to get the information they require. With The Graph (which uses GraphQL), only one call is needed to a subgraph, as long as the developer has created a flexible schema.

-   [https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet](https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet)
-   [https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql](https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql)

# Some of the research questions that we are interested in:

-   Screening profitable liquidity pools for our strategies
-   Assessing the impact of TVL on the impermanent loss
-   Screening the volume of various pools
-   Providing risk metrics to our vaults
-   Price volatility of the underlying token
-   Addressing the protocol risks
-   Optimizing our strategies according to the change in gas fees
-   Decide on when to deleverage and trade the governance tokens
-   Decide on when to harvest
-   Predicting impermanent loss for Uniswap V3 pools
-   Portfolio construction across yearn products  
    More details on these topics can be seen in our issues tab.

**Data Sources**

**Yearn SDK**  [Docs]  
[https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack)  
If you are not sure about which service you should first look into, Yearn SDK can provide you with addresses of contracts and endpoints of yearn’s services.

**Yearn API**  [Docs]  
Yearn API can provide non-user specific metadata, including the tvl of vaults, apys, fees, and strategy metadata through REST API, without the need to make web3 calls.

**Yearn Vision**  
Yearn Vision is the Grafana dashboard of the hosted version of Yearn Exporter. You can download the historical metrics related to our vaults and strategies as json or csv files through the dashboard. For instructions on downloading, please see Downloading query results as csv.

# Inspiration

Common use-cases for vaults include:

-   Using Vaults as collateral for lending/borrowing
-   Using Vaults to generate yield with user funds

_In both cases, the protocol integrating with yearn is rewarded with performance fees taken from the vault’s overall profits, the more total volume that a partner contributes to a vault, the bigger share of the profit they receive._

Hundreds of protocols have built exciting functionalities using Yearn’s integration methods. These include:

-   Alchemix provides self-repaying loans using vault yields
-   Abracadabra provided the first yVault leveraging system that allows users to take loans and keep the yield rolling
-   QiDao provides 0% interest loans if you use yVaults as collateral

Here are some ideas on what you can build:

1.  Use the Vaults as collateral to borrow money and probably get some leverage. (e.g. Abracadabra)
2.  Build a product that allows you to use yield to do cool stuff:  
    donate yield to an NGO  
    invest the yield in more risky stuff or directional bets  
    paying bills and subscriptions
3.  Create a metavault on top of multiple vaults. One idea that comes to my mind is having a USD metavault that deposits into multiple dollar pegged vaults based on some strategy and abstracts the complexity from the user.
4.  Build a UI that accepts deposits and allows you to move assets across chains.
5.  Use the vaults as a place to earn interest on funds that are not currently actively being used by the user.

# Examples

[**Bunker Finance**](https://bunker.finance/): Bunker.finance is a decentralized protocol for NFT-backed loans. They integrated with Yearn v3’s USDC and WETH vaults and use them as a place to earn interest on funds that are currently not being supplied to borrowers.

[**Skew You**](https://github.com/Tburm/tracer-vault): Users can borrow against their options collateral, unlocking a whole new world of capital efficiency.

[**Possum**](https://github.com/Possum-ONE)  Fixed-income product that can turn every farm into two fix/variable pools. Based on the game model, fixed pool users can have guaranteed APY while the variable user gets higher APY with higher risk.

[**Demon**](https://demon-finance.netlify.app/)  Demystifying obscure APY numbers

[**Bowtie**](https://github.com/ShayanJa/bowtie_finance)  Allows users to borrow against their options collateral.

Additionally, doing a GitHub search for Yearn functionality you are interested in implementing is a good way to find working code examples.

# Additional Resources

**DevDocs:** [**https://yearn.github.io/yearn-devdocs**](https://yearn.github.io/yearn-devdocs)

**yearn-vaults:** [**https://github.com/yearn/yearn-vaults**](https://github.com/yearn/yearn-vaults)

**BaseRouter:** [**https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol**](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol)

**BaseWrapper:** [**https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol**](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol)

**Wrapper-mix:** [**https://github.com/yearn/brownie-wrapper-mix**](https://github.com/yearn/brownie-wrapper-mix)

[**Article**](https://medium.com/iearn/yearn-partners-building-with-yvaults-4cd042ea092)**: Yearn Partners– Building with yVaults**

[**Video: Into to Yearn Vaults**](https://www.youtube.com/watch?v=a1TsO62402c)

**Article:** [**Strategy Vetting and Endorsement**](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d)

[**Video**](https://www.youtube.com/watch?v=NVR3teJw0Y0)**: Become a mighty strategist!**

[**Tweet: Getting a Strategy to Prod**](https://twitter.com/flashfish0x/status/1460246273488044036?s=20&t=kxak7a6qtrmDCfcn6UrGYA)
