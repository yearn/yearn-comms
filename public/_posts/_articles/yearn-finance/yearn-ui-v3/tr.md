---
title:  "Yearn Kullanıcı Arayüzü v3.0"
image:
  src: ./cover.png
  width: 800
  height: 450
date: '2021-09-17'
author: Dudesahn
translator: Dastronom
---

# Yearn Kullanıcı Arayüzü v3.0

### yearn.finance kullanıcı arayüzünün bir sonraki yinelemesi burada

![](image1.png?w=800&h=450)

_v3 açılış sayfası tasarımı keşfi_

Yearn.finance'ı sıfırdan yeniden oluşturduk. v2'deki geri bildirimleri ve sorunlu noktaları ve _daha_ fazlasını ele almak için çalıştık. v3, kullanıcı deneyimi, birleştirilebilirlik ve çoklu zincir geleceği göz önünde bulundurularak oluşturulmuştur ve beta şu anda yayında: [beta.yearn.finance](http://beta.yearn.finance).

## Gerçekleştirilen bir vizyon

![](image2.png?w=300&h=398)

_v3 tasarım keşfi_

yearn.finance v2'nin Ocak ayında piyasaya sürülmesinden birkaç ay sonra, Yearn'e katkıda bulunanlar, sürekli gelişen DeFi ortamı için oluşturulmuş tam özellikli, ölçeklenebilir bir sistem vizyonuyla büyük bir yeniden yazma eğlemine geçti.

Bugün, bu vizyon nihayet hem kullanıcılara hem de katkıda bulunanlara bugün yayınlanan yeni, sıfırdan yeniden oluşturulmuş v3 beta ile meyvelerini veriyor.

Topluluk geri bildirimlerini dikkatle dinledik ve en acil sorunlar ele alındı. Ancak yeniden yazma, bunun çok ötesine geçiyor ve kullanıcı deneyimini büyük ölçüde iyileştirmeyi ve baştan sona tüm süreci basitleştirmeyi amaçlayan çoklu eklemeler ve özellikler içeriyor.

## Önemli İyileştirmeler

-   Artık toplam pozisyonunuzu, toplam geçmiş kazançlarınızı ve tahmini yıllık kazançlarınızı, hem temel token hem de $ cinsinden ifade edilen vault mevduatlarıyla görebilirsiniz.
-   Vault'ların içine ve dışına zaplar dahil olmak üzere arayüz üzerinden yapılan herhangi bir işlem, size alınan tahmini token'leri göstererek [Tenderly](https://tenderly.co) kullanılarak simüle edilir. Artık beklenmedik slipaj veya bilinmeyen bir şekilde başarısız işlemler yok.
-   Elinizde bulunan hemen hemen tüm token'leri kolayca vault'lara girmenize veya Iron Bank'a tedarik etmenize olanak tanıyan cüzdan sayfası.
-   Geçmiş vault kazançları, temel token bilgileri ve strateji açıklamaları ile vault ayrıntı sayfası görünümü.
-   Daha deneysel vault'lara ev sahipliği yapacak yeni “Labs” bölümü.
-   Tozsuz kredi geri ödemeleri ve para çekme işlemleri ile tam entegre Iron Bank.
-   Mobil cihazlar için tamamen yeniden tasarlanmış deneyim.
-   Çok yakında Yearn NFT sahipleri için benzersiz açılabilir temalar içeren çoklu UI temaları. Tüm ekran görüntülerinde, cyberpunk temasının (ayarlar altında bulun) kullanıldığını fark edeceksiniz.

Lütfen bunun bir **_beta sürümü:_** olduğunu unutmayın henüz hiçbir şey nihai değildir ve geri bildirim alıp daha fazla iyileştirme uyguladıkça önümüzdeki birkaç hafta içinde yinelemeyi planlıyoruz. Geri bildirimde bulunmak istiyorsanız v3 web kullanıcı arayüzü geri bildirimi için oluşturulan yeni [discord kanalımıza](https://discord.gg/Rw9zA3GbyE) gidin.

![](image3.png?w=300&h=354)

_v3 tasarım keşfi_

## Bekle, bu yine hangi web sitesi?

Bu, bir grup Yearn katılımcısı tarafından sağlanan yeni yearn.finance'dir. [yearn.fi](https://yearn.fi/), öncelikle [Andre](https://twitter.com/AndreCronjeTech) ve [Anton](https://twitter.com/AntonNellCrypto) tarafından yönetilen bir web sitesidir.

Bu siteler tamamlayıcıdır; Anton, eklediğimiz özellikleri (SDK gibi) uygular ve biz Andre ve Anton'un risk/protokol panosu gibi yayınladığı yeni özellikleri eklemeyi planlıyoruz.

Beta sürümü (özellikle B2B veya potansiyel entegratörler için faydalı) hakkında **daha derin bir inceleme** ve sonunda gelecekteki yol haritası öğeleri için alttaki yazıyı okuyun.

## Yearn web altyapısı

Yeni v3 front_end ve back_end, ölçeklenebilirlik ve birleştirilebilirlik göz önünde bulundurularak tasarlandı ve birden çok farklı bileşene bölünebilir: **Lens, Meta, Subgraph, Exporter, SDK, and Front-end.**

Aşağıda her birini kısaca açıklıyoruz:

### Lens

![](image4.png?w=800&h=500)

_Lens blok diyagramı_

Yearn'in lensi, kolayca tüketilebilir hale getirmek için zincir üzerindeki verileri toplayan bir sözleşmeler grubudur. Lens bir oracle'den ve ayrıca kayıtlar, adres oluşturucular, adaptörler ve yardımcı sözleşmelerden oluşur. Lens sözleşmeleri yapılandırılabilir (hesaplamaların ayrı ayrı eklenmesine/güncellenmesine izin verir), tüm adaptörler genişletilebilir ve tüm depolama değişkenleri güncellenebilir. Lens, herhangi bir kullanıcıya varlık veya protokol kapsamına giren bilgileri, belirli bir vault'a veya Iron Bank pazarına yönelik bilgileri ve tüm protokolü kapsayan bilgileri sağlar.

#### Kullanım senaryoları

Yearn'in lensi için önemli kullanım örnekleri, tüm Yearn protokolü için zincir üstü kullanıcı bakiyeleri, vault bakiyeleri ve TVL'yi (tümü zincir üstü bir oracle aracılığıyla USDC'ye normalize edilmiştir) içerir. Özetle lens, Yearn verilerini zincire hızlı bir şekilde çekmek isteyen herhangi bir protokol veya ortak için basit bir entegrasyon noktası görevi görür.

[Lens kaynak kodu](https://github.com/yearn/yearn-lens/)

### Meta

Yearn'in meta veri deposu, herhangi bir kod düzenlemesi gerektirmeden front-end vault ayarlarının çok hızlı bir şekilde değiştirilmesine izin veren basit bir çerçevedir. Yearn ekip üyelerinin, güncellenmiş IPFS meta veri dosyalarını otomatik olarak oluşturup dağıtacak bir JSON dosyasını düzenlemeleri yeterlidir.

#### Şu anda desteklenen şemalar ve özellikler şunları içerir:

-   Kullanıcı arayüzünden bir vault'u gizlemek
-   Bir vault için para yatırma/çekme ve/veya zap giriş/çıkışlarını devre dışı bırakmak
-   Bir vault'un daha yeni bir sürüme geçmek için uygun olup olmadığını belirlemek
-   APY değerlerini geçersiz kılmak
-   Strateji adı ve açıklaması
-   Vault simgesi, adı veya token simgesi geçersiz kılmak
-   dayanak token sembolü, adı veya simge geçersiz kılmak

#### Kullanım senaryoları

-   Bir programcı olmasanız bile bir vault'un birçok yönünü hızlı bir şekilde yapılandırabilirsiniz (hala PR incelemesi gerektirir)
-   Yapılandırmayı tek bir yerde düzenleyebilirsiniz ve tüm entegratörler güncellenir
-   Token ve vault adları, simgeleri ve sembolleri üzerindeki kontrolü sağlar

[Meta kaynak kodu](https://github.com/yearn/yearn-meta)

### Subgraph

![](image5.png?w=800&h=680)

_Gösterge tablosunda ve her vault için görüntülenen kazançlar_

Yearn'in Subgraph'nin birincil kullanım amacı, geçmişteki zincir üstü verileri toplamak, dönüştürmek ve bunları kolayca sorgulanabilir hale getirmektir. Yukarıdaki resimde görebileceğiniz gibi, Subgraph şu anda görüntülemek için kullanılıyor:

-   Vault kapsamına giren kullanıcının geçmişteki kazançları
-   Genel geçmiş kullanıcı kazançları
-   Vault geçmiş kazançları (vault ayrıntı sayfasında gösterilir)

Her vault'un kazançları, sözleşme düzeyinde yerel olarak entegre edilmediğinden, daha sonra toplanan para yatırma, çekme ve hasat olaylarını izlemek için alt grafiğimizi kullanırız, böylece kazançlar [hesaplanabilir](https://github.com/yearn/yearn-sdk/blob/master/src/interfaces/earnings.ts).

Yearn'in ekosistemi doğası gereği karmaşıktır, yani büyük miktarlarda doğru veri sağlayan bir Subgraph'a sahip olmak zordur. Web sitesinin tüm yönlerinde olduğu gibi, kod açık kaynaklıdır, bu nedenle kazancınızla ilgili herhangi bir sorun fark ederseniz, bize bildirmekten veya aşağıdaki subgraph repo'suna bir PR göndermekten çekinmeyin.

[Subgraph kaynak kodu](https://github.com/yearn/yearn-vaults-v2-subgraph/)

### Exporter

Yearn Exporter'i, birincil API'miz olarak işlev görür ve tüm APY ve TVL hesaplamalarını içerir. Yalnızca zincir üzerindeki verilere bağlıdır ve ayrıca herkesin Yearn ürünlerinin ölçülebilir herhangi bir yönünü izinsiz olarak doğrulaması için araçlar sağlar. Hem gerçek zamanlı hem de geçmiş verileri dışa aktarmayı destekler.

[Exporter kaynak kodu](https://github.com/yearn/yearn-exporter)

### SDK

![](image6.png?w=800&h=638)

_SDK blok diyagramı_

Yearn'in yeni SDK'sı, yeni v3 web sitemize güç sağlayan motordur ve front-end, SDK'dan veri kullanmak üzere özel olarak tasarlanmıştır. SDK, lens, exporter, subgraph, meta, and [Zapper](https://zapper.fi) verilerini getirerek front-end ve B2B entegrasyonlarına hizmet etmek için zincir içi ve zincir dışı verileri toplar.

#### Kullanım senaryoları

-   V3 front-end
-   B2B entegratörleri: Entegratör için vault yönetimi ve yapılandırması yapılır. SDK'mızın getirdiği verilerdeki bir güncelleme, entegratörlerin otomatik olarak ilgilenildiği anlamına gelir.
-   Stratejist panoları

[SDK kaynak kodu](https://github.com/yearn/yearn-sdk)

### Front-end

Yukarıda listelenen back-end altyapısı ihtiyaç duyulan verileri üretirken, front-end bunu kullanır ve kullanıcıların onunla kolayca etkileşime girebileceği şekilde sunar.

![](image7.png?w=913&h=696)

_v3 FE blok diyagramı_

Front-end kodumuz iki farklı parçaya bölünmüştür: **v3 çekirdek mantığı** ve **kullanıcı arayüzü katmanı**.

NS **v3 çekirdek mantığı** herhangi bir repo'da uygulanması kolay olması amaçlanmıştır ve yalnızca veri getirerek değil, aynı zamanda POST/WRITE istekleri yaparak SDK ve diğer harici veri sağlayıcılarla iletişim kurmaktan sorumludur. Çekirdek mantık ayrıca, tüm farklı veri parçalarını (vault'lar, token'ler, kullanıcı bakiyeleri, vb) birleştirerek, daha uygun ve geleneksel bir veri şemasıyla kullanıcı arayüzünü modeller ve besler.

**UI katmanı** verileri doğrudan çekirdekten alır ve her repo'da istendiği gibi görüntüler. Aşağıda açıklanan beş ana sayfaya ayrılabilir.

[Front-end kaynak kodu](https://github.com/yearn/yearn-finance-v3)

![](image8.png?w=659&h=398)

_Yan gezinme çubuğu ve gösterge tablosunun yakın çekimi_

#### Ana sayfa

Ana sayfa, cüzdanınızdaki tüm varlıklarınızın yanı sıra üç Yearn ürün kategorisinin tümüne genel bir bakış içerir: Vaut'lar, Laboratuvarlar ve Iron Bank.

#### Soğuk Cüzdan

Cüzdan görünümü, cüzdanınızdaki tüm varlıkları, toplam değerlerini görüntüler ve bunları herhangi bir vault'a yatırmanıza veya bir piyasa varsa token'leri Iron Bank'a yatırmanıza olanak sağlar.

#### Vault'lar

Yeni vault'lar sayfamız, vault mevduatları, öneriler (şu anda en yüksek getirili vault'ları gösteriyor), temel token bakiyesi, dolar değeri ve mevcut APY'nin yanı sıra herhangi bir vault mevduatı için geçmiş kazançlarla ilgili kullanıcı bilgilerini barındıran bir pano içerir. Herhangi bir vault'a tıklamak vault detayı sayfasını açacaktir.

#### Vault Detay Sayfası

![](image9.png?w=800&h=554)

_Vault detay sayfası_

Vault ayrıntı sayfası, vault TVL, APY, temel token bilgilerini, strateji açıklamalarını, geçmiş vault kazançlarını görüntüleyen ve kullanıcıların para yatırma ve çekmelerine olanak tanıyan her vault için (yakında laboratuvarlara sunulacak) benzersiz bir URL'dir.

#### Lab'lar

Kullanıcıların fark edeceği bir şey, yveCRV, yvBOOST ve yvBOOST-ETH pJar'ımızın ([pickle.finance](https://www.pickle.finance) ile ortaklaşa piyasaya sürülen bir ürün) artık vault'lar sayfamızda yer almamasıdır. Bunun yerine, bunların tümü yeni Laboratuvarlar bölümümüze taşındı.

Labs nedir diye mi soruyorsun?

Yearn'in vault'ları başlangıçta “sadece yükseliş” fikriyle yaratıldı ve kullanıcılar istedikleri zaman geri çekilebilirdi. Yearn'in stratejileri daha karmaşık hale geldikçe ve getiri elde etmek için yeni yollar aradıkça, birçok stratejinin bu özel çerçeveye pek uygun olmadığını fark ettik.

Örneğin, birkaç stratejist tek taraflı LP stratejileri üzerinde çalışmaktadır. Alım satım ücretleri ve bahis teşvikleri arasında, AMM LP'lerdeki fonların getirisi oldukça kazançlı olabilir - ancak piyasa dalgalanmalarına bağlı olarak kalıcı kayıp ve/veya kısa vadeli düşüşler gibi bariz bir risk vardır.

Ek olarak, Bancor gibi protokoller, fonları geri almak için 24 saatlik bir bekleme süresi gerektirebilir. Önceden, bunun gibi bir gereklilik, vault'ların "herhangi bir zamanda geri çekil" özelliğini bozardı.

Laboratuvarlarda daha fazla esnekliğe izin veriyoruz ve kullanıcılar koşulların önceden farkında olduğu sürece, stratejiler artan, uzun vadeli sürdürülebilir verim arayışında kilitlenmelere ve geçici kayıplar potansiyeline izin verecektir.

#### Iron Bank

Vault'lar ve laboratuvarlara benzer şekilde, Iron Bank, sağlanan toplam, toplam ödünç alınan, kullanılan ödünç alma limiti ve toplam ödünç alma limiti dahil olmak üzere ilgili bilgileri içeren bir gösterge panosu sunar.

### Ek Özellikler

![](image10.png?w=300&h=410)

_Slipaj toleransını aşan bir zap simülasyonu_

#### Simülasyonlar

Para yatırmadan, çekmeden veya vaul'a girmeden veya vault'dan çıkmadan önce **işlemi simüle etmek için** [**Tenderly**](https://tenderly.co/) **kullanırız.** daha bir işlem emri göndermeden ve gaz harcamasını taahhüt etmeden önce kullanıcılar için faydalı bilgiler:

-   Simülasyon başarılı olursa, alınacak token sayısını kabaca görebilecekler.
-   İşlemin, kullanıcının toleransından (zaplar için) daha fazla slipaja neden olacağı simüle edilirse, o anki slipajın ne kadar olabileceği konusunda kullanıcıya bir uyarı gösterilir.
-   Simüle edilen işlem başarısız olursa, kullanıcıya bir uyarı gösterilir.

Bir işlemi simüle etmek için önce [Zapper'ın API'sine](https://docs.zapper.fi/zapper-api/api-guides/zap-in#check-zap-allowance) bir çağrı yapmamız gerekiyor. kullanıcının zap'ı onaylaması gerekip gerekmediğini öğrenmek için. Eğer yaparlarsa, simülasyonlar arasındaki durumu koruyabilmek için bir Tenderly çatal oluştururuz. Ardından, onay için simüle edilmesi gereken işlem verilerini getirmek için yine Zapper kullanarak onay işlemini simüle ederiz. Onay simülasyonu başarılı olduktan sonra, gerçek zap için işlem verilerini [getiririz](https://docs.zapper.fi/zapper-api/api-guides/zap-in#zap-in) ve başka bir simülasyon yürütürüz. Son olarak, kullanıcının önce onaylamasına gerek kalmadan zap hakkında tam olarak simüle edilmiş verileri görebiliyoruz.

Yeterli yakıtınızım olmadığı bir işlemi simüle etmeye çalışıyorsanız, simülasyonun başarısız olacağını lütfen unutmayın. Bunları kapsamlı bir şekilde test etmemize rağmen, simülasyonlar karmaşık eylemlerdir, bu nedenle herhangi bir sorunla karşılaşırsanız veya simülasyonlarda başarısız olursanız lütfen geri bildirimde bulunun.

#### Mobil Cihazlar

![](image11.png?w=300&h=518)

_v3 mobil deneyim_

Yeni web sitesi için bir diğer önemli gereksinim, geçmişte fazlasıyla eksik olan tam mobil destekti.

Web sitesi artık tüm bilgilerin hem tam boyutlu hem de mobil ekrandan görüntülenmesini destekliyor. Bu, kullanıcı panosunu, arama işlevini, tüm işlem düğmelerini (para yatırma, çekme, tedarik etme, ödünç alma), APY bilgilerini ve özellikle mobil düzenler düşünülerek tasarlanmış işlem modellerini içerir.

Bazı App Store'ların kısıtlamaları nedeniyle şu anda yerel bir Yearn uygulamamız olmasa da, mobil tarayıcılarda yerel benzeri bir deneyim sağlamayı taahhüt ettik.

## Gelecek Yol Haritası

![](image12.png?w=800&h=462)

_v3 tasarım keşfi_

### Birleştirme

Ethereum'un PoW'sinin PoS ile birleştirilmesi kadar dramatik olmasa da, v3 web'i beta olarak başlatmanın amacı, değiştirmeden önce mevcut web kullanıcı arayüzümüzle tam özellik paritesi oluşturmaktı. Herkese açık geri bildirim toplamak ve hataları yakalamak için bir beta dönemine ek olarak, uygulama sürecinde olduğumuz bazı öğeler şunlardır:

-   Lab'lar sayfası ayrıntı görünümleri
-   Araç ipuçlarını v2(APY, başlıklar, vb) ile eşleştirecek şekilde gezinmek

### … Ve Ötesi (birleştirme sonrası)

-   İyileştirilmiş ilk katılımlı yeni açılış sayfası — **Bu gönderideki çizimler, v3 tasarım keşfimizden bazı parçalardır.**
-   Vault'lar için geçmişteki APY'ler
-   Geçmiş protokol verimi ve kullanıcı gaz tasarrufu
-   Gazsız zap çıkışı onayları
-   Gaz maliyeti tahminleri
-   Çoklu dil desteği
-   [yearn.fi](http://yearn.fi/) risk panosunu entegrasyonu
-   Düşük verimli vault'lardan yüksek verimli vault'lara geçişi kolaylaştırmak için [Bowswap](https://bowswap.finance/) entegrasyonu
-   Özel görünümler ekleme yeteneği
-   Ana sayfada daha ayrıntılı kullanıcı konumu bilgisi
-   Cüzdan sayfasındaki kırıntı token'leri gizleme özelliği
-   Henüz duyuramadığımız ama çok yakında yayına girecek birkaç şey daha 👻

## A Word of Gratitude

![](image13.png?w=2000&h=1125)

_Yearn web ekibinin otoportresi_

Bunların hiçbiri, geçtiğimiz birkaç ay içinde geri bildirim/fikir gönderen düzinelerce kişi, web danışman grubumuz, Yearn'deki tüm katkıda bulunanlar ve özellikle bunu yapmak için yorulmadan çalışan tasarımcılar ve mühendisler de dahil olmak üzere muhteşem Yearn topluluğu (birçoğu yukarıdaki resimde resmedilmiştir) olmadan mümkün olmazdı.

Herhangi bir şekilde katkıda bulunmak istiyorsanız, herkese açık [discord'umuza](https://discord.gg/8rF374XkXy) katılın, [repo'lardan](https://github.com/yearn) birinde bir sorun oluşturun.bağlantısı yukarıda verilmiştir veya tasarımlarınızı bizimle [twitter](https://twitter.com/iearnfinance)! üzerinden paylaşın!
