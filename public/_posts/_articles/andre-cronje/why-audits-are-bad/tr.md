---
title:  "Denetimler neden kötü"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: Dastronom
---

# Iron Bank Sabit Forex denetimi: Denetimler neden kötü

Sansasyonel bir başlık istedim. Kamu algısı üzerindeki denetim rolü kötüdür, kişisel kullanım için ise denetim iyidir.

Günümüzde denetimlerin incelenmek üzere değil, yalnızca bir satır öğesi olarak istendiğini göreceksiniz. “Proje denetleniyor mu? \[Evet\] \[Hayır\]", genellikle, denetime bağlantıya gerek bile kalmaz, sadece \[Evet\] \[Hayır\].

Sabit Forex'i örnek olarak kullanalım, “Proje denetleniyor mu?” \[Evet\] ve işte [denetim](https://github.com/andrecronje/fixed-forex-audit/blob/main/PeckShield-Audit-Report-ERC20-ibEUR-v1.0.pdf). Bağlantıyı bile açmış olabilirsiniz ve ardından bulgulara bile inmiş olabilirsiniz;

![](1.png?w=935&h=581)

Harika değil mi? 1 kural ve 1 bilgilendirme. Ama şimdi bağlamsal olarak bakalım, bu esasen bir ERC20 sözleşmesidir ve ibEUR ve sonraki ib-varlıklarının basit bir ERC20 uygulaması olduğunu gösterse de, ekosistemin geri kalanı ne olacak?

[ibEUR gauge](https://etherscan.io/address/0x9d7ca778d067045a9d6b871c9d28589875308018)  
[ibKRW gauge](https://etherscan.io/address/0x8992fd229b574b8083de1249bc6fd3711fda45dd)  
[Voting](https://etherscan.io/address/0xd9c8620c0c0b866b7b5180d2d70093165340326d)  
[Faucet](https://etherscan.io/address/0x7d254d9adc588126edaee52a1029278180a802e8)  
[ibEUR/ETH distribution](https://etherscan.io/address/0x1da8a6fe33bd35b99505d67843eec9fa124f2d4b)  
[ib rewards](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859)  
[Fee distribution](https://etherscan.io/address/0x27761efeb0c7b411e71d0fd0aee5dde35c810cc2)

Şimdi, "Sabit Forex denetim raporu" gibi basit bir tweet'te bırakmak benim için çok kolay ve bununla işim bitti ve bu yüzden, geçmişte bile, denetim raporlarını paylaşmaktan nefret ediyordum, onları bir rapor olarak kullanıyoruz. onay damgası, teknik bilgisi olmayan kişiler bunu "güvenli" olduklarının teyidi olarak kullanır. Yaptığımız hiçbir şey güvenli değil, yapmaya çalıştığımız hiçbir şey kolay değil ve gelecek garantimiz yok.

Ademi merkeziyetçilik bir hak değil, bir sorumluluktur, gerçek ademi merkeziyetçilik inanılmaz derecede zordur ve bir gecede gerçekleşmesi neredeyse imkansızdır.

Paranıza gerçekten sahip olmanın başka bir hoşluğu var, ancak içsel bir sorumluluğu var.

Ekipler, desteklemek için denetimleri kullanmalıdır, eşdüzey kodlamanın iyi çalışmasıyla aynı şey, veya basit bir eşdüzey ekran incelemesiyle, ama denetimler bir onay damgası değildir  denetimler bir garanti değildir ve denetimler bir güvenlik ağı değildir.

Aslında, yukarıdaki gibi bir denetim görsem, bir ekibin "denetlendiğini" söyleseler ve tek yaptıkları şeyin ERC20'lerini denetlemek olduğu bilsem, daha da temkinli olurum.
