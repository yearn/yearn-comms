---
title:  "Yearn Vaults v3"
image:
  src: ./image1.jpg
  width: 900
  height: 429
date: '2022-05-03'
author: Marco Worms
translator: Dastronom
---

![](./image1.jpg?w=900&h=429)

v3 Vault'un hem geliştiriciler hem de degenler için getirdiği heyecan verici değişiklikleri beklerken, v3 tasarım ekibine liderlik eden Yearn katılımcısı ile konuştum. Yeni özelliklerin sayısını öğrendiğimde şaşırdım! Başlangıçta konuşmamız, vault'ları protokoller arasında standartlaştıran [ERC-4626](https://twitter.com/iearnfinance/status/1511444220850184197) standardı etrafında başladı, ancak bunun buzdağının sadece görünen kısmı olduğu ortaya çıktı.

## v3'ün amacı Yearn Vaults'un tüm temel özelliklerini iyileştirmektir

### Güvenlik

DeFi güvenlik uygulamaları için Yearn'in sınıfının en iyisi konumunu koruyor.

### Gelişim

Strateji oluşturmak için sürtüşmeyi azaltır ve bir vault için daha geniş bir strateji yelpazesine izin verir.

### Otomasyon

%100 otomatik vault hayaline bir adım daha yaklaşarak, hasat dışında daha fazlavault işlevinin otomatikleştirilmesine izin verir.

## v3 kapsamının üstesinden gelmek için geliştiriciler aşağıdakiler üzerinde çalışıyor:

### Modülerliği artırmak

Yinelenebilir modüllere daha akıllı mantığın yerleştirilmesine izin veren yVault sözleşmesinde sağlam bir şekilde basit olan kodu uygulamak.

Vault'larımızın, onu izleyen diğer protokollerle uyumlu olmasını sağlayan ERC-4626 standardını benimsemek.

### Stratejiyi İyileştirme <-> Vault ilişkisi

Daha basit strateji testi, devreye alma ve genel olarak, fonları kilitleme, daha riskli stratejiler ve çok zincirli stratejiler dahil olmak üzere daha geniş bir getiri olasılığı yelpazesini ele almak için daha fazla araç dahil etmeye izin verir.

### Yeni ürünler oluşturmak

Daha riskli stratejiler sağlayan ve kullanıcıların daha yüksek riskli bir para yatırma seçeneği seçmesine olanak tanıyan Junior Tranches gibi yeni ürünler oluşturur.

Her belirteç türü için 1'den fazla vault'a izin verir

Vault'ların, ortak protokolleriyle paylaşılabilen çoklu imzalar tarafından kontrol edilmesine izin verir

## Esneklik

v3, geliştiricilere ve stratejistlere kodun üretime gönderilmesi için daha fazla esneklik sağlayacaktır. Sözleşmelerin modülerleşmesini artırır ve ayrıca vault'lara para yatırmanın yeni yollarını açar.

Ayrıca çevresel sözleşmelerin daha iyi bir şekilde otomatikleştirildiğini göreceğiz: v2'de yalnızca hasat işlevleri otomatikleştirildi ve v3'te %100 otomatik bir vault'a yaklaşacağız çünkü artık [Keep3r Network](https://keep3r.network/) ile daha önemli işlevleri otomatikleştirmek daha kolay.

> **Hızlı hareket etmek ve bir şeyleri kırmak istemiyoruz** — kurukafa

## Steroid etkili stratejiler

v2 Vault'larında vault başına 20 strateji sınırı vardı, v3'te bu sınır artırılacak. Ek olarak, daha riskli stratejiler artık [Senior/Junior Tranches](https://corporatefinanceinstitute.com/resources/knowledge/finance/junior-tranche-debt/)'e benzer bir sözleşme modelini takip edecek.

Daha riskli stratejiler artık bir Junior Tranche sözleşmesine sahip olacak, yani kullanıcı önce jetonları bir vault'aa yatıracak ve daha sonra vault jetonlarını daha yüksek riskli/yüksek ödül seçeneği için küçük bir dilim sözleşmesine yatırmayı seçebilecek. Kullanıcılar ayrıca odaklanmak için belirli stratejiler seçebilirler. Bu, daha yüksek risk iştahına sahip kişilerin keşfetmek isteyebilecekleri isteğe bağlı bir özelliktir.

v3 ekibinin üzerinde çalıştığı diğer bir konu da [strateji onayının](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) nasıl merkeziyetsizleştirileceğidir. Bugün Yearn'deki birçok güvenlik denetimi konusu merkezileştirilmiştir. Ancak bu süreci merkezi olmayan hale getirebilmek, ürünü ölçeklendirmek için daha fazla alan sağlayacaktır.

Diğer özellikler, kullanıcılar, stratejistler ve geliştiriciler tarafından vault'ların genel kullanımını iyileştirmeye odaklanır, örneğin:

- ySwaps (stratejistlerin token takası yapmak için kullandığı hizmet) gaz verimliliği için optimize ediliyor.
- v2 hasatlarının hisse fiyatlarının artması 6 saat sürer, ancak v3'te zaman dinamiktir ve MEV korumasını iyileştirir.
- Vault süreçleri etrafındaki artan modülerlik, diğer protokollerle daha sıkı ortaklıklar kurmamıza ve vakalarına daha özel çözümler oluşturmamıza olanak tanır.

## Vault kodları

v2 vault'ları kodu [Vyper](https://vyper.readthedocs.io/en/stable/)'da yazılmıştır, ancak v3, [Solidity](https://docs.soliditylang.org/en/v0.8.13/) ile oluşturulmuştur.

Vyper, v2 sistemi tarafından kanıtlandığı gibi sağlam bir dildir, ancak daha küçük bir geliştirici havuzuna sahiptir. Sağlamlıkla devam etme kararımız, diğer faktörlerin yanı sıra, bunun gibi kritik bir proje için gerekli olan daha büyük geliştirici havuzuna erişmeye dayanıyordu. Vyper için parlak bir gelecek görüyoruz ve bunu akıllı sözleşmeler için Yearn'de keşfetmeye devam edeceğiz, vault'ların etrafındaki modüllerden herhangi biri bunu kullanarak yapılabilir.

![](./image2.jpg?w=900&h=253)\
*[Defillama blockchain programlama dili kullanım istatistikleri](https://defillama.com/languages)*

Blok zincirlerinde kullanılan kodlama dillerine ilişkin istatistikler, [Defillama](https://defillama.com/languages)'da izlenebilir, şu anda Vyper yaklaşık %10 ve Solidity %69'u oluşturuyor. Bu, Solidity'nin pazar hakimiyetini yansıtıyor ve v3'ü göndermek için daha fazla katkıda bulunana ihtiyacımız olduğundan, daha hızlı deneyimli bir ekip oluşturmamızı sağlayacak teknolojiyi seçtik.

## Gelecek bizi bekliyor

Ben sadece v3'te geleceklerin yüzeyini çizdim. Yearn'in katkıda bulunanlar ayrıca bir dizi başka heyecan verici ürün ve işlevsellik oluşturmak için çalışıyor!

**[Yearn'e katılma fırsatları hakkında daha fazla bilgiyi buradan öğrenin!](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)**

*[yearn.finance](https://yearn.finance/#/portfolio) Ürünüdür*
