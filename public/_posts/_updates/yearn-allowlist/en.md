---
title: "Yearn Allowlist"
image:
  src: ./image1.jpg
  width: 770
  height: 367
date: '2022-05-06'
author: Weaver
translator: 
---

![](./image1.jpg?w=770&h=367)

## Overview  

To make the Yearn website even more secure a new feature has recently been introduced, termed the Allowlist. In essence, it allows all transactions that are made through the website/SDK to be validated against an on-chain contract that keeps a record of all valid calldata that is possible for the website to produce.

This prevents the website from being susceptible to various man-in-the-middle attacks where data is provided to the website, whether it be through Zapper/0x’s API, or Yearn’s own. For example, if Yearn’s API returns a list of vaults with malicious addresses, with the intention that users approve one of them when trying to deposit, the Allowlist would block the transaction from being made.

We invite other protocols to also take advantage of their own Allowlists to enhance their security. Instructions for creating your own Allowlist are detailed further on.

## How it works  

Let’s take an example of validating the calldata for a transaction approving a deposit into a vault.

In the Allowlist contract there’s a list of conditions, which are structs that are validated against.

Here’s the one for approving a vault token (in JSON form):

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

- `id`: The identifier of the condition, allows the condition to be updated or removed by the protocol owner  

- `implementationId`: The identifier of the implementation contract. Implementation contracts hold the logic for validating the condition. Each Allowlist can have multiple implementation contracts to validate against. For example, on the Yearn Allowlist, there is an implementation for all things related to vaults, and another for the labs section of the website, with more experimental products  

- `methodName`: The function name that is allowed  

- `paramTypes`: The parameters of the function  

- `requirements`: Information about how the validation will be executed  

There can be two types of requirements: `target` and `param`.

- If the first requirement argument is `target` then the next argument will be the function that should be called on the implementation to validate the target of the transaction.  

- If the first requirement argument is `param` then likewise the function to use for the validation comes next, and the final argument is the position of the parameter so it can be extracted from the calldata when validating.  

Here’s the transaction, approving the Curve RocketPool Vault, that we will be validating

- target:`0x5c0A86A32c129538D62C106Eb8115a8b02358d57`  
- calldata:`0x095ea7b30000000000000000000000005c0a86a32c129538d62c106eb8115a8b02358d570000000000000000000000000000000000c097ce7bc90715b34b9f1000000000`  

There are 3 steps to validate it:

1. We first check the [method selector](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L72). From the condition we generate what we are expecting the method selector to be for an approval transaction. Since we have the function name and parameters stored in the condition we can recreate the function and take `bytes4(keccak256(bytes(reconstructedMethodSignature)))`. We can then compare this against the first 4 bytes of the calldata, to ensure that a valid function is being called by the website. The 4 byte signature of `approve(address,uint256)` is `0x095ea7b3` so we can see that the calldata is valid for this.

2. We then [validate the target](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L50). To do this we make a call to the implementation contract of the condition, using the provided validation, in this case `isVaultUnderlyingToken`. We always know that we are validating an address so we can assume that that function has a single address parameter. It is also assumed that this function returns a `bool`. If the value returned is false then the transaction is not valid. In the implementation contract there is a function `isVaultUnderlyingToken` which then proceeds to call Yearn’s vaults registry to perform the actual validation.

3. We then [validate all the parameter conditions](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L95), of which there can be more than one, or none in the case of a function with no arguments. In this case we want to check that the parameter in position 0 satisfies the function `isVault` on the implementation contract, this way we will know that the user is depositing into a valid vault. Again, the implementation contract uses the Yearn vault registry to check whether the address decoded from the calldata is a valid vault or not.

A transaction submitted to the Allowlist is validated against each condition, if any of them confirm that the transaction is valid then we can be confident that the transaction that is about to be submitted, however it was given to the user when interacting with the website, is not malicious and safe to execute.

## Who controls each website’s Allowlist?

The Allowlist was designed so that each website would have an instance of its own, but we need some way on-chain to link each Allowlist to each website. To do this we use ENS/DNSSEC to verify the owner of each domain — https://docs.ens.domains/dns-registrar-guide. This way we know that control of the Allowlist is linked to control of the domain, and as long as this isn’t compromised the correct Allowlist for a given website can be fetched.

The security of an Allowlist also depends on the implementation contracts. If these were easily mutable, or were implemented incorrectly, then the security of the Allowlist would be compromised. It’s best to make these contracts immutable, or if they need to be updatable, then ownership by the protocol’s multisig would be preferable.

## Registering as a protocol

For protocols to create and register their own Allowlist they can do the following steps:

- Start the registration of the Allowlist using `registerProtocol` on the [Allowlist Registry contract](https://etherscan.io/address/0xb39c4EF6c7602f1888E3f3347f63F26c158c0336). This will deploy a new Allowlist for the protocol’s domain. Note: the account starting the registration will need to be registered as the owner of the domain through ENS.
- Deploy custom implementation contracts, that can be used to validate targets/parameters against
- Link these implementation contracts to the Allowlist by using the `setImplementation` function.
- Figure out all transactions that are created through the website, and create corresponding conditions. Set these conditions on the Allowlist using `addConditions`

An example deploy script can be found [here](https://github.com/yearn/yearn-allowlist/blob/main/scripts/chains/250/deploy.py)

## Future improvements

As detailed, this feature reduces the manipulation of data from which transactions users are submitting are created, such as data from APIs. However, if the source code of the website is compromised, or malicious code is injected, then these checks could simply be ignored and malicious transactions formed to present to the user.

To avoid this the Allowlist could be integrated into a wallet (such as metamask), which itself would validate all transactions that are about to be submitted against the Allowlist fetched for the domain name the transaction originated from. This would completely remove the manipulation of front-end source code from being an attack vector and would be a competitive advantage for any wallet implementing it. The Allowlist Registry can be used to validate any calldata for any website with the following function:

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

## Further reading

**Eth-Allowlist**
https://github.com/yearn/eth-allowlist

**Yearn’s allowlist implementation example**
https://github.com/yearn/yearn-allowlist

**ENS DNS registration**
https://docs.ens.domains/dns-registrar-guide

*This article was provided anonymously by a Yearn dev. I just copy pasta — xoxo weaver.*
