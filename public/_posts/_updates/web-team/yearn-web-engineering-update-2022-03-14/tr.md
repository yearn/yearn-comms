---
layout: post
title: "Web Mühendislik Güncellemeleri: 14 Mart, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-22"
translator: Dastronom
---

Orjinal kaynak: [Web Engineering Update 14 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-report?s=r)

#### 14 Mart, 2022'de başlayan Hafta

## **Özet 💌**

Bu hafta özel kazancımız, front end ve SDK ayarlarını takip edecek bir iş ortağı elde etmiş olmamızdır. Bu, hangi hizmetlerin en çok kullanıldığını (ledger, shapeshift, vs.) bulmamıza yardımcı olacak, böylece ortaklarımıza özel daha fazla özellik getirmeye başlayabilir ve topluluk tarafından hangi ortakların kullanıldığı hakkında daha iyi bir fikir edinebiliriz. Ayrıca bu hafta bazı görsel düzeltmeler de yaptık: açık veya kapalı olup olmadığını açıkça belirtmek için açma/kapama düğmesinin sabitlenmesi ve yeni bir vault, front end'e geçtiği 0 miktarıyla kullanıcı arayüzümüzü bozdu (bundan bahsetmişken, Curve's Rocket Pool Şimdi Yearn'de yayında.) Bir hafta sonu gece geç saatlerde sitenin tekrar temiz görünmesini sağlamak için bazı hızlı değişiklikler yapan geliştiricilerimize sesleniyorum.

## **Başardıklarımız 🎊**

**V3 Front End v1.0.29**

- düzeltme: açma ve kapama anahtarına netlik kazandırmak
- düzeltme: tek veri noktası için vault grafiğini göstermekten kaçınmak
- özellik: sözleşme adresinde yeni zapper zap ayarlamak
- düzeltme: getTokenAllowance'dan önce bağlanan cüzdan
- düzeltme: tally cüzdanını yeniden etkinleştirme
- düzeltme: apy taşması

**SDK v1.2.1-0**

- refactor: zapper veri alma hatalarını daha zarif bir şekilde ele almak
- - düzeltme: belirteç bakiyelerini almak için if ifadesini değiştirmek
- test: önbellek birimi testleri eklemek
- düzeltme: lens adaptörünün doğru parametrelerle çağrılabilmesi için vault Dinamik adresleri iletmek
- refactor: mevcut ağdaki tüm desteklenen belirteçleri döndürmek
- özellik: sözleşme adreslerini almak için adres sağlayıcıyı kullanmak
- düzeltme: ana ağ merkezi olmayan alt grafiği için yapılandırma eklemek
- özellik: vault'lara para yatırmak için ortak hizmeti eklemek

## **Sürekli Odaklanma ve Olağanüstü Sorunlar 🍙**

**Döngü Odağı 🔎**

- Bağımlılıkları ayırma / en aza indirme
- UI yenilemesini bitirme
- Fantom'da Zap

**Önemli sorunlar 🏴‍☠️**

- Birkaç cüzdan sorunu (Ambire toplu işlemler, Rainbow cüzdanı)
- Bir vault kendi TVL'sini front end'e geçirmiyor
- Hala SDK'da oluşturulan bazı birim testlerine ihtiyaç var
- https://github.com/yearn/yearn-finance-v3/issues
- https://github.com/yearn/yearn-sdk/issues

## **Gelin Bizimle İnşa Edin! 👷**

GitHub'ımıza sürekli olarak genel sorunlar ekliyoruz ve depolarımızdan herhangi birinde her zaman yeni katkıları memnuniyetle karşılıyoruz

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
