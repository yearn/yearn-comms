---
title:  "yDaemon: one API to unify all yearn data"
image:
  src: ./cover.jpg
  width: 1000
  height: 500
date: '2022-10-16'
author: Marco Worms
translator:
---

![](./cover.jpg?w=1000&h=500)

yDaemon ([source](https://github.com/yearn/ydaemon)) is a yearn  [REST](https://restfulapi.net/)  API that provides a single unified interface to consume all relevant Yearn ecosystem data. The API data updates in near real-time thanks to the many daemons that it spawns in order to check data sources for changes:

-   Yearn  [**Subgraph**](https://medium.com/iearn/subgraphs-explained-yearning-for-data-4e90d18e33e)  (main source of historical data)
-   Yearn  [**Meta**](https://github.com/yearn/ydaemon/tree/main/data/meta)  (static data updated by yearn team, like strategy descriptions)
-   Yearn  [**API**](https://docs.yearn.finance/vaults/yearn-api)  (APY computations)
-   Yearn  [**Lens**](https://docs.yearn.finance/vaults/yearn-lens/)  (token prices)
-   Yearn  [**Risk Framework**](https://docs.yearn.finance/resources/risks/risk-score)  (soon)

yDaemon exposes 4 routes for you to work with data:

-   `[getSupportedChains](https://ydaemon.ycorpo.com/docs/routes/getSupportedChains)`: lists every valid  `chainID`
-   `[getAllVaults](https://ydaemon.ycorpo.com/docs/routes/getAllVaults)`: lists information all vaults for a  `chainID`
-   `[getVault](https://ydaemon.ycorpo.com/docs/routes/getVault)`: lists information for a single vault
-   `[getBlacklistedVaults](https://ydaemon.ycorpo.com/docs/routes/getBlacklistedVaults)`: lists vaults not included in yDaemon API

> `_chainID_` _is a unique number that represents a blockchain, for example Ethereum ID is 1._

The main routes to use are  `getAllVaults`  and  `getVault`, both work with the same vault object type the only difference is that one route returns information for a list of all vaults and the other returns for a single one. Some of the most important information that these routes are:

-   **Vault Data**: Address, Symbol, Name, Icon, Version, Creation Date, Last Update.
-   **Vault Underlying Token Data**: Address, Name, Symbol, Icon.
-   **Vault TVL**: Total Assets, Total Assets in USD, Value of Token in USD .
-   **Vault APY**: Gross APR, Net APY, Performance Fees, Management Fees, APY based on Weekly/Monthly/Lifetime performance, Curve APRs breakdown.
-   **Vault Strategies**: Address, Name, Description, Strategist, Total Gain, Total Loss, Total Debt, Debt Limit.

# Setup yDaemon locally

There are 2 ways to install and run it using either Docker or  [Manual Installation](https://github.com/yearn/ydaemon/blob/main/INSTALL.md), I will proceed with using Docker since it works with fewer dependencies in any OS:

1.  [Download](https://docs.docker.com/get-docker/)  and install Docker
2.  [Download](https://git-scm.com/downloads)  and install Git
3.  Create an  [Alchemy](https://auth.alchemyapi.io/)  or  [Infura](https://infura.io/)  account (or another RPC provider) and get RPC HTTPS keys for the blockchains you want to query data from. Fantom only has the  [public](https://docs.fantom.foundation/api/public-api-endpoints)  RPC
4.  Open your terminal and type  `git clone https://github.com/yearn/ydaemon.git`  to download yDaemon source code and  `cd ydaemon`  to enter the project’s folder
5.  Create a  `.env`  file containing the lines for the blockchains you want to query from, you don’t need to add URLs for the ones you don’t want to query:

RPC_URI_FOR_1=https://eth-mainnet.g.alchemy.com/v2/secret_secret_secret  
RPC_URI_FOR_10=https://another.rpc.url  
RPC_URI_FOR_250=https://another.rpc.url  
RPC_URI_FOR_42161=https://another.rpc.url

1.  In the terminal, type  `docker-compose up --build --detach`  to run yDaemon.
2.  To stop type  `docker-compose down`.

# Daemons

![](./image1.jpg?w=720&h=257)

To keep data up-to-date the API daemons are spawned on deploy and work in the following cadence:

-   Prices from the oracle are updated every 30 seconds for every tokens and vaults, since the price may change at every block.
-   APY information is updated every 10 minutes, as the underlying API is updated every 30 minutes.
-   Metadata is updated every day and whenever you deploy yDaemon API.

Each daemon knows how to fetch and handle data from a specific source and  [cache](https://ydaemon.ycorpo.com/docs/daemons/intro#cache)  it if needed, most data that doesn’t come from the Subgraph is cached on deployment and then periodically updated.

There is a  [**list of all Daemons**](https://ydaemon.ycorpo.com/docs/daemons/list)  at the docs. All daemons are written in  [Go](https://go.dev/)  and you can find them in the source code at the  `[daemons](https://github.com/yearn/ydaemon/tree/main/internal/daemons)`  folder.

# Query yDaemon

The public endpoint to use yDaemon is:

-   [https://ydaemon.yearn.finance/](https://ydaemon.yearn.finance/)

You can test the API  [endpoints](https://github.com/yearn/ydaemon#endpoints)  by changing the`:chainID`  and  `:address`  in the URLs below to what you want to query for

**getSupportedChains**: GET

-   Local:  [http://localhost:8080/info/chains](http://localhost:8080/info/chains)
-   Live:  [https://ydaemon.yearn.finance/info/chains](https://ydaemon.yearn.finance/info/chains)

**getAllVaults**: GET

-   Local:  [http://localhost:8080/:chainID/vaults/all](http://localhost:8080/:chainID/vaults/all)  |  [ETH](http://localhost:8080/1/vaults/all)  |  [OP](http://localhost:8080/10/vaults/all)  |  [FTM](http://localhost:8080/250/vaults/all)  |  [ARBI](http://localhost:8080/42161/vaults/all)
-   Live:  [https://ydaemon.yearn.finance/:chainID/vaults/all](https://ydaemon.yearn.finance/:chainID/vaults/all)  |  [ETH](https://ydaemon.yearn.finance/1/vaults/all)  |  [OP](https://ydaemon.yearn.finance/10/vaults/all)  |  [FTM](https://ydaemon.yearn.finance/250/vaults/all)  |  [ARBI](https://ydaemon.yearn.finance/42161/vaults/all)

**getVault**: GET

-   Local:  [http://localhost:8080/:chainID/vaults/:address](http://localhost:8080/:chainID/vaults/:address)
-   Live:  [https://ydaemon.yearn.finance/:chainID/vaults/:address](https://ydaemon.yearn.finance/:chainID/vaults/:address)

**getBlacklistedVaults**: GET

-   Local:  [http://localhost:8080/info/vaults/blacklisted](http://localhost:8080/info/vaults/blacklisted)
-   Live:  [https://ydaemon.yearn.finance/info/vaults/blacklisted](https://ydaemon.yearn.finance/info/vaults/blacklisted)

With the service up you can now query for vaults data, for example at Ethereum  `:chainID = 1`  let’s query the DAI vault  `:address = 0xdA816459F1AB5631232FE5e97a05BBBb94970c95`  by entering this URL in the browser (or query form any programming language):

-   [https://ydaemon.yearn.finance/1/vaults/0xdA816459F1AB5631232FE5e97a05BBBb94970c95](https://ydaemon.yearn.finance/1/vaults/0xdA816459F1AB5631232FE5e97a05BBBb94970c95)

Copy the returned text and paste it into something like  [json2table](http://json2table.com/)  so you can prettify the JSON. For example, we can see that management fees for this vault are now 0 (announced recently on  [twitter](https://twitter.com/iearnfinance/status/1565217164122103809)):

![](./image2.jpg?w=471&h=298)

# Filters

The  `getAllVaults`  might return a huge list so it has some query tools you can use to filter and reorder results:

-   `?skip=N`  will skip N vault from the graphQL query. Default is 0
-   `?first=N`  will limit the result to N vaults on the graphQL query. Default is 1000
-   `?strategiesDetails=withDetails`  adds more details to vault strategies
-   `?strategiesCondition=absolute`  removes strategies with 0 TVL

So if I want the listing result to return only 5 vaults, I can use  `first`:

-   [https://ydaemon.yearn.finance/1/vaults/all?first=5](https://ydaemon.yearn.finance/1/vaults/all?first=5)

If I’m building some sort of pagination system that shows vaults in groups of 5, I can ask for the next page using  `skip`:

-   [https://ydaemon.yearn.finance/1/vaults/all?first=5?skip=5](https://ydaemon.yearn.finance/1/vaults/all?first=5?skip=5)

Query vaults with complete strategy details only for strategies with 0 TVL:

-   [https://ydaemon.yearn.finance/1/vaults/all?strategiesDetails=withDetails?strategiesCondition=absolute](https://ydaemon.yearn.finance/1/vaults/all?strategiesDetails=withDetails?strategiesCondition=absolute)

See all available  [fillters](https://github.com/yearn/ydaemon#endpoints)

# Build with Yearn

If you are using yDaemon to build anything let our community know! Here are some useful links:

-   [yDaemon Github Repository](https://github.com/yearn/ydaemon)
-   [Yearn Documentation](https://docs.yearn.finance/)
-   [Yearn Partnership Documentation](https://docs.yearn.finance/partners/introduction)
-   [Yearn Community Discord](https://discord.com/invite/yearn)
-   [Yearn Community Telegram](https://t.me/yearnfinance)
