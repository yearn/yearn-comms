---
title: "Wie werden die neuen Yearn Vault-Strategien unterstützt?"
image:
  src: ./image1.jpg
  width: 1280
  height: 800
date: '2022-02-02'
author: Marco_Worms
translator: Delace19
---

![](./image1.jpg?w=900&h=478)\
*Strategieprüfungsprozess*

Im letzten Artikel über Yearn [Yearn Vaults und Strategien](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) haben wir den **Prozess der Strategieprüfung** kurz umrissen. Wir werden nun näher darauf eingehen, wie jeder eine neue Strategie für Yearn vorschlagen kann und welche Schritte unternommen werden, um sicherzustellen, dass die gebilligten Strategien belastbar sind.

![](./image2.jpg?w=900&h=478)\
*Kurze Zusammenfassung: eine Strategie ist ein Vertrag, der mit den Mitteln von yVault investiert und Gewinne erzielt.*

Bevor der Stratege eine Strategie zur Billigung durch Yearn einreicht, sollte er ein Due-Diligence-Dokument darüber erstellen: [SNX](https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view) und [Vesper](https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O) sind gute Vorlagen, denen man folgen kann. Das Due-Diligence-Dokument ist wichtig, weil es alle Spezifikationen der Prozesse beschreibt, die in einer Strategie verwendet werden, und die allgemeinen Sicherheitspraktiken von Smart Contracts überprüft. Yearn nutzt dieses Dokument, um die Prozesse zu validieren und die Risiken des Erstellten zu bewerten!

In dem Dokument sollten unter anderem folgende Punkte aufgeführt werden:

- Dezentralisierung  des Protokolls: Verwendet das Protokoll eine Multisig? Welche Befugnisse hat sie? Sind Verträge veränderbar?
- Liste der Prüfberichte
- Alle Details zur inhärenten Strategie
- Pfad zur Bereitstellung in der Produktionsumgebung

Der Stratege kann eine Strategie mit Hilfe des [Vorlagenspeichers “brownie-strategy-mix”](https://github.com/yearn/brownie-strategy-mix) programmieren. Wenn die Strategie fertiggestellt und von zwei Kollegen geprüft ist, sollte sie auf ape.tax  bereitgestellt werden. Dies ist eine Website, auf der experimentelle Vaults in einer Produktionsumgebung getestet werden können.

![](./image3.jpg?w=352&h=28)\
*ape.tax vaults warnung!*

Nachdem das Dokument fertiggestellt ist und einige Ertragsszyklen erfolgreich und ohne Probleme abgeschlossen wurden, kann sich der Stratege nun an [die Yearn-Mitarbeiter wenden](https://docs.yearn.finance/developers/v2/DEPLOYMENT#deploying-a-new-strategy), um die Strategie vom [Ausschuss für sicheres Wirtschaften genehmigen](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533) zu lassen. Eine vollständige Sicherheitsüberprüfung wird von internen Yearn-Reviewern durchgeführt.

Nachdem alle Rückmeldungen berücksichtigt und der Code genehmigt wurde, kann die Strategie in die Produktion überführt werden, indem sie entweder neu bereitgestellt und an einen bestehenden Vault angehängt oder indem der Ape-Steuer-Vault bestätigt wird.

**Die Strategie ist jetzt gebilligt und live in [yearn.finance](https://yearn.finance/)!!**

Von nun an werden der Stratege und das unterstützende Komitee mit einer 10%-igen Performancegebühr aus dem Ertrag der Vaultstrategie belohnt. Da die Sicherheit ein wichtiges Anliegen ist, werden wir die Überwachungs- und Prüfungshäufigkeit erhöhen, wenn die Strategie den Gesamtwert erhöht:

- Wenn die Strategie mehr **als 10 Mio. in TVL** hat, sollte der Stratege einen Ausschuss aus drei Personen mit umfassenden Kenntnissen einsetzen, der die Strategie rund um die Uhr überwacht
- Wenn die Strategie **mehr als 100 Mio. TVL** umfasst, wird sie von einer angesehenen externen Wirtschaftsprüfungsgesellschaft geprüft, und wir beginnen mit wiederkehrenden internen Prüfungen der Strategie.

Weitere Informationen darüber, wie Strategien entwickelt und gebilligt werden, findest du in diesen Dokumenten:

- [Was sind Vaults und Strategien?](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)
- [Offizielle Dokumente - Erste Schritte mit Vaults und Strategien](https://docs.yearn.finance/developers/v2/getting-started)
- [Offizielle Dokumente - Einsatz eines Vaults und einer Strategie V2](https://docs.yearn.finance/developers/v2/DEPLOYMENT)
- [Vorschlag zu sicherem Wirtschaften bei Yearn](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533)
