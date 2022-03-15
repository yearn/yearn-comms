---
title: "Geliştirme, Hata Ayıklama ve Olay Analizini Güçlendirmek İçin Tenderly ile Yearn Finance Ortaklığı"
image:
  src: ./cover.png
  width: 1280
  height: 800
date: '2022-03-02'
author: Weaver
translator: Dastronom
---

Yearn-Tenderly ortaklığının karşılıklı yarar sağladığı kanıtlanmıştır.

Tenderly, Yearn'e sınıfının en iyisi geliştirici araçlarına erişim, zincirdeki etkinliklere ilişkin daha derin bilgiler ve rock yıldızı bir geliştirici ekibinin desteğini verdi. Yearn, önemli bir DeFi protokolünden temel kullanım senaryoları ve gereksinimleri sağlayarak Tenderly ürününün endüstrinin ihtiyaçlarını yinelemesine ve bunlara uyum sağlamasına yardımcı oldu.

![](cover.png?w=1400&h=670)

## Durum
Yearn Finance, tüm DeFi'deki en güvenli ve en yüksek TVL protokollerinden biri olmaktan gurur duymaktadır. Yearn ayrıca muazzam miktarda on-chain altyapıya sahiptir: 300'den fazla v2 vault'u ve yalnızca ana ağ üzerinde strateji akıllı sözleşmeleri (v1 vault'ları, keep3r altyapısı, yardımcı sözleşmeler, yan zincir dağıtımları vb.'den bahsetmiyorum bile).

Yearn ayrıca izinsiz bir *para lego*'dur. Yani, verim elde etmeye yardımcı olmak için DeFi ortamında birçok farklı protokol kullanır ve buna karşılık, birçok farklı protokol, kullanıcıları ve hazineleri için verim üretmek için Yearn'i kullanır. Bu kadar derin bir şekilde entegre olmak büyük fırsatlar sağlarken, aynı zamanda bir yığın riski de beraberinde getirir: protokoller arasındaki entegrasyonların sayısı arttıkça saldırı yüzeyi de büyür.

## Meydan okumak
Geliştirici katkıda bulunanlardan oluşan bu kadar büyük bir ekip ve geniş zincir üstü altyapı ile, sınıfının en iyisi geliştirici araçlarını bulmak ve kullanmak önemli hale geliyor. Yearn'in operasyonlarını geniş ölçekte yürütmekle karşılaştığı zorluklardan bazıları şunlardır:

#### Gözetim ve Alarm durumu
Zincirdeki verilerin izlenmesi, Yearn'in güvenliğini, bir entegrasyonun güvenliğini etkileyebilecek olaylar hakkında bilgi edinmek veya yalnızca kullanıcı davranışındaki kalıpları izlemek için kritik öneme sahiptir.

Örneğin: Yearn'in kullandığı verim kaynaklarından biri çiftçilik ödüllerini ortadan kaldırmak için yeni bir yönetim önerisi uygularsa ne olur? Ya da belki bir çiftlik, imzalayanları çoklu imzasını güncelleyerek bir güvenlik sorunu yaratır ve biz de bunu bilmek isteriz.

Çekirdek protokol çalışması yerine zincir dışı altyapı oluşturmak ve sürdürmek için geliştirici zamanını ve kaynaklarını harcamak, Yearn için büyük bir yatırım değil.

#### Hata ayıklama
Solidity akıllı sözleşme geliştirme ortamları, Java, Javascript, vb. gibi geleneksel programlama ortamlarına kıyasla hala olgunlaşmamıştır. Yönetimi altında 6 Milyar Dolarlık varlığa sahip bir protokol için güvenli kod yazmak bir başarıdır. Başarılı olmak için Yearn geliştiricileri ve güvenlik ekipleri, hem yerel ortamlarda hem de ana ağda canlı olarak kod ve işlemlerde hata ayıklayabilen araçlara ihtiyaç duyar.

#### Durum Analizi
Zincirde, Yearn veya başka bir protokole karşı, kullanıcı fonlarını etkileyen bir güvenlik olayı meydana geldiğinde, ne olduğunu ve nasıl yanıt verileceğini hızla anlamak için uygun araçlara ihtiyacımız var. Basit uyarıların ötesinde, belirli bir işlemin veya bir dizi işlemin izini derinlemesine inceleyebilmeli ve bulgularımızı ekiple paylaşabilmeliyiz.

## Çözüm
Yearn geliştiricileri, Tenderly'nin savaş odalarında mevcut olan en güvenilir ve yararlı analiz aracı olduğunu keşfettikten sonra, Yearn, Tenderly ile daha resmi bir ilişkiye girmeye karar verdi.

Yearn ekibi masaya DeFi ortamındaki uzmanlığı ve son derece aktif herhangi bir DeFi protokolünün doğasında bulunan kullanım durumlarını getirirken, Tenderly ekibi Ethereum'daki en yüksek performanslı ve güvenilir düğüm altyapısına sahip en parlak beyinleri paylaştı. Endüstri.

Son birkaç aydır, Yearn geliştiricileri, ürün yol haritası üzerinde geri bildirim ve etki sağlayarak Tenderly ürünlerinin yoğun kullanıcıları haline geldi. Bu süre içinde Tenderly, yukarıda listelenen zorlukların her birinin ele alınmasına yardımcı olan inanılmaz derecede faydalı araçlar ve yetenekler gönderdi.

#### Gözetim ve Alarm durumu
Tenderly, acemi kullanıcıların bile neredeyse her zincirleme olayda uyarı oluşturmasına olanak tanıyan yerleşik özelleştirilebilir uyarılara sahiptir. Yearn dahili olarak, kritik olaylara ve zincirdeki değerlere göz kulak olmak için bunu kapsamlı bir şekilde kullanır. Örneğin, multisig Telegram gruplarımızın her biri, yeni bir multisig işlemi çıkarıldığında bir köprü ile uyarılır.

Web3 eylemleri, Tenderly'nin kullanıcıların zincir üstü olaylara tepki olarak dahili komut dosyalarını tetiklemesine izin veren başka bir özelliktir (örn.bir stratejideki bir hata tekrarlanan hasatlara neden olursa keep3r etkinliğini devre dışı bırakmak için bir işlem gönderir)

#### Hata ayıklama
Tenderly hata ayıklayıcısını kullanmak, Yearn geliştiricileri için ileriye doğru büyük bir adım oldu. Yerel geliştirme ortamlarında ana ağı çatallamak için Ganache kullanma günleri geride kaldı. Ganache yavaş, güvenilmez olabilir ve RPC çökmelerine yol açabilir; Hassas çatallar özellikle sağlamdır ve bir işlemin geri alınmasına neden olan tam satırı bulmaya yardımcı olarak geliştiricilerin birçok saatinden tasarruf sağlamıştır. Ayrıca, bağımsız çatallar ve işlem izleri URL aracılığıyla paylaşılabilir, böylece meslektaşlar ve kod gözden geçirenlerle aynı şeye baktığınızı bilirsiniz.

#### Durum Analizi
Tenderly, sektördeki en iyi UI hata ayıklayıcısını sunar. Yearn ekibinin güvenlik olaylarının temeline inmesi ve hataların ve saldırıların incelenmesine yardımcı olması için paha biçilmezdi. Savaş odası ortamları stresli ve gürültülüdür, bu nedenle herkesin aynı fikirde olmasına yardımcı olan paylaşılabilir URL'lere sahip olmak yararlıdır. Olay analizi konusunda daha fazla çaba sarf edilmektedir, ancak bunu ayrı bir gönderide ele alacağız.

## Tenderly UI önizleme

*İşleme genel bakış:*
![](image1.png?w=1140&h=609)

*Hata bağlamı:*
![](image2.png?w=1131&h=432)

*Hata simülasyonu*
![](image3.png?w=1280&h=672)

## Sırada Ne Var
Yearn'i en çok heyecanlandıran şeylerden biri, yeni katkıda bulunanlar getirmek ve yetenekleri keşfetmek. Tenderly ekibiyle işbirliği içinde, YFI Boarding School (yaklaşan stratejistler için bir topluluk) üyeleri için Tenderly'ye 90 günlük ücretsiz erişim sunuyoruz. Bunun, yatılı okul üyelerinin kendi strateji kodları hakkında daha derin bilgiler edinmelerine, daha verimli öğrenmelerine yardımcı olurken, aynı zamanda onlara Tenderly'nin ürününün gücünü göstermelerine yardımcı olduğuna inanıyoruz.

Yearn Finance, basitleştirilmiş DeFi'dir. Belgelerimize, vizyonumuza ve bize nasıl katılacağınıza göz atarak daha fazla bilgi edinin.

Tenderly, yenilikçi blok zinciri ürünleri oluşturmak isteyen ekipler ve şirketler için uçtan uca bir geliştirici platformu sağlar. tenderly.co'da  daha fazlasını öğren.
