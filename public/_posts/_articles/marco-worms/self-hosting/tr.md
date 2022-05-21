---
title:  "Kendini Barındıran Web3 Hizmetleri"
image:
  src: ./image1.jpg
  width: 1400
  height: 702
date: '2022-03-31'
author: Marco_Worms
translator: Dastronom
---

![](./image1.jpg?w=1400&h=702)

Web3, uygulamalarla iletişim kurmanın yeni bir yolunu getirdi: uygulamalar artık merkezi sunucu sağlayıcıları tarafından değil, merkezi olmayan sistemler olan blok zincirlerinde barındırılıyor. Merkezi olmayan temeller üzerine inşa edilen uygulamalar, aksama süresine ve sansüre karşı dayanıklıdır, ancak bir sorun var: Web tarayıcısını kullanan kullanıcılara uygulama arayüzünün sunulması genellikle merkezi varlıklara dayanır.

Bu makalede, temel kripto ve Yearn hizmetleri için uygulama arayüzlerinin nasıl kendi kendini barındırılacağını öğreneceğiz, bu nedenle resmi web siteleri herhangi bir nedenle kapalıysa, blok zinciri hiçbir zaman bozulmadığından web sitesine her zaman ulaşabiliyor olacaksınız!

## Back-end, Front-end, Web3!

Bu konseptlere hızlı bir giriş yapalım:

- **Front-end**, uygulamanın bir web sitesi veya mobil uygulama gibi kullanıcı tarafından görülen kısmına verilen addır.
- **Back-end**, uygulamanın kullanıcı tarafından görülmeyen kısmına verilen isimdir. Birçok Front-end eylemi, işlemek için arka uca güvenir.

Web3'te blok zinciri, back-end merkezi olmayan bir hale getirmeyi başarır, ancak front-end, varsayılan merkezileştirilmiş yöntemi kullanarak kullanıcıya sunulmaya devam edecektir:

- Kullanıcı tarayıcıdan bir sayfaya gitmesini ister (örneğin http://yearn.finance)
- Tarayıcı bu adresin IP'si için DNS ister (13.227.124.73)
- Tarayıcı, IP için dosyaları ister

Ve ikisinden biri olursa:

**DNS, domain'inizi bir IP adresine dönüştürmez**

veya

**IP adresi size front-end dosyaları sunmaz**

Bir şeylere tıklamak ve back-end iletişim kurmak için front-end göremezsiniz. Web3 hizmetlerini bu endişeler olmadan kullanabilmek için front-end kendi kendine barındırabilir ve hem "DNS çözünürlüğü" hem de "IP çevrimiçi değil" sorununu aynı anda çözebilirsiniz!

![](./image2.jpg?w=1400&h=679)

## Neden kendi kendine Barındırır?

Web3'te bir web sitesini kendi kendine barındırmak, varsayılan ön uç sağlayıcı kapalı olduğunda bile ön ucun çalışacağı anlamına gelir. Bu, makinenizin front-end dosyalarına ulaşma yolunun ortasında bulunan birçok aracıyı keser! Bu, birey ve hizmet için bir kazan/kazan ilişkisidir, bunu nasıl yapacağınızı biliyorsanız, sizin için önemli olanları yedekleyebilirsiniz:

- Bireyin, front-end'e ulaşma koşulları kötü olduğunda bile hizmete erişimde daha fazla esneklik kazanır.
- Ön uç dosyaları teslim eden sunucu daha az istek alır, bu da sıkışık olmamasına yardımcı olur
- Uygulamanın lokal sürümü, belirli bir sürümde dondurulacaktır. Bu sürüm birey için iyi çalışıyorsa, bir yedeğe sahip olmak harikadır, bu nedenle front-end'in herhangi bir özelliği bozulursa, çalışan sürüme yine de erişebilirsiniz.

Bir hizmeti kendi kendine barındırmak için, her uygulama için yerel bir ortamın nasıl indirileceğine, kurulacağına ve çalıştırılacağına ilişkin geliştirici belgelerini gözden geçirmemiz gerekecek.

Yerel olarak çalıştırdıktan sonra, tarayıcıdaki varsayılan web sitesi URL'sine erişmek yerine "localhost:application" gibi bir şey kullanacağız ve gayet iyi çalışacak! "application", genellikle 3000 olarak varsayılır

![](./image3.jpg?w=1400&h=1115)

## Dikkat edilmesi gereken noktalar

**Windows kullanıcıları için:** Hizmete bağlı olarak, Windows yerine Linux kullanmak daha kolay olabilir, ancak Windows'unuz varsa endişelenmeyin, pek çok hizmet norm dışı bu olayda sorunsuz çalışır. çalışmayanlar için [WSL (Linux için Windows Alt Sistemi)]( https://docs.microsoft.com/en-us/windows/wsl/install) kullanabilirsiniz. [Virtual Machine](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html) de iyi bir alternatiftir, genellikle hataları gidermek için birçok kaynağa sahip olan [Ubuntu](https://ubuntu.com/) veya [Debian](https://www.debian.org/) gibi ortak bir Linux dağıtımı yükleyebilirsiniz.

**Mac/Linux kullanıcılarına**: Herhangi bir komut beklenmeyen hatalar gösteriyorsa, bunları daha önce `sudo command` gibi `sudo` anahtar sözcüğünü kullanarak çalıştırmayı deneyin; bu, komutu yönetici olarak çalıştırmaya zorlar ve bazen varsayılan izinleriniz adminlerle aynı olamaz.

**Beklenmeyen hatalar için:** Repo'daki benioku dosyasını dikkatlice okuyun! Hiçbir şey işe yaramazsa, Google en iyi arkadaşınızdır, tüm işletim sistemlerinin tüm sürümleri için çalışacak bir kılavuz yapmak gerçekten zordur, bu nedenle bir şeyler ters giderse, ilk yanıtınızın hatasını kopyalayıp Google'a yapıştırmanızıı şiddetle tavsiye ederim;) genellikle sorunu çözer!

**Her şey yolunda gittiyse ancak zincirdeki işlemler başarısız olursa:** Projeler tarafından varsayılan anahtarları yapılandırmak için kullanılan `.env` adlı bir dosya var. Orada [Infura](https://infura.io/) ve [The Graph](https://thegraph.com/studio/) gibi hizmetler için proje anahtarları ekleyebileceğiniz yerler bulabilirsiniz, bazı uygulamalar kendi anahtarlarınızı kullanmanızı gerektirebilir, bir anahtarı almak için hizmet web sitesinde bir hesap oluşturmanız gerekir. !

**Bir hizmeti tekrar yürütmek için çalıştırdıktan sonra:** Herhangi bir `git clone` ve`yarn install` ve diğer önemli yapılandırma adımlarını atlayabilirsiniz, genellikle projenin klasörüne `cd` yapmanız ve `yarn start` çalıştırmanız yeterlidir.

**Başka bir hizmeti yürütmek için bir hizmeti çalıştırdıktan sonra:** Terminal penceresini kapatmanız VEYA yürütmeyi kendinizin kapatması gerekir: bunu yapmak için "Ctrl+C"yi kullanın ve proje klasöründen `cd ..` komutuyla çıkabilirsiniz.

## Uygulamalı!

**Gereksinimler**

1) [Node.js](https://nodejs.org/en/) programını kurun
2) [git](https://git-scm.com/downloads) programını kurun
3) Type `npm install --global yarn` in a terminal window to set up [Yarn](https://yarnpkg.com/) (used to install the dependencies for most projects)

[yarn](https://yarnpkg.com/)(çoğu projede destek dosyalarını yüklemek için kullanılır) kurmak için bir terminal penceresine `npm install --global yarn` yazın

- **Windows:** Windows + R -> type `cmd` -> Enter
- **Mac:** CMD + Space -> Terminal

**Indeks**

- [Yearn Web sitesi](#Yearn-Website)
- [Yearn Blog](#Yearn-Blog)
- [Yearn Dev Dokümanları](#Yearn-Dev-Docs)
- [Yearn Web sitesi](#Yearn-Website)
- [Yearn Vault açıklamaları](#Yearn-Vaults-Descriptions)
- [Yearn Mini](#Yearn-Mini)
- [Yearn Watch](#Yearn-Watch)
- [Uniswap](#Uniswap)
- [Curve](#Curve)
- [Cowswap](#Cowswap)
- [Gnosis Safe](#Gnosis-Safe)

### Yearn Web sitesi

#### bellek: https://github.com/yearn/yearn-finance-v3 

1) Terminali aç
2) `git clone https://github.com/yearn/yearn-finance-v3`
3) `cd yearn-finance-v3`
4) `yarn install`
5) Windows Olmayan: `yarn dev` / Windows: `yarn dev-win`
6) Tarayıcı sayfayı `localhost:3000`'da otomatik olarak açmalı

![](./image4.jpg?w=1145&h=667)

### Yearn Blog

#### bellek: https://github.com/yearn/yearn-comms

1) Terminali aç
2) `git clone https://github.com/yearn/yearn-comms`
3) `cd yearn-comms`
4) `yarn install`
5) `yarn dev`
6) Tarayıcıyı aç ve`localhost:3000`'ya yönlendir

![](./image5.jpg?w=1235&h=703)

### Yearn Geliştirici dokümanları

#### bellek: https://github.com/yearn/yearn-devdocs

1) Terminali aç
2) `git clone https://github.com/yearn/yearn-devdocs`
3) `cd yearn-devdocs`
4) `yarn install`
5) `yarn start`
6) Tarayıcı sayfayı `localhost:3000`'da otomatik olarak açmalı

![](./image6.jpg?w=1093&h=447)

### Yearn Vault'ları Açıklamaları

#### bellek: https://github.com/yearn/yearn-vaults-descriptions

1) Terminali aç
2) `git clone https://github.com/yearn/yearn-vaults-descriptions`
3) `cd yearn-vaults-descriptions`
4) `yarn install`
5) `yarn dev`
6) Tarayıcıyı aç ve`localhost:3000`'ya yönlendir

![](./image7.jpg?w=1223&h=517)

### Yearn Mini

#### Bellek: https://github.com/DarkGhost7/yearn-mini

1) Terminali aç
2) `git clone https://github.com/DarkGhost7/yearn-mini`
3) `cd yearn-mini`
4) `yarn install`
5) `yarn start`
6) Tarayıcı sayfayı `localhost:3000`'da otomatik olarak açmalı

![](./image8.jpg?w=1400&h=986)

### Yearn Watch

#### Bellek: https://github.com/yearn/yearn-watch

1) Terminali aç
2) `git clone https://github.com/yearn/yearn-watch`
3) `cd yearn-watch`
4) `yarn install`
5) `cp .env.example .env`
6) [Infura](https://infura.io/dashboard), [The Graph](https://thegraph.com/studio/apikeys/), ve [Alchemy](https://www.alchemy.com/)'yi `.env`'a ekle
7) `yarn start`
8) Tarayıcı sayfayı `localhost:3000`'da otomatik olarak açmalı

![](./image9.jpg?w=1191&h=531)

### Uniswap

#### Bellek: https://github.com/Uniswap/interface

*Windows'da çalışmadı*

1) Terminali aç
2) `git clone https://github.com/Uniswap/interface`
3) `cd interface`
4) `yarn install`
5) `yarn start`
6) Tarayıcıyı aç ve`localhost:3000`'ya yönlendir`

![](./image10.jpg?w=1400&h=628)

### Curve

*Mevcut olan açık kaynak olmadığı için eski kullanıcı arayüzünü kullanalım*

#### Bellek: https://github.com/curvefi/crv.finance

1) Terminali aç
2) `git clone https://github.com/curvefi/crv.finance`
3) `cd crv.finance`
4) `yarn install`
5) `yarn start`
6) Tarayıcı sayfayı `localhost:3000`'da otomatik olarak açmalı

![](./image11.jpg?w=1400&h=568)

### Cowswap

#### Bellek: https://github.com/gnosis/cowswap

*Windows'da çalışmadı*

1) Terminali aç
2) `git clone https://github.com/gnosis/cowswap`
3) `cd cowswap`
4) `yarn install`
5) `yarn start`
6) Tarayıcı sayfayı `localhost:3000`'da otomatik olarak açmalı

![](./image12.jpg?w=983&h=511)

### Gnosis Safe

#### Bellek: https://github.com/gnosis/safe-react

1) Terminali aç
2) `git clone https://github.com/gnosis/safe-react`
3) `cd safe-react`
4) `yarn install`
5) [Infura](https://infura.io/dashboard) anahtarını`.env`'a ekle
6) `yarn start`
7) Tarayıcı sayfayı `localhost:3000`'da otomatik olarak açmalı`

![](./image13.jpg?w=1400&h=550)

---

*Yapımcı: [Worms](https://twitter.com/MarcoWorms), Eleştirmenler: [Dark Ghosty](https://github.com/DarkGhost7), [Cryptouf](https://twitter.com/cryptouf)*

*Yearn.finance'de üretildi*
