---
title: "Yearn'nin Dai Vault'ları — artık en iyi 20 DeFi protokolünden biri olduğunu biliyor muydunuz?"
image:
  src: ./cover.png
  width: 1280
  height: 800
date: '2021-06-01'
author: Wot_Is_Goin_On
translator: Dastronom
---

[Yearn'in web sitesine](https://yearn.finance/vaults) giderseniz, en sonuncusu [SNX vault'u](https://twitter.com/iearnfinance/status/1395413780012666881) olmak üzere yaklaşık 50 kripto vault'unun bir listesini görürsünüz. [Kriptonuzu](https://docs.yearn.finance/resources/guides/how-to-participate-in-a-yvault) Yearn'in vault'larından birine yatırırken, protokol sizin için bir getiri üretmeye başlayacak.

![](image1.png?w=588&h=257)

Listenin ortalarına gömülmüş olmasına rağmen, Yearn Dai vault'u kendi başına en iyi 20 DeFi protokolü haline geldi:

- 31 Ocak - 31 Mayıs 2021 tarihleri arasında mevduat sahipleri için %13,2 APY kazanç
- 31 Mayıs'ta 639,1 milyon dolarlık TVL (bu onu [DeFiPulse](https://defipulse.com/)'da 17. sıraya yerleştirdi).
- Mayıs sonunda sürkülasyondaki tüm DAI'nin %14.4'ünü paylaştırmak
- Sadece Mayıs ayında Yearn için $1.7 milyon üzerinde gelir elde etmek
- [8 stratejiyi](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) aynı anda çalıştırma
- Alchemix, PoolTogether, Crypto.com ve Yearn'in diğer vault'ları tarafından kullanılan entegrasyonlar
- Son 2 hafta içinde işler her zamanki gibiyken [1 trilyon dolarlık kripto piyasa değeri silindi](https://edition.cnn.com/2021/05/22/investing/crypto-crash-bitcoin-regulation/index.html)

Bu makale, kasanın nasıl bir getiri elde ettiğini, stratejileri kimin geliştirdiğini ve kasayı gerçekte kimin kullandığını açıklamaktadır.

Yearn Dai vault'una "Dai v2 vault'u" ve "yvDai" de denir; burada yvDai, Dai vault'undaki payınızı temsil eden jetondur.

# **Yearn'da mevduat sahipleri önceliktedir — 639 milyon dolarla %13 APY**

Mudilerin ucuz bir fon kaynağı olarak görüldüğü geleneksel finansın aksine, Yearn'de mudiler ilk sırada gelir. This is one of the reasons why the TVL has increased rapidly since its inception.

![](image2.png?w=505&h=224)

[Yearn Ekosisteminde Kilitlenen Toplam Değer — Grafana](https://yearn.vision/?refresh=1m)

TVL'deki iki büyük sıçrama, Alchemix'in kendi kendini ödeyen kredilerine olan taleple açıklanabilir. Mevduat sahipleri hakkında daha sonra.

# **Yearn'in Dai vault'u geliri Mayıs ayında 1,7 milyon doları aştı**

Yearn, [yıllık %2 yönetim ücreti ve %20 performans ücretinden](https://docs.yearn.finance/yearn-finance/yvaults/overview) gelir elde eder (ve stratejistler performans ücretinin yarısını alır).

Yalnızca Dai vault'undan elde edilen net gelir, Ocak ayında 10 bin doların altından Mayıs ayında 1,7 milyon doların üzerine ivmeli bir büyüme gösterdi.

![](image3.png?w=491&h=308)

İstatistik linki [https://twitter.com/Bob_The_Buidler](https://twitter.com/Bob_The_Buidler)

Yukarıda gösterilen gelir, protokol entegrasyonlarını teşvik etmek için kullanılan üyelik ücretlerinden nettir.

Geleneksel finans kurumları genellikle sonuçlarını değerlendirme tarihinden sonraki 3 aya kadar yayınlamazlar. Ancak, Ethereum şeffaf bir halka açık blok zinciri olduğundan ve [Bob](https://twitter.com/Bob_The_Buidler) Yearn'in tüm işlemlerini derleyen bir web sitesi oluşturduğundan, Dai vault'unun Mayıs ayı gelirini zaten biliyoruz.

# **Vault, mudilerine nasıl gelir sağlıyor?**

Yüksek düzeyde Yearn'in vault'ları üç şekilde gelir sağlar:

- Borç verme
- Likidite madenciliği
- Alım/Satım ücretleri

Bu gelir daha sonra kaldıraç kullanılarak artırılır. 

Borç verme, likidite madenciliği ve alım satım ücretleri, bugün DeFi'de getiri sağlayan fırsatlardır. DeFi, örneğin sürekli protokoller ve seçenek protokolleri ile büyüdükçe, Yearn, yeni protokollerin sunduğu getiriyi elde etmenin yeni yollarından yararlanmak için harika bir konumda olacaktır.

**Borç verme**

Orijinal Yearn protokolü, o sırada mevcut olan güvenilir borç verme protokollerini kullanan bir getiri optimize ediciydi: Compound Finance, Aave ve dydx.

Artık Yearn, uzun vadeli varlıkları hedefleyen Cream Finance ve kaldıraçlı verim çiftçiliğini basitleştiren Alpha Homora arasından seçim yapabilir.

Teminatlı krediler genellikle bankalar için en büyük bilanço kalemidir, örneğin [HSBC'nin 351 milyar sterlinlik gayrimenkul kredisi vardır](https://www.wsj.com/market-data/quotes/HSBC/financials/annual/balance-sheet). Aradaki fark, DeFi'de teminatın gayrimenkul yerine kripto olmasıdır, bu nedenle iflas riskini azaltmak için LTV'lerin DeFi'de önemli ölçüde daha düşük olması gerekir. DeFi borç verenleri ayrıca borçluları çok fazla risk almaktan caydırmak için yüksek tasfiye cezaları talep eder.

HSBC, 226.059 çalışanından kaçının faiz oranlarını güncel tutması gerektiğini açıklamaz, ancak DeFi'de faiz oranları, kredi protokollerinin token sahipleri tarafından seçilen bir formüle göre belirlenir. Aşağıdaki grafik, Compound Finance'in Dai'nin faiz oranını kullanım oranına bağlı olacak şekilde nasıl belirlediğini göstermektedir.

![](image4.png?w=591&h=321)

[https://compound.finance/governance/proposals/18](https://compound.finance/governance/proposals/18)

Teminat bugün kripto olsa da [gerçek dünya varlıkları DeFi yolunda](https://thedefiant.io/makerdao-will-soon-hold-real-world-assets-as-collateral/).

**Likidite madenciliği**

Likidite madenciliği, protokolün kullanıcılarını protokolün yerel belirteçleriyle ödüllendirmeyi içerir. Protokollerin davranışı teşvik etmesinin farklı yolları hakkında [buradaki 3. bölümde](https://medium.com/can-yearn-disrupt-the-110-trillion-asset-management-industry-8fea100cead0) yazdım.

Likidite madenciliği, DeFi protokolleri tarafından şu amaçlarla kullanılır:

- Protokolü ademi merkezileştirir, böylece sansüre dirençli hale getirir
- Bilgisayar korsanlarını cezbetmek ve güvenliğini test etmek için bir bal küpü oluşturan protokole likidite (ve dikkat) getirir
- Kullanıcılara belirteçleri dağıtır, böylece protokol sahiplerinin ve kullanıcılarının teşvikleri hizalanır. Bu, protokolün kullanıcılarının ve sahiplerinin bir araya gelip faydalı ve sürdürülebilir bir şey inşa etme şansını artırır.

Yearn Dai vault'u kazanıyor:

- Daha sonra tek taraflı Curve stratejisinde Dai ile değiştirilen CRV ödülleri
- Compound Finance'e Dai sağlayarak COMP ödülleri
- IDLE Finance'e Dai sağlayarak IDLE ve COMP ödülleri
- ROOK, Dai'yi KeeperDAO'ya sağlayarak ödüllendiriyor
- PoolTogether'ın Dai piyangosuna girerek HAVUZ ödülleri 23 Nisan'da vault [haftalık piyangoda 70 bin dolar](https://app.pooltogether.com/prizes/mainnet/PT-cDAI/26) bile kazandı.

Bu ödülleri Yearn olmadan kazanabilir ve ücret ödemekten kurtulabilirsiniz ancak Yearn'i kullanmanın avantajları şunlardır:

- Yeni protokoller bulmak için bir sürü tam zamanlı çalışan
- Sözleşmelerin güvenli olup olmadığını kontrol etmek için yeni kurulan [YFI Güvenli Tarım Komitesi](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533)
- Stratejileri kodlamak için geliştiriciler
- Fonları hızlı bir şekilde çekmek veya fonları daha yüksek getiri stratejisine taşımak için bu stratejilerin her birinin yakından izlenmesi
- Farklı stratejiler arasında en uygun tahsisi belirleyen bir ekip
- İşlem ücretlerini büyük miktarlarda sermayeye yayabilme. Ethereum, Uniswap veya Sushiswap'ta Dai için 0.1 COMP jeton satmak için 10 COMP jetonuyla aynı gaz ücretini alıyor
- [CRV ödüllerini artırmak](https://docs.yearn.finance/resources/guides/how-to-understand-crv-vote-locking) için kullanılan en büyük veCRV sahibidir. Aynı düzeyde ödül almak için bir kullanıcının önemli bir oranda CRV tokenini kilitlemesi gerekir.

**Alım/Satım ücretleri**

Ticaret ücretleri, Uniswap veya Sushiswap gibi otomatik piyasa yapıcılara (AMM'ler) likidite sağlayarak kazanılabilir, ancak bu, [kalıcı kayıp](https://academy.binance.com/en/articles/impermanent-loss-explained) riskine yol açar. Yearn, bu AMM'leri kullanarak Dai vault'u kalıcı bir kayba maruz bırakmaz çünkü bu, mevduat sahiplerine yatırdıkları jetonun aynısını ödeyememe riskine yol açar.

Bununla birlikte, Curve Finance, benzer şekilde fiyatlandırılmış (örneğin, Dai/USDT veya Dai/USDC) çiftlerin alım/satımına izin vermek için tasarlanmış bir AMM'dir ve bu nedenle, kalıcı kayıp riski düşüktür.

Tek taraflı CRV stratejisi, Dai likiditesi sağlayarak Curve Finance'ten işlem ücreti alır.

**Kaldıraç**

DeFi'de kaldıraca erişmenin tüm yollarına ayak uydurmak zor olabilir. Kaldıraç, gelir elde etmenin bir aracı değildir, ancak borçlanma maliyetinden daha yüksek bir oran kazanabiliyorsanız, verimi artırmak için kullanılabilir.

Yearn, Dai vault'u için aşağıdaki yaklaşımları kullanır:

- Kaldıraçlı COMP çiftçilik stratejisindeki verimi artırmak için Aave veya dydx flash krediler
- Borç maliyetinden daha yüksek gelir elde ettiren stratejiler için teminatsız borçlanma (Cream'in Ironbank'ından)

Dai vault'undan flash krediler, Dai'yi ödünç almayı, bir gelir elde etmek için dağıtmayı ve ardından aynı işlemde geri ödemeyi içerir.

Ironbank'tan alınan teminatsız krediler, protokolden protokole borç verme ve borçlanmada bir ilkti. Esasen, Ironbank protokolü, Yearn stratejilerinin kredinin faizini geri ödemek için yeterli gelir elde edebileceğine güveniyor. Flash kredilere aşinaysanız, Ironbank'tan teminatsız krediler bir flash kredi olarak görülebilir, ancak daha uzun bir süre için.

Stratejiler için daha ayrıntılı bilgi için [v2 DAI yVault (yvDAI)](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) bölümüne bakın.

# **Stratejileri kim buluyor?**

Yearn'in şu anda [30 tam zamanlı katılımcısı](https://twitter.com/bantg/status/1395115320344563713?s=20) var, ancak getiri elde etmenin yollarını bulan stratejistler. Vault'lar tarafından kazanılan performans ücretlerinin yarısı kadar teşvik edilirler.

Aşağıdaki grafik, stratejistlerin Mayıs ayı başında nasıl 5 milyon doları aştığını gösteriyor (sadece Dai'de değil, tüm vault'lar).

![](image5.png?w=602&h=401)

y-axis $m cinsindendir (kaynak: [https://twitter.com/bantg]

# **Yılın Dai vault'unu gerçekte kim kullanıyor?**

En büyük mevduat sahipleri insanlar değil, diğer protokollerdir.

![](image6.png?w=502&h=240)

Alchemix, Dai vault yataklarında önde geliyor

Aşağıda tartışılan Dai vault'u entegrasyonlarının çeşitliliği şunları gösterir:

- Daha yüksek faiz oranları ile ne mümkün olur
- Entegrasyonlar düşünülerek Vault'ların  tasarlanmış olması
- Diğer protokolleri üyelik ücretleriyle entegre etmeye nasıl teşvik edilir, diğer protokollerle kazan-kazan ilişkileri oluşturabilir mi
- Yearn'in kasalarının güvenilirliği, geliştiricilerin bunların üzerine inşa etmenin yollarını bulmaya başladıkları anlamına geliyor.

[**Alchemix**](https://alchemix.fi/)

Alchemix, alUSD kredisi karşılığında %200 teminat oranına kadar Dai yatırmanıza izin verir. Protokol daha sonra Dai'yi Yearn'nin Dai vault'una gönderir ve burada riske göre ayarlanmış en yüksek getiriyi elde edebilir. Teminatın tamamı üzerinden kazanılan faiz daha sonra alUSD borcunuzu ödemek için kullanılır.

Alchemix'in kendi kendini ödeyen kredileri, aynı zamanda ona karşı borç alırken tüm yatırımınızdan getiri elde etmenizi sağlar.

[Scoopy Trooples'ın](https://twitter.com/scupytrooples) Alchemix hakkındaki konuşmasını [buradan](https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9sS21RREc5Ug/episode/MzgzNDBkMDctZDk4Zi00ZmI1LThkMjYtMGM5MzgyZjMwNTdk?ep=14) dinleyebilirsiniz.

[**PoolTogether**](https://app.pooltogether.com/?tab=pools)

PoolTogether'ın kayıpsız piyango, Dai vault'unu kullanarak faiz kazanıyor. Piyangolar sadece Ethereum'da kurcalamaya karşı korumalı, rastgele, şeffaf ve kazançlar hemen ödenebilir.

DeFi'deki en iyi fikirlerin çoğunda olduğu gibi, faiz kazanmak için Yearn'nin Dai vault'unu kullanma fikri [yönetim forumu gönderisinden](https://gov.pooltogether.com/t/use-yearn-vaults-to-generate-a-higher-payout/639) çıktı.(bu reeserj'den).

İngiltere'nin en büyük tasarruf ürünü, kayıpsız bir piyango olan Premium Tahvillerdir. [Yıllık %1 ödül fonu oranından](https://www.nsandi.com/products/premium-bonds) paylarını kazanma şansı için [21 milyondan fazla insan 107 milyar sterlinin üzerinde tasarruf sağlıyor](https://www.moneysavingexpert.com/savings/premium-bonds/).

Bu, yalnızca İngiltere'deki kayıpsız piyangolardan 100 milyar sterlin (140 milyar dolar) üzerinde adreslenebilir pazar! Bu, Yearn'in şu anki TVL'sinin 40 katından fazla. Hiç şüphe yok ki, eğer yıllık faiz oranı da %1'den fazla olsaydı, adreslenebilir pazar çok daha yüksek olurdu.

DeFi'nin bir balonun içinde olduğunu söyleyenler için, Birleşik Krallık Premium Tahvilleri getiren %1'de "tasarruf edilen" miktar, tüm DeFi protokollerinin toplam TVL'sinin iki katından fazladır.

**Crypto.com**

10 milyondan fazla kullanıcısı olan multi milyar dolarlık merkezi bir borsa olan Crypto.com, [Yearn'dan faiz kazanmanızı](https://help.crypto.com/en/articles/4933348-defi-earn-yearn-earn-v2) sağlar. Yearn'nin Dai faiz vault'larından daha eski bir sürümünü sunar.

DeFi protokollerine kıyasla tamamen farklı bir dizi risk değerlendirmesine sahip olacak merkezi borsalarla entegrasyon, Yearn'in vault'larında bir güven oylamasıdır.

[**Inverse Finance**](https://inverse.finance/)

Inverse Finance, Dai vault'undan [seçtiğiniz jetonla ödenen](https://medium.com/inversefinance/inverse-finance-deposit-dai-earn-eth-bc5dda6d5867) bir getiri elde etmenizi sağlar. Bu, değişken kripto piyasasına maruz kalmak isteyen ancak prensiplerini riske atmak istemeyen (akıllı sözleşme riski hariç) kişiler için mükemmeldir. 

**Yearn’s other vaults**

Kendiniz kullandığınızda iyi bir ürün tasarladığınızı bilirsiniz ve Yearn de bunu yapar. Yearn'in wBTC, ETH ve YFI vault'ları için en yüksek getiri stratejilerinden biri, Dai'yi MakerDAO'da basar ve ardından yeni basılan Dai'yi Dai vault'una yatırır. Bu stratejiler, borçlanma maliyetinin, ücretler hariç Dai getirisinin altında olmasına dayanır.

[**Yearn'in Hazinesi (ychad.eth)**](https://t.co/T3ihkeTIQA?amp=1)

Yearn'in hazinesi de vault'ları elindeki varlıklardan faiz kazanmak için kullanıyor. Bu arada diğer stablecoin vault'ları daha yüksek bir APY ödiyor ancak Dai vault'u da kullanılıyor.

**Gelecekteki entegrasyonlar?**

[**Saffron Finance**](https://saffron.finance/)

Dai vault'undaki verim birkaç stratejiye bağlıdır ve bu nedenle çok değişkendir. DeFi kullanıcıları değişken getiri konusunda rahat olsa da, geleneksel finans değişkeninde APY'ler birçok yatırımcıyı vazgeçirir. Birçok kişi faiz gelirlerini kira ödemek veya düzenli giderleri karşılamak için kullanmak ister ve daha fazla kesinlik karşılığında daha düşük bir getiriyi kabul etmekten mutlu olur. Saffron Finance bunu riski bölerek yapar.

Örneğin, Dai'den değişken bir APY kazanmak yerine vault'un APY'sini düşük riskli bir dilime ve yüksek riskli bir dilime bölebilirsiniz. Daha düşük riskli dilime yatırım yaparak sabit bir %3 APY (hala bankanın sunduğundan çok daha yüksek) kazanabilirsiniz ve daha riskli dilimdeki yatırımcılar kalan faizi kazanabilir.

Bu, Yearn'nin Dai vault'unun adreslenebilir pazarını daha düşük risk ve sabit getiri arayan çok daha büyük bir yatırımcı grubuna açabilir.

[**Auctus**](https://auctus.org/)

Auctus, wBTC ve ETH opsiyonlarını satın almanıza izin veren bir opsiyon protokolüdür. Ayrıca, CRV3Pool stratejilerini kullanarak sabit paralardan kazanılan faizle bu seçenekleri satın almanıza olanak tanır. Kazanılan faiz ile ETH veya wBTC satın almak, sermaye kaybı riski olmadan (akıllı sözleşme riskinin ötesinde) ETH veya wBTC'nin yukarı yönlü riskine maruz kalmanıza sebep olur. Bu strateji, Inverse Finance tarafından uygulanan stratejiye benzer. Yearn, DeFi'de getiri elde etmek için gidilecek yer haline geldikçe, daha fazla protokol, bunun gibi stratejiler için getiri elde etmek için Dai vault'unu kullanacak.

**Bütün bunlara nasıl ayak uydurabilirim?**

Vault'ların durumundan haberdar olmak için [qosmonot](https://twitter.com/qosmonot?lang=en-gb) tarafındanyazılan [State of the Vaults bültenine](https://medium.com/yearn-state-of-the-vaults) abone olduğunuzdan emin olun. veya [buradan](https://www.youtube.com/channel/UC_o4_cOevPVYC5pXs9OOexg) Youtube videolarını izleyin. [buradan](https://twitter.com/Wot_Is_Goin_On) da beni twitter'den takip edebilirsiniz.
