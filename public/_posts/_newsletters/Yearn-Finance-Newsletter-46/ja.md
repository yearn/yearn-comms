---
title:  "Yearn Finance Newsletter #46"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: '2021-09-12'
translator: Cripu
---

#### 2021年9月12日までの週次レポート

![](/_posts/_newsletters/Yearn-Finance-Newsletter-46/cover.jpeg?w=880&h=440)

Yearn Finance Newsletterの第46号へようこそ。このニュースレターの目的は、プロダクトのローンチ、ガバナンスの変更、エコシステムの更新など、最新のニュースをYearnとより広いクリプトコミュニティにお知らせすることです。Yearn Financeについてもっと知りたいという方は、私たちの公式[Twitter](https://twitter.com/iearnfinance)と[Medium](https://medium.com/iearn)アカウントをフォローしてください。

## **概要**

- Yearnの舞台裏
- yvBOOST Vaultの入門書 
- Yearnの四半期財務報告  
- プロトコルの累積収益が41Mドルに到達   
- Yearnの金庫について 
- エコシステムニュース

## **Yearnの舞台裏**

ご存知のように、YearnはDeFiのイールドファンクションプロトコルであり、多くのストラテジストが、様々なプロトコルに効率的に配分する柔軟なスマートコントラクトを用いて、ユーザーが最適なリターンを得る方法をコーディングしています。Yearnは競争の激しいイールドアグリゲーション市場に対応する必要があるため、戦略を迅速に展開する必要がありますが、これは常にセキュリティリスクがあることを意味します。

現在、64のVaultsに176個のストラテジーがありますが、セキュリティリスクを解決するためには、しっかりとしたリスクフレームワークが必要です。セキュリティリスクを軽減するために、問題点を把握するためのシミュレーションボットや、チェーンのヘルスチェックなどのオプションを追加しています。Yearnの緊急時の対応については[こちら](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/EMERGENCY.md)をご覧ください。

また、 [yearn.watch](https://yearn.watch/)では、Vaultsの詳細やストラテジーを見ることができます。

Yearnのセキュリティ対策の詳細はstorming0xさんのツイート[こちら](https://twitter.com/storming0x/status/1436851219864059906)でご確認ください。

## **yvBOOST Vaultの入門書**

![](/_posts/_newsletters/Yearn-Finance-Newsletter-46/image2.jpg?w=1456&h=753)

CRVはcurve.fiのガバナンストークンで、最大4年間ロックすることができ、投票したりプロトコル手数料をクライムしたりできます。Yearnを使ってCRVをveCRV(vote-escrowed CRV)にロックすることで、Yearnを介して、ファームされたCRVの一部を定期的にyveCRV Vaultsに寄付することで、より多くの報酬を得ることができます。つまり、通常のCRV報酬に加えて、YearnのCurveプロトコル手数料もクライムすることができるようになります。

しかし、Yearnに預けられているveCRV（yveCRVとして）では、Curveに投票することができません。このような小さな障害があってもYearnはシミュレーションを行い、すべての保管場所で利回りが最大になるように投票します。

Yearnに新たに追加されたものに、yveCRVの複利版であるyvBOOST Vaultsがあります。これはyveCRVの複利版で、CRVをここに入れておくとプロトコルの報酬をクライムし、自動的にyveCRVを購入して複利効果を発揮します。yvBOOSTではまだ投票できませんが、Vaultが自動的に投票してくれます。入金して、報酬をお楽しみください。

もしVaultsからの入金でステーブルコインが必要な場合は、SushiSwapでyveCRVとyvBOOSTを交換することができます。

CRVを持っていない場合は、Yearn Zapsのおかげで、自分のウォレットにあるほぼすべてのトークンをこれらの金庫に預けることができます。そしてYearnのスマートコントラクトが自動的にあなたのトークンをyvBOOSTに変換します。

いつものように、DeFiのために最高レベルのイールドインフラを構築してくれているストラテジストに感謝しています。

Vaultsは[yearn.finance/vaults](https://yearn.finance/vaults)でご覧いただけます。

## **Yearnの四半期財務報告**

![](/_posts/_newsletters/Yearn-Finance-Newsletter-46/image3.jpg?w=1276&h=429)

Yearnコミュニティのメンバー数名が、2021年4月から2021年6月までの期間を集計した非公式の四半期財務報告書を作成しました。このレポートは、一般に公開されている情報をもとに作成されており、損益計算書と貸借対照表が含まれています。このレポートは、第三者の専門的な会計事務所による監査を受けておらず、いかなる種類の財務、投資、またはアドバイスを表すものでもありません。本レポートは情報提供のみを目的としています。

[こちら](https://github.com/yearn/yearn-pm/blob/master/financials/reports/2021Q2-yearn-quarterly-report.pdf)でレポートをチェックすることができます。

## **プロトコルの累積収益が41Mドルに到達**

![](/_posts/_newsletters/Yearn-Finance-Newsletter-46/image4.jpg?w=1456&h=828)

Yearnは、ローンチ以来約41Mドルの収益を上げています（預金者が得た利息を除く）。過去30日間では、約6Mドルの収益がこのプロトコルによってもたらされました。このデータから推定すると年間収益は約60Mドルになると予測されます。

Yearnの累積収益やその他の統計は[こちら](https://www.yfistats.com/)からご覧いただけます。

## **YearnのVaultsについて**

[こちら](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3)ですべてのアクティブなVaultsのストラテジーについて詳細な説明を読むことができます。

## **エコシステムのニュース**

[yAcademy DAOのインターンに登録して、ライブのスマートコントラクトを監査しよう](https://twitter.com/yAcademyDAO/status/1435866622556659717)

[YFI/ETH SushiSwapのLPトークンがOnXのAlpha Vaultsで担保として利用可能に](https://twitter.com/OnXFinance/status/1435229990681972741)

[YearnはETHGlobalとETHOnlineをサポートしており、ハッカーには4,000ドルの賞金とYearnチームとのコラボレーションの機会が用意されています](https://twitter.com/iearnfinance/status/1436302183545196546)

[Fixed ForexにrKP3Rの報酬を追加しました](https://twitter.com/thekeep3r/status/1437402914474037256)

[9月21日（火）午後7時30分（UTC）から開催されるMessari's #Mainnet2021に、tracheopteryxが登壇します。このパネルにはRyan Watkinsと0xMakiが参加しており、"初日から分権化：組織設計の教訓"について話します](https://twitter.com/tracheopteryx/status/1436257062971977729)

[173.4MドルのTVLをYearnにもたらしてくれたabracadabra.moneyに感謝します](https://twitter.com/danielesesta/status/1437372628054982663?s=20)

[ape.taxでWOOFYを使ったファーミングをするには](https://twitter.com/ape_tax/status/1436908119817211913?s=20)