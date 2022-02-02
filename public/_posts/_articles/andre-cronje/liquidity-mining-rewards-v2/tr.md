---
title:  "Likidite sağlayıcı ödülleri v2"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: Dastronom
---

# Likidite sağlayıcı ödülleri v2

Konsept ve mimari [pods.finance](https://www.pods.finance/)'den

[LM çağrı seçeneği ödül sözleşmesi](https://twitter.com/AndreCronjeTech/status/1426580528510251008)

## **Tarihçe**

Likidite Madenciliği / Ödüller / Teşvikler, onlara ne derseniz deyin, doğası gereği kriptonun bir parçasıdır. İş kanıtı (madencilik) bile ödüller için bir şeyler sağlıyor (çalışma kanıtı olarak, kripto için güvenlik \[veya daha doğrusu elektrik\] sağlıyor)

Likidite için ilk ödül sağlayan (bildiğim kadarıyla) [synthetix.io](https://synthetix.io/), bu, sonunda `sUSD` [curve.fi](https://curve.fi/) havuzuna taşınan `sETH/ETH` havuzuyla başladı. Bu havuzlara likidite sağladıysanız, SNX (yerel Synthetix token) ile ödüllendirildiniz.

Bazı efsanevi [StakingRewards](https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol) sözleşmesi, aslen [1inch.exchange](https://1inch.exchange/)'den Anton ile ortaklaşa geliştirildi. Bu sözleşme, bugün bildiğimiz şekliyle likidite madenciliğinin temeli oldu.

## **Sorun Beyanı**

Likidite madenciliği büyüdükçe, anlaşmaya varılamayan bazı kusurlar ortaya çıktı. Aşağıdaki ikisinin en yıkıcı olduğuna inanıyorum;

- "Yapışkanlık" olarak da adlandırılan likidite çekirgeleri (veya sadakat)
- Token sadakati veya fırsatçı damping

Teşvikler sona erdiğinde likidite hızla kaybolur ve agresif likidite programları genellikle token fiyatına zarar verebilir, ki bu, ikincisinin mutlaka kötü bir şey olmadığına inanıyorum (çünkü tamamen tokenomiklere / amaca bağlı olduğundan), kamuoyu algısından , fiyat düştüğünde, bir projenin bir aldatmaca olduğu açıktır.

## **Sorun Örneği**

Sorunun özünde "hiçbir şey için bir şey" sorunu olduğuna inanıyorum. Karşılıği olmayan bir şey alırsanız, sadece kârınızı bankaya yatırırsınız. Pratik bir örnek olarak [curve.fi](https://curve.fi/)'yi ele alalım, 3pool'a DAI/USDC/USDT şeklinde likidite sağlarsanız CRV ödülleri alırsınız. Bu örnek için, likidite sağlayıcısının bir likidite çekirgesi olduğunu varsayalım, bu nedenle sadece CRV almak ve onu hemen daha fazla DAI/USDC/USDT'ye satmakla ilgileniyorlar.

Bunun nedeni, pratik olarak "hiç" karşılığında "bir şey" almalarıdır. Likidite sağlayan, ödüllendirilir, bu kadar basit.

## **Seçeneklere Hızlı Giriş**

Bunu basit tutmaya çalışacağım, iki seçenek var, bir `PUT` (satma hakkı) ve bir `CALL` (satın alma hakkı). Bu durumda, bir `PUT`u piyasa satışı ve `CALL`ı piyasa alımı olarak düşünebilirsiniz. Bu nedenle, basitlik amacıyla CRV'yi kullanmaya devam ederek, CRV'nin 2 dolardan işlem gördüğünü varsayalım. 2$'lık `kullanım fiyatı` olan bir `CALL` seçeneği, 2$'dan CRV satın almama izin verir,`kullanım fiyatı` 2$ olan bir `PUT` seçeneği, CRV'yi 2$'dan satmama izin verir.

Bu makalenin geri kalanında sadece CALL, yani satın alma hakkı üzerinde duracağız. Yani bir seçeneğin 3 temel özelliği vardır;

-  Ne satın alıyorsun? (Örneğimizde CRV)
- `kullanım fiyatı` nedir? (diğer bir deyişle, bunun için ne kadar ödüyorsunuz? Örneğimizde 2$ ~ veya 2 DAI)
- `Son kullanma tarihi` ne zaman? (normalde gelecekteki bir tarih, örneğimizde sona erme `mevcut zaman damgası/şimdi` idi)

## **Seçenek Olarak Likidite Madenciliği**

[curve.fi](https://curve.fi/) örneğimize uyarak, likidite sağlıyorsanız ve ödül olarak CRV talep ediyorsanız, bu, `kullanım fiyatı` $0 olan bir CRV CALL seçeneği uygulamak ve şimdi `sona ermek` olarak görülebilir. CALL seçenekleri açısından düşünmeye başladığınızda, birdenbire projeye çok daha fazla güç veriyor, örneğin şimdi bir proje bunu şu şekilde sunabilir;

- kullanım fiyatı = spot - %50
- son kullanma tarihi = geçerli tarih + 1 ay

En temel düzeyinde, basitçe `sona ermek` = şimdi ve `kullanım fiyatı` = spot - %50 diyebiliriz, bu ne anlama gelir? Diyelim ki likidite madencisi, CRV CALL seçeneğini 0 $ `kullanım fiyatı` ve `sona ermek` (1000 ücretsiz token) almak yerine 1000 CRV'yi çıkardı, şimdi bunun yerine 1000 CRV'yi 1000 $'dan satın alma hakkını alacak. Bir likidite çekirgesi olsalar bile, yine de 1000$ kar elde ettikleri için bunu yapmaya teşvik edilirler (işlem değeri 1000 CRV @ 2$ = 2000$ - 1000$ satın alma).

"Karlar" (yukarıdaki örnekte 1000$), artık veCRV sahiplerine dağıtılabilir veya vakıf, DAO hazinesine vb. gidebilir. Bu fonlar, piyasa yapmak ve ek likidite sağlamak için bile kullanılabilir.

Şimdi, bir adım daha ileri gidelim ve bir vade sonu ekleyelim, diyelim ki 1 ay, şimdi tartışma uğruna, likidite alan herkes talepte bulundu ve damping yaptı, yani 1 ay fiyatı 1 $ olarak değiştir , ancak CALL opsiyon fiyatı ayrıca 1 dolar, yani bu noktada, “damper”ın ek kar elde edemeyecekleri için artık opsiyonu talep etmesi için hiçbir sebep yok. Dolayısıyla bu, alınan jetonlar için ek bir fiyat tabanı belirlediği anlamına gelir. Bu token'ler talep edilmeyeceğinden (DAO'ya geri gönderilebilir)

## **Çözüm**

Mevcut Stake Ödülleri sözleşmesinde birkaç basit değişiklik yapmak, aynı UX ve kullanıcı deneyimini korurken yukarıdaki işlevleri eklememize olanak tanır.

mevcut prototip koda [buradan](https://gist.github.com/andrecronje/6c3da8b294488001adeda528f70bc301)  ulaşabilirsiniz

Geleneksel Likidite Madenciliği yerine Opsiyon Likidite Madenciliğine geçerek;

- Azalan likidite çekirgeleri
- Satış baskısını azaltın
- Doğal fiyat tabanı (twap - döneme göre indirim yüzdesi)
- DAO/token sahipleri için ek ücret geliri

## **İlişkilendirme**

[pods.finance](https://www.pods.finance/), [@josephdelong](https://twitter.com/josephdelong) ve [sushi.com](https://sushi.com/) ekibine bu konsepti bulup benimle paylaştığı için teşekkür ederim.
