---
layout: post
title:  "Yearn'deki Vault'lar"
categories: [ Articles ]
image: ./The-Vaults-at-Yearn/header.gif
author: Yearn
translator: Dastronom
publish: true
---

# Yearn'deki Vault'lar

9 Ağustos 2021'de güncellendi

![](header.gif)

## Genel Bakış

Yearn yVault'larının nasıl çalıştığı ve bu vault'ların gerçekleştirdiği eylemler (stratejiler) hakkında derinlemesine bilgi bulabileceğiniz The Vaults at Yearn'e hoş geldiniz. Bu makale, tüm yVault açıklamalarını bir arada toplamayı sağlayacaktır. En yeni yVault'lar ve stratejiler ✨ ile gösterilir.

Aşağıda 6 bölüm bulacaksınız:

- Yearn ve Curve 🔵🤝🌈
- v2 Vault'ları 🏛️
- v2 Curve Finance Tabanlı Vault'lar 🌈
- v1 Curve Finance Tabanlı Vault'lar 🌈
- v1 Vault'ları 🏦
- Emekli Vault'lar 💤

## Yearn ve Curve Sinerjisi🔵🤝🌈

Yearn altyapısının kritik bileşenlerinden birİ [Curve.fi](http://curve.fi/) ile işbirliğine dayalı bir ilişk içerir. Birkaç Yearn vault'u, Curve havuzlarına likidite sağlar ve likidite sağlayıcı (LP) token'lerini ilgili göstergelere yatırarak CRV ödülleri kazanır. Yearn, ek miktarda CRV elde etmek için kazanılan tüm CRV ödüllerinin %10'unu yveCRV-DAO'ya ("Backscratcher") kilitler. Aşağıdaki strateji açıklamalarında yükseltilen kasalar 🚀 ile gösterilir.

Daha detaylı bilgi için, bu belgenin sonundaki _Curve Boost Çarpanlarını Anlamak_ bölümüne bakın.

Ayrıca, kazanılan CRV'nin kalan %90'ı ilgili LP jetonları ile değiştirilir ve kasaya yeniden yatırılır. Tek istisna, kazanılan CRV'nin %50'sini Backscratcher kasasına kilitleyen ve kalan %50'yi takas eden yvUSDN3Crv vault'udur.

![](1.png)

### veCRV-DAO yVault ([yveCRV-DAO](https://etherscan.io/address/0xc5bDdf9843308380375a611c18B50Fb9341f502A))

_AKA-Backscratcher_ [📺](https://youtu.be/kJEAe2Rlh70)  
Bu vault, CRV'nizi yveCRV'ye dönüştürerek size Curve'de stake ederek kazandığınız tutara göre artan Curve ücretlerinden sürekli bir pay kazandırır. CRV ne kadar çok dönüştürülürse, haftalık ödülleriniz o kadar büyük olur. Her Cuma, bunlar kasadan 3Crv (Curve'nin 3pool LP jetonu) olarak talep edilebilir.

Yearn'in kendisi, kazanılan tüm CRV'lerin %10'unu bu kasaya yatırır ve 3crv ödüllerini, artırılmış haftalık ödüllerin geldiği yer olan vault token'i sahiplerine verir.

Para yatırma işlemi geri alınamaz: CRV, Curve'in oy emanetinde sürekli olarak stake edildiğinden, CRV'yi yalnızca yveCRV'ye dönüştürebilirsiniz. Tüm vault'lar, artırma seviyelerini sürdürmek için kazanılan CRV'nin %10'unu bu vault'a gönderir.

## v2 Vault'ları 🏛️

v2 yVault'lar, vault başına yalnızca bir strateji uygulayabilen v1 yVault'ların aksine vault başına birden fazla strateji (aynı anda 20 stratejiye kadar) kullanabilir. [📺](https://youtu.be/ZES91i-hNAM)

![](2.png)

### Yearn Compounding veCRV yVault ([yvBOOST](https://etherscan.io/address/0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a))

[StrategyYearnVECRV](https://etherscan.io/address/0x2923a58c1831205C854DBEa001809B194FDb3Fa5) [📺](https://youtu.be/Ik6GdGYO_x8)  
Bu vault [yveCRV-DAO](https://etherscan.io/address/0xc5bDdf9843308380375a611c18B50Fb9341f502A) token'lerini kabul eder ve size Curve'ün alım satım ücretlerinden sürekli bir pay sağlar (haftalık olarak [3Crv](https://etherscan.io/address/0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490), Curve'in 3pool LP token'i). Ödüller toplanır, daha fazla yveCRV-DAO ile değiştirilir (hasat zamanında hangisinin daha verimli olduğuna bağlı olarak piyasadan satın alma veya darphane yoluyla) ve vault'a geri yatırılır.

![](3.png)

### ✨ YFI yVault ([yvYFI](https://etherscan.io/address/0xdb25cA703181E7484a155DD612b06f57E12Be5F0))

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x6a97FC93e39b3f792f1fD6e01565ff412B002D20#code)  
Bu strateji, kazanç elde etmek için CREAM ve AAVE gibi çeşitli kredi platformlarında YFI belirteçlerini ödünç verir.

[StrategyMakerYFIDAIDelegate](https://etherscan.io/address/0x4730D10703155Ef4a448B17b0eaf3468fD4fb02d)
DAI'yi üretmek için YFI-A aracılığıyla MakerDAO'daki YFI'yi kilitler. Yeni basılan DAI daha sonra getiri elde etmek için v2 DAI yVault'a yatırılır.

✨ [MakerYFI-DAIv0.4.3Delegate](https://etherscan.io/address/0x7A5D88510cD49E878ADe26E0f08bF374b5eCAF49)
DAI'yi üretmek için YFI-A aracılığıyla MakerDAO'daki YFI'yi kilitler. Yeni basılan DAI daha sonra verim elde etmek için v2 DAI v0.4.3 yVault'a yatırılır.

![](4.png)

### SNX yVault ([yvSNX](https://etherscan.io/address/0xF29AE508698bDeF169B89834F76704C3B205aedf#code))

[StrategySynthetixSusdMinter](https://etherscan.io/address/0xc9a62e09834cEdCFF8c136f33d0Ae3406aea66bD)
SNX'i sUSD basmak için Synthetix'e yatırır. **Bu, stake edilen SNX'teki ödülleri 1 yıl boyunca kilitler**. Yeni basılan DAI daha sonra getiri elde etmek için v2 DAI yVault'a yatırılır. sUSD'den elde edilen getiri ve haftalık ücretlerden elde edilen ödüller ile kazanılmış ödüller (talep edilebilir olduğunda) daha fazla SNX ile değiştirilir ve kasaya yeniden yatırılır.

✨ [StrategyUniverseStaking](https://etherscan.io/address/0x29d23b73Dd0ed729F516bb55622765AF102f0e33)  
XYZ kazanmak için universe.xyz'ye SNX yatırır. Ödüller toplanır, daha fazla SNX karşılığında satılır ve vault'a yeniden yatırılır.

![](5.png)

### RAI yVault ([yvRAI](https://etherscan.io/address/0x873fB544277FD7b977B196a826459a69E27eA4ea))

[StrategyIdleidleRAIYield](https://etherscan.io/address/0x5D411D2cde10e138d68517c42bE2808C90c22026) 🚀  
IDLE ve RAI kazanmak için Idle.finance'a RAI yatırır. Ödüller toplanır, daha fazla SNX karşılığında satılır ve vault'a yeniden yatırılır.

![](6.png)

### LINK yVault ([yvLINK](https://etherscan.io/address/0x671a912C10bba0CFA74Cfc2d6Fba9BA1ed9530B2)) [📺](https://youtu.be/LT51QWfAMv8)

✨ [StrategyLeagueDAOStakingLINK](https://etherscan.io/address/0xf6D87dFC0841A289614B3d6fdb78D956ebd3cfF0)  
Supplies LINK on [LeagueDao](https://dao.leaguedao.com/yield-farming) to earn LEAG. Rewards are harvested, sold for more LINK, and deposited back into the strategy.

[Vesper LINK](https://etherscan.io/address/0x8198815871a45A5a883d083B7B105927eb9919D8)  
VSP kazanmak için [Vesper Finance](https://vesper.finance/) LINK Havuzuna LINK yatırır. Ödüller toplanır, daha fazla SNX karşılığında satılır ve vault'a yeniden yatırılır.

[AaveLenderLINKBorrowerSUSD](https://etherscan.io/address/0x906f0a6f23e7160eB0927B0903ab80b5E3f3950D)  
Faiz kazanmak ve ödül olarak stake edilen AAVE biriktirmek için AAVE'ye LINK ödünç verir. Ayrıca sUSD ödünç alır ve daha sonra getiri için sUSD yVault'a yatırır. Kazanılmış AAVE ve yvSUSD ödülleri toplanır, daha fazla LINK karşılığında satılır ve vault'aa yeniden yatırılır.

[StrategyMakerLINKDAIDelegate](https://etherscan.io/address/0x136fe75bfDf142a917C954F58577DB04ef6F294B)  
DAI basmak için LINK-A aracılığıyla MakerDAO'daki LINK'i kilitler. Yeni basılan DAI daha sonra getiri elde etmek için v2 DAI yVault'a yatırılır.

✨ [StrategyUniverseStaking](https://etherscan.io/address/0xa2a182C5B5Ea1A3c90Cb5Bb718F9e62DBE052927)  
XYZ kazanmak için universe.xyz'ye LINK yatırır. Ödüller toplanır, daha fazla LINK karşılığında satılır ve vault'a yeniden yatırılır.

![](7.png)

### sUSD yVault ([yvsUSD](https://etherscan.io/address/0xa5cA62D95D24A4a350983D5B8ac4EB8638887396#code))

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x215DeE632335829155Dcb62452c4878C48c1C884)  
Faiz kazanmak ve ödül olarak stake edilen AAVE'yi biriktirmek için AAVE ve Cream'e sUSD ödünç verir. Bahis edilen AAVE kilidi açıldığında, AAVE hasat edilecek, daha fazla sUSD'ye satılacak ve Vault'a yeniden yatırılacaktır.

[SingleSidedCrvsUSD](https://etherscan.io/address/0x74b3E5408B1c29E571BbFCd94B09D516A4d81f36) 🚀  
Curve.fi üzerindeki SAAVE curve havuzuna sUSD yatırır. Ödüller toplanır, daha fazla SNX karşılığında satılır ve vault'a yeniden yatırılır.

[SingleSidedCrvsUSD](https://etherscan.io/address/0x95eA1643699F8DE347975F31CA8d03eCC507616c) 🚀  
Curve.fi üzerindeki SAAVE curve havuzuna sUSD yatırır. Ödüller toplanır, daha fazla SNX karşılığında satılır ve vault'a yeniden yatırılır.

![](8.png)

### 1INCH yVault ([yv1INCH](https://etherscan.io/address/0xB8C3B7A2A618C552C23B1E4701109a9E756Bab67))

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x86eD4F77d40182b8686a25e125FB3f5a04203CaA)  
Faiz kazanmak için CREAM'e 1INCH token ödünç verir.

[Strategy1INCHGovernance](https://etherscan.io/address/0xB12F6A5776EDd2e923fD1Ce93041B2000A22dDc7)  
Yönetim ödüllerini toplamak için 1INCH DAO'ya 1INCH token yatırır. Ödüller toplanır ve kasaya geri yatırılır.

![](9.png)

### WETH yVault ([yvWETH](https://etherscan.io/address/0xa258C4606Ca8206D8aA700cE2143D7db854D168c))

_Yatırılan herhangi bir ETH, WETH'e dönüştürülür ve ardından yatırılır._

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0xec2DB4A1Ad431CC3b102059FA91Ba643620F0826)  
Faiz kazanmak için WETH'i Alpha Homora'ya ödünç verir.

[StrategysteCurveWETHSingleSided](https://etherscan.io/address/0xC5e385f7Dad49F230AbD53e21b06aA0fE8dA782D) 🚀  
Daha sonra içine koyduğu [steCRV](https://etherscan.io/address/0x06325440D014e39736583c165C2963BA99fAf14E) token'lerini almak için Curve'deki [burada](https://www.curve.fi/steth/deposit) likidite havuzuna WETH sağlar v2 Curve stETH Pool yVault ([yvsteCRV](https://etherscan.io/address/0xdcd90c7f6324cfa40d7169ef80b12031770b4325)) için kar elde eder.

[StrategyeCurveWETHSingleSided](https://etherscan.io/address/0x37770F958447fFa1571fc9624BFB3d673161f37F) 🚀  
[eCRV](https://etherscan.io/address/0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c) token'lerini elde etmek için [burada](https://curve.fi/seth/deposit) Curve'deki likidite havuzuna WETH sağlar ve daha sonra getiri elde etmek için v2 Eğrisi sETH Havuzu yVault'a  ([yveCRV](https://etherscan.io/address/0x986b4AFF588a109c09B50A03f42E4110E29D353F)) koyar.

[AaveWETHLenderUSDTBorrower](https://etherscan.io/address/0xd28b508EA08f14A473a5F332631eA1972cFd7cC0)  
WETH'i faiz kazanmak için AAVE'de ödünç verir ve ödül olarak stake edilen AAVE'yi biriktirir. Ayrıca sUSD ödünç alır ve daha sonra getiri için sUSD yVault'a yatırır. Kazanılmış AAVE ve yvSUSD ödülleri toplanır, daha fazla WETH karşılığında satılır ve vault'a yeniden yatırılır.

[StrategyGenericLevCompFarmWeth](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view)  
Compound üzerinde ETH sağlar ve COMP kazancını en üst düzeye çıkarmak için ek miktarda ETH ödünç alır. Flashloan'lar, ek kaldıraç elde etmek ve APY'yi artırmak için dYdX'ten ek ETH elde etmek için kullanılır. Kazanılan COMP toplanır ve daha fazla ETH karşılığında satılır ve vault'a yeniden yatırılır.

[StrategystETHAccumulator](https://etherscan.io/address/0x0967aFe627C732d152e3dFCAdd6f9DBfecDE18c3)  
Stakes wETH at [Lido.fi](http://lido.fi/) to mint stETH which accumulates ETH 2.0 staking rewards. This strategy will buy stETH off the market if its cheaper than staking.

[ssc\_eth\_seth](https://etherscan.io/address/0xc57A4D3FBEF85e675f6C3656498beEfe6F9DcB55)  
Deposits ETH into the sETH curve pool on [curve.fi](http://curve.fi/). Rewards are harvested, sold for more ETH, and re-deposited into the vault.

[ssc\_eth\_steth](https://etherscan.io/address/0xF9fDc2B5F60355A237deb8BD62CC117b1C907f7b)  
Deposits ETH into the stETH curve pool on [curve.fi](http://curve.fi/). Rewards are harvested, sold for more ETH, and re-deposited into the vault.

[StrategyMakerV2\_ETH-C](https://etherscan.io/address/0xd33535e9F2E09485aC9cE8b27F865251161065E0)  
Locks ETH at MakerDAO via ETH-C to mint DAI. This newly minted DAI is then deposited into the v2 DAI yVault.

![](10.png)

### USDC yVault ([yvUSDC](https://etherscan.io/address/0x5f18c75abdae578b483e5f43f12a39cf75b973a9))

✨ [GenLevCompV3](https://etherscan.io/address/0x7900c70a377f89DF29D1D1939469ae3B74c5B740)  
Supplies USDC on [Compound](https://compound.finance/) and borrows an additional amount of USDC to maximize COMP earnings. Flashmints are used to mint DAI from MakerDAO to flashlend and increase the position, boosting the APY. Earned COMP is harvested, sold for more USDC, and deposited back into the strategy.

[StrategyIdleUSDCYield](https://etherscan.io/address/0x414D8F5c21dAF33105eE6416bcdA99a50A47C0e5#code) [📺](https://youtu.be/BcxWAVdXx_U)  
COMP ve IDLE kazanmak için Idle.finance'a USDC sağlar. Ödüller toplanır, daha fazla USDC karşılığında satılır ve vault'a yeniden yatırılır.

[StrategyAH2EarncyUSDC](https://etherscan.io/address/0x86Aa49bf28d03B1A4aBEb83872cFC13c89eB4beD#code)  
Faiz yaratmak için Alpha Homora v2'ye USDC ödünç verir.

[StrategyGenericLevCompFarm](https://etherscan.io/address/0x4d7d4485fd600c61d840ccbec328bfd76a050f87) [📺](https://www.youtu.be/jorporcLnCo&t)
Compound üzerinde USDC sağlar ve COMP kazancını en üst düzeye çıkarmak için ek miktarda USDC ödünç alır. Flashloan'lar, ek kaldıraç elde etmek ve APY'yi artırmak için dYdX'ten ek  USDC elde etmek için kullanılır. Kazanılan COMP toplanır ve daha fazla USDC karşılığında satılır ve vault'a yeniden yatırılır.

[SingleSidedCrvUSDC](https://etherscan.io/address/0x80af28cb1e44C44662F144475d7667C9C0aaB3C3) 🚀  
USDC'yi [curve.fi](http://curve.fi/) üzerindeki bir USDC curve havuzuna yatırır ve en karlı curve havuzuna geçiş yapar.

[PoolTogether USD Coin](https://etherscan.io/address/0x387fCa8d7e2e09655b4F49548607B55C0580fC63)  
POOL kazanmak için [PoolTogether](https://pooltogether.com/) protokolüne USDC sağlar. Ödüller toplanır, daha fazla USDC karşılığında satılır ve vault'a yeniden yatırılır. Haftanın ödülünü alırsa o da vault'a eklenir.

[StrategyRook USD Coin](https://etherscan.io/address/0x4140F350c1B67184fE3AaEa314d8C967F99EE8Cc)  
ROOK kazanmak için KeeperDAO'ya USDC sağlar. Ödüller toplanır, daha fazla USDC karşılığında satılır ve vault'a yeniden yatırılır.

![](11.png)

### DAI yVault ([yvDAI](https://etherscan.io/address/0xdA816459F1AB5631232FE5e97a05BBBb94970c95))

✨ [SingleSidedBalancer staBAL3Pool DAI](https://etherscan.io/address/0x9cfF0533972da48Ac05a00a375CC1a65e87Da7eC)  
Deposits DAI to the [DAI-USDC-USDT Stable Pool](https://app.balancer.fi/#/pool/0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063) on [Balancer.fi](https://app.balancer.fi/), BAL is harvested, sold for more DAI, and deposited back into the strategy.

✨ [AaveDAILenderSUSDBorrower](https://etherscan.io/address/0xC9db3AF6603329dF6C85E168D41B74832452ef08)  
Lends DAI on [AAVE](https://aave.com/) to gain interest and accumulate stkAAVE as rewards. Also borrows sUSD which it then deposits into the sUSD yVault for yield. Rewards from vested AAVE and yvSUSD are harvested, sold for more DAI, and deposited back into the strategy.

✨ [StrategyGenLevAAVE-Flashmint](https://etherscan.io/address/0xBCF537f93FAc59D35a8e7Ac8d132ab5aE860481D)  
Supplies DAI on [AAVE](https://aave.com/) and flashmints an additional amount of DAI to maximize stkAAVE earnings. Flashmints are used to mint DAI from MakerDAO to flashlend and increase the position, boosting the APY. stkAAVE is harvested, sold for more DAI, and deposited back into the strategy.

✨ [GenLevCompV3](https://etherscan.io/address/0x1676055fE954EE6fc388F9096210E5EbE0A9070c)  
Supplies DAI on [Compound](https://compound.finance/) and borrows an additional amount of DAI to maximize COMP earnings. Flashmints are used to mint DAI from MakerDAO to flashlend and increase the position, boosting the APY. Earned COMP is harvested, sold for more DAI, and deposited back into the strategy.

[StrategyLenderYieldOptimiser](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view)  
Faiz kazanmak ve ödül olarak stake edilen AAVE biriktirmek için AAVE'ye DAI ödünç verir. Bahis edilen AAVE kilidi açıldığında, AAVE hasat edilecek, daha fazla DAI'ye satılacak ve Vault'a yeniden yatırılacaktır.

[StrategyKashiMultiPairLender](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view)  
Faiz kazanmak için DAI'yi Kashi üzerinden Sushi'ye ödünç verir. Ödüller toplanır, daha fazla DAI karşılığında satılır ve vault'a yeniden yatırılır.

[StrategyGenericLevCompFarm](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view)  
Compound'a DAI sağlar ve COMP kazancını en üst seviyeye çıkarmak için ek miktarda DAI ödünç alır.
Flashloans ek kazanç elde etmek ve apy'yi artırmak için dyx'ten ek DAI elde etmek için kullanılır. Kazanılan COMP toplanır ve daha fazla DAI karşılığında satılır ve vault'a yeniden yatırılır.

✨ [ssc dai ib](https://etherscan.io/address/0xa6D1C610B3000F143c18c75D84BaA0eC22681185)  
[curve.fi](http://curve.fi/)'deki Iron Bank curve havuzuna DAI yatırır. Ödüller toplanır, daha fazla DAI karşılığında satılır ve vault'a yeniden yatırılır.

![](12.png)

### WBTC yVault ([yvWBTC](https://etherscan.io/address/0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E))

✨ [SingleSidedBalancer staBAL3-BTCPool WBTC](https://etherscan.io/address/0x7c1612476D235c8054253c83B98f7Ca6f7F2E9D0)  
Deposits wBTC to the [wBTC-renBTC-sBTC Stable Pool](https://app.balancer.fi/#/pool/0xfeadd389a5c427952d8fdb8057d6c8ba1156cc56000000000000000000000066) on [Balancer.fi](https://app.balancer.fi/), BAL is harvested, sold for more wBTC, and deposited back into the strategy.

[StrategyMakerWBTCDAIDelegate](https://etherscan.io/address/0x04A508664B053E0A08d5386303E649925CBF763c)  
DAI basmak için WBTC-A aracılığıyla MakerDAO'da wBTC'yi kilitler. Bu yeni basılan DAI daha sonra v2 DAI yVault'a depozito olarak eklenir.

[SingleSidedCrvWBTC](https://etherscan.io/address/0x40b04B3ed9845B8Be200Aa2D9C3eDC2bE0a5f01f) 🚀  
[curve.fi](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) üzerindeki bir BTC Curve Havuzuna wBTC yatırır ve en karlı curve havuzuna geçer.

[yvWBTCStratMMV1](https://etherscan.io/address/0x53a65c8e238915c79a1e5C366Bc133162DBeE34f)  
MM kazanmak için [Mushroom Finance'in](https://mushrooms.finance/) wBTC Vault'una, ardından wBTC Farm'ına wBTC sağlar. MM hasat edilir, daha fazla wBTC'ye satılır ve vault'a yeniden yatırılır.

[Vesper Wrapped BTC](https://etherscan.io/address/0x416647Ddee169156878DC46CD565dee99413c262)  
VSP kazanmak için [Vesper Finance](https://vesper.finance/) wBTC Havuzuna wBTC sağlar. Ödüller toplanır, daha fazla wBTCkarşılığında satılır ve vault'a yeniden yatırılır.

✨ [ssc wbtc bbtc](https://etherscan.io/address/0x4b254EbBbb8FDb9D3E848501784692b2726b310c)  
WBTC'yi [curve.fi](http://curve.fi/) üzerindeki BBTC curve havuzuna yatırır. Ödüller toplanır, daha fazla WBTC karşılığında satılır ve vault'a yeniden yatırılır.

✨ [ssc wbtc pbtc](https://etherscan.io/address/0x29367915508e47c631d220caEbA855901c13a3dE)  
WBTC'yi [curve.fi](http://curve.fi/) üzerindeki PBTC curve havuzuna yatırır. Ödüller toplanır, daha fazla WBTC karşılığında satılır ve vault'a yeniden yatırılır. Ödüller toplanır, daha fazla WBTC karşılığında satılır ve vault'a yeniden yatırılır.

✨ [ssc wbtc obtc](https://etherscan.io/address/0x64B2a32f030D9210E51ed8884C0D58b89137Ca81)  
WBTC'yi [curve.fi](http://curve.fi/) üzerindeki OBTC curve havuzuna yatırır.

✨ [Strategy-Levered-AAVE-wBTC](https://etherscan.io/address/0xDD387F2fe0D9B1E5768fc941e7E48AA8BfAf5e41)  
AAVE V2 üzerinde teminat olarak WBTC sağlar, ödünç alınır ve birkaç döngüde WBTC kredilerinde istenen kaldıracı elde etmek için yeniden yatırır.

![](13.png)

### USDT yVault ([yvUSDT](https://etherscan.io/token/0x7Da96a3891Add058AdA2E826306D812C638D87a7))

✨ [SingleSidedBalancer staBAL3Pool USDT](https://etherscan.io/address/0x3ef6Ec70D4D8fE69365C92086d470bb7D5fC92Eb)  
Deposits USDT to the [DAI-USDC-USDT Stable Pool](https://app.balancer.fi/#/pool/0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063) on [Balancer.fi](https://app.balancer.fi/), BAL is harvested, sold for more USDT, and deposited back into the strategy.

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x2f87c5e8396F0C41b86aad4F3C8358aB21681952)  
Faiz kazanmak için AAVE'ye USDT ödünç verir.

[StrategyAH2EarncyUSDT](https://etherscan.io/address/0x82292B8035873d7DD8a96767F6b3F885564aa919)  
Faiz yaratmak için Alpha Homora v2'ye USDT ödünç verir.

[StrategyIdleUSDTYield](https://etherscan.io/address/0x01b54c320d6B3057377cbc71d953d1BBa84df44e)  
COMP ve IDLE kazanmak için Idle Finance'e USDT sağlar. Ödüller toplanır, daha fazla USDT karşılığında satılır ve vault'a yeniden yatırılır.

[SingleSidedCrvUSDT](https://etherscan.io/address/0xf840d061E83025F4cD6610AE5DDebCcA43327f9f) 🚀  
USDT'yi [curve.fi](http://curve.fi/) üzerindeki bir USDT curve havuzuna yatırır ve en karlı curve havuzuna geçiş yapar.

![](14.png)

### UNI yVault ([yvUNI](https://etherscan.io/address/0xFBEB78a723b8087fD2ea7Ef1afEc93d35E8Bed42))

[StrategyLenderYieldOptimiser](https://etherscan.io/address/0x5e882c9f00209315e049B885B9b3dfbEe60D80A4)  
Faiz kazanmak ve ödül olarak stake edilen AAVE'yi biriktirmek için AAVE'ye UNI ödünç verir. Bahis edilen AAVE kilidi açıldığında, AAVE hasat edilecek, daha fazla UNI'ye satılacak ve Vault'a yeniden yatırılacaktır.

[PoolTogether Uniswap](https://etherscan.io/address/0x6EB00860260CF51623737e17579Db797d71cd337)  
POOL kazanmak için [PoolTogether](https://pooltogether.com/) protokolüne UNI sağlar. Ödüller toplanır, daha fazla UNI karşılığında satılır ve vault'a yeniden yatırılır. Haftanın ödülünü alırsa o da vault'a eklenir.

[StrategyMakerUNIDAIDelegate](https://ethersca9okmn.io/address/0x9Ae0B9a67cF5D603847980D95Ad4D45b57Ff7783)  
UNI-A aracılığıyla MakerDAO'daki UNI'yi DAI'yi basmak için kilitler. Bu yeni basılan DAI daha sonra v2 DAI yVault'a depozito olarak eklenir.

## v2 Curve Finance Strateji Vault'ları 🌈

v2 Curve yVault'lar, Curve Finance'deki likidite havuzlarına sağlanarak elde edilen likidite havuzu token'leri mevduatını kabul eder. Bu vault'lara girmek için, esas token'leri Curve Finance'deki ilgili havuzlarına yatırmanız gerekir. [📺](https://youtu.be/V47NzWeZjjk)

![](15.png)

### ✨ Curve 3Crypto Havuzu yVault'u ([yvCurve-3Crypto](https://etherscan.io/address/0xE537B5cc158EB71037D4125BDD7538421981E6AA))

_Bu vault Geçici Kayba tabi olmasa da, temeldeki Curve havuzu yatırımı çektiğinizde Geçici Kayba neden olabilir, dikkatli olun._

✨ [Curvecrv3cryptoVoterProxy](https://etherscan.io/address/0xbA9052141cEf06FD55733D23231c37Fc856CE6F4) 🚀  
Bu vault, [crv3crypto](https://etherscan.io/address/0xc4AD29ba4B3c580e6D59105FFf484999997675Ff) token'leri karşılığında Curve'deki likidite havuzuna [buradan](https://curve.fi/tricrypto2/deposit) BTC, ETH veya USDT sağlayarak elde edilen crv3crypto token'lerinin mevduatını kabul eder. crv3crypto, CRV ödülleri kazanmak için curve.fi üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla crv3crypto elde etmek için likidite havuzuna yeniden eklenir.

[StrategyConvex3Crypto](https://etherscan.io/address/0x2055CFD5CDbc90c60A202A1AC3DDfB71AeC1cE98) 🚀  
Supplies crv3crypto to Convex Finance to earn CRV and CVX. Rewards are harvested, sold for more crv3crypto, and deposited back into the vault.

![](20.png)

### ✨ Curve USDM Pool yVault ([yvCurve-USDM](https://etherscan.io/address/0x6FAfCA7f49B4Fd9dC38117469cd31A1E5aec91F5))

✨ [StrategyCurveUSDM](https://etherscan.io/address/0x81329ecb1AB448DacF6b9ae696A097f790898899)  
This vault accepts deposits of USDM3CRV-f tokens obtained by supplying either USDM, DAI, USDC, USDT (or wrapped via 3Crv tokens) to the liquidity pool on Curve [here](https://curve.fi/factory/23/deposit). USDM3CRV-f tokens are staked in the gauge on Curve to earn CRV rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more USDM3CRV-f.

✨ [StrategyConvexUSDM](https://etherscan.io/address/0x240f5167A98Bc2198110BcdD4CB04D06Dd52d55d)  
Supplies USDM3CRV-f to [Convex Finance](https://www.convexfinance.com/) to earn CRV. Rewards are harvested, sold for more USDM3CRV-f, and deposited back into the strategy.

![](21.png)

### ✨ Curve alETH Pool yVault ([yvCurve-alETH](https://etherscan.io/address/0x718AbE90777F5B778B52D553a5aBaa148DD0dc5D))

✨ [StrategyCurvealETH](https://etherscan.io/address/0x3f4a63F3Ee9bA49004953f6879c7516D85969F5F)  
This vault accepts deposits of alETH+ETH-f tokens obtained by supplying either alETH or ETH to the liquidity pool on Curve [here](https://curve.fi/factory/38/deposit). alETH+ETH-f tokens are staked in the gauge on Curve to earn CRV rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more alETH+ETH-f.

✨ [StrategyConvexalETH](https://etherscan.io/address/0x4ec142d094BecA5f7789CCd9341D0215c8B1e43f)  
Supplies alETH+ETH-f to [Convex Finance](https://www.convexfinance.com/) to earn CRV. Rewards are harvested, sold for more alETH+ETH-f, and deposited back into the strategy.

![](22.png)

### ✨ Curve EURN Pool yVault ([yvCurve-EURN](https://etherscan.io/address/0x8b9C0c24307344B6D7941ab654b2Aeee25347473))

✨ [StrategyCurveEURN](https://etherscan.io/address/0x7847b7027cab6Fc4ea08cA0fF3b7464727712f91)  
This vault accepts deposits of EURN/EURT-f tokens obtained by supplying either EURN or EURT to the liquidity pool on Curve [here](https://curve.fi/factory/33/deposit). EURN/EURT-f tokens are staked in the gauge on Curve to earn CRV rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more EURN/EURT-f.

✨ [StrategyConvexEURN](https://etherscan.io/address/0x3199437193625DCcD6F9C9e98BDf93582200Eb1f)  
Supplies EURN/EURT-f to [Convex Finance](https://www.convexfinance.com/) to earn CRV. Rewards are harvested, sold for more EURN/EURT-f, and deposited back into the strategy.

![](23.png)

### ✨ Curve MIM-UST ([yvCurve-MIMUST](https://etherscan.io/address/0xd8C620991b8E626C099eAaB29B1E3eEa279763bb))

✨ [StrategyCurveMIMUST](https://etherscan.io/address/0xbb241fD9A2A3742ef9E10ccfd8a6C4E0EbEb03f2)  
This vault accepts deposits of MIM-UST-f tokens obtained by supplying either MIM or UST to the liquidity pool on Curve [here](https://curve.fi/factory/48/deposit). MIM-UST-f tokens are staked in the gauge on Curve to earn CRV rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more MIM-UST-f.

✨ [StrategyConvexMIMUST](https://etherscan.io/address/0x5796698A29F3626c9FE13C4d3d3dEE987c84EBB3)  
Supplies MIM-UST-f to [Convex Finance](https://www.convexfinance.com/) to earn CRV. Rewards are harvested, sold for more MIM-UST-f, and deposited back into the strategy.

![](24.png)

### Curve EURT Pool yVault ([yvCurve-EURT](https://etherscan.io/address/0x0d4EA8536F9A13e4FBa16042a46c30f092b06aA5))

[StrategyCurveEURT](https://etherscan.io/address/0x26AB2029083909FeEFF8Cb0fA04c1CfF52499DE7)  
This vault accepts deposits of EURT-f tokens obtained by supplying either EURT or sEUR to the liquidity pool on Curve [here](https://curve.fi/eurt/deposit). EURT-f tokens are staked in the gauge on Curve to earn CRV rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more EURT-f.

[StrategyConvexEURT](https://etherscan.io/address/0x5E10E27DEae12877e23A68cC0d6F1b134b4d517A)  
Supplies EURT-f to Convex Finance to earn CRV and CVX. Rewards are harvested, sold for more EURT-f, and deposited back into the vault.

![](25.png)

### Curve MIM Pool yVault ([yvCurve-MIM](https://etherscan.io/address/0x2DfB14E32e2F8156ec15a2c21c3A6c053af52Be8))

[StrategyCurveMIM](https://etherscan.io/address/0x9E1FF8638a2F1aD4B924A4B9677aD9d9b74361Cf)  
This vault accepts deposits of MIM-3LP3CRV-f tokens obtained by supplying either MIM, DAI, USDC, USDT (or wrapped via 3Crv tokens) to the liquidity pool on Curve [here](https://curve.fi/mim/deposit). MIM-3LP3CRV-f tokens are staked in the gauge on Curve to earn CRV and SPELL rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more MIM-3LP3CRV-f.

[StrategyConvexMIM](https://etherscan.io/address/0x6570B0a1593a59CcB378fb0b01A753875FCa99c4)  
Supplies MIM-3LP3CRV-f to Convex Finance to earn CRV, SPELL, and CVX. Rewards are harvested, sold for more MIM-3LP3CRV-f, and deposited back into the vault.

![](26.png)

### Curve cvxCRV Pool yVault ([yvCurve-cvxCRV](https://etherscan.io/address/0x4560b99C904aAD03027B5178CCa81584744AC01f))

[StrategyCurvecvxCRV](https://etherscan.io/address/0xDCecD8DC5F3dDD480d2A06C56063DBf9c2a07E09)  
This vault accepts deposits of cvxcrv-f tokens obtained by supplying either CRV or cvxCRV to the liquidity pool on Curve [here](https://curve.fi/factory/22/deposit). cvxcrv-f tokens are staked in the gauge on Curve to earn CRV rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more cvxcrv-f.

✨ [StrategyConvexcvxCRV](https://etherscan.io/address/0xAF6F42bfB29e90dFe51f2341fF1B1f99Fd776A70)  
Supplies cvxcrv-f to [Convex Finance](https://www.convexfinance.com/) to earn CRV and CVX. Rewards are harvested, sold for more cvxcrv-f, and deposited back into the strategy.

![](27.png)

### Curve ibEUR Pool yVault ([yvCurve-ibEUR](https://etherscan.io/address/0x67e019bfbd5a67207755D04467D6A70c0B75bF60))

[StrategyCurveibEUR](https://etherscan.io/address/0xB431A88a6cFFfa66dBCf96Ebc89aE72Ff7Fcc34f)  
This vault accepts deposits of ibEUR+sEUR-f tokens obtained by supplying either ibEUR or sEUR to the liquidity pool on Curve [here](https://curve.fi/factory/3/deposit). ibEUR+sEUR-f tokens are staked in the gauge on Curve to earn CRV and rKP3R rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more ibEUR+sEUR-f.

✨ [StrategyConvexibEUR](https://etherscan.io/address/0x214D14f94a63B1714CCc39d12b4942e8Fdd56bA7)  
Supplies ibEUR+sEUR-f to Convex Finance to earn CRV and CVX. Rewards are harvested, sold for more ibEUR+sEUR-f, and deposited back into the vault.

![](28.png)

### Curve ibKRW Pool yVault ([yvCurve-ibKRW](https://etherscan.io/address/0x528D50dC9a333f01544177a924893FA1F5b9F748))

[StrategyCurveibKRW](https://etherscan.io/address/0x10Ae24bce6F06b1BFfdA701736BEB2069eCd5a49)  
This vault accepts deposits of ibKRW+sKRW-f tokens obtained by supplying either ibKRW or sKRW to the liquidity pool on Curve [here](https://curve.fi/factory/2/deposit). ibKRW+sKRW-f tokens are staked in the gauge on Curve to earn CRV and rKP3R rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more ibKRW+sKRW-f.

✨ [StrategyConvexibKRW](https://etherscan.io/address/0x73c3533c159F93C924f072B065F9DAA6C0445Be2)  
Supplies ibKRW+sKRW-f to Convex Finance to earn CRV and CVX. Rewards are harvested, sold for more ibKRW+sKRW-f, and deposited back into the vault.

![](29.png)

### Curve ibGBP Pool yVault ([yvCurve-ibGBP](https://etherscan.io/address/0x595a68a8c9D5C230001848B69b1947ee2A607164))

[StrategyCurveibGBP](https://etherscan.io/address/0x2063FcF4883E688FEc10e984d43bDa3ed9C00fd6)  
This vault accepts deposits of ibGBP+sGBP-f tokens obtained by supplying either ibGBP or sGBP to the liquidity pool on Curve [here](https://curve.fi/factory/30/deposit). ibGBP+sGBP-f tokens are staked in the gauge on Curve to earn CRV and rKP3R rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more ibGBP+sGBP-f.

✨ [StrategyConvexibGBP](https://etherscan.io/address/0x6CfAcEf79cA2AaE173Dc5089b9179a4193dC5784)  
Supplies ibGBP+sGBP-f to Convex Finance to earn CRV and CVX. Rewards are harvested, sold for more ibGBP+sGBP-f, and deposited back into the vault.

![](30.png)

### Curve ibAUD Pool yVault ([yvCurve-ibAUD](https://etherscan.io/address/0x1b905331F7dE2748F4D6a0678e1521E20347643F))

[StrategyCurveibAUD](https://etherscan.io/address/0x2c9740Fc1E03457bF7FDe9dA08e04476D91c038c)  
This vault accepts deposits of ibAUD+sAUD-f tokens obtained by supplying either ibAUD or sAUD to the liquidity pool on Curve [here](https://curve.fi/factory/29/deposit). ibAUD+sAUD-f tokens are staked in the gauge on Curve to earn CRV and rKP3R rewards. Rewards are swapped for one of the underlying assets and resupplied to the liquidity pool to obtain more ibAUD+sAUD-f.

✨ [StrategyConvexibAUD](https://etherscan.io/address/0x68d8dAd442102d1aECCa4f71246E20eBA9ab7216)  
Supplies ibAUD+sAUD-f to Convex Finance to earn CRV and CVX. Rewards are harvested, sold for more ibAUD+sAUD-f, and deposited back into the vault.

![](31.png)

### v2 Curve mUSD Havuzu yVault'u ([yvCurve-mUSD](https://etherscan.io/address/0x8cc94ccd0f3841a468184aCA3Cc478D2148E1757#code))

[Curvemusd3CRVVoterProxy](https://etherscan.io/address/0xf9fF7f463A7e6f43d4E65c230D3743355fC954e4) 🚀  
Bu vault, Curve'deki likidite havuzuna mUSD, DAI, USDC, USDT (veya 3Crv token'leri ile wrap edilmiş) sağlayarak elde edilen [musd3CRV](https://etherscan.io/address/0x1AEf73d49Dedc4b1778d0706583995958Dc862e6) token'lerinin yatırılmasını kabul eder [buradan](https://www.curve.fi/musd/deposit). musd3CRV token'leri, CRV ödülleri kazanmak için curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla crv3crypto elde etmek için likidite havuzuna yeniden eklenir.

[Convexmusd3CRV](https://etherscan.io/address/0x75be6ABC02a010559Ed5c7b0Eab94abD2B783b65) 🚀  
CRV ve CVX kazanmak için Convex Finance'e musd3CRV sağlar. Ödüller toplanır, daha fazla musd3CRV karşılığında satılır ve vault'a yeniden yatırılır.

![](34.png)

### Huobi BTC Curve yVault ([yvhCRV](https://etherscan.io/address/0x625b7DF2fa8aBe21B0A976736CDa4775523aeD1E))

[CurvehCRVVoterProxy](https://etherscan.io/address/0x91cBf0014a966615e1050c90A1aBf1d1d5d8cffd)🚀  
Bu vault,[hCRV](https://etherscan.io/address/0xb19059ebb43466C323583928285a49f558E572Fd) token'leri karşılığında [buradan](https://curve.fi/hbtc/deposit) Curve'deki likidite havuzuna hBTC veya wBTC sağlayarak elde edilen hCRV token'lerinin mevduatını kabul eder. hCRV, CRV ödülleri kazanmak için curve.finans göstergesinde stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla  hCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexhCRV](https://etherscan.io/address/0x7Ed0d52C5944C7BF92feDC87FEC49D474ee133ce) 🚀  
CRV ve CVX kazanmak için Convex Finance'e hCRV sağlar. Ödüller toplanır, daha fazla hCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](35.png)

### v2 Curve USDK Havuzu yVault ([yvCurve-USDK](https://etherscan.io/address/0x3D27705c64213A5DcD9D26880c1BcFa72d5b6B0E))

[Curveusdk3CRVVoterProxy](https://etherscan.io/address/0x096E2F730c6AB7a048de7d27507E5E4e864c6824)🚀  
Bu vault, [usdk3CRV](https://etherscan.io/address/0x97E2768e8E73511cA874545DC5Ff8067eB19B787) token'leri karşılığında [buradan](https://curve.fi/usdk/deposit) Curve'deki likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3crv) veya USDK sağlayarak elde edilen usdk3CRV token'lerinin mevduatını kabul eder. usdk3CRV, CRV ödülleri kazanmak için curve.finans göstergesine yatırılır. Ödüller, temel token'lerden biri için değiştirilir ve daha fazla usdk3CRV elde etmek için likidite havuzuna yeniden verilir.

[Convexusdk3CRV](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
CRV ve CVX kazanmak için [Convex Finance](https://www.convexfinance.com/stake)'e usdk3CRV sağlar. Kazanılan token'ler toplanır, stratejiye geri yatırılan daha fazla usdk3CRV karşılığında satılır.

![](36.png)

### v2 Curve Pax Havuzu yVault ([yvCurve-Pax](https://etherscan.io/address/0x80bbeE2fa460dA291e796B9045e93d19eF948C6A))

[CurveypaxCrvVoterProxy](https://etherscan.io/address/0x60A335509E75175E0fF785091f1Baf979148A290)🚀  
Bu vault, DAI, USDC, USDT (veya bunların IronBank paketli versiyonu: ycDAI, ycUSDC, ycUSDT) veya PAX'i [buradan](https://curve.fi/pax/deposit)Curve'deki likidite havuzuna  token'leri karşılığında sağlayarak elde edilen [ypaxCrv](https://etherscan.io/address/0xD905e2eaeBe188fc92179b6350807D8bd91Db0D8) token'lerinin mevduatını kabul eder. ypaxCrv, CRV ödülleri kazanmak için curve.finance üzerindeki göstergeye yatırılır.Ödüller, temel token'lerden biri için değiştirilir ve daha fazla ypaxCrv elde etmek için likidite havuzuna yeniden verilir.

[ConvexypaxCrv](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
CRV ve CVX kazanmak için [Convex Finance](https://www.convexfinance.com/stake)'e ypaxCrv  sağlar. daha fazla usdk3CRV karşılığında satılır.

![](37.png)

### v2 Curve RSV havuzu yVault ([yvCurve-RSV](https://etherscan.io/address/0xC116dF49c02c5fD147DE25Baa105322ebF26Bd97))

[Curversv3CRVVoterProxy](https://etherscan.io/address/0x57D2E2eD281650A5d987E6ef87BC1BeD4fD0E959)🚀  
Bu kasa, DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3crv) veya RSV'yi [buradan](https://curve.fi/rsv/deposit)Curve'deki likidite havuzuna rsv3CRV token'leri karşılığında sağlayarak elde edilen [rsv3CRV](https://etherscan.io/address/0xC2Ee6b0334C261ED60C72f6054450b61B8f18E35) token'lerinin mevduatını kabul eder. rsv3CRV, CRV ve RSR ödülleri kazanmak için curve.finance üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden biri için değiştirilir ve daha fazla rsv3CRV elde etmek için likidite havuzuna yeniden verilir.

[Convexrsv3CRV](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
CRV ve CVX kazanmak için [Convex Finance](https://www.convexfinance.com/stake)'e  rsv3CRV  sağlar. Kazanılan token'ler toplanır, daha fazla rsv3CRV karşılığında satılır ve stratejiye geri yatırılır.

![](38.png)

### v2 Curve USDT havuzu yVault ([yvCurve-USDT](https://etherscan.io/address/0x28a5b95C101df3Ded0C0d9074DB80C438774B6a9))

[CurvecDAI+cUSDC+USDTVoterProxy](https://etherscan.io/address/0x5Fa22A8527Ae20f4ed8Ed3E0a6A5359Ad5EA3A4e)🚀  
###### Bu vault, tCrv jetonları karşılığında [burada](https://curve.fi/usdt/deposit) Curve'deki likidite havuzuna DAI, USDC (veya bunların wrap edilmiş Bileşik versiyonu: cDAI, cUSDC) veya USDT sağlayarak elde edilen [tCrv](https://etherscan.io/address/0x9fC689CCaDa600B6DF723D9E47D84d76664a1F23) token'lerinin mevduatını kabul eder. tCrv, CRV ödülleri kazanmak için curve.Finance üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden biri için takas edilir ve daha fazla tCrv elde etmek için likidite havuzuna yeniden takviye edilir.**

[ConvexcDAI+cUSDC+USDT](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
CRV ve CVX kazanmak için [Convex Finance](https://www.convexfinance.com/stake)'e tCrv sağlar. Kazanılan token'ler toplanır daha fazla tCrv için satılır ve stratejiye geri yatırılır .

![](39.png)

### v2 Curve triCrypto Havuzu yVault ([yvCurve-triCrypto](https://etherscan.io/address/0x3D980E50508CFd41a13837A60149927a11c03731))

Bu vault Geçici Kayba tabi olmasa da, temeldeki Curve havuzu yatırımınızı çektiğinizde Geçici Kayba neden olabilir, dikkatli olun._

[CurvecrvTricryptoVoterProxy](https://etherscan.io/address/0xb9267f1427Ddb937003b9cA0Ca7716DDa4026D19) 🚀  
Bu vault, crvTricrypto token'leri karşılığında [burada](https://curve.fi/tricrypto/deposit) Curve'deki likidite havuzuna USDT, wBTC veya ETH sağlayarak elde edilen [crvTricrypto](https://etherscan.io/address/0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF) token'lerinin mevduatını kabul eder. crvTricrypto, CRV ödülleri kazanmak için curve.finance üzerindeki göstergeye stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla crvTricrypto elde etmek için likidite havuzuna yeniden eklenir.

[ConvexcrvTricrypto](https://hackmd.io/zucTisw_RUOQCWFpZYfksg?view) 🚀  
CRV ve CVX kazanmak için [Convex Finance](https://www.convexfinance.com/stake)'e crvTricrypto sağlar. Kazanılan token'ler toplanır, daha fazla crvTricrypto karşılığında satılır ve stratejiye geri yatırılır.

![](40.png)

### v2 Curve EURS Havuzu yVault ([yvCurve-EURS](https://etherscan.io/address/0x25212Df29073FfFA7A67399AcEfC2dd75a831A1A))

[CurveeursCRVVoterProxy](https://etherscan.io/address/0x53cE22d5b4F667eC73710d428E828Cd96E9a37C9) 🚀  
Bu vault, [buradaki](https://www.curve.fi/eurs/deposit ) Curve likidite havuzuna EUR veya sEUR sağlayarak elde edilen eursCRV token'lerinin mevduatını kabul eder, burada [eursCRV](https://etherscan.io/address/0x194eBd173F6cDacE046C53eACcE9B953F28411d1) token'leri, CRV ödülleri kazanmak için Curve'deki göstergede stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla eursCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexeursCRV](https://etherscan.io/address/0x4DC2CCC9E76bD30982243C1cB915003e17a88Eb9) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye eursCRV sağlar. Ödüller toplanır, daha fazla eursCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](41.png)

### v2 Curve sUSD Havuzu yVault ([yvCurve-sUSD](https://etherscan.io/address/0x5a770DbD3Ee6bAF2802D29a901Ef11501C44797A))

[CurvecrvPlain3andSUSDVoterProxy](https://etherscan.io/address/0x9730F52AB5BcEc960bE41b0fE4913a09c0B57066) 🚀  
Bu vault, Curve'deki likidite havuzuna sUSD, DAI, USDC veya USDT sağlayarak elde edilen  [sCrv](https://etherscan.io/address/0xC25a3A3b969415c80451098fa907EC722572917F) token'lerinin mevduatını kabul eder; sCrv belirteçleri, CRV ve SNX ödülleri kazanmak için [burada](https://www.curve.fi/susdv2/deposit) Curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla sCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexcrvPlain3andSUSD](https://etherscan.io/address/0xFA773b91b59B0895877c769000b9824b46b13a20) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye sCRV sağlar. Ödüller toplanır, daha fazla sCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](42.png)

### v2 Curve AAVE Havuzu yVault ([yvCurve-Aave](https://etherscan.io/address/0x39CAF13a104FF567f71fd2A4c68C026FDB6E740B))

[Curvea3CRVVoterProxy](https://etherscan.io/address/0xB11FC91DF59ADc604485f1B25ABa1F96A685473f) 🚀  
Bu vault, [buradan](https://curve.fi/aave/deposit) Curve üzerindeki likidite havuzuna DAI, USDC veya USDT (veya bunların wrap edilmiş aToken'leri) sağlayarak elde edilen  [a3CRV](https://etherscan.io/address/0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900) token'lerinin mevduatını kabul eder. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla a3CRV elde etmek için likidite havuzuna yeniden eklenir.

[Convexa3CRV](https://etherscan.io/address/0xAC4AE0B06C913dF4608dB60E2571a8e91b74C619) 🚀  
CRV ve CVX kazanmak için Convex Finance'a a3CRV sağlar. Ödüller toplanır, daha fazla a3CRV karşılığında satılır ve vault'a yeniden yatırılır.

![](43.png)


### v2 Curve HUSD Havuzu yVault ([yvCurve-HUSD](https://etherscan.io/address/0x054AF22E1519b020516D72D749221c24756385C9))

[Curvehusd3CRVVoterProxy](https://etherscan.io/address/0x5ED527A2cfC5411EB63b12E46e270b07b6813824) 🚀  
Bu vault, Curve'deki likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3crv) veya HUSD sağlayarak elde edilen [husd3CRV](https://etherscan.io/address/0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858) token'lerinin mevduatını kabul eder, burada husd3CRV token'leri CRV ödülleri kazanmak için [buradaki](https://www.curve.fi/husd/deposit) Curve göstergede stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla husd3CRV elde etmek için likidite havuzuna yeniden eklenir.

[Convexhusd3CRV](https://etherscan.io/address/0xdC929e76081a78e5c32552C2e79D29ECab3F6755) 🚀
CRV ve CVX kazanmak için Convex Finance'ye  husd3CRV  sağlar. Ödüller toplanır, daha fazla husd3CRV karşılığında satılır ve vault'a yeniden yatırılır.

![](44.png)

### v2 Curve USDN Havuzu yVault ([yvCurve-USDN](https://etherscan.io/address/0x3B96d491f067912D18563d56858Ba7d6EC67a6fa))

[Curveusdn3CRVVoterProxy](https://etherscan.io/address/0x23a09D84e50fF3fDFa270308851443734b0a4b6D) 🚀  
Bu vault, [burada](https://curve.fi/usdn/deposit) curve likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3crv) veya USDN sağlayarak elde edilen [usdn3CRV](https://etherscan.io/address/0x4f3E8F405CF5aFC05D68142F3783bDfE13811522) token'lerinin mevduatını kabul eder burada usdn3CRV belirteçleri, CRV ödülü kazanmak için Curve'deki göstergede stake edilir

[Convexusdn3CRV](https://etherscan.io/address/0x8e87e65Cb28c069550012f92d5470dB6EB6897c0) 🚀  
Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla usdn3CRV elde etmek için likidite havuzuna yeniden eklenir.

![](45.png)

### v2 Curve rETH Havuzu yVault ([yvCurve-rETH](https://etherscan.io/address/0xBfedbcbe27171C418CDabC2477042554b1904857))

[CurverCRVVoterProxy](https://etherscan.io/address/0x16468a3999d931Dd6b6ffA0086Cf195D6C5BDAFA) 🚀  
Bu vault, [buradaki](https://curve.fi/reth/deposit) Curve likidite havuzuna ETH veya rETH sağlayarak elde edilen [rCRV](https://etherscan.io/address/0x53a901d48795C58f485cBB38df08FA96a24669D5) token'lerinin mevduatını kabul eder; burada rCRV token'leri, CRV ve [FIS](https://www.coingecko.com/en/coins/stafi) ödülleri kazanmak için Curve üzerindeki göstergede stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla rCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexrCRV](https://etherscan.io/address/0x8E4AA2E00694Adaf37f0311651262671f4d7Ac16) 🚀
CRV, CVX ve FIS kazanmak için Convex Finance'e rCRV sağlar. Ödüller toplanır, daha fazla rCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](46.png)

### v2 Curve ankrETH Havuzu yVault ([yvCurve-ankrETH](https://etherscan.io/address/0x132d8D2C76Db3812403431fAcB00F3453Fc42125))

[CurveankrCRVVoterProxy](https://etherscan.io/address/0x32EF165F2ABbdbE7dcC25B86EdB14a2C0dc52571) 🚀  
Bu vault, [buradaki](https://www.curve.fi/ankreth/deposit) Curve likidite havuzuna ETH veya ankrETH sağlayarak elde edilen [ankrCRV](https://etherscan.io/address/0xaA17A236F2bAdc98DDc0Cf999AbB47D47Fc0A6Cf) token'lerinin mevduatını kabul eder. ankrCRV belirteçleri, CRV, [ANKR](https://www.coingecko.com/en/coins/ankr-network) ve  [ONX](https://www.coingecko.com/en/coins/onx-finance)  ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla ankrCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexankrCRV](https://etherscan.io/address/0xB194dCFF4E11d26919Ce3B3255F69aEca5951e88) 🚀  
CRV, CVX, ANKR ve ONX kazanmak için Convex Finance'e ankrCRV sağlar. Ödüller toplanır, daha fazla ankrCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](47.png)

### v2 Curve LINK Havuzu yVault ([yvCurve-LINK](https://etherscan.io/address/0xf2db9a7c0ACd427A680D640F02d90f6186E71725))

[CurvelinkCRVVoterProxy](https://etherscan.io/address/0x0E94D346D8A53FEF83484b178a581695E0001E55) 🚀  
Bu vault, [buradaki](https://curve.fi/link/deposit) Curve likidite havuzuna LINK veya sLINK sağlayarak elde edilen [linkCRV](https://etherscan.io/address/0xcee60cFa923170e4f8204AE08B4fA6A3F5656F3a) token'lerinin mevduatını kabul eder. linkCRV token'leri, CRV ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla  linkCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexlinkCRV](https://etherscan.io/address/0xb7f013426d33fe27e4E8ABEE58500268554736bD) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye linkCRV sağlar. Ödüller toplanır, daha fazla linkCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](48.png)

### v2 Curve alUSD Havuzu yVault ([yvCurve-alUSD](https://etherscan.io/address/0xA74d4B67b3368E83797a35382AFB776bAAE4F5C8))

[CurvealUSD3CRV-fVoterProxy](https://etherscan.io/address/0x31CD90D60516ED18750bA49b2C9d1053190F40d9) 🚀  
Bu vault, [buradaki](https://curve.fi/alusd/deposit) Curve likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3crv) alUSD sağlayarak elde edilen tüm [alUSD3CRV-f](https://etherscan.io/address/0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c) token'lerinin mevduatını kabul eder. alUSD3CRV-f token'leri, CRV ve [ALCX](https://www.coingecko.com/en/coins/alchemix) ödülleri kazanmak için Curve üzerindeki göstergede sabitlenir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazlaalUSD3CRV-f elde etmek için likidite havuzuna yeniden eklenir.

[ConvexalUSD3CRV-f](https://etherscan.io/address/0xf8Fb278DeeaF30Ff3F6326d928A61eA8b9397d16) 🚀  
CRV, CVX ve ALCX kazanmak için Convex Finance'e alUSD3CRV-f sağlar. Ödüller toplanır, daha fazla alUSD3CRV-f karşılığında satılır ve vault'a yeniden yatırılır.

![](49.png)

### v2 Curve USDP Havuzu yVault ([yvCurve-USDP](https://etherscan.io/address/0xC4dAf3b5e2A9e93861c3FBDd25f1e943B8D87417))

[Curveusdp3CRVVoterProxy](https://etherscan.io/address/0x94fA3A90E680f6b866545C904D1dc9DEe6416de9) 🚀  
Bu vault, [buradaki](https://www.curve.fi/usdp/deposit) Curve likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3crv) veya USDP sağlayarak elde edilen [usdp3CRV](https://etherscan.io/address/0x7Eb40E450b9655f4B3cC4259BCC731c63ff55ae6) token'lerinin mevduatını kabul eder. usdp3CRV token'leri, CRV ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla usdp3CRV elde etmek için likidite havuzuna yeniden eklenir.

[Convexusdp3CRV](https://etherscan.io/address/0xfb0702469A1a0440E87C06605461E8660FD0F43d) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye usdp3CRV sağlar. Ödüller toplanır, daha fazla usdp3CRV karşılığında satılır ve vault'a yeniden yatırılır.

![](50.png)

### v2 Curve UST Havuzu yVault ([yvCurve-UST](https://etherscan.io/address/0x1C6a9783F812b3Af3aBbf7de64c3cD7CC7D1af44))

[Curveust3CRVVoterProxy](https://etherscan.io/address/0xbf811462955DEeD9aaD62EFE771E34e8B5811857) 🚀  
Bu vault, [buradaki](https://www.curve.fi/ust/deposit) Curve likidite havuzuna UST, DAI, USDC, USDT (veya 3Crv token'leri ile wrap edilmiş) sağlayarak elde edilen [ust3CRV](https://etherscan.io/address/0x94e131324b6054c0D789b190b2dAC504e4361b53) token'lerinin mevduatını kabul eder. ust3CRV token'leri, Curve ödülleri kazanmak için göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla ust3CRV elde etmek için likidite havuzuna yeniden eklenir.

[Convexust3CRV](https://etherscan.io/address/0x0921E388e86bbE0356e37413F946ccE47EDd294D) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye ust3CRV sağlar. Ödüller toplanır, daha fazla ust3CRV karşılığında satılır ve vault'a yeniden yatırılır.

![](51.png)

### v2 Curve DUSD Havuzu yVault ([yvCurve-DUSD](https://etherscan.io/address/0x30FCf7c6cDfC46eC237783D94Fc78553E79d4E9C))

[Curvedusd3CRVVoterProxy](https://etherscan.io/address/0x4C547b6202247E7B7c45A95d7747A85704530ab3) 🚀  
Bu vault, [buradaki](https://curve.fi/dusd/deposit) Curve likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3CRV) veya DUSD sağlayarak elde edilen [dusd3CRV](https://etherscan.io/address/0x3a664ab939fd8482048609f652f9a0b0677337b9) token'lerinin mevduatını kabul eder. dusd3CR token'leri, CRV ve [DFD](https://www.coingecko.com/en/coins/defidollar-dao) ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. CRV ve DFD ödülleri, dayanak varlıklardan biri için değiştirilir ve daha fazla dusd3CRV elde etmek için likidite havuzuna yeniden verilir.

[Convexdusd3CRV](https://etherscan.io/address/0x33d7E0Fa2c7Db85Ef3AbC1C44e07E0b5cB2E4C14) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye dusd3CRV sağlar. Ödüller toplanır, daha fazla dusd3CRV karşılığında satılır ve vault'a yeniden yatırılır.

![](52.png)

### v2 Curve TUSD Havuzu yVault ([yvCurve-TUSD](https://etherscan.io/address/0xf8768814b88281DE4F532a3beEfA5b85B69b9324))

[CurveTUSD3CRV-fVoterProxy](https://etherscan.io/address/0xE7C32D413341bfc84BB58492BEA8a69e8D06E0b4) 🚀  
Bu vault, [buradaki](https://curve.fi/tusd/deposit) Curve likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3CRV) veya TUSD sağlayarak elde edilen [TUSD3CRV-f](https://etherscan.io/address/0xecd5e75afb02efa118af914515d6521aabd189f1) token'lerinin yatırılmasını kabul eder. TUSD3CRV-f token'leri, CRV ödülleri kazanmak için Curve'deki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla TUSD3CRV-f elde etmek için likidite havuzuna yeniden eklenir.

[ConvexTUSD3CRV-f](https://etherscan.io/address/0x270101459e9A38Db38Ba4Cb8718FfA31953A9Af3) 🚀  
CRV ve CVX kazanmak için Convex Finance'e TUSD3CRV-f sağlar. Ödüller toplanır, daha fazla TUSD3CRV-f karşılığında satılır ve vault'a yeniden yatırılır.

![](53.png)

### v2 Curve Y Havuzu yVault ([yUSD](https://etherscan.io/address/0x4B5BfD52124784745c1071dcB244C6688d2533d3))

[CurveyDAI+yUSDC+yUSDT+yTUSDVoterProxy](https://etherscan.io/address/0x6d45c5a8C1cF1f77Ab89cAF8D44917730298bab7) 🚀  
Bu vault, [buradaki](https://curve.fi/iearn/deposit) Curve likidite havuzuna  DAI, USDC, USDT (veya TUSD veya bunların  [yEarn: y.curve.fi](https://v1.yearn.finance/earn)'den wrap edilmiş versiyonlarını) sağlayarak elde edilen [yDAI+yUSDC+yUSDT+yTUSD](https://etherscan.io/address/0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8) token'lerinin mevduatını kabul eder. yDAI+yUSDC+yUSDT +yTUSD token'leri, CRV ödülleri kazanmak için Curve'deki göstergeye yatırılır. Ödüller, dayanak varlıklardan biri için değiştirilir ve daha fazla yDAI+yUSDC+yUSDT+yTUSD elde etmek için likidite havuzuna yeniden verilir.

[ConvexyDAI+yUSDC+yUSDT+yTUSD](https://etherscan.io/address/0xA5189cb0149761A8346D64E384924b2394dFa595) 🚀  
CRV ve CVX kazanmak için Convex Finance'e yDAI+yUSDC+yUSDT+yTUSD sağlar. Ödüller toplanır, daha fazla yDAI+yUSDC+yUSDT+yTUSD karşılığında satılır ve vault'a geri yatırılır.

![](54.png)

### v2 Curve 3'lü Havuzu yVault ([yvCurve-3pool](https://etherscan.io/address/0x84E13785B5a27879921D6F685f041421C7F482dA))

[Curve3CrvVoterProxy](https://etherscan.io/address/0x9d7c11D1268C8FD831f1b92A304aCcb2aBEbfDe1) 🚀  
Bu vault, [buradaki](https://curve.fi/3pool/deposit) Curve likidite havuzuna DAI, USDC, USDT sağlayarak elde edilen [3crv](https://etherscan.io/address/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490) token'lerinin yatırılmasını kabul eder. CRV ödülleri kazanmak için 3crv token'leri Curve'deki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla  3crv elde etmek için likidite havuzuna yeniden eklenir.

[Convex3Crv](https://etherscan.io/address/0xeC088B98e71Ba5FFAf520c2f6A6F0153f1bf494B) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye 3crv sağlar. Ödüller toplanır, daha fazla 3crv karşılığında satılır ve vault'a yeniden yatırılır.

![](55.png)

### Curve GUSD yVault ([yvCurve-GUSD](https://etherscan.io/address/0x2a38B9B0201Ca39B17B460eD2f11e4929559071E))

[Curvegusd3CRVVoterProxy](https://etherscan.io/address/0x9C1117cf2ED3A0F4A9F069001F517c1D511c8B53) 🚀  
Bu vault, [buradaki](https://curve.fi/gusd/deposit) Curve likidite havuzuna DAI, USDC, USDT (veya bunların wrap edilmiş versiyonu: 3crv) veya HUSD sağlanarak elde edilen [gusd3CRV](https://etherscan.io/address/0xd2967f45c4f384deea880f807be904762a3dea07) token'lerinin yatırılmasını kabul eder. gusd3CRV token'leri, CRV ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla gusd3CRV elde etmek için likidite havuzuna yeniden eklenir.

[Convexgusd3CRV](https://etherscan.io/address/0x2D42CFdC6a1B03490892AdF7DC6c62AA7228E5D6) 🚀  
CRV ve CVX Ödülleri kazanmak için Convex Finance'e gusd3CRV sağlar, ödülleri hasat eder, daha fazla gusd3CRV karşılığında satılır ve vault'a geri yatırılır.

![](56.png)

### Curve Iron Bank yVault ([yvCurve-IB](https://etherscan.io/address/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7))

[StrategyCurveIBVoterProxy](https://etherscan.io/address/0x5148C3124B42e73CA4e15EEd1B304DB59E0F2AF7) 🚀  
Bu vault, [buradaki](https://www.curve.fi/ib/deposit) Curve likidite havuzuna cyDAI, cyUSDC veya cyUSDT sağlayarak elde edilen [ib3CRV](https://etherscan.io/address/0x5282a4eF67D9C33135340fB3289cc1711c13638C) token'lerinin yatırılmasını kabul eder. CRV ödülleri kazanmak için Curve Finance'deki göstergede ib3CRV stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla ib3CRV elde etmek için likidite havuzuna yeniden eklenir.

[StrategyConvexIronBank](https://etherscan.io/address/0x864F408B422B7d33416AC678b1a1A7E6fbcF5C8c) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye ib3CRV sağlar. Ödüller toplanır, daha fazla ib3CRV karşılığında satılır ve vault'a yeniden yatırılır.

![](57.png)

### v2 Curve sETH Havuzu yvault ([yveCRV](https://etherscan.io/address/0x986b4AFF588a109c09B50A03f42E4110E29D353F))

[StrategyCurveEcrvVoterProxy](https://etherscan.io/address/0xB5F6747147990c4ddCeBbd0d4ef25461a967D079#code) 🚀 [📺](https://youtu.be/V47NzWeZjjk)  
Bu vault, [buradaki](https://www.curve.fi/seth/deposit) Curve likidite havuzuna ETH veya sETH yatırılarak elde edilen  [eCRV](https://etherscan.io/address/0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c)token'lerinin mevduatlarını kabul eder. inkCRV token'leri, CRV ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla eCRV elde etmek için likidite havuzuna yeniden eklenir.

[StrategyConvexsETH](https://etherscan.io/address/0xc2fC89E79D4Fd2570dD9B413b851F38076bCd930) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye eCRV sağlar. Ödüller toplanır, daha fazla eCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](58.png)

### v2 Curve stETH Havuzu yVault ([yvsteCRV](https://etherscan.io/address/0xdcd90c7f6324cfa40d7169ef80b12031770b4325))

[StrategystETHCurve](https://etherscan.io/address/0xebfc9451d19e8dbf36aaf547855b4dc789ca793c) 🚀 [📺](https://www.youtu.be/0LyxSrAnIxU&t)  
Bu vault, [buradaki](https://www.curve.fi/seth/deposit) Curve likidite havuzuna ETH veya stETH sağlayarak elde edilen This vault accepts deposits of [steCRV](https://etherscan.io/address/0x06325440D014e39736583c165C2963BA99fAf14E) token'lerinin yatırılmasını kabul eder. CRV ve [LDO](https://www.coingecko.com/en/coins/lido-dao) ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. Ödüller WETH ile değiştirilir ve daha fazla steCRV elde etmek için likidite havuzuna yeniden verilir.

[StrategyConvexstETH](https://etherscan.io/address/0x6C0496fC55Eb4089f1Cf91A4344a2D56fAcE51e3) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye steCRV sağlar. Ödüller toplanır, daha fazla steCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](59.png)

### v2 Curve sBTC Havuzu yVault ([yvCurve-sBTC](https://etherscan.io/address/0x8414Db07a7F743dEbaFb402070AB01a4E0d2E45e))

[CurvecrvRenWSBTCVoterProxy](https://etherscan.io/address/0xdD92491B9F55620C043d55D25620a7B126451ddD) 🚀  
Bu vault, [buradaki](https://www.curve.fi/sbtc/deposit) Curve likidite havuzuna LINK veya sLINK sağlayarak elde edilen [sbtcCrv](https://etherscan.io/address/0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3) token'lerinin yatırılmasını kabul eder. sbtcCrv token'leri, CRV ödülleri kazanmak için Curve üzerindeki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla sbtcCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexcrvRenWSBTC](https://etherscan.io/address/0x7aB4DB515bf258A88Bb14f3685769a0f70B8778f) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye sbtcCrv sağlar. Ödüller toplanır, daha fazla sbtcCrv karşılığında satılır ve vault'a yeniden yatırılır.

![](60.png)

### v2 Curve renBTC havuzu yVault ([yvCurve-renBTC](https://etherscan.io/address/0x7047F90229a057C13BF847C0744D646CFb6c9E1A))

[CurvecrvRenWBTCVoterProxy](https://etherscan.io/address/0x2A94A56fBEE72ACEC39ea0269c1356a8DFbC4765) 🚀  
Bu vault, [buradaki](https://curve.fi/ren/deposit) Curve likidite havuzuna renBTC veya wBTC sağlayarak elde edilen [crvRenWBTC](https://etherscan.io/address/0x49849C98ae39Fff122806C06791Fa73784FB3675) token'lerinin yatırılmasını kabul eder. ödülleri kazanmak için curve.finans göstergesine crvRenWBTC stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla crvRenWBTC elde etmek için likidite havuzuna yeniden eklenir.

[ConvexcrvRenWBTC](https://etherscan.io/address/0x7799F476522Ebe259fc525C1A21E84f7Dd551955) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye crvRenWBTC sağlar. Ödüller toplanır, daha fazla crvRenWBTC karşılığında satılır ve vault'a yeniden yatırılır.

![](61.png)

### v2 Curve oBTC Havuzu yVault (yvCurve-oBTC)

[CurveoBTC/sbtcCRVVoterProxy](https://etherscan.io/address/0x24579b82E06aBe25C8ffC4Ee6C2dB676e57F1a32) 🚀  
Bu vault, [buradaki](https://www.curve.fi/obtc/deposit) Curve likidite havuzuna oBTC, renBTC, wBTC veya sBTC sağlayarak elde edilen [oBTC/sbtcCRV](https://etherscan.io/address/0x2fE94ea3d5d4a175184081439753DE15AeF9d614) token'lerinin mevduatını kabul eder.  oBTC/sbtcCRV jetonları, CRV ve [BOR](https://www.coingecko.com/en/coins/boringdao) kazanmak için Curve'deki göstergede stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla oBTC/sbtcCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexoBTC/sbtcCRV](https://etherscan.io/address/0xDb2D3F149270630382D4E6B4dbCd47e665D78D76) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye oBTC/sbtcCRV sağlar. Ödüller toplanır, daha fazla oBTC/sbtcCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](62.png)

### v2 Curve pBTC Havuzu yVault ([yvCurve-pBTC](https://etherscan.io/address/0x3c5DF3077BcF800640B5DAE8c91106575a4826E6))

[CurvepBTC/sbtcCRVVoterProxy](https://etherscan.io/address/0x04a6E58aAd4Ed8053Ba436B00C02A8a000639e93) 🚀  
Bu vault, [buradaki](https://www.curve.fi/pbtc/deposit) Curve likidite havuzuna pBTC, renBTC, wBTC veya sBTC sağlayarak elde edilen [pBTC/sbtcCRV](https://etherscan.io/address/0xDE5331AC4B3630f94853Ff322B66407e0D6331E8) token'lerinin yatırılmasını kabul eder. pBTC/sbtcCRV token'leri CRV ve [PNT](https://www.coingecko.com/en/coins/pnetwork) kazanmak için Curve'deki göstergede stake edilir. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla pBTC/sbtcCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexpBTC/sbtcCRV](https://etherscan.io/address/0x7b5cb4694b0A299ED2F65db7d87B286461549e84) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye pBTC/sbtcCRV sağlar. Ödüller toplanır, daha fazla pBTC/sbtcCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](63.png)

### v2 Curve tBTC Havuzu yVault ([yvCurve-tBTC](https://etherscan.io/address/0x23D3D0f1c697247d5e0a9efB37d8b0ED0C464f7f))

[Curvetbtc/sbtcCrvVoterProxy](https://etherscan.io/address/0x92D03B12E5f67b0df3B50c7c01c141Bf4BD98eA6) 🚀  
Bu vault, [buradaki](https://www.curve.fi/tbtc/deposit) Curve likidite havuzuna tBTC, renBTC, wBTC veya sBTC sağlanarak elde edilen [tBTC/sbtcCrv](https://etherscan.io/address/0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd) token'lerinin yatırılmasını kabul eder. tBTC/sbtcCrv token'leri CRV ödülleri kazanmak için Curve'deki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla tBTC/sbtcCrv elde etmek için likidite havuzuna yeniden eklenir.

[Convextbtc/sbtcCrv](https://etherscan.io/address/0x07fb6A53185E2F095253099A47F34CD410eB2A89) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye tBTC/sbtcCrv sağlar. Ödüller toplanır, daha fazla tBTC/sbtcCrv karşılığında satılır ve vault'a yeniden yatırılır.

![](64.png)

### v2 Curve FRAX Havuzu yVault ([yvCurve-FRAX](https://etherscan.io/address/0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139#code))

[CurveFRAX3CRV-fVoterProxy](https://etherscan.io/address/0xb622F17e1ba8C51b9BD760Fb37994a55b1e5CD85#code) 🚀  
Bu vault, [buradaki](https://www.curve.fi/frax/deposit) Curve likidite havuzuna FRAX, DAI, USDC, o USDT sağlanarak elde edilen [FRAX3CRV-f](https://etherscan.io/address/0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B) token'lerinin yatırılmasını kabul eder. FRAX3CRV-f token'leri, CRV ve [FXS](https://www.coingecko.com/en/coins/frax-share) ödülleri kazanmak için Curve'deki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla FRAX3CRV-f elde etmek için likidite havuzuna yeniden eklenir.

[ConvexFRAX3CRV-f](https://etherscan.io/address/0x8c312B63Bc4000f61E1C4df4868A3A1f09b31A73) 🚀  
CRV, CVX ve FXS kazanmak için Convex Finance'e FRAX3CRV-f sağlar. Ödüller toplanır, daha fazla FRAX3CRV-f karşılığında satılır ve vault'a yeniden yatırılır.

![](65.png)

### v2 Curve LUSD Havuzu yVault ([yvCurve-LUSD](https://etherscan.io/address/0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6#code))

[CurveLUSD3CRV-fVoterProxy](https://etherscan.io/address/0x21e5a745d77430568C074569C06e6c765922626a#code) 🚀  
Bu vault, [buradaki](https://www.curve.fi/lusd/deposit) Curve likidite havuzuna LUSD, DAI, USDC, veya USDT sağlayarak elde edilen [LUSD3CRV-f](https://etherscan.io/address/0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA) token'lerinin yatırılmasını kabul eder. TUSD3CRV-f token'leri, CRV ödülleri kazanmak için Curve'deki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla LUSD3CRV-f elde etmek için likidite havuzuna yeniden eklenir.

[ConvexLUSD3CRV-f](https://etherscan.io/address/0x789685963DF287337759A9FaB65d8c645a3B4cba) 🚀  
CRV ve CVX kazanmak için Convex Finance'e LUSD3CRV-f sağlar. Ödüller toplanır, daha fazla LUSD3CRV-f karşılığında satılır ve vault'a yeniden yatırılır.

![](66.png)

### v2 Curve SAAVE Havuzu yVault ([yvCurve-sAave](https://etherscan.io/address/0xb4D1Be44BfF40ad6e506edf43156577a3f8672eC#code))

[CurvesaCRVVoterProxy](https://etherscan.io/address/0xE73817de3418bB44A4FeCeBa53Aa835333C550e7#code) 🚀  
Bu vault, [buradaki](https://www.curve.fi/saave/deposit) Curve likidite havuzuna DAI veya sUSD sağlayarak elde edilen [saCRV](https://etherscan.io/address/0x02d341CcB60fAaf662bC0554d13778015d1b285C) token'lerinin yatırılmasını kabul eder.  CRV ödülleri kazanmak için saCRV Curve'deki göstergeye yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla saCRV elde etmek için likidite havuzuna yeniden eklenir.

[ConvexsaCRV](https://etherscan.io/address/0xF5636591256195414f25d19034B70A4742Fc2A2e) 🚀  
CRV ve CVX kazanmak için Convex Finance'ye saCRV sağlar. Ödüller toplanır, daha fazla saCRV karşılığında satılır ve vault'a yeniden yatırılır.

![](67.png)

### v2 Curve bBTC Hvuzu yVault ([yvCurve-bBTC](https://etherscan.io/address/0x8fA3A9ecd9EFb07A8CE90A6eb014CF3c0E3B32Ef))

[CurvebBTC/sbtcCRVVoterProxy](https://etherscan.io/address/0xABCBB67Ef2757bCCff074014658d9BD13f559632) 🚀  
Bu vault, [buradaki](https://www.curve.fi/bbtc/deposit) Curve likidite havuzuna BBTC, renBTC, wBTC veya sBTC sağlayarak elde edilen [bBTC/sbtcCrv](https://etherscan.io/address/0x410e3E86ef427e30B9235497143881f717d93c2A) token'lerinin yatırılmasını kabul eder.  CRV ödülleri kazanmak için Curve'deki göstergeye bBTC/sbtcCrv yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla bBTC/sbtcCrv elde etmek için likidite havuzuna yeniden eklenir.

[ConvexbBTC/sbtcCRV](https://etherscan.io/address/0xE9ac8D34C546CBfdAD98F9a4546Db5fE08D01bF2) 🚀
CRV ve CVX kazanmak için Convex Finance'ye bBTC/sbtcCrv sağlar. Ödüller toplanır, daha fazla bBTC/sbtcCrv karşılığında satılır ve vault'a yeniden yatırılır.

![](68.png)

### v2 Curve BUSD Havuzu yVault ([yvCurve-BUSD](https://etherscan.io/address/0x6Ede7F19df5df6EF23bD5B9CeDb651580Bdf56Ca#code))

[CurveBUSD3CRV-fVoterProxy](https://etherscan.io/address/0xD670439D889f9Eb16497d8D6EA9a5E549ae5bFF5) 🚀  
Bu vault, [buradaki](https://curve.fi/busdv2/deposit) Curve likidite havuzuna  BUSD, DAI, USDC, USDT sağlayarak elde edilen [BUSD3CRV-f](https://etherscan.io/address/0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a) token'lerinin yatırılmasını kabul eder.  CRV ödülleri kazanmak için Curve'deki göstergeye BUSD3CRV-f yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla BUSD3CRV-f elde etmek için likidite havuzuna yeniden eklenir.

[ConvexBUSD3CRV-f](https://etherscan.io/address/0xA44F947e51Ec6456A1d786F82ea5865F87Da9C30) 🚀  
CRV ve CVX kazanmak için Convex Finance'e BUSD3CRV-f sağlar. Ödüller toplanır, daha fazla BUSD3CRV-f karşılığında satılır ve vault'a yeniden yatırılır.

![](69.png)

### v2 Curve yBUSD Hvuzu yVault ([yyDAI+yUSDC+yUSDT+yBUSD](https://etherscan.io/address/0x2994529C0652D127b7842094103715ec5299bBed#code))

[CurveyDAI+yUSDC+yUSDT+yBUSDVoterProxy](https://etherscan.io/address/0xB3E1a513a2fE74EcF397dF9C0E6BCe5B57A961C8) 🚀  
Bu vault, [buradaki](https://curve.fi/busd/deposit) Curve likidite havuzuna BUSD, DAI, USDC, USDT, (veya bunların wrap edilmiş versionunu olan yBUSD, yDAI, yUSDC or yUSDT) sağlayarak elde edilen [yDAI+yUSDC+yUSDT+yBUSD](https://etherscan.io/address/0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B) token'lerinin yatırılmasını kabul eder.  CRV ödülleri kazanmak için Curve'deki göstergeye yDAI+yUSDC+yUSDT+yBUSD yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla yDAI+yUSDC+yUSDT+yBUSD elde etmek için likidite havuzuna yeniden eklenir.

[ConvexyDAI+yUSDC+yUSDT+yBUSD](https://etherscan.io/address/0x3cA0B4d7eedE71061B0bAdb4F0E86E99b0FEa613) 🚀  
CRV ve CVX kazanmak için Convex Finance'e onvex Finance'e yDAI+yUSDC+yUSDT+yTUSD sağlar. Ödüller toplanır, daha fazla yDAI+yUSDC+yUSDT+yTUSD karşılığında satılır ve vault'a yeniden yatırılır.

![](70.png)

### v2 Curve Compound Havuzu yVault ([yvCurve-Compound](https://etherscan.io/address/0xD6Ea40597Be05c201845c0bFd2e96A60bACde267))

[CurvecDAI+cUSDCVoterProxy](https://etherscan.io/address/0xdDAAc8B5Dd65d079b6572e43890BDD8d95bD5cc3) 🚀  
Bu vault, [buradaki](https://curve.fi/compound/deposit) Curve likidite havuzuna  DAI veya USDC (veya bunların Compound'dan wrap edilmiş versionu ) sağlayarak elde edilen [cDAI+cUSDC](https://etherscan.io/address/0x845838df265dcd2c412a1dc9e959c7d08537f8a2) token'lerinin yatırılmasını kabul eder.  CRV ödülleri kazanmak için Curve'deki göstergeye cDAI+cUSDC yatırılır. Ödüller, temel token'lerden birini almak için takas edilir ve daha fazla cDAI+cUSDC elde etmek için likidite havuzuna yeniden eklenir.

[ConvexcDAI+cUSDC](https://etherscan.io/address/0x2b0b941d98848d6c9C729d944E3B1BD9C00A5529) 🚀  
CRV ve CVX kazanmak için Convex Finance'e cDAI+cUSDC sağlar. Ödüller toplanır, daha fazla cDAI+cUSDC karşılığında satılır ve vault'a yeniden yatırılır.

## v1 Curve Finance Strateji Vault'ları 🌈

v1 Curve yVault'lar, Curve Finance'deki likidite havuzlarına sağlanarak elde edilen likidite havuzu token'leri mevduatını kabul eder. Bu vault'lara girmek için, esas token'leri Curve Finance'deki ilgili havuzlarına yatırmanız gerekir. [📺](https://youtu.be/V47NzWeZjjk)

**Tüm v1 Curve yVault'lar, v2 Curve yVaults'a taşındı. Lütfen paranızı bizim zap veya çekme yoluyla taşıyın.**

## v1 Vault'ları 🏦

Bu v1 yVault'lar, tek varlıklı, zamana göre test edilmiş stratejileri çalıştırır.

![](54.png)

### v1 TrueUSD yVault ([yTUSD](https://etherscan.io/address/0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a#code))

[StrategyTUSDypool](https://etherscan.io/address/0xe3a711987612BFD1DAFa076506f3793c78D81558#code)  
Bu vault, TUSD'yi Curve'deki YPool'a [buradan](https://www.curve.fi/iearn/deposit) yatırır. yCRV daha sonra Curve YPool yVault'a yatırılır.

## Emekli Kasaları 💤

Bu vault'lar artık etkin değil veya daha yeni bir sürüme geçme ve aşamalı olarak kullanımdan kaldırılma sürecinde. Stratejiler duraklatılmış, mevduatlar kapatılmış veya web sitesinden tamamen kaldırılmış olabilir.

### v2 YFI yVault ([yvYFI](https://etherscan.io/address/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1#readContract)) — v0.3.2

⚠️ **This vault is being migrated to a newer version.** It is recommended you migrate your balance to the v2 YFI yVault — v0.4.2 to continue earning the best yield.

### v2 DAI yVault ([yvDAI](https://etherscan.io/address/0x19d3364a399d251e894ac732651be8b0e4e85001))[📺](https://youtu.be/4kHgQuTx6_U) — v0.3.0

⚠️ **Bu vault daha yeni bir sürüme taşınıyor.** En iyi verimi elde etmeye devam etmek için bakiyenizi v2 DAI yVault — v0.4.2'ye taşımanız önerilir.

### v2 WBTC yVault ([yvWBTC](https://etherscan.io/address/0xcb550a6d4c8e3517a939bc79d0c7093eb7cf56b5)) — 0xcb550

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 WBTC yVault'a taşıyın.

### v2 WETH yVault ([yvWETH](https://etherscan.io/address/0xa9fE4601811213c340e850ea305481afF02f5b28)) — 0xa9fe4 — v0.3.2

⚠️ **Bu vault daha yeni bir sürüme taşınıyor.** En iyi verimi elde etmeye devam etmek için bakiyenizi v2 WETH yVault ' v0.4.2'ye taşımanız önerilir.

### v2 HEGIC yVault ([yvHEGIC](https://etherscan.io/address/0xe11ba472f74869176652c35d30db89854b5ae84d))

⚠️ **Bu vault artık aktif değil.** Lütfen paranızı çekin.

### v1 TrueUSD yVault ([yTUSD](https://etherscan.io/address/0x37d19d1c4E1fa9DC47bD1eA12f742a0887eDa74a#code))

⚠️ **This vault is no longer active.** This vault is inactive and will no longer generate any yield. The v1 TrueUSD yVault has been deprecated for the v2 TrueUSD yVault. Please migrate your funds via our zap or withdrawal.

### v1 aLINK yVault ([yaLINK](https://etherscan.io/address/0x29E240CFD7946BA20895a7a02eDb25C210f9f324#code))

⚠️ **Bu vault artık aktif değil.** Lütfen paranızı çekin.

### v1 YFI yVault ([yvYFI](https://etherscan.io/address/0xBA2E7Fed597fd0E3e70f5130BcDbbFE06bB94fe1#code))

⚠️ **YIP-56 ile etkin değil: Geri Al ve Yapılandır.** Lütfen paranızı bizim zap veya vault'dan çekme yoluyla taşıyın. Bu vault artık getiri sağlamaz ve bu vault'dayken YFI'niz ile oy kullanamazsınız.

### v1 USDT yVault ([yUSDT](https://etherscan.io/address/0x2f08119C6f07c006695E079AAFc638b8789FAf18#code))

⚠️ **Bu vault artık aktif değil.** Bu vault devre dışıdır ve artık herhangi bir getiri sağlamayacaktır. v1 USDT yVault, v2 USDT yVault için kullanımdan kaldırıldı. Lütfen paranızı bizim zap veya çekme yoluyla taşıyın.

### v1 USDC yVault ([yUSDC](https://etherscan.io/address/0x597aD1e0c13Bfe8025993D9e79C69E1c0233522e#code))

⚠️ **Bu vault artık aktif değil.** Bu vault devre dışıdır ve artık herhangi bir getiri sağlamayacaktır. v1 USDC yVault, v2 USDC yVault için kullanımdan kaldırıldı. Lütfen paranızı bizim zap veya çekme yoluyla taşıyın.

### v1 LINK yVault ([yLINK](https://etherscan.io/address/0x881b06da56BB5675c54E4Ed311c21E54C5025298#code))

⚠️ **Bu vault artık aktif değil.** v1 LINK yVault, v2 LINK yVault için kullanımdan kaldırılmıştır. Lütfen paranızı bizim zap veya çekme yoluyla taşıyın.

### v1 Ethereum yVault ([yvETH](https://etherscan.io/address/0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7#code))

⚠️ **Bu vault artık aktif değil.** v1 Ethereum yVault, v2 Ethereum yVault için kullanımdan kaldırılmıştır. Lütfen paranızı bizim zap veya çekme yoluyla taşıyın.

### v1 WETH yVault ([yvWETH](https://etherscan.io/address/0xe1237aA7f535b0CC33Fd973D66cBf830354D16c7#code))

⚠️ **Bu vault artık aktif değil.** Bu vault devre dışıdır ve artık herhangi bir getiri sağlamayacaktır. v1 WETH yVault, v2 WETH yVault için kullanımdan kaldırıldı. Lütfen paranızı bizim zap veya çekme yoluyla taşıyın.

### v1 DAI yVault ([yDAI](https://etherscan.io/address/0xACd43E627e64355f1861cEC6d3a6688B31a6F952#code))

⚠️ **Bu vault artık aktif değil.** Bu vault devre dışıdır ve artık herhangi bir getiri sağlamayacaktır. v1 DAI yVault, v2 DAI yVault için kullanımdan kaldırıldı. Lütfen paranızı bizim zap veya çekme yoluyla taşıyın.

### v1 mStable USD yVault ([yvmUSD](https://etherscan.io/address/0xE0db48B4F71752C4bEf16De1DBD042B82976b8C7#code))

⚠️ **Bu kasa artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve mUSD havuzuna  yVault'a taşıyın.

### v1 Curve hBTC Havuzu yVault ([yvhCRV](https://etherscan.io/address/0x46AFc2dfBd1ea0c0760CAD8262A5838e803A37e5#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve hBTC Hvuzu yVault'a taşıyın.

### v1 Curve USDP yVault ([yvusdp3CRV](https://etherscan.io/address/0x1B5eb1173D2Bf770e50F10410C9a96F7a8eB6e75))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve USDP yVault'a taşıyın.

### v1 Curve AnkrETH Havuzu yVault ([yvankrCRV](https://etherscan.io/address/0xE625F5923303f1CE7A43ACFEFd11fd12f30DbcA4#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve AnkrETH Havuzu yVault'a taşıyın.

### v1 Curve HUSD Havuzu yVault ([yvhusd3CRV](https://etherscan.io/address/0x39546945695DCb1c037C836925B355262f551f55#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve HUSD Havuzu yVault'a taşıyın.

### v1 Curve BUSD Havuzu yVault ([yvcrvBUSD](https://etherscan.io/address/0x2994529C0652D127b7842094103715ec5299bBed#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve BUSD Havuzu yVault'a taşıyın.

### v1 Curve USDN Havuzu yVault ([yvusdn3CRV](https://etherscan.io/address/0xFe39Ce91437C76178665D64d7a2694B0f6f17fE3#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve USDN Havuzu yVault'a taşıyın.

### v1 Curve EURS Havuzu yVault ([yveursCRV](https://etherscan.io/address/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve EURS Havuzu yVault'a taşıyın.

### v1 Curve sUSD Havuzu yVault ([yvcrvSUSD](https://etherscan.io/address/0x5533ed0a3b83F70c3c4a1f69Ef5546D3D4713E44#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya  v2 Curve sUSD Havuzu yVault'a taşıyın.

### v1 Curve AAVE Havuzu yVault ([yva3CRV](https://etherscan.io/address/0x03403154afc09Ce8e44C3B185C82C6aD5f86b9ab#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve AAVE Havuzu yVault'a taşıyın.

### v1 Curve 3pool yVault ([yv3Crv](https://etherscan.io/address/0x9cA85572E6A3EbF24dEDd195623F188735A5179f#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve 3Havuz yVault'a taşıyın.

### v1 Curve LINK yVault ([yvlinkCRV](https://etherscan.io/address/0x96Ea6AF74Af09522fCB4c28C269C26F59a31ced6))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve LINK Havuzu yVault'a taşıyın.

### v1 Curve mUSD Havuzu yVault ([yvmusd3Crv](https://etherscan.io/address/0x0FCDAeDFb8A7DfDa2e9838564c5A1665d856AFDF#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve mUSD Havuzu yVault'a taşıyın.

### v1 Curve UST Havuzu yVault ([yvust3CRV](https://etherscan.io/address/0xF6C9E9AF314982A4b38366f4AbfAa00595C5A6fC#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve UST Havuzu yVault'a taşıyın.

### v1 Curve YHavuzu yVault ([yUSD](https://etherscan.io/address/0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veyav2 Curve Y Havuzu yVault'a taşıyın.

### v1 Curve GUSD Havuzu yVault ([yvgusd3CRV](https://etherscan.io/address/0xcC7E70A958917cCe67B4B87a8C30E6297451aE98#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve GUSD yVault'a taşıyın.

### v1 Curve DUSD Havuzu yVault ([yvdusd3CRV](https://etherscan.io/address/0x8e6741b456a074F0Bc45B8b82A755d4aF7E965dF#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve DUSD Havuzu yVault'a taşıyın.

### v1 Curve Compound Havuzu yVault ([yvcDAI+cUSDC](https://etherscan.io/address/0x629c759D1E83eFbF63d84eb3868B564d9521C129#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve Compound Havuzu yVault'a taşıyın.

### v1 Curve sBTC Havuzu yVault ([ycrvRenWSBTC](https://etherscan.io/address/0x7Ff566E1d69DEfF32a7b244aE7276b9f90e9D0f6))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve sBTC Havuzu yVault'a taşıyın.

### v1 Curve renBTC Havuzu yVault ([yvcrvRenWBTC](https://etherscan.io/address/0x5334e150B938dd2b6bd040D9c4a03Cff0cED3765#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin v2 Curve renBTC Havuzu yVault'a taşıyın.

### v1 Curve SAAVE Havuzu yVault ([yvsaCRV](https://etherscan.io/address/0xBacB69571323575C6a5A3b4F9EEde1DC7D31FBc1#code))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve SAAVE Havuzu yVault'a taşıyın.

### v1 Curve bBTC Havuzu yVault ([ycrvbBTC](https://etherscan.io/address/0xA8B1Cb4ed612ee179BDeA16CCa6Ba596321AE52D))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veyav2 Curve bBTC Havuzu yVault'a taşıyın.

### v1 Curve pBTC Havuzu yVault ([ycrvpBTC](https://etherscan.io/address/0x123964EbE096A920dae00Fb795FFBfA0c9Ff4675))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve pBTC Havuzu yVault'a taşıyın.

### v1 Curve tBTC Havuzu yVault ([ycrvtBTC](https://etherscan.io/address/0x07FB4756f67bD46B748b16119E802F1f880fb2CC))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve tBTC Havuzu yVault'a taşıyın.

### v1 Curve oBTC havuzu yVault ([ycrvoBTC](https://etherscan.io/address/0x7F83935EcFe4729c4Ea592Ab2bC1A32588409797))

⚠️ **Bu vault artık aktif değil.** Getiri kazanmaya devam etmek için bakiyenizi çekin veya v2 Curve oBTC Havuzu yVault'a taşıyın.

## Curve'yi Anlamak 🚀 Çarpanları Artırmak

Örnek olarak likidite sağlayıcılar token'lerini Curve'deki göstergeye stake ederlerse crvCOMP havuzunu kullanarak, işlem ücretlerinde yaklaşık %12,82 YGY ve ek olarak %24,72 YGY (bu yayın tarihi itibariyle) karı CRV ödülleri şeklinde kazanırlar.

Mevduat sahipleri, CRV'yi oylama emanet modülüne kilitleyerek kazanılan CRV ödüllerini maksimum **2,5x** ile artırabilir. Artışın bu boyutu, seçmen emanetinde kilitli CRV miktarına ve likidite havuzundaki mevduatın boyutuna bağlıdır, ancak bu [hesap makinesi](https://dao.curve.fi/minter/calc) potansiyel artış çarpanlarının modellenmesinde faydalıdır. crvCOMP havuzunun maksimum artışı, aşağıda gösterilen CRV ödülleri biçiminde ek olarak %61,81 YGY sağlar.

![](71.png)

Yearn, CRV ödülleri kazanmak için Curve likidite sağlayıcı token'ini göstergeye yatırır. Bu ödüllerin %10'u, Curve stratejileriyle tüm yVault'ların ödüllerini artırmak için yveCRV-DAO vault'umuzda (yukarıda açıklanmıştır) kilitlenir.

Curve artırma çarpanları hakkında daha fazla bilgi için lütfen Curve'nin bu konuyla ilgili belgelerine — [buradan](https://hackmd.io/CawF8dfsSk2OlN7-ubjipQ) bakın.
