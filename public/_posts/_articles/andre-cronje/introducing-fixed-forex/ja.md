---
title:  "Fixed Forexの紹介"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: Cripu
---

# Fixed Forexの紹介 (USD, EUR, ZAR, JPY, CNY, etc)

**免責事項;**

- トークンはありません
- 監査は完了していません
- コントラクトは試験的です

**主要な機能;**

- ガバナンス（もしくはマルチシグ）無し
- 環境設定無し
- 手数料無し
- バリュー展開無し
- 穏やかな精算
- チェーン上の流動性に基づいた動的なミントの上限設定
- チェーン上のプロトコルに基づいたLTVs

**Fixed Forex**

Fixed Forexは、不変的・手数料無し・ガバナンス無しの分散型ステーブルコインフレームワークとして設計されています。

LTV(Loan-to-value比率)はCompound、Aave v1、Aave v2、Iron Bankから得られます。これらのシステムが受け入れ可能な証拠金を追加・更新するとFixed Forexも動的に更新されます。

ミント上限（ユーザーが特定の証拠金に対してどれだけの流動性をミントできるか）はチェーン上の利用可能な流動性から導き出され、チェーン上の流動性が高いほどミント上限も高くなります。

Fixed Forexでは穏やかな精算システムを導入しています。ユーザーのポジションをイーブンに戻すための最低限の負債のみが返済され、ドローダウンイベントで全スタックが精算される心配はありません。

今回のリリースではコントラクトをイーサースキャンで確認することはできませんが、下記にアドレスとABIを掲載していますのでご覧ください。

[0x92FC8E6EfdF389e2527d14393b15F543f9a03420](https://etherscan.io/address/0x92fc8e6efdf389e2527d14393b15f543f9a03420)

[ABI](https://gist.github.com/andrecronje/4ce11e8603a7f61af4619a86647db1d4)

フルリリースでは、curve.fiのクリプトプールを基にして分散型のFX市場を実現する予定です。