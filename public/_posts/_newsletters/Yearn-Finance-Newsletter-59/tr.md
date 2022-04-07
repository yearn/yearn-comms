---
layout: post
title: "Yearn Finance Haber Bülteni #59"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1152
  height: 576
author: Yearn
date: '2022-04-06'
translator: Dastronom
---

### 5 Nisan 2022'de Sona Eren Hafta

![](./image1.png?w=1456&h=733)

Yearn Finance Bülteninin 59. baskısına hoş geldiniz. Bu bültenle amacımız, Yearn'i ve daha geniş kripto topluluğunu ürün lansmanları, yönetim değişiklikleri ve ekosistem güncellemeleri de dahil olmak üzere en son gelişmelerden haberdar etmektir. Yearn Finance hakkında daha fazla bilgi edinmek istiyorsanız, resmi [Twitter](https://twitter.com/iearnfinance) ve [Medium](https://medium.com/iearn) hesaplarımızı takip edin.

## Özet

- Karşınızda En Yeni ve En Güçlü Vult'umuz
- ETHDubai'de Facu ile Stratejilerin söyleşisi
- Yearn DAO'ya Katılım: Onboarding
- Yearn Tenderly'yi Nasıl Kullanılır
- Katkıda Bulunanlar
- YFI Boarding Okulu
- Yearn'deki Vult'lar
- Ekosistem Haberleri

# Karşınızda En Yeni ve En Güçlü Vult'umuz

![](./image2.jpg?w=900&h=473)

En yeni Curve Rocket Pool vault'umuz yayında ve bir Curve Finance havuzunun 2 tarafında Rocket Pool ETH (rETH) ve Lido stETH (wstETH) ile ETH stake etme ödülleri kazanabilirsiniz. Havuzun her iki tarafı da likit stake ETH jetonları olduğundan, Ethereum stake ödülleri, $CRV emisyonları ve Curve ticaret ücretleri kazanacaksınız. Yearn, veriminizi artırmak için CRV ve CVX emisyonlarını otomatik olarak toplayıp, vault'a yeniden yatıracaktır.

Herhangi bir büyük jetonu ($ETH, $USDC, vb.) bu vault'a yatırmak için Yearn Zaps'ı kullanın. Zaps, yatırdığınız parayı otomatik olarak rETH+wstETH'ye çevirecek, Curve'de bir araya toplayacak ve tek bir işlemde Yearn'de stake edecek.

Veya Curve'e Rocket Pool ETH (rETH) + Lido stETH (wstETH) yatırarak veya rETH+wstETH LP jetonlarınızı Yearn'e yatırarak Curve Rocket Pool'a manuel olarak girebilirsiniz.

Şimdi [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults) adresinden katıl

# ETHDubai'de Facu ile Stratejilerin söyleşisi

![](./image3.jpg?w=1024&h=512)

Son ETHDubai etkinliğinde, Yearn katılımcısı saltyfacu, ana işimiz olan Yearn'deki stratejilerin genel durumunu ele alıyor.

Vyper ile yazılmış ERC-20'ler olan Vault'lar ile Yearn'in Solidity ile yazılmış muhasebe kısmı olan Stratejiler arasındaki ilişkileri tartışıyor. Stratejiler, Yearn ekosistemi için tüm ağır yükü kaldırır, örneğin, yvUSDC, 20'ye kadar stratejiyi kullanan bir vault'dur.

Stratejilerin her biri farklı bir sermaye tahsisi taşır ve sermaye olmadan bağlanabilir. Buradaki akış, kullanıcıların diğer protokoller ve dex'lerle etkileşime geçmek için temel stratejileri olan vault token'leriyle etkileşime girmesidir.

Bir strateji yazmak için git, eth-brownie, ganache, brownie-strategy-mix deposu ve VS koduna ihtiyacınız olacak. Deneyim açısından, biraz programlama bilgisine, CryptoZombies seviye 4 ve üzerini tamamlamaya, DeFi protokollerinin nasıl etkileşime girdiğini anlamaya ve çok fazla iradeye ihtiyacınız olacak.

Bir stratejiyi tamamlamak ve yayınlamak altı adımdan oluşur: durum tespiti, kodlama, meslektaş incelemesi, deneme (maymun vergi vault'ları ile), çekirdek geliştirme incelemesi/güvenli tarım komitesi ve ardından üretim. Tüm bunlardan sonra, her şeyin istendiği gibi çalıştığından emin olmak için stratejiyi izlemeli ve izlemelisiniz.

5:54:26 zaman damgasından başlayarak dersin tamamına [buradan](https://youtu.be/ooYgIMlqITQ?t=21266) göz atın.

Sizi [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) veya [Github](http://github.com/yearn)'da bize katılarak Yearn topluluğuna katılmaya, geri bildirimde bulunmaya davet ediyoruz. Gel bize katıl.

# Yearn DAO'ya Katılım: Onboarding

![](./image4.png?w=1024&h=768)

Bu makalede, Cryptouf ve Farrahmay, bir DAO'ya, özellikle de Yearn'a katılma süreci için bir başlangıç sunuyor. Diyaloglarının bir özeti için aşağıyıdaki yazıyı okuyun.

Yeni bir katılımcı, bir DAO'ya katılma kararını verirken neleri akılda tutmalıdır? Katıldıkları DAO'yu ve onun değerler sistemini araştırmaları gerekecek.

Web3'e her gün yeni insan akışı göz önüne alındığında, Discord, Telegram ve Twitter gibi kanallardan yeni katkıda bulunanların yağmur gibi yağacağını hayal ediyorum. Yearn, katkıda bulunanların başarısı için ne yapıyor? Yearn'e katkıda bulunacak doğru insanları çekeceğini umduğumuz misyon ve hedeflerimizi netleştirmeyi önemli buluyoruz.

Alıştırma, farklı DAO'lar için farklı anlamlara gelebilir. DAO onboarding'i nasıl tanımlarsınız? Yearn'in yeni katkıda bulunanlar için resmi bir işe alım planı var mı? İlk katılım sürecimiz, uyum, açıklama, kültür ve bağlantı olmak üzere 4 C'yi kullanır.

Katkıda bulunanlar, bir DAO'ya katılırken başarılı olduklarından emin olmak için ne yapmalıdır? Bir DAO'ya katılan her kişi, farklı düzeylerde Web3, DeFi, mühendislik, DAO bilgisi ve aşinalığına sahip olmalıdır. Bir DAO'ya başarılı bir şekilde katkıda bulunmak, kişinin kendi kendine başlamaktan ve konuşmaktan ve soru sormaktan korkmamasını gerektirir.

Bir DAO'ya katılan ilk katılımcı dalgası, gelir konusunda daha az endişeliydi, bunun yerine bir DAO'nun çerçevesini ve temellerini oluşturmaya odaklandı. Yeni katılımcı dalgaları geldikçe, tazminat, bireylerin kendilerini ödüllendirilmiş hissetmelerini ve DAO'nun uzun vadede büyümesine yardımcı olmak için gereken zamanı ayırmalarını sağlamak için kritik bir faktördür. Yearn, üyelerini katkılarından dolayı ödüllendirmek için Coordinape'i kullanıyor. Yearn Finance'in Coordinape'i nasıl kullandığı ve aracın artıları/eksileri hakkında daha fazla bilgi paylaşabilir misiniz? Coordinape, DAO'ların topluluk katkıda bulunanlarını teşvik etmesi, ödüllendirmesi ve güçlendirmesi için bir araçtır.

Coordinape'in insanlara kefil olma özelliği vardır, bu nedenle tüm üyeler birini ekleme seçeneğine sahiptir. Bu özellik merkeziyetsiz sistem için harikadır, ancak bir çevrede ne kadar çok üye varsa, bu özellik o kadar fazla oynanabilir ve üyeler arkadaşlarına kefil olabilir. Yearn bundan kaçınmak için ne yapıyor? Bazı üyeler birkaç ay dahil olabilir ve daha sonra DAO'dan ayrılabilir veya birkaç ay daha az aktif olabilir (herhangi bir nedenle!). Ütopik bir dünyada, üyeler daha az ödül almak için bunu diğer üyelere açıkça bildirmelidir, hatta bazı zamanlarda çalışmadıklarında ödüllendirilmemeleri için, hatta vazgeçebilirler. Ama durum gerçekten böyle mi? Herhangi bir araçla oynanabilir ve Coordinape bir istisna değildir.

Makalenin tamamına [buradan](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc) göz atabilirsiniz. Yazar Cryptouf ve Yearn'e katkıda bulunan Farrahmay'a anlayışları için özel teşekkürler. 

# Yearn Tenderly'yi Nasıl Kullanılır

![](./image5.png?w=1200&h=675)

Hukuk öğrencilerinin ekleri var. Yearn stratejistleri Tenderly'ye sahip. İzleme, uyarı, hata ayıklama ve olay analizi araçlarıyla Tenderly, her yerdeki sıkı DeFi kullanıcılarını süper insanlara dönüştürüyor.

Ama çok basit, herkes kullanabilir. Yearn'e katkıda bulunan MarcoWorms, en son gönderisinde, önde gelen tüm EVM blok zincirlerinde neredeyse tüm zincirleme eylemler için Telegram uyarıları kurma sürecinde size yol gösteriyor. Sıfır kodlama gerekli.

Gerçek dünyadan bir örnek için [buraya](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba) tıklayın. Orada, Worms size $SPELL yVault'dan para yatırma ve çekme işlemlerini izleyen ve bu işlemler gerçekleştiğinde sizi uyaran bir Telegram botunun tam olarak nasıl kurulacağını gösterir.

Bundan sonrası size kalmış.

# Katkıda Bulunanlar

![](./image6.jpg?w=800&h=510)

Yearn bir özelliğe diğerlerinden daha fazla değer veriyorsa, bu harekete geçme isteğidir. Yearn kültürüne o kadar yerleşmiş ki, en aktif katılımcılarımıza *Doers* (yapanlar/iş bitiriciler) diyoruz. Bu bir isim ve tanımlayıcıdır, ancak bundan daha fazlasıdır… harekete geçme emridir.

Merkezi olmayan bir DAO olarak Yearn'in patronları, kıyafet kuralları, terfi için CEO ile golf gezileri yok. Yearn'in yalnızca katkıda bulunanları var. Herhangi bir DAO'da olduğu gibi, değişen katılım seviyeleri vardır.

İlk seviyede kullanıcılar, token sahipleri, seçmenler ve yatırımcılar var. Daha derinde, katkıda bulunanlar var - dünyanın her yerinden Yearn'in birçok projesinden bir veya daha fazlasına aktif olarak zaman harcayan insanlar.

Katkıda bulunanlar, Yearn: Coordinape'de oluşturulan DAO koordinasyon araç aracılığıyla çabalarını karşılığını alır. Orada, katkıda bulunanlar çevrelere ayrılır ve her ay birbirlerinin çabalarına kefil olurlar. Bazıları Yearn'de haftada bir saat veya günde birkaç saat çalışır. Görevler atanmaz, aranır. Ve katkıda bulunanların kalmaya zorlandığı katı bir silo yok.

Diğer çevrelere yardımcı olmak için sınırları aşabilirler: mühendislikten grafiğe, çevirilerden stratejilere, yazıdan etkinliklere kadar. Katkıda bulunanlar, tüm coğrafyalardan tüm şekil ve boyutlarda gelir. Onlar fantastik, deneysel kodlayıcıların animatörleri ve değişim zamanının geldiği duygusuyla birleşmiş yuvarlak uçlu PM'lerdir. Her katkı ile DAO içindeki güven bağlarını derinleştiriyorlar.

Birçoğu başka yerlerde tam zamanlı işlerde çalışıyor. Bazıları yarım düzine DAO'ya katkıda bulunur. Ama hepsi Yearn'in inşa ettiği şeye duydukları tutkudan etkileniyor. Katkıda bulunan bir kişi, her şey dahil olmak istediğinde, bir Doer olabilir.

Ama bu tam olarak ne anlama geliyor? Yapanlar daha düzenli katkıda bulunur. Büyük makinenin tüm hareketli parçalarını düzenlemeye yardımcı olurlar. Onlar çalışan değil. Ama daha çok, adının tanımladığı şeydir: Onlar Yapanlar.

Yearn'in gelişmek, büyümek ve değişmek için yapması gereken şeyleri yapıyorlar. Duvarlara çarpıyorlar. Onları yıkıyorlar. Başkalarının sadece hakkında konuştuğu şeyleri inşa ediyorlar. Yearn'e katkıda bulunanların tümü gibi, Doers da süredurum kabul etmiyor. Onlar değişimin ajanlarıdır. Onlar kaşif. Onlar arayanlar. Onlar inşaatçı. Ve hepimizin içinde bir Doer olduğuna inanıyorlar.

Sanayileşme ve şirketler nesiller boyu yapma isteğini bastırdı. Harekete geçmeden önce sormamızı isterlerdi. Analizi ilerleme ile karıştırıyorlardı. Süslü yol haritaları geliştirmek için danışmanları görevlendiriyorlardı. Her bir ilerleme için işaretler ve kilometrce katedilmesi gereken yollar belirlerlerdi. Harcanan her dakikanın nasıl kazanca dönüştüğünü bilmelilerdi. Yine de şirketlerin blok zincirleri icat etmemesinin bir nedeni var.

Yearn'a katkıda bulunmak bir meydan okuma eylemidir. Bu, izni geri alma eylemidir. Sadece hayal kurmak değildir. Şuanda yapılıyor

ÖZETLE

Yearn'de kapı her zaman açıktır. Ama sadece sen adım atabilirsin.

# YFI Boarding Okulu

![](./image7.png?w=968&h=625)

YFI Boarding okul, potansiyel stratejistlerin soru sorması ve öğrenmesi için yeni bir programdır. Normal bir okul gibi değil, ancak kıdemli stratejistler, genç yeteneklerin gelişmesine yardımcı olmak için düzenli aralıklarla ofis saatleri düzenler.

YFI Boarding okuluna katılmak için: genel işe alım sürecinden geçmeniz, strateji geliştirmeye ilgi göstermeniz, bir strateji üzerinde çalışmanız veya aktif olarak bir strateji oluşturmanız ve son olarak katılmaya davet edilmeniz gerekir.

Ayrıca herhangi bir Yearn ana katılımcısı tarafından mavi hap olarak katılarak katılabilirsiniz.

Ne sorabilirsin? Sana geldiklerinde anlayacaksın.

YFI boarding okuluna katılma şansı elde etmek için [buradan](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) başvurun.

# Yearn'deki Vault'lar

Tüm aktif yVault'larımız için stratejilerin ayrıntılı bir açıklamasını [buradan](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) okuyabilirsiniz.

# Ekosistem Haberleri

[Yearn, Huobi Cüzdanını kullanıcı arayüzümüze entegre etti](https://twitter.com/HuobiWallet/status/1503939305135247365)

[Yearn altyapısı üzerine kurulu bir protokol olan Alchemix, kısa süre önce V2'sini başlattı](https://twitter.com/AlchemixFi/status/1503747272143740942)

[PILLS Universe'den yeni Yearn sanatına göz atın](https://twitter.com/pillsuniverse/status/1502662158810759168)

[Steakwallet, Yearn vault'larına yatırılacak en basit kullanıcı arayüzlerinden birini sağlar](https://twitter.com/steakwallet/status/1502018618506293248)

[Sturdy Finance, Fantom'da Yearn tarafından desteklenen yeni fBEETS teminatını ekledi](https://twitter.com/SturdyFinance/status/1509962174629875726)

[Yearn v3 tasarımına bir göz atın](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[Delphi DISRUPTORS podcast'inde DAO'lar hakkında konuşan trakeopteryx'i dinleyin](https://twitter.com/tracheopteryx/status/1511000392552763399)

[Yearn tarafından desteklenen Tempus Finance'te USDC ve DAI'de yüksek sabit getiriler kazanın](https://twitter.com/TempusFinance/status/1508823240768167943)

[MAI stabilcoin için teminat olarak yvYFI eklemek için bir oylama başlatıldı](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[Wido sayesinde Fantom'da gaz ücreti ödemeden Yearn işlemleri mümkün](https://twitter.com/joinwido/status/1506718710836436996)
