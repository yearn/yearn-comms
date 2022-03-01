---
title:  "Yearn Finance ve Para Robotları"
image:
  src: ./cover.png
  width: 1281
  height: 721
date: '2021-03-25'
author: Gemini/Cryptopedia
translator: Dastronom
---

orijinal yayın: [https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol](https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol)

# Yearn Finance ve Para Robotları: Otomatikleştirilmiş DeFi Stratejisi

Yearn Finance, Yearn'in kendi topluluğu olan "kalabalığın sağladığı bilgeliği" içeren robotlar tarafından desteklenen bir dizi yatırım stratejisi sunar.

![](image1.png?w=1281&h=721)

## Özet

Yearn Finance para robotları, en düşük riskle en yüksek getiriyi elde etmek amacıyla merkezi olmayan finans (DeFi) platformlarında yatırım stratejilerini yürütür. Uygulanan stratejiler arasında borç verme için varlıklar sağlama, verim çiftçiliği ile proje jetonları kazanma, likidite sağlama veya bunların ve diğer yatırım stratejilerinin çok çeşitli DeFi borç verme protokollerinde bir kombinasyonu yer alır. Yearn protokolü, platforma token sağlayarak karmaşık yatırım stratejilerine kolayca katılmanıza olanak tanır. Genişleyen ürün grubu, DeFi'ye yatırım yapmayı basitleştirmeyi amaçlıyor ve yatırımcıların ilgisini çekiyor.

## İçerik

- Yearn.Finance: yVaults
- yVault Strateji Örnek Olayları: GUSD
- Bir DeFi Ürünleri Paketi
- Birliğin Bilgeliği

Yearn Finance, bir ücret karşılığında getirileri en üst düzeye çıkarmak için çalışan “para robotları” ile merkezi olmayan finansın (DeFi) karmaşıklığını otomatikleştiren ve basitleştirmeyi amaçlayan ürünler geliştiriyor. Yearn işe tek bir [Ethereum](https://www.gemini.com/cryptopedia/ethereum-smart-contracts-tokens-use-cases) geliştiricisiyle başladı — [Andre Cronje](https://www.gemini.com/ cryptopedia/glossary#andre-cronje) — kendi DeFi getirilerini otomatikleştirmeye ve optimize etmeye çalışan kişi. Artık getiri elde etmek için giderek daha yenilikçi yollar geliştirmeye odaklanarak Ethereum'daki en aktif ve ilgili merkezi olmayan topluluklardan biri haline geldi.

Para robotları, Yearn tarafından Ethereum tabanlı DeFi platformlarında yürütülen otomatik ticaret stratejilerine atıfta bulunur. Giderek artan sayıda DeFi protokolünde uygulanabilecek sayısız yatırım stratejisi var. Örneğin, bir Yearn para robotu, [Curve protokol](https://www.gemini.com/cryptopedia/curve-crypto-automated-market-maker) işlem ücretlerinden para kazanabilir, [Aave'nin flash kredilerini]( https://www.gemini.com/cryptopedia/aave-flashloans) borç para alabilir [Compound](https://www.gemini.com/cryptopedia/compound-finance-defi-crypto)'a para ödünç verebilir.

## Yearn.Finance: yVault'ları

Yearn ekosistemindeki en popüler ürünler, DeFi platformlarına tahsis edilen bir yatırım stratejisini izleyen bir dizi simge havuzu olan [yVaults](https://www.gemini.com/cryptopedia/glossary#y-vaults)'dur. Jetonları bir yVault'a yatırmak, otomatik olarak bir tür [likidite sağlayıcı (LP) jetonu](https://www.gemini.com/cryptopedia/liquidity-provider-amm-tokens) olan yeni bir [yToken](https://www.gemini.com/cryptopedia/glossary#y-tokens) basar. LP jetonları, jetonlar bir [likidite havuzuna](https://www.gemini.com/cryptopedia/glossary#liquidity-pool) yatırıldığında otomatik olarak oluşturulur ve bir havuzun temel varlıklarına yönelik hak talebi olarak kullanılır. Her yToken, orijinal olarak yatırılan jetonlar ve jetonlar yVault'da çalışırken biriken ödüller için herhangi bir zamanda kullanılabilir.

Örneğin, GUSD yVault'a [GUSD](https://www.gemini.com/cryptopedia/gusd-gemini-dollar-stablecoin-features) yatırabilir ve yGUSD adlı LP jetonunu alabilirsiniz. yGUSD'yi temel GUSD ile değiştirdiğinizde, bu GUSD artı yVault'un stratejisini kullanmaktan elde edilen GUSD'nin tüm kazançlarını veya ödüllerini alırsınız. Yearn'in yVault'ları, karmaşık DeFi uygulamaları ve bileşenlerini, yatırımcıların varlık sağladığı ve sofistike, algoritmik bir stratejiye katılmak için bir jeton tuttuğu basitleştirilmiş bir ticaret stratejisine sıkıştırır.

## yVault Strateji Örnek Olayları: GUSD

yVault stratejileri değişkendir ve Yearn topluluğu, daha az karlı hale geldikçe bir stratejiyi değiştirmeye veya ayarlamaya karar verebilir. Optimizasyon için halihazırda değiştirilmiş olan Ekim 2020 yGUSD stratejisinde, strateji aşağıdaki adımlarla yGUSD sahibine getiri sağlar:

1. GUSD, [stabil paralardan](https://www.gemini.com/cryptopedia/what-are-stablecoins-how-do-they-work) oluşan bir Curve havuzuna GUSD, [DAI](https://www.gemini.com/cryptopedia/dai-stablecoin-what-is-dai-token), USDC ve USDT ücretlerini kazanmak için yatırılır.
2. Stabilcoin havuzundan üretilen LP jetonu, [CRV jetonunu](https://www.gemini.com/cryptopedia/glossary#crv-token) kazanmak için Curve'de stake edilir.
3. Kazanılan CRV tokenlerinin %90'ı DAI için satılmaktadır.
4. DAI, daha fazla ücret kazanmak için orijinal GUSD, DAI, USDC, USDT stabilcoin havuzuna geri yatırılır.

Bir kullanıcının bakış açısından, yukarıdaki adımlar algoritmik başlık altında gerçekleşir. Bu GUSD stratejisinin kendisi, borç para almayı, [kaldıraç](https://www.gemini.com/cryptopedia/glossary#leverage) kullanmayı ve piyasa güçlerine maruz kalmayı içerebilen daha ilgili ve sıralı olarak karmaşık yVault stratejilerine kıyasla oldukça basittir.

Örneğin, Aralık 2020 itibariyle hala deneysel bir aşamada olan ve henüz tam olarak piyasaya sürülmemiş olan yETH vault'u, stratejisinde hem [MakerDAO](https://www.gemini.com/cryptopedia/makerdao-defi-mkr-dai-coins) hem de Curve protokollerini kullanır. yETH stratejisiyle, ETH sahipleri aşağıdaki adımlarla getiri elde ederken ETH'nin fiyat artışına (veya amortismanına) maruz kalırlar:

1. ETH, teminat olarak MakerDAO'ya yatırılır.
2. DAI, teminat olarak yatırılan ETH kullanılarak MakerDAO'dan ödünç alınır.
3. Ödünç alınan DAI, yDAI vault'una yatırılır.
4. yDAI vault'u, ücret kazanmak için DAI'yi Curve'ye yatırır.
5. DAI havuzundan üretilen LP jetonu, CRV jetonunu kazanmak için Curve'de stake edilir.
6. CRV tokenleri ETH karşılığında satılmaktadır.
7. ETH, teminat olarak MakerDAO'ya geri yatırılır.

yETH vault MakerDAO'dan DAI ödünç aldığından, tasfiye edilme veya DAI kredinizi geri ödemek için para robotunun ETH'nizi satması riski vardır. Tasfiye, ETH teminatının değeri, ödünç alınan DAI değerinin minimum %150 eşiğinin altına düştüğünde gerçekleşir. Tasfiyeyi önlemek için yETH para robotu, ETH teminatının değerini DAI borcunun değerine kıyasla %200'lük güvenli bir seviyede tutmayı hedefliyor. ETH teminatının değeri %200 hedefinin altına düşmeye başlarsa, para robotu aşırı teminatlı kalmak için DAI borcunun bir kısmını otomatik olarak öder. Borç, teminat ve tasfiye yönetimi, Yearn'in vault'larına ek bir karmaşıklık katmanı ekler. 

Daha fazla protokol ve platforma bağlı olarak daha karmaşık hale geldiğinden, yVault stratejileri risk bileşiklerini tanımak önemlidir. yETH örneği gibi stratejiler, kaldıraç kullanmanın doğasında var olan risklerin yanı sıra tasfiye ve akıllı sözleşme başarısızlığı risklerine de sahiptir.

## DeFi Ürünleri Paketi

Yearn ürün grubu, sürekli genişleyen ve gelişen bir DeFi ürünleri setidir. Çeşitli yVault stratejilerinin yanı sıra Yearn, birlikte ekosistemini oluşturan birden fazla aktif ürün sunar.

Diğer Yearn ürünleri, DAI gibi sabit paraları kullanmaya ve bunları Compound veya Aave'deki yüksek faizli borç verme havuzlarında çalışmaya koymaya odaklanan yEarn uygulamasını içerir. Başka bir ürün olan Zap, çeşitli manuel işlemleri daha karmaşık, tek tıklamalı bir işlemde birleştirerek Ethereum'daki işlem maliyetlerini azaltmak için tasarlanmıştır. yInsure özelliği, kodda bir güvenlik açığı veya kusur olması durumunda bir koruma olarak akıllı sözleşmeler için sigorta sağlar.

Ayrıca, alım satımlardan yararlanmak için yTrade, tasfiyeleri otomatikleştirmek için yLiquidate ve krediler için yBorrow dahil olmak üzere, şu anda araştırma ve geliştirme aşamasında olan çok sayıda ürün bulunmaktadır. Yearn şimdiye kadar araştırma ve geliştirme için verimli bir zemin olduğunu kanıtladı ve DeFi alanı olgunlaştıkça ürün teklifleri büyük olasılıkla genişlemeye devam edecek.

## Birliğin Bilgeliği

Bir Yearn para robotu, dijital varlıkların yatırımı için bir strateji planı yürütür: nasıl tahsis edileceği, nereye yerleştirileceği, ne zaman taşınacağı ve ne zaman satılacağı. Aslında, herkes Yearn yönetişim forumunda yayınlayarak ve mantığı ve topluluğa potansiyel getirileri açıklayarak yeni bir strateji bulabilir. Topluluk tarafından onaylanırsa, strateji uygulanacak ve strateji yaratıcısı, başarılı stratejilerinden yararlanarak ücret alacaktır.

DeFi alanı, çeşitli platformları boyunca birçok otomatik ve algoritmik mekanizmaya sahip olsa da, Yearn para robotu stratejileri topluluk üyeleri tarafından oluşturulur ve etkilenir. Yearn'in topluluk yönetimi, son derece ender [YFI platform yönetişim belirteçlerinin](https://www.gemini.com/cryptopedia/glossary#yfi-token) “[adil lansmanı](https://www.gemini.com/cryptopedia/what-is-yearn-finance-yfi-coin-yearnfinance)” ve işbirlikçi doğası, otomatikleştirilmiş algoritmalar çağında bile insan yaratıcılığının ve etkinliğinin zamanında bir hatırlatıcısını sunar. Yearn ile fikirler her yerden gelebilir ve bilgelik kalabalıktan gelir. Bu bilgeliğin etkinliği, gerçek parayla gerçek zamanlı olarak sürekli olarak test edilir, yinelenir ve geliştirilir.

Yearn Finance, DeFi'de benzersiz bir katman oluşturma, birlikte çalışabilirlik ve kitle kaynak kullanımı teklifi sunar. Otomatik yatırım ve ürün geliştirmede, teşviklerde ve koordinasyonda bir deneydir. Ayrıca, getirileri optimize etmek için geniş bir yetkiye sahip merkezi olmayan bir topluluğun, örgütsel çatışma olmadan bunu etkili bir şekilde yapıp yapamayacağını görmek için bir deneydir. Birçok DeFi platformu, eski oyuncuları ve sistemleri aracılıktan kurtarmaya odaklanırken, Yearn'in yeniliği, merkezi olmayan topluluğu ve farklı platformları kullanıcılarının yararına bir araya getiren bir aracı olarak hareket etmektir.
