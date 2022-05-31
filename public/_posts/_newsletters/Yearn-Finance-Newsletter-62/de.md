---
layout: post
title: "Yearn Finance Newsletter #62"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-05-23'
translator: Nesyeth
---

![](./image1.jpg?w=900&h=453)

Willkommen zur 62. Ausgabe des Yearn Finance Newsletters. Mit diesem Newsletter möchten wir die Yearn- und die breitere Krypto-Community über die neuesten Nachrichten informieren, darunter Produkteinführungen, Änderungen in der Unternehmensführung und Aktualisierungen im Ökosystem. Wenn du daran interessiert bist, mehr über Yearn Finance zu erfahren, folge unseren offiziellen [Twitter](https://twitter.com/iearnfinance)- und [Medium](https://medium.com/iearn)-Konten.

**Zusammenfassung**

- V3 Vaults sind im Kommen
- Neue Webseite von Yearn Watch
- Yearn Allowlist
- Menschen von Yearn: MarcoWorms
- Yearn möchte dein YFI kaufen
- Vaults bei Yearn
- Nachrichten zum Ökosystem

## V3 Vaults sind im Kommen

![](./image2.jpg?w=900&h=429)

Yearn v3 Vaults ist eine komplette Überarbeitung unserer Systeme, und hier sind sechs der wichtigsten Funktionen, die wir mit Begeisterung einführen.

Junior-Tranchen: Yearn hat sich schon immer für "Nur-nach-oben"-Vaults eingesetzt - Vaults, die alles tun, um Hacks oder Verluste zu vermeiden. Der Kompromiss für die höhere Sicherheit ist oft eine geringere Rendite. v3 wird "Junior-Tranchen" einführen, um Vaults mit höherem Risiko und höherer Rendite zu ermöglichen.

Solidity: v2 Vaults wurden in Vyper geschrieben, und jetzt verwendet v3 Solidity. Das bedeutet, dass Yearn auf eine viel größere Entwicklerbasis zurückgreifen kann (laut DefiLlama sind ~69% des DeFi-Codes in Solidity geschrieben, gegenüber ~10% für Vyper). Das Beste von allem ist, dass Vyper-Fans es weiterhin mit v3-Modulen verwenden können.

Standardisierte Vault-Token mit ERC-4626: Yearn-Mitwirkende haben einen neuen Token-Standard für Ethereum mitentwickelt: ERC-4626. Die ertragsabhängigen Token von v3 werden mit jedem anderen Projekt, das auf ERC-4626 aufbaut, vollständig kompatibel sein.

Optimiert für Gasgebühren: Strategen verwenden ySwaps, um Token-Tauschvorgänge in Vaults durchzuführen. Zahlreiche Code-Verbesserungen werden diesen und andere Prozesse radikal gas-effizienter machen, was die APYs auf allen Vaults erhöhen sollte.

Flexible Strategien: Mehr Strategien mit besserer Modularität machen die Vaults von Yearn um ein Vielfaches flexibler. Sie sind nicht mehr auf 20 Strategien pro Vault begrenzt, und die Partner können sich sogar die Kontrolle über die Vaultverwaltung teilen. Wir können es kaum erwarten, zu sehen, wie andere Protokolle Yearn v3 nutzen.

Automatisierung: Durch die Nutzung von Keep3r Network wird Yearn v3 nahezu jeden Aspekt der Vaultverwaltung automatisieren. v3 wird eine 100%ige Automatisierung von Vaultd in Sichtweite bringen. Und es wird einen besseren MEV-Schutz mit Echtzeit-Ernten ermöglichen.

Das v3-Upgrade ist die größte Sammlung von Updates in der Geschichte von Yearn.

Mit Junior-Tranchen, Modularisierung, zusammensetzbaren, renditetragenden Token und einer leichter zugänglichen Programmiersprache wird v3 die Innovationsfähigkeit von Yearn weiter ankurbeln.

Um es mit den Worten von Skeletor Spaceman zu sagen: "Wir wollen schnell sein und nichts kaputt machen". v3 ist der Weg, wie Yearn dieses Ziel erreicht. Verrückter Versand im Anmarsch.

Lies [hier](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0) mehr über die v3 Vaults.

Wir laden dich ein, dich zu engagieren, Feedback zu geben und dich an der Yearn-Community zu beteiligen, indem du dich uns auf [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) oder [Github](http://github.com/yearn) anschließt. Komm und baue mit uns.

## Neue Website von Yearn Watch

![](./image3.jpg?w=900&h=705)

Die neue [yearn.watch](https://yearn.watch/) Website ist jetzt online und bietet viele Verbesserungen im Vergleich zu unserer letzten Version.

Zu diesen Verbesserungen gehören blitzschnelle Ladezeiten, neue UI/UX-Skins und Verbesserungen in Hülle und Fülle sowie Warnmeldungen.

Darüber hinaus wurde die neue Website um zahlreiche Details erweitert, u. a. um neue Visualisierungen für Risiken. Da die Website von einem neuen Team von Mitwirkenden übernommen wurde, wird es in Zukunft noch viel mehr zu tun geben.

## Yearn Allowlist

![](./image4.jpg?w=900&h=429)

Um die Yearn-Website noch sicherer zu machen, wurde kürzlich eine neue Funktion eingeführt, die sogenannte Erlaubnisliste. Im Wesentlichen ermöglicht sie, dass alle Transaktionen, die über die Website/SDK getätigt werden, anhand eines Vertrags auf der Kette validiert werden, der eine Aufzeichnung aller gültigen Anrufdaten enthält, die von der Website erzeugt werden können.

Dadurch wird verhindert, dass die Website für verschiedene Man-in-the-Middle-Angriffe anfällig ist, bei denen Daten an die Website übermittelt werden, sei es über die API von Zapper/0x oder die von Yearn selbst. Wenn zum Beispiel die API von Yearn eine Liste von Vaults mit bösartigen Adressen zurückgibt, mit der Absicht, dass die Nutzer eine davon genehmigen, wenn sie versuchen, eine Einzahlung vorzunehmen, würde die Allowlist die Transaktion blockieren.

Wir laden auch andere Protokolle dazu ein, ihre eigenen Erlaubnislisten zu nutzen, um ihre Sicherheit zu verbessern. Anweisungen zur Erstellung deiner eigenen Erlaubnisliste findest du weiter unten.

Klicke [hier](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4), um mehr über die Yearn allowlist zu erfahren.

## Menschen von Yearn: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms ist ein Mitarbeiter von Yearn, der sich mit Marketing beschäftigt und Inhalte schreibt, die du oft in diesen Newslettern und auf Twitter findest.

Bevor er zu Yearn kam, beschäftigte sich Marco mit Krypto und hatte genug von Fintech und dem VC-Modell. Er erfuhr von Yearn, nachdem er von DeFi erfahren und das Blaue Pille Manifest gelesen hatte.

Bei Yearn verbringt Marco seinen Tag normalerweise damit, an neuen Artikeln mitzuarbeiten oder sie zu schreiben. Wenn er nicht gerade Artikel schreibt, ist er in den sozialen Gruppen von Yearn unterwegs und hilft den Leuten, wenn sie Fragen haben.

Wie immer fördert Yearn eine lockere Kultur, die es jedem erlaubt, sich zu entfalten, und Marco erkennt an, dass wir unsere Mitwirkenden wirklich dazu ermutigen, das zu tun, woran sie glauben.

Sieh dir [das vollständige Interview](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e) vom Yearn-Mitwirkenden Defiglenn an.

## Yearn will dein YFI kaufen

![](./image6.jpg?w=900&h=450)

Wir haben gehört, dass einige Leute verkaufen wollen.

Toll, denn wir kaufen.

Da YFI für den Aufbau von Yearn von entscheidender Bedeutung ist (aufgrund seiner Rolle in unseren Vergütungs- und Bindungsstrategien), kaufen wir kontinuierlich YFI auf dem freien Markt zurück. Ab sofort werden wir diese Dienstleistung anstelle von vollständig manuellen Marktkäufen anbieten.

Unser Rückkaufsparschwein wird regelmäßig mit DAI aufgefüllt und ist jederzeit bereit, deine YFI zum aktuellen Preis zurückzukaufen, der von einem Chainlink-Orakel ermittelt wird. Die Statistiken sind jetzt in Echtzeit, um eine vollständige Transparenz der Rückkaufaktivitäten zu gewährleisten.

[https://yearn.clinic](https://yearn.clinic/) oder [https://buyback.yearn.finance/](https://buyback.yearn.finance/) sind die Links, um YFI an uns zu verkaufen.

## Vaults bei Yearn

Eine detaillierte Beschreibung der Strategien für alle unsere aktiven yVaults kannst du [hier](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) lesen.

## Nachrichten zum Ökosystem

[YFI wurde von Incognito Chain für den Datenschutz freigegeben](https://twitter.com/IncognitoChain/status/1527045614273544200)

[Sturdy Finance bietet die höchsten APYs auf USDC über alle Ketten hinweg, unterstützt von Yearn](https://twitter.com/pgpsam/status/1526301386173992961)

[Bancor v3-Strategien kommen bald zu Yearn](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap kündigt Iron Fleet in Zusammenarbeit mit Yearn an](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Sieh dir einen Yearn-Workshop von Skeleter Spaceman an](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Yearn-Pools werden jetzt individuell auf DefiLlama verfolgt](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Ein neuer Lido stETH Vault ist für den neuen konzentrierten Curve-Pool online gegangen](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Sieh dir die Aufzeichnung einer Coordinape-Diskussion an](https://twitter.com/YFI_interns/status/1525159821321830403)
