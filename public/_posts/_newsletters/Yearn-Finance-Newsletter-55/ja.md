---
title: "Yearn Finance Newsletter #55"
image:
  src: ./cover.png
  width: 1152
  height: 576
author: Yearn
date: '2022-01-26'
translator: Cripu
---
# Yearn Finance Newsletter #55

### 2022年1月23日までの週

![](./image1.jpg?w=1100&h=554)

Yearn Finance Newsletterの第55号へようこそ。このニュースレターの目的は、プロダクトのローンチ、ガバナンスの変更、エコシステムの更新など、最新のニュースをYearnとより広いクリプトコミュニティにお知らせすることです。Yearn Financeについてもっと知りたいという方は、私たちの公式[Twitter](https://twitter.com/iearnfinance)と[Medium](https://medium.com/iearn)アカウントをフォローしてください。

## 要約

- Fantomボールトの現状
- Fantomエコシステムスポットライト -Yearn
- Yearnのウェブアップデート
- Yearn Finance 解説
- Yearnのボールト
- エコシステムニュース

# Fantomボールトの現状

![](./image2.jpg?w=674&h=680)

Andre Cronje氏とDaniele Sesta氏の新プロジェクト「Splidity ve(3,3)」の台頭により、FantomのTop20TVLプロジェクトに配られるエアドロップを奪い合うヴァンパイアアタックがFantomにやってきました。

これを活かし、保有している資産をYearn.financeの快適なボールトにしまっておくことができます。Yearnは0xDAO、veDAO、Scream、Curve、Beets、Tarot、そしてそれ以降で最高の収穫をもたらします。Fantomボールトはこれらすべてのストラテジーを持ち、もっとも収益性の高いものに自動的にローテーションすることで30分毎に利益を実現するため、手持ち無沙汰になることはありません。ヴァンパイアウォーズが歴史漫画の1ページになった後でも私たちはあなたの味方です。

あなたはどうする？今日から[yearn.finance/vaults](https://yearn.finance/vaults)に入金しましょう。

# Fantomエコシステムスポットライト - Yearn

![](./image3.jpg?w=1456&h=819)

Yearn貢献者のTracheopteryx氏が、Yearnの概要と私たちのミッションを、デイリーユーザー、パートナー、ビルダーに焦点をあてながら説明してくれました。

Yearnのコアプロダクトはボールト、Iron Bank、研究所、そしてYFI/WOOFYトークンです。YFIの起源をさらに掘り下げ、Tracheopteryx氏はなぜFantomがYearnが構築した最初のサイドチェーンに選ばれたのかを説明しました。

インタビューの最後には、ホルダーに与えられた買い戻しや、xYFI、veYFI、そしてボールトゲージなどYFIトークンの今後のアップグレードについても言及されています。

記事の全文は[こちら](https://fantom.foundation/blog/fantom-ecosystem-spotlight-yearn/?__cf_chl_rt_tk=rdrT2KHoFbjTe1yyUOmIDA92AeTmrMPKtQW5yT18mwk-1643234302-0-gaNycGzNCH0)からご覧いただけます。

# Yearnのウェブアップデート

![](./image4.jpg?w=900&h=734)

今週のYearnウェブアップデートはUIに追加されたAPYホバーツールチップと、ボールト出金のダスト修正です。

近日中に、セキュリティの改善（詳細情報付き）、マルチチェーンUI/UXの改善、新しいチェーンのサポートが予定されています。

すべてのアップデートは[こちら](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7?r=2y79e&utm_campaign=post&utm_medium=web)でご確認ください。

# Yearn Finance 解説

![](./image5.jpg?w=1000&h=531)

Yearnのボールトは、Yearnユーザーがクリプトエコシステムから最高のリスク調整された利回りを受け取ることを保証する厳しい審査プロセスを経たストラテジストにより構築されたIOUトークンを利回りにしています。

Yearnで以前使われていたストラテジーのひとつは、v1のイーサリアムyVaultで確認できます。ユーザーがETHを入金すると、ETHは担保としてMakerDAOに貸し出され、それを使ってDAIを借り、DAIのyVaultに預けられます。

よくある質問として、「Yearnはどのように/いつ、ボールト内の資金を移動して手数料を徴収するのか？」「Yearnはどうやってトークンを失うことなく常に生成するストラテジーを保証するのか？」等があります。ストラテジーの鍵となる重要な機能の一つは「ハーベスト」と言われています。ハーベスト関数が呼び出されると、利益実現とストラテジーへの再投資を行うリバランスプロセスが開始されます。ストラテジストは、ストラテジーの健全性を保証するためにいくつものオンチェーン監視ツールを使用しています。その一つであるYearn Watchは、ブロックチェーン上の主要なメトリックスライブをいくつも提示する素晴らしいUIのサイトです。

さらに、YearnとKeep3rは、ボールトのパフォーマンスを維持するために必要なタスクを自動化することで強い相乗効果を発揮します。ストラテジーを構築するためには、Vyper（yVaults用）と Solidity（ストラテジー用）を十分に理解する必要があります。ストラテジストになるためには、デプロイ先のブロックチェーンエコシステムに関する知識（トークンノミクスやストラテジー自体に使用するすべてのトークンのドキュメントを徹底的に調査することで習得可能）、CryptoZombiesのレベル4終了と同様のSolidityプログラミング知識、gitやeth-browny、ganacheの扱い方などに関する知識が最低限必要です。

上記のツールの基本を理解すれば、わたしたちのストラテジーテンプレートをコピーする準備が完了です！このテンプレートで最初のストラテジーを構築するために変更すべき関数は、prepareReturn、adjustPosition、そしてliquidatePositonです。
ストラテジーのテンプレートは[こちら](https://github.com/yearn/brownie-strategy-mix)をご覧ください。

MacroWormsが書いてくれた資料は[こちら](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)で確認できます。

# Yearnのボールト

稼働中の全yVaultのストラテジーの詳細説明は[こちら](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3)で確認できます。

# Ecosystem News

[Ambire Walletの新しい統合により、Yearnのボールトに直接入金が可能に](https://twitter.com/AmbireWallet/status/1483087593285820416)

[Shapeshift DAOでYearnのボールトを使用](https://twitter.com/ShapeShift_io/status/1484599573289086984)

[Tesseract FinanceのVESQコラボレーションによる新情報](https://twitter.com/tesseract_fi/status/1483484524143128578)

[YearnがFantomのナンバー１アグリゲーターに](https://twitter.com/vannny365/status/1484385291947368448)

[Yearn貢献者によってつくられたApeFrameworkをチェック](https://twitter.com/ApeFramework)

[Yearnの概要と評価指標を読む](https://twitter.com/fuuurma/status/1484503576076599298)
