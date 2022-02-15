---
title:  "Decentralized payroll management for DAOs"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
date: '2021-03-31'
author: Andre
translator:
---

# Decentralized payroll management for DAOs

DAO's don't have top down management. There is no HR department. There are no contracts and no salary negotiations. How do you properly incentivize and reward contributors?

When the yearn DAO first started, it adopted governance weighted salaries (I use the term loosely, since technically they are once off, once per month grants, if you don't contribute the following month, no grant). Governance weighted salaries where simply proposals set up by community members, where they proposed that contributor X should receive Y payment. These require active management and need monthly DAO votes / approvals. This doesn't scale well.

To address the scaling and overhead problems, the yearn team built [Coordinape](https://coordinape.com/), these are my favorite kind of products since they originate out of a personal need, but can be generalized to help any other organizations / DAO's struggling with a similar problem.

What is [Coordinape](https://coordinape.com/), simply put anyone wishing to contribute to yearn (or their own DAO) can register (currently using github details), every epoch (for yearn 1 month), you can select the team members you have been working and interacting with, below, yearn contributors;

![](1.jpg?w=1400&h=674)

For example, my interactions below (members I marked as having interacted with this past epoch);

![](2.jpg?w=700&h=337)

Now each member has a set amount of allocation points, and can allocate points to the contributors they have worked with based on what they think of their contributions.

So if we look at the current epoch contributions we see the following;

![](3.jpg?w=700&h=339)

Each line is an allocation from one member to the next. This builds up a contributor graph that is weighted towards the members that have the most interactions and allocations.

Now simply, during the epoch, yearn earns Y amount in fees / contributions / rewards / etc, this accrues to the Coordinate contributor contract, at the end of the epoch contributors can claim their grant based on their contributions in the epoch.

**Conclusion**

[Coordinape](https://coordinape.com/) allows decentralized teams and DAO's without top down management or HR to autonomously allocate and reward contributors with funds, all done via sybil resistant social graphs.

Decentralized payroll for flat organizations.

The project is currently still closed source, however the team are actively looking to engage with other DAO's and organizations, should you have any interest or queries, please reach out to [@tracheopteryx](https://twitter.com/tracheopteryx)
