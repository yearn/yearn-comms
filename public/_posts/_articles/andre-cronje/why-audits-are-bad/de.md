---
title:  "Warum Audits schlecht sind"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: Nesyeth
---

# Audit der Iron Bank Fixed Forex: Warum Audits schlecht sind

3.August 2021

Ich wollte einen reißerischen Titel. Eine Prüfung für die öffentliche Wahrnehmung ist schlecht, eine Prüfung für den persönlichen Gebrauch ist gut.

Heutzutage werden Prüfungen nicht mehr zur Überprüfung, sondern nur noch als Einzelposten verlangt. "Wurde das Projekt geprüft? [Ja] [Nein]", oft wird nicht einmal der Link zum Audit verlangt, sondern einfach nur [Ja][Nein].

Nehmen wir Fixed Forex als Beispiel: "Wurde das Projekt geprüft?" [Ja], und hier ist die [Audit](https://github.com/andrecronje/fixed-forex-audit/blob/main/PeckShield-Audit-Report-ERC20-ibEUR-v1.0.pdf). Vielleicht hast du sogar den Link geöffnet und dann zu den Ergebnissen hinuntergescrollt;

![](1.png?w=935&h=581)

Toll, oder? 1 niedrig und 1 informativ. Aber jetzt lass uns das im Kontext betrachten. Dies ist im Wesentlichen ein ERC20-Vertrag, und während es zeigt, dass ibEUR und nachfolgende ib-Assets eine einfache ERC20-Implementierung sind, was ist mit dem Rest des Ökosystems?

[ibEUR gauge](https://etherscan.io/address/0x9d7ca778d067045a9d6b871c9d28589875308018)  
[ibKRW gauge](https://etherscan.io/address/0x8992fd229b574b8083de1249bc6fd3711fda45dd)  
[Abstimmen](https://etherscan.io/address/0xd9c8620c0c0b866b7b5180d2d70093165340326d)  
[Faucet](https://etherscan.io/address/0x7d254d9adc588126edaee52a1029278180a802e8)  
[ibEUR/ETH-Verteilung](https://etherscan.io/address/0x1da8a6fe33bd35b99505d67843eec9fa124f2d4b)  
[ib-Belohnungen](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859)  
[Honorarverteilung](https://etherscan.io/address/0x27761efeb0c7b411e71d0fd0aee5dde35c810cc2)

Es wäre für mich ein Leichtes gewesen, es bei einem einfachen Tweet zu belassen: "Fixed Forex audit report", und das war's. Deshalb habe ich es auch in der Vergangenheit gehasst, Audit-Berichte weiterzugeben, denn wir verwenden sie als Gütesiegel, und nicht-technische Personen verwenden sie als Bestätigung, dass sie "sicher" sind. Nichts von dem, was wir tun, ist sicher, nichts von dem, was wir zu tun versuchen, ist einfach, und wir haben keine Garantien für die Zukunft.

Dezentralisierung ist eine Verantwortung, kein Recht, und echte Dezentralisierung ist unglaublich schwierig und fast unmöglich über Nacht zu erreichen.

Es ist sehr elegant, wenn man wirklich über sein Geld verfügen kann, aber es ist auch mit einer gewissen Verantwortung verbunden.

Teams sollten Audits ergänzend einsetzen, aus demselben Grund, aus dem Peer Coding gut funktioniert, oder sogar ein einfaches Peer Review, aber Audits sind kein Gütesiegel, Audits sind keine Garantie, und Audits sind kein Sicherheitsnetz.

Wenn ich ein Audit wie das oben beschriebene sehen würde, bei dem ein Team sagt, dass es "auditiert" wurde und alles, was es getan hat, war, seinen ERC20 zu auditieren, wäre ich sogar noch vorsichtiger.