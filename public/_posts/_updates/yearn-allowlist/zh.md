---
title: "Yearn 白名单"
image:
  src: ./image1.jpg
  width: 770
  height: 367
date: '2022-05-06'
author: Weaver
translator: Bee926
---

![](./image1.jpg?w=770&h=367)

## 概述  

为了让 Yearn 的网站更加的安全，我们最近添加了一项新功能，称为白名单（Allowlist)。 基本上，它允许所有通过网站/SDK 进行的交易都可以与链上合约进行验证。此合约记录了网站所有的有效呼叫数据。

这可以防止我们的网站受到向网站提供数据的各种中间人的攻击，这包括 Zapper/0x 以及 Yearn 自己的 API。 例如，如果 Yearn 的 API 回传带有恶意地址的机枪池列表，目的是让存款人批准其中一个地址，则白名单将阻止交易完成。

我们希望其他协议也能利用他们自己的白名单来提升他们的安全措施。我将在本文后段介绍关于如何创建自己的白名单。

## 它是如何运作的  

让我们以验证交易的呼叫数据为例，该交易用于批准放入机枪池的存款。

在白名单的合约里有一个条件列表，这些条件是经过验证的结构。

这是用于批准机枪池代币的例子 (以 JSON 的形式):

```
{
  "id"= "TOKEN_APPROVE_VAULT",
  "implementationId": "IMPLEMENTATION_YEARN_VAULTS",
  "methodName": "approve",
  "paramTypes": ["address", "uint256"],
  "requirements": [
    ["target", "isVaultUnderlyingToken"],
    ["param", "isVault", "0"]
  ]
}
```

- `id`: 条件的标识符，它允许协议持有者更新或删除条件  

- `implementationId`: 实施合约的标识符。实施合约具有验证条件的逻辑。每个白名单可以有多个实施合约来验证。 例如，在 Yearn 的白名单上，有一个实施的所有内容都是与机枪池相关的，另外一个是则适用于 Labs，Labs 的部分有许多实验性的产品  

- `methodName`: 允许的函数名  

- `paramTypes`: 函数的参数  

- `requirements`: 关于如何执行验证的信息  

可以有两种类型的要求: `target` 和 `param`.

- 如果第一个需求参数是 `target` 那么下一个参数应该是在实施上调用以用来验证交易目标的函数。

- 如果第一个要求参数是 `param` 那么接下来是用于验证的函数，最后的一个参数是参数的位置以便在验证时从呼叫数据中提取来。

这是用于批准 Curve RocketPool 机枪池的交易，我们将对其进行验证

- target:`0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08`  
- calldata:`0x095ea7b30000000000000000000000005c0a86a32c129538d62c106eb8115a8b02358d570000000000000000000000000000000000c097ce7bc90715b34b9f1000000000`  

验证包含 3 个步骤:

1. 我们首先检查 [method selector](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L72)。根据此条件，我们生成了我们期望的用于批准交易的 method selector。由于我们在此条件中存储了函数名称和参数，我们可以重新创建函数并使用 `bytes4(keccak256(bytes(reconstructedMethodSignature)))`。然后，我们可以将其与呼叫数据的前 4 个字节进行比较，以确保网站调用有效的函数. `approve(address,uint256)` 的 4 字节签名是 `0x095ea7b3`，因此我们可以看到呼叫数据对此有效。

2. 下一步，我们[验证目标 validate the target](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L50)。为了做这个，我们使用提供的验证，在本例中为 `isVaultUnderlyingToken`，调用该条件的实施合约。我们必须知道我们正在验证一个地址，所以我们可以假设这个函数有一个地址参数。我们的假设是此函数会返回 `bool`。如果返回的值为 false，则此交易便是无效的。在实施合约中，有一个函数 `isVaultUnderlyingToken` 会继续调用 Yearn 的机枪池注册表以执行实际验证。

3. 接下来，我们[验证所有参数条件](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L95)，其中可以有多个，或者在没有参数的函数的情况下什么都没有。在这种情况下，我们要检查位置 0 中的参数是否满足实施合约上的函数 `isVault`，这样我们就知道用户正在向有效的机枪池中存款。再次强调一下，实施合约使用 Yearn 的机枪池注册表来检查从呼叫数据解码的地址是否为有效的机枪池。

提交到白名单的交易会针对每个条件进行验证。如果其中任何一个确认哪些交易是有效的，那么我们可以知道即将提交的交易是在与网站交互时提供给用户的，这些不是恶意的交益并且可以安全执行。

## 谁掌控每个网站的白名单?

白名单的设计是为了让每个网站都有自己的实例，但是我们需要用链上的方式将每个白名单连接到每个网站。为了做到这个，我们使用 ENS/DNSSEC 来验证每个域的所有者 — https://docs.ens.domains/dns-registrar-guide。通过这个方式，我们知道对白名单列表的控制与对域的控制是相关的，只要不受影响，正确白名单列表会指向相对的网站。

此外，白名单的安全性取决于实施合约。如果这些很容易被更改，或者实施不正确，那么白名单的安全性就会被损坏。最好的方式是让这些合约是不可变，或者如果它们需要可更新性的话，那么它们必须要有从协议的多重签名者给的授权。

## 协议注册方式

以下是协议创建和注册自己的白名单的步骤:

- 在[白名单注册合约](https://etherscan.io/address/0xb39c4EF6c7602f1888E3f3347f63F26c158c0336)上使用 `registerProtocol` 开始注册白名单。T 这将为协议的域部署一个新的白名单列表。请注意，用来注册的账号需要通过 ENS 注册为域名的所有者。
- 部署自设的实施合约，可用于验证目标/参数。
- 使用 `setImplementation` 函数将这些实施合约连接到白名单。
- 找出通过网站创建的所有交易，然后创建相应的条件。使用 `addConditions` 在白名单上设置这些条件。

你可以在[此处](https://github.com/yearn/yearn-allowlist/blob/main/scripts/chains/250/deploy.py)找到示例部署脚本。

## 未来的改进

如以上所述，这个功能减少了对用户交易的数据的操纵，例如那些来自于 API 的数据。但是，如果网站的源代码被泄露，或者被注入恶意的代码，那么这些检查还有可能会被忽略，而用户仍会收到恶意的交易。

为了避免这种情况，白名单列表可以被集成到钱包中（例如 metamask），该钱包自己可以根据从交易起源的域名获取的白名单列表验证即将提交的所有交易。这个方式可以完全消除对前端源代码的操纵的攻击媒介。这对于实施它的钱包来说也是一个竞争优势。白名单注册表可被用于验证具有以下功能的任何网站的任何呼叫数据:

```
/**
* @notice Determine whether or not a given target and calldata is valid
* @dev In order to be valid, target and calldata must pass the allowlist conditions tests
* @param targetAddress The target address of the method call
* @param data The raw calldata of the call
* @return isValid True if valid, false if not
*/
   
function validateCalldataByOrigin(
  string memory originName,
  address targetAddress,
  bytes calldata data
) public view returns (bool isValid) {
  address allowlistAddress = allowlistAddressByOriginName[originName];
  isValid = CalldataValidation.validateCalldataByAllowlist(
    allowlistAddress,
    targetAddress,
    data
  );
}
```

## 更多资源

**Eth-白名单**
https://github.com/yearn/eth-allowlist

**Yearn 的白名单实施例子**
https://github.com/yearn/yearn-allowlist

**ENS DNS 注册**
https://docs.ens.domains/dns-registrar-guide

*本文是由 Yearn 的一位匿名开发者提供的。我只是将他的文章做了复制——xoxo weaver。*
