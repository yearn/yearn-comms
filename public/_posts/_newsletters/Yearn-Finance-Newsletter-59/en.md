---
layout: post
title: "Yearn Finance Newsletter #59"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1152
  height: 576
author: Yearn
date: '2022-04-06'
translator: 
---

### Week Ending April 5th, 2022

![](./image1.png?w=1456&h=733)

Welcome to the 59th edition of the Yearn Finance Newsletter. Our aim with this newsletter is to keep the Yearn and the wider crypto community informed of the latest news, including product launches, governance changes, and ecosystem updates. If you’re interested in learning more about Yearn Finance, follow our official [Twitter](https://twitter.com/iearnfinance) and [Medium](https://medium.com/iearn) accounts.

## Summary

- Introducing Our Newest and Most Powerful Vault
- Talking Strategies with Facu at ETHDubai
- Joining the Yearn DAO: Onboarding
- How Yearn Uses Tenderly
- Yearn Contributors
- YFI Boarding School
- Vaults at Yearn 
- Ecosystem News

# Introducing Our Newest and Most Powerful Vault

![](./image2.png?w=900&h=473)

Our newest Curve Rocket Pool vault is live, and you can earn ETH staking rewards on 2 sides of a Curve Finance pool with Rocket Pool ETH (rETH) and Lido stETH (wstETH). Since both sides of the pool are liquid staking ETH tokens, you’ll earn Ethereum staking rewards, $CRV emissions, and Curve trading fees. Yearn will automatically harvest and re-deposit CRV and CVX emissions into the vault to boost your yield.

Use Yearn Zaps to deposit any major token ($ETH, $USDC, etc.) into this vault. Zaps will automatically convert your deposit to rETH+wstETH, pool it on Curve and stake it on Yearn in a single transaction.

Or you can enter Curve Rocket Pool manually by depositing Rocket Pool ETH (rETH) + Lido stETH (wstETH) on Curve or by depositing your rETH+wstETH LP tokens on Yearn.

Embark now at [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults)

# Talking Strategies with Facu at ETHDubai

![](./image3.png?w=1024&h=512)

At the recent ETHDubai event, Yearn contributor saltyfacu goes over the general essence of strategies at Yearn, our core business.

He discusses the relationships between Vaults, which are ERC-20s written in Vyper, and Strategies, the accounting part of Yearn written in Solidity. Strategies do all the heavy lifting for the Yearn ecosystem, and for example, yvUSDC is a vault which employs up to 20 strategies. 

Strategies each carry a different capital allocation and can be attached without capital. The flow here is that users interact with vault tokens, which have underlying strategies to interact with other protocols and dexes.

To write a strategy, you will need git, eth-brownie, ganache, the brownie-strategy-mix repository, and VS code. In terms of experience, you will need some programming knowledge, completion of CryptoZombies level 4 and above, understanding of how DeFi protocols interact, and a lot of willpower.

Completing and publishing a strategy takes six steps: due diligence, coding, peer reviewing, experimenting (with ape tax vaults), core dev reviewing/safe farming committee, and then production. After all of this, you must stay and monitor the strategy to make sure everything works as intended.

Check out the full lecture [here](https://youtu.be/ooYgIMlqITQ?t=21266), starting at timestamp 5:54:26.

We invite you to engage, give feedback, and participate in the Yearn community by joining us on [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), or [Github](http://github.com/yearn). Come build with us.

# Joining the Yearn DAO: Onboarding

![](./image4.png?w=1024&h=768)

In this article, Cryptouf and Farrahmay offer a primer into the onboarding process of joining a DAO, specifically Yearn. Read below for a summary of their dialogue.

What should a new contributor keep in mind when they make the decision to join a DAO? They will need to research the DAO they are joining and its ethos.

Given the influx of new people to web3 everyday, I imagine there might be an outpouring of new contributors across channels like Discord, Telegram and Twitter. What does Yearn do to set up contributors for success? We find it important to make our mission and goals clear, which we hope will attract the right people to contribute at Yearn

Onboarding can mean different things to different DAOs. How do you define DAO onboarding? Does Yearn have a formal onboarding plan for new contributors? Our onboarding process utilizes the 4 Cs of onboarding – compliance, clarification, culture, and connection.

What should contributors do to make sure they are successful when joining a DAO? Each person who joins a DAO will have varying levels of Web3, DeFi, engineering, DAO knowledge and familiarity. Successfully contributing in a DAO requires one to be a self-starter and not be afraid to speak up and ask questions.

The first wave of contributors joining a DAO were less concerned about compensation, but instead focused on building the framework and foundations of a DAO. As new waves of contributors join, compensation is a critical factor to ensure individuals feel rewarded and can commit the time needed to help the DAO grow long term. Yearn uses Coordinape to reward its members for their contributions. Can you share more information on how Yearn Finance uses Coordinape and any pros/cons of the tool? Coordinape is a tool for DAOs to incentivize, reward, and leverage their community contributors.

Coordinape has a feature to vouch people, so all members have the option to add someone. This feature is amazing for decentralization, but the more members a circle has, the more this feature can be gamed, and members can vouch for their friends. What is Yearn doing to avoid this ? Some members may be involved for a few months, and then leave the DAO or just be less active for a few months (for any reason !). In a utopian world, members should clearly report this to other members in order to receive less rewards, or would even opt-out, so they are not rewarded when they didn’t work during some times. But is it really the case? Any tool can be gamed, and Coordinape is no exception.

Check out the full article [here](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc). Special thanks to the writer Cryptouf and Yearn contributor Farrahmay for their insights.

# How Yearn Uses Tenderly

![](./image5.png?w=1200&h=675)

Law students have adderall. Yearn strategists have Tenderly. With monitoring, alerting, debugging and incident analysis tools, Tenderly turns hardcore DeFi users everywhere into superhumans.

But it’s so simple, anyone can use it. In his latest post, Yearn contributor MarcoWorms walks you through the process of setting up Telegram alerts for virtually any on-chain action across all the leading EVM blockchains. Zero coding required.

Click [here](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba) for a real-world example. There, Worms shows you exactly how to set up a Telegram bot that monitors deposits and withdrawals from the $SPELL yVault and alerts you as those transactions happen.

What comes next is up to you.

# Yearn Contributors

![](./image6.jpg?w=800&h=510)

If Yearn values one trait more than any other, it is a willingness to act. It's so ingrained into Yearn’s culture, we call our most active contributors *Doers*. It's a noun and a descriptor, but it's more than that… it's a commandment to act.

As a decentralized DAO, Yearn has no bosses, no dress codes, no track for promotion or golf outings with the CEO. Yearn has only contributors. As with any DAO, there are varying levels of participation.

On the first level, there are users, token holders, voters, and investors. A layer deeper, there are contributors – people all over the world who actively spend time on one or more of Yearn’s many projects.

Contributors align their efforts (and get compensated if they choose) via the DAO coordination tool created at Yearn: Coordinape. There, contributors break off into circles and vouch for one another’s efforts each month. Some work on Yearn an hour a week; some several hours a day. Tasks are not assigned but sought out. And there is no rigid silo where contributors are forced to stay.

They can cross boundaries to help other circles: from engineering to graphics, translations to strategies, writing to planning events. Contributors come in all shapes and sizes, from all geographies. They are animators of the fantastic, experimental coders, and round-peg PMs united by a feeling that the time for change has come. With every contribution, they deepen their bonds of trust within the DAO.

Many work full-time jobs elsewhere. Some contribute to half a dozen DAOs. But all are drawn by their passion for what Yearn’s building. When a contributor wants to go all-in they might become a Doer.

But what does that mean exactly? Doers contribute with more regularity. They help orchestrate all the moving pieces of the grand machine. They’re not employees. But rather they’re what the name describes: they’re Doers.

They do the things Yearn needs to do to evolve and grow and change. They run into walls. They tear them down. They build what others merely talk about. Like all of Yearn’s contributors, Doers do not accept the status quo. They’re agents of change. They’re explorers. They’re seekers. They’re builders. And they believe there’s a Doer inside all of us. 

Industrialism and corporations have spent generations suppressing the will to do. They would have us ask before we act. They confuse analysis with progress. They commission consultants to develop fancy roadmaps. They set markers and milestones for every inch of progress.They must know how every minute spent translates into profits. There’s a reason why corporations didn’t invent blockchains, though

Contributing to Yearn is an act of defiance. It is an act of taking back permission. It is not merely dreaming. It is Doing

CODA

At Yearn the door is always open. But only you can step through it.

# YFI Boarding School

![](./image7.png?w=968&h=625)

YFI boarding school is a novel program for prospective strategists to ask questions and learn. It’s not like a regular school, but senior strategists host office hours periodically to help young talents to evolve.

In order to join the YFI boarding school, you must: go through the general onboarding process, indicate interest in strategy development, work on a strategy or actively build a strategy, and lastly, be invited to join in.

You can additionally join through being blue pilled by any Yearn core contributor.

What is it you may ask? You’ll know when they come to you.

Apply [here](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) to get a chance at joining the YFI boarding school.

# Vaults at Yearn 

You can read a detailed description of the strategies for all of our active yVaults [here](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Ecosystem News

[Yearn has integrated Huobi Wallet onto our UI](https://twitter.com/HuobiWallet/status/1503939305135247365)

[Alchemix, a protocol built on Yearn infrastructure, has recently launched their V2](https://twitter.com/AlchemixFi/status/1503747272143740942)

[Check out new Yearn art from the PILLS Universe](https://twitter.com/pillsuniverse/status/1502662158810759168)

[Steakwallet provides one of the simplest UIs to deposit in Yearn vaults](https://twitter.com/steakwallet/status/1502018618506293248)

[Sturdy Finance has added new fBEETS collateral powered by Yearn on Fantom](https://twitter.com/SturdyFinance/status/1509962174629875726)

[Check out a sneak peek at the Yearn v3 design](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[Listen in to tracheopteryx speaking about DAOs on the Delphi DISRUPTORS podcast](https://twitter.com/tracheopteryx/status/1511000392552763399)

[Earn high fixed yields on USDC and DAI at Tempus Finance, powered by Yearn](https://twitter.com/TempusFinance/status/1508823240768167943)

[A vote to add yvYFI as collateral for the MAI stablecoin has been launched](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[Gas-free Yearn transactions on Fantom are possible thanks to wido](https://twitter.com/joinwido/status/1506718710836436996)
