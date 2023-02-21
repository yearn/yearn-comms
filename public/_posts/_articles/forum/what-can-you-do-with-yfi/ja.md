---
title:  "What can you do with YFI?"
image:
  src: ./cover.png
  width: 768
  height: 429
date: '2021-05-05'
author: Dark Ghosty
translator: Cripu
---

# YFIで出来ることはなんですか？
この記事では[DeFi](https://www.coindesk.com/what-is-defi)で利回りを得るために、YFIを使って何ができるのか、それぞれの選択肢にどんなリスクがあるのか、得られる利回りはどれくらいかを調べました。

- APYの表示はすべて2021年4月27日のものです。
- 負債を負っているすべてのポジションは、YFI価格の30％の下落にも耐えられるよう最大レートの70％での借入を想定しています。
- これは財務アドバイスではありません。DeFiプロトコルとのインタラクションは**危険**です。ご自身で調査してください。

___

## **始める前に、DeFi InsuranceでYFIの保険を検討してみませんか?**
DeFi保険とその仕組みについて説明します。DeFi保険は特定のプロトコルの資金の重大な損失につながるsolidityコードのバグを *ほとんど* カバーします。しかし、何をカバーし、何をカバーしないかを知るために、各DeFi保険の文書を注意深く読むようにしてください。

例えば、Yearnのボールトに保険をかけていたものの、MakerDAOのコードにバグがあったためにボールトのCDPが資金を失った人がいるとします。この場合、Yearnにのみ保険をかけていた人は損失を請求することができず、保険金は支払われません。これは損失の原因がyearnのスマートコントラクトのバグではなかったためです。保険の詳細については、私たちの[discord](discord.yearn.finance)の#supportでお気軽にお尋ねください。

### **DeFiをカバーするプロバイダー**
- [Nexus Mutual](https://app.nexusmutual.io/#/SmartContractCover)
    - [資料](https://nexusmutual.gitbook.io/docs/)
- [Cover Protocol](https://app.coverprotocol.com/)
    - [資料](https://docs.coverprotocol.com/)

___

## ***直接入金***
この章ではYFIを単体で利用する方法について説明します。分散型取引所の[Automated Market Maker (AMM)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers)に流動性を提供するなど、他の方法で利回りを得るにはYFIと他のトークンをペアにする必要があり、YFIへの完全なエクスポージャーが損なわれる可能性があります。これはリスクがないということではなく、[価格変動リスク(IL)](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi)と呼ばれるものに対処しなくて済むということです。*スマートコントラクトで資金を持つことは、常に何らかのリスクを伴います*。

### Yearn: v2 YFI yVault
Yearn FinanceのYFI v2 yVaultにYFIを預けると、最適な場所で利回りを稼いでいる間ゆっくりとくつろぐことができます。この記事を書いている時点では、yVaultはCDPをオープンしミントされたDAIを使ってファームを行っています。また、yVaultはYFIをCREAMやAAVEに貸し出してより多くの利回りを得ています。

#### サイト
- [Yearn.Finance](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)

#### ツール
- [Yearn Hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): このリンク先にはボールトの中の資金がどのストラテジーにどれだけ割り当てられているかが記載されています。
- [Yearnのボールト](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3): ここではyvYFI v2ボールトの各ストラテジーが何をしているかを見ることができます。
- [Yearn Vision](yearn.vision): ボールトの統計情報を表示するダッシュボードです。
- [v2 YFI yVaultへのザップイン](https://zapper.fi/invest?protocol=yearn&contractAddress=0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1&modal=invest)

#### リスク
現在、このボールトに関連するリスクはyearnのボールトのコントラクト（[audited](https://github.com/yearn/yearn-security/tree/master/audits)）のスマートコントラクトリスク、MakerDAOのCDPのリスク、そしてYFIをCREAMとAAVEに貸し出して利回りを高めるストラテジーに依存する両プラットフォームのスマートコントラクトのリスクがあります。ボールトはCDPを監視し続けており、[Health ratio](https://medium.com/iearn/delegated-vaults-explained-fa81f1c3fce2)を3に保っています。これは、DAIでミントできる最大値の1/3だけをミントし、そのDAIを使ってファームを行うことを意味します。

#### 保険
この記事を書いている時点では、YFI v2ボールトに完全に保険をかけるためにはYearn、MakerDAO、AAVE、CREAMのカバーが必要です。また、リスクが高いと思われるプロトコルのみをカバーするようにカバーするプロトコルを選択して購入することもできます。このyVaultが保険のためにどのプロトコルと相互作用するかは[yearn hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)で見ることができます。

#### APY
APY: 2.866%
計算: 先月のネット、年率換算。
ソース: [vaults.finance: yearn v2 API](https://vaults.finance/all)
参考: APYは一時的に24%のピークをつけた

このボールトはyearnチームによる最新のYFIボールトであり、最近のBDP*のファーミングのように、ファームが安全であればより良いYFIファームに飛び込んで迅速に動けることを証明しています。
*BDP : Big Data Protocolの略。

- [Yearn.Finance: YFI Vault](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Yearnのボールトページでは、計算式に基づいてWeeklyまたはMonthlyのAPYが表示されています。 

___

## ***直接入金, 価格変動損失(IL)の可能性有り***
イールドジェレネーション技術の中には、IL(価格変動損失)のリスクを完全に取り除くことはできないものの軽減するように設計されているものもあります。その一例がBancorプロトコルへの流動性の提供です。資金が100日以上BancorにステークされILにさらされた場合、引き出し時に失った価値に相当するBNTが補助されます（ユーザーは自由にYFIに変換して戻すことができます）。つまり、実際にはBancorで100日以上ステークすればILを気にする必要はありません。

### Bancor: YFI/BNT 片面保護プール
BancorはSushiswapやUniswapのようなAMMですが、Bancor v2.1でロールアウトされているという1つの重要な違いがあります。Bancor v2.1では *もし* プールに100日以上滞在した場合、ILプロテクションが適用されます。この保護は30日から始まり、100日を超えると完全に保護されます。現在、YFIプールのインセンティブ付き報酬は停止していますが、これを復活させるための[proposal](https://gov.bancor.network/t/proposal-re-enable-lm-rewards-on-yfi/1838)があり、これが承認されればこのYFIプールの利回りが向上します。

#### サイト
[Bancor YFIプール](https://app.bancor.network/eth/portfolio/stake/add/single/0xAeB3a1AeD77b5D6e3feBA0055d79176532e5cEb8)

#### ツール
- [CeazorのBancorガイド v2.1: YFI/BNT Single-Sided Protected Pool](https://youtu.be/LhLMhizDNwE?t=23)
- [Bancor資料](https://docs.bancor.network/)
- [Bancor Duneダッシュボード](https://duneanalytics.com/Bancor/bancor_1)
- [Bancor v2.1 Staking for (DeFi) Dummies](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e)
- [YFI/BNTの片面保護プールにザップイン](https://zapper.fi/invest?protocol=bancor&contractAddress=0x555981b82743aa443cb1c3002c85ba9d795d4596&modal=legacy-invest)

#### リスク
Bancorのスマートコントラクトのリスクと[bancor v2.1モデル](https://blog.bancor.network/proposing-bancor-v2-1-single-sided-amm-with-elastic-bnt-supply-bcac9fe655b)の信頼性リスクがあります。Bancorは[監査](https://docs.bancor.network/ethereum-contracts/security)を受けています。

##### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合はBancorに保険をかけるだけでフルカバーとなります。 

#### APY
APY: 3.7%
計算: 先月のネット、年率換算。
ソース: Bancorチーム

- [YFIプールAPY](https://duneanalytics.com/queries/30793/62118)。YFIだけになるまで、各プールをシングルクリックします。そのプールのAPY統計が表示されます。

___

## ***[担保付債務ポジション](https://defipulse.com/blog/what-is-a-cdp)***
CDPベースのプロトコルでは、より少ない枚数のプロトコルが発行するトークン（通常はステーブルコイン）と引き換えにYFIを入金することができます。そして発行されたトークンを使ってファームを行い、利回りを得ることができます。この方法は他の方法に比べて時間がかかり、清算率を超えていないかどうかをCDPで常に監視する必要があります。また、ミントされたステーブルコインを使って他の場所でイールドを見つけ、それも管理する必要があります。

この章では担保率をパーセントで表しています。これは、Unit Protocolのケースのように担保比率が69%の場合、ステーブルコインをミントするために預けたあなたのYFIの価格が1000ドル相当であれば、ステーブルコインをミントできる最大値は690ドルとなるということです。これはあなたが借りられる*最大*であり、この比率を超えてしまうと清算されることに注意してください -- そうならないように、この比率よりはるかに低い金額を借りることをお勧めします。

### MakerDAO
MakerDAOは、自分の暗号通貨でローンを組むための最も古く最も長く続いているDappです。MakerDAOでYFIを使ってDAIステーブルコインをミントし、そのDAIを使ってイールドファームを行うことができます。

#### サイト
- [Oasis.app](https://oasis.app/borrow)

#### ツール
- [DeFiSaver](https://app.defisaver.com/): CDPヘルスレシオの管理を支援

#### リスク
CDPが担保率57%以上になった場合の清算リスク、Makerdaoのスマートコントラクトの障害、オラクルの障害、DAIを預けたり貸し出したりするプロトコルのスマートコントラクトの障害。

#### 保険
DeFiの保険の場合、スマートコントラクトのバグによって資金が失われた場合に完全にカバーするためには、MakerDAOと、DAIステーブルコインの貸出先、入金先のプロトコルにも保険をかける必要があります。

#### APY
APY: -5.5% + (21.07% * 0.44) = 3.7708%
計算: Daiの手数料 - (ステーブルコインのイールドファームのAPY(v2 crvIB yVaultにザップイン) * 安全にミントすることのできるDAIの%)
追記: DAIを借りるためには、MakerDAOに5.5%の年会費を支払う必要があります。これは一例ですが、どこでもイールドファームをすることができます。
ソース: [Oasis App Borrow - Select collateral type YFI-A](https://oasis.app/borrow)

### Unit Protocol
Unit ProtocolはMakerDAOに似たCDPプラットフォームです。ただし、このプラットフォームではDAIの代わりにUSDPステーブルコインをミントすることができます。Unitでは担保率が69%とMakerDAOよりも高く、監査も受けていますが新しいプラットフォームでもあります。

#### サイト
- [Unit Protocol](https://unit.xyz/)

#### ツール
- [資料](https://docs.unit.xyz/)
- [Ceazorのビデオチュートリアル](https://youtu.be/zlFBeoTHJUs?t=33)

#### リスク
担保率が69%を超えると清算されるリスク、Unit Protocolのスマートコントラクトの障害、オラクルの障害、USDPの貸出先や入金先のスマートコントラクトの障害があります。Unit Protocolの監査は[こちら](https://github.com/unitprotocol/protocol_docs)からご覧いただけます。

#### 保険
DeFi保険の場合、スマートコントラクトのバグによって資金が失われた場合に完全にカバーするためには、Unit ProtocolやUSDPステーブルコインの貸出先、入金先のプロトコルにも保険をかける必要があります。

#### APY
APY: -5.5% + (21.07% * 0.53)  = 5.67%
計算: Unitの年間手数料5.5% + ([v2 crvIB yVault](https://yearn.finance/vaults/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7)を使った利回り * 安全にミントすることのできるUSDPの%)
追記: 例としてYearnのUSDPボールトを利用しましたが、より高い利回りのファームを見つけた場合にはどこでも使用することができます。
ソース: [Unit Protocol](https://unit.xyz/asset/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)

___

## ***借入 & 貸出***
この章では、YFIを貸し出したり、YFIを担保にしてステーブルコインや他のトークンを借りてファームしたりできるプラットフォームを紹介します。これはCDPのポジションを持つのとは異なり、ステーブルコインを年間固定レートでミントすることができますが、貸し借りは通常可変レートです。このカテゴリーでは、借りたステーブルコインをどこに貸すかだけでなく、貸し借りのレートやプールの利用率なども気にしなければなりません。あなたがYFIを貸しているYFIプールが完全に利用されている場合、つまり貸し出されたYFIをすべて借りている人がいる場合は、プール内の流動性に余裕ができるまで引き出しを待つことになります。

### Cream Finance
Cream.Financeは分散型レンディングプロトコルです。YFIを担保にステーブルコインを最大50％まで借りることができます。

#### サイト
- [Cream.Finance](https://app.cream.finance)

#### ツール
- [Cream資料](https://docs.cream.finance/)
- [Ceazorのビデオチュートリアル: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=598)

#### リスク
担保率50％を超えると清算されるリスク、クリームファイナンスのスマートコントラクトの障害、オラクルの障害、ステーブルコインの貸出先や入金先のスマートコントラクトの障害などがあります。また、イールドファームのAPYが借入のAPYを上回っているかどうかを手動で確認しないと損をします。Cream.Financeの監査は[こちら](https://docs.cream.finance/audit-report)で確認できます。

#### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合に完全にカバーするためには、Cream Financeと、ステーブルコインを貸し出す先にも保険をかける必要があります。

#### APY
APY: 0.27% - 18.81% + (60.30% * 0.39) = 4.977%
計算: 供給APY (YFI) - 借入APY (USDC) + (ステーブルコインのイールドファームのAPY (v1 crvEURS yVaultにザップイン) * 安全にミントすることのできるステーブルコインの%)。
追記: これは一例であり、どこでもイールドファームをすることができます。
ソース: [Cream](https://app.cream.finance) と [Yearn](https://yearn.finance/vaults/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC) の利回り。

### Iron Bank
Iron BankはCream v1と似ていますが、リストする資産をより厳選しておりAlpha Homora v2やYearn Financeのようなホワイトリストに載っているプロトコルであれば、ほとんど担保なしで資金を借りられるようになっています。少ない担保で借りられるため、 Iron Bankの稼働率はCREAMやAAVEよりも高い傾向にあります。

#### サイト
- [Iron Bank](https://beta.yearn.finance/#/ironbank)

#### ツール
- [Iron Bank資料](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

#### リスク
公表されている担保率を超えると清算されるリスク、Iron Bankのスマートコントラクトの障害、オラクルの障害、借りたステーブルコインの貸出先のスマートコントラクトの障害などがあります。Iron Bankの監査は[こちら](https://github.com/trailofbits/publications/blob/master/reviews/CREAMSummary.pdf)からご覧いただけます。

#### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合に完全にカバーするためには、Iron Bankと、ステーブルコインを貸し出す先にも保険をかける必要があります。

#### APY
APY:
計算:
ソース:
追記: 現在、IronbankではYFIを担保にした借り入れはできませんが、将来的には変更される可能性があります。

### AAVE
AAVEでもYFIでローンを組むことができます。AAVEでは他のコインを最大40％まで借りることができます。AAVEではステーブルコインを借りるために固定金利と変動金利がありますが、MakerDAOやUnitでは常に5.5%です。AAVEでステーブルコインを借りる場合はより安いレートで借りられる可能性がありますが、ここでローンを組む際には担保のレベルと借入レートの両方が変動金利かどうかに注意する必要があります。

#### サイト
- [AAVE](https://app.aave.com/)

#### Tools
- [Ceazorのビデオチュートリアル: AAVE v2](https://youtu.be/eMP_uIwniHc?t=46)
- [Ceazorのビデオチュートリアル: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=407)

#### リスク
担保率40％を超えると清算されるリスク、AAVEのスマートコントラクトの障害、オラクルの障害（Chainlinkを使用）、ステーブルコインの貸し出し先のスマートコントラクトの障害などがあります。AABEの監査は[こちら](https://docs.aave.com/developers/security-and-audits)からご覧いただけます。

#### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合に完全にカバーするためには、AAVEと、ステーブルコインを貸し出す先にも保険をかける必要があります。

#### APY
APY: 0.11% - 3.98% + (60.30% * 0.31) = 14.83%
計算: 供給APY (YFI) - 貸出APY (TUSD) + (ステーブルコインのイールドファームのAPY (v1 crvEURS yVaultにザップイン) * 安全に借りることのできるステーブルコインの%)
追記: これは一例です。あなたが選んだどのイールドファームでも選んだステーブルコインを使うことができます。
ソース: [AAVE - YFI](https://app.aave.com/deposit/YFI-0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5)

___

## ***流動性提供***
このセクションでは、価格変動損失にさらされるストラテジーについて説明します。また、AMMプールの両サイドに流動性を提供する必要があります。**YFIをステークする場合は、同額のETHも追加する必要があります。**

### Sushiswap YFI/WETH Pool
SushiswapはプールにSUSHIの報酬が補助されているため、一般的にはUniswapよりも利回りが高いAMMです。

#### サイト
- [Sushiswap](https://app.sushi.com/yield)
#### ツール
- [YFI Sushi プール](https://analytics.sushi.com/tokens/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)
- [apy.vision YFI/ETH Sushi　プール](https://app.apy.vision/pools/sushiswap_eth-YFI-WETH-pool-0x088ee5007c98a9677165d78dd2109ae4a3d04d0c)
- [Sushiswap YFI/WETH　プールにザップイン](https://zapper.fi/invest?protocol=sushiswap&contractAddress=0x088ee5007c98a9677165d78dd2109ae4a3d04d0c&modal=invest)

#### リスク
価格変動損失リスク、Sushiswapのスマートコントラクトリスクがあります。

#### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合はSushiswapに保険をかけるだけでフルカバーとなります。 

#### APY
APY: 39.08%
計算: YFI/WETH sushi SLPトークンの年間APY
ソース: [Sushiswap Yield](https://app.sushi.com/yield)

### Uniswap v2 YFI/WETH Pool
一般的にUniswap、Bancor、SushiswapのようなAMMでは、流動性プロバイダーの手数料が高くなるため最もボリュームのあるプールに入りたいと考えます。平均してSushiswapはUniswapよりも流動性が高いため一般的にはSushiswapに流動性提供をするのがおすすめですが、UniswapもSushiswapよりも利回りが良い場合があります。

#### サイト
- [Uniswap YFI/WETH Pool](https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e)

#### ツール
- [Zapper Uni YFI/WETH](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)
- [YFI/WETHペアの価格変動損失計算](https://app.sommelier.finance/pair?id=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&timeWindow=total): このプールでLPを開始した場合にどれだけ得もしくは損をするのかが表示されます。
- [Uniswap Analytics YFI/WETH](https://info.uniswap.org/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Apy.vision YFI/WETH](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Uniswap v2 YFI/WETH プールにザップイン](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)

#### リスク
価格変動損失リスクとスマートコントラクトリスクはUniswapで流動性を提供する際に注意しなければならない事項です。

#### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合はUniswapに保険をかけるだけでフルカバーとなります。 

#### APY
APY: 20.79%
計算: ILを差し引いた直近30日間の年率換算。
ソース: [apy.vision](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)

### Pickle.Finance pSUSHI YFI/WETH jar
PickleはYearnのボールトのような（jarsと呼ばれる）もので、SUSHI YFI/WETHプールからSUSHIの報酬を自動合成します。またステーキングも同時にするとPICKLEを追加報酬として受け取ることができます。

Pickle.Financeに入金するには、SLP(Sushiswap LP token)をPickle jar[こちら](https://app.pickle.finance/jars)にステークし、それをPickle.Financeのファーム[こちら](https://app.pickle.finance/farms)に入金する必要があります。また、PICKLEをDILLにロックすることで、ファームで獲得したPICKLEの報酬を最大2.5倍にすることができます。

#### サイト
- [Pickle.Finance Farm](https://app.pickle.finance/farms)
- [Pickle.Finance Jar](https://app.pickle.finance/jars)

#### ツール
- [Dillブースト計算](https://app.pickle.finance/dill)
- [Ceazorのチュートリアル: Yearn Zap into yveCRV-ETH Pickle Farm](https://youtu.be/Q3HELI9TfjQ?t=25)

#### リスク
SushiswapのLPポジションの価格変動損失リスク、Pickle.FinanceとSushiswapのスマートコントラクトリスクがあります。

#### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合に完全にカバーするためには、SushiswapとPickle.Financeの両方に保険をかける必要があります。

#### APY
APY: 43% ブースト無し, 58% フルブースト。
計算: APY, フルブーストはDILLにPICKELをロックした場合のブーストです。
ソース: [Pickle.Finance Farms](https://app.pickle.finance/farms)

___

## ***レバレッジをかけた流動性提供***
この章では価格変動損失を受ける可能性があるため、清算されないように負債比率を見ておく必要があります。

### Alpha Homora v2
Alpha Homora v2にUniswapやSushiswapのLPトークンを預けることで、最大1.75倍のレバレッジでファームを行うことができます。Alpha Homoraでは、1つの資産（基本的にはプール内の他の資産へのオートザップイン）でこれらのプールをファームすることができます。3つのトランザクションですべてのステップは自動化され、プール内でファームされたトークンはpickle.financeのように複利で運用されます。pickle.financeのファームプロダクトを使うとPICKLEがもらえるのと同じように、レバレッジを使ってAMMプール（UniswapまたはSushiswap）をファームした場合、Alpha Homoraは通常得られる利回りに加えてALPHAを提供します。[こちら](https://alphafinancelab.gitbook.io/alpha-homora/where-does-apy-come-from-for-each-pool)を参考にしてください。

#### サイト
- [Alpha Finance](https://homora.alphafinance.io/farm)

#### ツール
- [資料](https://alphafinancelab.gitbook.io/alpha-homora/)
- [Ceazorのビデオチュートリアル](https://youtu.be/WKW8TsTyGOg?t=41)

#### リスク
負債比率が60%LTV(Loan to Value)を超えた場合の清算のリスク、Alpha Homora v2のスマートコントラクトの障害、どのプールを活用しているかのスマートコントラクトの障害(UniswapもしくはSushiswap)があります。Alpha Homora v2の監査は[こちら](https://github.com/peckshield/publications/blob/master/reviews/PeckShield-Security-Review-Alpha-Homora-v1.0.pdf)からご覧いただけます。

#### 保険
DeFi保険の場合、スマートコントラクトのバグで資金が失われた場合に完全にカバーするためには、Iron Bankと、使用しているAMMにも保険をかける必要があります。

#### APY
APY: 75.38%
計算: Sushi ETH/YFI Poolに1.5倍のレバレッジ
ソース: [Alpha Homora - Farm](https://homora.alphafinance.io/farm)
