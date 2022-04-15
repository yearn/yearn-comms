---
title: "Tenderly ile blockchain işlemleri için kurulum bildirimleri"
image:
  src: ./cover.jpg
  width: 1200
  height: 675
date: '2022-03-18'
author: Marco_Worms
translator: Dastronom
---

Yearn'in Tenderly ile ortaklık ilan ettiği [makalede](https://medium.com/iearn/yearn-finance-partners-with-tenderly-to-supercharge-development-debugging-incident-analysis-6489260298a5), bahsettiğimiz bir bölüm vardı:

> "Tenderly, acemi kullanıcıların bile neredeyse her zincirleme olayda uyarı oluşturmasına olanak tanıyan yerleşik özelleştirilebilir uyarılara sahiptir."
>

Bir Yearn katılımcısı bu konuda daha fazla bilgi edinmek için iletişime geçti ve bence bu özelliği sergilemek için harika bir fırsat! Ethereum Mainnet'in yanı sıra Tenderly ile hangi ağları kullanabileceğimize bir göz atarak başlayalım:

![](./image1.jpg?w=909&h=441)\
*Tenderly tarafından desteklenen ağlar*

Herhangi bir projeye giriş yaptıktan sonra [Tenderly'nin kontrol paneli](https://dashboard.tenderly.co/) kenar çubuğunda bulunan **“İzleme -> Uyarı”** hizmetini keşfedeceğim:

![](./image2.jpg?w=237&h=199)\
*Giriş yaptıktan sonra sol taraftaki kenar çubuğu*

Bu hizmete, Uyarı sayfasını açtığınızda görünecek ücretsiz kullanım hakkında bir uyarı var:

`15 dakika içinde gerçekleşen bir dizi uyarı alacaksınız. Gerçek zamanlı uyarılar almak için planınızı Tenderly Pro/Dev'e yükseltin`

Test için bu bir sorun değildir, bu nedenle ücretsiz sürüme devam edebilirsiniz. Uyarıların daha sağlam kullanımı için hesabınızı yükseltmeniz gerekir.

**Yeni bir uyarı oluşturmaya** çalışırken yapabileceğimiz her şeyi kontrol ederek başlayalım. Makale tüm olasılıkları incelemeyecektir, bu nedenle ihtiyaçlarınız için en iyi kullanımı anlamak için bunlara bir göz atın:

![](./image3.jpg?w=1537&h=669)\
*Uyarı oluştur*

- **Uyarı Türü**, bir bildirim tetiklemesi için zincirleme bir olay için ayarladığımız koşullar olacaktır:

- ![](./image4.jpg?w=1437&h=413)\
*tüm Uyarı Türleri*

- **Uyarı Hedefi**, yukarıdaki olaylar ve koşullar için izlenen sözleşme olacaktır:

![](./image5.jpg?w=991&h=253)\
*tüm Uyarı Hedefleri*

- **Uyarı Amaçları**, yukarıdaki sözleşme bir uyarı için koşulları sağladığında bildirim alacak yerler olacaktır:

![](./image6.jpg?w=937&h=195)\
*tüm Uyarı Amaçları*

Yeni bir uyarı oluşturmadan önce şunları yapmalıyız:

- Hangi olaylardan hangi sözleşmeden haberdar olmak istediğimize karar verin
- Dinlemek istediğimiz sözleşmeyi "Sözleşmeler" sekmesine ekleyin, böylece 2. adımda hedef olarak seçebileceksiniz
- Mesajları alacak hedeflerle bağlantı kurun (bu kılavuzda telgrafı kullanın), böylece 3. adımda bu hedeflere bildirim gönderebileceksiniz.

Şimdi başlayalım!

### Hedef olarak Telegram ekle

Uyarı sekmesinde, üst menüdeki “Hedefler”e gidin ve “Telegram”a tıklayın:

![](./image7.jpg?w=1364&h=617)\
*Telegram'ı hedef olarak ekleyin*

Etiketleyin ve bot'un size mesaj göndermesine izin vermek için talimatları izleyin:

![](./image8.jpg?w=591&h=475)\
*Bot'un size mesaj göndermesine izin vermek için talimatları izleyin*

Yukarıdaki işlemi tamamlamak için 3. adımdaki "sihirli kelimeleri" kopyalayın. [@TenderlyRobot](https://t.me/TenderlyRobot)'a tıklayarak açılan Tenderly'nin telgraf botuyla sohbete yapıştırın.

![](./image9.jpg?w=772&h=235)\
*Bot'un artık bu sohbette mesaj gönderebileceğine dair onay bildirimi!*

### Yearn Vault para yatırma/çekme işlemlerini izleme

Fantom Ağındaki SPELL yVault üzerinde yapılan bazı olayları izleyerek başlayalım. SPELL yVault sözleşme adresini bilmemiz gerekiyor, [Yearn Vaults arayüzüne](https://yearn.finance/#/vaults) gidip SPELL vault'una tıklayarak bulabiliriz.

![](./image10.jpg?w=625&h=287)\
*Fantom'daki Yearn Vault'ları*

Üzerine tıkladıktan sonra tüm vault ayrıntılarını içeren bu sayfayı göreceğiz, sizi vault'un sözleşmesine götürecek olan “block explorer” düğmesini tıklayın:

![](./image11.jpg?w=1157&h=757)\
*SPELL yVault ayrıntıları*

Bu, FTMScan'da [SPELL yVault Sözleşmesi](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d)'ni ([Etherscan](https://etherscan.io/)'ın Fantom fork'unda) açacaktır:

![](./image12.jpg?w=1367&h=845)\
*[SPELL yVault'u FTMScan'deki kontratı](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d)*

Kullanım durumumuz için önemli bilgileri sırayla vurguladım:
- İlk önce kontrat adresi
- Ardından “Token Adı” (birçok sözleşme sekmesi açıkken daha çok yardımcı olur)
- Son olarak, bu sözleşmenin yürüttüğü yöntemlerin (işlevlerin) geçmişi

Örneğimiz için, **herhangi biri vault'a token yatırdığında bir bildirim ekleyeceğiz**. Bunu yapmak için sözleşme sayfası URL'sini kopyalayalım:

https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d

Ardından Tenderly'nin sözleşme sekmesine gidin ve bu sözleşmeyi kontrol panelinde içe aktarmak için tıklayın; bu, bunun için uyarılar oluşturmamızı sağlayacaktır:

![](./image13.jpg?w=1399&h=681)\
*Tenderly'de ithalat sözleşmesi*

Adresi yapıştırın, "Vyper Sözleşmesi"ni seçin (Yearn Vault'ları [Vyper programlama dili](https://vyper.readthedocs.io/en/stable/index.html) kullandığından ad böyle görünür). Göründüğünde, “Import” a tıklayın:

![](./image14.jpg?w=1155&h=909)\
*Tenderly'de ithalat sözleşmesi*

Sözleşmeyi içe aktardıktan sonra, bunun için bir uyarı oluşturmamız için artık hazır!

![](./image15.jpg?w=865&h=467)\
*Importing contract in Tenderly*

Hadi gidip bir uyarı oluşturalım o zaman:

![](./image16.jpg?w=1817&h=713)\
*Yeni uyarı oluşturma*

Biri SPELL yVault'a her para yatırdığında bir bildirim almak istiyoruz. Bunu yapmak için yVault sözleşmesinde bulunan “Depozito” yöntemini kontrol edeceğiz. "yöntem", “function call”na benzer bir addır, bu nedenle bu durumda kullanacağımız uyarı türü budur.

![](./image17.jpg?w=761&h=265)\
*Uyarı türünü seçin*

Hedef bir adres olacaktır:

![](./image18.jpg?w=759&h=245)\
*Uyarı hedefini seçin*

Daha önce eklediğimiz sözleşmeyi seçebilecek ve ardından içinde bulunan herhangi bir işlevi seçebileceksiniz. Birçok işlevin benzer adlara sahip olabileceğini, “_” ile başlayan işlevlerin genellikle özel dahili işlevler olduğunu ve aradığımız işlevler olmayacağını unutmayın.
Bu durumda, _deposit (private: dahili kullanım için) ve deposit (public: harici kullanıcılar için) var. Herkese açık olanı seçeceğiz:

![](./image19.jpg?w=1319&h=679)\
*Uyarı hedefini seçin*

Son olarak, önceden ayarlanmış olan telgraf hedefini seçin ve uyarıyı kaydedin:

![](./image20.jpg?w=1325&h=909)\
*Uyarı hedefini seçin*

İşimiz bitti! Uyarı oluşturuldu ve biri o yVault'a her SPELL yatırdığında bir mesaj alacağım!

![](./image21.jpg?w=1521&h=739)\
*Uyarı başarıyla oluşturuldu!*

İşte bu örneği kurduktan ve onu tetiklemek için vault'a biraz SPELL yatırdıktan sonra aldığım örnek bir bildirim, İşlem onayından hemen sonra bildirimi aldım!

![](./image22.jpg?w=495&h=579)\
*Fantom yVault'daki yeni SPELL ödemesi bildirimi Telegram'ıma gönderildi!*

## Nihayi düşünceler

Bu Yearn örneği, bir sözleşmenin işlev çağrısını izlemenin basit bir yolunu gösterir. Uyarı sistemindeki tüm seçenekleri keşfederseniz, bunun birçok farklı kullanıma kolayca ayarlanabileceğini göreceksiniz, örneğin:

- NFT koleksiyonları geliştiricileri, sözleşmeleri yeni bir token basımı olarak adlandırıldığında izleyebilir ve bunu Discord'da otomatik olarak duyurabilir
- Tokenomics akışlarını izleyen kişiler, geliştiricilerin yapılması gerekenleri yapıp yapmadığını görmek için cüzdan bakiyelerine ve sözleşmelerdeki eylemlere göz kulak olmak için bildirimleri kullanabilir

Her türlü zincirleme etkinliği izleyebilir ve bundan haberdar olabilirsiniz, bu nedenle tüm farklı seçenekleri deneyin!

Prodüktörler: [Worms](https://twitter.com/MarcoWorms), Eleştirmenler: [Cryptouf](https://twitter.com/cryptouf), [Dark Ghosty](https://github.com/DarkGhost7)
