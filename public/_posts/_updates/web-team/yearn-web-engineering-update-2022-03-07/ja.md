---
layout: post
title: "Web Engineering Update: 2022年3月7日"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-15"
translator: Cripu
---

original source: [Web Engineering Update 07 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-updates?s=r)

#### 2022年3月7日までの週

## **要約 💌**

今週はUIの改修に集中しつつ、いくつかのエラーを素早く修正する必要がありました。ZapperはZapInのコントラクトを更新してくれたものの、コードの更新により修正するまで数々の問題をひきおこしました。UIの改修では、フォントの更新やデザインチームが作成した新しいアイコンや画像の採用を進めました。また、テーマ名の変更も行われ、フロンドエンドチームのメンテナンスが容易になり、コミュニティが独自のテーマを実装することがより明確になりました。最後に、コミュニティからサポートを得た、承認処理を行った後にページを更新すると再度承認を求められるという問題に取り組んでいます。

## **実績 🎊**

**V3 Front End v1.0.27**

- 功績: huobiウォレットのサポートを追加
- 功績: 出金の承認に署名
- 修正: ボールトの詳細にtx成功ボタン
- 修正: ボールトトークンをMetaMaskに追加
- 修正: サブグラフの日付フォーマットに関する簡単な修正
- 功績: 許可リストを使ったtxの検証
- 功績: zapperコントラクトの更新

**SDK v1.1.1**

- リファクタリング: zapperのデータ取得エラーを処理
- 修正: トークン残高を取得するためのスイッチとしてif構文を変更
- 修正: プロトコル収益に非推奨のコメントを追加
- テスト: キャッシュ統合テストを追加

## **進行中の注目点と未解決の課題 🍙**

**サークルフォーカス**

- 連結解除 / 依存の最小化
- UI改修の終了
- Fantomのザップイン

**未解決の課題**

- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **わたしたちと一緒につくりましょう！ 👷**

わたしたちは継続的にgithubにパブリック課題を追加しており、どのレポでも常に新しい貢献者を歓迎しています。

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
