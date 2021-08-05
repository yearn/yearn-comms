# O que você pode fazer com YFI?
Neste artigo, examinamos o que se pode fazer com seu YFI para obter rendimento em [DeFi](https://www.coindesk.com/what-is-defi), quais riscos estão associados a cada opção e o rendimento aproximado que você pode obter.

- Todos os valores de APY são de 27 de abril.
- Todas as posições que contraem dívida pressupõem um empréstimo a 70% da taxa máxima para poder suportar uma redução de 30% no preço YFI.
- Este não é um conselho de investimento. Interagir com os protocolos DeFi é arriscado, faça sua própria pesquisa.

___

## **Antes de começar, considere fazer um seguro para seu YFI com um seguro para DeFi**
Uma nota sobre o seguro para DeFi e como ele funciona. O seguro para DeFi cobre *principalmente* bugs no código solidity que levam a uma perda significativa de fundos para aquele protocolo específico. Mas certifique-se de ler a documentação do seguro Defi cuidadosamente para saber o que eles cobrem e o que não cobrem.

Por exemplo, digamos que alguém tivesse seguro para seu vault yearn, mas havia um bug com o código da MakerDAO e o CDP do vault perdeu alguns fundos por causa disso. Essa pessoa, tendo apenas seguro em Yearn, não seria capaz de reivindicar quaisquer perdas e seu seguro não pagaria neste caso. Isso porque não foi um bug nos contratos inteligentes da yearn que causou o prejuízo. Para obter mais informações sobre seguros, sinta-se à vontade para perguntar em nosso [discord](discord.yearn.finance) em #support.

### **Provedores de seguro DeFi**
- [Nexus Mutual](https://app.nexusmutual.io/#/SmartContractCover) 
    - [Documentation](https://nexusmutual.gitbook.io/docs/)
- [Cover Protocol](https://app.coverprotocol.com/)
    - [Documentation](https://docs.coverprotocol.com/)

___

## ***Depósito direto***
Esta seção aborda maneiras pelas quais você pode usar seu YFI sozinho. Métodos alternativos de geração de rendimento, como fornecer liquidez a um [formador de mercado automatizado (AMM)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers) podem exigir que você emparelhe seu YFI com outro token, o que pode comprometer sua exposição total ao YFI. Isso não quer dizer que seja livre de riscos, mas que você não terá que lidar com o que é conhecido como [impermanent loss (IL)](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi). *Ter fundos em contratos inteligentes sempre traz algum risco.*

### Yearn: v2 YFI yVault
O Yearn Finance YFI v2 yVault permite que você deposite o YFI e relaxe enquanto ganha rendimento nos melhores lugares para fazê-lo. No momento em que este artigo foi escrito, o vault atualmente abre um CDP e usa o DAI recém-criado para investir. Além disso, o yVault empresta YFI para CREAM e AAVE para obter mais rendimento.

#### Site
- [Yearn.Finance](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1) 

#### Ferramentas
- [Yearn Hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Este link mostrará quanto dos fundos no vault são alocados para quais estratégias.
- [Vaults at Yearn](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3): Aqui você pode ver o que cada estratégia no vault yvYFI v2 faz. 
- [Yearn Vision](yearn.vision): Painéis para estatísticas de vault.
- [Zap em v2 YFI yVault](https://zapper.fi/invest?protocol=yearn&contractAddress=0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1&modal=invest)

#### Risks
Atualmente, os riscos associados a este vault são risco de contrato inteligente para os contratos dos vaults de yearn (que são [auditados](https://github.com/yearn/yearn-security/tree/master/audits)), riscos MakerDAO CDP e, uma vez que uma estratégia empresta YFI para CREAM e AAVE para rendimento extra, risco de contrato inteligente para ambas as plataformas também . O vault tem monitoramento de seu CDP e mantém uma [proporção de integridade](https://medium.com/iearn/delegated-vaults-explained-fa81f1c3fce2)de 3, o que significa que ele irá emitir apenas 1/3 do máximo disponível para emissão em DAI e então usar esse DAI para investimento.

#### Insurance 
No momento em que este artigo foi escrito, para estar totalmente segurado no cofre YFI v2, você precisaria de cobertura para Yearn, MakerDAO, AAVE e CREAM. Você pode ser seletivo sobre qual cobertura comprar e pagar apenas pela cobertura dos protocolos que acredita serem arriscados. Você pode ver com quais protocolos este yVault interage para seguro no [yearn hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1).

#### APY
APY: 2.866% 
Calculation: Last month net, annualized.
Source: [vaults.finance: yearn v2 API](https://vaults.finance/all)
Sidenote: APY peaked for a time to 24%

This vault is the most up-to-date YFI vault from the yearn team and has proven that it can move quickly to jump into upcoming YFI farms for better yield if they are safe to be farmed, as they recently did with farming BDP: Big Data Protocol. 

- [Yearn.Finance: YFI Vault](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Yearn's vault page shows Weekly or Monthly APY based on a formula.  

___

## ***Direct Deposit, possible IL***
Some yield-generating techniques are designed to reduce the risk of IL, but not remove it entirely. An example of this is providing liquidity to the Bancor protocol. If funds are kept in Bancor for over 100 days, and they were exposed to IL, they would be subsidized with BNT at the time of withdrawal for the equivalent amount of value lost (which the user is free to convert back to YFI). In practice, this means that you don't have to worry about IL if you stake more than 100 days with Bancor.

### Bancor: YFI/BNT Single-Sided Protected Pool

Bancor is an AMM like Sushiswap and Uniswap, but with one key difference which was rolled out in Bancor v2.1. Bancor now has IL protection *if* you stay in the pool for longer than 100 days. This protection starts at 30 days and scales to full protection over 100 days. Currently, incentivized rewards for the YFI pool have stopped, but there is a [proposal](https://gov.bancor.network/t/proposal-re-enable-lm-rewards-on-yfi/1838) to bring them back, and if it gets approved it will mean higher yields on this YFI pool.


#### Site

[Bancor YFI Pool](https://app.bancor.network/eth/portfolio/stake/add/single/0xAeB3a1AeD77b5D6e3feBA0055d79176532e5cEb8)

#### Tools

- [Ceazor's Guide to Bancor v2.1: YFI/BNT Single-Sided Protected Pool](https://youtu.be/LhLMhizDNwE?t=23)
- [Bancor Documentation](https://docs.bancor.network/)
- [Bancor Dune dashboard](https://duneanalytics.com/Bancor/bancor_1)
- [Bancor v2.1 Staking for (DeFi) Dummies](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e)
- [Zap into YFI/BNT Single-Sided Protected Pool](https://zapper.fi/invest?protocol=bancor&contractAddress=0x555981b82743aa443cb1c3002c85ba9d795d4596&modal=legacy-invest)

#### Risks

Bancor smart contract risk and trusting the [bancor v2.1 model](https://blog.bancor.network/proposing-bancor-v2-1-single-sided-amm-with-elastic-bnt-supply-bcac9fe655b). Bancor is [audited](https://docs.bancor.network/ethereum-contracts/security).

##### Insurance 

For DeFi insurance, you would only need to insure Bancor to have full coverage in case of a smart contract bug that led to the loss of funds.  

#### APY

APY: 3.7% 
Calculation: Last month, annualized.
Source: Bancor Team

- [YFI Pool APY](https://duneanalytics.com/queries/30793/62118): Single click on each pool until only YFI is left. This will show APY stats for the pool. 

___

## ***[Collateralized Debt Position](https://defipulse.com/blog/what-is-a-cdp)***

CDP-based protocols allow you to deposit your YFI in exchange for a lesser amount of the protocol-issued token, which is usually a stablecoin. You can then use the issued token to farm and generate yield. Using this method is more time-intensive than the others and requires constant monitoring of the CDP to make sure you're above the liquidation ratio. Also, it requires you to use the stablecoins minted to find yield elsewhere and manage that as well. 

In this section, we use collateral ratio which is a percent. What this means is if the collateral ratio is 69%, like in Unit Protocol's case, then if the price of your YFI deposited for minting stablecoins is worth $1000, the max you will be able to mint in their stablecoin is $690. Note that this is the *MAX* you can borrow and if it goes above this ratio you will get liquidated -- we suggest you borrow far below this so that doesn't happen to you. 


### MakerDAO
MakerDAO is the oldest and longest-running Dapp for taking a loan out with your cryptocurrency. You can use your YFI at MakerDAO to mint DAI stablecoin and then use that DAI to yield farm with. 

#### Site
- [Oasis.app](https://oasis.app/borrow)

#### Tools
- [DeFiSaver](https://app.defisaver.com/): help manage your CDP health ratio

#### Risks
Risk of liquidation if your CDP goes above a collateral ratio of 57%, smart contract failure for Makerdao, oracle failure, and smart contract failure of the protocol where you deposit or lend out your DAI.

#### Insurance 
For DeFi insurance, you would need to insure MakerDAO and also the protocol where you lend out or deposit your DAI stablecoins to in order to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: -5.5% + (21.07% * 0.44) = 3.7708%
Calculation: Dai Fee - (Stablecoin Yield Farm APY (Zap to v2 crvIB yVault) * % of DAI you can mint and be safe). 
Sidenote: For borrowing DAI you need to pay a 5.5% annual fee to MakerDAO. This is an example but you could yield farm anywhere.
Source: [Oasis App Borrow - Select collateral type YFI-A](https://oasis.app/borrow)

### Unit Protocol
Unit Protocol is a CDP platform similar to MakerDAO, except this one, lets you mint USDP stablecoin instead of DAI. With Unit, they have a collateral ratio of 69% which is higher than MakerDAO and they have been audited, but they are a newer platform.

#### Site
- [Unit Protocol](https://unit.xyz/)

#### Tools
- [Documentation](https://docs.unit.xyz/)
- [Ceazor Video Tutorial](https://youtu.be/zlFBeoTHJUs?t=33)

#### Risks
Risk of liquidation if the collateral ratio exceeds 69%, smart contract failure for Unit Protocol, oracle failure, and smart contract failure for where you lend or deposit your USDP to. You can find their audits [here](https://github.com/unitprotocol/protocol_docs).

#### Insurance 
For DeFi insurance, you would need to insure Unit Protocol and wherever you lend out your USDP stablecoins to in order to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: -5.5% + (21.07% * 0.53)  = 5.67%
Calculation: 5.5 annual fee from unit + (yield from using the [v2 crvIB yVault](https://yearn.finance/vaults/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7) * % of USDP you can mint and be safe). 
Sidenote: You can use your USDP anywhere if you find a higher yield, we use the USDP vault at Yearn as an example.
Source: [Unit Protocol](https://unit.xyz/asset/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)

___

## ***Lending & Borrowing***


In this section, we cover the platforms that allow you to lend out your YFI, or to use your YFI as collateral to borrow stablecoins, or other tokens, which you can then use to farm with. This differs from opening a CDP which lets you mint stablecoins at a fixed yearly rate whereas lending and borrowing are usually variable rate. In this category, you have to not only worry about where to lend out the stablecoins you borrow but also both the borrow and lending rates as well as the utilization rate of the pool. If the YFI pool you are lending your YFI to is fully utilized, meaning people are borrowing every YFI that was lent, then you will have to wait to withdrawal until there is free liquidity in the pool to do so. 

### Cream Finance
Cream.Finance is a decentralized lending protocol. You can borrow stablecoins against your YFI for up to 50% of your total collateral. 

#### Site
- [Cream.Finance](https://app.cream.finance/)

#### Tools
- [Cream Documentation](https://docs.cream.finance/)
- [Ceazor Video Tutorial: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=598)

#### Risks
Risk of liquidation if you go over 50% collateral ratio, smart contract failure for Cream Finance, oracle failure, and smart contract failure for where you lend or deposit your stablecoins to. Also, you need to manually check that the APY on your yield farm exceeds that of your borrowing APY or you will lose money. You can find their audit [here](https://docs.cream.finance/audit-report).

#### Insurance 
For DeFi insurance, you would need to insure Cream Finance and wherever you lend out your stablecoins to in order to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: 0.27% - 18.81% + (60.30% * .39) = 4.977%
Calculation: Supply APY (YFI) - Borrow APY (USDC) + (Stablecoin Yield Farm APY (Zap to v1 crvEURS yVault) * % of stablecoin you can borrow and be safe). 
Sidenote: This is an example but you could yield farm anywhere.
Source: [Cream]([Cream.Finance](https://app.cream.finance/)) and [Yearn](https://yearn.finance/vaults/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC) Yields.

### Iron Bank
The Iron Bank is just like Cream v1, but they are more selective of the assets they list and they let white-listed protocols borrow funds with little or no collateral such as Alpha Homora v2 and Yearn Finance. Because protocols can borrow with little collateral, utilization rates in Iron Bank tend to be higher than at CREAM or AAVE. 

#### Site
- [Iron Bank](https://v1.yearn.finance/lending)

#### Tools
- [Iron Bank Documentation](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

#### Risks
Risk of liquidation if you go over the posted collateral ratio, smart contract failure for Iron Bank, oracle failure, and smart contract failure for where you lend your borrowed stablecoins out to. You can find their audit [here](https://github.com/trailofbits/publications/blob/master/reviews/CREAMSummary.pdf).

#### Insurance 
For DeFi insurance, you would need to insure Ironbank and wherever you lend out your stablecoins to, to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: 
Calculation: 
Source: 
Note: Currently you cannot borrow against your YFI on Ironbank but this could change in the future.

### AAVE
AAVE is another place where you can take a loan out on your YFI. You can borrow up to 40% in other coins at AAVE. AAVE has both fixed and variable rates for borrowing stablecoins, whereas at MakerDAO and Unit it is always 5.5%. It is possible to get a cheaper rate at AAVE for borrowing stables but you need to watch both your collateral levels and the borrowing rate if it is not variable when taking a loan out here.

#### Site
- [AAVE](https://app.aave.com/)

#### Tools
- [Ceazor Video Tutorial: AAVE v2](https://youtu.be/eMP_uIwniHc?t=46)
- [Ceazor Video Tutorial: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=407) 

#### Risks
Risk of liquidation if you go over 40% collateral ratio, smart contract failure for AAVE, oracle failure (uses Chainlink), and smart contract failure for where you lend your stablecoins out to. You can find their audits [here](https://docs.aave.com/developers/security-and-audits).

#### Insurance 
For DeFi insurance, you would need to insure AAVE and wherever you lend out your stablecoins to, to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: 0.11% - 3.98% + (60.30% * .31) = 14.83%
Calculation: Supply APY (YFI) - Borrow APY (TUSD) + (Stablecoin Yield Farm APY (Zap to v1 crvEURS yVault) * % of stablecoin you can borrow and be safe)
Sidenote: This is just an example. You can borrow any stablecoin and use it at the yield farm of your choice. 
Source: [AAVE - YFI](https://app.aave.com/deposit/YFI-0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5)

___

## ***Liquidity Providing***

This section discusses strategies that expose you to impermanent loss, and you also have to provide liquidity to both sides of the AMM pool. **If you want to stake YFI, you will also have to add an equal $ amount of ETH as well.**

### Sushiswap YFI/WETH Pool
Sushiswap is an AMM which generally has higher yields than Uniswap as its pools are subsidized with SUSHI rewards. 

#### Site
- [Sushiswap](https://app.sushi.com/yield)
#### Tools
- [YFI Sushi pools](https://analytics.sushi.com/tokens/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)
- [apy.vision YFI/ETH Sushi Pool](https://apy.vision/#/pools/0x088ee5007c98a9677165d78dd2109ae4a3d04d0c)
- [Zap into Sushiswap YFI/WETH Pool](https://zapper.fi/invest?protocol=sushiswap&contractAddress=0x088ee5007c98a9677165d78dd2109ae4a3d04d0c&modal=invest)

#### Risks
Impermanent Loss, smart contract risk for Sushiswap. 

#### Insurance 
For DeFi insurance, you would only need to insure Sushiswap to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: 39.08%
Calculation: Yearly APY from staking your YFI/WETH sushi SLP token at sushi.
Source: [Sushiswap Yield](https://app.sushi.com/yield)

### Uniswap v2 YFI/WETH Pool
Generally on AMM's such as Uniswap, Bancor, and Sushiswap you want to be in the pool with the most volume as that means more fees for liquidity providers. On average Sushiswap has more liquidity than Uniswap so generally, it would be better to LP there, but Uniswap could have better yields than Sushiswap.

#### Site
- [Uniswap YFI/WETH Pool](https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e)

#### Tools
- [Zapper Uni YFI/WETH](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)
- [IL Calculator for YFI/WETH Pair](https://app.sommelier.finance/pair?id=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&timeWindow=total): This can help show how much you will gain or lose if you started to LP in this pool at a certain date.
- [Uniswap Analytics YFI/WETH](https://info.uniswap.org/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Apy.vision YFI/WETH](https://apy.vision/#/pools/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Zap into Uniswap v2 YFI/WETH Pool](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)

#### Risks
Impermanent loss and smart contract risk are the concerns to be aware of when providing liquidity at Uniswap.

#### Insurance 
For DeFi insurance, you would only need to insure Uniswap to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: 20.79%
Calculation: Last 30 days annualized after subtracting IL.
Source: [apy.vision](https://apy.vision/#/pools/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)

### Pickle.Finance pSUSHI YFI/WETH jar
Pickle is a type of vault-like Yearn's (called jars) that will let you auto-compound your SUSHI rewards from the SUSHI YFI/WETH pool and they also give you PICKLE as extra rewards for staking with them.

To deposit with Pickle.Finance you need to stake your SLP (Sushiswap LP token) into their pickle jar [here](https://app.pickle.finance/jars) and then deposit it into their farm [here](https://app.pickle.finance/farms). You can now also lock PICKLE for DILL, boosting your PICKLE rewards earned in the farm by up to 2.5x.

#### Site
- [Pickle.Finance Farm](https://app.pickle.finance/farms)
- [Pickle.Finance Jar](https://app.pickle.finance/jars)

#### Tools
- [Dill boost calculator](https://app.pickle.finance/dill)
- [Ceazor's tutorial: Yearn Zap into yveCRV-ETH Pickle Farm](https://youtu.be/Q3HELI9TfjQ?t=25)

#### Risks
Impermanent Loss on the Sushiswap LP position, smart contract risk for Pickle.Finance and Sushiswap. 

#### Insurance 
For DeFi insurance, you would need to insure both Sushiswap and Pickle.Finance to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: 43% not boosted, 58% fully boosted. 
Calculation: APY, Fully boosted is boosted by locking PICKLE for DILL
Source: [Pickle.Finance Farms](https://app.pickle.finance/farms)

___

## ***Leveraged Liquidity Providing***
In this section, you can be subject to impermanent loss, and you will have to watch your debt ratios to make sure you are not liquidated.

### Alpha Homora v2
Alpha Homora v2 lets you take your Uniswap or Sushiswap LP token and deposit it with them to farm with up to 1.75x leverage. With Alpha Homora you can farm these pools with 1 asset (basically auto-zaps to the other asset in the pool), they automate all steps with 3 transactions, and farmed tokens in the pool get auto-compounded like at pickle.finance. In the same way that pickle.finance will give you PICKLE if you use their Farm product, if you use leverage to farm AMM pools (Uniswap or Sushiswap) Alpha Homora will give you ALPHA on top of the yield you would normally receive as shown [here](https://alphafinancelab.gitbook.io/alpha-homora/where-does-apy-come-from-for-each-pool). 

#### Site
- [Alpha Finance](https://homora.alphafinance.io/farm)

#### Tools
- [Documentation](https://alphafinancelab.gitbook.io/alpha-homora/)
- [Ceazor Video Tutorial](https://youtu.be/WKW8TsTyGOg?t=41)

#### Risks
Risk of liquidation if your debt ratio exceeds 60% LTV (Loan to Value), smart contract failure for Alpha Homora v2, smart contract failure for which pool you are leveraging (Uniswap or Sushiswap). You can find their audits [here](https://github.com/peckshield/publications/blob/master/reviews/PeckShield-Security-Review-Alpha-Homora-v1.0.pdf).

#### Insurance 
For defi insurance you would need to insure Alpha Finance and the AMM that you're using, to have full coverage in case of a smart contract bug that led to the loss of funds.

#### APY
APY: 75.38% 
Calculation: This is at 1.5x leverage on the Sushi ETH/YFI Pool. 
Source: [Alpha Homora - Farm](https://homora.alphafinance.io/farm)

