---
layout: post
title: "Stealth Safe Guard: MEV Protection for your Gnosis Safe"
categories: [Updates]
image:
  src: ./cover.png
  width: 1256
  height: 1024
author: "0x71B1"
date: "2021-11-16"
translator:
---

![](./cover.png?w=1000&h=500)

original article: [Yearn.Finance Engineering](https://mirror.xyz/yearn-finance-engineering.eth)

## Introduction

Gnosis Safe is a brilliant product, and the unanimous choice for protocol team multisigs throughout Ethereum. But without care from owners, there are a few lurking threats when it comes to MEV protection:

1. 3rd party executor threat
2. Public mempool threat
3. Uncled block threat

Protocols like Yearn specifically are large targets for MEV given the massive volume of swaps that happen on a daily basis (some days upwards of $1,000,000). Up until now, it has been a struggle to implement the right human-level processes to guard against these threats and stay safe from giving up MEV opportunities.

This post presents "**Stealth Safe Guard**", a newly developed guard which aims to solve all 3 of these threats which can make interactions with your safe vulnerable.

## 3rd Party Executor Threat

### Problem definition:

Gnosis Safe transactions can be executed by anyone that has the required signatures, which are publicly available though the official gnosis API & UI. This opens up an attack vector where a malicious actor can add custom transactions before and after the multisig tx execution and grab it's MEV.

### Solution:

Gnosis Safe >=1.3.0 solves this by letting the safe assign a guard contract that can be set to only allow user-defined trusted addresses to execute the safe transactions. More details on why [here](https://blog.gnosis.pm/gnosis-safe-mev-how-to-mitigate-it-347e13535e34).

In [StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol) this is the [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol).

## Public Mempool Threat

### Problem definition:

Executing safe transactions through the public mempool opens up the same threat as stated above, anyone can see the tx and quickly generate a flashbots bundle that will grab the MEV from it.

### Solution:

[StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol) requires executors to go though the [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol) contract, which protects against the txs getting into the public mempool by adding a bonded reward to anyone that sees the tx and reports it's secret hash, the tx will then not execute and take the penalty away from the executor. Thanks to the Tenderly team we have a set of automatic scripts looking for these type of txs that will immediately report them and pay the miner the full executor penalty.

## Uncled Block Threat

### Problem definition:

Even if all of the above is done correctly there is still a way for our tx to end up in the wrong hands. The most common way for this to happen is when our stealth tx ends up getting included ONLY into an uncled block. This allows an attacker to grab our tx from the uncled block and include it into the following block.

### Solution:

There is an easy way to prevent this from happening which is requiring our tx to only succeed on a specific block number. **StealthRelayer** can be set to require the executor to send a target block number in the execution arguments. Doing this with flashbots also allows us to target the block from the bundle configuration and the smart contract to avoid reverted txs. Block protection can be disabled for networks not supported by Flashbots (such as FTM).

## Description

### Useful links:

- [what is gnosis safe guard?](https://help.gnosis-safe.io/en/articles/5496893-add-a-transaction-guard)
- [some official guard example contracts](https://github.com/gnosis/safe-contracts/tree/main/contracts/examples/guards)

**StealthSafeGuard** is a Gnosis safe guard contract that allows multisig transactions to be safely signed on the UI without the risk of a 3rd party executing it, it also makes sure we execute using a private mempool + block protection to avoid getting sandwiched and|or uncle-bandit attacked by using [bonded-stealth-txs](https://github.com/lbertenasco/bonded-stealth-tx).

This is achieved by requiring that the `msg.sender` on **StealthSafeGuard** is our **StealthRelayer** and our `StealthRelayer.caller()` to exist on `StealthSafeGuard.executors()`.

## Deployment & Setup

### Guard

**StealthSafeGuard** can be easily deployed by with the following script: [/guard/00-stealth-safe-guard-deploy.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/00-stealth-safe-guard-deploy.ts)

Remember to correctly set your `StealthRelayer` address on the [utils/contracts.ts](https://github.com/yearn/strategies-keep3r/blob/main/utils/contracts.ts#L73) file, and to correctly input your safe address which will be assigned as the `Manager` role, since the `msg.sender` will get the `Owner` role.

### Executor

The account(s) you'll use to execute the safe transactions will need to perform a few transactions, including bonding some ETH into the [StealthVault](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthVault.sol), to be able to properly execute through the **StealthRelayer**. Besides this, the *Governor* or *Manager* of the **StealthSafeGuard** would need to add these account(s) as executors. You can check on contract interactions how to perform this. The *Executor*'s private key will also be used in the scripts below.

### Contract interactions

- *Executor* needs to call `bond(1 ether)`
- Used by the **StealthRelayer** to validate executor bonds and StealthHash
- *Executor* needs to enable `StealthRelayer` as a `StealthVault.job`

### StealthRelayer

- *Governor* needs to call `.addJob(GnosisSafeAddress)`
- *Governor* can disable block protection by calling `setForceBlockProtection(bool)`
    - block protection should be disabled for chains where flashbots is not supported
- *Executor* can then call `execute(GnosisSafeAddress, data, stealthHash, blockNumber)` using a flashbots bundle
    - or `executeWithoutBlockProtection(GnosisSafeAddress, data, stealthHash)` on non flashbots chains

### GnosisSafe

- Should be version `≥1.3.0`
- Safe should execute on itself `setGuard(StealthSafeGuard)`

### StealthSafeGuard

- *Governor* should call `addExecutor(executor)`
- *Governor* can call `setOverrideGuardChecks(true)` to disable all guard checks in case of brick

## Troubleshooting & Safeguards

Adding a guard into a safe is an extremely delicate action, since it can break/brick the safe completely (you'll get locked out of your safe and lose all the assets it holds). *We encourage new users to try this out on a brand new safe to get the hang of it.*

**StealthSafeGuard** has a few protections in place which make sure you'll never get locked out of your safe.

1. **StealthSafeGuard**'s owner should NOT be the same safe it's protecting
    1. you should instead set the safe as the manager role.
        1. `StealthSafeGuard.setPendingManager(safe)` as owner (second safe)
        2. `StealthSafeGuard.acceptManager()` as main safe
    2. **StealthSafeGuard** *.owner* should be a separate safe which only purpose is to salvage the main safe in case of an issue.
2. Both *Owner* and *Manager* can disable ALL checks (**StealthRelayer** and *Executor* requirements) by toggling a flag
    1. `StealthSafeGuard.setOverrideGuardChecks(true)` as owner (second safe)
    2. `StealthSafeGuard.setOverrideGuardChecks(false)` as owner (second safe)
        1. remember that the flag needs to be manually set back to false
3. Both *Owner* and *Manager* can change the **StealthRelayer** by calling `StealthSafeGuard.setStealthRelayer(address _newStealthRelayer)`
4. Both *Owner* and *Manager* can add and remove executors addresses
    1. `StealthSafeGuard.addExecutor(address _executor)`
    2. `StealthSafeGuard.removeExecutor(address _executor)`

## Automation

Execution can be automated by running a script that every X minutes:

1. queries gnosis safe API for queued txs and it's confirmations
2. generates the safe tx
3. appends and encodes the signatures to the tx
4. generates the safe execution raw transaction
5. grabs gas and network details
6. generates stealth hash and assign target block number
7. signs it with the executor EOA
8. creates, simulates and broadcasts the bundle to flashbots
9. loops though 5. and 8. until the bundle is included in a block

You can see an example on: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

## Manual Signing and Execution

The following command will prompt you to enter the *Safe address* and *safeTxHash*, then output the signed message.

`npx hardhat run` [scripts/guard/02-stealth-relayer-guard-sign.ts](https://github.com/yearn/strategies-keep3r/blob/main/scripts/guard/02-stealth-relayer-guard-sign.ts) `--network rinkeby`

The signed message can be added into `offchainSignatures` on: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

Then you can run the script to grab the first queued safe Tx, and it will grab signatures from the gnosis API and add the `offchainSignatures` to the transaction, and submit it to flashbots (if on mainnet) though the stealth relayer. `npx hardhat run scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts --network rinkeby`

## Improvements

- reduce gas usage
- add useful events such as success execution and hash+nonce

## Credits

**StealthSafeGuard** exists thanks to the efforts of the Flashbots, Gnosis and Yearn teams.

- Gnosis team added the guard system on their [safe-contracts 1.3.0 release](https://github.com/gnosis/safe-contracts/releases/tag/v1.3.0)
- Flashbots team provides the basis on which stealth-tx can be safely and accurately executed

### Interested in building similar solutions?

💡 [Collaborate with us at yearn!](https://yearnfinance.notion.site/)

### Interested in having this for your multisig, but not sure how?

*git gud. *jk, you can contact any yearn moderators via our [discord](https://discord.yearn.finance/) or [telegram](https://t.me/yearnfinance) and ask to speak with our own stealth expert [skeletor_spaceman](https://t.me/skeletor_spaceman) or any of our other yMechanic team members on telegram, we would be happy to guide you.
