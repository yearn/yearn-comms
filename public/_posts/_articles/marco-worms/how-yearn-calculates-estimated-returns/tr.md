---
title: "Yearn tahmini getirileri nasıl hesaplar? (APY)"
image:
  src: ./image1.jpg
  width: 469
  height: 246
date: '2022-02-14'
author: Marco_Worms
translator: Dastronom
---

![](./image1.jpg?w=469&h=246)\
*Eski APY görüntüleme*

Geçtiğimiz birkaç hafta içinde, v3 gösterge tablomuzun yatırılan varlıkların "Yıllık Yüzde Getirisini" (APY) nasıl gösterdiği hakkında çok sayıda geri bildirim aldık. Özellikle ekosistemin daha değişken fiyatlara ve stratejilere sahip olduğu Fantom'da, [weve ve 0xdao](https://twitter.com/iearnfinance/status/1484570907041357828) tarafından alınan verimi temsil etmek için APY'nin görüntülenme biçiminde kısa vadeli değişiklikler uyguladık. Önceki hesaplamalarımıza döndüğümüzde, uzun vadeli APY hesaplamalarının şişirildiğini düşünmüyorduk, şimdi bu hatayı düzeltmek için bir güncelleme yayınladık. Bu makale, neler olduğu ve çözümümüz hakkında daha fazla bağlam vermeyi amaçlamaktadır!

## Hızlı Kontekst: APR ve APY?

DeFI'da bu 2 terimi sıklıkla görüyoruz:

- **APR:** Yıllık Yüzde Oran
- **APY:** Yıllık Yüzde Getiri

Her ikisi de kullanıcıya bir yatırım üzerinden ne kadar kazanç beklediklerini bildirmek için kullanılır:

- **APR** verimin otomatik olarak birleştirilmesinin olmadığını varsayar.
- **APY** getirinin yatırıma otomatik olarak dahil edildiğini gösterir.

## Ne Öğrendik

Son hasat verilerini kullanarak APY'yi daha iyi yansıtmak için birkaç hafta önce [Fantom'da ve(3,3) savaşları](https://twitter.com/iearnfinance/status/1484570907041357828) geçerken arayüzümüzün APY'leri gösterme şeklini güncelledik. Bu değişiklikten önce, uzun vadeli geçmiş verilere dayanan daha muhafazakar APY'ler gösteriyorduk, ancak savaşlar sırasında Fantom kasası APY'lerinin çoğu fırladı ve kısa vadeli kazanımlar kullanıcılara düzgün bir şekilde gösterilmedi. İnsanların kasalarımızın en karlı protokolleri yetiştirdiğini görebilmeleri için son hasata dayalı bir sayı göstermek için bir değişiklik yaptık:

![](./image2.jpg?w=591&h=397)

APY'yi son verilerle hesaplamanın dezavantajı şudur: savaşlardan elde edilen kazanımlar azalmaya başladığında, gerçekten karlı son hasatlardan gelen bir rakam gösterdik, ancak sonraki hasatlar muhtemelen o kadar karlı olmayacaktı (savaşta çiftçilik yapmak için oluşturulan topluluk protokollerinden kaynaklanan emisyonlar azaldı, en iyi 20 TVL anlık görüntüsü çekildikten sonra daha az sert spekülasyon) bu yüzden bu durumu düzeltmek için bazı değişiklikler yapmaya karar verdik.

Bu yüzden yukarıda bahsedilen olaydan önce gerçekten muhafazakar bir APY hesaplaması yaptık, sonra son verilere odaklanmak için değiştik. Bu 2 aşırı uçtan geçmek, neyin işe yarayıp neyin yaramadığı hakkında çok şey öğrenmemizi sağladı! İşte şimdi nasıl yapıyoruz:

### Curve olmayan varlıklar kullanan vault'lar için:

![](./image3.jpg?w=150&h=190)\
*crv olmayan vault için yeni APY ekranı*

- **Brüt APR:** Mahsup ücretleri düşülmeden önceki toplam APR.
- **Net APY:** Vault mevcut APY.
- **Haftalık APY:** Son 7 gündeki hasatlara göre.
- **Aylık APY:** Son 30 günlük hasatlara göre.
- **Başlangıç APY:** Vault'un varlığından bu yana yapılan tüm hasatlara göre.

### Curve varlıklar kullanan Vault'lar için:

![](./image4.jpg?w=182&h=196)\
*crv vault'u için yeni APY ekranı*

- **Havuz APY:** O havuzdaki curve takas ücretinden APY, yarısı buraya yarısı veCRV sahiplerine gider.
- **Bonus Ödüller APR:** Ödüller genellikle o jetonun sahibi tarafından eklenir. IE frax curve havuzları da size frax verir. APY, jetonu mevcut fiyattan sattıysanız.
- **Temel CRV APR:** Bu curve havuzunun aldığı minimum crv emisyon miktarının APR'si (destek için stake veCRV'niz yoksa, bu + havuz apy'sini + bonus ödüllerini alırsınız)
- **Boost:** Stake edilen veCRV'den elde ettiğiniz karın çarpanını artırın.
- **Convex APR:** Convex olarak yatırırsanız mevcut convex APR.
- **Brüt APR:** Mahsup ücretleri düşülmeden önceki toplam APR.
- **Net APY:** Vault'un güncel APY'si.
 
---

Bu özellikle ilgili geri bildirimde bulunan herkese ve ayrıca hızla harekete geçen ekiplere teşekkür ederiz. Yeni ekranın bir vault'un kazanımlarının gerçekliğini daha iyi yansıtmasını umuyoruz!

Üretici: [Worms](https://twitter.com/MarcoWorms), Yorumcular: [x48](https://twitter.com/x48_crypto), [Vany](https://twitter.com/vannny365), [Dark Ghosty](https://github.com/DarkGhost7)