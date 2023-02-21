---
title:  "Risk, Araçlar ve İçgörü"
image:
  src: ./cover.jpg
  width: 1500
  height: 500
date: "2021-08-12"
author: Storm Blessed
translator: Dastronom
---

orjinal kaynak: [twitter](https://twitter.com/storming0x/status/1436851219864059906)

##### 1
Hafta sonu biraz kodlama yaparken [@iearnfinance](https://twitter.com/iearnfinance) risklei, araçları ve perde arkası bilgileri hakkında bir tweet fırtınası yapmaya karar verdim.

🧵 👇

##### 2
[yearn.finance](http://yearn.finance) hakkında bilginiz yoksa “getiri fonksiyon protokolü” olarak düşünebilirsiniz. Yearn'in en iyi ürünü Vault'lardır. Vault'lara para koyun ve bir şekilde ertesi gün o para büyür ve durmadan büyümeye devam eder. Bu tabiki de aşırı basitleştirilmiştir.

##### 3
Bu, vault'un getiri elde etmek amacıyla para tahsis etmesi için stratejileri kodlayan akıllı insanlardan oluşan bir ekip tarafından mümkün kılınmıştır. Stratejiler, sıklıkla uygulanması ve güncellenmesi gereken akıllı sözleşmelerdir. Bu akıllı sözleşmeler esnek ve dinamiktir. Örnek tahsisler:

![3_1436841383378120712](3_1436841383378120712.jpg?w=1200&h=663)

##### 4
Yearn protokolünün çalışma şekli göz önüne alındığında, yeni sözleşmeleri ve stratejileri hızlı bir şekilde başlatmak için çok hızlı bir geri dönüş gerekiyor, bunun güvenlik üzerinde etkileri var. Yearn'deki ana endişelerden biri, tüm açılardan varolan risklerdir. Risk işinde tehlikenin sınırındayız. Peki bunu nasıl dengeleriz?

##### 5
Bir risk çerçevesi oluşturmamız gerekiyor. genel resmi görmek için. Bu, şu anda dağıtılan kasa + strateji sayısıdır. Bu sistemin karmaşıklığını aşmanın bir yolu yok, bu işin yürümesi için birçok parçanın yerine oturması gerekiyor.

![3_1436842206359285762](3_1436842206359285762.jpg?w=398&h=117)

##### 6
Önceki hayatımda havacılık sistemlerinde bir geçmişim vardı. Risk işinde de olan Havacılık'tan çok dersler alınabileceğini düşünüyorum. Finansta olduğu gibi karmaşıklık yüksektir. Yine de bir sonraki seyahatiniz için bir uçak rezervasyonu yaparken iki kez düşünmüyorsunuz.

##### 7
Her gün milyonlarca uçuş gerçekleşiyor ve birçok uçuşta olaylar yaşanıyor. Bir olay kazaya yol açmaz = uçak kazası. Bir uçağın düşmesi için aynı anda birçok olaya ihtiyacınız var. Mevcut havayolu operasyonlarında bu çok olası değildir.

##### 8
Ancak her olay olduğunda havacılık süreci ve sistemleri, temel nedeni düzeltmenizi ve onarmanızı gerektirir. Yearn'da da benzer bir süreç uyguladık, her komuta merkezi toplantısı kaynak kaybına yol açmaz ama bundan ders alıp gelişmemiz gerekiyor.

##### 9
Bu süreç, olaylar ve komuta merkezi ile geçen çok kötü bir ayın ardından bu yılın başlarında hayata geçirildi. Ve insan faktörlerini günlük kararlarımızdan mümkün olduğunca çıkarmak ve otomatikleştirmek için çeşitli girişimler başlatıldı ve uygulandı.

[twitter.com/storming0x/sta…](https://twitter.com/storming0x/status/1395452522840608768?s=20)

> ![storming0x](storming0x-881012267675820034.jpg?w=48&h=48)
> Storm Blessed 0x ([@storming0x](https://twitter.com/storming0x))

> Yearn içindeki bir durumla uğraşatığımız 16 saaten fazla süren durum odası toplantısından yeni çıktık. Son derece yorgun ama bu harika ekibin bir parçası olma şansına sahip olduğum için minnettarım.

Kriz çözüldü ve para kaybı olmadı. [@iearnfinance](https://twitter.com/iearnfinance)'i daha güçlü kılacak şeyler ve daha çok önemli bilgiler edindik. 😴

##### 10
Bu elbette hala geliştirilebilir ve sürekli bir süreçtir, ancak yearn'da bizi öldürmeyen şey kesinlikle bizi güçlendirir. Bu süreci Yearn'ın DNA'sına yerleştirmek işimin bir parçasıdır.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/EMERGENCY.md)

##### 11
Durum odalarımız vardı, kodun bir hatası vardı ve durum odalarına ve sorunlara yol açan yanlış muhasebe yaptılmıştı.
Düzeltmeler:
-Sorunları zincirde ortaya çıkmadan önce yakalamak için simülasyon botları ekledik.
iddialar karşılıksızsa trx'i geri alacak zincir üzeri sağlık kontrolleri.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/DEPLOYMENT.md#health-checks)

##### 12
Simülasyon botu, telgram'ımıza uyarı vermeye ve herhangi bir sorunda bizi zamanında ikaz etmeye uyarlıdır. Yakın zamanda bir simülasyon tarafından tamamen engellenen bir durum odamız vardı, strateji zincir üzerinde hiçbir şeyi düzeltmek zorunda kalmadan sona erdi. Düzeltici faaliyetten önleyici faaliyete geçtik.

![3_1436848158034644993](3_1436848158034644993.jpg?w=652&h=780)

![3_1436848166805000195](3_1436848166805000195.jpg?w=984&h=748)

![3_1436848196399996929](3_1436848196399996929.jpg?w=1200&h=1000)

##### 13
[yearn.watch](http://yearn.watch), stratejileri ve vault'ların durumunu izlemek için oluşturduğum sitedir. Verileri almak için yearn ekibi tarafından dahili olarak oluşturulmuş harika bir alt yapı kullanır. Karar vermek için bu verileri verimli bir şekilde alabilmek için özel çoklu arama sözleşmelerimiz var.

![3_1436848846378729473](3_1436848846378729473.jpg?w=1200&h=739)

![3_1436848859322273796](3_1436848859322273796.jpg?w=1200&h=767)

##### 14
Ayrıca, herhangi bir zamanda riskimizi değerlendirmek için her stratejiyi puanlamak için geldiğimiz bir risk gösterge tablomuz var. Bu, dahili altyapımız tarafından doldurulur ve zincir üzerindeki değişikliklerle otomatik olarak ayarlanır.
(Aşağıdaki örnek veriler)

![3_1436849527198085126](3_1436849527198085126.jpg?w=1200&h=498)

![3_1436849597129715717](3_1436849597129715717.jpg?w=583&h=433)

![3_1436849615987351553](3_1436849615987351553.jpg?w=719&h=314)

##### 15
Bu, çok yakın zamanda eklenen bir dahili risk aracıdır ve dahili sürecimiz göz önüne alındığında nesnel bir puanlama bulmaya çalışmak için verilerimizi ve modellerimizi değiştirdiğimiz için henüz kamuya açıklamak için erkendir. Bununla ilgili daha fazla veri topladığımızda, daha fazlasını paylaşmaktan mutluluk duyarım.

##### 16
Akıllı sözleşme riskini ve güvenliğini çözmekten çok uzağız ama yapabileceğimiz tek şey denemeye devam etmek. Bu perde arkası görünümün, ekosistemdeki diğer projeleri onlara yardımcı olmak için bilgilendirebileceğini veya hepimizin faydalanabileceği başka fikirler bulabileceğini umuyoruz.

Okuduğunuz için teşekkür ederim!
