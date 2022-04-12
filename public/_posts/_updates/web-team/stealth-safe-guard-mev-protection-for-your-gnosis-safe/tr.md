---
layout: post
title: "Stealth Safe Guard: Gnosis Safe'iniz için MEV Koruması"
categories: [Updates]
image:
  src: ./cover.jpg
  width: 1256
  height: 1024
author: "0x71B1"
date: "2021-11-16"
translator: Dastronom
---

![](./cover.png?w=1000&h=500)

orjinal makale: [Yearn.Finance Engineering](https://mirror.xyz/yearn-finance-engineering.eth)

## Giriş

Gnosis Safe mükemmel bir üründür, Ethereum genelinde protokol ekibine çoklu imza için oybirliğiyle seçim hakkı verir. Ancak, MEV koruması söz konusu olduğunda, sahipler tarafından önemsenmeden, gizlenen birkaç tehdit vardır:

1. 3. taraf Executor tehdidi
2. Genel mempool tehdidi
3. Uncled blok tehdidi

Günlük olarak gerçekleşen büyük miktarda takas (bazı günler 1.000.000 doların üzerinde) göz önüne alındığında, Yearn gibi protokoller özellikle MEV için büyük hedeflerdir. Şimdiye kadar, bu tehditlere karşı korunmak ve MEV fırsatlarından vazgeçmemek için insan düzeyinde doğru süreçleri uygulamak bir mücadele oldu.

Bu gönderi, kasanızla etkileşimi savunmasız hale getirebilecek bu 3 tehdidin tümünü çözmeyi amaçlayan yeni geliştirilmiş bir koruma olan "**Stealth Safe Guard**"ı sunar.

## 3. Taraf Executor Tehdidi 

### Problem tanımı:

Gnosis Safe işlemleri, resmi gnosis API ve UI aracılığıyla herkese açık olan gerekli imzalara sahip olan herkes tarafından yürütülebilir. Bu, kötü niyetli bir aktörün multisig tx yürütmesinden önce ve sonra özel işlemler ekleyebileceği ve MEV'sini alabileceği bir saldırı vektörü açar.

### Çözüm yolu: 

Gnosis Safe >=1.3.0, kasanın yalnızca kullanıcı tanımlı güvenilir adreslerin güvenli işlemleri yürütmesine izin verecek şekilde ayarlanabilen bir koruma sözleşmesi atamasına izin vererek bunu çözer. Daha fazla ayrıntıya [buradan](https://blog.gnosis.pm/gnosis-safe-mev-how-to-mitigate-it-347e13535e34) ulaşabilirsiniz.

[StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol)'da bu, [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol)'dır.

## Genel Mempool Tehdidi

### Problem tanımı:

Mempool üzerinden güvenli işlemler yürütmek, herkese açık yukarıda belirtilen tehdidin aynısını açar, herkes tx'i görebilir ve MEV'yi ondan alacak bir flashbot paketini hızlı bir şekilde oluşturabilir. Amir

### Çözüm

[StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol), yürütücülerin [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol) sözleşmesine uymasını gerektirir, tx'i gören ve gizli hash'ini bildiren herkese bağlı bir ödül ekleyerek tx'lerin genel mempool'a girmesine karşı koruma sağlayan tx, daha sonra yürütmez ve cezayı uygulayıcıdan alır. Tenderly ekibi sayesinde, bu tür tx'leri arayan ve bunları hemen rapor edecek ve madenciye tam yürütme cezasını ödeyecek bir dizi otomatik komut dosyasına sahibiz.

## Uncled blok tehdidi

### Problem tanımı:

Yukarıdakilerin tümü doğru yapılsa bile, tx'imizin yanlış ellere geçmesi için hala bir yol var. Bunun olmasının en yaygın yolu, gizli tx'imizin YALNIZCA uncle olmayan bir bloğa dahil edilmesidir. Bu, bir saldırganın tx'imizi açık olmayan bloktan almasına ve onu bir sonraki bloğa dahil etmesine izin verir.

### Çözüm

Bunun olmasını engellemenin kolay bir yolu var, bu da tx'imizin yalnızca belirli bir blok numarasında başarılı olmasınndan geçer. **StealthRelayer**, yürütücünün yürütme bağımsız değişkenlerinde bir hedef blok numarası göndermesini gerektirecek şekilde ayarlanabilir. Bunu flashbot'larla yapmak, geri döndürülen tx'leri önlemek için paket yapılandırmasından ve akıllı sözleşmeden bloğu hedeflememize de olanak tanır. Flashbot'lar tarafından desteklenmeyen ağlar (FTM gibi) için blok koruması devre dışı bırakılabilir.

## Açıklama

### Yararlı Linkler:

- [gnosis safe guard nedir?](https://help.gnosis-safe.io/en/articles/5496893-add-a-transaction-guard)
- [bazı resmi koruma örneği sözleşmeleri](https://github.com/gnosis/safe-contracts/tree/main/contracts/examples/guards)

**StealthSafeGuard**, çoklu imza işlemlerinin üçüncü bir tarafın yürütme riski olmadan kullanıcı arayüzünde güvenli bir şekilde imzalanmasını sağlayan bir Gnosis güvenli koruma sözleşmesidir, ayrıca sıkışmayı önlemek için özel bir mempool + [bonded-stealth-txs](https://github.com/lbertenasco/bonded-stealth-tx) kullanarak saldırıya uğramamak ve/veya uncle-bandit saldırısına uğramamak için korumayı engeller.

Bu, **StealthSafeGuard** üzerindeki "msg.sender"ın bizim **StealthRelayer** ve "StealthRelayer.caller()"imizin "StealthSafeGuard.executors()" üzerinde bulunmasını zorunlu kılarak elde edilir.

## Dağıtım ve Kurulum

### Koruma

**StealthSafeGuard** aşağıdaki komut dosyasıyla kolayca dağıtılabilir: [/guard/00-stealth-safe-guard-deploy.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/00-stealth-safe-guard-deploy.ts)

[utils/contracts.ts](https://github.com/yearn/strategies-keep3r/blob/main/utils/contracts.ts#L73) dosyasında `StealthRelayer` adresinizi doğru şekilde ayarlamayı ve doğru şekilde ayarlamayı unutmayın. `msg.sender` `Owner` rolünü alacağından, `Manager` rolü olarak atanacak olan güvenli adresinizi girin.

### Executor

Güvenli işlemleri yürütmek için kullanacağınız hesapların, **StealthRelayer** aracılığıyla düzgün bir şekilde yürütülebilmesi için bazı ETH'leri [StealthVault](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthVault.sol)'a bağlamak da dahil olmak üzere birkaç işlem gerçekleştirmesi gerekecektir. Bunun yanı sıra, **StealthSafeGuard**'ın *Governor* veya *Manager*'nin bu hesapları executor olarak eklemesi gerekir. Bunun nasıl gerçekleştirileceğini sözleşme etkileşimlerini kontrol ederek öğrenebiliriz. *Executor'un* özel anahtarı aşağıdaki komut dosyalarında da kullanılacaktır.

### Sözleşme etkileşimleri

- *Executor*'un `bond(1 ether)` çağırması gerekiyor
- Executor tahvillerini ve StealthHash'i doğrulamak için **StealthRelayer** tarafından kullanılır
- *Executor*'un bir `StealthVault.job` olarak `StealthRelayer`'ı etkinleştirmesi gerekiyor

### StealthRelayer

- *Governor* `.addJob(GnosisSafeAddress)`'i çağırmalı
- *Governor* `setForceBlockProtection(bool)` çağırarak blok korumasını devre dışı bırakabilir
    - flashbot'ların desteklenmediği zincirler için blok koruması devre dışı bırakılmalıdır
- *Executor* daha sonra bir flashbot paketi kullanarak `execute(GnosisSafeAddress, data, stealthHash, blockNumber)` çağırabilir
    - veya flashbot olmayan zincirlerde `executeWithoutBlockProtection(GnosisSafeAddress, data, stealthHash)`

### GnosisSafe

- Versiyon `≥1.3.0` olmalıdır
- Safe kendi kendine yürütmeli `setGuard(StealthSafeGuard)`

### StealthSafeGuard

- *Governor* `addExecutor(executor)` çağırmalıdır
- *Governor*, brick olması durumunda tüm koruma kontrollerini devre dışı bırakmak için `setOverrideGuardChecks(true)` çağırabilir

## Sorun Giderme ve Korumalar

Vault'a bir koruma eklemek son derece hassas bir işlemdir, çünkü kasanızı tamamen kırabilir kapatabilir (kasanızdan kilitlenir ve sahip olduğu tüm varlıkları kaybedersiniz). *Yeni kullanıcıları, alışmaları için bunu yepyeni bir kasada denemeye teşvik ediyoruz.*

**StealthSafeGuard**, kasanızdan asla kilitlenmemenizi sağlayan birkaç korumaya sahiptir.

1. **StealthSafeGuard**'ın sahibi, koruduğu kasa ile aynı OLMAMALIDIR
     1. bunun yerine kasayı manager rolü olarak ayarlamalısınız.
        1. Owner olarak `StealthSafeGuard.setPendingManager(safe)` (ikinci kasa)
        2. Ana kasa olarak `StealthSafeGuard.acceptManager()`
    2. **StealthSafeGuard** *.owner*, bir sorun olması durumunda tek amacı ana kasayı kurtarmak olan ayrı bir kasa olmalıdır.
2. Hem *Owner* hem de *Manager*, bir bayrağı değiştirerek TÜM kontrolleri (**StealthRelayer** ve *Executor* gereksinimleri) devre dışı bırakabilir
    1. Owner olarak `StealthSafeGuard.setOverrideGuardChecks(true)` (ikinci kasa)
    2. Owner olarak `StealthSafeGuard.setOverrideGuardChecks(false)` (ikinci kasa)
        1. bayrağın manuel olarak false olarak ayarlanması gerektiğini unutmayın
3. Hem *Owner* hem de *Manager* arayarak **StealthRelayer**'ı değiştirebilir `StealthSafeGuard.setStealthRelayer(address _newStealthRelayer)`
4. Hem *Owner* hem de *Manager* yürütücü adresleri ekleyebilir ve kaldırabilir
    1. `StealthSafeGuard.addExecutor(address _executor)`
    2. `StealthSafeGuard.removeExecutor(address _executor)`

## Otomasyon

Yürütme, her X dakikada bir bir komut dosyası çalıştırılarak otomatikleştirilebilir:

1. Sıraya alınmış tx'ler için gnosis güvenli API'sini sorgular ve onaylar
2. güvenli tx üretir
3. imzaları tx'e ekler ve kodlar
4. güvenli yürütme ham işlemini oluşturur
5. gaz ve ağ ayrıntılarını yakalar
6. gizli karma oluşturur ve hedef blok numarası atar
7. yürütücü EOA ile imzalar
8. paketi oluşturur, simüle eder ve flashbotlara yayınlar
9. paket bir bloğa dahil edilene kadar 5. ve 8. döngüler

Şurada bir örnek görebilirsiniz: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

## Manuel İmzalama ve Yürütme

Aşağıdaki komut sizden *Güvenli adres* ve *safeTxHash* bilgilerini girmenizi ve ardından imzalı mesajın çıktısını almanızı isteyecektir.

`npx hardhat run` [scripts/guard/02-stealth-relayer-guard-sign.ts](https://github.com/yearn/strategies-keep3r/blob/main/scripts/guard/02-stealth-relayer-guard-sign.ts) `--network rinkeby`

İmzalı mesaj şurada "offchainSignatures"a eklenebilir: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

Ardından, ilk kuyruğa alınmış güvenli Tx'i almak için komut dosyasını çalıştırabilirsiniz ve bu, gnosis API'sinden imzaları alır ve işleme 'offchainSignatures'ı ekler ve gizli aktarıcı aracılığıyla flashbot'lara (ana ağdaysa) gönderir. `npx hardhat run scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts --network rinkeby`

## İyileştirmeler

- gaz kullanımını azaltmak
- başarı yürütme ve hash+nonce gibi faydalı olayları eklemek

## Kredi

**StealthSafeGuard**, Flashbots, Gnosis ve Yearn ekiplerinin çabaları sayesinde var olmuştur.

- Gnosis takımı koruma sistemini kendi [safe-contracts 1.3.0 release](https://github.com/gnosis/safe-contracts/releases/tag/v1.3.0)'ne ekledi
- Flashbots ekibi, gizli-tx'in güvenli ve doğru bir şekilde yürütülebileceği temeli sağlar

### Benzer çözümler oluşturmakla ilgileniyor musunuz?

💡 [Yearn'de bizimle işbirliği yap!](https://yearnfinance.notion.site/)

### Çoklu oturumunuz için buna sahip olmakla ilgileniyor, ancak nasıl yapılacağından emin değil misiniz?

*git gud. *jk, [discord](https://discord.yearn.finance/) veya [telegram](https://t.me/yearnfinance) aracılığıyla herhangi bir yearn moderatörüyle iletişime geçebilir ve kendi gizli uzmanımız [skeletor_spaceman](https://t.me/skeletor_spaceman) veya diğer yMechanic ekip üyelerimizden herhangi biriyle telegram'da konuşmayı isteyebilirsiniz, size rehberlik etmekten memnuniyet duyarız.
