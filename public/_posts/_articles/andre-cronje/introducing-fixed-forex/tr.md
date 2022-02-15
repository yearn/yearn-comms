---
title:  "Sabit Forex (USD, EUR, ZAR, JPY, CNY, etc) Tanıtımı"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: Dastronom
---

# Sabit Forex (USD, EUR, ZAR, JPY, CNY, etc) Tanıtımı

Yazar: [Andre Cronje](https://twitter.com/AndreCronjeTech) 

2 Haziran 2021

**Sorumluluk Reddi;**

- Token yok
- Denetim tamamlanmadı
- Sözleşme deneyseldir

**Ana Özellikler;**

- 0 yönetişim (veya çoklu imza)
- 0 yapılandırma
- 0 ücret
- 0 değer çıkarma
- Nazik tasfiyeler
- Zincire dayalı likiditeye dayalı dinamik para basma kapakları
- Zincir içi protokollere dayalı dinamik LTV'ler

**Fixed Forex**

Sabit Forex, değişmez, 0 ücret, 0 yönetişim, merkezi olmayan sabit para çerçevesi olacak şekilde tasarlanmıştır.

LTV'ler (Kredi-değer oranları) Compound, Aave v1, Aave v2 ve Iron Bank'tan türetilmiştir. Bu sistemler kabul edilen teminatlarını ekledikçe veya güncelledikçe, Sabit Forex de dinamik olarak güncellenir.

Darphane limitleri(bir kullanıcının belirli bir teminat karşılığında ne kadar likidite basabileceği) mevcut zincir üstü likiditeden türetilir, zincir üstü likidite ne kadar yüksek olursa, para basma kapakları o kadar yüksek olur.

Sabit Forex, nazik tasfiyeler sunar, bir kullanıcı borç pozisyonunu teminatıyla eşit duruma getirmek için mutlak minimum borç tutarı geri ödenir, artık piyasa düşüş olayları sırasında tüm teminatın tasfiye edilmesi konusunda endişelenmenize gerek kalmaz.

Bu sürümün amaçları doğrultusunda, sözleşme etherscan üzerinde doğrulanmayacaktır, ancak adresi ve ABI'yi aşağıda bulabilirsiniz;

[0x92FC8E6EfdF389e2527d14393b15F543f9a03420](https://etherscan.io/address/0x92fc8e6efdf389e2527d14393b15f543f9a03420)

[ABI](https://gist.github.com/andrecronje/4ce11e8603a7f61af4619a86647db1d4)

Tam sürüm, merkezi olmayan bir forex piyasasına izin vermek için curve.fi'nin kripto havuzlarına dayanacaktır.