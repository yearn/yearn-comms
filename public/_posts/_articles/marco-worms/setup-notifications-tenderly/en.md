---
title: "Setup notifications for blockchain transactions with Tenderly"
image:
  src: ./cover.jpg
  width: 1200
  height: 675
date: '2022-03-18'
author: Marco_Worms
translator: 
---

In the [article](https://medium.com/iearn/yearn-finance-partners-with-tenderly-to-supercharge-development-debugging-incident-analysis-6489260298a5) where Yearn announced a partnership with Tenderly there was a section where we mentioned:

> “Tenderly has built-in customizable alerts that allow even novice users to create alerts on virtually any on-chain event.”
>

A Yearn contributor reached out to learn more about this, and I think it’s a great opportunity to showcase this feature! Let’s start by taking a look at which networks can we use with Tenderly besides Ethereum Mainnet:

![](./image1.jpg?w=909&h=441)\
*Networks supported by Tenderly*

I’m going to explore the **“Monitoring -> Alerting”** service located at [Tenderly’s dashboard](https://dashboard.tenderly.co/) sidebar after logging into any project:

![](./image2.jpg?w=237&h=199)\
*Sidebar on the left side after logged-in*

There is a caveat to this service about free usage that will show up when you open the Alerting page:

`You’ll receive a batch of alerts that happened over 15 minutes. Upgrade your plan to Tenderly Pro/Dev to receive real-time alerts`

For testing, this isn’t a problem you so can proceed with the free version. For a more robust usage of alerts, you’ll have to upgrade your account.

Let’s start by checking everything can we do when trying to **create a new alert**. The article won’t explore all possibilities so take a look at them to understand the best usage for your needs:

![](./image3.jpg?w=1537&h=669)\
*Create alert*

- **Alert Type** will be the conditions we’ll set for a chain event to trigger a notification:

![](./image4.jpg?w=1437&h=413)\
*all Alert Types*

- **Alert Target** will be the contract monitored for the above events and conditions:

![](./image5.jpg?w=991&h=253)\
*all Alert Targets*

- **Alert Destinations** will be the places that will receive notifications when the above contract meets the conditions for an alert:

![](./image6.jpg?w=937&h=195)\
*all Alert Destinations*

Before creating a new alert we must first:

- Decide which events of which contract we want to be notified about
- Add the contract we want to listen to in the “Contracts” tab, so we’ll be able to target it in step 2
- Connect with destinations that will receive the messages (we’ll use telegram in this guide) so we’ll be able to send notifications to it in step 3

Now let’s get started!

### Add Telegram as a destination

In the alerting tab, go to “Destinations” on the top menu and click on “Telegram”:

![](./image7.jpg?w=1364&h=617)\
*Add Telegram as destination*

Label it and follow the instructions to allow the bot to send you messages:

![](./image8.jpg?w=591&h=475)\
*Follow instructions to allow the bot to send messages to you*

To complete the above process copy the “magic words” from instruction step 3. Paste it in the chat with Tenderly’s telegram bot that opens by clicking [@TenderlyRobot](https://t.me/TenderlyRobot).

![](./image9.jpg?w=772&h=235)\
*Confirmation message that the bot can now send messages in this chat!*

### Monitoring Yearn Vault deposits/withdrawals

Let’s start by monitoring some events made on the SPELL yVault on the Fantom Network. We need to know the SPELL yVault contract address, we can find it by going to the [Yearn Vaults interface](https://yearn.finance/#/vaults) and clicking on the SPELL vault.

![](./image10.jpg?w=625&h=287)\
*Yearn Vaults at Fantom*

After clicking on it we’ll see this page with all the vault details, click the “block explorer” button that will take you to the vault’s contract:

![](./image11.jpg?w=1157&h=757)\
*SPELL yVault details*

This will open up the [SPELL yVault Contract](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d) on FTMScan (Fantom fork of [Etherscan](https://etherscan.io/)):

![](./image12.jpg?w=1367&h=845)\
*[SPELL yVault Contract on FTMScan](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d)*

I highlighted the important information for our use-case in order:
- First the contract address
- Then the “Token Name” (helps when you have many contract tabs open)
- Lastly the history of methods (functions) that this contract executed

For our example, **we’ll add a notification for when anyone deposits tokens to the vault**. To do this copy the contract page URL:

https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d

Then go to Tenderly’s contract tab and click to import this contract in their dashboard, this will enable us to create alerts for it:

![](./image13.jpg?w=1399&h=681)\
*Importing contract in Tenderly*

Paste the address, select the “Vyper Contract” (name shows like this because Yearn Vaults use [Vyper programming language](https://vyper.readthedocs.io/en/stable/index.html)). When it shows up, click “Import”:

![](./image14.jpg?w=1155&h=909)\
*Importing contract in Tenderly*

After importing the contract is ready for us to create an alert for it!

![](./image15.jpg?w=865&h=467)\
*Importing contract in Tenderly*

Let’s go and create an alert then:

![](./image16.jpg?w=1817&h=713)\
*Creating a new alert*

We want to receive a notification every time someone deposits into the SPELL yVault. To do this we’ll check the “Deposit” method that exists in the yVault contract. “method” is an analogous name to “function call” so that’s the type of alert we’ll use in this case.

![](./image17.jpg?w=761&h=265)\
*Select alert type*

Target will be an address:

![](./image18.jpg?w=759&h=245)\
*Select alert target*

You’ll be able to select the contract we added previously and then pick any function that exists inside it. Note that many functions might have similar names, functions that start with “_” are often private internal functions and won’t be the ones we are looking for.
In this case, we have _deposit (private: for internal usage) and deposit (public: for external users). We’ll pick the one that is public:

![](./image19.jpg?w=1319&h=679)\
*Select alert target*

Lastly, choose the telegram destination that was set up previously and save the alert:

![](./image20.jpg?w=1325&h=909)\
*Select alert destination*

We are done! The alert is created and I’ll receive a message every time someone deposits SPELL in that yVault!

![](./image21.jpg?w=1521&h=739)\
*Alert created successfully!*

Here is an example notification I got after setting up this example and depositing a bit of spell in the vault to trigger it, I got the notification instantly after transaction confirmation!

![](./image22.jpg?w=495&h=579)\
*Notification of new SPELL deposit at Fantom yVault sent to my Telegram!*

## Final Thoughts

This Yearn example showcases a simple way to monitor for a contract’s function call. If you explore all the options from the alerting system you’ll see this can be easily tweaked to many different usages, for example:

- NFT collections devs can monitor whenever their contract called the minting of a new token and announce it automatically on Discord
- People monitoring Tokenomics flows can use notifications to keep an eye on wallet balances and actions from contracts to see if devs are doing what is expected to be done

You can monitor any kind of on-chain activity and be notified by it, so experiment with all the different options!
Producers: [Worms](https://twitter.com/MarcoWorms), Reviewers: [Cryptouf](https://twitter.com/cryptouf), [Dark Ghosty](https://github.com/DarkGhost7)
