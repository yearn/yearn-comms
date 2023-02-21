---
layout: post
title: "Web Engineering Update: 2022年3月14日"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-22"
translator: Cripu
---

オリジナルソース: [Web Engineering Update 14 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-report?s=r)

#### 2022年3月14日までの週

## **要約 💌**

今週の最優秀賞はフロントエンドとSDKにパートナートラッキングを設定することができたことです。これにより、どのサービス（ledger、shapeshift、等）が最も利用されているかを把握することができ、パートナー専用の機能を追加したり、どのパートナーがコミュニティによって利用されているかを把握したりすることができます。また、今週はいくつかの素晴らしいビジュアルの修正がありました。トグルスイッチがオンかオフかをより明確に示すように修正し、UIが壊れてフロントエンドに渡す量が0になる新しいボールトを修正しました。（ちなみに、Curveのロケットプールが現在Yearnでライブ中です。）週末の深夜に、サイトを再びきれいにするために迅速な変更を行ってくれた開発者に敬意を表します。

## **達成 🎊**

**V3 フロントエンド v1.0.29**

- 修正: トグルスイッチのオン/オフの明確化
- 修正: 単一データポイントのボールトグラフの表示を避ける
- 功績: コントラクトアドレスに新しいzapperのザップインを設定
- 修正: getTokenAllowanceの前のウォレット接続
- 修正: tally walletの最有効化
- 修正: apyのオーバーフロー

**SDK v1.2.1-0**

- リファクター: zapperのデータ取得エラーをより丁寧に扱う
- 修正: トークン残高を取得するためのスイッチのためのif構文変更
- テスト: キャッシュ単一テストの追加
- 修正: vaultDynamicのアドレスを渡すことでレンズアダプタが正しいパラメータで呼び出されるように修正
- リファクター: 利用可能なネットワークでサポートされているすべてのトークンをリターン
- 功績: アドレスプロバイダーを利用してコントラクトアドレスを取得
- 修正: メインネット分散型のサブグラフ設定を追加
- 功績: ボールト入金用のパートナーサービスを追加

## **進行中の注目点と未解決の課題 🍙**

**サークルフォーカス 🔎**

- 連結解除 / 依存の最小化
- UI改修の終了
- Fantomのザップイン

**未解決の課題 🏴‍☠️**

- いくつかのウォレットの問題 (ambireの一括取引, rainbow wallet)
- ひとつのボールトがフロントエンドにTVL情報を渡さない
- SDKで作成するユニットテストがまだ必要
- https://github.com/yearn/yearn-finance-v3/issues
- https://github.com/yearn/yearn-sdk/issues

## **わたしたちと一緒につくりましょう！ 👷**

わたしたちは継続的にgithubにパブリック課題を追加しており、どのレポでも常に新しい貢献者を歓迎しています。

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
