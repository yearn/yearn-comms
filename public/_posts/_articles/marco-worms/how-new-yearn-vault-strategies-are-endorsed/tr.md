---
title:  "Yeni Yearn Vault stratejileri nasıl onaylanıyor?"
image:
  src: ./image1.jpg
  width: 1280
  height: 800
date: '2022-02-02'
author: Marco_Worms
translator: Dastronom
---

![](./image1.jpg?w=900&h=478)\
*Strateji İnceleme Süreci*

[Yearn Vaults and Strategies](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) hakkındaki son makalede **Strateji Denetim Sürecini kısaca özetledik**. Şimdi, herhangi birinin Yearn'e nasıl yeni bir strateji önerebileceğini ve onaylanan stratejilerin dayanıklı olmasını sağlamak için hangi adımların atıldığını daha derinlemesine inceleyeceğiz.

![](./image2.jpg?w=900&h=478)\
*Hızlı özet: Strateji, yVault'un fonlarını kullanarak yatırım yapacak ve kar elde edecek bir sözleşmedir.*

Yearn tarafından onaylanacak bir strateji sunmadan önce, stratejist bununla ilgili bir Durum Tespiti belgesi yazmalıdır: [SNX](https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view) ve [Vesper](https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O) izlenecek iyi şablonlardır. Durum Tespiti belgesi, bir stratejinin kullandığı süreçlerin tüm özelliklerini açıkladığı ve akıllı sözleşme ortak güvenlik uygulamalarını gözden geçirdiği için önemlidir. Yearn bu belgeyi süreçleri doğrulamak ve inşa edilenlerin risklerini değerlendirmek için kullanacak!
Dokümanın ana hatlarıyla belirtmesi gereken şeylerden bazıları şunlardır:

- Protokol ademi merkeziyetçiliği: Protokol multisig kullanıyor mu? Hangi yetkilere sahip? Sözleşmeler değişebilir mi?
- Denetim raporlarının listesi
- Tüm içsel strateji ayrıntıları
- Üretim ortamında devreye alma yolu

Strateji uzmanı, [“brownie-strategy-mix” şablon deposunu](https://github.com/yearn/brownie-strategy-mix) kullanarak bir strateji kodlayabilir. Strateji tamamlandığında ve 2 meslektaş tarafından gözden geçirildiğinde, deneysel vault'ların bir üretim ortamında test edilmesini sağlayan bir web sitesi olan ape.tax'ta konuşlandırılmalıdır.

![](./image3.jpg?w=352&h=28)\
*ape.tax vault'lar uyarısı!*

Belge tamamlandıktan ve bazı hasat döngüleri sorunsuz bir şekilde tamamlandıktan sonra, stratejist artık [Yearn katkıda bulunanlara ulaşabilir](https://docs.yearn.finance/developers/v2/DEPLOYMENT#deploying-a-new-strategy) stratejinin [Güvenli Tarım Komitesi](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533) tarafından onaylanmasını sağlayabilir. Tam bir güvenlik incelemesi, dahili Yearn gözden geçirenler tarafından yapılacaktır.
Her geri bildirim ele alındıktan ve kod onaylandıktan sonra, strateji yeniden dağıtılarak ve mevcut bir vault'a bağlanarak veya ape tax vault'unu onaylayarak üretime yükseltilebilir.

**Strateji şimdi onaylandı ve [yearn.finance](https://yearn.finance/) içinde yaşıyor!!**

Şu andan itibaren stratejist + herhangi bir destekleyici komite, kasanın strateji getirisinden %10'luk bir performans ücreti ile ödüllendirilecek. Güvenlik yüksek öncelikli bir endişe olduğundan, strateji Toplam Kilitli Değerde ölçeklendikçe izleme ve denetim sıklığını artırmayı umuyoruz:

- Strateji, **TVL'de 10 milyondan fazla** olduğunda, stratejist — stratejiyi 7/24 izleyen derin bilgiye sahip 3 kişilik bir komite oluşturmalıdır.
- Strateji, **TVL'de 100 Milyondan fazla** olduğunda, daha sonra saygın bir dış denetim şirketi tarafından denetlenecek ve üzerinde tekrarlanan dahili incelemeler yapmaya başlayacağız.

Stratejilerin nasıl geliştirildiği ve onaylandığı hakkında daha fazla bilgi için şu belgeleri okuyabilirsiniz:
- [Vault'lar ve Stratejiler nelerdir?](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)
- [Resmi Belgeler — vault'larlar ve Stratejilere Başlarken](https://docs.yearn.finance/developers/v2/getting-started)
- [Resmi Belgeler — Vault ve Strateji V2 Dağıtma](https://docs.yearn.finance/developers/v2/DEPLOYMENT)
- [Güvenli Tarım Önerisi](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533)
