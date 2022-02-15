---
title:  "Adil lansmanlar, merkezi olmayan işbirliği ve Sabit Forex"
image: ./Fair-launches-decentralized-collaboration-and-Fixed-Forex/andre-hero.png
author: Andre
translator: Dastronom
---

# Adil lansmanlar, merkezi olmayan işbirliği ve Sabit Forex

Yazar: [Andre Cronje](https://twitter.com/AndreCronjeTech)</br>

July 27, 2021

**\-Adil lansmanlar-**

Adil bir lansmanın arkasındaki özü nihayet anlamam biraz zaman aldı. Token'leri dağıtmıyor, ön satış olmadığı için değil, basitçe söylemek gerekirse, herkesin aynı avantaja sahipdi, herkes aynı kurallara sahipdi, gizli saklı "arkadaşlar ve aile" kayırmaları, tohum aşaması yatırımcı randları, influencer tahsisi, beyaz listeler, sınırlı katılım yoktu, kurallar sağlanıyordu ve herkes katılabiliyordu. Sonunda, adil bir lansmanın, tüm katılımcıların aynı kurallara sahip olduğu bir lansman olduğunu söylemekte kendimi rahat hissediyorum.

**\-Merkezi olmayan işbirliği-**

Hala çok fazla kabilecilik görüyorum, sanırım bu anlaşılabilir, insanların spor takımları üzerinde nasıl bu kadar kabileye dönüştüğünü hiç anlamadım, bu kabileciliğin ne kadarının takımlara bahis oynamaktan kaynaklandığını merak etmeye başladım, sonuçta, kripto budur, favori takımınıza bahis yapmaktır. Spordaki kabileciliği hiç anlamadığım gibi kriptoda da anlamıyorum. Standartlarıma göre, sadece “doğru” ve “yanlış” görüyorum, bağlı olduğum bir takım olup olmadığı önemli değil, “doğru” görüyorsam  övüyorum, “yanlış” görüyorsam, azarlarım.

Ancak sanırım bazı ekipler, işbirliğindeki değeri genellikle küçümserler, bu yveCRV hakkında her zaman hoşuma giden bir şeydir ve uzantı olarak, onun klonları, stCRV ve cvxCRV, curve, yearn, sushi ve pickle arasındaki işbirliğinin ürünüdür. Tüm bu varlıklar olmadan var olamaz. yveCRV'den önce de aynı nedenle, y havuzu benim gurur ve neşe kaynağımdı, curve, yearn, aave, compound ve dydx arasındaki işbirliğiydi.

Bunu akılda tutarak, başarılı olmaya devam etmek için ürünlerin izole edilemeyeceğini, ürünlerin ve ekiplerin bir birleşimi olması gerektiğini anladım. Orijinal Sabit Forex yinelemem bağımsız, yükseltilemez, yönetilemezdi, herhangi bir değer çıkarımı omadan Token'sizdi.

**\-Sabit Forex-**

Döviz kontrolünü bozmaktan bahsediyoruz, fiat'ı bozmaktan bahsediyoruz, kendi yöntemleriyle, Tether ve Circle, borsa kontrolünü bozmak için kriptodan daha fazlasını yaptı, döviz kontrolünün basit bir kuralı vardır, para kendi bölgesinden çıkamaz özel izin olmadan. Hem Tether hem de Circle yerel olarak mevduat alır, fiat asla banka hesabından çıkmaz, dolayısıyla döviz kontrolü olmaz (teoride, pratikte ve düzenlemede bu çok farklı bir hikaye). Öyleyse, ABD'den Kore'ye, USD'den KRW'ye bir ödeme yapmak istediğinizi varsayalım, “basit” bir yol, USDT için USD yatırmak, USDT'yi Upbit'e aktarmak, USDT'yi KRW ile değiştirmek, KRW çekmek olacaktır.

Sabit Forex, son kullanıcılar adımlardan haberdar olmadan veya bilgi sahibi olmadan yukarıdakileri gerçekleştirmek için tasarlanmıştır, Sabit Forex'in iki temel bileşeni vardır, forex on-chain likiditesi ve merkezi olmayan fiat açık ve kapalı rampaları.

İkincisi için çok heyecanlı olsam da, yayınlanma tarihi ancak zincirleme likiditeye ulaştıktan sonra mümkün. Bu makalenin amaçları doğrultusunda, Sabit Forex'in nasıl çalıştığını ve kullanıcıların nasıl katılabileceğini açıklayacağız.

**\-Iron Bank Sabit Forex (ibff)-**

Sabit Forex Iron Bank, Yearn, Sushi ve Curve'ye kaldıraç uyguladı.

![](image1.jpg?w=500&h=500)

**Feragat;**

- Denetlenmemiş.
- Erken katılım için 0 fayda, sadece risk.
- İlk token dağıtımı, emisyonun bir kısmı olacaktır, bu yalnızca test amaçlıdır.
- İnanılmaz düşük ilk dağıtım göz önüne alındığında, bu token'leri satın almayın, bu token'ler için likidite sağlamayın, para kaybedersiniz.

Sabit Forex, USD, EUR, ZAR, JPY, CNY, AUD, AED, CAD, INR ve Sabit Forex takma adı altında başlatılan diğer forex çiftlerinin toplu adıdır.

Mevcut ilk seçenek, [yearn.fi/lend](https://yearn.fi/lend) aracılığıyla basılabilen [ibEUR](https://www.coingecko.com/en/coins/iron-bank-euro) seçeneğidir.

![](image2.png?w=700&h=194)

Tüm forex seçenekleri, [yearn.fi](https://yearn.fi/lend) adresinde kabul edilen teminatlardan herhangi biri aracılığıyla basılabilir.

![](image3.png?w=645&h=874)

Güncel teminat faktörleri için, [buradan](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor) Iron Bank belgelerini ziyaret edebilirsiniz.

Her forex çifti 2 likidite havuzunu hedefleyecektir;

ib\*/\* ([curve.fi](https://curve.fi/))  
ib\*/ETH ([sushi.com](https://sushi.com/))

![](image4.png?w=700&h=243)

Her bir varlık için likidite sağlayıcıları dört adet kullanılabilir getiri seçeneğine sahip olacaktır;

1.  [yearn.fi/lend](https://yearn.fi/lend) adresine ib\* sağlayın ve faiz kazanın (şu anda %6.38)
2.  [sushi.com](https://sushi.com/) adresine ib\*/ETH sağlayın (şu anda %390)
3.  [curve.fi](https://curve.fi/)'a ib\*/\* sağlayın (havuz beklemede)
4.  Iron Bank Sabit Forex'te stake yapın ve yerel token olan IBFF'yi kazanın (kazanılmış, veIBFF)

\-veIBFF-

IBFF mekanizması karmaşıktır ve katılmadan önce dikkatlice anlaşılmalıdır.

İlk lansman yalnızca tek bir havuzu hedefleyecektir, [ibEUR/ETH](https://analytics.sushi.com/tokens/0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27)

Bir LP olarak, LP token'ini IBFF [musluğu](https://etherscan.io/address/0x7d254d9adc588126edaee52a1029278180a802e8)nda stake edebilirsiniz, bu, kademeli [veIBFF](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1) token damlaması sağlar, bu, hakediş sözleşmesinde token kilitleme işlemi oluşturmak için gereklidir.

Sistemin gerçek yerel token'i veIBFF'dir veya kazanılmış IBFF'dir, veIBFF protokol ücretleri kazanır, bu ücretler arz ve talebe göre dinamiktir. Şu anda, bu ücretler TVL'nin %10,15'i kadardır.

IBFF sahipleri, veIBFF [sözleşme](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1)'de doğrusal bozulma ile 4 yıla kadar bir hakediş kilidi oluşturmayı seçebilir

Bir kilit oluşturulduğunda, LP'ler dağıtım [sözleşmesinde](https://etherscan.io/address/0x1da8a6fe33bd35b99505d67843eec9fa124f2d4b) ibEUR/ETH'yi stake edebilirler, dağıtım sözleşmesi yoken'leri her 7 günde bir doğrusal olarak dağıtacaktır.

Dağıtılacak olan token'ler, sizin  hakediş kilidinize göre ödül olarak dağıtılır. Hakediş kilidi 1 yıl ise, 1 yıl içinde kilidi açılacak olan veIBFF olarak 1/4 token alırsınız. Kalan 3/4 token, ücret dağıtım [sözleşme](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859)sine dağıtılır.

veIBFF sahiplerinin haftalık iki talebi vardır, 1. birikmiş protokol  ücretleridir (şu anda TVL'nin %10,15'i) ve [dağıtım sözleşme](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859)si tarafından dağıtılan IBFF'dir.

Basitçe söylemek gerekirse, yatırımınıza ne kadar zaman ayırırsanız ona göre kazandığınız ödül o kadar orantısız olur.

**sorumluluk reddi;**

- Denetlenmemiş
- Erken katılım için 0 fayda, sadece risk.
- İlk token dağıtımı, emisyonun bir kısmı olacaktır, bu yalnızca test amaçlıdır.
- İnanılmaz düşük ilk dağıtım göz önüne alındığında, bu token'leri satın almayın, bu token'ler için likidite sağlamayın, para kaybedersiniz.

**Linkler;**

[Forum](https://gov.yearn.finance/c/projects/fixed-forex/26)  
[Website](https://yearn.fi/lend)  
sosyal medya yok
