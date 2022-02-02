---
title:  "yvBOOSTを使ってより多くのブースト、複利、モヒートを！"
image:
  src: ./cover.png
  width: 1050
  height: 543
date: '2021-09-14'
author: Qosmonot
translator: Cripu
---

# yvBOOSTを使ってより多くのブースト、複利、モヒートを！

### Yearnと[Curve.fi](http://curve.fi/)との協力関係は私たちのインフラの中核であり、あなたがブーストを高めるための中核でもあります。

🔵🤝🌈

_Yearnのコントリビューター[_qosmonot_](http://twitter.com/qosmonot)の投稿です。_

Yearnの多くのvaultsはCurveプールを利用して戦略を構築しているため、CRVトークンを利用して報酬配分をプールに向けて投票することでストラテジーを最適化しています。YearnはCRVトークンのスタックを着実に増やしており、これらの保管場所への報酬を増やしています。

![](image1.png?w=1050&h=651)

Yearnを通してCRVトークンを賭けることを選択すれば誰でもこの恩恵を受けることができます。それでは、Yearnが提供するサービスとあなたのCRVの保有量を増やす方法をご紹介します！

## CRVって何?

CRVは、[Curve.fi](http://curve.fi/)プロトコルを運営する分散型組織であるCurveDAOのガバナンスおよびユーティリティトークンです。CRVトークンの主な目的は、[Curve.fi](http://curve.fi/)プラットフォーム上の流動性提供者にインセンティブを与えるとともに、できるだけ多くのユーザーにプロトコルのガバナンスに参加してもらうことです。CRVトークンの主な用途は、投票、ステーク、ブースティングの3つです。veCRVとはvote-escrowed CRVの略で、一定期間（1週間から4年まで）ロックされたCRVを表します。

### ステーキング

veCRV（ステークされたCRV）は、Curveプロトコルからの取引手数料のシェアを受け取ります（生成されたすべての取引手数料の50％）。それらの手数料は回収され、TriPool（DAI+USDC+USDT）のLPトークンである3CRVの購入に使用され、veCRVの保有者に分配されます。

### ブースティング

ステーキングに加えて、CRVのもう一つの大きなインセンティブは提供された流動性に対して報酬を高めることができることです。Vote Locking CRVでは、DAOに参加するための議決権を獲得しCRVの報酬配分を選択したプールに向けることで、提供した流動性に対して最大2.5倍のブーストを得ることができます。

### 投票

CRV保有者が自分のCRVをvote-lockしてveCRVに変更すると、さまざまなDAOの提案や提案されたプールパラメータの変更に投票したり、自分で変更を提案したりすることができます。

ネイティブのveCRVは譲渡することができず、CRVをVote-lockすることでしか入手できないことに注意してください。

CRVを[Curve.fi](http://curve.fi/)でステークすることで流動性提供プールへのブーストを積極的に管理することも、Yearnが専用のVault(yveCRV, yvBOOST)を使ってCRVのステークを代行することもできます。また、YearnのyVaultトークンは[Curve.fi](http://curve.fi/)でCRVをステークするのとは異なり取引や譲渡が可能です。

## yveCRV yVault

![](image2.png?w=128&h=128)

### CRVをより良いブーストで稼ごう

ユーザーがこのvaultにCRVを預けると、そのCRVは[Curve.fi](http://curve.fi/)のプラットフォーム上でveCRVとしてロックされ、ユーザーにはveCRVをトークン化したyveCRVが返されます。このvaultはCurveの取引手数料を継続的に獲得することができます。報酬は3Crv（Curveの3pool LPトークン）として毎週クライムすることができます。

これは[Curve.fi](http://curve.fi/)上で自分で直接行うこともできますが、yveCRVのyVaultを使いたいと思う良い理由があります。**より多くの報酬を得ることができるんです！**

どれくらい報酬が増えますか？このvaultから得られる報酬は2倍以上になります！Yearnは、[Curve.fi](http://curve.fi/)ベースのストラテジーで獲得したCRVの10%を定期的にこのyveCRV vaultに寄付し、yveCRV vaultの入金者にCurveプロトコル手数料のYearn分をクライムできるようにしているためこのような結果になっています。これはYearnがプロトコルのためにクライムできた報酬のすべてをyveCRVの入金者に与え、毎週の報酬を増やすことを意味します。

CRVトークンをvaultにロックするということは、[Curve.fi](http://curve.fi/)の議決権をyearnに委ねるということです。Yearnは常にシミュレーションを行い投票配分を最適化することですべてのvaultの利回りを最大化し、他のvaultに預けているユーザーの利益につなげます。

**これで報酬をクライムしてして退職後にモヒートを楽しむことができます。**しかし、もう一つの選択肢として、報酬をvaultに戻して複利効果を狙うこともできます。そのための"Restake"ボタンも用意されています。手動で行うこともできますが、Yearnでは次のvaultを使ってあなたをサポートします。

## yvBOOST yVault

![](image3.png?w=128&h=128)

### 複利でCRVを稼ごう

yvBOOST yVaultは上記で説明したyveCRV yVaultを完全に自動化・複利化したものです。

簡単に言うと、このvaultは毎週の3CRV報酬を自動的にクライムし、その報酬を使ってより多くのyveCRVを獲得します（マーケットでの購入かミントのいずれか、ハーベスト時に最も効率的な方法によります）。

一度入金すると、yveCRVのyVaultと同様にあなたのCRVトークンの議決権はYearnによって処理され最適化されます。あなたは[Curve.fi](http://curve.fi/)の毎週のプロトコル料金をクライムすることを心配する必要はありません。

これはあなたのCRVトークンが複利の力を利用して指数関数的に成長する“set-and-forget” vaultです。

先に述べたように、yveCRVまたはyvBOOSTのいずれかに預けられたCRVはロックされているため、vault内のCRVトークンから得られた利益をどのように引き出すのか疑問に思うかもしれません。yveCRVのvaultから出金することはできませんが、実はSushiswapでこの2つのvaultのトークンを交換することができます。これはYearnとそのユーザーがSushiswap上で流動性を提供し、yveCRVとyvBOOSTのトークンをETH（または実際には何でも）にスワップすることができるからです。

### ちょっとしたアルファ情報

Yearnは市場からyvBOOSTを購入し、それをyveCRVにアンラッピングしてyvBOOSTのvaultに寄付することでyvBOOSTの根本的な価値を高めます。

## CRVステーカーのためのYearn yVault

CRVを[Curve.fi](http://curve.fi/)プラットフォームに直接ステークするということは、CRVトークンをロックしてプロトコルの手数料（3CRV）のシェアを手動で要求できる譲渡不可能なveCRVトークンと交換することを意味します。このveCRVトークンを使用して手動で投票をリバランスし、[Curve.fi](http://curve.fi/)プラットフォームに提供された流動性を高めることができます。

## YearnのyveCRVとyveBOOSTのvaultsで稼ごう

これらのYearnのvaultは、CRVのステーカーに対してYearnがロックしたCRVのシェアを提供することで、CRVをステークしながら流動性を維持したい人にとって理想的な場所を作っています。

-   [Curve.fi](http://curve.fi/)プロトコル(3Crv)からの取引手数料のシェアを獲得し、自動的に再投資する(yvBOOST vaultの場合)。
-   Yearnがクライムする[Curve.fi](http://curve.fi/)のプロトコル料金のシェアを獲得し、自分の報酬に加えて(より多くの3CRV!)自動的に再投資する(yvBOOST vaultのため)。
-   veCRVトークンの集合的な議決権は、YearnのCurve Poolのすべてのvaultで報酬が最大になるように自動的に最適化されリバランスされます。
-   入金したCRVに対してyveCRVまたはyvBOOSTトークンを受け取ることで、利益を出したりステークしたCRVポジションから簡単に退出することができます。

Yearnが行っている暗号資産のイールド生成とリバランスの自動化は、特にCRV保有の場合に当てはまります。YearnのyveCRVまたはyvBOOSTは、CRVをステークするための強力な複利運用 “set-and-forget” の場を提供します！

次回の記事では、keepCRVのための賄賂やEPSのプロセスについてご紹介します。それまでは...

![](image4.png?w=1050&h=543)
