---
layout: post
title: "Yearn Finance Newsletter #55"
categories: [Newsletters]
image: ./Yearn-Finance-Newsletter-55/image1.png
author: Yearn
translator: Nesyeth
publish: true
---

# Yearn Finance Newsletter #55

### Woche bis zum 23. Januar 2021

![](image1.png)

Willkommen zur 55. Ausgabe des Yearn Finance Newsletter. Ausgabe des Yearn Finance Newsletters. Mit diesem Newsletter möchten wir die Yearn- und die breitere Krypto-Community über die neuesten Nachrichten informieren, darunter Produkteinführungen, Änderungen in der Unternehmensführung und Aktualisierungen im Ökosystem. Wenn du mehr über Yearn Finance erfahren möchtest, folge unserem offiziellen [Twitter](https://twitter.com/iearnfinance)- und [Medium](https://medium.com/iearn)-Konten.

## Zusammenfassung

- Zustand der Fantom Vaults
- Fantom Ökosystem Spotlight - Yearn
- Yearn Web-Aktualisierungen
- Yearn Finance erklärt
- Vaults bei Yearn
- Nachrichten zum Ökosystem

# Zustand der Fantom Vaults

![](image2.png)

Mit dem Aufstieg von Andre Cronje & Daniele Sesta's neuem Projekt Solidly ve(3,3), sind Vampire Attacks zu Fantom gekommen, um sich für den Solidly Airdrop zu den Top 20 Projekten von TVL auf Fantom zu qualifizieren.

Um davon zu profitieren, kannst du deine Bestände in einem bequemen [yearn.finance](https://yearn.finance/#/home) Vault deponieren. Yearn holt die besten Renditen für 0xDAO, veDAO, Scream, Curve, Beets, Tarot und darüber hinaus. Unsere Fantom Vaults haben Strategien für alle, rotieren automatisch zur profitabelsten und realisieren alle 30 Minuten Gewinne, so dass du nicht auf dem Trockenen sitzen bleibst. Wir werden an deiner Seite sein, noch lange nachdem die Vampwars eine weitere Seite in einem Manga der Geschichte geworden sind.

Was willst du tun? Beginne noch heute mit der Einzahlung unter [yearn.finance/vaults](https://yearn.finance/vaults).

# Fantom Ökosystem Spotlight - Yearn

![](image3.png)

Tracheopteryx, ein Mitarbeiter von Yearn, gibt einen kurzen Überblick über Yearn und unsere Aufgabe, wobei unser Schwerpunkt auf den alltäglichen Nutzern, Partnern und Erbauern liegt.

Die Kernprodukte von Yearn sind die Vaults, die Iron Bank, Labs und die YFI/WOOFY-Token. Die Ursprünge von YFI werden weiter erforscht, und Tracheopteryx erklärt, warum Fantom die erste Sidechain ist, auf der Yearn aufbauen will.

Das Interview endet mit der Erwähnung bevorstehender Upgrades des YFI-Tokens, wie z. B. Rückkäufe für die Inhaber, xYFI, veYFI und Vault-Messgeräte.

Den vollständigen Artikel findest du [hier](https://fantom.foundation/blog/fantom-ecosystem-spotlight-yearn/?__cf_chl_rt_tk=rdrT2KHoFbjTe1yyUOmIDA92AeTmrMPKtQW5yT18mwk-1643234302-0-gaNycGzNCH0).

# Yearn Web-Aktualisierungen

![](image4.png)

Das dieswöchige Yearn-Web-Update enthält einen APY-Hover-Tooltip für die Benutzeroberfläche und eine Staubkorrektur für Vault-Abhebungen

In Kürze werden Sicherheitsverbesserungen mit einer detaillierten Beschreibung, verbesserte Multi-Chain UI/UX und Unterstützung für eine neue Kette folgen.

Das komplette neue Update findest du [hier](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7?r=2y79e&utm_campaign=post&utm_medium=web).

# Yearn Finance erklärt

![](image5.png)

Yearn Vaults sind renditestarke IOU-Token, die von Strategen entwickelt wurden, die ein schwieriges Prüfungsverfahren durchführen, um sicherzustellen, dass Yearn-Nutzer die beste risikoangepasste Rendite im Krypto-Ökosystem erhalten.

Eine zuvor bei Yearn verwendete Strategie wird im Ethereum yVault v1 angezeigt: Wenn ein Nutzer ETH einzahlt, wird die ETH dann bei MakerDAO als Sicherheit geliehen, die verwendet wird, um DAI zu leihen, die dann in den DAI yVault eingezahlt werden.

Einige häufige Fragen, die sich Nutzer stellen, sind: "Wie/wann verschiebt Yearn die Gelder innerhalb des Vault und erhebt Gebühren?" und "Wie garantiert Yearn eine Strategie, die immer Token generiert, anstatt sie zu verlieren?". Eine der Schlüsselfunktionen einer Strategie heißt "harvest". Wenn sie aufgerufen wird, löst sie einen Rebalancing-Prozess aus, bei dem Gewinne realisiert und wieder in die Strategie investiert werden. Strategen verwenden auch eine Reihe von Tools zur Überwachung von Daten auf der Kette, um den Zustand der Strategie sicherzustellen. Eines dieser Tools ist Yearn Watch, das eine schöne Benutzeroberfläche mit vielen wichtigen Metriken live auf der Blockchain präsentiert.

Yearn und Keep3r haben außerdem eine starke Synergie bei der Automatisierung der Aufgaben, die für Vaults erforderlich sind, um ihre Leistung zu erhalten. Um Strategien zu erstellen, benötigst du ein gutes Verständnis von Vyper (für yVaults) und Solidity (für Strategien). Die Grundvoraussetzungen, um ein Stratege zu werden, sind: Wissen über das Blockchain-Ökosystem, in dem du eingesetzt wirst, das du dir durch gründliche Nachforschungen über Tokenomics und die Dokumentation für alle in der Strategie verwendeten Token aneignen kannst, Solidity-Programmierkenntnisse, die dem Abschluss von Level 4 auf CryptoZombies entsprechen, und Wissen darüber, wie man mit Git, Eth-Brownie und Ganache umgeht.

Nachdem du die Grundlagen der oben genannten Werkzeuge verstanden hast, kannst du unsere Strategievorlage kopieren! Die Funktionen, die du in dieser Vorlage ändern solltest, um deine erste eigene Strategie zu erstellen, sind prepareReturn, adjustPosition und liquidate Positon. Du kannst die Strategievorlage [hier](https://github.com/yearn/brownie-strategy-mix) finden.

Vielen Dank an MarcoWorms für den Bericht, der [hier](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) zu finden ist.

# Vaults bei Yearn

Eine detaillierte Beschreibung der Strategien für alle unsere aktiven yVaults kannst du [hier](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) lesen.

# Nachrichten zum Ökosystem

[Mit der neuen Integration der Ambire Wallet direkt in Yearn Vaults einzahlen](https://twitter.com/AmbireWallet/status/1483087593285820416)

[Nutze Yearn Vaults auf Shapeshift DAO](https://twitter.com/ShapeShift_io/status/1484599573289086984)

[Neue Updates zur Zusammenarbeit von Tesseract Finance mit VESQ](https://twitter.com/tesseract_fi/status/1483484524143128578)

[Yearn ist der Nummer 1 Aggregator von TVL auf Fantom geworden](https://twitter.com/vannny365/status/1484385291947368448)

[Sieh dir ApeFramework an, das mit der Hilfe von Yearn-Mitarbeitern erstellt wurde](https://twitter.com/ApeFramework)

[Lies diesen kurzen Überblick über Yearn und seine Metriken](https://twitter.com/fuuurma/status/1484503576076599298)
