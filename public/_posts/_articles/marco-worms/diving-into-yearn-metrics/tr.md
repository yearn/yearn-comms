---
title: "Yearn Metriklerinin derinine İnmek"
image:
  src: ./image3.jpg
  width: 1400
  height: 625
date: '2022-02-17'
author: Marco_Worms
translator: Dastronom
---

Kendi araştırmanızı yapmak, kripto ile uğraşırken gerekli bir alıştırmadır ve [yVault'lar ve stratejiler](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) için keşfedebileceğiniz ve tüm sayıları elde etmek için kullanabileceğiniz birkaç görüş vardır. Bu makalede, stratejistler tarafından vault'ları ve stratejilerin sağlığını izlemek için kullanılan tüm genel Yearn analitik kaynaklarına dalacağım, bu nedenle bu araçlarda nasıl gezineceğinizi öğrenmek, bir Yearn ekip üyesi olarak vault'lar hakkında aynı düzeyde bilgiye sahip olmanızı sağlayacaktır. Bugün keşfedeceğimiz üç araç:

### **[Yearn'deki Vault'lar](https://vaults.yearn.finance/)**

Tüm yVault'lara ve strateji açıklamalarına kapsamlı bir genel bakış. Vaul fonlarının nasıl ve nereye devredildiğini öğrenmeye başlamak için harika bir yer.

### **[Yearn Vision](https://yearn.vision/)**

Tüm vault'lar ve stratejiler için geçmiş verileri analiz etmek için kullanılabilen eksiksiz bir etkileşimli gösterge panosu. Burası, yVault'lardan ve strateji kullanımından her türlü geçmiş veriyi çıkarabileceğimiz ve analiz edebileceğimiz yerdir.

### **[Yearn Watch](https://yearn.watch/)**

Her yVault için strateji sağlığı hakkında faydalı verilere hızlı erişim içeren, stratejistler tarafından stratejistler için yapılmış bir pano.

### **[Yearn'deki Vault'lar](https://vaults.yearn.finance/)**

Yearn'deki Vault'lar, fonların bir vault tarafından nasıl yönetildiğini anlamaya başlamak için harika bir kaynaktır. Burada tüm yVault'lar ve stratejileri için açıklamalar bulacaksınız:

![](./image1.jpg?w=1211&h=733)

Sol tarafta, Ethereum veya Fantom vault'larını seçebilirsiniz ve bunlar şu şekilde derlenir:

- **Stabiller**: Stablecoin'ler için yapılmış yVault'lar
- **DeFi Jetonları**: Seçilen ağın (ETH veya FTM) DeFi ekosisteminden jetonlar için yapılmış yVault'lar
- **Curve Havuzları**: [curve.fi](https://curve.fi/) ekosisteminden jetonlar için yapılmış yVault'lar
- **Eski Vault'lar**: artık kullanılmayan eski yVault'lar

Bir bölüm seçtiğinizde vault'ların bir listesini göreceksiniz. Genişletmek için bir vault'a tıklayabilir ve kullandığı tüm stratejilerin açıklamalarını görebilirsiniz:

![](./image2.jpg?w=897&h=856)

Eğer her vault/stratejinin muhasebesinin derinine inmek istiyorsanız bizim bir sonraki adımda sunduğumuz araca yanı Yearn Vision geçmeniz gerek:

## **Yearn Vision**

**Link: https://yearn.vision/**

Yearn Vision, vault'lardan ve stratejilerden gelen geçmiş verileri analiz etmek için önceden hazırlanmış birçok görünüme sahip eksiksiz bir analiz panosu paketidir. Ana sayfadan başlayarak burada bulunabileceklerden bazılarını inceleyelim:

![](./image3.jpg?w=1400&h=625)

![](./image4.jpg?w=1400&h=445)

Bu sayfa bize tüm Yearn Mahzenlerinin genel sağlığı hakkında birçok bilgi veriyor.

Tüm yVault'larda yatırılan tüm fonları temsil eden TVL (Toplam Değer Kilitli) hakkında bilgi vardır. Hem Ethereum hem de Fantom toplam TVL'sini ve ayrıca her ağ dilimini görebiliriz. Mevcut verilerle ve geçmiş verilerle karşılaştırmalar olan günlük/haftalık deltaları gösteren bazı grafikler vardır. "Hisse fiyatı" da takip edilmesi gereken önemli bir ölçüdür, zaman içinde 1.0'ın üzerine çıkan bir sayı biçiminde vault'un yaşam boyu kazanımlarını temsil eder. Aşağıda ETH'den yETH'ye bir hisse fiyatı örneği görebilirsiniz. "Hisse fiyatı" şu şekilde çalışır:

![](./image5.jpg?w=1400&h=849)\
*“hisse fiyatı” nasıl çalışır*

Sağ üst köşedeki Vision panosuna geri dönerek, çoğu çizelgeyi güncelleyecek olan zaman aralığını her zaman değiştirebilirsiniz.

![](./image6.jpg?w=226&h=469)\
*sağ üst köşedeki zaman aralığını değiştir*

Normalde tüm kasavault'ları/stratejileri gösteren birçok renk içeren çizelgelerden korkmayın ve sadece daha fazla bilgi edinmek istediğinizi seçerek gürültüyü azaltın. Analitiği tek bir parçaya göre filtrelemek için öğe listesine tıklayabilirsiniz, çoğu varsayılan olarak seçilen tüm öğelerle birlikte gelir, bu nedenle kontrol etmek istediğiniz vault'u seçmeniz gerekir:

![](./image7.jpg?w=884&h=231)\
*filtresiz*

![](./image8.jpg?w=895&h=258)\
*filtrelenmiş*

"Son rapordan bu yana geçen süre", bu kasa stratejilerinin en son ne zaman hasat edildiği anlamına gelir. Yukarıdaki "Filtrelenmiş" çizelge, USDC yVault'dan geçen hafta gerçekleşen tüm hasadın bir örneğidir, dikey düşüş, bir hasatın gerçekleştiği ve "son hasattan/rapordan bu yana geçen süre" 0'a gittiği anlamına gelir.

Ekranın sol tarafındaki diğer panolara geçebilirsiniz:

![](./image9.jpg?w=225&h=221)\
*tüm Kontrol Panellerine göz at: https://yearn.vision/dashboards*

Burada, Yearn'de neler olup bittiğine daha derinlemesine dalmak için çok sayıda gösterge panosu bulacaksınız!

![](./image10.jpg?w=1395&h=565)\
*stratejistler tarafından kullanılan Kontrol Panelleri*

"Vault'a Genel Bakış" panosuna bir göz atalım:

![](./image11.jpg?w=1400&h=640)\
*Vault Genel Bakış Kontrol Paneli: https://yearn.vision/d/ibsIoEknkdffd/vault-overview?orgId=1*

Bu vault'a Genel Bakış panosunda USDC yVault için 6 aktif strateji olduğunu görebiliriz: "toplam Borç", vault'un bu stratejilere devrettiği miktardır, "bedava fon miktarı", ucuz (gaz açısından) para çekme için kaç fonun mevcut olduğu anlamına gelir, bu sayı, çekmek istediğiniz miktardan az olduğunda, işlem biraz daha fazla gaza mal olacaktır çünkü vault'un stratejilere devredilen fonları alması ve süreçte daha fazla işlem yapması gerekecektir.

Her strateji için fonların orantılı olarak nasıl devredildiğine bakmak için daha sonra yearn.watch'ı kullanacağız.

Yearn'in genel sağlığını incelemek için harika panolar da var ve DAO'nun hazinesini bile izleyebilirsiniz:

![](./image12.jpg?w=1363&h=201)\
*Yearn Hazine Kontrol Paneli: https://yearn.vision/d/9_ppKhd7z/treasury*

## **Yearn Watch**

**Link: https://yearn.watch/**

Yearn Watch, stratejistler tarafından stratejistler için yapılmış bir panodur, böylece her bir stratejinin sağlığı hakkında önemli bilgiler arasında hızla gezinebilirsiniz. Ana ekran zaten sizi tüm vault'larla karşılıyor:

![](./image13.jpg?w=1255&h=799)

Bir vault açarsanız, varlık tahsisi hakkında bilgi görürsünüz. Yearn Vision bölümünde bu görünümün bir bölümünü kullandığınız bir vault açarsanız, o USDC yVault için tam görünümü görelim: varlık tahsisi hakkında bilgi göreceksiniz.

![](./image14.jpg?w=855&h=855)

"Ayrıntılar" görünümü, genel fon tahsisi hakkında her şeyi gösterir. "Stratejiler" görünümüne geçerseniz daha da derine inebilir ve her stratejiyi ayrı ayrı inceleyebilir ve sözleşmelerini ve zincir üstü işlemlerini kolayca bulabilirsiniz.
Bir stratejiye girdikten sonra, size son 10 hasat işlemini gösteren "raporlar" (hasatlar) kapsamlı bir görünümdür, böylece vault'unn gerçek zamanlı kazançlarını ve her hasattan elde edilen karı izleyebilirsiniz:

![](./image15.jpg?w=1253&h=759)

Daha fazla bilgi için tek bir raporu genişletme:

![](./image16.jpg?w=1157&h=415)

### **Bu Yearn Cemiyeti!**
Umarım bu makale, insanların Yearn'deki mevduatları hakkında iyi bilgiler elde etmesine yardımcı olur! Bu ürünler üzerinde çalışan gazilerin onları izlemek için kullandıkları araçlara erişebilmek harika, Yearn's yVault'ları ve ürünleriyle ilgili geçmiş ve bugün hakkında birçok değerli bilgi var.

Yapımcı: [Worms](https://twitter.com/MarcoWorms), İncelemeci: [Dark Ghosty](https://github.com/DarkGhost7)

Dark Ghosty'ye tüm bu kontrol panellerini gözden geçirdiğin ve onları nasıl gezeceğimi gösterdiğin için çok teşekkürler ❤

**[ yearn.finance](https://yearn.finance/) 'da üretilmiştir**
