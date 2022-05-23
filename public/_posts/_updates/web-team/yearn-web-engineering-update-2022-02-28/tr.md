---
layout: post
title: "Web Mühendislik Güncellemeleri: 28 Şubat, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-09"
translator: Dastronom
---

Orjinal kaynak: [Web Engineering Update 28 Şubat](https://yearnweb.substack.com/p/yearn-web-engineering-update-18a?s=w)

#### 28 Şubat, 2022'de başlayan Hafta

## **Özet 💌**

Web3 alanında meydana gelen değişim miktarından baharın havada olduğunu söyleyebilirsiniz. Iron Bank, Yearn'in kullanıcı arayüzünden bağımsız olarak dallara ayrıldı; Ekipleri akıcı bir kullanıcı deneyimi sağlamak için yola çıkarken harika bir site (app.ib.xyz) geliştirdiler. Zapper, artan API çağrıları (ve bir bellek sızıntısı) nedeniyle geçici olarak kapatıldı ve bu da jeton bakiyelerimize biraz baş ağrısı verdi. Bu sorun, geçmişe bakışımıza da yansıyan 3. parti uygulamalara olan güvenimizi yeniden gözden geçirmemize neden oldu. Kendimizi dışa bağımlılıktan ayırmak ve Front end'imizin her zamankinden daha esnek olmasını sağlamak için gelecek haftaki planlama döngümüzü sabırsızlıkla bekliyoruz.

## **Başardıklarımız ♨**

**V3 Front End**

- düzeltme: zapper hatası için geçici uyarı
- özellik: iron bank değişiklikleri
- düzeltme: lint uyarıları
- düzeltme: 0 gösterimi altında modal verimi
- düzeltme: tw.card img

**SDK v1.1.1**

- test: EarningsInterface#accountAssetsData için özellik eklemek
- düzeltme: yazmadan önce izin verilenler listesini manuel olarak kullanmak
- test: AllowListService için özellik eklemek

## **Sürekli Odaklanma ve Olağanüstü Sorunlar 🍙**

**Döngü Odağı 🔎**

- Topluluğumuzun üzerinde çalışması için sorunları GitHub'a iletmek için mühendislerimizi bu döngüye zorladık.
- Arbitrum lansmanı fevkalade iyi gitti ve bu yazının yazıldığı tarih itibariyle, yönetilen varlıklarda şimdiden 2 milyon doların biraz üzerine çıktık.

**Önemli sorunlar 🏴‍☠️**

- Yearn exporter ile sürekli büyüyen vault listesini yönetmek
- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **Gelin Bizimle İnşa Edin! 👷**

GitHub'ımıza sürekli olarak genel sorunlar ekliyoruz ve depolarımızdan herhangi birinde her zaman yeni katkıları memnuniyetle karşılıyoruz

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
