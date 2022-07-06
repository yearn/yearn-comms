---
title:  "Strategies and Yearn"
image:
  src: ./image1.jpg
  width: 900
  height: 301
date: "2021-11-15"
author: Flashfish
translator: 
---

##### 1

Strategies and Yearn, a thread. 

Yearn has $4b in their v2 vaults and anyone can code a strategy and earn 10% of the profits. There is no interview process. Just create the strategy and follow these steps.

So how do you actually get a strategy to prod and scaled to > $100m?



---

##### 2
**1 - Find a big farm**

Finding farms that can safely take >100m is hard.

Yield normally comes from gov token farming and when we add our funds we dilute the distribution. 

So if APR is 100% and there is 10m in there already, by adding another 90m we crush the yield to 10% APR


---

##### 3 
That yield is based on the current spot price of the gov token. If we take too large a share of the distribution we can crash the price crushing our yield further.

And most yield farming is now more complicated than just locking USDC for a gov token.

---

##### 4 
One suggestion from the Yearn Millennium Prize thread was to farm the MIM-UST Curve Pool on Convex for a whopping 33.13% APR. The pool is large and we could add >100m and still get a nice yield.

Potentially a good strategy
![](./image1.jpg?w=900&h=301)


---

##### 5 
But to farm it we would first need to convert our USDC into MIM and UST. Not a simple task to do safely on chain without getting sandwiched or losing to slippage. 

But overcomeable. The real issue is the risk of such a strategy.


---

##### 6 
This strategy layers a lot of risk. If any of MIM, UST, DAI or USDT lose peg we are rekt. If Convex has a bug we are rekt. If Curve has a bug we are rekt. And if there is a problem in your code we are rekt. 

Would you be comfortable putting all your money into such a strategy?


---

##### 7
I would welcome this strategy to the USDC vault. But only with a limited percent of the funds such that the risk/reward is worth it. 

Which means we need to have a lot of such strategies that don't overlap risk to successfully deploy all the funds at a high APR.

---

##### 8
**2. Code it up**

Let's say you've found a juicy farm. The next step is to to write and test the strategy. It's probably easier than you think and normally takes me 1-2 days to write a strategy and 2-4 to test.

Start here: [https://yearn.github.io/yearn-devdocs/v2/getting-started/](https://yearn.github.io/yearn-devdocs/v2/getting-started/)

---

##### 9
**3. Get it peer reviewed by 2 other strategists**

Before being considered by Yearn your code needs to be peer reviewed. 

You should have introduced yourself to the strategist's pm [@saltyfacu](https://twitter.com/saltyfacu) by now. He can help with code questions and finding reviewers.

---

##### 10
**4. Do deep due diligence on any protocols involved**

Prepare a document with your research. 

Include official audits. Self-audit any code you interact with. If the code is forked then review the diff. EOA governance is a big red flag. Think about how the protocol could be rugged.

---

##### 12
Work out who is on the multisig and their reputation. 

Set up alerting bots to warn of anything entering a timelock or governance changes. 

Your DD should be adversarial. Focus on the dangers and not reasons why it is safe.

---

##### 13
**5. Test in prod**

Coordinate with 
[@saltyfacu](https://twitter.com/saltyfacu) to launch your strategy on [@ape_tax](https://twitter.com/ape_tax)
. 

This is a live testing environment with real money and your strategy needs to have been shown working there before considered for the endorsed vaults.

---

##### 14
**6. If the protocol is new to Yearn get a credit limit from the Safe Farming Committee**

The SFC is made up of regular contributors to Yearn and will take into account your due diligence to assign a risk tolerance to the protocol. 

A cap on how much can be deposited.

---

##### 15
**7. Get reviewed by Yearn's internal auditors**

There are currently two internal auditors and you need a review by at least one before going to prod. You need reviews by both to exceed 100m TVL.

If you've got to this phase you will know who they are.

---

##### 16
**8. Launch with a low debt ratio**

Congratulations you've almost made it! The last step to prod is Yearn multisig signers adding it a live vault. The multisig is delegated this power by YFI holders. 

To start with your strat will only be given a small amount of funds.

---

##### 17
**9. Form or join a committee**

To go above $10m TVL a strategy needs to be assigned to a committee. This is a group of at least 3 people who monitor the strategy 24/7. 

They are responsible for the safety and maintenance of the strategy and get 2/3rds of the strategist's fees.

---

##### 18
**10. Get an external audit**

Yearn will pay for your strategy to be audited by a good firm. There is a long waiting list but if you're growing in TVL and very promising it will be pushed forward. 

An external audit improves your risk score which leads to a higher TVL allowance.

![](./image2.jpg?w=900&h=257)

---

##### 19

And that's it. You now have a strategy with > $100m in it and are well on your way to winning the Yearn Millennium Prize.

It is a difficult process (and it doesn't end once in prod with constant risk assessments and penetration testing). 

But achievable:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What&#39;s interesting is people have done it before, so it&#39;s not some gimmick. Contest open even to Coinbase engineers. <a href="https://t.co/Rmj00fiqw5">https://t.co/Rmj00fiqw5</a></p>&mdash; banteg (@bantg) <a href="https://twitter.com/bantg/status/1459659745523118088?ref_src=twsrc%5Etfw">November 13, 2021</a></blockquote>
