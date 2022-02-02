---
title:  "I介绍固定外汇"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: Xiaona
published: true
---

# 介绍固定外汇 (USD, EUR, ZAR, JPY, CNY, etc)

**免责声明;**

- 没有代币
- 审计尚未完成
- 合约是实验性的

**主要特点;**

- 0 治理（或多重签名)
- 0 配置
- 0 费用
- 0 价值提取
- 'Gentle'的清算
- 基于链上流动性的动态铸币上限
- 基于链上协议的动态LTV

**固定外汇**

Fixed Forex旨在成为一个不可变、0费用、0治理、去中心化的稳定币框架。

LTV（贷款价值比）源自Compound、Aave v1、Aave v2 Iron Bank。随着这些系统添加或更新其接受的抵押品，Fixed Forex也会动态更新。

铸币上限（用户可以根据给定的抵押品铸币的数量）来自可用的链上流动性，链上流动性越高，铸币上限就越高。

Fixed Forex引入了温和的清算，偿还了绝对最低限度的债务以使用户的头寸恢复平衡，不再担心在币价大幅波动事件期间全栈被清算。

出于本次发布的目的，合约将不会在etherscan上进行验证，但是，你可以在下面找到地址和ABI;

[0x92FC8E6EfdF389e2527d14393b15F543f9a03420](https://etherscan.io/address/0x92fc8e6efdf389e2527d14393b15f543f9a03420)

[ABI](https://gist.github.com/andrecronje/4ce11e8603a7f61af4619a86647db1d4)

完整版本将基于 curve.fi的crypto pools，以实现去中心化的外汇市场。
