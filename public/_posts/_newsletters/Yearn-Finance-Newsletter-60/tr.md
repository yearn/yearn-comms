---
layout: post
title: "Yearn Finance Haber Bülteni #60"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-04-13'
translator: Dastronom
---

### 12 Nisan 2022'de Sona Eren Hafta

![](./image1.jpg?w=900&h=453)

Yearn Finance Bülteninin 60. baskısına hoş geldiniz. Bu bültenle amacımız, Yearn'i ve daha geniş kripto topluluğunu ürün lansmanları, yönetim değişiklikleri ve ekosistem güncellemeleri de dahil olmak üzere en son gelişmelerden haberdar etmektir. Yearn Finance hakkında daha fazla bilgi edinmek istiyorsanız, resmi [Twitter](https://twitter.com/iearnfinance) ve [Medium](https://medium.com/iearn) hesaplarımızı takip edin.

## Özet

- Yearn'e Yürekten Bağlı olmak
- Büyük Vault Standardizasyonu
- Web3 Nasıl Bir Sansürsüz Yearn Sağlar?
- yVault Stratejileri Nasıl Doğar?
- DAO'ya yeni Katkıda Bulunanlar için İpuçları
- Yearn'deki Vult'lar
- Ekosistem Haberleri

# Yearn'e Yürekten Bağlı olmak

![](./image2.jpg?w=1000&h=563)

Messari'den Yearn ile ilgili birinci sınıf bir rapor artık herkes için ulaşılabilir olacak. İlk olarak Kasım ayında ödeme yapan aboneleriyle paylaşılan rapor, bir veri ve açıklayıcı birkoleksiyon içeriyor.

Makaleden alıntılar, "Hepimiz Yearn'i tanıyoruz. DeFi'nin Compound, Aave, Curve ve Convex gibi getiri üreten protokollerinin üzerinde çalışan, kur ve unut (takip gerektirmez) getiri toplayıcısıdır. Kullanıcılar bir tuşla pasif olarak getiri elde edebilirler. Zamanla, protokol verimle eşanlamlı hale geldi ve önde gelen riski en aza indirilmiş getiri kaynağı olarak endüstri itibarı kazandı… Çoğu kullanıcı tarafından kullanılan flagship protokolü Vault'ları, Yearn TVL'nin %67'sini oluşturuyor. Kullanıcılar, varlık başına tanımlanan bir vault'a para yatırır ve sermayeyi dağıtmak için temeldeki getiri stratejileri yürütülür… Yearn, verim için diğer protokollere, güvenilir bir entegrasyon noktası sunabilir, böylece zaman kaybı olmaz ve entegrasyon risklerinin, stratejilerini kendileri yürütmek zorunda kalmaz… Yearn'in buradan büyüdüğü yer, büyük ölçüde V3 kullanıcı arayüzüne, çoklu zincir stratejisine ve konumunun savunulabilirliğine bağlıdır”.

Fantom ve Arbitrum yayında. Sırada ne var?

Rapora [messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn) adresinden ulaşabilirsiniz.

# Büyük Vault Standardizasyonu

![](./image3.jpg?w=900&h=577)

ERC-20'leri, ERC-721'leri ve ERC-1155'leri duymuşsunuzdur. Yakında ERC-4626'ları öğreneceksiniz. Sonuç Tokenize Vault Standardıdır (ERC-4626).

İşte ERC-4626'ya kısa bir genel bakış: Getiri taşıyan jetonlar bir karmaşa. Getiri toplayıcılar, kasalar, borç verme piyasaları ve $xSUSHI gibi yerel getiri belirteçleri genellikle küçük değişikliklerle uygulanır. DeFi'nin getiri sağlayan belirteçlerinin üzerine tek bir uygulama oluşturmak için, her benzersiz varyasyonu işleyebilecek düzinelerce karmaşık, hataya açık uyarlayıcı yazmanız gerekir.

ERC-4626 bunu geçmişte bırakıyor. En iyi şekilde birleştirilebilirliktir. Bir ERC-4626 vault'unun üzerine bir uygulama oluşturun ve bu uygulama diğer tüm ERC-4626 jetonları için çalışacaktır.

ERC-4626 kullanan Yearn V3 kaçınılmazdı. Katkıda bulunanlar, Yearn'nin V3 vault'ları için standardı uygulamak adına şimdiden çok çalışıyor. Alchemix, Balancer, Rari Capital, Fei Protocol, Yield Protocol, OpenZeppelin ve diğer geliştiriciler de öyle. Belki bir gün Etherscan'da bir ERC-4626 sekmesi bile görebiliriz. Tek kelimeyle, ERC-4626, her türlü faiz getiren jeton için altın standart olacaktır… Yearn Vault'lardan AAVE mevduatlarına ve Balancer lineer havuzlarına kadar.

Great Vault Standardizasyonuna katılmaya hazır mısınız? daha fazla ayrıntı ve iletimler için transmissions11 tarafından hazırlanan Joey Santoro'nun ip uçlarına [buradan](https://twitter.com/joey__santoro/status/1504603906726240258) göz atın.

Gelecek şekillendirilebilir.

Daha fazla kod ister misiniz? Yearn katkıda bulunanlar fubuloubu ve banteg ile transmisyonlar11 ve Joey Santoro'nun [demo ERC-4626 Vyper 0.3.2 uygulamasına](https://github.com/fubuloubu/ERC4626) göz atın.

ERC-4626 hakkında bir araştırmayla ilgili olan CoinDesk makalesini [buradan](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/) okuyabilirsiniz.

# Web3 Nasıl Bir Sansürsüz Yearn Sağlar?

![](./image4.jpg?w=900&h=451)

Web3'ün büyük vizyonu, asla kapanmayan, asla sansürlenmeyen ve herkes tarafından erişilebilir bir internet (ve finansal sistem) dir.

Blok zincirleri ve kendi kendine barındırma yardımı bunu mümkün kılar. Yearn, Uniswap ve diğer Web3 uygulamalarını web sitelerine dokunmadan nasıl kullanabileceğinizi merak ediyor musunuz? Web2 paradigmasında, bir web sitesi çökerse, son kullanıcıların şansı kalmaz. Web3 ile, internet bağlantısı olan herkes için bir hizmet her zaman mevcuttur (temel blok zincirinin çevrimiçi olduğu varsayılarak).

Web3 açık kaynak olduğundan, Yearn, Uniswap ve diğer Web3 hizmetlerini dosyalarını indirerek ve web sitelerini doğrudan bilgisayarınızda barındırarak kullanabilirsiniz. Üçüncü taraf server'lara gerek yok!

Kendi kendine barındırma için tek ihtiyacınız olan bir bilgisayar (Windows, Mac veya Linux) ve bazı özel yazılımlardır. Kurulduktan sonra, Yearn ve diğer hizmetleri URL'lerini ziyaret etmeden doğrudan tarayıcınızda kullanabilirsiniz (ancak bunun yerine "localhost:3000" gibi bir şey yazın).

Web2 aracısını öldürmek ve Web3'ün büyük vizyonunu MarcoWorms'tan basit bir makale ile gerçekleştirmek için [buraya](https://medium.com/iearn/self-hosting-web3-services-299306b706ee) tıklayın.

# yVault Stratejileri Nasıl Doğar?

![](./image5.jpg?w=900&h=650)

Stratejiler, her bir vault'un bu hareketli parçaların çoğunu içermesi Yearn'in belkemiğidir. Kullanıcılarımızın DeFi'de riske göre ayarlanmış en iyi verimi elde etmelerini sağlamak için sürekli değişen alana ayak uydurmalı ve yeni stratejiler yazmalıyız. Yukarıda, yeni yazılmış yVault stratejilerinin üretime geçmesi için nasıl onaylandığına dair bir kılavuz bulunmaktadır.

YVault strateji onayı hakkında daha fazla bilgi için Yearn'e katkıda bulunan MarcoWorms'un [yazısına](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) göz atın.

# DAO'ya yeni Katkıda Bulunanlar için İpuçları

![](./image6.jpg?w=900&h=473)

Yearn'in kültürü küreseldir, arkadaş canlısıdır ve birkaç inşaatçı, ortak çalışan ve kendi kendine yeni başlayanlardan oluşur. Çoğu DAO'ya katılmak için öncelikle parasal bir neden var gibi görünse de Yearn DAO'ya katılmak, kişiye yeni ve sürekli değişen bir alanda çalışma şansı veren tatmin edici bir deneyimdir.

Yearn gibi DAO'larda, sonuçların sorumluluğunu alarak ve bu sonuçlara götürecek kararları verme yetkisine sahip olarak bir sahip olabilirsiniz.

Aşağıda, yeni DAO'ya katkıda bulunanlara yönelik tavsiyeler üzerine, hayatın her kesiminden çeşitli Yearn katkıda bulunanların bazı yorumları yer almaktadır:

Yönetime katkıda bulunanlardan biri olan Tracheopteryx, “Sevdiğiniz, en iyi olduğunuz, para kazanabileceğiniz ve aynı zamanda DAO'nun ihtiyaçlarını göz önünde bulundurarak işi yapın” diyor. Ek olarak, güvenlik ve protokol geliştirmeye odaklanan Storming0x, "Katılın, bunalmaktan veya soru sormaktan kendinizi kötü hissetmeyin. Pek çok insan yeni gelenlere yardım etmek için burada ve bugünlerde çok daha iyi bir işe alım sürecimiz var”. Son olarak, bir anonim katılımcı, “1. Kültürümüzü anlayın. Aklınıza gelebilecek her şeyi okuyun. 2. Güven oluşturun. 3. Yerleştirme maliyetinizi karşılayın. 4. Alıştırma belgelerini yazın. 5. Herkesle tanışın. 6. Neler olduğunu anlayın. 7. Bu yönde bir fikriniz olsun. 8. Temsilcimız olun”.

Yearn'e katkıda bulunanlardan daha fazla ipucu okumak ve DAO'lara daha derinlemesine bilgi ile yaklaşmak için Kish'in makalesinin tamamına [buradan](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d) göz atın.

Sizi [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) veya [Github](http://github.com/yearn)'da bize katılarak Yearn topluluğuna katılmaya, geri bildirimde bulunmaya ve katılmaya davet ediyoruz. Gel bizimle inşa et.

# Yearn'deki Vault'lar

Tüm aktif yVault'larımız için stratejilerin ayrıntılı bir açıklamasını [buradan](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) okuyabilirsiniz.

# Ekosistem Haberleri

[Yearn stratejilerinden %0 faizle yararlanmak için MAI vault'ları artık Fantom'da mümkün](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[Yeni bir yearn.watch sitesi geliştiriliyor](https://watch.major.tax/)

[YFI Boardin Okulu röportajında Storming0x'in Yearn hakkındaki kısa düşüncelerini okuyun](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Bir Yearn katılımcısından güvenlikle ilgili ipuçları](https://twitter.com/storming0x/status/1509769575021178886)

[Yeni coordinape güncellemesine göz atın](https://twitter.com/coordinape/status/1512247042806005763)
