---
title:  "Self-Hosting Web3 Services"
image:
  src: ./image1.jpg
  width: 1400
  height: 702
date: '2022-03-31'
author: Marco_Worms
translator: 
---

# Self-hosting Web3 Services

![](./image1.jpg?w=1400&h=702)

Web3 has brought a new way to communicate with applications: apps are no longer hosted by centralized server providers but rather on blockchains, which are decentralized systems. Apps built on top of decentralized foundations are resilient to downtime and censorship, but there is an issue: serving the app interface to the users using the web browser often relies on centralized entities.

In this article we’ll learn how to self-host app interfaces for core crypto and Yearn services, so if official websites are down by any reason you can actually serve the website for yourself since the blockchain is never down!

## Back-end, Front-end, Web3!

A quick intro to these concepts:

- **Front-end** is the name given to the portion of the application that is seen by the user, like a website or a mobile app.
- **Back-end** is the name given to the portion of the application that is not seen by the user. Many front-end actions rely on back-end to process.

In Web3 the blockchain manages to decentralize the back-end, but the front-end will still be served to the user using the default centralized method:

- User requests browser to go to a page (example http://yearn.finance)
- Browser requests DNS for the IP of this address (13.227.124.73)
- Browser requests the files for the IP

And if any of these two happens:

**DNS doesn't resolve your domain to an IP address**

or

**IP address doesn't serve you the front-end files**

You won't be able to see the front-end in order to click stuff and communicate with the back-end. In order to be able to use Web3 services without these concerns you can self-host the front-end and workaround both the "DNS resolution" and the "IP-not-online" problem at the same time!

![](./image2.jpg?w=1400&h=679)

## Why self-Hosting?

Self-hosting a website in web3 means the front-end will work even when the default front-end provider is down. This cuts many middlemen that exist in the middle of the way of your machine reaching the front-end files! It’s a win/win relationship for the individual and the service that if you know how to do it you can back up the services that are essential to you:

- The individual gains more resiliency accessing the service even when conditions to reach the front-end are bad.
- The server that delivers front-end files receives fewer requests, which helps it not getting congested
- The local version of the app will be frozen in a specific version. If this version works well for the individual it's great to have a backup so if the live front-end breaks any feature you can still access the working version

In order to self-host a service we'll have to go through the developer documentation of on how to download, setup, and run a local environment for each app.

After running it locally, instead of accessing the default website URL in the browser we will instead use something like "localhost:application" and it will work just fine! The "application" is a number that often defaults to 3000.

![](./image3.jpg?w=1400&h=1115)

## Points to pay attention

**To Windows users:** Depending on the service it might be easier to use Linux instead of Windows, but if you have Windows don’t worry, many services work fine out-of-the-box, and for the ones that don’t you can use [WSL (Windows Subsystem for Linux)]( https://docs.microsoft.com/en-us/windows/wsl/install). A [Virtual Machine](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html) is also a good alternative, you can install a common Linux distribution such as [Ubuntu](https://ubuntu.com/) or [Debian](https://www.debian.org/) which often has many resources to get around errors. If you have unexpected errors on Windows it’s recommended to try running on Mac/Linux instead.

**To Mac/Linux users**: If any command show unexpected errors try running them using the keyword `sudo` before, like `sudo command`, this forces the command to be ran as administrator and sometimes your default permissions are not the same as the admin ones.

**For any unexpected errors:** Read carefully through the repository readme! If nothing works, Google is your best friend, it's really hard to make a guide that will work for all versions of all OS so if something go wrong I highly recommend that your first response is copying the error and pasting it on Google ;) it often solves the issue!

**If everything went correct but onchain transactions fail:** There is a file called `.env` used by projects to configure default keys. There you can find places to add project keys for services like [Infura](https://infura.io/) and [The Graph](https://thegraph.com/studio/), some of the apps might require you to use your own keys, in order to grab a key you have to create an account at the service website!

**After running a service in order to run it again:** You can skip any `git clone` and `yarn install` and other key configuration steps, you usually just have to `cd` (change directory) into the project's folder again and run `yarn start`

**After running a service in order to run another:** You'll have to either close the terminal window OR shutdown the execution yourself: to do this use "Ctrl+C" and you can exit the project folder with the command `cd ..`

## Hands-on!

**Requirements**

1) Install [Node.js](https://nodejs.org/en/)
2) Install [git](https://git-scm.com/downloads)
3) Type `npm install --global yarn` in a terminal window to set up [Yarn](https://yarnpkg.com/) (used to install the dependencies for most projects)

### How to open terminal:

- **Windows:** Windows + R -> type `cmd` -> Enter
- **Mac:** CMD + Space -> Terminal

**Index**

- [Yearn Website](#Yearn-Website)
- [Yearn Blog](#Yearn-Blog)
- [Yearn Dev Docs](#Yearn-Dev-Docs)
- [Yearn Website](#Yearn-Website)
- [Yearn Vaults Descriptions](#Yearn-Vaults-Descriptions)
- [Yearn Mini](#Yearn-Mini)
- [Yearn Watch](#Yearn-Watch)
- [Uniswap](#Uniswap)
- [Curve](#Curve)
- [Cowswap](#Cowswap)
- [Gnosis Safe](#Gnosis-Safe)

### Yearn Website

#### Repository: https://github.com/yearn/yearn-finance-v3 

1) Open terminal
2) `git clone https://github.com/yearn/yearn-finance-v3`
3) `cd yearn-finance-v3`
4) `yarn install`
5) **Not-Windows:** `yarn dev` / **Windows:** `yarn dev-win`
6) Browser should automatically open a tab at `localhost:3000`

![](./image4.jpg?w=1145&h=667)

### Yearn Blog

#### Repository: https://github.com/yearn/yearn-comms

1) Open terminal
2) `git clone https://github.com/yearn/yearn-comms`
3) `cd yearn-comms`
4) `yarn install`
5) `yarn dev`
6) Open the browser and navigate to `localhost:3000`

![](./image5.jpg?w=1235&h=703)

### Yearn Dev Docs

#### Repository: https://github.com/yearn/yearn-devdocs

1) Open terminal
2) `git clone https://github.com/yearn/yearn-devdocs`
3) `cd yearn-devdocs`
4) `yarn install`
5) `yarn start`
6) Browser should automatically open a tab at `localhost:3000`

![](./image6.jpg?w=1093&h=447)

### Yearn Vaults Descriptions

#### Repository: https://github.com/yearn/yearn-vaults-descriptions

1) Open terminal
2) `git clone https://github.com/yearn/yearn-vaults-descriptions`
3) `cd yearn-vaults-descriptions`
4) `yarn install`
5) `yarn dev`
6) Open the browser and navigate to `localhost:3000`

![](./image7.jpg?w=1223&h=517)

### Yearn Mini

#### Repository: https://github.com/DarkGhost7/yearn-mini

1) Open terminal
2) `git clone https://github.com/DarkGhost7/yearn-mini`
3) `cd yearn-mini`
4) `yarn install`
5) `yarn start`
6) Browser should automatically open a tab at `localhost:3000`

![](./image8.jpg?w=1400&h=986)

### Yearn Watch

#### Repository: https://github.com/yearn/yearn-watch

1) Open terminal
2) `git clone https://github.com/yearn/yearn-watch`
3) `cd yearn-watch`
4) `yarn install`
5) `cp .env.example .env`
6) Add [Infura](https://infura.io/dashboard), [The Graph](https://thegraph.com/studio/apikeys/), and [Alchemy](https://www.alchemy.com/) keys to `.env`
7) `yarn start`
8) Browser should automatically open a tab at `localhost:3000`

![](./image9.jpg?w=1191&h=531)

### Uniswap

#### Repository: https://github.com/Uniswap/interface

*Did not work on Windows*

1) Open terminal
2) `git clone https://github.com/Uniswap/interface`
3) `cd interface`
4) `yarn install`
5) `yarn start`
6) Open the browser and navigate to `localhost:3000`

![](./image10.jpg?w=1400&h=628)

### Curve

*Old UI since the current one isn't open source*

#### Repository: https://github.com/curvefi/crv.finance

1) Open terminal
2) `git clone https://github.com/curvefi/crv.finance`
3) `cd crv.finance`
4) `yarn install`
5) `yarn start`
6) Browser should automatically open a tab at `localhost:3000`

![](./image11.jpg?w=1400&h=568)

### Cowswap

#### Repository: https://github.com/gnosis/cowswap

*Did not work on Windows*

1) Open terminal
2) `git clone https://github.com/gnosis/cowswap`
3) `cd cowswap`
4) `yarn install`
5) `yarn start`
6) Browser should automatically open a tab at `localhost:3000`

![](./image12.jpg?w=983&h=511)

### Gnosis Safe

#### Repository: https://github.com/gnosis/safe-react

1) Open terminal
2) `git clone https://github.com/gnosis/safe-react`
3) `cd safe-react`
4) `yarn install`
5) Add [Infura](https://infura.io/dashboard) keys to `.env`
6) `yarn start`
7) Browser should automatically open a tab at `localhost:3000`

![](./image13.jpg?w=1400&h=550)

---

#### *Producers: [Worms](https://twitter.com/MarcoWorms), Reviewers: [Dark Ghosty](https://github.com/DarkGhost7), [Cryptouf](https://twitter.com/cryptouf)*

### Made in yearn.finance
