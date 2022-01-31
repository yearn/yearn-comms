---
layout: post
title:  "Yearn Finance and Money Robots"
categories: [ Articles ]
image: ./Yearn-Finance-and-Money-Robots/image1.png
author: Gemini/Cryptopedia
translator: gateway-504
publish: true
---

publikasi asli: [https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol](https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol)

# Yearn Finance dan Robot-Robot uang: Strategi DeFi Otomatis

Yearn Finance menawarkan serangkaian strategi investasi yang didukung oleh robot yang berisi "kebijaksanaan yang bersumber dari orang banyak" — komunitas Yearn sendiri.

![alt_text](image1.png)

## Ringkasan

Robot uang Yearn Finance menjalankan strategi investasi di seluruh platform keuangan terdesentralisasi (DeFi) dengan tujuan menghasilkan pengembalian tertinggi dengan risiko terendah. Strategi yang digunakan termasuk menyediakan aset untuk pinjaman, mendapatkan token proyek dengan yield farming, menyediakan likuiditas, atau kombinasi dari ini dan strategi investasi lainnya di berbagai protokol pinjaman DeFi. Protokol Yearn memungkinkan Anda untuk dengan mudah mengambil bagian dalam strategi investasi yang kompleks dengan menyediakan token ke platform. Rangkaian produknya yang berkembang dimaksudkan untuk menyederhanakan investasi di DeFi dan mendapatkan daya tarik dengan investor.

## Isi

- Yearn.Finance: yVaults
- yVault Strategy Case Studies: GUSD
- Rangkaian Produk DeFi
- Kebijaksanaan orang banyak

Yearn Finance mengembangkan produk yang mengotomatisasi dan bertujuan untuk menyederhanakan kompleksitas desentralisasi keuangan (DeFi) dengan "robot uang" yang berfungsi untuk memaksimalkan pengembalian dengan biaya tertentu. Yearn dimulai hanya dengan satu[Ethereum](https://www.gemini.com/cryptopedia/ethereum-smart-contracts-tokens-use-cases) pengembang — [Andre Cronje](https://www.gemini.com/cryptopedia/glossary#andre-cronje) — yang berusaha untuk mengotomatisasi dan mengoptimalkan pengembalian DeFi-nya sendiri. Sekarang telah berkembang menjadi salah satu komunitas terdesentralisasi yang paling aktif dan terlibat di Ethereum dengan fokus pada pengembangan cara yang semakin inovatif untuk menghasilkan pengembalian.

Robot uang mengacu pada strategi perdagangan otomatis yang dijalankan oleh Yearn di seluruh platform DeFi berbasis Ethereum. Ada banyak strategi investasi yang dapat digunakan di sejumlah protokol DeFi yang terus bertambah. Misalnya, robot uang Yearn dapat memperoleh biaya perdagangan di [Curve protocol](https://www.gemini.com/cryptopedia/curve-crypto-automated-market-maker), meminjam uang mengunakan [Aave’s flash loans](https://www.gemini.com/cryptopedia/aave-flashloans), dan meminjamkan aset kepada [Compound](https://www.gemini.com/cryptopedia/compound-finance-defi-crypto).

## Yearn.Finance: yVaults

Produk paling populer di ekosistem Yearn adalah [yVaults](https://www.gemini.com/cryptopedia/glossary#y-vaults), serangkaian kumpulan token yang mengikuti strategi investasi yang dialokasikan di seluruh platform DeFi. Menyetorkan token ke yVault secara otomatis mencetak token baru [yToken](https://www.gemini.com/cryptopedia/glossary#y-tokens), yang merupakan jenis [liquidity provider (LP) token](https://www.gemini.com/cryptopedia/liquidity-provider-amm-tokens). Token LP dibuat secara otomatis ketika token disimpan ke dalam sebuah [liquidity pool](https://www.gemini.com/cryptopedia/glossary#liquidity-pool) — dan berfungsi sebagai klaim atas aset dasar kumpulan. Setiap yToken dapat ditebus kapan saja untuk token yang awalnya disimpan ditambah hadiah apa pun yang terakumulasi saat token bekerja di yVault.

Misalnya, Anda dapat menyetor [GUSD](https://www.gemini.com/cryptopedia/gusd-gemini-dollar-stablecoin-features) ke yVault GUSD dan menerima token LP yang disebut yGUSD. Saat Anda menukar yGUSD dengan GUSD yang mendasarinya, Anda menerima GUSD tersebut ditambah penghasilan atau imbalan apa pun yang diakumulasikan GUSD dari penggunaan strategi yVault. YVaults Yearn memampatkan lapisan kompleks aplikasi dan komponen DeFi menjadi strategi perdagangan yang disederhanakan di mana investor menyediakan aset dan memegang token untuk berpartisipasi dalam strategi algoritmik yang canggih.

## Pelajaran Kasus Strategi yVault: GUSD

Strategi yVault bisa berubah-ubah, dan komunitas Yearn dapat memutuskan untuk mengubah atau menyesuaikan strategi karena menjadi kurang menguntungkan. Dalam strategi yGUSD untuk Oktober 2020 — yang telah diubah untuk pengoptimalan — strategi menghasilkan hasil bagi pemegang yGUSD melalui langkah-langkah berikut:

1. GUSD disetorkan kedalam sebuah Curve pool terdiri dari [stablecoins](https://www.gemini.com/cryptopedia/what-are-stablecoins-how-do-they-work) GUSD, [DAI](https://www.gemini.com/cryptopedia/dai-stablecoin-what-is-dai-token), USDC, dan USDT untuk menghasilkan biaya.
2. Token LP yang dihasilkan dari kumpulan stablecoin diStake di Curve untuk mendapatkan [CRV token](https://www.gemini.com/cryptopedia/glossary#crv-token).
3. 90% dari token CRV yang diperoleh dijual untuk DAI.
4. DAI disetorkan kembali ke kumpulan stablecoin GUSD, DAI, USDC, USDT asli untuk mendapatkan lebih banyak biaya.

Dari sudut pandang pengguna, langkah-langkah di atas berlangsung di bawah kap algoritmik. Strategi GUSD ini sendiri cukup sederhana dibandingkan dengan strategi yVault yang lebih terlibat dan lebih rumit, yang mungkin melibatkan peminjaman uang, menggunakan [leverage](https://www.gemini.com/cryptopedia/glossary#leverage), dan mempertahankan keterpaparan terhadap kekuatan pasar.

Misalnya, brankas yETH, yang masih dalam tahap percobaan hingga Desember 2020 dan belum sepenuhnya dirilis, menggunakan kedua [MakerDAO](https://www.gemini.com/cryptopedia/makerdao-defi-mkr-dai-coins) and Curve protocols dalam strateginya.Dengan strategi yETH, pemegang ETH tetap terkena apresiasi harga (atau depresiasi) ETH sambil mendapatkan hasil melalui langkah-langkah berikut:

1. ETH disetorkan ke MakerDAO sebagai jaminan.
2. DAI dipinjam dari MakerDAO menggunakan ETH yang disetorkan sebagai jaminan.
3. DAI yang dipinjam disimpan ke brankas yDAI.
4. Brankas yDAI menyetor DAI ke Curve untuk mendapatkan biaya.
5. Token LP yang dihasilkan dari kumpulan DAI distake di Curve untuk mendapatkan token CRV.
6. Token CRV dijual untuk ETH.
7. ETH disetorkan kembali ke MakerDAO sebagai jaminan.

Karena brankas yETH meminjam DAI dari MakerDAO, ada risiko dilikuidasi — atau robot uang menjual ETH Anda untuk membayar kembali pinjaman DAI Anda. Likuidasi terjadi ketika nilai agunan ETH turun di bawah ambang batas minimum 150% dari nilai DAI yang dipinjam. Untuk menghindari likuidasi, robot uang yETH bertujuan untuk menjaga nilai jaminan ETH aman 200% dibandingkan dengan nilai utang DAI. Jika nilai agunan ETH mulai turun di bawah target 200%, robot uang akan otomatis melunasi sebagian utang DAI agar tetap over-collateralized. Mengelola utang, agunan, dan likuidasi menambah lapisan kerumitan tambahan pada brankas Yearn.

Ini enting untuk mengenali risiko strategi compound yVault karena menjadi lebih kompleks berdasarkan ketergantungan pada lebih banyak protokol dan platform. Strategi seperti contoh yETH juga memiliki risiko yang melekat dalam penggunaan leverage serta risiko likuidasi dan kegagalan kontrak pintar.

## Sebuah Rangkaian Produk DeFi

Rangkaian produk Yearn adalah rangkaian produk DeFi yang terus berkembang dan berkembang. Selain berbagai strategi yVault, Yearn menawarkan beberapa produk aktif yang bersama-sama membentuk ekosistemnya.

Produk Yearn lainnya termasuk aplikasi yEarn yang berfokus pada penggunaan stablecoin seperti DAI dan menempatkannya untuk bekerja di kumpulan pinjaman berbunga tinggi di Compound atau Aave. Produk lain, Zap, dirancang untuk mengurangi biaya transaksi di Ethereum dengan menggabungkan berbagai transaksi manual menjadi satu transaksi klik tunggal yang lebih kompleks. Fitur yInsure menyediakan asuransi untuk kontrak pintar sebagai perlindungan jika terjadi kerentanan atau cacat dalam kode.

Ada juga banyak produk yang saat ini dalam tahap penelitian dan pengembangan, termasuk yTrade untuk memanfaatkan perdagangan, yLiquidate untuk mengotomatisasi likuidasi, dan yBorrow untuk pinjaman. Sejauh ini, Yearn telah terbukti menjadi lahan subur untuk penelitian dan pengembangan, dan penawaran produknya kemungkinan akan terus berkembang seiring dengan semakin matangnya ruang DeFi..

## Kebijaksanaan orang banyak

Robot uang Yearn menjalankan rencana strategi untuk investasi aset digital: bagaimana mengalokasikannya, di mana menempatkannya, kapan memindahkannya, dan kapan menjualnya. Faktanya, siapa pun dapat menemukan strategi baru dengan mempostingnya di forum tata kelola Yearn dan menjelaskan logika dan potensi pengembalian kepada komunitas. Jika disetujui oleh komunitas, strategi akan diterapkan dan pembuat strategi mendapatkan bayaran — mengambil untung dari strategi mereka yang berhasil.

Meskipun ruang DeFi menampilkan banyak mekanisme otomatis dan algoritmik di berbagai platformnya, strategi robot uang Yearn dibuat dan dipengaruhi oleh anggota komunitas. Manajemen komunitas Yearn, didistribusikan “[fair launch](https://www.gemini.com/cryptopedia/what-is-yearn-finance-yfi-coin-yearnfinance)” yang sangat langka [YFI platform governance tokens](https://www.gemini.com/cryptopedia/glossary#yfi-token),dan sifat kolaboratif menghadirkan pengingat tepat waktu akan kecerdikan dan kemanjuran manusia, bahkan di zaman algoritme otomatis. Dengan Yearn, ide bisa datang dari mana saja dan kebijaksanaan bersumber dari orang banyak. Efektivitas kebijaksanaan itu terus diuji, diulang, dan ditingkatkan secara real-time dengan uang sungguhan.

Yearn Finance menghadirkan proposisi unik dari layering, interoperabilitas, dan crowdsourcing di DeFi. Ini adalah eksperimen dalam investasi otomatis dan pengembangan produk, dalam insentif dan koordinasi. Dan, ini adalah eksperimen untuk melihat apakah komunitas yang terdesentralisasi dengan mandat luas untuk mengoptimalkan pengembalian dapat melakukannya secara efektif tanpa konflik organisasi. Sementara banyak platform DeFi fokus pada disintermediasi pemain dan sistem lama, inovasi Yearn adalah bertindak sebagai perantara yang menyatukan komunitas yang terdesentralisasi dan platform yang berbeda untuk kepentingan para penggunanya..
