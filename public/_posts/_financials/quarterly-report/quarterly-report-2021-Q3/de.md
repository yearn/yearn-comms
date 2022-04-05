---
title:  "Yearn Finance 2021 Q3 Quarterly Report"
date: '2022-03-08'
image:
  src: ./cover.jpg
  width: 1500
  height: 500
author: Yearn
translator:
---

![](./cover.jpg?w=1500&h=500)

## For Q3- 2021

### DISCLAIMER

> The data, statements and information presented in this report is for informational purposes only, and it does not constitute financial or investment advice. Further, the financial statements presented have not undergone a comprehensive financial statement audit from a third-party professional accounting firm. As such, there may exist errors or inaccuracies that materially misstate the financial statements. We are not responsible for any financial losses or adverse outcomes that may result from making investment decision based on the data presented herein. Further, by viewing this report you agree that the statements in this report do not constitute a representation, warranty or guaranty regarding any matter, and you are not relying thereon, but will conduct your own due diligence. You hereby release, waive and relinquish any and all claims, causes of action and disputes against Yearn Finance, its contributors, and the creators of this document. THIS REPORT DOES NOT CONSTITUTE ADVICE FOR ANY PURPOSE.
> 
> The forward-looking statements in this report are subject to numerous assumptions, risks and uncertainties which are subject to change over time. There are many risk factors, including those relating to blockchain and cryptographic technology generally, as well as Yearn specifically, that could cause actual results or developments anticipated by us not to be realized or, even if substantially realized, to fail to achieve any or all of the benefits that could be expected therefrom. We reserve the right to change the plans, expectations and intentions stated herein at any time, and we undertake no obligation to update publicly or revise any forward-looking statement, whether as a result of new information, future developments or otherwise. ACCORDINGLY, WE RECOMMEND THAT YOU DO NOT RELY ON, AND DO NOT MAKE ANY FINANCIAL DECISION OR INVESTMENT BASED ON, THE STATEMENTS CONTAINED IN THIS UPDATE — INCLUDING BUT NOT LIMITED TO ANY SELLING OR TRADING OF YFI TOKENS, ETHER OR ANY OTHER CRYPTOGRAPHIC OR BLOCKCHAIN TOKEN.

---

## Table of Contents

- Introduction to Yearn Finance
- Income Statement
- YFI Buybacks
- Balance Sheet
- Total Value Locked
- Interactive Financial Dashboard
- Sources

---

## An Introduction to Yearn Finance

![](./image1.png?w=1456&h=733)

Yearn Finance (“Yearn”) is the leading yield-aggregator protocol in decentralized finance (“DeFi”) operating on the Ethereum blockchain. The protocol launched in early 2020 with the iEarn product that algorithmically shifts stablecoins (USDC, USDT, DAI) between several lending protocols in DeFi to obtain the most optimal interest rates at all times. This product is known as the yPool on Curve Finance. Curve is a decentralized stablecoin exchange focusing on low-slippage swaps between various stablecoin assets. In July 2020, the YFI token was distributed over approximately 10 days to users that provided capital into liquidity pools involving the yPool – a process known as “farming” or “yield-farming”. The YFI token governs the Yearn protocol.

Shortly after the distribution of the YFI token the yVault product offering was introduced. yVaults enable users to deposit capital into smart contracts and Strategists – specialized yield-farming experts – automatically and efficiently earn yield on behalf of the depositors. Gas costs are socialized across the entire pool making it more economical for small users to participate in yield- farming. Users also do not need to have an advanced knowledge of DeFi, yield-farming, or liquidity providing, as the Strategist will perform the necessary actions on behalf of the user. Profits from yield-farming are periodically harvested by the Strategist and deposited back into the vault; depositors have claims over these profits. The yVault product represents Yearn’s core business, but starting in early 2021 Yearn Treasury began engaging in yield-farming with its own assets to generate additional cash flows.

Yearn engaged in a series of partnerships in the fall of 2020, forming the Yearn Ecosystem. These partnerships include SushiSwap (Automated Market Maker), C.R.E.A.M (lending), Keep3r Network (automated job platform), Akropolis, and Pickle Finance (yield-aggregator). While the protocol specified above in conjunction with Yearn Finance comprise the Yearn ecosystem, the YFI token does not govern the other protocols in the ecosystem.

Version 2 of the yVault product was launched in early 2021 and includes a revised fee schedule and the ability for vaults to incorporate multiple strategies per vault. Version 1 yVaults are only able to employ one strategy per yVault.

---

## Adjusted EBITDA for **Q3-21 was $11.6m** and Yearn experienced continued revenue generation from its yVault product offering in the quarter.

![](./image2.jpg?w=613&h=706)

### Basis of Presentation

The financial statements are presented on an accrual basis of accounting. The fiscal year for Yearn ends calendar year ending December 31st. Figures are displayed in United States dollars (“USD”) and rounded to the nearest thousand. The financial statements are compiled with the use of estimates and non-USD assets are converted to USD by obtaining closing prices from Coingecko.com, or by obtaining prices directly by querying the Ethereum blockchain. The financial statements have not undergone a comprehensive financial audit by a professional third-party accounting firm. They are intended for informational purposes only and should not be used for financial, investment, or advice of any kind. There may contain immaterial arithmetic errors in the tables presented, this is due to rounding.

- The cryptocurrency market experienced large declines in price in late May continuing to early July, however, Yearn was still able to generate meaningful and consistent revenues for the quarter. yVault revenue trended upwards as the cryptocurrency market rebounded.
- yVault revenue was $8.1m in August and mirrored the revenues generated in Apr-21 ($8.7m) and Jun-21 ($8.1m), which were among Yearn’s most profitable months in YTD 2021.
- By Sep-21, nearly all revenue generated from Yearn vaults was derived from it’s v2 yVault product offering. v2 yVaults are more advanced, resilient, and sophisticated providing more vault for Yearn’s users.
- In late Jun-21, Yearn’s Treasury began to substantially decrease yield-farming earned on assets held in Treasury to protect assets from potential liquidations due to volatile market conditions in the market. However, in Sep-21 Treasury started to earn yield on idle assets in Treasury and generated $266k in revenue from these activities.
- Previous financial reports and data shared did not include strategist fees due to the difficulty in quantifying and calculating them. But with increased financial sophistication we are now able to calculate and quantify these amounts. As a result, prior months revenue were grossed up (increased) to display amount of revenue earned before strategist fees, as well as quantifying the amount of fees paid to strategists.
- Cost of revenue includes variable expenses directly related to revenue generation of the core Yearn product. These include Strategist fees, gas costs related to deploying and maintaining new and/or existing strategies, and payments to Yearn Partners. Fees charged on Yearn vaults include 2% for assets under management (AUM) and 20% of gross revenue. 10% of gross revenue generated is awarded to Strategists and the remaining 10% to Yearn treasury.
- Protocols in DeFi can join the Yearn Partners program and share in revenue generated in Yearn vaults for any capital these protocols add to Yearn products. These payments are typically made 1 month in arrears and we have accrued for them accordingly. For Q3-21, approximately $781k has been paid to eligible participants of the Yearn Partners program.
- Yearn contributors are eligible to receive YFI as part of a vesting compensation plan. This vesting was approved by Yearn governance with YIP-57: Funding Yearn’s Future. YFI is vesting monthly for 3 years after the contributor commences work with Yearn. Yearn is able to claw back unvested YFI in the event the contributor ceases to work for Yearn for any reason. Contributor vesting is expensed in accordance with the accrual basis of accounting, however, since it is a non-cash expense it is excluded, among other items, to arrive at adjusted EBITDA
- Administrative salaries are cash payments made to full-time Yearn contributors. There was a slight increase in salaries as the Yearn team is expanding to provide a higher level of service and innovation for users of the Yearn product.
- Security expenses consist of bug bounties and smart contract audits. In Jun-21 Yearn paid out a $201k bug bounty to a security researcher, which consisted the majority of the security expenses for the quarter.
- Grants include payments made to the Coordinape program and other one-time grants to contributors of the Yearn ecosystem. In Jul-21, approximately $697k worth of YFI tokens (23.32 YFI) was paid to four contributors that assisted in the completion of YFI Story. YFI Story is a written book celebrating the 1 year anniversary of Yearn and covers Yearn’s history since launch. Coordinape is a novel decentralized community grants program to rewards part-time contributors within the Yearn community. Full-time Yearn contributors vote each epoch on YFI to award to these part-time contributors.
- Administrative salaries, Coordinape payments, and grants are typically paid one month in arrears. As such, we have accrued these payments to account for them in the month earned but not paid. This is consistent with the accrual basis of accounting.
- Other operating expenses comprise of all other expenses that do no fall in the above categories related, but not limited to UX/UI improvement costs, infrastructure costs, promotional event costs, and any other unforeseen expenses incurred by the protocol. On a very limited and periodic basis users of Yearn vaults experience losses either through their error or other unforeseen events. Yearn reimburses these users and bears the costs. $87k and $338k was reimbursed to users in May and June, respectively. We anticipate periodic losses to occur in the future, but do not expect these costs to be large relative to top-line revenue.
- Other income/(expenses) is interest expense associated with Yearn’s yield-farming activities with Treasury assets. Interest is charged on any debt borrowed from decentralized lending protocols in DeFi. We accrue this interest expense as it occurs in accordance with the accrual basis of accounting.
- Adjusted EBITDA excludes interest, taxes, depreciation & amortization, and various non-cash expenses (such as token-based compensation) or non-recurring items.
- Yearn generated strong adjusted EBITDA in Q3-21 despite the decline in top-line revenue for the quarter related to unfavorable market conditions in the cryptocurrency space. We anticipate continued EBITDA growth for Q4-21.

---

## Yearn’s operating margin for Q3-21 was 68% and the majority of costs are associated with contributor compensation, primarily Strategists fees.

![](./image3.jpg?w=964&h=687)

### Key Drivers of Financial Results

- Presented in the chart above is the key financial drivers for Q3- 21 for adjusted EBITDA. Items adjusted include, interest, taxes, depreciation & amortization, non-cash expenses (contributor vesting), non-recurring items (airdrops, donations, one-time unforeseen losses, and capital gains/(losses)).
- Majority of the expenses are related to Strategist fees, salaries, and grants necessary to maintain and develop the protocol.
- Other operating expenses is primarily unforeseen advents affecting users that are reimbursed by Yearn.

---

## yVault revenue rebounded strongly in Aug and Sep-21, after comparatively low revenue in Jul-21 due to adverse market conditions in the cryptocurrency space.

![](./image4.jpg?w=620&h=691)

- The table presented above only displays the top 25 yVaults sorted by total revenue for Q3. Yearn has launched over 125 yVaults included vaults phased out and no longer in production.
- yvUSDC is our most profitable vault as of Q3 YTD and has generated $4.2m YTD for the Yearn protocol. The yvUSDC vault uses several strategies including a leveraged folding strategy on Compound Finance and AAVE. Additionally, Abracadabra Finance enables users to mint MIM (Abracadabra’s stablecoin) on their platform using the yvUSDC vault token as collateral. We experienced higher revenues starting in Aug-21 as users deposited into the yvUSDC vault to perform this activity.
- The yvDAI vault continues to be a core component of the Alchemix protocol and has attracted and retained TVL for this purpose. Users of the Alchemix protocol deposit DAI into our yvDAI vault earning yield. Alchemix enables these users to obtain a line of credit in the form of alUSD, a synthetic token native to the Alchemix protocol.
- Our most profitable ETH yvault was yvStETH which earns CRV rewards from the StETH liquidity pool on Curve Finance. CRV rewards are periodically harvested and used to purchase more of the underlying tokens in the vault. ETH depositors can earn with minimal exposure to impermanent loss (IL). This vault represents among the best risk- adjusted way to obtain yield on Ethereum without significant IL risks.
- The majority of our yVaults are focused on Curve Finance strategies by earning CRV
rewards and depositing into liquidity pools on Curve.

---

## The full-time contributor slightly expanded in Q3 as Yearn onboards more contributors to maintain existing and create new innovative products.

![](./image5.jpg?w=698&h=272)

- As of Q3-21 there were twenty-six contributors of the Yearn DAO assisting in development, operations, marketing, and/or legal services.
- The majority of Yearn contributors are developers that maintain Yearn’s products.
- Administrative salaries for Q2-21 was less than 4.5% of gross profit generated for the quarter.
- Salaries are typically paid one month in arrears and we have accrued these expenses in the month they were earned.

---

## Yearn continues to reward part-time contributors using its novel Coordinape decentralized grant payment program.

![](./image6.jpg?w=782&h=162)

- Coordinape continues to reward part-time Yearn contributors with YFI tokens each month. For Q3-21 the amount distributed to Coordinape participants increased to roughly $73-78k worth of YFI tokens each month.
- The Coordinape program is open to anyone and we encourage individuals to contribute to the Yearn protocol and be rewarded for their work. Coordinape is a decentralized grant selection and disbursement model. Previously awarded grant recipients and full-time contributors are each allocated 100 GIVE tokens. These tokens can be allocated to contributors in the Yearn ecosystem. Salaried contributors are ineligible to receive grants. The Coordinape budget, approved by the yBudget team, increased in Q2 and as of June 2021 is approximately $58k per month.
- You can access Coordinape here: https://coordinape.com/
- Grants expenses were higher in Jul-21 as Yearn incurred expenses related to the creation of YFI Story. The contributors that helped create YFI Story were paid in YFI tokens, which are a non-cash expense to the Yearn protocol, i.e., YFI was paid from Treasury instead of cash payments to these recipients.

---

## Yearn has purchased 130.50 YFI since beginning its buyback program in November 2020.

![](./image7.jpg?w=741&h=619)

- YIP-55: Buyback and Build Yearn was approved in November 2020 and replaced the earning distribution model (staking) with a buyback model. Earnings after covering overhead costs are used to buyback YFI on the accrue to Yearn’s Treasury.
- The yBudget team determines monthly budgets for YFI repurchases based on a monthly earnings analysis. YFI accrued to Treasury is used to incentivize future contributors (vesting), cross-protocol initiatives, or potential future liquidity mining programs and is determined by the yBudget and yPeople teams and ultimately executed by the Multisig.
- Yearn continues to repurchase YFI each month with protocol earnings unless a new YIP changes this policy.
- Q2 and Q3-21 saw meaningful YFI buybacks from Treasury and we anticipate this will continue in the foreseeable future.

---

## Yearn owns approximately $159m in assets held in Treasury, and as of September 2021 has no net debt (outstanding debt less cash).

![](./image8.jpg?w=781&h=619)

- **Cash & cash equivalents** – Management fees and performance fees owed to the Yearn protocol are sent to Yearn Treasury in the form of the yVault liquidity provider (“LP”) token. Over time, Yearn’s Treasury naturally builds up a reserve of these tokens as more yVault revenue is generated to the protocol. The yBudget team has consistently been building up Yearn’s cash balances in order to sustain operations and create new innovations regardless of market conditions in the cryptocurrency space. The large cash buffer also insulates Yearn from any unforeseen events that may lead to decreased revenues from the yVault product offer.
- **Accounts receivable** – Represents earned but unharvested revenue generated from Yearn Treasury's yield-farming. Yearn ceased yield-farming activities in Jun-21 but began earning yield on idle assets in Sep-2021. There was no accounts receivable in Jun through August as Yearn harvested and realized all earnings related to yield-farming activities.
- **Inventory** – Yearn’s internal yield-farming committee began earning yield on assets held in Treasury. These items are the line of credit borrowed from MakerDAO or Unit.xyz in order to yield-farm. All debt was repaid in June 2021, which is why there is no inventory. In Sep- 2021, Yearn opened a collateralized debt position (CDP) on MakerDAO and drew $13m in DAI to use for yield-farming activities.
- **Prepaid expenses & security deposits** – Prepaid legal or infrastructure costs incurred from Alchemy and legal service providers. In Aug-21, Yearn paid $1m to a legal service provider to help advise Yearn on future legal matters. We have amortized this payment equally over 12 months. Security deposits are related to the Alchemy service agreement.
- **Other short term assets** – Profits from various miscellaneous Yearn yVaults, such the yvCurve-LINK or yvCurve-Tricrypto. Periodically Yearn treasury sells these assets and uses the proceeds to purchase more YFI on the open market. We expect this activity to continue and increase the YFI held in Yearn’s treasury.
- **YFI** – Treasury owned YFI obtained from both the addition YFI minted in Feb-21, in accordance with YIP-52, and on-going YFI purchases with protocol earnings. As of June 2021, Yearn Treasury owns approximately 4,047 YFI. This balance is escrowed for future contributors, cross-protocol initiatives, and any potential future liquidity mining programs.
- **ETH** – Ethereum or Ethereum based vault tokens held by Treasury. Periodically Yearn Treasury sells ETH and Ethereum based vault tokens and uses the proceeds to purchase YFI in the open market. We do consisntely maintain some ETH on the balance sheet to pay for gas costs related to using the Ethereum blockchain.
- **BTC** – Bitcoin based vaults held by Treasury earned from performance fees related to these applicable vaults. These vault tokens are periodically sold and the proceeds used to purchase YFI in the open market.
- **Other long term assets** – Consists of the KP3R/ETH liquidity pool required to generated credits needed to pay keepers performing harvesting functions for Yearn yVaults. The market value, including any impermanent losses. We do not anticipate selling these assets in the near future as they are necessary to pay generate keeper credits used to harvest profits generated by yVaults.
- **Accounts payable** – Accounts payable are due to service providers (mainly auditors) or Yearn Partners. . Accounts payable was elevated in May-21 due to accrued, but unpaid payments owed to Yearn Partners. These balances were paid in June 2021. Further, payments to Yearn Partners are normally paid one month in arrears which is why there are continued balances each month thereafter.
- **Accrued expenses** – Primarily earned but unpaid salaries, coordinape payments, or grants to Yearn contributors. Payments are typically paid one month in arrears, and as such we have accrued these payments in the months owed to contributors. This is in accordance with the accrual basis of accounting.
- **Interest payable** – Accrued but unpaid interest related to debt related to Treasury yield- farming operations described above. Interest is accrued in accordance with the accrual basis of accounting.
- **Long term liabilities** – Debt owed to MakerDAO and Unit.xyz related to the Treasury yield- farming. Unit debt was completely paid off in June 2021. As of Sep-21, Yearn only owes debt to MakerDAO related to the CDP opened by Yearn Treasury. Yearn uses the proceeds from this loan to earn yield on idle YFI held in Treasury. Yearn Treasury may close and repay this CDP to protect capital in the event of volatile market conditions. However, Yearn has sufficient cash balances to fully repay this debt at any time without selling any other assets.
- **Equity** – includes accumulated other comprehensive income related to valuing assets held on Yearn’s balance sheet to fair market value (FMV) at month-end.

---

## Yearn Total Value Locked exceeded $5.0b as of September 30th, 2021, and has shown strong continuous growth.

![](./image9.jpg?w=714&h=654)

- Yearn TVL surpassed the all-time-highs in Q3-21 that were set in Q2-21, and had over $5b in TVL.
- The majority of our TVL is derived from our v2 yVault product line. In late May and throughout June we transitioned a significant portion of our v1 vaults to v2 vaults. We no longer support v1 vaults and encourage all depositors to migrate to v2 vaults.
- Iron Bank is Yearn’s in-house lending platform that is in collaboration with C.R.E.A.M. Finance. We continued to see growth in Iron Bank TVL from Q1 to Q2.
- Yearn has over $5b in TVL **without any token subsidies** or other incentives typically offered by competing protocols in DeFi.
- *Note: The chart presented above is as of September 30th, 2021.*
- Source: Github: [yearn/yearn-exporter](https://github.com/yearn/yearn-exporter)

---

## We continue to make improvements to our financial dashboard displaying transactions, an Income Statement, and a Balance Sheet

![](./image10.jpg?w=1058&h=611)

- Our financial dashboard is public to give community members more granular information related to financial transactions affecting Yearn’s operations. You can view transactions by month, token, category, and various other filters.
- Please note that this dashboard is displayed on a cash-basis of accounting, whereas the financial statements presented in this report are on an accrual basis of accounting. Specifically, the dashboard does not account for accounts receivable, accrued interest, unrealized capital gains and losses, or other accrual based items.
- The financial dashboard has not been audited by a professional third-party accounting firm and is intended for information purposes only. It is not to be used for financial, investment, or advice of any kind.
- You can access the dashboard at https://www.yfistats.com/financials/financials.html

---

## Sources

- Revenue and expense data was obtained from token transfers between several addresses controlled by the Yearn protocol. These Ethereum addresses are listed below.
    - Treasury vault: [0x93a62da5a14c80f265dabc077fcee437b1a0efde](https://etherscan.io/address/0x93a62da5a14c80f265dabc077fcee437b1a0efde)
    - Multi-sig: [0xfeb4acf3df3cdea7399794d0869ef76a6efaff52](https://etherscan.io/address/0xfeb4acf3df3cdea7399794d0869ef76a6efaff52)
    - Governance staking: [0xba37b002abafdd8e89a1995da52740bbc013d992](https://etherscan.io/address/0xba37b002abafdd8e89a1995da52740bbc013d992)

- Token prices were obtained from Coingecko, a historical price provider of all major cryptocurrencies, or by running an archive Ethereum node and querying prices directly from the blockchain.

- Please contact the team either via Telegram or discord for any specific questions.
    - [t.me/yearnfinance](https://t.me/yearnfinance)
    - [https://discord.com/yearn](https://discord.com/yearn)
