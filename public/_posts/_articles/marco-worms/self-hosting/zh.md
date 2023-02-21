---
title:  "Web3 的自托管服务"
image:
  src: ./image1.jpg
  width: 1400
  height: 702
date: '2022-03-31'
author: Marco_Worms
translator: Xiaona
---

![](./image1.jpg?w=1400&h=702)

Web3 为我们带来了使用应用程序的全新方式：应用程序不再需要托管在中心化服务器上，而是部署在去中心化的区块链网络上。 这样的应用程序能够更灵活地应对宕机事件，并具有很好的抗审查性。但仍存在一个问题：去中心化的应用程序，与用户交互的界面却仍然需要使用中心化的网络浏览器。

本文我们一起来学习下，主要的加密应用程序以及 Yearn 是如何自托管前端界面的。这样无论由于任何原因导致官网无法使用，应用程序都仍然可用，因为区块链是永远不会宕机的。

## 后端，前端，Web3!

先快速介绍几个概念：

- **前端**是指用户肉眼可见的应用程序的那一部分，比如网站或手机 app。
- **后端**是指用户看不到的应用程序的那一部分，大部分的前端行为都是需要在后端进行处理的。

在 Web3，区块链使得后端去中心化，但与用户交互的前端仍然是中心化的：

- 用户请求访问网站（比如 http://yearn.finance）
- 浏览器请求 DNS 访问 IP 地址（13.227.124.73）
- 浏览器请求 IP 文件

只要发生下面任何一种情况：

**DNS 无法将域名解析为 IP 地址**

或

**IP 地址无法提供前端所需的文件**

都将导致前端不可用，就无法通过前端访问后端。使用 web3 可以规避这些问题， 自托管前端能够同时解决 “DNS 解析”和 “IP 离线”的问题。

![](./image2.jpg?w=1400&h=679)

## 为什么要自托管？

web3 网站自托管意味着，当默认的服务提供商宕机时前端仍能正常工作。这也去掉了很多中间环节，实现了用户和应用程序双赢的局面。知道操作方法，备份重要的文件：

- 前端不可用时，用户仍可使用应用程序
- 大大减轻了处理前端请求的服务器的压力
- 应用程序的本地版本被冻结为特定版本。 如果此版本适合个人使用，就做好备份，以便在前端被破坏时仍然可以访问工作版本

实现自托管，我们需要阅读开发者文档，了解如何下载、设置以及运行本地环境。

本地跑通之后，我们将使用类似 "localhost:application" 的东西，来取代之前通过浏览器访问网站的方式。“application” 通常默认为 3000。

![](./image3.jpg?w=1400&h=1115)

## 注意要点

**Windows 用户：**有些应用程序使用 Linux 会更简单，但作为 window 用户也不必担心，大部分应用都是开箱即用的，即便有些实在无法使用 Windows，也可以通过 [WSL (Windows Subsystem for Linux)]( https://docs.microsoft.com/en-us/windows/wsl/install) 来实现。[Virtual Machine](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html) 是个不错的选择，安装 Linux 的发行版本如 [Ubuntu](https://ubuntu.com/) 或 [Debian](https://www.debian.org/)，就能够处理大多数的错误了。如果遇到未知错误可以尝试 Mac/Linux。

**Mac/Linux 用户**：如果运行命令出现未知错误，可以尝试在前面加关键词 `sudo`，如 `sudo command`，这会强制命令以管理员身份运行，因为有时默认权限并非管理员权限。

**任何未知错误**：首先认真查阅存储库的 readme！如果还是不行，Google 会是最好的选择，因为确实很难出一个适用于所有 OS 的操作指南。所以如果出现错误我强烈建议你直接复制粘贴错误到 Google，通常都能够找到答案。

**其他都正确但链上交易失败**：有一个 `.env` 文件是用于配置默认密钥的。在那里你可以添加项目密钥比如 [Infura](https://infura.io/) 和 [The Graph](https://thegraph.com/studio/)，有些应用可能会要求你使用自己的密钥，可以在它的网站上获取。

**运行一段时间后重新运行**：你可以跳过 `git clone`，`yarn install` 和其他的密钥配置步骤，通常只需要 `cd`（更改目录）到项目文件夹然后再运行 `yarn start`。

**运行一段时间后运行其他应用**：自己关闭终端窗口或结束执行，使用 "Ctrl+C" 加命令 `cd ..`

## 动手吧！

**要求**

1) 安装 [Node.js](https://nodejs.org/en/)
2) 安装 [git](https://git-scm.com/downloads)
3) 在终端窗口输入 `npm install --global yarn` 设置 [Yarn](https://yarnpkg.com/)（用于安装大部分项目的依赖项）

### 如何打开终端：

- **Windows：** Windows + R -> 输入 `cmd` -> Enter
- **Mac：** CMD + 空格 -> Terminal

**索引**

- [Yearn 网站](#Yearn-Website)
- [Yearn 博客](#Yearn-Blog)
- [Yearn 开发者文档](#Yearn-Dev-Docs)
- [Yearn Website](#Yearn-Website)
- [Yearn 机枪池介绍](#Yearn-Vaults-Descriptions)
- [Yearn Mini](#Yearn-Mini)
- [Yearn Watch](#Yearn-Watch)
- [Uniswap](#Uniswap)
- [Curve](#Curve)
- [Cowswap](#Cowswap)
- [Gnosis Safe](#Gnosis-Safe)

### Yearn 网站

#### 存储库: https://github.com/yearn/yearn-finance-v3 

1) 打开终端
2) `git clone https://github.com/yearn/yearn-finance-v3`
3) `cd yearn-finance-v3`
4) `yarn install`
5) 非 Windows: `yarn dev` / Windows: `yarn dev-win`
6) 浏览器会自动打开标签 `localhost:3000`

![](./image4.jpg?w=1145&h=667)

### Yearn 博客

#### 存储库: https://github.com/yearn/yearn-comms

1) 打开终端
2) `git clone https://github.com/yearn/yearn-comms`
3) `cd yearn-comms`
4) `yarn install`
5) `yarn dev`
6) 打开浏览器并导航到 `localhost:3000`

![](./image5.jpg?w=1235&h=703)

### Yearn 开发者文档

#### Repository: https://github.com/yearn/yearn-devdocs

1) 打开终端
2) `git clone https://github.com/yearn/yearn-devdocs`
3) `cd yearn-devdocs`
4) `yarn install`
5) `yarn start`
6) 浏览器会自动打开标签 `localhost:3000`

![](./image6.jpg?w=1093&h=447)

### Yearn 机枪池介绍

#### 存储库: https://github.com/yearn/yearn-vaults-descriptions

1) 打开终端
2) `git clone https://github.com/yearn/yearn-vaults-descriptions`
3) `cd yearn-vaults-descriptions`
4) `yarn install`
5) `yarn dev`
6) 打开浏览器并导航到 `localhost:3000`

![](./image7.jpg?w=1223&h=517)

### Yearn Mini

#### 存储库: https://github.com/DarkGhost7/yearn-mini

1) 打开终端
2) `git clone https://github.com/DarkGhost7/yearn-mini`
3) `cd yearn-mini`
4) `yarn install`
5) `yarn start`
6) 浏览器会自动打开标签 `localhost:3000`

![](./image8.jpg?w=1400&h=986)

### Yearn Watch

#### 存储库: https://github.com/yearn/yearn-watch

1) 打开终端
2) `git clone https://github.com/yearn/yearn-watch`
3) `cd yearn-watch`
4) `yarn install`
5) `cp .env.example .env`
6) 添加 [Infura](https://infura.io/dashboard)，[The Graph](https://thegraph.com/studio/apikeys/) 和 [Alchemy](https://www.alchemy.com/) 的密钥到 `.env`
7) `yarn start`
8) 浏览器会自动打开标签 `localhost:3000`

![](./image9.jpg?w=1191&h=531)

### Uniswap

#### 存储库: https://github.com/Uniswap/interface

*无法在 Windows 使用*

1) 打开终端
2) `git clone https://github.com/Uniswap/interface`
3) `cd interface`
4) `yarn install`
5) `yarn start`
6) 打开浏览器并导航到 `localhost:3000`

![](./image10.jpg?w=1400&h=628)

### Curve

*旧 UI 因为目前版本代码尚未开源*

#### 存储库: https://github.com/curvefi/crv.finance

1) 打开终端
2) `git clone https://github.com/curvefi/crv.finance`
3) `cd crv.finance`
4) `yarn install`
5) `yarn start`
6) 浏览器会自动打开标签 `localhost:3000`

![](./image11.jpg?w=1400&h=568)

### Cowswap

#### 存储库: https://github.com/gnosis/cowswap

*无法在 Windows 使用*

1) 打开终端
2) `git clone https://github.com/gnosis/cowswap`
3) `cd cowswap`
4) `yarn install`
5) `yarn start`
6) 浏览器会自动打开标签 `localhost:3000`

![](./image12.jpg?w=983&h=511)

### Gnosis Safe

#### 存储库: https://github.com/gnosis/safe-react

1) 打开终端
2) `git clone https://github.com/gnosis/safe-react`
3) `cd safe-react`
4) `yarn install`
5) 添加 [Infura](https://infura.io/dashboard) 密钥到 `.env`
6) `yarn start`
7) 浏览器会自动打开标签 `localhost:3000`

![](./image13.jpg?w=1400&h=550)

---

*作者：[Worms](https://twitter.com/MarcoWorms)，审稿人: [Dark Ghosty](https://github.com/DarkGhost7)，[Cryptouf](https://twitter.com/cryptouf)*

*yearn.finance 出品*
