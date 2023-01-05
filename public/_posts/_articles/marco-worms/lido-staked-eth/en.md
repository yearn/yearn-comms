---
title: "Yearn Strategies Case Study: Lido Staked ETH"
image:
  src: ./cover.jpg
  width: 900
  height: 625
date: '2023-01-06'
author: Marco_Worms
translator:
---

# Yearn Strategies Case Study: Lido Staked ETH

![](cover.jpg?w=900&h=498)

Last month we published a DeFi risk  [case-study](https://medium.com/iearn/measuring-risk-for-defi-yield-strategies-b53f62b83b92)  that used the lens of the  [Yearn Risk Framework](https://docs.yearn.finance/resources/risks/risk-score)  to analyze the risks involved in operating a yield strategy for the DAI  [Yearn Vault](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432). This article will use similar methods to look at the risks of investing in stETH (Lido Finance Staked ETH) using Yearn vaults and strategies.

To guide our journey, we will explore the risks for each layer until we reach the “steCRV yVault” that includes the risk of all parts, following these in order:

-   What is Proof-of-Stake yield?
-   What is Liquid Staking, Lido Finance, and stETH?
-   Overview ETH yVault
-   Overview steCRV
-   Overview steCRV yVault

One important thing to note: the  [Yearn Risk Framework](https://docs.yearn.finance/resources/risks/risk-score)  will give scores to strategy operation risks, not token-holding risks. So for example a strategy that invests token X in protocol Y will have risk scores tailored for protocol Y, but the risks for holding token X are on the user. By following through with all the above questions, we will be able to understand both the token-holding and operational risks for each step.

> _The_ [_Yearn Strategy Descriptions Glossary_](https://docs.yearn.finance/getting-started/guides/how-to-understand-strategies-descriptions) _might help you if you struggle with the DeFi lingo!_

# Proof of Stake yield and Validators

![](image1.jpg?w=900&h=498)

As of September 15, 2022, Ethereum started using the  [Proof-of-Stake (PoS)](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/)  process to validate new transactions added to the blockchain. The previous method, Proof-of-Work (PoW, required “validator nodes” to spend energy to validate transactions. In Proof-of-Stake, validator nodes use ETH deposited in it to validate transactions, achieving the same result.

Validators checks that new transactions propagated over the network are valid. When users stake (deposit) ETH in a validator node, they invest in the network’s security and help it keep functioning. In return, stakers are rewarded with new blocks reward emissions for new transactions validated.

ETH deposited in validators can be partly  [slashed](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing)  if the validator behaves dishonestly. Slashed ETH is mostly burned, and a small percentage of the slashed amount goes to the nodes that reported the misbehavior.

The Ethereum Foundation has a great resource on the  [types of staking](https://ethereum.org/en/staking/)  you can participate on:

-   **Solo home staking:**  Most impactful, Full control, Full rewards, Trustless.
-   **Staking as a service:**  Your 32 ETH, Non-custodial keys, Entrusted node operation.
-   **Pooled staking:**  Stake any amount, Earn rewards, Keep it simple, Popular.
-   **Centralized exchanges:**  Least impactful, Highest trust assumptions, Not your keys.

## Proof-of-Stake Risks

-   A user with 51% or more tokens for a PoS network can control it. To mitigate this risk, the tokens can be fairly distributed to ensure enough decentralization.  [“Fair Launch”](https://medium.com/@arjunblj/grin-and-the-mythical-fair-launch-395ca87a5e73)  methods contain their own set of risks since “fairness” is a subjective concept.
-   Part of staked ETH can be  [slashed](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/#slashing)  if a validator misbehaves. This adds a layer of risk when staking on someone else’s validator.
-   Proof-of-stake is younger and less battle-tested than proof-of-work.
-   Requires two separate software pieces to run a validator, which is more complex than PoW. Can lead to more software bugs.

The Ethereum community has agreed that the risks of PoS are worth it over the risks of PoW after years of discussion. If you want to receive Proof-of-Stake yield with no added trust assumptions and still provide the best value to the Ethereum network, then solo staking is the way but it requires the most knowledge and capital to start.

# Liquid Staking, Lido Finance, and stETH

!![](image2.jpg?w=900&h=498)

If you want to take part in Ethereum’s Proof of Stake process and  [do it yourself](https://ethereum.org/en/staking/solo/)  then there are a couple of key blockers that might prevent you from doing it:

-   Users need at least 32 ETH to make a solo validator node.

[Staking as a Service](https://ethereum.org/en/staking/saas/)  solves the above problem but:

-   ETH staked can’t be withdrawn, so it becomes illiquid for ANY other usage such as collateral or trading

To facilitate this  [Pooled Staking](https://ethereum.org/en/staking/pools/)  was created, and along with it,  [Lido Finance](https://lido.fi/)  created a new DeFi product:  **stETH**.

To understand stETH we need to know what is  **Liquid Staking**  first:

-   **Staking**  is when you lock your assets, maybe for a set period. In PoS this is done to help support blockchain security through the staking/slashing process.
-   **Liquid Staking**  is when the staking process gives you a receipt token that can be traded in the market, normally near 1:1 value of the staked token since you will be able to be redeemed for one in the future.

stETH is the liquid-staked version of ETH provided by  [Lido Finance](https://lido.fi/). To have stETH, one must deposit ETH in Lido’s platform, and it creates stETH on a 1:1 ratio for you. Lido stake all ETH deposited and splits yield with all stETH holders. The deposit operation can’t be reversed today, so if you want to go back from ETH to stETH you have to sell stETH in the market.

![](image3.jpg?w=900&h=498)

## stETH Risks

stETH doesn’t have a withdrawal mechanism today, so users depend on the market valuing stETH 1:1 with ETH, this price relation can trade at discount in case of a big sell-off. In contrast, Lido is a reputable protocol that you can track onchain where every single ETH is at. In case of price trading at discount it creates an opportunity for people to buy cheaper ETH, and most people today believe in the capability of Ethereum and Lido teams to deliver a withdraw function in the following years to come. Today’s bottleneck for staking withdraws is mostly on Ethereum’s side rather than Lido.

If you want to learn more, Lido  [explains all risks involved in stETH](https://help.lido.fi/en/articles/5230603-what-are-the-risks-of-staking-with-lido)  about the risks of:

-   Smart Contracts (can have bugs).
-   Ethereum Virtual Machine (can have bugs).
-   DAO management (can be mismanaged).
-   Validators (ETH can be slashed).
-   Market Prices (can make exiting stETH expensive if price trade at discount from ETH).

As of writing, Lido has about 4.7m ETH locked in them and $5.7b worth of circulating stETH:

![](image4.jpg?w=900&h=498)

In the next section we’ll see how Yearn evaluates the risk for depositing ETH in Lido to convert stETH, and learn the Yearn risk scores around it compared to the rest of DeFi yield strategies. stETH is considered one of the lowest-risk strategies, but it still contains many inherent risks (listed above).

# Yaern ETH Vault and stETH yield

!![](image5.jpg?w=900&h=498)

One way to be exposed to stETH is by using  [Yearn Vaults](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432). The benefit of using Yearn here is that you can deposit/withdraw wETH at any time in the  [ETH yVault](https://yearn.finance/#/vault/0xa258C4606Ca8206D8aA700cE2143D7db854D168c), and today it allocates about 1/3 of its funds into stETH, alongside other yield strategies.

There is another strategy in  [ETH vault active strategies](https://yearn.watch/vault/0xa258C4606Ca8206D8aA700cE2143D7db854D168c)  that also uses stETH. And it uses about 20% of the ETH yVault funds. This strategy “delegates deposits” to the steCRV yVault. In the Yearn ecosystem, a “delegate deposit” is when a yVault deposits in another yVault, and this can be seen in  [yearn.vision](https://yearn.vision/d/apkUMx6nz/vault-overview?orgId=1&var-networks=ETH&var-exp=false&var-vaults=yvWETH%200.4.2&var-address=0xa258C4606Ca8206D8aA700cE2143D7db854D168c&var-version=v2)  for every vault. In this case ETH delegates to “steCRV” vault (which will be explained in the next sections):

![](image6.jpg?w=900&h=498)

At  [yearn.watch/risk](https://yearn.watch/risk)  we can see the risk for both strategies.  **Lower Number = Less Risk**. You can see the meaning for each score in the  [Previous Article](https://medium.com/iearn/measuring-risk-for-defi-yield-strategies-b53f62b83b92)  and in  [Yearn Risk Framework](https://docs.yearn.finance/resources/risks/risk-score)  page.

-   This strategy just holds stETH ([stETHAccumulator_v2](https://yearn.watch/vault/0xa258C4606Ca8206D8aA700cE2143D7db854D168c/0x120FA5738751b275aed7F7b46B98beB38679e093)) (it got migrated from v1, so TVL score is not displaying correctly here since these are the scores for v1)

![](image7.jpg?w=900&h=498)

-   This strategy delegates to steCRV Vault ([single sided curve eth steth](https://yearn.watch/vault/0xa258C4606Ca8206D8aA700cE2143D7db854D168c/0xF9fDc2B5F60355A237deb8BD62CC117b1C907f7b))

![](image8jpg?w=900&h=498)

_In the below risk table, Bottom-to-top is the level of impact in case of a problem, left-to-right is the likeness that it can occur. Bottom-left is less risky, top-right is riskier:_

![](image9.jpg?w=900&h=498)

At the time of writing (percentages can change at any time!) when depositing ETH in the Yearn ETH Vault:

-   33% stays as stETH generating yield
-   21% is delegated to steCRV Vault (that we will learn about in the next section)
-   40% is switched between different lending strategies (this was the first strategy type that Yearn had)
-   The rest (6%) goes into other smaller strategies

## ETH yVault risks

Besides the risks of strategies taking a loss, which is mitigated by the “Yearn Risk Framework”, Yearn vaults also contain risks of their own. Since the ETH vault uses  [Lido](https://lido.fi/)  as part of a yield strategy, the risk scores include the Lido protocol. When we move on to steCRV we will see that this is different: Yearn will not include Lido in the strategy scores for steCRV because the yield strategy operations do not use Lido.

The full risk overview of using the ETH vault is the sum of the risk scores for its strategies plus inherent vault risks: (_Taken from the_ [_docs_](https://docs.yearn.finance/resources/risks/vault-risks))

![](image10.jpg?w=900&h=498)

# steCRV liquidity pool

![](image10.jpg?w=900&h=498)

We know what stETH is and how the ETH yVault uses it for yield, but there is another way to earn yield on top of stETH: the curve stETH/ETH liquidity pool. (see  [here](https://finematics.com/liquidity-pools-explained/)  to learn more about LPs)

In  [stETH+ETH](https://curve.fi/#/ethereum/pools/steth/deposit)  liquidity pool at curve people can:

-   Sell stETH to ETH
-   Buy stETH for cheaper than locking ETH at 1:1 on Lido (depends on market conditions)
-   Provide Liquidity stETH+ETH liquidity and earn trading fees

![](image11.jpg?w=900&h=498)

The token you get when depositing stETH+ETH to this liquidity pool is called  **steCRV**  ([address](https://etherscan.io/address/0x06325440d014e39736583c165c2963ba99faf14e)). This token is already a “yield-bearing” token since it represents an LP position that earns trading fees + CRV emissions. But there is one extra layer of yield that Yearn taps into to make the steCRV yVault, our next and last section.

![](image12.jpg?w=900&h=498)

A convenient feature found in  [Yearn steCRV vault](https://yearn.finance/#/vault/0xdCD90C7f6324cfa40d7169ef80b12031770B4325)  is the ability to skip doing all the above steps manually by using zaps:

![](image13.jpg?w=900&h=498)

[Yearn colabs with CoW Swap](https://medium.com/iearn/yearn-cow-swap-371b6d7cf3b3)  and  [portals.fi](https://app.portals.fi/)  to constantly improve the zaping operational security and efficiency. Here is an example zap from ETH but you can zap from other tokens too:

![](image14.jpg?w=900&h=498)

## steCRV risks

-   All inherent stETH and smart contracts risks
-   All liquidity pools have a risk of  [Impermanent Loss](https://academy.binance.com/en/articles/impermanent-loss-explained). This pool’s assets are supposed to be 1:1 in ratio, but if many people sell stETH and no one repurchases it before you exit the LP, then IL may occur.
-   Curve protocol  [risks](https://resources.curve.fi/faq/security#what-are-the-risks-involved)  (which will be covered next section of this article because the steCRV yVault risk score covers the Curve protocol)

# Yearn steCRV Vault

![](image15.jpg?w=900&h=498)

In the previous section, we saw that Curve’s role in this ecosystem is to provide the ETH+stETH Liquidity Pool. Because of  [Curve Wars](https://phemex.com/blogs/the-curve-wars-what-why), a protocol called  [Convex Finance](https://www.convexfinance.com/)  emerged, which builds a layer ontop of Curve.

The  [steCRV yVault](https://yearn.finance/#/vault/0xdCD90C7f6324cfa40d7169ef80b12031770B4325)  stakes steCRV in  [Convex](https://www.convexfinance.com/stake). There, it earns CRV and CVX yield. Earned tokens are harvested, sold for more steCRV, then deposited back into the vault (auto-compounded). This is a convenient operation since it maximizes the yield you can get from steCRV and automates harvesting in Convex. It also cost less gas overall per user because Yearn shares the operational gas prices with all vault depositors (like all other yVaults).

![](image16.jpg?w=900&h=498)

You could do this operation manually and not use yVaults though:

1.  Obtain stETH at  [Lido](https://stake.lido.fi/)  or swap at  [Curve](https://curve.fi/#/ethereum/pools/steth/swap)
2.  [Deposit](https://curve.fi/#/ethereum/pools/steth/deposit)  stETH+ETH on Curve, receiving steCRV
3.  [Stake](https://www.convexfinance.com/stake)  steCRV on Convex
4.  Periodically harvest rewards, sell them for more steCRV, and stake again in Convex

By delegating this operation to steCRV yVault you get the following:

-   Gas fees for operations are shared across all other users, which translates to higher yields
-   Harvest and compound are automated, which is convenient

## steCRV yVault risks

-   All inherent stETH, smart contracts, steCRV risks
-   Increased overall risk since there are more smart contracts involved (Convex adds another layer of  [risks](https://docs.convexfinance.com/convexfinance/faq/risks))
-   Yield harvest+compound schedules are controlled by Yearn

![](image17.jpg?w=900&h=498)

![](image18.jpg?w=900&h=498)

The overall risk score for this vault is higher than the other ones we looked at, meaning this set of yield strategies is one of the highest risk/reward Yearn has by its own standards.

# Learn More

![](image19.jpg?w=900&h=498)

Yearn strategy risks are complex to measure. The discussed steCRV yVault example showcases how any scenario, even when using only reputable protocols, must be taken seriously to protect users because of the high impact on the ecosystem. The more educated users, protocols, and devs are in assessing risk regarding strategies and other yield-generating operations, the safer DeFi will be for  _everyone_  to use it.

-   [Lido docs (risk page)](https://docs.lido.fi/guides/steth-integration-guide#risks)
-   [Curve docs (risk page)](https://resources.curve.fi/faq/security#what-are-the-risks-involved)
-   [Convex docs (risk page)](https://docs.convexfinance.com/convexfinance/faq/risks)
-   [Yearn docs (risk page)](https://docs.yearn.finance/resources/risks/protocol-risks)
-   [Yearn risk scores descriptions](https://docs.yearn.finance/resources/risks/risk-score)
-   [Yearn risk table](https://yearn.watch/risk)
-   [Yearn strategy descriptions glossary](https://docs.yearn.finance/getting-started/guides/how-to-understand-strategies-descriptions)
-   [Yearn vision yVault overview](https://yearn.vision/d/apkUMx6nz/vault-overview?orgId=1&var-networks=ETH&var-exp=false&var-vaults=yvWETH%200.4.2&var-address=0xa258C4606Ca8206D8aA700cE2143D7db854D168c&var-version=v2)
-   [steCRV yVault watch](https://yearn.watch/vault/0xdCD90C7f6324cfa40d7169ef80b12031770B4325)
-   [ETH yVault watch](https://yearn.watch/vault/0xa258C4606Ca8206D8aA700cE2143D7db854D168c)
-   [Yearn <> CoW Swap colab](https://medium.com/iearn/yearn-cow-swap-371b6d7cf3b3)
-   [Cobie blog on staking risks (beyond PoS)](https://cobie.substack.com/p/apecoin-and-the-death-of-staking)
-   [Balaji blog on fair launches](https://medium.com/@arjunblj/grin-and-the-mythical-fair-launch-395ca87a5e73)

Thanks to everyone that helped this article exist: _Farrah, Dark Ghosty, storm0x,_ [_Facu_](https://twitter.com/saltyfacu)_, @steve0xp,_ [_Draper_](https://twitter.com/draper_forms)_, Corn,_ [_Carvas_](https://twitter.com/0xCarvas)

> _All banner images for this article were made with_ [_Stable Diffusion_](https://medium.com/@marcoworms/conjuring-images-with-stable-diffusion-20f3e000a837)_, you can find the prompt specifications and images used for titles_ [_here_](https://hackmd.io/YeDrdsZrSyqYWhzQa6pp5Q?view)_, feel free to use any of the pre-generated outputs as yours!_

![](image20.jpg?w=900&h=498)
