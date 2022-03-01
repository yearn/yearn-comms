---
title: "Yearn Finance Newsletter #50"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator: Nesyeth
---

### Woche bis zum 11. Dezember 2021

![](./cover.jpeg?w=576&h=288)

Willkommen zur 50. Ausgabe des Yearn Finance Newsletters. Mit diesem Newsletter möchten wir die Yearn- und die breitere Krypto-Community über die neuesten Nachrichten informieren, darunter Produkteinführungen, Änderungen in der Unternehmensführung und Aktualisierungen im Ökosystem. Wenn du mehr über Yearn Finance erfahren möchtest, folge unserem offiziellen [Twitter](https://twitter.com/iearnfinance)- und [Medium](https://medium.com/iearn)-Konten.

## Zusammenfassung

-   Neu Yearn UI

-   YFI Tokenomics Aktualisierungsvorschlag

-   Aktualisierte Yearn Dokumente

-   YIP-64 erreicht nicht das Quorum

-   Yearn delegiert 23M veCRV an Convex

-   Yearn Snapshot-Strategie

-   Vaults bei Yearn

-   Nachhrichten zum Ökosystem

## Neu Yearn UI

![](./image2.jpg?w=512&h=512)

Wir haben [yearn.finance](https://yearn.finance/) von Grund auf neu aufgebaut und dabei jede Menge Feedback von unserer Community erhalten. Es ist jetzt live, probiere es aus 

Eine der interessantesten Funktionen (unserer Meinung nach) ist die Simulationsfunktion. Um in früheren UI-Versionen in Vaults einzahlen zu können, haben wir Zapper-Unterstützung hinzugefügt, so dass du zum Beispiel in den 3CRV-Vault mit ETH oder jedem Token, der von Zapper unterstützt wird, einzahlen kannst. Das isr schnell und bequem und impliziert, dass bei deiner Einzahlung ein Swap stattfinden wird. Du fragst dich, was bedeutet die Meldung "Simulating..." bedeutet? Nun, das "Simulating..."-Label prüft deine Eingabe-Token und mit Zappers API und Tenderly, einem großartigen Service, der eifrig eine Simulation deiner Transaktion ausführt. Diese Simulation berechnet, was die genaue Ausgabe sein würde, wie eine Vorschau deiner Einzahlung z.B. ETH>3crv.

Warum ist das nützlich und großartig? Nun, angesichts der beteiligten Protokolle und des dynamischen Status auf der Kette ist es schwer, eine gute Schätzung der Vault-Token, die du erhalten könntest, vorherzusagen. Dein Ausrutscher kann größer sein als erwartet, oder dein Token-Pfad kann fehlschlagen und du musst Gasgebühren zahlen usw. Mit dieser Simulation kannst entweder bei Einzahlungen oder Abhebungen Gasgebühren sparen.

Abhebungen sind ein weiterer Bereich, der schwer vorherzusagen ist. Mit Hilfe von Simulationen kannst du prüfen, ob du unter den Bedingungen des Vault eine Auszahlung vornehmen kannst. Denn je nach Strategie sind einige liquider als andere.

Wenn du die Meldung "Simulation Failed..." erhältst, stehen die Chancen gut, dass die Transaktion rückgängig gemacht wird, wenn du sie fortsetzt.

Die Benutzeroberfläche von v3 ist neu, und es wird weiter daran gearbeitet, die Benutzeroberfläche zu verbessern, damit sie noch reibungsloser funktioniert.

Schau dir die Entwicklungen [hier](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f) genauer an. Wenn du ein Entwickler bist, kannst du [hier](https://github.com/yearn/yearn-finance-v3) unterstützen.

## YFI Tokenomics Aktualisierungsvorschlag

Eine aktuelle Umfrage zur Unterstützung der Gemeinschaftsvorschläge zu YFI Tokenomics ist angelaufen.

Derzeit stehen 5 Optionen zur Abstimmung, wobei die Arbeitsnamen ySplit, veYFI, xYFI, BurnKeYs und Status Quo sind. Der [ySplit-Vorschlag](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) schlägt vor, den YFI-Token in 10.000 bis 1.000.000 aufzuteilen, um eine Verzerrung der Einheiten zu bekämpfen. Der [veYFI-Vorschlag](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit) gibt vor, YFI für einen bestimmten Zeitraum zu sperren, um Governance-Rechte zu erhalten, die die Vaults bestimmen, in die die Einnahmen für die Schatzkammer fließen sollen. [xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit) schlägt die Schaffung eines YFI Staking Vaults vor, in den überschüssige Einnahmen für die Schatzkammer geschickt werden sollen. [BurnKeYs](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit) fordert die dauerhafte Deaktivierung der Mintingfunktion des YFI-Tokens und damit die Begrenzung des Angebots auf 36.666 Token. Status Quo würde die YFI-Tokenomics in ihrem derzeitigen Zustand belassen und die Inhaber und potenziellen Investoren über die Vorteile informieren.

Stimme hier auf der [Snapshotseite](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea) ab. Vielen Dank an alle in der Gemeinschaft, die dazu beigetragen haben. Ein Update der Arbeitsgruppe, einschließlich Haiku, findest du [hier](https://docs.google.com/document/d/1-YEfXqXgTm-qzhPRUKs5allfX1XqYUOYwr_49FApnLU/edit).

## Yearn Dokumente

Vor einigen Monaten haben sich die Mitarbeiter von Yearn daran gemacht, unsere Dokumentationen neu zu schreiben, um sie ansprechender und zugänglicher zu machen.

Die komplett überarbeiteten Dokumente sollen Benutzern, Entwicklern und Partnern als Leitfaden dienen und deine Neugierde mit vielen bisher unbekannten Einträgen stillen.

Sieh dir die neuen Dokumente [hier](https://docs.yearn.finance/) an.

## YIP-64 erreicht nicht das Quorum

![](./image3.jpg?w=1100&h=759)

YIP-64: Anpassung der Gebühren für nicht-stablecoin yVaults kam in die Abstimmungsphase und endete damit, dass die Mehrheit gegen die Anpassung der Gebühren stimmte

Sieh dir den Vorschlag [hier](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2) an.

## Yearn delegiert 23M veCRV an Convex

![](./image4.jpg?w=873&h=615)

Yearn hat 23 Millionen veCRV an Convex Finance delegiert und dabei die neue native Boost-Delegationsfunktion von Curve genutzt. Dies wird die Renditen der Factory Pools für unsere beiden DAOs erhöhen. Dies hat keine Auswirkungen auf reguläre Pools, Gebühren oder Abstimmungen.

Das Delegieren von ungenutztem veCRV [hier](https://convex-boost-delegation.vercel.app/) erhöht die Factory-Rewards für alle Convex-Teilnehmer, was wiederum die Rendite für Convex und Yearn erhöht. Unsere Delegationstransaktion findest du [hier](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f).

## Yearn Snapshot-Strategie

In Vorbereitung auf mehrere wichtige Abstimmungen wurde die Snapshot-Strategie von Yearn aktualisiert.

Sie ermöglicht es dir, mit produktiven YFI abzustimmen, nämlich YFI in dem Wallet, alle Yearn v2 Vaults, Bancor, Balancer v2, Uniswap v2, Sushi (inkl. MasterChef), MakerDAO, Unit, Instadapp (inkl. MakerDAO).

Den Vertrag findest du [hier](https://github.com/yearn/snapshot-strategy) und [hier](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code) wird es zur Verfügung gestellt.

## Vaults bei Yearn

Eine detaillierte Beschreibung der Strategien für alle unsere aktiven yVaults kannst du [hier](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) lesen.

## Nachrichten zum Ökosystem 

[Verwende dein YFI sicher auf der Plattform von Qredo Network](https://twitter.com/QredoNetwork/status/1461031928564436994)

[Hör dir „Into the Byte Code“ mit tracheopteryx an](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet unterstützt jetzt die Beta-Vaults von Yearn auf Fantom](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract gehört zu den fünf am schnellsten wachsenden Protokollen auf Polygon](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[Sieh dir das Einführungsvideo von Coordinape an](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[Yearn auf Argents L2 Wallet mit Gebühren von nur $2](https://twitter.com/argentHQ/status/1468934923264401419)

[Tesseract-Vaults haben ihre Einzahlungslimits erhöht](https://twitter.com/tesseract_fi/status/1468217220966801413)

[Erhalte einen Rabatt auf ETHDubai-Tickets, indem du $yvBOOST oder $yvYFI hältst](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[Sieh dir Zappers Spotlight auf Yearn Simulations an](https://twitter.com/zapper_fi/status/1466447565302517765)

[Hör dir Facus Einblicke in Yearn mit dem On the Ledger-Podcast an](https://twitter.com/Ledger/status/1465678701635506185)

[YFI kann jetzt in der Flexa-App ausgegeben werden](https://twitter.com/FlexaHQ/status/1469092114038415364)
