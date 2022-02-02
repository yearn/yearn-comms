---
title:  "古いyearnガバナンスから請求"
image:
  src: ./cover.jpg
  width: 1783
  height: 716
date: "2021-07-10"
author: Dudesahn
translator: Cripu
---

ソース: [twitter](https://twitter.com/dudesahn/status/1413567068583104512)

##### 1

昔の[@iearnfinance](https://twitter.com/iearnfinance)のステーキングコントラクトをチェックしてみました。

~オリジナルのステーキングプールで未クライムの約30YFI
~v1ステーキングコントラクトでは、約8.5YFIがステークされています。
~v2のステーキングコントラクトでは764YFIがまだステークされており、750kドルのyCRVがクライム可能😬。

約29mドルのステーキングされたLP、YFI、クライム可能な報酬 :point_down:

![](image1.png)

##### 2

自分にクライムできる資金があるかどうかわからない？

https://etherscan.io にアクセスして、次のいずれかのアドレスを入力してください。

• YFI Farming Pool 1: 0x0001FB050Fe7312791bF6475b96569D83F695C9f
• YFI Farming Pool 2: 0x033E52f513F9B98e129381c6708F9faA2DEE5db5

##### 3

• YFI Farming Pool 3: 0x3A22dF48d84957F907e67F4313E3D43179040d6E
• YFI Gov Staking v1: 0xb01419E74D8a2abb1bbAD82925b19c36C191A701
• YFI Gov Staking v2: 0xBa37B002AbaFDd8E89a1995dA52740bbC013D992

コントラクトの下にある「コントラクトを読む」をクリックし、「balanceOf」の下に自分のアドレスを入れます 👀

![](image2.png)

##### 4

もし、>0の値が表示されたら、おめでとうございます！あなたはYFIや報酬をクライムすることができます。:partying_face:

ステークした資産や報酬をすべてクライムするには、Write Contractにアクセスしてウォレットを接続し、exit()を呼び出します。

![](image3.png)

##### 5

新しいYFIやyCRVを手に入れたら、http://yearn.finance/vaults にアクセスして私たちのvaultに預けることができます。また、友人である@CreamdotFinance🍦に行ってこれらの資産を借り入れたり、@MIM_Spell 🧙♂️を使って新しいyvYFIを借り入れたりすることもできます。

##### 6

また、次のことも付け加えておきましょう。
ステークがないからといって、報酬をクライムできないわけではありません。balanceOf()と同様に、read Contractで請求可能な報酬をearned()で確認し、write Contractで請求可能なものはgetReward()で請求することができます! 🤑

![](image4.png?w=694&h=422) </br>

![](image5.png?w=378&h=252)