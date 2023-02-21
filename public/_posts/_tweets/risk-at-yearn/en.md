---
title:  "How yearn thinks about risk"
image:
  src: ./cover.jpg
  width: 1000
  height: 563
date: "2022-06-29"
author: Storm Blessed
translator: 
---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">With recent events its relevant to show how yearn thinks about risk<br><br>Uses an internal framework to navigate the turbulent waters of DeFI risks.<br><br>There&#39;s a method to the madness<br><br>A quick overview <br>👇<br><br>1/ <a href="https://t.co/CD768BVshj">pic.twitter.com/CD768BVshj</a></p>&mdash; Storm Blessed 0x (@storming0x) <a href="https://twitter.com/storming0x/status/1553092343619850240?ref_src=twsrc%5Etfw">July 29, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

---

##### 1

With recent events its relevant to show how yearn thinks about risk

Uses an internal framework to navigate the turbulent waters of DeFI risks.

There's a method to the madness

A quick overview 👇

---

##### 2

Yearn needs to handle security differently from other protocols by design

For core components it follows standard waterfall dev process, test, staging, audits, etc

For strategies is a diff story, yield opportunities come and go fast, risk framework is needed

---

##### 3

Audits/security reviews are the bottleneck for every SC dev team to get to prod

High demand and you don't control your time slots in advance

If strategies need to go to prod faster than a normal full fledged protocol without audits

How can the risk be balanced?

---

##### 4

The strategy receives a score "odds" of an issue/hack happening vs. allocation impact

Poker players may call it EV calculation

This formula gives out a consistent score for every different strategy based on dimensions from an internal process

![](./image1.jpg?w=900&h=312)

---

##### 5

The lower the score, the less likelihood an issue will happen based on yearns past data

Score includes dimensions like:

- Audit
- Reviews
- Complexity
- Protocol Score

More details: [https://docs.yearn.finance/resources/risks/risk-score…](https://docs.yearn.finance/resources/risks/risk-score)

The dimensions provide a score, now diff strats risk can be compared

---

##### 6

With this score, yearn watch and internal tools show the risk heat map of where the strategy current on chain TVL falls as a factor of the risk score ("likelihood of issue") 

This places the strategy set in an axis within the risk heatmap

here: [https://yearn.watch/risk](https://yearn.watch/risk)

![](./image2.jpg?w=680&h=534)

---

##### 7

How is this useful? 

Yearn can release strategies before audits, score it high risk

This limits the contract's allocations while mitigations to  lower the risk are planned

Yearn puts the strategy on training wheels with sized limited funds and works on preventive actions

---

##### 8

This approach balances fast experimentation with risk handling and security

Internal security reviews always happen before prod but that just accounts for review scores

There are also peer reviews, and then external security reviews and finally full audits to improve score

---

##### 9

Test in Prod became a meme in DeFI summer

In reality, yearn does risk sized allocations and checks risk before allocating funds

This shows that yearn is very serious about security

Further work is being done on vault risks

[https://github.com/yearn/yearn-data-analytics/blob/master/src/risk_framework/README.md](https://github.com/yearn/yearn-data-analytics/blob/master/src/risk_framework/README.md)

---

##### 10

Expanding on the protocol safety score

Before deploying a strategy to any new protocol it requires a DD report

This includes many aspects like multi sig governance, codebase, bounties, audits, etc

Most protocols are open to improving on these dimensions

---

##### 11

Yearn is transparent on all the risks users are taking on deposits

A user can simple deposit and forget about their funds

Or they can get deep to the nitty gritty and see how the sausage is made with the great tools contributors provide

"Real" DeFI is transparent

---

##### 12

As work is done on mitigations the score improves and the protocol can allocate more funds to the strategy

Yearn does recurring reviews based on TVL of strategies

A big goal in v3 is to have the entire risk framework on chain and automated as useful work of veYFI

---

##### 13

This risk management aspect is yearns secret sauce to providing yields balanced with security via prevention

No system is perfect, including this one

But i think the system proved  its resiliency in trial by fire during this recent market crash

Others can iterate on it

---

##### 14
Hope this was instructive for others to get ideas on how to come up with their own frameworks

Yearn takes inspiration from greats like [@MakerDAO](https://twitter.com/MakerDAO) and customize to its needs

Thanks to all great contributors in yearn that make the docs and tooling available.
