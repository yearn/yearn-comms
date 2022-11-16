---
title:  "Yearn <> CoW Swap"
image:
  src: ./cover.jpg
  width: 900
  height: 800
date: '2022-11-16'
author: Yearn
translator:
---


# Yearn <> CoW Swap

![](cover.jpg?w=900&h=218)

Yearn partners with CoW Swap

_tl;dr; After months of working on a yearn cowswap solver, we reached production ready code. Starting from today you will be able to do complex swaps in CoW Swap like,_ **_3CRV <-> yvSNX_**_.  
Yearn is committed to settle all strategies trades through CoW Swap and trying to get as much cows as possible to increase users revenue._

# Background

Typical Yearn strategies deposit capital into a protocol for yield and sometimes the strategy claims additional tokens which are converted to the user’s wanted token.

An example: There is a  **yvDAI**  strategy that is depositing  **DAI**  in curve’s  **3POOL**. The liquidity pool token is staked to earn  **CRV**. After some time, the  **CRV**  is converted to  **DAI**.

If you verify strategies’ code, you will see that often there is a hardcoded path on where to do rewards -> want trades. A typical approach is using a uni-v2 compatible smart-contract. While this approach is working fine, there are pitfalls:

-   Transaction fees
-   Optimal path is not static
-   MEV protected harvests are complicated
-   Can’t settle trades against other strategies and/or internal liquidity

We found out that working with CoW Swap would allow us to tackle our concerns and leap into the future.

# Decentralization

At Yearn we want to continue evolving our code to be as decentralized as possible. It would have been easy to set a path for a trade from an off-chain service, but we want to make sure we are not the only ones offering a solution. While we will participate in the orders bidding inside CoW Swap, the field is open for someone else to find a better solution and we encourage you to do it. The more competition in the CoW Swap ecosystem, the better settlements Yearn’s users will get.

# Weiroll

To improve our settlement prices we decided to invest in  [Weiroll](https://github.com/weiroll/weiroll). Weiroll brings the possibility of having a small virtual machine inside a smart contract. The big benefit for a solver is the possibility of chaining interactions without leaving dust behind.

Let’s use an example to explain its power. Let’s say we want to do the following trade:

**WETH -> yvSNX**

If we use the CoW Swap settlement contract, a solver would be sending a list of interactions which does the following:

1.  Approve  **WETH**  on 1 inch
2.  Swap  **WETH**  for  **SNX**  in 1inch
3.  Approve  **SNX**  in  **yvSNX**
4.  Deposit  **SNX**  in  **yvSNX**

There are two issues here.  
First, is it ok for CoW Swap’s settlement to approve third party contracts like 1inch and Yearn vaults?  
Second, the amounts in each interaction need to be hardcoded. The way solvers work is they simulate each interaction and instead of “deposit 100  **SNX**  in  **yvSNX**” it is actually “deposit xxxx  **SNXs**  in  **yvSNX**”.  
Our implementation moves tokens from the cowswap settlement to our Weiroll smart contract. There we send a weiroll execution which links the interactions. Basically, whatever the 1inch  **swap()**  call returns, we use it for the  **deposit()**  call in the yearn vault. Leaving no dust behind!

In the following image you can see an example of the settlement using Weiroll:

![](image1.jpg?w=900&h=218)

Weiroll being used inside CoW Swap

-   User sends  **WETH**  to CoW Swap settlement
-   Settlement sends  **WETH**  to TradeHandler (Weiroll powered contract)  
    — TH converts  **WETH**  to  **SNX**  
    — TH deposits  **SNX**  in the Yearn vault  
    — TH returns  **yvSNX**  to CoW Swap settlement  
    — CoW Swap settlement returns  **yvSNX**  to the user

If you want to start using Weiroll you have two flavor's available,  
a) js:  [https://weiroll.github.io/weiroll.js/](https://weiroll.github.io/weiroll.js/)  
b) python:  [https://github.com/fp-crypto/weiroll-py](https://github.com/fp-crypto/weiroll-py)

_PRO TIP: If you are running a safe multi-sign, you can use weiroll-py in conjunction with [ape-safe](_[_https://github.com/banteg/ape-safe)._](https://github.com/banteg/ape-safe).*)

# CoWs

Another big regret of using hardcoded trade paths in our contracts is the lack of settlements between strategies. An example of what’s possible from now on. In prod, we have the following two strategies:

-   A  **DAI**  strategy selling  **CRV**  for more  **DAI**
-   A  **yCRV**  strategy that claims  **3CRV**  and buys  **CRV**

These will generate the following orders:

-   SELL  **CRV**  for  **DAI**
-   SELL  **3CRV**  for  **CRV**

Today, Yearn’s cowswap solver will see these two orders and expand them as the following:

-   SELL  **CRV**  for  **DAI**
-   UNWRAP  **3CRV**  for  **DAI**
-   SELL  **DAI**  for  **CRV**

and there we have our internal CoW. Lowering the LP fee for both strategies and increasing revenue.

# Using Yearn internal liquidity

Having our own solver allows us to settle trade against internal liquidity from Yearn treasury. Yearn is doing  **YFI**  buybacks, why wouldn’t we do it through CoW Swap and CoWing?

# Matching deposit() and witdrawals()

Deposits to Yearn vaults are very efficient gas wise. Depositor transfers tokens to the vault, there are some internal information updated and done.  
For withdrawals, it depends. If the vault has a buffer, withdrawals are as cheap as deposits. If there is no buffer, the amount needs to be retrieved from strategies. If the amount requested is bigger than the buffer, the vault might unwind more than one position, costing the user a lot of gas.  
Now that CoW Swap understands Yearn tokens, a depositor can create a  **USDC**  ->  **yvUSDC** order and a withdrawer can create  **yvUSDC**  ->  **USDC**  and those two will be matched even when buffer is not present. Reducing user’s gas cost considerably for worst case scenarios.

# Strategies’ rewards as CoW liquidity

At the moment, strategies are harvested by keepers based on certain parameters in each strategy. Yearn’s CoW Swap solver will use that information to provide liquidity for CoWs. If someone is buying  **CRV**  for  **DAI**, and one of our strategies is ready to harvest, the solver will be able to work as a keeper and release the rewards to be cowed.

# Conclusion

Dinobots, the team inside Yearn in charge of this project, is extremely excited to be working with the CoW Swap team. Helping CoW Swap understand more complex orders, converts CoW Swap from a token dex to an intent dex. Some of our test trades have up to 7 different interactions which would take a long time for a user to do. Imagine pushing a bit forward, and using CoW Swap to rebalance a portfolio. It feels like a Layer 1.5.
