---
title: "Yearn 如何估算收益率（APY）"
image:
  src: ./image1.jpg
  width: 469
  height: 246
date: '2022-02-14'
author: Marco_Worms
translator: Xiaona
---

![](./image1.jpg?w=469&h=246)\
*旧 APY 展示*

在过去的几周里，我们收到了很多关于 v3 仪表板如何显示已存入资产的"年化收益率"（APY） 的反馈。特别是在 Fantom 上，币价的波动性大，策略也随之变动，所以我们对 APY 的显示方式做了短期的更改，以展示 [weve 和 0xdao](https://twitter.com/iearnfinance/status/1484570907041357828) 的收益率。当重新恢复到之前的计算方式时，我们并没有认为长期 APY 计算被夸大了，现在我们已经推送了更新以纠正该错误。本文旨在对上述情况做更详细的说明！

## 首先说一下，APR 和 APY 分别代表什么意思？

在 DeFI 中，我们经常看到这两个术语：

- **APR:** Annual Percentage Rate
- **APY:** Annual Percentage Yield

两者表达的意思都是用户投资能够获得多少收益：

- **APR** 假设收益不会自动复利
- **APY** 表示收益自动复利到本金中

## 我们学到了什么

几周前，当在 Fantom 上经历 [ve(3,3)](https://twitter.com/iearnfinance/status/1484570907041357828) 大战时， 我们更新了 APY 的显示方式，目的是希望使用最近的收益数据以更好地反映 APY。在此之前，我们则是根据长期历史数据比较保守地显示 APY，但在大战期间，大多数 Fantom 机枪池 APY 飙升，如果按照之前的保守方式，就无法正确地展示短期收益给大家。我们于是进行了更改，以便大家可以看到我们的机枪池正在使用最有利可图的策略。

![](./image2.jpg?w=591&h=397)

这种方式计算 APY 的缺点是：因为我们显示的是近期的 APY，收益较高 ，当大战的收益开始减少时，之后的收益率可能不会有那么高（前 20 TVL 快照后，大战结束，来自策略协议的收益减少），这样可能会误导用户，所以我们决定做些更改以修复这种情况。

前面说过在大战之前我们的 APY 计算方式很保守，大战期间我们改为根据最近数据来计算 APY。经历这两个极端让我们学到了很多！以下是我们现在的做法：

### 非 Curve 机枪池：

![](./image3.jpg?w=150&h=190)\
*新 APY 展示 （非 Curve 机枪池）*

- **Gross APR:** 扣除费用前的机枪池总年利率
- **Net APY:** 机枪池当前净收益率
- **Weekly APY:** 基于最近 7 天的收益率
- **Monthly APY:** 基于最近 30 天的收益率
- **Inception APY:** 基于自机枪池上线以来至今的收益率

### Curve 机枪池:

![](./image4.jpg?w=182&h=196)\
*新 APY 展示 （Curve 机枪池）*

- **Pool APY:** 交易手续费收益率，其实 50% 归 veCRV 持有人
- **Bonus Rewards APR:** 该池的代币奖励收益率。如 frax 池会奖励 frax，如果以当前价格卖掉奖励代币获得的收益率
- **Base CRV APR:** 该池获得的最低 CRV 奖励的 APR。（即未使用 veCRV 提升 CRV 奖励的 APR）
- **Boost:** 通过抵押的 veCRV 中获得收益提升倍数
- **Convex APR:** 当前 Convex APR （如果存入 Convex）
- **Gross APR:** 扣除费用前的机枪池总年利率
- **Net APY:** 机枪池当前净收益率

---

感谢所有提供反馈的朋友，也感谢迅速采取措施的团队。我们希望新的显示方式更好地反映机枪池的真实收益情况！

作者: [Worms](https://twitter.com/MarcoWorms), 审稿人: [x48](https://twitter.com/x48_crypto), [Vany](https://twitter.com/vannny365), [Dark Ghosty](https://github.com/DarkGhost7)
