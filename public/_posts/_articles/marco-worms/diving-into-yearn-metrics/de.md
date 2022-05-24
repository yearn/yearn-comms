---
title: "Eintauchen in die Metrik von Yearn"
image:
  src: ./image3.jpg
  width: 1400
  height: 625
date: '2022-02-17'
author: Marco_Worms
translator: Delace19
---

Eigene Nachforschungen sind eine notwendige Übung, wenn man sich mit Kryptowährungen beschäftigt, und für [yVaults und Strategien](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) gibt es eine Handvoll Ansichten, die du erforschen und nutzen kannst, um alle Zahlen zu analysieren. In diesem Artikel werde ich alle öffentlichen Yearn-Analyse-Ressourcen vorstellen, die von Strategen genutzt werden, um den Zustand von yVaults und Strategien zu überwachen. Wenn du also lernst, wie man mit diesen Tools umgeht, wirst den gleichen Informationsstand über Vaults haben wie ein Mitglied des Yearn-Teams. Die drei Tools, die wir heute erkunden werden, sind:

### **[Die Vaults bei Yearn](https://vaults.yearn.finance/)**

Ein umfassender Überblick über alle yVaults und Strategiebeschreibungen. Ein guter Ausgangspunkt, um zu erfahren, wie und wohin Vaultfonds delegiert werden.

### **[Yearn Vision](https://yearn.vision/)**

Ein komplettes interaktives Dashboard, das für die Analyse historischer Daten für alle Vaults und Strategien verwendet werden kann. Hier können wir jede Art von historischen Daten aus der Nutzung von yVaults und Strategien extrahieren und analysieren.

### **[Yearn Watch](https://yearn.watch/)**

Ein Dashboard von Strategen für Strategen, das schnellen Zugang zu nützlichen Daten über den Zustand der Strategien für jeden yVault bietet.

### **[Die Vaults bei Yearn](https://vaults.yearn.finance/)**

Die Vaults bei Yearn sind eine hervorragende Ressource, um zu verstehen, wie die Fonds von einem Vaults verwaltet werden. Hier findestdu Beschreibungen für alle yVaults und ihre Strategien:

![](./image1.jpg?w=1211&h=733)

Auf der linken Seite kannst du zwischen Ethereum- und Fantom-Depots wählen, die wie folgt zusammengefasst sind:

- **Stables**: yVaults für Stablecoins gemacht
- **DeFi Tokens**: yVaults für Token aus dem DeFi Ökosystem des gewählten Netzwerks (ETH oder FTM)
- **Curve Pools**: yVaults für Token aus dem [curve.fi](https://curve.fi/) Ökosystem
- **Ausgediente Vaults**: alte yVaults, die nicht mehr verwendet werden

Wenn du einen Bereich auswählst, wird eine Liste von Vaults angezeigt. Du kannst auf einen Vault klicken, um ihn zu erweitern und die Beschreibungen aller Strategien zu sehen, die er verwendet:

![](./image2.jpg?w=897&h=856)

Wenn du tiefer in die Zahlen für jeden Vault/jede Schicht eintauchen willst, musst du zu unserem nächsten Tool greifen! Das ist Yearn Vision:

## **Yearn Vision**

**Link: https://yearn.vision/**

Yearn Vision ist eine komplette Analyse-Dashboard-Suite mit vielen vorgefertigten Ansichten zur Analyse historischer Daten aus Vaults und Strategien. Beginnen wir mit der Startseite und sehen wir uns an, was hier zu finden ist:

![](./image3.jpg?w=1400&h=625)

![](./image4.jpg?w=1400&h=445)

Auf dieser Seite findest du viele Informationen über den allgemeinen Zustand aller Yearn Vaults.

Es gibt Informationen über TVL (Total Value Locked), die alle Gelder darstellen, die in allen yVaults hinterlegt sind. Wir können sowohl den gesamten TVL von Ethereum und Fantom als auch die einzelnen Netzwerk-Slice sehen. Es gibt einige Diagramme, die tägliche/wöchentliche Deltas zeigen, die Vergleiche mit aktuellen und vergangenen Daten darstellen. Der "Aktienkurs" ist ebenfalls eine wichtige Metrik, die man verfolgen sollte, denn er stellt die Lebenszeitgewinne des Vaults in Form einer Zahl dar, die mit der Zeit über 1,0 wächst. Unten siehst du ein Beispiel für den Aktienkurs von ETH zu yETH. Hier siehst du, wie der "Aktienkurs" funktioniert:

![](./image5.jpg?w=1400&h=849)\
*Wie der "Aktienkurs" funktioniert*

Zurück zum Vision-Dashboard: In der oberen rechten Ecke kannst du jederzeit den Zeitbereich ändern, wodurch die meisten Diagramme aktualisiert werden.

![](./image6.jpg?w=226&h=469)\
*Ändere den Zeitbereich in der oberen rechten Ecke*

Lass dich nicht von den Diagrammen mit vielen Farben abschrecken, sie zeigen normalerweise alle Vaults/Strategien und du reduzierst das Rauschen, indem du nur denjenigen auswählen, über den du mehr erfahren möchtest. Du kannst auf die Liste der Elemente klicken, um die Analysen nach einem einzelnen Teil zu filtern. Bei den meisten Diagrammen sind standardmäßig alle Elemente ausgewählt, sodass du den Vault auswählen musst, den du prüfen möchtest:

![](./image7.jpg?w=884&h=231)\
*Ungefiltert*

![](./image8.jpg?w=895&h=258)\
*Gefiltert* 

“time since last report” zeigt an, wann diese Vaultstrategien zuletzt geerntet wurden. Das obige “Filtered” Diagramm ist ein Beispiel für alle Erträge aus dem USDC yVault, die in der letzten Woche stattgefunden haben. Der vertikale Tropfen bedeutet, dass eine Ertrag stattgefunden hat, so dass Zeit seit des letzten Ertrags/Berichts “time since the last harvest/report” auf 0 geht

Du kannst auf der linken Seite des Bildschirms zu anderen Dashboards wechseln:

![](./image9.jpg?w=225&h=221)\
*Alle Dashboards anzeigen: https://yearn.vision/dashboards*

Hier findest du eine Fülle von Informationen darüber, was bei Yearn passiert!

![](./image10.jpg?w=1395&h=565)\
*Von Strategen verwendete Dashboards*

Werfen wir einen Blick auf das Dashboard “Vault Overview”:

![](./image11.jpg?w=1400&h=640)\
*Vault Übersicht Dashboard: https://yearn.vision/d/ibsIoEknkdffd/vault-overview?orgId=1*

In diesem Dashboard der Vault Übersicht können wir sehen, dass es 6 aktive Strategien für den USDC yVault gibt: "totalDebt" ist der Betrag, den der Vault an diese Strategien delegiert, "amount of free funds" bedeutet, wie viele Mittel für eine billige (gas-mise) Abhebung zur Verfügung stehen. Wenn diese Zahl kleiner ist als der Betrag, den du abheben möchten, dann wird die Transaktion ein bisschen mehr Gas kosten, weil der Vault Mittel nehmen muss, die an Strategien delegiert werden und dabei mehr Operationen durchführen muss.

Wir werden später yearn.watch verwenden, um zu sehen, wie die Mittel anteilig für jede Strategie verteilt werden.

Es gibt auch großartige Dashboards, um den allgemeinen Zustand von Yearn zu überprüfen, und du kannst sogar die Schatzkammer der DAO überwachen:

![](./image12.jpg?w=1363&h=201)\
*Yearn Dashboard zur Schatzkammer: https://yearn.vision/d/9_ppKhd7z/treasury*

## **Yearn Watch**

**Link: https://yearn.watch/**

Yearn Watch ist ein Dashboard, das von Strategen für Strategen gemacht wurde, damit du schnell durch wichtige Informationen über den Zustand jeder Strategie navigieren kannst. Auf dem Startbildschirm wirst du bereits mit allen Vaults begrüßt:

![](./image13.jpg?w=1255&h=799)

Wenn du einen Vault öffnest, siehst du Informationen zur Vermögensverteilung. Ich habe einen Teil dieser Ansicht im Abschnitt Yearn Vision verwendet, hier siehst du die vollständige Ansicht für den USDC yVault:

![](./image14.jpg?w=855&h=855)

Die Ansicht "Details" zeigt alles über die Gesamtverteilung des Fonds. Wenn du zur Ansicht "strategies" wechselst, kannst du noch tiefer eintauchen und jede Strategie einzeln untersuchen und ihre Verträge und Transaktionen auf der Kette leicht finden.
Eine aufschlussreiche Ansicht innerhalb einer Strategie sind die "reports" (Ernten), die dir die letzten 10 Ernte-Transaktionen zeigen, so dass du die Echtzeit-Gewinne des Vaults und den Gewinn aus jeder Ernte überwachen kannst:

![](./image15.jpg?w=1253&h=759)

Erweitere einen einzelnen Bericht, um weitere Informationen zu erhalten:

![](./image16.jpg?w=1157&h=415)

### **Das ist Yearn Leute!**

Ich hoffe, dieser Artikel hilft den Leuten, gute Informationen über ihre Einlagen bei Yearn zu erhalten! Es ist großartig, auf die gleichen Tools zugreifen zu können, die die Veteranen, die an diesen Produkten arbeiten, zur Überwachung verwenden. Es gibt eine Menge wertvoller Informationen über die Vergangenheit und Gegenwart der yVaults und Produkte von Yearn.

Autor: [Worms](https://twitter.com/MarcoWorms), Überprüfer: [Dark Ghosty](https://github.com/DarkGhost7)

Vielen Dank, Dark Ghosty, dass du all diese Dashboards durchgegangen bist und mir gezeigt hast, wie ich sie bedienen kann ❤

*Erstellt in [yearn.finance](https://yearn.finance/)*
