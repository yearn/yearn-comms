---
title:  "Yearn Allowlist"
image:
  src: ./cover.jpg
  width: 900
  height: 429
date: '2022-05-06'
author: Weaver
translator: Dastronom
---

![](cover.jpg?w=900&h=429)

# Genel bakış

Yearn web sitesini daha da güvenli hale getirmek için yakın zamanda Allowlist Listesi olarak adlandırılan yeni bir özellik tanıtıldı. Özünde, web sitesi/SDK aracılığıyla yapılan tüm işlemlerin, web sitesinin üretmesi mümkün olan tüm geçerli çağrı verilerinin kaydını tutan zincir üstü bir sözleşmeye göre doğrulanmasına izin verir.

Bu, web sitesinin, ister Zapper/0x'in API'si, ister Yearn'in kendi API'si aracılığıyla olsun, web sitesine verilerin sağlandığı çeşitli man-in-the-middle saldırılarına açık hale gelmesini önler. Örneğin, Yearn'in API'si, kullanıcıların para yatırmaya çalışırken bunlardan birini onaylaması amacıyla kötü amaçlı adreslere sahip vault'ların bir listesini döndürürse de, Allowlist işlemin yapılmasını engeller.

Diğer protokolleri de güvenliklerini artırmak için kendi Allowlist'inizden yararlanmaya davet ediyoruz. Kendi Allowlist'inizi oluşturmaya yönelik talimatlar daha ayrıntılı olarak açıklanmıştır.

# Nasıl işliyor?

Bir vault'a para yatırmayı onaylayan bir işlem için çağrı verilerini doğrulama örneğini ele alalım.

Allowlist(izin Listesi) sözleşmesinde, doğrulanan yapılar olan bir koşullar listesi vardır.

İşte bir vault jetonunu onaylamak için olanı (JSON biçiminde):

![](image2.jpg?w=900&h=292)

-   `id`: Koşulun tanımlayıcısı, koşulun protokol sahibi tarafından güncellenmesine veya kaldırılmasına izin verir
-   `implementationId`: Uygulama sözleşmesinin tanımlayıcısı. Uygulama sözleşmeleri, koşulu doğrulama mantığına sahiptir. Her Allowlist'i, doğrulamak için birden fazla uygulama sözleşmesi olabilir. Örneğin, Yearn Allowlist'de vault'larla ilgili her şey için bir uygulama ve daha deneysel ürünlerle web sitesinin laboratuvarlar bölümü için bir uygulama var.
-   `methodName`: İzin verilen işlev adı
-   `paramTypes`: Fonksiyonun parametreleri
-   `requirements`: Doğrulamanın nasıl yürütüleceği hakkında bilgi

İki tür gereksinim olabilir:  `target`  ve  `param`.

-   İlk gereksinim argümanı  `target`  ise, sonraki argüman, işlemin hedefini doğrulamak için uygulamada çağrılması gereken fonksiyon olacaktır.
-   İlk gereksinim argümanı  `param`  ise, aynı şekilde doğrulama için kullanılacak fonksiyon daha sonra gelir ve son argüman, doğrulama sırasında çağrı verilerinden çıkarılabilmesi için parametrenin konumudur.

İşte doğrulayacağımız Curve RocketPool Vault'u onaylayan işlem

-   target:`0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08`
-   calldata:`0x095ea7b30000000000000000000000005c0a86a32c129538d62c106eb8115a8b02358d570000000000000000000000000000000000c097ce7bc90715b34b9f1000000000`

Bunu doğrulamak için 3 adım vardır:

1. Önce [**yöntem seçeriz**](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L72)'yi kontrol ederiz. Koşuldan, bir onay işlemi için yöntem seçicinin olmasını beklediğimiz şeyi üretiriz. İşlev adı ve koşulda saklanan parametrelere sahip olduğumuz için işlevi yeniden oluşturabilir ve `bytes4(keccak256(bytes(reconstructedMethodSignature)))` alabiliriz. Ardından, web sitesi tarafından geçerli bir işlevin çağrıldığından emin olmak için bunu çağrı verilerinin ilk 4 baytıyla karşılaştırabiliriz. `approve(address,uint256)`nın 4 bayt imzası `0x095ea7b3` olduğundan calldata'nın bunun için geçerli olduğunu görebiliriz.
2. Ardından [**hedefi doğrularız**](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L50). Bunu yapmak için, sağlanan doğrulamayı kullanarak koşulun uygulama sözleşmesine bir çağrı yaparız, bu durumda `isVaultUnderlyingToken`. Her zaman bir adresi doğruladığımızı biliyoruz, bu nedenle bu işlevin tek bir adres parametresine sahip olduğunu varsayabiliriz. Ayrıca bu fonksiyonun bir  `bool`  döndürdüğü varsayılır. Döndürülen değer false ise, işlem geçerli değildir. Uygulama sözleşmesinde, gerçek doğrulamayı gerçekleştirmek için Yearn'in vault kayıt defterini çağırmaya devam eden  `isVaultUnderlyingToken`  işlevi vardır.
3. Ardından [**tüm parametre koşullarını doğrularız**](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L95), birden fazla olabilir veya bağımsız değişkeni olmayan bir işlev durumunda hiçbiri olabilir. Bu durumda, 0 konumundaki parametrenin uygulama sözleşmesinde `isVault`  işlevini karşılayıp karşılamadığını kontrol etmek istiyoruz, bu şekilde kullanıcının geçerli bir vault'a para yatırdığını bileceğiz. Yine, uygulamada, çağrı verilerinden kodu çözülen geçerli bir vault'u oluşturmak için kontrol etmek için Yearn vault'u kayıt defterini hedef.

Allowlist'e gönderilen bir işlem, her koşula göre doğrulanır, eğer bunlardan herhangi biri işlemin geçerli olduğunu onaylarsa, gönderilmek üzere olan işlemin, ancak web sitesi ile etkileşimde bulunurken kullanıcıya verildiğinden emin olabiliriz, kötü amaçlı değildir ve yürütülmesi güvenlidir.

# Her bir web sitesinin Allowlist'i kim kontrol ediyor?

Allowlist, her web sitesinin kendine ait bir örneğine sahip olacağı şekilde tasarlanmıştır, ancak her Allowlist'i her web sitesine bağlamak için zincirleme bir yola ihtiyacımız var. Bunu yapmak için her domain'in - [https://docs.ens.domains/dns-registrar-guide](https://docs.ens.domains/dns-registrar-guide) sahibini doğrulamak için ENS/DNSSEC kullanıyoruz. Bu şekilde, Allowlist kontrolünün etki alanının kontrolüyle bağlantılı olduğunu biliyoruz ve bu tehlikeye atılmadığı sürece belirli bir web sitesi için doğru Allowlist'i getirilebilir.

Allowlist'in güvenliği, uygulama sözleşmelerine de bağlıdır. Bunlar kolayca değiştirilebilseydi veya yanlış uygulansaydı, Allowlist'in güvenliği tehlikeye girerdi. Bu sözleşmeleri değişmez yapmak en iyisidir veya güncellenebilir olmaları gerekiyorsa, protokolün çoklu imzasına sahip olmak tercih edilir.

# Protokol olarak kayıdetmek

Protokollerin kendi Allowlist'ini oluşturmaları ve kaydetmeleri için aşağıdaki adımları uygulayabilirler:

-   [**Allowlist Kayıt Sözleşmesi**](https://etherscan.io/address/0xb39c4EF6c7602f1888E3f3347f63F26c158c0336) üzerindeki `registerProtocol` kullanarak Allowlist kaydını başlatın. Bu, protokolün etki alanı için yeni bir Allowlist'i dağıtacaktır. Not: Kayda başlayan hesabın, ENS aracılığıyla alan adı sahibi olarak kaydedilmesi gerekecektir.
-   Hedefleri/parametreleri doğrulamak için kullanılabilecek özel uygulama sözleşmelerini devreye alın
-   `setImplementation`  işlevini kullanarak bu uygulama sözleşmelerini Allowlist'e bağlayın.
-   Web sitesi aracılığıyla oluşturulan tüm işlemleri anlayın ve ilgili koşulları oluşturun.  `addConditions`  kullanarak Allowlist'de bu koşulları ayarlayın

Örnek bir dağıtım betiği [burada](https://github.com/yearn/yearn-allowlist/blob/main/scripts/chains/250/deploy.py) bulunabilir

# Gelecekteki iyileştirmeler

Ayrıntılı olarak belirtildiği gibi, bu özellik, API'lerden gelen veriler gibi, kullanıcıların gönderdiği işlemlerin oluşturulduğu verilerin manipülasyonunu azaltır. Ancak, web sitesinin kaynak kodu ele geçirilirse veya kötü amaçlı kod enjekte edilirse, bu kontroller basitçe göz ardı edilebilir ve kullanıcıya sunmak için kötü niyetli işlemler oluşturulabilir.

Bunu önlemek için Allowlist bir cüzdana (metamask gibi) entegre edilebilir; bu, işlemin kaynaklandığı alan adı için getirilen Allowlist'nin karşı gönderilmek üzere olan tüm işlemleri doğrular. Bu, front-end kaynak kodunun manipülasyonunu bir saldırı vektörü olmaktan tamamen kaldıracak ve onu uygulayan herhangi bir cüzdan için rekabet avantajı sağlayacaktır. Allowlist'in Kaydı, aşağıdaki işleve sahip herhangi bir web sitesi için herhangi bir çağrı verilerini doğrulamak için kullanılabilir:

# Daha detaylı bilgi

## Eth-Allowlist

-   [https://github.com/yearn/eth-allowlist](https://github.com/yearn/eth-allowlist)


##  Yearn allowlist uygulama örneği

-   [https://github.com/yearn/yearn-allowlist](https://github.com/yearn/yearn-allowlist)

##  ENS DNS kayıtları

-   [https://docs.ens.domains/dns-registrar-guide](https://docs.ens.domains/dns-registrar-guide)

**_Bu makale bir Yearn geliştiricisi tarafından anonim olarak sağlanmıştır.
Ben sadece makarnayı kopyalarım — xoxo weaver._**
