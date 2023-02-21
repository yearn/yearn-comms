---
layout: post
title: "Yearn Finance Haber Bülteni #62"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-05-23'
translator: Dastronom
---

![](./image1.jpg?w=900&h=453)

Yearn Finance Bülteninin 62. baskısına hoş geldiniz. Bu bültenle amacımız, Yearn'i ve daha geniş kripto topluluğunu ürün lansmanları, yönetim değişiklikleri ve ekosistem güncellemeleri de dahil olmak üzere en son gelişmelerden haberdar etmektir. Yearn Finance hakkında daha fazla bilgi edinmek istiyorsanız, resmi [Twitter](https://twitter.com/iearnfinance) ve [Medium](https://medium.com/iearn) hesaplarımızı takip edin.

**Özet**

- V3 Vault'ları Geliyor
- Yeni Yearn Watch Sitesi
- Yearn Allowlist
- Yearn Topluluğu: MarcoWorms
- Yearn YFI'nizi Satın Almak İstiyor
- Yearn'deki Vault'lar
- Ekosistem Haberleri

## V3 Vault'ları Geliyor

![](./image2.jpg?w=900&h=429)

Yearn v3 Vault'ları, sistemlerimizin tamamen elden geçirilmesi ile alakalıdır ve kullanıma sunmaktan heyecan duyduğumuz altı önemli özelliği bulunmaktadır.

Küçük dilimler: Yearn her zaman kendini "yalnızca" vault'lara  adamıştır - saldırılardan veya kayıplardan kaçınmak için mümkün olan her şeyi yapan vault'lar. Daha yüksek güvenlik için yapılan ödünleşim genellikle daha düşük getiridir. v3, daha yüksek riskli, daha yüksek ödüllüvault'ları etkinleştirmek için "küçük dilimler" sunacak.

Solidity: v2 Vault'lar Vyper'da yazılmıştır ve şimdi v3 Solidity'yi kullanmaktadır. Bu, Yearn'ın çok daha büyük bir geliştirici tabanına erişebileceği anlamına gelir (DeFi kodunun ~%69'u Solidity'de, ~%10'da Vyper'da yazılmıştır). Hepsinden iyisi, Vyper hayranları onu v3 modülleriyle kullanmaya devam edebilir.

ERC-4626 ile standartlaştırılmış vault token'ler: Yearn katkıda bulunanları, Ethereum için yeni bir belirteç standardının yazılmasına yardımcı oldu: ERC-4626. v3'ün getiri sağlayan belirteçleri, ERC-4626'daki diğer tüm proje yapılarıyla tamamen birleştirilebilir.

Gaz optimizasyonu: Stratejistler, vault'larda jeton takası yapmak için ySwap'ları kullanır. Çok sayıda kod geliştirmesi, bu ve diğer süreçleri radikal biçimde gazı daha verimli hale getirecek ve bu da tüm vault'lardaki APY'leri artıracaktır.

Esnek stratejiler: Daha iyi modülerliğe sahip daha fazla strateji, Yearn vault'larını daha esnek hale getirecektir. Artık vault başına 20 stratejiyle sınırlı değiller ve iş ortakları vault yönetimi üzerindeki kontrolü bile paylaşabilir. Diğer protokollerin Yearn v3'ü nasıl kullandığını görmek için sabırsızlanıyoruz.

Otomasyon: Yearn v3, Keep3r Network'ten yararlanarak vault yönetiminin neredeyse her yönünü otomatikleştirecek. v3, vault'ların %100 otomasyonunu görüş alanına sokacak. Ve gerçek zamanlı hasatlarla daha iyi MEV korumasına izin verecek.

v3 yükseltmesi, Yearn tarihindeki en büyük güncelleme koleksiyonudur.

Küçük dilimler, modülerleştirme, şekillendirilebilir getiri taşıyan belirteçler ve daha erişilebilir bir programlama dili ile v3, Yearn'in yenilik yapma becerisine roket yakıtı dökecek.

Skeletor Spaceman'ın sözleriyle, "Hızlı hareket etmek ve bir şeyleri kırmak istemiyoruz". v3, Yearn'in oraya nasıl ulaştığıdır.

v3 Vault'ları hakkında daha fazla bilgiyi [buradan](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0) edinebilirsiniz.

Sizi [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) veya [Github](http://github.com/yearn)'da bize katılarak Yearn topluluğuna katılmaya, geri bildirimde bulunmaya ve katılmaya davet ediyoruz. Gel bizimle inşa et.

## Yeni Yearn Watch Sitesi

![](./image3.jpg?w=900&h=705)

Yeni [yearn.watch](https://yearn.watch/) sitesi yayına girdi ve son yinelememiz için birçok iyileştirme sunuyor.

Bu yükseltmelerden bazıları, son derece hızlı yükleme sürelerini, UI/UX yeni görünümlerini ve çok sayıda iyileştirmeyi ve uyarıları içerir.

Yeni siteye, riskler ve daha fazlası için yeni görselleştirmeler ile önemli miktarda ayrıntı eklendi. Site yeni bir katkıda bulunanlar ekibi tarafından ele alındığından daha pek çok şey gelecek.

## Yearn Allowlist

![](./image4.jpg?w=900&h=429)

Yearn web sitesini daha da güvenli hale getirmek için yakın zamanda Allowlist olarak adlandırılan yeni bir özellik tanıtıldı. Özünde, web sitesi/SDK aracılığıyla yapılan tüm işlemlerin, web sitesinin üretmesi mümkün olan tüm geçerli çağrı verilerinin kaydını tutan zincir üstü bir sözleşmeye göre doğrulanmasına izin verir.

Bu, web sitesinin, ister Zapper/0x'in API'si, ister Yearn'in kendi API'si aracılığıyla olsun, web sitesine verilerin sağlandığı çeşitli ortadaki adam saldırılarına açık hale gelmesini önler. Örneğin, Yearn'in API'si, kullanıcıların para yatırmaya çalışırken bunlardan birini onaylaması amacıyla kötü amaçlı adreslere sahip vault'ların bir listesini döndürürse, Allowlist işlemin yapılmasını engeller.

Diğer protokolleri de güvenliklerini artırmak için kendi Allowlist'imizden yararlanmaya davet ediyoruz. Kendi Allowlist'inizi oluşturmaya yönelik talimatlar daha ayrıntılı olarak açıklanmıştır.

Yearn Allowlist hakkında daha fazla bilgi edinmek için [buraya](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4) tıklayın.

## Yearn Topluluğu: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms, bu haber bültenlerinde ve Twitter'da sıklıkla görebileceğiniz içerikleri yazan ve pazarlama yapan bir Yearn katılımcısıdır.

Yearn'a katılmadan önce Marco kriptoyla uğraşıyordu ve fintech ve VC modelinden bıkmıştı. DeFi'yi öğrendikten ve Blue Pill manifestosunu okuduktan sonra Yearn'i öğrendi.

Yearn'de, Marco gününü genellikle iş birliği yaparak veya yeni makaleler yazarak geçirir. Makale yazmıyorsa, Yearn sosyal gruplarında, soruları olduğunda insanlara yardım ediyor.

Her zaman olduğu gibi, Yearn her kökenden herkesin gelişmesine izin veren rahat bir kültürü teşvik ediyor ve Marco, katkıda bulunanları inandıkları şeyi yapmaya gerçekten teşvik ettiğimizin farkında.

Yearn'e katkıda bulunan Defiglenn'nin hazırladığı [röportajın tamamına](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e) göz atabilirsiniz.

## Yearn YFI'nizi Satın Almak İstiyor

![](./image6.jpg?w=900&h=450)

Bazılarının sattığını duyduk.

Harika, çünkü satın alıyoruz.

YFI, Yearn'i oluşturmak için çok önemli olduğundan (ücretlendirme ve elde tutma stratejilerimizdeki rolü nedeniyle), sürekli olarak açık piyasadan YFI'yi geri satın alıyoruz. Şu andan itibaren, tamamen manuel pazar alımları yerine bu hizmeti sunacağız.

Geri alım kumbaramız düzenli olarak DAI ile doldurulacak ve her zaman YFI'nizi bir Chainlink oracle tarafından sunulan mevcut fiyattan geri almaya isteklidir. Geri alım etkinliğinin tam şeffaflığı için istatistikler artık gerçek zamanlıdır.

[https://yearn.clinic](https://yearn.clinic/) ve [https://buyback.yearn.finance/](https://buyback.yearn.finance/) YFI'nizi bize satma adresleridir. 

## Yearn'deki Vault'lar

Tüm aktif yVault'larımız için stratejilerin ayrıntılı bir açıklamasını [buradan](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) okuyabilirsiniz.

## Ekosistem Haberleri

[YFI, Gizli Zincir tarafından etkinleştirilen gizlilik oldu](https://twitter.com/IncognitoChain/status/1527045614273544200)

[Sturdy Finance, Yearn tarafından desteklenen tüm zincirlerde USDC'de en yüksek APY'leri sunuyor](https://twitter.com/pgpsam/status/1526301386173992961)

[Bancor v3 stratejileri yakında Yearn'e geliyor](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap, Yearn ile işbirliği içinde Iron Fleet'i duyurdu](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Skeleter Spaceman'den bir Yearn atölyesine göz atın](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Yearn havuzları artık DefiLlama'da ayrı ayrı takip ediliyor](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Yeni konsantre Curve havuzu için yeni bir Lido stETH vault'u yayına girdi](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Bir Coordinape tartışmasının kaydına göz atın](https://twitter.com/YFI_interns/status/1525159821321830403)
