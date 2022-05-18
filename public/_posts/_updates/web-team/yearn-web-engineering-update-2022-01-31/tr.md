---
layout: post
title: "Web Mühendislik Güncellemeleri: 31 Ocak, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin & dudesahn
date: "2022-02-04"
translator: Dastronom
---

Orjinal kaynak: [Web Mühendislik Güncellemeleri: 31 Ocak](https://yearnweb.substack.com/p/yearn-web-engineering-update-160?s=r)

#### 31 Ocak, 2022'de başlayan Hafta

## **Özet 💌**

Ocak 2022'yi bitirirken birkaç haftalık temizlik:

- Arbitrum desteği, ana sitenin yanı sıra YearnWatch'in yakın tarihli bir sürümüne dahil edilmiştir. Biraz daha fazla testle Yearn, 3. zincirimizde vault'ları ve stratejileri başlatmaya hazır olacak.
- Web ekibi, şimdiye kadar yaşadığımız en büyük benzersiz kullanıcı ziyareti artışıyla mücadele ederken, bazı artan sıkıntılarla da karşı karşıya kaldı. Bu, daha fazla ayrıntının geleceği bir altyapı ekibinin büyümesini sağladı.
- Web ve stratejistler, APY'mizi elden geçirmeye başlamak için bir araya geldi: daha fazla veri ekleyin, kullanıcılar için daha kullanışlı hale getirin ve görsel olarak daha erişilebilir hale getirin.
- Son olarak, birden fazla web deposundaki sorunlara yardımcı olan yeni katkıda bulunanlardan hoş bir baskı aldık.

## **Başarılanlar ✅**

**SDK Piyasaya sürme 1.0.28**

- özellik: vault ayrıntılarında çoklu stratejileri destekleme
- düzeltme: simülasyon örneği adresini güncelleme
- düzeltme: yeni önbellek uç noktasına geçiş
- özellik: simülasyonlar için hata işlemeyi iyileştirme 🤬
    - Simülasyonlar başarısız olduğunda, destek ekibimiz sorun giderme konusunda harika bir iş çıkardı ancak onlara daha fazla araç vermenin zamanı geldi. Bu özellik, kullanıcıların ve destek ekibinin sorunları artan hassasiyetle çözmesine yardımcı olacaktır.
- düzeltme: devre dışı disableAllowlist gerekli değil
- düzeltme: API'den strateji meta verilerini okuma

**SDK Piyasaya sürme 1.0.27**

- düzeltme: sayfalandırma performansını iyileştirme

**SDK Piyasaya sürme 1.0.26**

- düzeltme: izin verilenler listesi hizmetiyle validateCallData için kullanıcı doğru kapsamları
 
**SDK Piyasaya sürme 1.0.25**

- düzeltme: yeni iron bank meta veri türleri ekleme
    - Bu, özellikle, Iron Bank'ın yakın zamanda uyguladığı teminat üst sınırı özelliğini ele aldı.

**Web Piyasaya sürme 1.0.13**

- özellik: txError'a hata türü ekle
- düzeltme: sayfalandırma getirme

**Web Piyasaya sürme 1.0.10**

- özellik: txError'a hata türü ekle
- düzeltme: sayfalandırma getirme

**Web Piyasaya sürme 1.0.9**

- düzeltme: jeton bakiyesi getirme hatası
- özellik: entegrasyon için test kimliği alanları ekleyin
- özellik: arbitrum desteği 🚀

**Muhtelif**

- özellik: github ci, linting bağlılıkları, readme.md ekleme
- düzeltme: strateji yardımcı sözleşmesi için sabit testler
- özellik: yönetilebilir mülkiyet
- düzeltme: strateji yardımcı sözleşme düzeltmesi için testler: kaldırılan lens sözleşmesi ve testi
- test: ironbank kayıt bağdaştırıcısı için test ekleme
- düzeltme: vault açıklaması bağlantısı
- düzeltme: dinamik varlıklar için sayfalandırma ekleme
- özellik: 0xDAO stratejileri ekleme 🤑
    - Kısa ömürlü olmasına rağmen, bu sürerken eğlenceliydi 🙃
- özellik: fiyatlar yardımcısına multicall ekleme
- özellik: TUSD ve UST fantom IB'yi ekleme
- düzeltme: lens sözleşmesini kaldırma

## **Sürekli Odaklanma ve Olağanüstü Sorunlar 🍙**

**Döngü Odağı 🎯**

- Döngü takvimimizi yeniden düzenlerken önceki güvenlik ve istikrar temalarını bu döngüde tutmaya karar verdik. Uçtan uca testler, ekibi herhangi bir hata veya performans sorunuyla güncellemek için uyarı botlarıyla birlikte yararlı olmaktan fazlasını kanıtladı.

**Önemli sorunlar 🐛**

- Fantom RPC'si. Bu Yearn'e özgü olmasa da kullanıcıları etkilemeye devam ediyor. Yearn, altyapımızı kendi kendine barındırılan bir ağa geçti; umarız bu kullanıcıların genel RPC'de yaşadığı önceki sorunları çözer.
- APY hesaplamaları özellikle Fantom'da soru kaynağı olmaya devam ediyor. yearn-exporter deposuna yapılan yeni eklemeler neredeyse tamamlandı ve şunları sağlayacak:
    - Strateji bazında ileriye dönük (Curve/Convex) ve önceki hasat (tüm diğer vault'lar) APY
    - Vault düzeyinde haftalık, aylık ve başlangıçtan bu yana APY anlık görüntüleri.
    - Tüm bu yeni sayıları görüntülemek için çok temel bir istatistik sayfası ekleyeceğiz. 📊

## **Gelin Bizimle İnşa Edin! 👷**

GitHub'ımıza sürekli olarak genel sorunlar ekliyoruz ve depolarımızdan herhangi birinde her zaman yeni katkıları memnuniyetle karşılıyoruz

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
