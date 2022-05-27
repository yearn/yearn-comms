---
title:  "Yearn'le Hackleme"
image:
  src: ./cover.jpg
  width: 900
  height: 450
date: '2022-05-05'
author: Farrahmay
translator: Dastronom
---

**📣Yearn Finance, bilgisayar korsanlarını, geliştiricileri ve yaratıcıları protokolümüzün üzerine inşa etmeye çağırıyor!**

![](cover.jpg?w=900&h=450)

Yenilikçi bir uygulama geliştiriyor veya bir getiri stratejisi başlatıyor olsanız da, Yearn'i geliştirmenin pek çok yolu yoktur. Bu kılavuz, Yearn'i hacklemeye başlamanız için size kaynaklar sağlayacaktır.

1- vault ve akıllı sözleşme entegrasyonları, 2- front end ve SDK entegrasyonları, 3- strateji geliştirme, 4- veri analizini ele alacağız ve son olarak size ilham verecek bir dizi örnek sunacağız.

## Yearn Nedir?

Yearn Finance, kullanıcıların borç verme ve ticaret hizmetleri aracılığıyla kripto varlıklarındaki kazançlarını optimize etmelerini sağlayan bir merkezi olmayan finans (DeFi) ürünleri paketidir.

Yearn'in temel ürünü, DeFi'nin Compound, Aave, Curve ve Convex gibi getiri üreten protokollerinin üzerinde çalışan bir kur ve unut getiri toplayıcısı olan **Vault** (yVault olarak da bilinir)'dur.

Vault'lar, özünde, vault'daki varlığın getirilerini en üst düzeye çıkarmak için ilişkili bir getiri stratejisine sahip fon havuzlarıdır. Vault stratejileri, madeni paraları ödünç vermekten daha aktiftir. Çoğu strateji, teminat sağlamak ve sabit madeni paralar gibi diğer varlıkları ödünç almak, likidite sağlamak ve ücret toplamak veya diğer jetonları toplamak ve bunları kâr için satmak dahil olmak üzere getirileri en üst düzeye çıkarmak için birden fazla şey yapabilir.

**Vault'un açık tasarımı nedeniyle, oluşturulan verimi projenizin bir tasarım bileşeni olarak dahil edebilirsiniz.**

## DeFi ve Hackleme

DeFi yavaş yavaş blok zinciri alanının her yönüne giriyor. İster bir P2E oyunu, bir NFT projesi veya DAO araçları inşa ediyor olun, daha iyi bir ürün oluşturmak için dahil edebileceğiniz bir DeFi işlevi olması muhtemeldir.

> Yearn ile sıfırdan bir verim stratejisi oluşturmak zorunda kalmadan verim üretimini ürününüze dahil edebilirsiniz.

Yearn Vault'lar açık standartlarla oluşturulmuştur ve birçok proje, bunların üzerine harika uygulamalar oluşturmak için mevcut vault entegrasyonlarından yararlanmıştır.

**Yaygın kullanım durumları:**

- **Ödünç verme/borç alma için Vault'ları teminat olarak kullanma**
- **Kullanıcı fonlarıyla getiri elde etmek için Vault'ları kullanma**

---

## Yearn Vault'ları ile entegrasyon

### Başlarken

[Makinenizi kurmak](https://docs.yearn.finance/developers/v2/getting-started) için geliştirme belgelerimize göz atın.

### Vault'larla Nasıl Entegrasyon Yapılır?

Yearn ile en basit entegrasyon, kullanıcılarınıza aksi halde getiri sağlamayacak varlıklar üzerinde getiri sağlamak amacıyla fonları bir hizmetten yVault'lara yönlendirmektir. Bu, ürününüz veya uygulamanız içinde heyecan verici yeni işlevler açar.

### *Arka plan*

- *Vyper'da yazılmıştır* 🐍
- *Bunlar bir ERC20'dir, yani — Transfer, Swap, teminat olarak kullanma ve diğer jetonlarla yaptığınız her şeyi yapabilirsiniz.*
- *Hisselerinizi takip edin (tutar, hisse başına fiyat)*
- *Yıllık Yönetişim tarafından yönetilen değişmez kod*
- *Bir vault aynı anda birden fazla strateji çalıştırabilir* 😱
- *Keep3rs entegre edildi* 🤖

**Şekil 1. Para yatırma veya çekme yoluyla yVault'lar ile etkileşim kurabilirsiniz.**

![](image1.jpg?w=900&h=368)

![](image2.jpg?w=900&h=368)

Bu yöntemlerin her ikisinin etkileri hakkında daha fazla bilgiye [buradan](https://docs.yearn.finance/partners/integration_guide) ulaşabilirsiniz.

### Başlangıç kiti

V2 vault'larını ve ERC-4626'yı entegre etmek için ayrıntılı bir örnek. Sahibinin hem VaultAPI hem de 4626 örnekle getirilerini ikinci bir adrese bağışlayabileceği bir SugarVault oluşturduk.

<autoslot link="https://github.com/storming0x/ystarter-foundry-kit"><autoslot>

**Sette bulacaklarınız:**

- Hem V2 hem de ERC4626 arayüzleri için Yearn Vault'lar ile entegrasyon için temel örnek Solidity Akıllı Sözleşmeler.
- Eski vault'ları sarmak için ERC4626 adaptörü.
- Örnek Sözleşmeler
- Örnek test paketi.

### Atölye

Yepyeni EIP-4626'dan yararlanarak v2 vault'larının üzerinde bir para kazanma entegrasyonu oluşturarak Yearn'in gücünden nasıl yararlanacağınızı öğrenin: Tokenize edilmiş Vault Standardı! Bu atölye çalışması, yeni EIP-4626 ile uyumlu, yearn v2 vault'ları için bir B2B/iş yönlendiricisi oluşturma konusunda size rehberlik edecektir. Karınızı en üst düzeye çıkarmak için kullanıcılarınız için birden fazla ücret stratejisi arasından seçim yapabileceksiniz.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/urC35PMbpJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
Yearn'in mevcut vault'larına ve akıllı sözleşmelerine bir göz atmak için, Yearn Vault'ları için kullanılan akıllı sözleşmeler setini görüntülemek için [bu depoyu](https://github.com/yearn/yearn-vaults#readme) inceleyin. Yearn Vault'ları ile etkileşime giren Solidity tabanlı stratejilerle kullanım için kalıtsal bir şablon stratejisi de dahil olmak üzere çekirdek protokol için gerekli gereksinimleri, kodu, dağıtım komut dosyalarını ve testleri içerir. Bu sözleşmeler, sınıfının en iyisi borç verme protokolleri, likidite havuzları ve Ethereum'da topluluk yapımı verim çiftçiliği stratejileri aracılığıyla çeşitli varlıkların mevduat sahipleri için yüksek riske göre ayarlanmış getiriler üretmenin basit bir yolunu oluşturmak için kullanılır.

### Oyun alanı

Vault'larınızı dağıtmanız ve test etmeniz için bir test ortamı oluşturduk. Buradan erişin: [https://hack.yearn.finance/](https://hack.yearn.finance/)

- Vault'unuzu kendi jetonunuzla açın
- Kendi jetonlarınızı bastırın
- Hack'leyin!

### Ek kaynaklar:

- [https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens](https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens)
- [https://github.com/yearn/yearn-integration-hardhat](https://github.com/yearn/yearn-integration-hardhat)

## Web ve SDK Entegrasyonları

Yearn, protokol verilerini biçimlendirmek ve protokol verilerini okumak/yazmak için işlemler oluşturmak için bir JavaScript SDK'sı kullanır. Yearn SDK, hem zincir içi hem de zincir dışı olmak üzere çeşitli bileşenleri entegre eder.

[Buradaki depo](https://github.com/turtlemoji/yearn-sdk-examples), [Yearn SDK](https://github.com/yearn/yearn-sdk)'nın canlı bir önizlemesini ve örnek kullanımını içerir.
*Kendi uygulamanızda Yearn protokolüyle etkileşime nasıl başlayacağınızı öğrenmek için bu kod tabanını keşfedin!*

## Sandbox Canlı Önizleme 

- [Sandbox canlı önizlemes için burayı tıklayın](https://codesandbox.io/s/github/turtlemoji/yearn-sdk-examples/tree/main/)

![](image3.jpg?w=900&h=284)

<autoslot link="https://github.com/turtlemoji/yearn-sdk-examples"><autoslot>

**Ek kaynaklar:**

- [https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack)

## Strateji Oluşturma

Yearn Stratejisi, kullanıcılar için en iyi verimi elde etmek için yatırılan varlıkları kullanan farklı çiftçilik stratejilerini uygulayan bir dizi akıllı sözleşmedir.

Strateji uygulaması, esas olarak varlıkların bir çiftçilik uygulamasından daha yüksek ilgi gören diğerine taşınmasını gerektirir. Bu çoğunlukla otomatik olarak yapılacaktır. Stratejiler tarafından üretilen ödüller/karlar düzenli olarak güncellenir, hasat edilir, orijinal vault varlığıyla değiştirilir ve bileşik çiftçilik için tekrar yatırılır. Her vault'un benzersiz bir stratejisi vardır ve izleme motorlarımızın gözlemlerine dayalı olarak strateji sürekli olarak geliştirilecektir.

Bir stratejiye sahip olarak, kullanıcıların yalnızca tek bir varlık yatırması ve stratejilerin fonlardan kar elde etmesine izin vermesi gerekir.

Yearn, tüm bileşke sürecini otomatikleştirerek mümkün olduğunca optimale yakın hale getirir. Bileşik sıklığı, Sistemdeki Kilitli Toplam Değer (TVL) ve Yıllık Yüzde Oranı (APR) gibi farklı değişkenlere bağlıdır.

![](image4.jpg?w=900&h=819)

## Başlarken:
    
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NVR3teJw0Y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Ek kaynaklar:**

- [https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md](https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md)
- [https://github.com/yearn/brownie-strategy-mix](https://github.com/yearn/brownie-strategy-mix)

## Veri analizi

Yearn, zincir içi ve zincir dışı verileri analiz ederek müşterilerimize ve ortaklarımıza ürünlerimiz hakkında daha fazla bilgi sağlamayı amaçlamaktadır. Tüm Yearn protokol verilerinin zincir üzerinde halka açık bir şekilde depolandığı göz önüne alındığında, bu işlemlerin analizinden elde edilecek çok sayıda içgörü vardır.

Zincir içi veri analizi için iki yaygın araç şunlardır:

1. **Dune Analytics- SQL ile sözleşme verilerini sorgulayın ve gösterge tabloları oluşturun**

- [Mevcut Gösterge Tabloları](https://dune.com/projects/yearn)

Sorgulayabileceğiniz tüm yeni şeylerin listesi:

- hasat
- dağıtımlar
- işlemler
- Kontrat_token'ler
- Kontrat_strateji
- v2_dağıtımlar

Hepsini kurcalayın: [https://dune.com/queries/625814](https://dune.com/queries/625814)

2. **Yearn alt grafiklerini kullanarak GQL ile Grafik Sorgu sözleşme verileri**

Grafik, Ethereum ile başlayarak blok zincirlerinden veri indekslemek ve sorgulamak için merkezi olmayan bir protokoldür. Merkeziyetsizlik ve güvenilirlik avantajlarıyla, web3'ün değerleri dahilinde blok zincirinden belirli verileri almanın daha kolay bir yoludur.

GraphQL, The Graph'te kullanılan temel sorgu dilidir.

Standart RESTFUL API çağrıları ile GraphQL çağrıları arasındaki fark nedir? Aradaki fark, geleneksel API'lerin, geliştiricilerin belirli verileri döndüren kullanıcılar için belirli uç noktalar oluşturmasını gerektirmesidir. Kullanıcı daha fazla bilgiye ihtiyaç duyarsa, ihtiyaç duyduğu bilgileri almak için birden fazla API çağrısı, bazen yüzlerce API çağrısı yapması gerekebilir. The Graph (GraphQL kullanan) ile, geliştirici esnek bir şema oluşturduğu sürece, bir alt grafiğe yalnızca bir çağrı gerekir.

- [https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet](https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet)
- [https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql](https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql)

## İlgilendiğimiz araştırma sorularından bazıları:

- Stratejilerimiz için karlı likidite havuzlarını taramak
- TVL'nin kalıcı kayıp üzerindeki etkisinin değerlendirilmesi
- Çeşitli havuzların hacminin taranması
- Vault'larımıza risk ölçümleri sağlamak
- Temel tokenin fiyat oynaklığı
- Protokol risklerinin ele alınması
- Gaz ücretlerindeki değişime göre stratejilerimizi optimize etmek
- Yönetim belirteçlerini ne zaman kaldıracağınıza ve takas edeceğinize karar verme
- Ne zaman hasat yapacağınıza karar verme
- Uniswap V3 havuzları için kalıcı kaybı tahmin etme
- Özlem ürünlerinde portföy oluşturma
    Bu konularla ilgili daha fazla ayrıntı, sorunlar sekmemizde görülebilir.
    
**Veri kaynakları**

**Yearn SDK** [Dokümanlar]  
    
[https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack) 
    
İlk önce hangi hizmeti incelemeniz gerektiğinden emin değilseniz, Yearn SDK size sözleşmelerin adreslerini ve yearn's hizmetlerinin bitiş noktalarını sağlayabilir.

**Yearn API** [Dokümanlar]
    
Yearn API, web3 çağrıları yapmaya gerek kalmadan REST API aracılığıyla vault'lar, apy'lar, ücretler ve strateji meta verilerinin tvl'si dahil olmak üzere kullanıcıya özel olmayan meta verileri sağlayabilir.

**Yearn Vision**
    
Yearn Vision, Yearn Exporter'ın barındırılan sürümünün Grafana panosudur. Vault'larımız ve stratejilerimizle ilgili geçmiş metrikleri pano üzerinden json veya csv dosyaları olarak indirebilirsiniz. İndirmeyle ilgili talimatlar için lütfen Sorgu sonuçlarını csv olarak indirme konusuna bakın.

## İlham

Vault'lar için yaygın kullanım durumları şunları içerir:

- Vault'ları ödünç verme/borç alma için teminat olarak kullanma
- Kullanıcı fonlarıyla getiri elde etmek için Vault'ları kullanma

*Her iki durumda da, yearn ile entegre olan protokol vault'un toplam karından alınan performans ücretleri ile ödüllendirilir, bir ortak vault'a ne kadar fazla toplam hacim katkıda bulunursa, elde ettikleri kârın payı o kadar büyük olur.*

Yüzlerce protokol, Yearn'in entegrasyon yöntemlerini kullanarak heyecan verici işlevler oluşturdu. Bunlar şunları içerir:

- Alchemix, vault getirilerini kullanarak kendi kendini geri ödeyen krediler sağlar
- Abracadabra, kullanıcıların kredi almasına ve getiriyi devam ettirmesine olanak tanıyan ilk yVault kaldıraç sistemini sağladı
- Teminat olarak yVault'ları kullanırsanız QiDao %0 faizli kredi sağlar

İşte neler inşa edebileceğinize dair bazı fikirler:

1. Vault'ları borç para almak ve muhtemelen bir miktar kaldıraç elde etmek için teminat olarak kullanın. (örn. Abracadabra)
2. Verimi harika şeyler yapmak için kullanmanıza izin veren bir ürün oluşturun:
    verimi bir NGO'ya bağışlayın
    getiriyi daha riskli şeylere veya yönlü bahislere yatırın
    faturaları ve abonelikleri ödeyin
3. Birden çok vault'un üzerinde bir üst seviye oluşturun. Aklıma gelen bir fikir, bazı stratejilere dayalı olarak birden fazla dolar sabit vault'una biriken ve karmaşıklığı kullanıcıdan soyutlayan bir USD meta verisine sahip olmak.
4. Depozitoları kabul eden ve varlıkları zincirler arasında taşımanıza izin veren bir kullanıcı arayüzü oluşturun.
5. Vault'ları, şu anda kullanıcı tarafından aktif olarak kullanılmayan fonlara faiz kazanmak için bir yer olarak kullanın.

## Örnekler

- **[Bunker Finance] (https://bunker.finance/):** Bunker.finance, NFT destekli krediler için merkezi olmayan bir protokoldür. Yearn v3'ün USDC ve WETH vault'larıyla entegre oldular ve bunları şu anda borçlulara sağlanmayan fonlardan faiz kazanmak için bir yer olarak kullanıyorlar.
- **[Skew You](https://github.com/Tburm/tracer-vault):** Kullanıcılar, opsiyon teminatlarına karşı borç alabilir ve yepyeni bir sermaye verimliliği dünyasının kilidini açabilir.
- **[Possum](https://github.com/Possum-ONE):** Her çiftliği iki sabit/değişken havuza dönüştürebilen sabit gelirli ürün. Oyun modeline bağlı olarak, sabit havuz kullanıcıları garantili APY'ye sahip olurken, değişken kullanıcı daha yüksek riskle daha yüksek APY alır.
- **[Demon](https://demon-finance.netlify.app/):** Belirsiz APY numaralarının gizemini çözme
- **[Bowtie](https://github.com/ShayanJa/bowtie_finance):** Kullanıcıların opsiyon teminatlarına karşı borç almalarına olanak tanır.

Ek olarak, uygulamakla ilgilendiğiniz Yearn işlevselliği için GitHub araması yapmak, çalışan kod örneklerini bulmanın iyi bir yoludur.

## Ek kaynaklar

- DevDocs: [https://yearn.github.io/yearn-devdocs](https://yearn.github.io/yearn-devdocs)
- yearn-vaults: [https://github.com/yearn/yearn-vaults](https://github.com/yearn/yearn-vaults)
- BaseRouter: [https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol)
- BaseWrapper: [https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol)
- Wrapper-mix: [https://github.com/yearn/brownie-wrapper-mix](https://github.com/yearn/brownie-wrapper-mix)
- [Article](https://medium.com/iearn/yearn-partners-building-with-yvaults-4cd042ea092): Yearn Partners– Building with yVaults
- [Video: Intro to Yearn Vaults](https://www.youtube.com/watch?v=a1TsO62402c)
- Article: [Strategy Vetting and Endorsement](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d)
- [Video](https://www.youtube.com/watch?v=NVR3teJw0Y0): Become a mighty strategist!
- [Tweet: Getting a Strategy to Prod](https://twitter.com/flashfish0x/status/1460246273488044036?s=20&t=kxak7a6qtrmDCfcn6UrGYA)
