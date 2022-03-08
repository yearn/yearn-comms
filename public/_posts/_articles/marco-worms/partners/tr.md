---
title:  "Yearn Ortakları: yVault'lar ile kurmak"
image:
  src: ./cover.png
  width: 1500
  height: 729
date: '2022-03-07'
author: Marco_Worms
translator: Dastronom
---

![](./cover.png?w=1400&h=729)

[Yearn Vault'ları](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) açık standartlarla inşa edilmiştir ve YFI ortakları son birkaç yılda bunların üzerine harika uygulamalar yapmıştır. Bu makale, diğer protokollerin Yearn ürünlerini nasıl genişlettiğini gösteriyor ve umarız YFI hizmetlerinin yanı sıra daha fazla deneye ilham verir!

## Örnek durumlar

En yaygın ortaklık durumları şunlardır:

1. yVault'ları ödünç verme/ödünç alma için teminat olarak kullanma
2. Kullanıcı fonlarıyla getiri elde etmek için yVault'ları kullanma

Her iki durumda da ortak, vault'un genel karından alınan performans ücretleri ile ödüllendirilir, bir ortak vault'a ne kadar fazla toplam hacim katkıda bulunursa, elde ettikleri karın o kadar büyük payı olur.

> 2021'de Yearn, ortaklık programı aracılığıyla ortaklarıyla 2.793.161 ABD dolarını paylaştı.

Şimdi en büyük iş ortağımızın kullanım durumlarına daha yakından göz atalım:

## Yearn + [Abracadabra](http://abracadabra.money/)

Abracadabra, ödünç alma hizmetlerinde yVault'ları kullanır: En önemli yenilik, faiz getiren belirteçleri borçlanma için teminat olarak kabul etmektir, kullanıcı geri ödendiğinde, kilitlenen zaman boyunca üretilen kârları içeren teminat vault'u belirteçlerini geri alır.

Abracadabra'ya genel bir bakış:

1. Kullanıcı bir yVault'a wETH (Ethereum ile aynı, sarılı Ethereum) yatırır, yvWETH alır
2. Kullanıcı teminat olarak Abracadaba'ya yvWETH yatırır, Abracadabra, kullanıcının teminatlarının bir yüzdesini Magic Internet Money (MIM) adı verilen bir dolar sabit parası olarak basmasına izin verir.

![](./image1.png?w=633&h=527)\
*[Abracadabra](http://abracadabra.money/) “borç alma” arayüzü*

Kullanıcı MIM bastığında, yatırılan teminat, ödünç alınan MIM geri ödenene kadar kilitlenir

- Kullanıcı zamanında geri ödeme yaparsa, teminatın kilidi açılır, bu bir yVault ise, bu, yVault jetonlarınızın kilitliyken kazanılan tüm kârlarla birlikte iade edileceği anlamına gelir!
- Kullanıcı zamanında geri ödeme yapmazsa, teminatınızın bir kısmı hizmet için ödeme yapmak için kullanılacaktır (tasfiye edilmiş)

İdeal olarak, yatırılan vault jetonunun ürettiği faiz, Abracadabra'dan alınan borçlanma ücreti maliyetini aşacaktır, bu nedenle buradaki eksiksiz kullanım durumu, faiz getiren bir jetonu teminat olarak kilitlemek olacaktır.

## Yearn + [Alchemix](https://alchemix.fi/)

Alchemix, kullanıcı tarafından yatırılan DAI'den faiz oluşturmak ve kredileri otomatik olarak geri ödemek için DAI (MIM'e çok benzeyen başka bir dolar stablecoin) yVault kullanıyor.

1. Kullanıcı DAI veya ETH'yi Alchemix'e yatırır
2. Alchemix, kullanıcı için getiri sağlamak için DAI veya ETH'yi Yearn Vaults'a yatırır (ve bir sonraki adımda alınan krediyi otomatik olarak geri öder).
3. Kullanıcı yatırılan teminatın %50'sine kadar DAI olarak ve %25'e kadar ETH olarak alUSD veya alETH olarak ödünç alabilir (Alchemix ekosisteminde DAI veya ETH'ye dönüştürülebilir), bu da yatırılan miktarı ödünç alınan miktarla orantılı olarak kilitler
4. 2. adımda yatırılan miktar getiri sağladığından, kullanıcı kredisini otomatik olarak geri öder ve kullanıcı daha sonra üretilen getiriyle orantılı olarak para çekebilir.

İşte Alchemix ekosistemine genel bakış ve Yearn ile nasıl bütünleştiği:

![](./image2.png?w=1400&h=950)\
*[Alchemix](https://alchemix.fi/) ekosistem*

## B2B'de yVault'lar

*İş amaçlı kullanım durumları için Yearn DAO gerçekten fark yaratıyor: Şu anda DeFi'de en iyi vault güvenliğini sağlayacak altyapıya sahip.*

İş ortakları, vault'lara katkıda bulundukları TVL'ye göre bir ücret payı alırlar. Kar paylaşımı modelimiz hakkında daha fazla bilgiyi [Yearn Ortağı Belgeleri](https://docs.yearn.finance/partners/introduction) bölümünden okuyabilirsiniz. Ortak cüzdan uygulamaları ve kazanç bölümleri, yVault'ları uygular ve bunları kullanıcılara farklı biçimlerde sunar:

**Bölümler Kazanın:** kullanıcıların varlıklarını yVaults'a yatırmaları için alternatif bir cephe sağlayan sayfalar. Kazanma bölümünün iyi bir örneği [ShapeShift](https://shapeshift.com/)'te bulunabilir, onların varlıkları Yearn Vaults'a yatırma sözleşmeleri [GitHub'da açık kaynaklıdır](https://github.com/shapeshift/yearn-router).

![](./image3.png?w=750&h=554)\
*[ShapeShift](https://shapeshift.com/) kazan sekmesi*

**Cüzdanlar**: iş ortakları, yVault'ları kullanarak ekosistemlerinde Yearn getirisi sağlayan seçenekler sunar. [SteakWallet](https://www.steakwallet.fi/), Yearn ile entegre olan bir cüzdan hizmetine iyi bir örnektir:

![](./image4.png?w=363&h=681)\
*[SteakWallet](https://www.steakwallet.fi/) arayüz*

## İş ortağı olmak için kaynaklar

yVault'larımızın üzerine inşa etmek isterseniz şunları yapmanız önerilir:

- [Ortaklık Programı belgelerini](https://docs.yearn.finance/partners/introduction) okuyun ve ortak formunu takip edin
- Teknik yönergeler için [Yearn Entegrasyon Yöntemleri belgelerine](https://docs.yearn.finance/partners/integration_guide) bakın

*$YFI protokollerinin üzerine inşa ettiğiniz şey hakkında sizden haber almak isteriz!*

yapımcılar: [Worms](https://twitter.com/MarcoWorms), yorumcular: [Corn](https://twitter.com/omgcorn), [Dark Ghosty](https://github.com/DarkGhost7)
