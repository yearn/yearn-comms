---
layout: post
title:  "What can you do with YFI?"
categories: [ Articles ]
image: ./What-can-you-do-with-YFI/image1.png
author: Dark Ghosty
translator: gateway-504
publish: true
---

# Apa yang dapat anda lakukan dengan YFI?
Dalam artikel ini, kita melihat apa yang dapat dilakukan seseorang dengan YFI mereka untuk mendapatkan hasil di [DeFi](https://www.coindesk.com/what-is-defi), risiko apa yang terkait dengan setiap opsi, dan perkiraan hasil yang bisa Anda dapatkan.

- Semua kutipan APY berasal dari 27 April..
- Semua posisi yang mengambil hutang mengasumsikan pinjaman pada 70% dari tarif maksimum untuk dapat menahan 30% pengurangan harga YFI.
- Ini bukan nasihat keuangan. Berinteraksi dengan protokol DeFi adalah **berisiko**, harap lakukan riset Anda sendiri.

___

## **Sebelum Anda mulai, pertimbangkan untuk mengasuransikan YFI Anda dengan Asuransi DeFi**
Catatan tentang asuransi DeFi dan cara kerjanya. Asuransi DeFi *kebanyakan* mencakup bug dalam kode solidity yang menyebabkan hilangnya dana secara material untuk protokol tertentu. Tetapi pastikan untuk membaca setiap dokumentasi asuransi Defi dengan saksama untuk mengetahui apa yang mereka lakukan dan yang tidak mereka cakup.

Sebagai contoh, katakanlah seseorang memiliki asuransi untuk brankas mereka, tetapi ada bug dengan kode MakerDAO dan CDP brankas kehilangan sejumlah dana karena hal ini. Orang ini yang hanya memiliki asuransi di Yearn, tidak akan dapat mengklaim kerugian apa pun dan asuransi mereka tidak akan membayar dalam kasus ini. Ini karena bukan bug dalam kontrak pintar yearn yang menyebabkan kerugian. Untuk info lebih lanjut tentang asuransi jangan ragu untuk bertanya di [discord](discord.yearn.finance) kami di #support.

### **Para penyedia DeFi Coverage**
- [Nexus Mutual](https://app.nexusmutual.io/#/SmartContractCover)
    - [Documentation](https://nexusmutual.gitbook.io/docs/)
- [Cover Protocol](https://app.coverprotocol.com/)
    - [Documentation](https://docs.coverprotocol.com/)

___

## ***Deposit Langsung***
Bagian ini membahas cara-cara Anda dapat menggunakan YFI Anda sendiri. Metode alternatif untuk menghasilkan hasil, seperti menyediakan likuiditas ke bursa yang terdesentralisasi [automated market maker (AMM)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers) mungkin mengharuskan Anda untuk memasangkan YFI Anda dengan token lain yang dapat membahayakan eksposur penuh Anda ke YFI. Ini bukan untuk mengatakan bahwa itu bebas risiko, tetapi Anda tidak harus berurusan dengan apa yang disebut sebagai [impermanent loss (IL)](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi). *Memiliki dana dalam kontrak pintar selalu membawa beberapa risiko.*

### Yearn: v2 YFI yVault
Yearn Finance YFI v2 yVault memungkinkan Anda menyetor YFI dan duduk santai sambil memberikan hasil untuk Anda di tempat yang optimal untuk melakukannya. Pada saat penulisan, vault saat ini membuka CDP dan menggunakan DAI yang dicetak untuk farming. Juga, yVault meminjamkan YFI ke CREAM dan AAVE untuk hasil yang lebih banyak.

#### Situs
- [Yearn.Finance](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)

#### Alat-Alat
- [Yearn Hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Tautan ini akan menunjukkan berapa banyak dana di brankas yang dialokasikan untuk strategi mana.
- [Vaults at Yearn](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3): Di sini Anda dapat melihat apa yang dilakukan setiap strategi di brankas yvYFI v2.
- [Yearn Vision](yearn.vision): Dasbor untuk statistik brankas.
- [Zap into v2 YFI yVault](https://zapper.fi/invest?protocol=yearn&contractAddress=0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1&modal=invest)

#### Resiko
Saat ini, resiko yang terkait dengan brankas ini adalah risiko kontrak cerdas untuk kontrak brankas yearn (yang [diaudit](https://github.com/yearn/yearn-security/tree/master/audits)),Risiko CDP MakerDAO, dan karena strategi meminjamkan YFI ke CREAM dan AAVE untuk hasil ekstra, dan risiko kontrak cerdas untuk kedua platform juga. Vault memiliki pemantauan CDP-nya dan menjaga sebuah [health ratio](https://medium.com/iearn/delegated-vaults-explained-fa81f1c3fce2) dari 3 yang berarti hanya akan mencetak 1/3 dari jumlah maksimum yang tersedia untuk dicetak di DAI lalu gunakan DAI tersebut untuk bertani.

#### Asuransi
Pada saat penulisan untuk diasuransikan sepenuhnya di brankas YFI v2, Anda memerlukan perlindungan untuk Yearn, MakerDAO, AAVE, dan CREAM. Anda dapat selektif tentang pencakupan mana yang akan dibeli dan hanya membayar untuk perlindungan protokol yang Anda yakini berisiko. Anda dapat melihat protokol mana yang berinteraksi dengan yVault ini untuk asuransi di [yearn hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1).

#### APY
APY: 2.866%
Perhitungan: Netto bulan lalu, disetahunkan.
Sumber: [vaults.finance: yearn v2 API](https://vaults.finance/all)
Catatan sampingan: APY memuncak untuk sementara waktu untuk 24%

Brankas ini adalah Brankas YFI terbaru dari tim Yearn dan telah membuktikan bahwa ia dapat bergerak cepat untuk melompat ke Farm YFI mendatang untuk hasil yang lebih baik jika aman untuk difarmingkan, seperti yang baru-baru ini mereka lakukan dengan farm BDP: Big Data Protocol.

- [Yearn.Finance: YFI Vault](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Halaman brankas Yearn menunjukkan APY Mingguan atau Bulanan berdasarkan rumus.  

___

## ***Setoran Langsung, kemungkinan IL***
Beberapa teknik yield-generating dirancang untuk mengurangi risiko IL, tetapi tidak menghilangkannya sepenuhnya. Contohnya adalah menyediakan likuiditas ke protokol Bancor. Jika dana disimpan di Bancor selama lebih dari 100 hari, dan mereka terkena IL, mereka akan disubsidi dengan BNT pada saat penarikan untuk jumlah nilai yang hilang yang setara (yang pengguna bebas untuk mengkonversi kembali ke YFI). Dalam praktiknya, ini berarti Anda tidak perlu khawatir tentang IL jika Anda menstake lebih dari 100 hari dengan Bancor.

### Bancor: YFI/BNT Single-Sided Protected Pool 

Bancor adalah AMM seperti Sushiswap dan Uniswap, tetapi dengan satu perbedaan utama yang diluncurkan di Bancor v2.1. Bancor sekarang memiliki perlindungan IL *jika* Anda tinggal di pool lebih dari 100 hari. Perlindungan ini dimulai pada 30 hari dan meningkat menjadi perlindungan penuh selama 100 hari. Saat ini, hadiah berinsentif untuk pool YFI telah berhenti, tetapi ada [proposal](https://gov.bancor.network/t/proposal-re-enable-lm-rewards-on-yfi/1838) untuk mengembalikannya, dan jika disetujui, itu berarti hasil yang lebih tinggi di pool YFI ini.


#### Situs

[Bancor YFI Pool](https://app.bancor.network/eth/portfolio/stake/add/single/0xAeB3a1AeD77b5D6e3feBA0055d79176532e5cEb8)

#### Alat-Alat

- [Ceazor's Guide to Bancor v2.1: YFI/BNT Single-Sided Protected Pool](https://youtu.be/LhLMhizDNwE?t=23)
- [Bancor Documentation](https://docs.bancor.network/)
- [Bancor Dune dashboard](https://duneanalytics.com/Bancor/bancor_1)
- [Bancor v2.1 Staking for (DeFi) Dummies](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e)
- [Zap into YFI/BNT Single-Sided Protected Pool](https://zapper.fi/invest?protocol=bancor&contractAddress=0x555981b82743aa443cb1c3002c85ba9d795d4596&modal=legacy-invest)

#### Resiko

Resiko kontrak cerdas Bancor dan memercayai [bancor v2.1 model](https://blog.bancor.network/proposing-bancor-v2-1-single-sided-amm-with-elastic-bnt-supply-bcac9fe655b). Bancor di [audit](https://docs.bancor.network/ethereum-contracts/security).

##### Asuransi

Untuk asuransi DeFi, Anda hanya perlu memastikan Bancor memiliki cakupan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.  

#### APY

APY: 3.7%
Perhitungan: Bulan lalu, disetahunkan.
Sumber: Bancor Team

- [YFI Pool APY](https://duneanalytics.com/queries/30793/62118): Satu klik pada setiap pool sampai hanya YFI yang tersisa. Ini akan menunjukkan statistik APY untuk pool.

___

## ***[Collateralized Debt Position](https://defipulse.com/blog/what-is-a-cdp)***

Protokol berbasis CDP memungkinkan Anda untuk menyetor YFI Anda dengan imbalan token yang dikeluarkan protokol dalam jumlah yang lebih sedikit, yang biasanya berupa stablecoin. Anda kemudian dapat menggunakan token yang dikeluarkan untuk bertani dan mendapatkan hasil. Menggunakan metode ini lebih memakan waktu daripada yang lain dan membutuhkan pemantauan CDP yang konstan untuk memastikan Anda berada di atas rasio likuidasi. Juga, Anda harus menggunakan stablecoin yang dicetak untuk menemukan yield di tempat lain dan mengelolanya juga.

Pada bagian ini, kami menggunakan rasio jaminan yang merupakan persen. Artinya adalah jika rasio jaminan adalah 69%, seperti dalam kasus Protokol Unit, maka jika harga YFI Anda yang disetorkan untuk mencetak stablecoin bernilai $1000, nilai maksimum yang dapat Anda cetak di stablecoin mereka adalah $690. Perhatikan bahwa ini adalah *MAX* yang dapat Anda pinjam dan jika melebihi rasio ini Anda akan dilikuidasi -- kami sarankan Anda meminjam jauh di bawah ini agar tidak terjadi pada Anda.


### MakerDAO
MakerDAO adalah Dapp tertua dan terlama untuk mengambil pinjaman dengan cryptocurrency Anda. Anda dapat menggunakan YFI Anda di MakerDAO untuk mencetak stablecoin DAI dan kemudian menggunakan DAI itu untuk menghasilkan pertanian dengannya.

#### Situs
- [Oasis.app](https://oasis.app/borrow)

#### Alat-Alat
- [DeFiSaver](https://app.defisaver.com/): help manage your CDP health ratio

#### Resiko
Resiko likuidasi jika CDP Anda melebihi rasio jaminan sebesar 57%, kegagalan kontrak pintar untuk Makerdao, kegagalan oracle, dan kegagalan kontrak pintar dari protokol tempat Anda menyetor atau meminjamkan DAI Anda.

#### Asuransi
Untuk asuransi DeFi, Anda perlu mengasuransikan MakerDAO dan juga protokol tempat Anda meminjamkan atau menyetorkan stablecoin DAI Anda agar memiliki cakupan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: -5.5% + (21.07% * 0.44) = 3.7708%
Perhitungan: Biaya Dai - (Stablecoin Yield Farm APY (Zap to v2 crvIB yVault) * % dari DAI yang Anda dapat cetak dan aman).
Catatan samping: Untuk meminjam DAI, Anda harus membayar biaya tahunan sebesar 5,5% kepada MakerDAO. Ini adalah contoh tetapi Anda bisa menghasilkan pertanian di mana saja.
Source: [Oasis App Borrow - Select collateral type YFI-A](https://oasis.app/borrow)

### Unit Protocol
Unit Protocol adalah sebuah  platform CDP yang mirip dengan MakerDAO, kecuali yang satu ini, memungkinkan Anda mencetak stablecoin USDP alih-alih DAI. Dengan Unit, mereka memiliki rasio jaminan 69% yang lebih tinggi dari MakerDAO dan mereka telah diaudit, tetapi mereka adalah platform yang lebih baru.

#### Situs
- [Unit Protocol](https://unit.xyz/)

#### Alat-Alat
- [Dokumentasi](https://docs.unit.xyz/)
- [Video Tutorial Ceazor](https://youtu.be/zlFBeoTHJUs?t=33)

#### Resiko
Risiko likuidasi jika rasio agunan melebihi 69%, kegagalan kontrak pintar untuk Protokol Unit, kegagalan oracle, dan kegagalan kontrak pintar tempat Anda meminjamkan atau menyetor USDP Anda. Anda dapat menemukan audit mereka [disini](https://github.com/unitprotocol/protocol_docs).

#### Asuransi
Untuk asuransi DeFi, Anda perlu mengasuransikan Unit Protocol dan di mana pun Anda meminjamkan stablecoin USDP Anda untuk mendapatkan perlindungan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: -5.5% + (21.07% * 0.53)  = 5.67%
Perhitungan: 5,5 biaya tahunan dari unit + (hasil dari penggunaan [v2 crvIB yVault](https://yearn.finance/vaults/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7) * % dari USDP yang dapat Anda cetak dan aman).
Catatan samping : Anda dapat menggunakan USDP Anda di mana saja jika Anda menemukan hasil yang lebih tinggi, kami menggunakan brankas USDP di Yearn sebagai contoh.
Sumber: [Unit Protocol](https://unit.xyz/asset/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)

___

## ***Meminjam & Meminjamkan***


Di bagian ini, kami membahas platform yang memungkinkan Anda meminjamkan YFI Anda, atau menggunakan YFI Anda sebagai jaminan untuk meminjam stablecoin, atau token lain, yang kemudian dapat Anda gunakan untuk bertani. Ini berbeda dari membuka CDP yang memungkinkan Anda mencetak stablecoin pada tingkat tahunan tetap sedangkan meminjamkan dan meminjam biasanya tingkat variabel. Dalam kategori ini, Anda tidak hanya perlu khawatir tentang di mana harus meminjamkan stablecoin yang Anda pinjam, tetapi juga suku bunga pinjaman dan pinjaman serta tingkat pemanfaatan pool. Jika pool YFI yang Anda pinjamkan kepada YFI Anda sepenuhnya digunakan, artinya orang-orang meminjam setiap YFI yang dipinjamkan, maka Anda harus menunggu untuk penarikan sampai ada likuiditas bebas di pool untuk melakukannya.

### Cream Finance
Cream.Finance adalah protokol pinjaman terdesentralisasi. Anda dapat meminjam stablecoin terhadap YFI Anda hingga 50% dari total jaminan Anda.

#### Situs
- [Cream.Finance](https://app.cream.finance)

#### Alat-Alat
- [Dokumentasi Cream](https://docs.cream.finance/)
- [Video Tutorial Ceazor : Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=598)

#### Resiko
Resiko likuidasi jika Anda melampaui rasio jaminan 50%, kegagalan kontrak pintar untuk Cream Finance, kegagalan oracle, dan kegagalan kontrak pintar untuk tempat Anda meminjamkan atau menyimpan stablecoin Anda. Juga, Anda perlu memeriksa secara manual bahwa APY di yield farm Anda melebihi APY pinjaman Anda atau Anda akan kehilangan uang. Anda dapat menemukan audit mereka [di sini](https://docs.cream.finance/audit-report).

#### Asuransi
Untuk asuransi DeFi, Anda perlu mengasuransikan Cream Finance dan di mana pun Anda meminjamkan stablecoin Anda untuk mendapatkan perlindungan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: 0.27% - 18.81% + (60.30% * .39) = 4.977%
Perhitungan: Supply APY (YFI) - APY Pinjaman(USDC) + (APY Stablecoin Yield Farm  (Zap to v1 crvEURS yVault) * % dari stablecoin yang Anda dapat pinjam dan aman).
Catatan Samping: Ini adalah contoh tetapi Anda bisa menghasilkan pertanian di mana saja.
Sumber: [Cream](https://app.cream.finance) dan [Yearn](https://yearn.finance/vaults/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC) Yields.

### Iron Bank
Iron Bank sama seperti Cream v1, tetapi mereka lebih selektif terhadap aset yang mereka daftarkan dan mereka membiarkan protokol daftar putih meminjam dana dengan sedikit atau tanpa jaminan seperti Alpha Homora v2 dan Yearn Finance. Karena protokol dapat meminjam dengan sedikit jaminan, tingkat pemanfaatan di Iron Bank cenderung lebih tinggi daripada di CREAM atau AAVE.

#### Situs
- [Iron Bank](https://v1.yearn.finance/lending)

#### Alat-Alat
- [Iron Bank Documentation](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

#### Resiko
Resiko likuidasi jika Anda melampaui rasio agunan yang diposting, kegagalan kontrak pintar untuk Iron Bank, kegagalan oracle, dan kegagalan kontrak pintar untuk tempat Anda meminjamkan stablecoin pinjaman Anda. Anda dapat menemukan audit mereka [di sini](https://github.com/trailofbits/publications/blob/master/reviews/CREAMSummary.pdf).

#### Asuransi
Untuk asuransi DeFi, Anda perlu mengasuransikan Ironbank dan ke mana pun Anda meminjamkan stablecoin Anda, untuk mendapatkan perlindungan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY:
Perhitungan:
Sumber:
Catatan: Saat ini Anda tidak dapat meminjam terhadap YFI Anda di Ironbank tetapi ini dapat berubah di masa mendatang.

### AAVE
AAVE adalah tempat lain di mana Anda dapat mengambil pinjaman di YFI Anda. Anda dapat meminjam hingga 40% dalam koin lain di AAVE. AAVE memiliki tarif tetap dan variabel untuk meminjam stablecoin, sedangkan di MakerDAO dan Unit selalu 5,5%. Dimungkinkan untuk mendapatkan tingkat yang lebih murah di AAVE untuk meminjam stablecoin tetapi Anda perlu memperhatikan tingkat jaminan dan tingkat pinjaman Anda jika tidak berubah saat mengambil pinjaman di sini.

#### Situs
- [AAVE](https://app.aave.com/)

#### Alat-Alat
- [Video Tutorial Ceazor: AAVE v2](https://youtu.be/eMP_uIwniHc?t=46)
- [Video Tutorial Ceazor: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=407)

#### Resiko
Resiko likuidasi jika Anda melampaui rasio jaminan 40%, kegagalan kontrak pintar untuk AAVE, kegagalan oracle (menggunakan Chainlink), dan kegagalan kontrak pintar untuk tempat Anda meminjamkan stablecoin Anda. Anda dapat menemukan audit mereka [di sini](https://docs.aave.com/developers/security-and-audits).

#### Asuransi
Untuk asuransi DeFi, Anda perlu mengasuransikan AAVE dan ke mana pun Anda meminjamkan stablecoin Anda, untuk mendapatkan perlindungan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: 0.11% - 3.98% + (60.30% * .31) = 14.83%
Perhitungan: Supply APY (YFI) - Borrow APY (TUSD) + (APY Stablecoin Yield Farm (Zap to v1 crvEURS yVault) * % dari stablecoin yang Anda dapat pinjam dan aman)
Catatan samping: Ini hanya sebuah contoh. Anda dapat meminjam stablecoin apa pun dan menggunakannya di yield farm pilihan Anda.
Sumber: [AAVE - YFI](https://app.aave.com/deposit/YFI-0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5)

___

## ***Penyediaan Likuiditas***

Bagian ini membahas strategi yang membongkarkan Anda ke impermanent loss, dan Anda juga harus menyediakan likuiditas di kedua sisi pool AMM. **Jika Anda ingin menstake YFI, Anda juga harus menambahkan jumlah $ ETH yang sama juga.**

### Sushiswap YFI/WETH Pool
Sushiswap adalah AMM yang umumnya memiliki hasil lebih tinggi daripada Uniswap karena poolnya disubsidi dengan hadiah SUSHI.

#### Situs
- [Sushiswap](https://app.sushi.com/yield)
#### Alat-Alat
- [YFI Sushi pools](https://analytics.sushi.com/tokens/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)
- [apy.vision YFI/ETH Sushi Pool](https://app.apy.vision/pools/sushiswap_eth-YFI-WETH-pool-0x088ee5007c98a9677165d78dd2109ae4a3d04d0c)
- [Zap ke dalam Sushiswap YFI/WETH Pool](https://zapper.fi/invest?protocol=sushiswap&contractAddress=0x088ee5007c98a9677165d78dd2109ae4a3d04d0c&modal=invest)

#### Resiko
Impermanent Loss, resiko kontrak pintar untuk Sushiswap.

#### Asuransi
Untuk asuransi DeFi, Anda hanya perlu mengasuransikan Sushiswap untuk memiliki cakupan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: 39.08%
Perhitungan: APY Tahunan dari staking token SLP sushi YFI/WETH Anda di sushi.
Sumber: [Sushiswap Yield](https://app.sushi.com/yield)

### Uniswap v2 YFI/WETH Pool
Umumnya pada AMM seperti Uniswap, Bancor, dan Sushiswap Anda ingin berada di pool dengan volume terbanyak karena itu berarti lebih banyak biaya untuk penyedia likuiditas. Rata-rata Sushiswap memiliki lebih banyak likuiditas daripada Uniswap jadi secara umum, akan lebih baik untuk LP di sana, tetapi Uniswap bisa memiliki hasil yang lebih baik daripada Sushiswap.

#### Situs
- [Uniswap YFI/WETH Pool](https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e)

#### Alat-Alat
- [Zapper Uni YFI/WETH](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)
- [IL Calculator for YFI/WETH Pair](https://app.sommelier.finance/pair?id=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&timeWindow=total): Ini dapat membantu menunjukkan berapa banyak Anda akan mendapatkan atau kehilangan jika Anda mulai LP di pool ini pada tanggal tertentu.
- [Uniswap Analytics YFI/WETH](https://info.uniswap.org/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Apy.vision YFI/WETH](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Zap into Uniswap v2 YFI/WETH Pool](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)

#### Resiko
Impermanent loss dan resiko kontrak pintar adalah masalah yang harus diperhatikan saat menyediakan likuiditas di Uniswap.

#### Asuransi
Untuk asuransi DeFi, Anda hanya perlu memastikan Uniswap memiliki cakupan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: 20.79%
Perhitungan: 30 hari terakhir disetahunkan setelah dikurangi IL.
Sumber: [apy.vision](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)

### Pickle.Finance pSUSHI YFI/WETH jar
Pickle adalah seperti jenis brankas Yearn (disebut jar)  yang memungkinkan Anda menggabungkan hadiah SUSHI Anda secara otomatis dari kumpulan SUSHI YFI/WETH dan mereka juga memberi Anda PICKLE sebagai hadiah tambahan untuk menstake mereka.

Untuk menyetor dengan Pickle.Finance, Anda perlu menstake SLP Anda (token LP Sushiswap) ke dalam pickle jar mereka [di sini](https://app.pickle.finance/jars) dan lalu menyimpannya di farm mereka [di sini](https://app.pickle.finance/farms). Anda sekarang juga dapat mengunci PICKLE untuk DILL, meningkatkan hadiah PICKLE Anda yang diperoleh di farm hingga 2,5x.

#### Situs
- [Pickle.Finance Farm](https://app.pickle.finance/farms)
- [Pickle.Finance Jar](https://app.pickle.finance/jars)

#### Alat-Alat
- [Dill boost calculator](https://app.pickle.finance/dill)
- [tutorial Ceazor: Yearn Zap into yveCRV-ETH Pickle Farm](https://youtu.be/Q3HELI9TfjQ?t=25)

#### Resiko
Impermanent Loss di posisi LP Sushiswap, resiko kontrak pintar untuk Pickle.Finance and Sushiswap.

#### Asuransi
Untuk asuransi DeFi, Anda perlu mengasuransikan Sushiswap dan Pickle.Finance untuk memiliki cakupan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: 43% tidak ditingkatkan, 58% ditingkatkan secara penuh.
Perhitungan: APY, peningkatan penuh ditingkatkan dengan mengunci PICKLE untuk DILL
Sumber: [Pickle.Finance Farms](https://app.pickle.finance/farms)

___

## ***Penyediaan Likuiditas yang di-Leverage***
Di bagian ini, Anda dapat mengalami impermanent loss, dan Anda harus memperhatikan rasio utang Anda untuk memastikan Anda tidak dilikuidasi..

### Alpha Homora v2
Alpha Homora v2 memungkinkan Anda mengambil token Uniswap atau Sushiswap LP Anda dan menyimpannya bersama mereka untuk bertani dengan leverage hingga 1,75x. Dengan Alpha Homora, Anda dapat mengolah pool ini dengan 1 aset (pada dasarnya zap otomatis ke aset lain di kumpulan), mereka mengotomatiskan semua langkah dengan 3 transaksi, dan token bertani di pool mendapatkan gabungan otomatis seperti di pickle.finance. Dengan cara yang sama pickle.finance akan memberi Anda PICKLE jika Anda menggunakan produk Farming mereka, jika Anda menggunakan leverage untuk mengolah pool AMM (Uniswap atau Sushiswap) Alpha Homora akan memberi Anda ALPHA di atas hasil yang biasanya Anda terima seperti yang ditunjukkan [di sini](https://alphafinancelab.gitbook.io/alpha-homora/where-does-apy-come-from-for-each-pool).

#### Situs
- [Alpha Finance](https://homora.alphafinance.io/farm)

#### Alat-ALat
- [Dokumentasi](https://alphafinancelab.gitbook.io/alpha-homora/)
- [Video Tutorial Ceazor](https://youtu.be/WKW8TsTyGOg?t=41)

#### Resiko
Risiko likuidasi jika rasio utang Anda melebihi 60% LTV (Loan to Value), kegagalan kontrak pintar untuk Alpha Homora v2, kegagalan kontrak pintar untuk pool yang Anda leveragekan (Uniswap atau Sushiswap). Anda dapat menemukan audit mereka [di sini](https://github.com/peckshield/publications/blob/master/reviews/PeckShield-Security-Review-Alpha-Homora-v1.0.pdf).

#### Asuransi
Untuk asuransi defi, Anda perlu mengasuransikan Alpha Finance dan AMM yang Anda gunakan, untuk memiliki cakupan penuh jika terjadi bug kontrak pintar yang menyebabkan hilangnya dana.

#### APY
APY: 75.38%
Perhitungan: Ini dengan leverage 1,5x di Sushi ETH/YFI Pool.
Sumber: [Alpha Homora - Farm](https://homora.alphafinance.io/farm)
