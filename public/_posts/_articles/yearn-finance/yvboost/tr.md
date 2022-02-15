---
title:  "yvBOOST Kullanarak Pasif Verim elde etmek"
image:
  src: ./cover.png
  width: 1050
  height: 543
date: '2021-09-14'
author: Qosmonot
translator: Dastronom
---

# yvBOOST Kullanarak Pasif Verim elde etmek

### Yearn'in [Curve.fi](http://curve.fi/) ile iş birliği altyapımızın temelimizdir ve artışınıza artış katmak için esastır.

🔵🤝🌈

_yazı katılımcılarımızdan olan qosmonot tarafından yazılmıştır_ [_qosmonot_](http://twitter.com/qosmonot)

Birçok Yearn vault'unun, Curve havuzları üzerine kurulu stratejileri vardır ve bu nedenle, ödül tahsislerini bu havuzlara yönlendirmek için oy vererek onları optimize etmek için CRV token'ini kullanır. Yearn, bu vault'lar için artan ödüller sağlamak için CRV token stoklarını istikrarlı bir şekilde büyütüyor.

![](image1.png?w=1050&h=651)

CRV token'lerini Yearn aracılığıyla stake etmeyi seçerek herkes bundan yararlanabilir. Hadi size Yearn'in neler sunabileceği ve sizin de CRV varlıklarınızı bir destekle nasıl büyütebileceğiniz konusunda size yol gösterelim!

## CRV nedir?

CRV, [Curve.fi](http://curve.fi/) protokolünü çalıştıran merkezi olmayan kuruluş olan CurveDAO için yönetişim ve yardımcı program token'idir. CRV token'in ana amacı, [Curve.fi](http://curve.fi/) platformundaki likidite sağlayıcılarını teşvik etmenin yanı sıra, protokolün yönetimine mümkün olduğunca çok kullanıcıyı dahil etmektir. CRV token'in üç ana kullanımı vardır: oylama, stake etme ve artırma. Bu üç şey, kullanıcıların veCRV karşılığında CRV'lerini "oy kilitlemesini" gerektirir. veCRV, oy ile emanet edilen CRV anlamına gelir ve yalnızca belirli bir süre için kilitlenen CRV'yi temsil eder (1 haftadan 4 yıla kadar herhangi bir aralıkta

### Stake etme

veCRV (stakeed CRV), Curve protokolü işlem ücretlerinden bir pay alır (oluşturulan tüm işlem ücretlerinin %50'si). Bu ücretler toplanır ve daha sonra veCRV sahiplerine dağıtılan TriPool (DAI+USDC+USDT) için LP token'i olan 3CRV'yi satın almak için kullanılır.

### Artırma

Stake etmenin ötesinde, CRV için bir başka önemli teşvik, sağlanan likidite ile ödüllerinizi artırma kabiliyetidir. Oy kilitleme CRV'si, DAO'ya katılmak için oylama gücü elde etmenize ve CRV ödül tahsislerini seçilen havuzlara yönlendirmenize, sağladığınız likiditede 2,5 katına kadar bir artış elde etmenize olanak tanır.

### Oylama

CRV sahipleri, CRV'lerini veCRV'ye çevirerek oylarını kilitledikten sonra, çeşitli DAO teklifleri ve önerilen havuz parametresi değişiklikleri için oy kullanabilirler veya kendi değişikliklerini önerebilirler.

Yerel veCRV'nin aktarılamayacağını ve bunu elde etmenin tek yolunun oy kilitleme CRV'si olduğunu belirtmekte fayda var.

[Curve.fi](http://curve.fi/)'de CRV stake edebilir ve Likidite Havuzları için boost'larınızı aktif olarak yönetebilirsiniz veya özel vault'larımız: yveCRV ve yvBOOST ile Yearn'in sizin için CRV stake etme işini halletmesine izin verebilirsiniz. Ayrıca yVault token'lerinizi, [Curve.fi](http://curve.fi/)'de CRV stake etmenin aksine takas edilebilir ve devredilebilir.

## yveCRV yVault

![](image2.png?w=128&h=128)

### Daha iyi bir destekle CRV kazanın

Bir kullanıcı vault'a CRV yatırdığında, bu CRV [Curve.fi](http://curve.fi/) platformunda veCRV olarak kilitlenir ve kullanıcıya veCRV'nin tokenize edilmiş bir sürümü olan yveCRV verilir. Bu vault size Curve'nin işlem ücretlerinden sürekli bir pay kazandırır. Her hafta, bu ödüller 3Crv (Curve'un 3pool LP token'i) olarak talep edilebilir.

Bunu doğrudan [Curve.fi](http://curve.fi/)'de kendiniz yapabilirsiniz, ancak birinin yveCRV yVault'u kullanmayı tercih etmesi için çok iyi bir neden var: **daha fazla ödül!

Ne kadar fazla? Bu vault'da ödülleriniz iki katından fazla olabilir! Yearn bunu başarıyor çünkü tüm [Curve.fi](http://curve.fi/) tabanlı stratejiler aracılığıyla kazandığı farm edilmiş CRV'sinin %10'unu bu yveCRV vault'una düzenli olarak bağışlıyor ve yveCRV vault'u mevduat sahiplerinin Yearn'in Curve protokol ücretlerinden pay talep etmesine izin veriyor. Bu, protokol için talep edebileceğimiz tüm Yearn ödüllerini yveCRV mevduat sahiplerine vererek haftalık ödüllerini artırdığımız anlamına gelir.

CRV token'lerinizi vault'a kilitlemek, [Curve.fi](http://curve.fi/) oylama gücünüzü yearn'a devrettiğiniz anlamına gelir. Yearn, tüm vault'larda verimi en üst düzeye çıkaran oy tahsislerini optimize etmek için sürekli simülasyonlar çalıştırır ve diğer vault'lardaki mevduatlarınızdan yararlanır!

**Artık emekliliğinizin tadını çıkarırken ödüllerinizi talep edebilir ve bu parayı mojitolara harcayabilirsiniz.** Yine de, bunun yerine isteyebileceğiniz başka bir seçenek, kazançlarınızı birleştirmek için ödüllerinizi vault'a geri eklemektir ve bunu yapmak için sadece bulduğunuz "Restake" düğmesi yeterli olacaktır. Bunu manuel de yapabilirsin, ama Yearn sizler için burada...

## The yvBOOST yVault

![](image3.png?w=128&h=128)

### Compounding ile artırılmış CRV kazanın

yvBOOST yVault, yukarıda açıklanan yveCRV yVault'un tam otomatik ve bileşik bir sürümüdür.

Basitçe söylemek gerekirse, bu vault haftalık 3CRV ödüllerinizi otomatik olarak talep eder ve bunları daha fazla yveCRV elde etmek için kullanır (hasat zamanında hangisinin en verimli olduğuna bağlı olarak ya piyasadan satın alır veya üretir).

Tıpkı yveCRV yVault'da olduğu gibi yatırıldıktan sonra, CRV token'larınızın oylama gücü Yearn tarafından işlenir ve optimize edilir. [Curve.fi](http://curve.fi/)'nin haftalık protokol ücretlerini talep etme konusunda endişelenmenize gerek yok, vault bunu sizin için yapıyor!

Bu, CRV token'lerinizin katlanarak büyüdüğü ve bileşik faizin gücünden yararlandığı bir "kur ve unut" vault'udur!

Şimdi, daha önce belirtildiği gibi, yveCRV veya yvBOOST'a yatırılan herhangi bir CRV kilitlendiğinde, vault'daki CRV token'lerinizden elde edilen herhangi bir kazancın nasıl çıkarılacağını merak ediyor olabilirsiniz. yveCRV vault'undan çekeme işlemi yapamasanız da, aslında bu vault token'lerinin her ikisini de Sushiswap'ta değiştirebilirsiniz. Bunun nedeni, Yearn ve kullanıcılarının, yveCRV ve yvBOOST token'lerinizin ETH (veya başka birşeye,gerçekten) için takasına izin vermek için Sushiswap'ta likidite sağlamasıdır.

### A little alpha.

Yearn piyasadan yvBOOST satın alır, onu veCRV'ye açar ve bu veCRV'yi yvBOOST vault'una bağışlayarak yvBOOST'un temel değerini artırır.

## CRV Staker'ları için Yearn yVault'ları

CRV'nizi doğrudan [Curve.fi](http://curve.fi/) platformunda stake etmek, protokol ücretinin (3CRV) bir kısmını manuel olarak talep etmenize olanak tanıyan devredilemez bir veCRV token'i karşılığında CRV token'inizi kilitlemek anlamına gelir. [Curve.fi](http://curve.fi/) platformuna sağlanan likiditenizi artırmak için oylarınızı manuel olarak yeniden dengelemek için bu veCRV token'ini kullanabilirsiniz.

## Yearn yveCRV ve yveBOOST vault'larına katılın

Bu Yearn vault'larının her ikisi de CRV staker'larını Yearn tarafından kilitlenen CRV'nin bir payı ile ödüllendirerek, onu likit kalırken CRV stake etmek isteyenler için ideal bir yer haline getirir:

- Otomatik olarak yeniden yatırılan (yvBOOST vault'u için) [Curve.fi](http://curve.fi/) protokolünden (3Crv) işlem ücretlerinden pay kazanın.
- Kendi ödüllerinize ek olarak (daha fazla 3CRV!), otomatik olarak yeniden yatırılan (yvBOOST vault'u için) Yearn'in [Curve.fi](http://curve.fi/) protokol ücretlerinden pay alın.
- veCRV teken'lerinin toplu oylama gücü, tüm Yearn'nin Curve havuzu vault'larında ödülleri en üst düzeye çıkarmak için otomatik olarak optimize edilir ve yeniden dengelenir.
- Yatırılan CRV'niz için yveCRV veya yvBOOST token'leri alın, böylelikle kolayca kâr elde etmenize veya stake edilen CRV pozisyonundan çıkmanıza olanak sağlar

Yearn'in kripto varlıklarınızın getiri üretimini ve yeniden dengelenmesini otomatikleştirme çalışması, özellikle CRV hisseleriniz için geçerlidir ve Yearn'in yveCRV veya yvBOOST'u, CRV'nizi stake etmeniz için güçlü, bileşik, "ayarla ve unut" olanaklarını için uygun bir zemindir!

Bir sonraki yazımızda, CRV'yi ve rüşvet ve EPS süreçlerini ele alacağız. O zamana kadar…

![](image4.png?w=1050&h=543)
