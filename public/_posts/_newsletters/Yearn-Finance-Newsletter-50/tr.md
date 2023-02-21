---
title: "Yearn Finance Haber Bülteni #50"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator: Dastronom
---

### 5 Aralık 2021'de Sona Eren Hafta

![](./cover.jpeg?w=576&h=288)

Yearn Finance Bülteninin 50. baskısına hoş geldiniz. Bu bültenle amacımız, Yearn'i ve daha geniş kripto topluluğunu ürün lansmanları, yönetim değişiklikleri ve ekosistem güncellemeleri de dahil olmak üzere en son gelişmelerden haberdar etmektir. Yearn Finance hakkında daha fazla bilgi edinmek istiyorsanız, resmi [Twitter](https://twitter.com/iearnfinance) ve [Medium](https://medium.com/iearn) hesaplarımızı takip edin.

## Özet

- Yearn'in yeni Kullanıcı Arayüzü
- YFI Tokenomik Güncelleme Önerisi
- Güncellenen Yearn Dokümanları
- YIP-64 Nisabı Yakalayamadı
- Yearn Convex'e 23M veCRV'yi Delegate etti
- Yearn Snapshot Stratejisi
- Yearn'de Vault'lar
- Ekosistem Haberleri

## Yearn'in yeni Kullanıcı Arayüzü

![](./image2.jpg?w=512&h=512)

Topluluğumuzdan aldığımız tonlarca geri bildirimle [yearn.finance](https://yearn.finance/) sistemini sıfırdan yeniden oluşturduk. Şu anda hayata geçti, o yüzden bir deneyin.

En ilginç özelliklerden biri (bize göre) Simülasyonlar özelliğidir. Önceki UI sürümlerinde vault'lara para yatırmak için Zapper desteği ekledik, böylece örneğin ETH veya Zapper tarafından desteklenen herhangi bir jeton ile 3CRV vault'una para yatırabilirsiniz; bu hızlı ve kullanışlıdır ve para yatırma işleminizde bir takas olacağı anlamına gelir. Sorabileceğiniz "Simülasyon.." mesajı nedir? Bu "Simülasyon..." etiketi, giriş belirteçlerinizi kontrol eder ve Zapper'ın API'si ve işleminizin simülasyonunu hevesle yürüten harika bir hizmet olan Tenderly ile kontrol eder. Bu simülasyon, para yatırma işleminizin bir önizlemesi gibi tam çıktının ne olacağını hesaplar. örneğin ETH>3crv.

Peki neden faydalı ve harika mı? İlgili protokoller ve zincir üstü durumun dinamik olduğu göz önüne alındığında, alabileceğiniz takribi vault jetonlarıyla ilgili iyi bir tahminde bulunmak zor. Slipajınız beklenenden daha büyük olabilir veya jeton gidişatınız başarısız olabilir ve size gaza ücretine mal olabilir, vb. Bu simülasyon, para yatırma veya çekme işlemlerinde size gaz ücretlerinde tasarrufu sağlayabilir.

Para çekme, tahmin edilmesi zor olan başka bir alandır. Simülasyonlar, vault koşulları göz önüne alındığında geri çekilip çekilemeyeceğinizi kontrol etmeye yardımcı olur, bazıları strateji tahsislerine bağlı olarak diğerlerinden daha likittir.

Bir "Simülasyon Başarısız.." mesajı alırsanız, işlemle ilerlerseniz, büyük olasılıkla geri dönecektir.

v3 kullanıcı arayüzü yeni olduğundan, bu kullanıcı deneyimini daha da sorunsuz hale getirmek için daha fazla çalışma yapılıyor.

Kaputun altına [buradan](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f) bakın. Geliştiriciyseniz [buradan](https://github.com/yearn/yearn-finance-v3) katkıda bulunun.

## YFI Tokenomik Güncelleme Önerisi

YFI belirteçleriyle ilgili topluluk tekliflerine yönelik desteği ölçmek için bir snapshot anketi yayında.

Şu anda oylama için 5 seçenek var ve çalışma adları ySplit, veYFI, xYFI, BurnKEYs ve Status Quo. [ySplit Önerisi](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) , birim önyargısıyla mücadele etmek için YFI belirtecini 10.000 ila 1.000.000 arasında bölmeyi önerir. [veYFI önerisi](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit), hazine kazançlarının gitmesi gereken vault'ları dikte eden yönetim haklarını almak için belirli bir süre için YFI'yi kilitlemeyi önerir. [xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit), fazla hazine kazançlarının gönderileceği bir YFI stake vault'u oluşturulmasını önerir. [BurnKeYs](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit), YFI belirtecinin üretim işlevinin kalıcı olarak devre dışı bırakılmasını gerektirir, böylece arzı 36.666 belirteçle sınırlandırır. Status Quo, YFI tokenomiklerini mevcut durumunda bırakacak ve sahipleri ve potansiyel yatırımcıları faydalar hakkında bilgilendirecektir.

[Snapshot sayfasında](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea) oy verebilirsiniz. Katkı sağlayan tüm topluluklara teşekkür ederiz. Haiku dahil, çalışma grubundan bir güncelleme [burada](https://docs.google.com/document/d/1-YEfXqXgTm-qzhPRUKs5allfX1XqYUOYwr_49FApnLU/edit) bulunabilir.

## Güncellenen Yearn Dokümanları

Birkaç ay önce Yearn'e katkıda bulunanlar, dokümanlarımızı dostane ve ulaşılabilir kılmak için yeniden yazmaya başladılar.

Tamamen yenilenen dokümanlar, kullanıcılara, geliştiricilere, ortaklara rehberlik etmek ve daha önce görülmemiş birçok girişle merakınızı beslemek için burada.

Yeni dokümanlara [buradan](https://docs.yearn.finance/) göz atın.

## YIP-64 Nisabı Yakalayamadı

![](./image3.jpg?w=1100&h=759)

YIP-64: Stabil olmayan jetonlar yVault'larının düzeltme ücretleri, oylama aşamasına girdi ve ayarlama ücretlerine karşı çoğunluk oylamasıyla sona erdi.

Öneriye [buradan](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2) bakabilirsiniz.

## Yearn Convex'e 23M veCRV'yi Delegate etti

![](./image4.jpg?w=873&h=615)

Yearn, Curve'ün yeni yerel güçlendirme yetkilendirme özelliğini kullanarak 23 milyon veCRV'yi Convex Finance'ye devretti. Bu, her iki DAO'muz için fabrika havuzlarının verimini artıracaktır. Bu, normal havuzları, ücretleri veya oylamayı etkilemez.

[Burada](https://convex-boost-delegation.vercel.app/) kullanılmayan veCRV'yi devretmek, tüm Convex katılımcıları için fabrika ödüllerini artırır, bu da Convex ve Yearn için verimi artırmaya yardımcı olur. Delegasyon işlemimize [buradan](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f) ulaşabilirsiniz.

## Yearn Snapshot Stratejisi

Birkaç önemli oylamaya hazırlanırken Yearn'in Snapshot stratejisi yenilendi.

Verimli YFI, yani cüzdandaki YFI, tüm Yearn v2 vault'ları, Bancor, Balancer v2, Uniswap v2, Sushi (MasterChef dahil), MakerDAO, Unit, Instadapp (MakerDAO dahil) ile oy vermenizi sağlar.

Sözleşme [burada](https://github.com/yearn/snapshot-strategy) ve dağıtım [burada](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code) bulunabilir.

## Yearn'de Vault'lar

Tüm aktif yVault'larımız için stratejilerin ayrıntılı bir açıklamasını [buradan](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) okuyabilirsiniz.

## Ekosistem Haberleri

[YFI'nizi Qredo Network platformunda güvenle kullanın](https://twitter.com/QredoNetwork/status/1461031928564436994)

[tracheopteryx sunumuyla Into the Byte Code'yi dinleyin](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet artık Yearn’nın beta vault'larını Fantom'da destekliyor](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract Polygon'un en hızlı gelişen 5 protokolü arasına giriyor](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[Coordinape katılım videosunu izleyin](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[Checkout Yearn'nın Argent L2 cüzdandaki 2$'dan az ücretlerine bakın](https://twitter.com/argentHQ/status/1468934923264401419)

[Tesseract vault'ları depozito limitlerini artırdı](https://twitter.com/tesseract_fi/status/1468217220966801413)

[elinizde $yvBOOST veya $yvYFI varsa ETHDubai bieltlerinde indirim kazanın](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[Zapper’in Yearn Simülasyonuna tuttuğu ışığa bakın](https://twitter.com/zapper_fi/status/1466447565302517765)

[On the Ledger podcast'i ile Facu'nun Yearn hakkındaki görüşlerini dinleyin](https://twitter.com/Ledger/status/1465678701635506185)

[YFI artık Flexa'nın uygulamasında harcanabilir](https://twitter.com/FlexaHQ/status/1469092114038415364)
