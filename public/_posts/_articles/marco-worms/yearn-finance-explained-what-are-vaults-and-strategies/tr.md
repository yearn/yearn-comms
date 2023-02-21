---
title: "Yearn Finance açıkladı: Vault'lar ve stratejiler nelerdir?"
image:
  src: ./image3.jpg
  width: 1024
  height: 597
date: '2022-01-18'
author: Marco_Worms
translator: Dastronom
---

![](./image1.jpg?w=900&h=478)\
*Basit Ethereum Yearn Vault Örneği*

[Yearn Finance](http://yearn.finance/), Blockchain üzerinde getiri yaratma, kredi toplama ve daha fazlasını sağlayan Merkezi Olmayan Finans (DeFi) içindeki bir ürün paketidir. Protokol, çeşitli bağımsız geliştiriciler tarafından sürdürülür ve $YFI sahipleri tarafından yönetilir.

Yearn'in mevcut kullanıcıya yönelik temel ürünü, her biri bir veya daha fazla **Strateji** tarafından yönlendirilen birçok farklı kripto varlığına otomatik getiri üretimi sağlayan **yVault**'tur. yVault tasarımı açık uçludur; bu, [Abracadabra + Yearn vakası gibi](https://twitter.com/MarcoWorms/status/1483223651684081670), diğer protokollerin Yearn'in üzerine inşa edip yenilik yapabileceği anlamına gelir.

# Yearn Vault'ları (yVault'lar)

Yearn Vault'u adlandırmanın kısa yolu **yVault**'dur. Yearn'in mevcut sürümünde (v2) bir yVault'un özellikleri şunlardır:

- **YVault'a yatırdığınız jeton, alacağınız getiridir**, her zaman otomatik olarak yVault'a eklenir
- **Bir yVault'un aynı anda birçok stratejisi aktif olabilir.** Bir yVault, gerekli gördüğünde stratejilerini sermaye tahsisini değiştirebilir
- Diğer birçok getiri toplayıcının aksine **kullanıcıdan herhangi bir para yatırma/çekme ücreti alınmaz**
- **yVaults, ERC20 standardını uygular**; bu, erc20 jetonlarını işleyen herhangi bir uygulama tarafından kullanılabildiğinden (merkezi olmayan borsalar gibi) cüzdanlar ve piyasalar arasında kolayca taşınabilecekleri anlamına gelir

## Stratejiler ve Stratejistler

**Stratejistler**, yVault'lar için bir veya daha fazla temel **Strateji** oluşturan kişilerdir.

[Herkes bir strateji kurabilir](https://docs.yearn.finance/developers/v2/getting-started), ancak bir yVault'a eklenmesini sağlamak için stratejistin stratejiyi [strateji inceleme sürecinden](https://docs.yearn.finance/developers/v2/getting-started#overview-of-our-vetting-process) geçirmesi gerekir. bu da kavram incelemesi, kod incelemesi, güvenlik incelemesi ve ana ağ testini içerir.

![](./image2.jpg?w=4000&h=588)\
*Strateji İnceleme Süreci*

Çabaları için stratejistler, stratejinin performans ücretinin bir kısmı ile ödüllendirilir.

- Belirli bir strateji tarafından oluşturulan getiri ücretlerinin (performans ücreti) %10'a kadarı stratejiste gider
- Tüm stratejiler tarafından oluşturulan getiri ücretlerinin (performans ücreti) %10'u Yearn DAO hazinesine gider.
- Yıl boyunca vault'un toplam varlıklarının %2'si, gaz, geliştirici hibeleri ve diğer hizmetler gibi harcamaları ödemek için Yearn'e giden ücretler olarak alınır.

Artık yVault'ların ve Stratejilerin ne olduğunu bildiğimize göre, iç işleyişine biraz daha derine inelim.

# Vault'ları ve Stratejileri Daha Derinden incelemek

### Bir stratejiyi yıkmak

![](./image3.jpg?w=1024&h=597)\
*Finematics bu resim için teşekkürler!*

Yukarıdaki görüntü, 1 yVault sürümündeki Ethereum vault stratejisine genel bir bakıştır. yVault'lar artık sürüm 2'dedir ve aynı anda birden çok stratejiyi işleyebilir, ancak bu örnekte tek bir stratejiye odaklanılacaktır. Daha derine inmek istemeniz durumunda bunun nasıl çalıştığına dair bir [Finematics gönderisinin ve videosunun tamamı](https://finematics.com/yearn-vaults-eth-vault-explained/) var!

Bu örnekte, bir stratejinin diğer vault'ları nasıl kullanabileceğini görebiliriz! Ethereum v1 yVault stratejisinde:

- Bir kullanıcı ETH yatırdığında, ETH teminat olarak MakerDAO'ya ödünç verilir
- Teminat DAI ödünç almak için kullanılır
- Ödünç alınan DAI, DAI yVault'a yatırılır
O zaman DAI'yi ödünç almak ve DAI yVault stratejisini kullanarak getiri elde etmek için ETH kullanıyoruz.

### Yearn parayı vault'a nasıl/ne zaman taşır ve ne kadar ücret alır?

Bir stratejinin temel işlevlerinden birine “hasat” denir. Çağrıldığında, kârın gerçekleştiği ve stratejiye yeniden yatırıldığı bir yeniden dengeleme sürecini tetikler.

### Yearn, bir stratejinin jetonları kaybetmek yerine her zaman üretmesini nasıl garanti ediyor?

Stratejistler, strateji sağlığını sağlamak için zincir üzerindeki verileri izlemek için bir dizi araç kullanır. Bu araçlardan biri, blok zincirinde yaşayan birçok önemli metrik ile güzel bir kullanıcı arayüzü sunan [Yearn Watch](https://yearn.watch/) aracıdır.

Üretime geçtikten sonra izleme stratejileri kadar önemli olan, gerçek para ile üretime gönderilmeden önce yapılan durum tespitidir. Yearn strateji ekibinin ayrıca, kullanılan temel stratejiler için risk seviyesini değerlendiren bir “Strateji Puanlama Sistemi” vardır, bunu gelecekte belgelerimizde ve uygulamalarımızda kullanıcılarımıza daha iyi sunmayı umuyoruz!

### Stratejilerin, geçmiş vault'larla ilgili deneyimlerle öğrenilen kısıtlamaları vardır

- Vault fonları aşağı doğru değil "yalnızca yukarı doğru" gitmeli
- Geçici Kayıptan Kaçının (örneğin, bir likidite havuzunda YFI/ETH likiditesi sağlamayın)
- Kullanıcılar istedikleri zaman para çekebilmelidir (böylece strateji tüm vault fonlarını zaman kilitleyemez, yalnızca küçük bir kısmı)
- Use only protocols with proven track record and well understood, immutable contracts

### Keep3r'ler ve yVault'lar

Yearn ve [Keep3r](https://docs.keep3r.network/) gerçekten güçlü bir sinerjiye sahip: Keep3r, vault'lar için ortak görevleri otomatikleştirmek için yVault'lar tarafından kullanılıyor!

Örneğin, Gardiyanlar, yVault için koşullar mantıklı olduğunda hasat işlevini çağırmaktan yararlanabilir, örneğin:

- Bir strateji X miktarda kar elde eder
- Son hasattan bu yana Y zaman geçer
- Hasat gerçekleştiğinde herhangi bir kayıp olmaz

Ve bunun gibi birçok durum vardır, başka bir örnek, stratejinin bir bölümünde tasfiyeyi önlemek için kasa varlık tahsisinin yeniden dengelenmesini isteyen bir Muhafız olabilir.

![](./image4.jpg?w=562&h=651)

### Strateji Kurmak

- **yVault'lar** [Vyper](https://vyper.readthedocs.io/en/stable/) üzerinde programlanmıştır
- **Stratejiler** [Solidity](https://docs.soliditylang.org/en/v0.8.11/) içinde programlanmıştır

> Strateji uzmanı olmak için gelişmiş bir geliştirici veya finansal analist olmanıza gerek yok!

yVault'ların bakımı daha karmaşık bir geliştirme meselesi olsa da, Stratejiler herkesin bir tane yazabilmesi için tasarlandı, iyi bir strateji için gereksinim şudur:

- Stratejinin kendisinde kullanılan tüm jetonlar için jetonomik ve dokümantasyonun derinlemesine araştırması yapılarak edinilebilecek, konuşlandıracağınız blok zinciri ekosistemi hakkında bilgi.
- [CryptoZombies'de 4. Seviyeyi tamamlamaya](https://cryptozombies.io/) benzer Solidity programlama bilgisi
- [git](https://git-scm.com/), [eth-brownie](https://eth-brownie.readthedocs.io/en/stable/) ve [ganache](https://trufflesuite.com/ganache/) arasında nasıl dolaşılacağını bilin.
- Yukarıdaki araçların temellerini anladıktan sonra [strateji şablonumuzu kopyalamaya](https://github.com/yearn/brownie-strategy-mix) hazırsınız! Kendi ilk stratejinizle inşa etmek için bu şablonda değiştirmeye başlamanız gereken işlevler, hazırlanış Geri Dönüşü, Ayar Konumu ve Tasfiye Konumudur.

Son bir şey: Bir strateji Yearn tarafından onaylandıktan ve üretime alındıktan sonra, onu izlemeye yardımcı olmalısınız!

### Daha fazla bilgi edin

Vault'lar ve Stratejiler hakkında daha fazla içerik istiyorsanız bu kaynaklara göz atın! Hepsi bu makalede açıklanan kavramları anlamama yardımcı oldular, ayrıca katkıda bulunanlar en nazik insanlardır ve her konuda kaliteli bilgi almak için her zaman en iyi kaynağı bulmama yardımcı olurlar.

- [yVault açıklamaları](https://vaults.yearn.finance/)
- [yVault Dokümanlar](https://docs.yearn.finance/getting-started/products/yvaults/overview)
- [Güçlü bir stratejist ol](https://www.youtube.com/watch?v=NVR3teJw0Y0)
- [Finematics'ten yVaults hakkında harici video/makale](https://finematics.com/yearn-vaults-eth-vault-explained/)
- [Yearn'den Ek Kaynaklar](https://docs.yearn.finance/developers/v2/additional-resources)

### Mavi Hapı Al!

Vault'lar ve Stratejiler soyutlamasını sevdiyseniz:

- Yearn Finance Twitter'daki en son haberlerimizle güncel kalın
- Yearn'in vizyonunu ve tarihini özetleyen [Blue Pill Kitabını](https://thebluepill.eth.link/) okuyun
- [Yearn ekibine katılma](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) detaylarına bakın!

*Yapımcı: [Worms](https://twitter.com/MarcoWorms), İnceleyenler: [Wavey](https://twitter.com/wavey0x)*

*Farrah ve Weaver'a, Yearn'e katılmama yardım ettikleri ve bu ilk makaleyi burada yazmama izin veren harika insanlarla ve kaynaklarla beni bağladıkları için teşekkürler!*