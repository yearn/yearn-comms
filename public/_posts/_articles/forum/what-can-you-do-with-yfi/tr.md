---
title:  "YFI ile neler yapabilirsiniz?"
image:
  src: ./cover.png
  width: 768
  height: 429
date: '2021-05-05'
author: Dark Ghosty
translator: Dastronom
---
# YFI ile neler yapabilirsiniz?
Bu makalede, [DeFi](https://www.coindesk.com/what-is-defi)'de getiri elde etmek için YFI'ları ile neler yapılabileceğini, her bir seçenekle ilişkili risklerin neler olduğunu ve yaklaşık alabileceğiniz verim değerlerini inceleyeceğiz.

- Tüm APY verileri 27 Nisan'a aittir.
- Borç alan tüm pozisyonlar, YFI fiyatında %30'luk bir düşüşe dayanabilmek için maksimum oranın %70'inde borçlanmayı varsayar.
- Bu finansal tavsiye değildir. DeFi protokolleriyle etkileşim kurmak **risklidir**, lütfen kendi araştırmanızı yapın.

___

## **Başlamadan önce YFI'nizi DeFi Sigorta ile sigortalamayı düşünün**
DeFi sigortası ve nasıl çalıştığı hakkında bir not. DeFi sigortası *çoğunlukla*, söz konusu protokol için maddi bir fon kaybına yol açan sağlamlık kodundaki hataları kapsar. Ancak, ne yaptıklarını ve kapsamadıklarını bilmek için her Defi sigorta belgesini dikkatlice okuduğunuzdan emin olun.

Örnek olarak, birinin yearn vault'u için sigortası olduğunu, ancak MakerDAO'nun kodunda bir hata olduğunu ve vault'un CDP'sinin bu nedenle bir miktar para kaybettiğini varsayalım. Sadece Yearn'de sigortası olan bu kişi herhangi bir zarar talep edemeyecek ve bu durumda sigortası ödeme yapmayacaktır. Bunun sebebi, kaybetmeye neden olan yearn'ın akıllı sözleşmelerinde bir hata olması değildir. Sigorta hakkında daha fazla bilgi için [discord](discord.yearn.finance) 'umuzun #support bölümünde soru sormaktan çekinmeyin.

## **DeFi kapsamlı sigorta sağlayıcıları**
- [Nexus Mutual](https://app.nexusmutual.io/#/SmartContractCover)
    - [Dokümantasyon](https://nexusmutual.gitbook.io/docs/)
- [Teminat Tutanağı](https://app.coverprotocol.com/)
    - [Dokümantasyon](https://docs.coverprotocol.com/)

___

## ***Direct Deposit***
Bu bölüm, YFI'nizi tek başına kullanabileceğiniz yolları ele almaktadır. Merkezi olmayan bir borsanın otomatik piyasa yapıcısına [automated market maker (AMM)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers) likidite sağlamak gibi alternatif getiri elde etme yöntemleri, YFI'nizi,başka bir token'le eşleştirmenizi gerektirebilir ve YFI'ye tam olarak maruz kalmanızı tehlikeye atabilecek. Bu, risksiz olduğu anlamına gelmez, ancak [kalıcı kayıp (IL)](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi) olarak adlandırılan şeyle uğraşmak zorunda kalmayacağınız anlamına gelir. *Akıllı sözleşmelerde para bulundurmak her zaman biraz risk taşır.*

### Yearn: v2 YFI yVault
Yearn Finance YFI v2 yVault, YFI yatırmanıza ve bunu yapmak için en uygun yerlerde sizin için getiri elde ederken arkanıza yaslanıp rahatlamanıza olanak tanır. Yazma sırasında vault o anda bir CDP açar ve farm yapmak için basılan DAI'yi kullanır.

#### Site
- [Yearn.Finance](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)

#### Araçlar
- [Yearn Hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): This link will show how much of the funds in the vault are allocated to which strategies.
- [Vaults at Yearn](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3): Here you can see what each strategy in the yvYFI v2 vault does.
- [Yearn Vision](yearn.vision): Dashboards for vault statistics.
- [Zap into v2 YFI yVault](https://zapper.fi/invest?protocol=yearn&contractAddress=0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1&modal=invest)

#### Riskler
Şu anda, bu vault'la ilişkili riskler, yearn vault sözleşmeleri ([denetlenen](https://github.com/yearn/yearn-security/tree/master/audits)) için akıllı sözleşme riski, MakerDAO CDP riskleri ve bir strateji ekstra getiri için YFI'yi CREAM ve AAVE'ye ödünç verdiğinden ve her iki platform için de akıllı sözleşme riskidir. Vault, CDP'sini izler ve [sağlık oranını](https://medium.com/iearn/delegated-vaults-explained-fa81f1c3fce2) 3 olarak tutar; bu, DAI'de para basmak için mevcut olan maksimum değerin yalnızca 1/3'ünü basacağı ve ardından bu DAI ile farm yapmak için kullanacağı anlamına gelir.

#### Sigorta
YFI v2 kasasında tamamen sigortalı olmak için bu yazıyı yazarken, Yearn, MakerDAO, AAVE ve CREAM kapsamına ihtiyacınız olacaktır. Hangi sigortayı satın alacağınız konusunda seçici olabilir ve yalnızca riskli olduğuna inandığınız protokollerin sigortası için ödeme yapabilirsiniz. Bu yVault'un sigorta için hangi protokollerle etkileşime girdiğini [yearn hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)'da görebilirsiniz.

#### APY
APY: 2.866%
Hesaplama: Last month net, annualized.
Kaynak: [vaults.finance: yearn v2 API](https://vaults.finance/all)
bu arada: APY bir süreliğine %24'e ulaştı

Bu vault, yearn ekibinin en güncel YFI vault'udur ve yakın zamanda BDP:Big Data Protocol çiftçiliğinde olduğu gibi, ekilmeleri güvenliyse daha iyi verim için yakında gelecek YFI çiftliklerine atlamak için hızla hareket edebileceğini kanıtlamıştır.

- [Yearn.Finance: YFI Vault](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Yearn's vault page shows Weekly or Monthly APY based on a formula.  

___

## ***Doğrudan Depozit, muhtemel kalıcı olmayan kayıp IL***
Bazı verim yaratan teknikler, IL riskini azaltmak için tasarlanmıştır, ancak onu tamamen ortadan kaldırmaz. Buna bir örnek, Bancor protokolüne likidite sağlamaktır. Fonlar 100 günden fazla Bancor'da tutulursa ve IL'ye maruz kalırlarsa, para çekme sırasında kaybedilen değerin eşdeğeri (kullanıcının YFI'ye geri dönüştürmekte özgür olduğu) için BNT ile sübvanse edilecektir. Pratikte bu, Bancor'da 100 günden fazla stake yaparsanız IL hakkında endişelenmenize gerek olmadığı anlamına gelir.

### Bancor: YFI/BNT Tek Yönlü Korumalı Havuz

Bancor, Sushiswap ve Uniswap gibi bir AMM'dir, ancak Bancor v2.1'de sunulan önemli bir fark vardır. *Eğer* Bancor havuzda 100 günden fazla kalırsanız IL korumasına sahiptir. Bu koruma 30 gün içinde başlar ve 100 gün boyunca tam korumaya ölçeklenir. Şu anda, YFI havuzu için teşvik edilen ödüller durdu, ancak onları getirecek bir [teklif](https://gov.bancor.network/t/proposal-re-enable-lm-rewards-on-yfi/1838) var ve onaylanırsa geri dönecek, bu YFI havuzunda daha yüksek getiri anlamına gelecektir.


#### Site

[Bancor YFI Havuzu](https://app.bancor.network/eth/portfolio/stake/add/single/0xAeB3a1AeD77b5D6e3feBA0055d79176532e5cEb8)

#### Tools

- [Ceazor'un Bancor Rehberi v2.1: Bancor: YFI/BNT Tek Yönlü Korumalı Havuz](https://youtu.be/LhLMhizDNwE?t=23)
- [Bancor Dokümanları](https://docs.bancor.network/)
- [Bancor Dune Gösterge Paneli](https://duneanalytics.com/Bancor/bancor_1)
- [Bancor v2.1 (DeFi) Yeni Başlayanlar için Stake Etme](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e)
- [YFI/BNT Tek Yönlü Korumalı Havuzuna Gir](https://zapper.fi/invest?protocol=bancor&contractAddress=0x555981b82743aa443cb1c3002c85ba9d795d4596&modal=legacy-invest)

#### Riskler

Bancor akıllı sözleşme riski ve [bancor v2.1 modeline](https://blog.bancor.network/proposing-bancor-v2-1-single-sided-amm-with-elastic-bnt-supply-bcac9fe655b) güvenme. Bancor [denetleniyor](https://docs.bancor.network/ethereum-contracts/security).

##### Sigorta

DeFi sigortası için, yalnızca fon kaybına yol açan bir akıllı sözleşme hatası durumunda Bancor'un tam kapsama sahip olmasını sağlamanız gerekir.  

#### APY

APY: 3.7%
Hesaplamalar: Geçen ay, yıllık olarak.
Kaynak: Bancor Ekibi

- [YFI Havuzu APY](https://duneanalytics.com/queries/30793/62118): Single click on each pool until only YFI is left. This will show APY stats for the pool.

___

## ***[Teminatlı Borç Pozisyonu](https://defipulse.com/blog/what-is-a-cdp)***

CDP tabanlı protokoller, YFI'nizi, genellikle bir sabit para olan protokol tarafından verilen daha az miktarda token karşılığında yatırmanıza olanak tanır. Daha sonra verilen token'i farm etmek ve verim elde etmek için kullanabilirsiniz. Bu yöntemi kullanmak diğerlerinden daha fazla zaman gerektirir ve tasfiye oranının üzerinde olduğunuzdan emin olmak için CDP'nin sürekli izlenmesini gerektirir. Ayrıca, başka yerlerde verim bulmak için basılan sabit paraları kullanmanız ve bunu da yönetmeniz gerekir.

Bu bölümde yüzdelik olan teminat oranını kullanıyoruz. Bunun anlamı, Birim Protokolü örneğinde olduğu gibi teminat oranı %69 ise, o zaman sabit para basımı için yatırılan YFI'nizin fiyatı 1000$ değerindeyse, sabit para basabileceğiniz maksimum değer 690$'dır. Bunun ödünç alabileceğiniz *MAKS* olduğunu ve bu oranın üzerine çıkarsa tasfiye edileceğinizi unutmayın -- bunun çok altında borç almanızı öneririz, böylece buna mağruz kalmazsınız.


### MakerDAO
MakerDAO, kripto para biriminizle borç almak için en eski ve en uzun süredir devam eden Dapp'tir. MakerDAO'daki YFI'nizi, DAI stabil coin'i basmak için kullanabilir ve ardından bu DAI'yi kullanarak farm'dan kar elde edebilirsiniz.

#### Site
- [Oasis.app](https://oasis.app/borrow)

#### Araçlar
- [DeFiSaver](https://app.defisaver.com/): CDP sağlık oranınızı yönetmenize yardımcı olur

#### Risks
CDP'niz %57'lik bir teminat oranının üzerine çıkarsa, Makerdao için akıllı sözleşme başarısızlığı, Oracle başarısızlığı ve DAI'nizi yatırdığınız veya ödünç verdiğiniz protokolün akıllı sözleşme başarısızlığı riski.

#### Sigorta
DeFi sigortası için, fon kaybına yol açan bir akıllı sözleşme hatası durumunda tam kapsama sahip olmak için MakerDAO'yu ve ayrıca DAI sabit paralarınızı ödünç verdiğiniz veya yatırdığınız protokolü sigortalamanız gerekir.

#### APY
APY: -%5.5 + (%21.07 * %0.44) = %3.7708
Hesaplama: Dai Ücreti - (Stablecoin Verim Çiftliği APY (Zap'tan v2 crvIB yVault'a) * basıp güvende olabileceğiniz DAI'nin %'si).
Bu arada: DAI ödünç almak için MakerDAO'ya yıllık %5,5 ücret ödemeniz gerekir. Bu bir örnek, ancak herhangi bir yerde farm edebilirsiniz.
Kaynak: [Oasis App Borrow - Select collateral type YFI-A](https://oasis.app/borrow)

### Unit Protocol
Unit Protocol, MakerDAO'ya benzer bir CDP platformudur, bunun dışında DAI yerine USDP stablecoin basmanıza izin verir. Unit ile MakerDAO'dan daha yüksek %69 teminat oranına sahipler ve denetlendiler, ancak daha yeni bir platform.

#### Site
- [Unit Protocol](https://unit.xyz/)

#### Tools
- [Dokümantasyon](https://docs.unit.xyz/)
- [Ceazor Eğitim Videosu](https://youtu.be/zlFBeoTHJUs?t=33)

#### Risks
Teminat oranı %69'u aşarsa tasfiye riski, Unit Protocol için akıllı sözleşme başarısızlığı, oracle başarısızlığı ve USDP'nizi ödünç verdiğiniz veya yatırdığınız yer için akıllı sözleşme başarısızlığı. Denetimlerini [burada](https://github.com/unitprotocol/protocol_docs) bulabilirsiniz.

#### Sigorta
DeFi sigortası için, fon kaybına yol açan bir akıllı sözleşme hatası durumunda tam kapsama sahip olmak için Unit Protocol'ünü ve USDP sabit paralarınızı ödünç verdiğiniz her yerde sigortalamanız gerekir.

#### APY
APY: -%5.5 + (%21.07 * 0.53) = %5.67
Hesaplama: Unit'ten 5,5 yıllık ücret + (v2 crvIB yVault kullanımından elde edilen verim * USDP'nin basıp ve güvende olacağınız %'si).
Bu arada: Daha yüksek bir getiri bulursanız USDP'nizi her yerde kullanabilirsiniz, örnek olarak Yearn'deki USDP vault'unu kullanıyoruz.
Kaynak: [Unit Protocol](https://unit.xyz/asset/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)

___

## ***Borçlanma ve Borç Verme***


Bu bölümde, YFI'nizi ödünç vermenize veya YFI'nizi teminat olarak kullanarak stabil coinler veya daha sonra farm yapmak için kullanabileceğiniz diğer token'leri ödünç almanıza izin veren platformları ele alıyoruz. Bu, sabit bir yıllık oranda sabit para basmanıza izin veren bir CDP açmaktan farklıdır, oysa borç verme ve ödünç alma genellikle değişken oranlıdır. Bu kategoride, sadece ödünç aldığınız stabilcoinleri nereye ödünç vereceğiniz konusunda değil, aynı zamanda hem ödünç alma hem de ödünç verme oranları ve havuzun kullanım oranı hakkında endişelenmeniz gerekiyor. YFI'nizi ödünç verdiğiniz YFI havuzu tamamen kullanılıyorsa, yani insanlar ödünç verilen her YFI'yi ödünç alıyorsa, bunu yapmak için havuzda serbest likidite olana kadar çekmeyi beklemeniz gerekecektir.

### Cream Finance
Cream.Finance, merkezi olmayan bir borç verme protokolüdür. YFI'nize karşı toplam teminatınızın %50'sine kadar sabit para ödünç alabilirsiniz.

#### Site
- [Cream.Finance](https://app.cream.finance)

#### Araçlar
- [Cream Documentation](https://docs.cream.finance/)
- [Ceazor Eğitim Videosu: Borç Alırken Ödünç Almak](https://youtu.be/AJx_TH3CMZc?t=598)

#### Riskler
%50 teminat oranını aşarsanız tasfiye riski, Cream Finance için akıllı sözleşme başarısızlığı, oracle başarısızlığı ve istikrarlı paralarınızı ödünç verdiğiniz veya yatırdığınız yer için akıllı sözleşme başarısızlığı. Ayrıca, verim çiftliğinizdeki APY'nin ödünç aldığınız APY'yi aştığını manuel olarak kontrol etmeniz gerekir, aksi takdirde para kaybedersiniz. Denetimlerini [burada](https://docs.cream.finance/audit-report) bulabilirsiniz.

#### Sigorta
DeFi sigortası için, fon kaybına yol açan bir akıllı sözleşme hatası durumunda tam kapsama sahip olmak için Cream Finance'i ve stabilcoin'lerinizi ödünç verdiğiniz her yeri sigortalamanız gerekir.

#### APY
APY: 0.27% - 18.81% + (60.30% * .39) = 4.977%
hesaplamalar: Yatırma APY (YFI) - Borçlanma APY (USDC) + (Stablecoin Getiri Çiftliği APY (v1 servEURS Vault'a zap edin) * Ödünç alabileceğiniz ve güvende olabileceğiniz stabilcoin yüzdesi.
Bu arada: Bu bir örnek, ancak herhangi bir yerde farm yapabilirsiniz.
Kaynak: [Cream](https://app.cream.finance) ve [Yearn](https://yearn.finance/vaults/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC) Verimleri.

### Iron Bank
Iron Bank, Cream v1'e benzer, ancak listeledikleri varlıklar konusunda daha seçicidirler ve beyaz listedeki protokollerin Alpha Homora v2 ve Yearn Finance gibi çok az teminatla veya hiç teminat olmadan borç almasına izin verirler. Protokoller çok az teminatla borçlanabildiğinden, Iron Bank kullanım oranları CREAM veya AAVE'den daha yüksek olma eğilimindedir.

#### Site
- [Iron Bank](https://v1.yearn.finance/lending)

#### Tools
- [Iron Bank Dokümantasyonu](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

#### Risks
Yayınlanan teminat oranını, Iron Bank için akıllı sözleşme başarısızlığını, oracle başarısızlığını ve ödünç aldığınız sabit paraları ödünç verdiğiniz akıllı sözleşme başarısızlığını aşarsanız tasfiye riski. Denetimlerini [burada](https://github.com/trailofbits/publications/blob/master/reviews/CREAMSummary.pdf) bulabilirsiniz.

#### Sigorta
DeFi sigortası için, para kaybına neden olan bir akıllı sözleşme hatası durumunda tam kapsama sahip olmak için Ironbank'ı ve stablecoin'lerinizi ödünç verdiğiniz her yerde sigorta yaptırmanız gerekir.

#### APY
APY:
Hesaplamalar:
Kaynak:
Not: Şu anda Ironbank'ta YFI'nıza karşı borç alamazsınız, ancak bu gelecekte değişebilir.

### AAVE
AAVE, YFI'nizden borç alabileceğiniz başka bir yerdir. AAVE'de diğer madeni paralarda %40'a kadar ödünç alabilirsiniz. AAVE, stabilcoin ödünç almak için hem sabit hem de değişken oranlara sahipken MakerDAO ve Unit'te her zaman %5,5'tir. Stable ödünç almak için AAVE'de daha ucuz bir oran almak mümkün ama buradan kredi çekerken hem teminat seviyenizi hem de borçlanma oranı değişken değilse de gözlemeniz gerekiyor.

#### Site
- [AAVE](https://app.aave.com/)

#### Araçlar
- [Ceazor Eğitim Videoları: AAVE v2](https://youtu.be/eMP_uIwniHc?t=46)
- [Ceazor Eğitim Videoları: Borç Alırken Ödünç Almak](https://youtu.be/AJx_TH3CMZc?t=407)

#### Riskler
%40 teminat oranını aşarsanız tasfiye riski, AAVE için akıllı sözleşme başarısızlığı, oracle başarısızlığı (Chainlink kullanır) ve istikrarlı paralarınızı ödünç verdiğiniz yer için akıllı sözleşme başarısızlığı. Denetimlerini [burada](https://docs.aave.com/developers/security-and-audits) bulabilirsiniz.

#### Sigorta
DeFi sigortası için, fon kaybına yol açan bir akıllı sözleşme hatası durumunda tam kapsama sahip olmak için AAVE'yi ve stablecoin'lerinizi ödünç verdiğiniz her yerde sigorta yaptırmanız gerekir.

#### 
APY: %0,11 - %3,98 + (%60,30 * %0,31) = %14,83
Hesaplama: Yatırma APY (YFI) - Ödünç APY (TUSD) + (Stablecoin Farm Getiri APY (v1 crvEURS yVault'a zapla) * Ödünç alabileceğiniz ve güvende olabileceğiniz stablecoin yüzdesi)
Buarada: Bu sadece bir örnektir. Herhangi bir stablecoin ödünç alabilir ve seçtiğiniz getiri çiftliğinde kullanabilirsiniz.
Kaynak: [AAVE - YFI](https://app.aave.com/deposit/YFI-0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5)

___

## ***Likidite Sağlama***

Bu bölüm, sizi kalıcı kayıplara maruz bırakan stratejileri tartışıyor ve ayrıca AMM havuzunun her iki tarafına da likidite sağlamanız gerekiyor. **YFI stake etmek istiyorsanız, aynı zamanda eşit miktarda ETH de eklemeniz gerekecektir.**

### Sushiswap YFI/WETH Havuzu
Sushiswap, havuzları SUSHI ödülleriyle sübvanse edildiğinden genellikle Uniswap'tan daha yüksek getirisi olan bir AMM'dir.

#### Site
- [Sushiswap](https://app.sushi.com/yield)
#### Araçlar
- [YFI Sushi Havuzları](https://analytics.sushi.com/tokens/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)
- [apy.vision YFI/ETH Sushi Havuzu](https://app.apy.vision/pools/sushiswap_eth-YFI-WETH-pool-0x088ee5007c98a9677165d78dd2109ae4a3d04d0c)
- [Sushiswap YFI/WETH havuzuna zapla](https://zapper.fi/invest?protocol=sushiswap&contractAddress=0x088ee5007c98a9677165d78dd2109ae4a3d04d0c&modal=invest)

#### Riskler
Geçici Kayıp, Sushiswap için akıllı sözleşme riski.

#### Sigorta
DeFi sigortası için, fon kaybına neden olan bir akıllı sözleşme hatası durumunda Sushiswap'ın tam kapsama sahip olmasını sağlamanız gerekir.

#### APY
APY: 39.08%
Hesaplama: YFI/WETH sushi SLP token'inizi sushi'de stake etmek için yıllık APY.
Kaynak: [Sushiswap Yield](https://app.sushi.com/yield)

### Uniswap v2 YFI/WETH Havuzu
Genel olarak Uniswap, Bancor ve Sushiswap gibi AMM'lerde en fazla hacme sahip havuzda olmak istersiniz çünkü bu, likidite sağlayıcıları için daha fazla ücret anlamına gelir. Ortalama olarak Sushiswap, Uniswap'tan daha fazla likiditeye sahiptir, bu nedenle genel olarak, orada LP yapmak daha iyidir, ancak Uniswap, Sushiswap'tan daha iyi getiriye sahip olabilir.

#### Site
- [Uniswap YFI/WETH Havuzu](https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e)

#### Tools
- [Zapper Uni YFI/WETH](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)
- [YFI/WETH İkilisi için IL Hesaplayıcı](https://app.sommelier.finance/pair?id=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&timeWindow=total): This can help show how much you will gain or lose if you started to LP in this pool at a certain date.
- [Uniswap YFI/WETH Analitiği](https://info.uniswap.org/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Apy.vision YFI/WETH](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Uniswap v2 YFI/WETH Havuzuna zapla](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)

#### Risks
Kalıcı kayıp ve akıllı sözleşme riski, Uniswap'ta likidite sağlarken dikkat edilmesi gereken konulardır.

#### Sigorta
DeFi sigortası için, fon kaybına yol açan bir akıllı sözleşme hatası durumunda Uniswap'ın tam kapsama sahip olmasını sağlamanız gerekir.

#### APY
APY: 20.79%
Hesaplama: Kalıcı kayıbı çıkarıldıktan sonra yıllığa vurulmuş son 30 gün.
Kaynak: [apy.vision](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)

### Pickle.Finance pSUSHI YFI/WETH Kavanozu
Pickle, SUSHI YFI/WETH havuzundan SUSHI ödüllerinizi otomatik olarak birleştirmenize izin veren vault'a benzer bir Yearn türüdür(kavanoz olarak adlandırılır) ve ayrıca onlarla stake ettiğiniz için size ekstra ödül olarak PICKLE verir.

Pickle.Finance ile para yatırmak için SLP'nizi (Sushiswap LP token'ine) [buradaki](https://app.pickle.finance/jars) pickle kavanozuna yatırmanız ve ardından [buradaki](https://app.pickle.finance/farms) çiftliğine yatırmanız gerekir. Artık DILL için PICKLE'ı kilitleyebilir ve çiftlikte kazandığınız PICKLE ödüllerini 2,5 katına kadar artırabilirsiniz.

#### Site
- [Pickle.Finance Farm](https://app.pickle.finance/farms)
- [Pickle.Finance Jar](https://app.pickle.finance/jars)

#### Araçlar
- [Dill artırma hesabı](https://app.pickle.finance/dill)
- [Ceazor'un İpuçları: yveCRV-ETH Pickle Çiftliğine zapla](https://youtu.be/Q3HELI9TfjQ?t=25)

#### Riskler
Sushiswap LP pozisyonunda Kalıcı Kayıp, Pickle.Finance ve Sushiswap için akıllı sözleşme riski.

#### Sigorta
DeFi sigortası için, fon kaybına yol açan bir akıllı sözleşme hatası durumunda hem Sushiswap hem de Pickle.Finance'ın tam kapsama sahip olmasını sağlamanız gerekir.

#### APY
APY: %43 artırılmadı, %58 tamamen artırıldı.
Hesaplama: APY, DILL için PICKLE'ı kilitleyerek tamamen artırılır
Kaynak: [Pickle.Finance Çiftlikleri](https://app.pickle.finance/farms)

___

## ***Kaldıraçlı Likidite Sağlama***
Bu bölümde kalıcı kayıplara maruz kalabilirsiniz ve tasfiye olmadığınızdan emin olmak için borç oranlarınızı gözlemlemeniz gerekecektir.

### Alpha Homora v2
Alpha Homora v2, Uniswap veya Sushiswap LP token'inizi almanızı ve 1,75x'e kadar kaldıraçla farm yapmak için onlarla birlikte yatırmanızı sağlar. Alpha Homora ile bu havuzları 1 varlıkla gruplandırabilirsiniz (temelde havuzdaki diğer varlığa otomatik olarak geçiş yapar), tüm adımları 3 işlemle otomatikleştirilir ve havuzdaki çiftlik token'leri pickle.finance'daki gibi otomatik olarak birleştirilir. Aynı şekilde, Pickle.finance, Farm ürününü kullanırsanız size PICKLE verir, AMM havuzlarını (Uniswap veya Sushiswap) toplamak için kaldıraç kullanırsanız, Alpha Homora, [burada](https://alphafinancelab.gitbook.io/alpha-homora/where-does-apy-come-from-for-each-pool) gösterildiği gibi normalde alacağınız verimin üzerine bir de ALPHA verecektir.

#### Site
- [Alpha Finance](https://homora.alphafinance.io/farm)

#### Araçlar
- [Dokümantasyon](https://alphafinancelab.gitbook.io/alpha-homora/)
- [Ceazor eğitim videoları](https://youtu.be/WKW8TsTyGOg?t=41)

#### Riskler
Borç oranınız %60 LTV'yi (Krediden Değere) aşarsa tasfiye riski, Alpha Homora v2 için akıllı sözleşme başarısızlığı, hangi havuz için kullandığınız akıllı sözleşme başarısızlığı (Uniswap veya Sushiswap). Denetimlerini [burada](https://github.com/peckshield/publications/blob/master/reviews/PeckShield-Security-Review-Alpha-Homora-v1.0.pdf) bulabilirsiniz. .

#### Insurance
Defi sigortası için, fon kaybına yol açan bir akıllı sözleşme hatası durumunda tam kapsama sahip olmak için Alpha Finance'i ve kullandığınız AMM'yi sigortalamanız gerekir.

#### APY
APY: 75.38%
Hesaplama: Bu, Sushi ETH/YFI Havuzunda 1,5 kat kaldıraçta.
Kaynak: [Alpha Homora - Farm](https://homora.alphafinance.io/farm)
