---
title:  "Yearn yönetimi açıkladı: Teklifler, $YFI belirteci, ve icrası"
image:
  src: ./image1.jpg
  width: 900
  height: 482
date: '2022-04-19'
author: Marco_Worms
translator: Dastronom
---

![](./image1.jpg?w=900&h=482)

Yearn'in [Discord](https://discord.com/invite/6PNv2nF), [Twitter](https://twitter.com/iearnfinance), [Reddit](https://www.reddit.com/r/yearn_finance), [Pool of Ideas](https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b), [Telegram](https://t.me/yearnfinance/) ve [Governance Forum](https://gov.yearn.finance/)'da herkes öneride bulunabilir veya fikirlerini paylaşabilir. Teklifler olgunlaştıkça, [YFI belirtecinin](https://www.coingecko.com/en/coins/yearn-finance) oylama gücü olarak kullanıldığı Yönetişim Forumunda yapılandırılmış bir oylama haline gelir.

- Jeton sahipleri [Yearn'in Snapshot Sayfasında](https://yearn.snapshot.page/#/) oy kullanabilir, oylama işleminde gaz tüketimi yoktur!
- Ayrıca artık kullanılmayan ancak Yearn tarihi hakkında bilgi edinmek için keşfedilebilecek bir [kapatılan yönetim deposu](https://docs.yearn.finance/contributing/governance/proposal-repository) var!

Forumdaki en yaygın teklif türü, Yearn İyileştirme Teklifleridir (YIP'ler), ancak [mevcut Yearn yönetişim uygulaması (YIP-61)](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) kapsamında ele alınan başka türler de vardır.

- **Yearn İyileştirme Önerisi (YIP):** YFI sahiplerine devredilen veya sayılan yetkilerin kapsamı dışında kalan herhangi bir yetkiyi yürütmek için bir tekliftir.
- **Yearn Delegasyonu Önerisi (YDP):** Bir yTeam'in bir kapsam üzerinde nasıl güce sahip olduğunu değiştirmeye yönelik bir tekliftir.
- **Yearn Sinyali Önerisi (YSP):** Topluluğun herhangi bir konudaki duygularını veya niyetini belirtmek için bağlayıcı olmayan bir tekliftir.

### Yönetişim 

[YIP-61](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) Yearn yönetiminin şu anda nasıl çalıştığını belirler: [yTeams](https://gov.yearn.finance/t/yip-61-governance-2-0/10460#yteams-9) sınırlı yetkileri özerk bir şekilde kullanmak için YFI sahiplerinden yetki atadı. YFI sahibi olmak, kişiye gücün ekipler arasında nasıl dağıtıldığı üzerinde kontrol sahibi olmasına izin verir, YFI, protokol içindeki güç dinamiklerini değiştirebilir ve aşağıdaki gibi değişiklikleri iletmek veya reddetmek için özel oylama gücü verir:

- Multisig veya yTeams İmza yetkililerini Değiştirmek
- yTeams'i onaylamak
- Hazine Fonlarını Harcamak
- Protokol Ücretlerini Belirlemek
- YFI sözleşmesini değiştirmek

## Yönetim Forumu Süreci

[Yearn Governance Forums](https://gov.yearn.finance/)'da herkes yeni bir teklif oluşturabilir:

![](./image2.jpg?w=900&h=486)

### Teklif Şablonu

[YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959) tarafından belirlendiği üzere, teklif yazmanın standart bir yolu aşağıda verilmiştir:

**Özet**:
Teknik olmayan ve erişilebilir bir şekilde yazılmış, önerilen değişikliğin sonucu

- **Durum:** *(Bu alan zorunlu değildir ancak herkese yardımcı olur)*
    - **Tartışma:** Bu öneri şu anda tartışma aşamasındadır. YIP-55'te özetlenen oylama kurallarımıza göre, bir YIP numarası atanmadan ve bağlayıcı bir oy için Snapshot'a geçmeden önce duyarlılığı ölçmek için bağlayıcı olmayan bir forum anketi ile en az 3 gün boyunca tartışılacaktır
    - **Oylama:** Bu teklif şu anda oylama aşamasındadır. Snapshot oyunuzu verin. Oylama kurallarımızı YIP-55'ten öğrenebilirsiniz.
    - **Kabül:** Bu teklif, 25 Nisan 2021'de 7:00 UTC'de %99,97 oyla kabul edildi.

**Soyut:**
Önerilen değişikliğin kısa (~200 kelime) açıklaması. Teklif geçerse ne olacağını detaylıca açıklamalıdır.

**Motivasyon:**
Değişiklik önerisini yazmanıza neden olan mevcut sorun

**Şartname:**
Bu önerinin sorunu nasıl çözdüğüne dair uzun bir açıklama, YIP'nin nasıl uygulanacağını açıklamalıdır.

**Anket:**
Teklifle ilgili topluluk duyarlılığını ölçmek için yönetişim forumunda oluşturulan bir oylama dinamiği %50'den büyük olmalıdır

### Tartışma

Önerinin topluluk üyeleri tarafından birçok açıdan ele alınabilmesi için yeterli tartışma süresi (en az 3 gün) olmalıdır. Resmi bir oylama yapmadan önce teklif hakkındaki topluluk duyarlılığını ölçmek için Discourse'nin yerleşik Anket aracını kullanın, ankette en az %50 geçer oy olmalıdır.

![](./image3.jpg?w=900&h=351)

Tartışmalar ideal olarak, topluluğa neyin teklif edildiğini netleştirne kadar sürmelidir. Bir şey önermeden **önce** farklı paydaşlarla konuşmak, duyarlılığı ölçmek için iyi bir yoldur ve en baştan daha iyi destekle karmaşık fikirleri ortaya koymanıza yardımcı olur. Mükemmel tartışmaya sahip bir teklif örneği, 30.000 başlangıç arzının ötesinde 6.666 YFI tokeni basan ve DAO üyelerinden büyük YFI sahiplerine farklı türdeki paydaşları hizalamak zorunda kalan [YIP-57](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319)'dir.

### Oylama

Tartışma aşaması geçtikten sonra teklif bir YIP (veya içeriğine bağlı olarak belki bir YDP) olur ve oylama aşamasına geçirilir. [Yearn Snapshot'ları Sayfasında](https://yearn.snapshot.page/#/) bir oy göndermek için en az 1 $YFI'ye sahip olmanız veya birinden bunu sizin için yapmasını istemeniz gerekir, eğer teklif sağlamsa bu bir engel olüşturmayacaktır. Yeni YIP için resmi bir numara almak için bir forum moderatörüyle iletişime geçin!

Oylama gücü, bir seçmenin sahip olduğu YFI'nin 1'e 1'ine karşılık gelir. Yani 10 $YFI'ye sahip bir cüzdan, 1 $YFI'ye sahip birinin oylama gücünün 10 katıdır.

Oylama en az 5 gün sürer ve %50'den fazla kabul oyu gerektirir, [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)'de belirtildiği gibi sağlanacak yeter sayı yoktur: "yetersayı gereksinimini ölçmek zor olabilir ve kayıtsız seçmenlerin zaman alıcı bir şekilde toplanmasına yol açabilir".

![](./image4.jpg?w=900&h=543)

YFI'yi aşağıdaki yerlerde tutmak veya stake etmek oy vermenize olanak tanır:
- Cüzdanınızda
- YFI yVault V2 (yvYFI jeton sahibi olmaya eşdeğer)
- Balancer YFI/WETH LP token
- Uniswap YFI/WETH LP token
- MasterChef'e stake edilmiş Sushiswap YFI/WETH LP token'leri  
- MakerDAO YFI teminatı
- Unit Protocol YFI teminatı
- Bancor

### Karar & İcra

Oylama %50'den fazla oyla geçerse, Yearn DAO öneriyi icra etmek zorundadır. [Yearn DAO](https://yearnfinance.notion.site/yearnfinance/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249)'nun çalışma şekli, yukarıdan aşağıya bir komuta ve kontrol şirketi gibi değildir, bu nedenle bir ekibi veya herhangi bir kişiyi teklifi uygulamaya zorlamaz veya zorunlu kılmaz. DAO, teklifin uygulanması için doğru teşviklerin belirlenmesini sağlayacaktır (örneğin, katkıda bulunanlar tarafından yapılan iş için ödenecek hibeyi tahsis etmek)

Son zamanlarda 2 YIP geçti ve ben bunu yazarken Yearn tarafından icra ediliyor:

- [YIP-65: Gelişen YFI Tokenomikleri](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Katılımcı tazminatını kolaylaştırma](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)

## YFI'nin adil lansmanı

![](./image5.jpg?w=900&h=228)

[Andre Cronje](https://medium.com/@andrecronje) Yearn'in ilk kurucusuydu ve onun kıvılcımını başlattığı şey, şu anda 200'den fazla aktif katılımcıyla bir DAO oldu. Bunun bugün olduğu gibi var olması mümkün çünkü Cronje protokol üzerinde sahip olduğu bütün gücünü verdi ve bunu YFI aracılığıyla yaptı. İlk zamanlarda Yearn hizmetlerini ve ekosistemini kim kullandıysa bu gücü aldı ve bu sürecin nasıl gerçekleştiğine dair bilgileri Cronje'nin yazılarında bulabilirsiniz:

1) [YFI](https://medium.com/iearn/yfi-df84573db81) (Earning YFI is simple, provide liquidity to one of the platforms)
2) [YFI Kazanmak curve.fi/y](https://medium.com/iearn/earning-yfi-y-curve-fi-53b5fd347f0f) (Earn YFI by providing liquidity to curve)
3) [YFI ödül havuzu](https://medium.com/iearn/yfi-rewards-pool-810ef9256ec6) (Reward pool for burning YFI)
4) [#3 havuzu Meta Getiri Yönetimi](https://medium.com/iearn/pool-3-meta-yield-governance-58f68e6d2f19) (Pool that rewarded many things including participating in governance)

## Ek kaynaklar

Bir teklif yapmak için ilham arıyorsanız, protokol içinde kapsamlı tartışmaları olan ve güç dinamiklerini değiştiren aşağıdaki YIP'lere göz atabilirsiniz:

- [YIP 32: YFI burn'u kaldır](https://gov.yearn.finance/t/yip-32-remove-yfi-burning/1907)
- [YIP 36: İşletim Sermayesi Olarak Sistem Ödülleri](https://gov.yearn.finance/t/yip-36-system-rewards-as-operational-capital/2311)
- [YIP 41: Multisig'i Geçici Olarak Güçlendirmek](https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630/2)
- [YIP-51: v2 Vault ücret yapısını ayarlayın](https://gov.yearn.finance/t/yip-51-set-vault-v2-fee-structure/7752)
- [YIP-52: Yearn'in Şanlı Beyninden Yararlanmak İçin Oyun Ortağı Olmak](https://gov.yearn.finance/t/yip-52-make-strategist-skin-in-game-partner-for-make-benefit-of-glorious-brain-of-yearn/7856)
- [YIP-54: Operasyon Finansmanını Resmileştirmek](https://gov.yearn.finance/t/yip-54-formalize-operations-funding/7956)
- [YIP-55: YIP Sürecini Resmileştirmek](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)
- [YIP-56: Geri alım ve İnşaa](https://gov.yearn.finance/t/yip-56-buyback-and-build/8929)
- [YIP-57: Yearn'in Geleceğini Finanse Etmek](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319)
- [YIP-61: Yönetim 2.0](https://gov.yearn.finance/t/yip-61-governance-2-0/10460)
- [YIP-65: Gelişen YFI Tokenomikleri](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Katılımcı tazminatını kolaylaştırmak](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)
