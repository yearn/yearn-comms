---
layout: post
title: "Yearn Finance Newsletter #59"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1152
  height: 576
author: Yearn
date: '2022-04-06'
translator: Nesyeth
---

### Woche bis zum 5. April 2022

![](./image1.jpg?w=1456&h=733)

Willkommen zur 59. Ausgabe des Yearn Finance Newsletters. Mit diesem Newsletter möchten wir die Yearn- und die breitere Krypto-Community über die neuesten Nachrichten informieren, darunter Produkteinführungen, Änderungen in der Unternehmensführung und Aktualisierungen im Ökosystem. Wenn du mehr über Yearn Finance erfahren möchtest, folge unserem offiziellen [Twitter](https://twitter.com/iearnfinance)- und [Medium](https://medium.com/iearn)-Konten.

## Zusammenfassung

- Unser neuester und leistungsfähigster Vault stellt sich vor
- Strategiegespräche mit Facu an der ETHDubai
- Beitritt zur Yearn DAO: Einarbeitung
- Wie Yearn Tenderly nutzt
- Yearn-Mitwirkende
- YFI-Internat
- Vaults bei Yearn 
- Nachrichten zum Ökosystem

# Wir stellen unseren neuesten und leistungsstärksten Vault vor

![](./image2.png?w=900&h=473)

Unser neuester Curve Rocket Pool Vault ist live, und du kannst ETH-Einsatzprämien auf zwei Seiten eines Curve Finance Pools mit Rocket Pool ETH (rETH) und Lido stETH (wstETH) verdienen. Da auf beiden Seiten des Pools ETH-Token liquide sind, verdienst du Ethereum-Einsatzprämien, $CRV-Emissionen und Curve-Handelsgebühren. Yearn wird CRV- und CVX-Emissionen automatisch ernten und wieder in den Vault einzahlen, um deine Rendite zu steigern.

Verwende Yearn Zaps, um alle wichtigen Token ($ETH, $USDC, etc.) in diesen Vault einzuzahlen. Zaps wandelt deine Einzahlung automatisch in rETH+wstETH um, bündelt sie auf Curve und setzt sie auf Yearn in einer einzigen Transaktion ein.

Du kannst dem Curve Rocket Pool auch manuell beitreten, indem du Rocket Pool ETH (rETH) + Lido stETH (wstETH) auf Curve einzahlst oder indem du deine rETH+wstETH LP Token auf Yearn einzahlst.

Jetzt einsteigen unter [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults)

# Strategiegespräche mit Facu an der ETHDubai

![](./image3.jpg?w=1024&h=512)

Auf der jüngsten ETHDubai-Veranstaltung geht Yearn-Mitarbeiter Saltyfacu auf die allgemeine Essenz der Strategien bei Yearn, unserem Kerngeschäft, ein.

Er erörtert die Beziehungen zwischen Vaults, bei denen es sich um in Vyper geschriebene ERC-20 handelt, und Strategies, dem in Solidity geschriebenen Buchhaltungsteil von Yearn. Strategien erledigen alle schweren Arbeiten für das Yearn-Ökosystem. yvUSDC ist zum Beispiel ein Vault, der bis zu 20 Strategien einsetzt.

Die Strategien sind jeweils mit einer anderen Kapitalzuweisung verbunden und können ohne Kapital angeschlossen werden. Der reibungslose Ablauf hier ist, dass Benutzer mit Vault-Token interagieren, die zugrunde liegende Strategien haben, um mit anderen Protokollen und Dexen zu interagieren.

Um eine Strategie zu schreiben, benötigst du Git, Eth-brownie, Ganache, das Brownie-strategy-mix Repository und VS-Code. Was die Erfahrung betrifft, so benötigst du einige Programmierkenntnisse, den Abschluss von CryptoZombies Level 4 und höher, ein Verständnis dafür, wie DeFi-Protokolle interagieren, und eine Menge Willenskraft.

Die Fertigstellung und Veröffentlichung einer Strategie erfolgt in sechs Schritten: sorgfältige Überprüfung, Codierung, Überprüfung du andere, Experimentieren (mit Ape Tax Vault), Core Dev Überprüfung/Safe Farming Kommittee und schließlich Produktion. Nach all diesen Schritten musst du die Strategie weiterverfolgen, um sicherzustellen, dass alles wie vorgesehen funktioniert.

Sieh dir den gesamten Vortrag [hier](https://youtu.be/ooYgIMlqITQ?t=21266) an, beginnend ab 5:54:26.

Wir laden dich ein, dich zu engagieren, Feedback zu geben und sich an der Yearn-Community zu beteiligen, indem du dich uns auf [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) oder [Github](http://github.com/yearn) anschließt. Komm und baue mit uns.

# Beitritt zur Yearn DAO: Einarbeitung

![](./image4.png?w=1024&h=768)

In diesem Artikel bieten Cryptouf und Farrahmay eine Einführung in den Einarbeitungssprozess für den Beitritt zu einer DAO, insbesondere Yearn. Im Folgenden findest du eine Zusammenfassung ihres Dialogs.

Was sollte ein neuer Teilnehmer beachten, wenn er sich entscheidet, einer DAO beizutreten? Er muss sich über die DAO, der er beitreten will, und deren Ethos informieren.

Angesichts des täglichen Zustroms neuer Leute zu Web3 kann ich mir vorstellen, dass es eine Flut neuer Mitwirkender über Kanäle wie Discord, Telegram und Twitter geben wird. Was tut Yearn, um die Mitwirkenden auf den Erfolg vorzubereiten? Wir halten es für wichtig, unseren Auftrag und unsere Ziele klar zu formulieren. Wir hoffen, dass dies die richtigen Leute anzieht, die bei Yearn mitarbeiten wollen.

Einarbeitung kann für verschiedene DAOs unterschiedliche Dinge bedeuten. Wie definierst du DAO Einarbeitung? Verfügt Yearn über einen formellen Einarbeitungsplan für neue Mitwirkende? Unser Einarbeitungsprozess basiert auf vier Punkte - Einhaltung, Klärung, Kultur und Verbindung.

Was sollten Mitwirkende tun, um sicherzustellen, dass sie erfolgreich sind, wenn sie einer DAO beitreten? Jede Person, die sich einer DAO anschließt, verfügt über ein unterschiedliches Maß an Web3-, DeFi-, Technik- und DAO-Kenntnissen und Vertrautheit. Um erfolgreich zu einer DAO beizutragen, muss man selbständig sein und darf sich nicht scheuen, seine Meinung zu sagen und Fragen zu stellen.

Die erste Welle von Mitwirkenden, die sich einer DAO anschlossen, waren weniger an einer Vergütung interessiert, sondern konzentrierten sich auf den Aufbau des Rahmens und der Grundlagen einer DAO. Bei neuen Beitrittswellen ist die Entlohnung ein entscheidender Faktor, um sicherzustellen, dass sich der Einzelne belohnt fühlt und die nötige Zeit aufbringen kann, um die DAO langfristig wachsen zu lassen. Yearn verwendet Coordinape, um seine Mitglieder für ihre Beiträge zu belohnen. Kannst du uns mehr darüber erzählen, wie Yearn Finance Coordinape nutzt und welche Vor- und Nachteile das Tool hat? Coordinape ist ein Tool für DAOs, um Anreize zu schaffen, zu belohnen und ihre Community-Mitglieder zu fördern.

Coordinape hat eine Funktion, mit der man für Leute bürgen kann, so dass alle Mitglieder die Möglichkeit haben, jemanden hinzuzufügen. Diese Funktion ist erstaunlich für die Dezentralisierung, aber je mehr Mitglieder ein Kreis hat, desto mehr kann diese Funktion missbraucht werden, und die Mitglieder können für ihre Freunde bürgen. Was tut Yearn, um dies zu verhindern? Einige Mitglieder sind vielleicht ein paar Monate lang dabei und verlassen dann die DAO oder sind einfach ein paar Monate lang weniger aktiv (aus welchen Gründen auch immer!). In einer utopischen Welt sollten die Mitglieder dies den anderen Mitgliedern klar mitteilen, um weniger Belohnungen zu erhalten, oder sie würden sich sogar abmelden, damit sie nicht belohnt werden, wenn sie einige Zeit nicht gearbeitet haben. Aber ist das wirklich der Fall? Jedes Instrument kann missbraucht werden, und Coordinape ist da keine Ausnahme.

Den vollständigen Artikel findest du [hier](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc). Besonderen Dank an den Autor Cryptouf und den Yearn-Mitarbeiter Farrahmay für ihre Einblicke.

# Wie Yearn Tenderly verwendet

![](./image5.png?w=1200&h=675)

Jurastudenten haben Adderall. Yearn Strategen haben Tenderly. Mit Tools zur Überwachung, Alarmierung, Fehlersuche und Ereignisanalyse macht Tenderly aus hartgesottenen DeFi-Nutzern überall Übermenschen.

Aber es ist so einfach, dass jeder es nutzen kann. In seinem neuesten Beitrag führt Yearn-Mitarbeiter MarcoWorms dich durch den Prozess der Einrichtung von Telegram-Benachrichtigungen für praktisch jede Aktion auf der Kette auf allen führenden EVM-Blockchains. Null Kodierung erforderlich.

Klick [hier](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba), um ein Beispiel aus der Praxis zu sehen. Dort zeigt Worms dir genau, wie du einen Telegram-Bot einrichten, der Ein- und Auszahlungen aus dem $SPELL yVault überwacht und dich benachrichtigt, wenn diese Transaktionen stattfinden.

Was als Nächstes kommt, bleibt dir überlassen.

# Yearn-Mitwirkende

![](./image6.jpg?w=800&h=510)

Wenn Yearn eine Eigenschaft mehr als jede andere schätzt, dann ist es die Bereitschaft zum Handeln. Sie ist so tief in der Yearn-Kultur verwurzelt, dass wir unsere aktivsten Mitarbeiter *Macher* nennen. Das ist ein Substantiv und eine Beschreibung, aber es ist mehr als das ... es ist ein Gebot zum Handeln.

Als dezentralisierte DAO hat Yearn keine Chefs, keine Kleiderordnung, keine Aufstiegschancen oder Golfausflüge mit dem CEO. Yearn hat nur Mitwirkende. Wie bei jeder DAO gibt es verschiedene Stufen der Beteiligung.

Auf der ersten Ebene befinden sich die Nutzer, Token-Inhaber, Wähler und Investoren. Eine Ebene tiefer gibt es die Mitwirkenden - Menschen auf der ganzen Welt, die aktiv Zeit in eines oder mehrere der vielen Projekte von Yearn investieren.

Die Mitwirkenden stimmen ihre Bemühungen über das von Yearn entwickelte DAO-Koordinierungstool ab (und werden, wenn sie wollen, dafür entschädigt): Coordinape. Dort teilen sich die Mitwirkenden in Kreise auf und verbürgen sich jeden Monat für die Arbeit der anderen. Einige arbeiten eine Stunde pro Woche an Yearn, andere mehrere Stunden am Tag. Aufgaben werden nicht zugewiesen, sondern gesucht. Und es gibt kein starres Silo, in dem die Mitwirkenden gezwungen sind, zu bleiben.

Sie können Grenzen überschreiten, um anderen Kreisen zu helfen: von der Technik bis zur Grafik, von Übersetzungen bis zu Strategien, vom Schreiben bis zur Planung von Veranstaltungen. Die Mitwirkenden kommen in allen Formen und Größen und aus allen Regionen der Welt. Sie sind Animateure des Fantastischen, experimentierfreudige Programmierer und Rund-um-die-Uhr-Projektmanager, die das Gefühl eint, dass die Zeit für Veränderungen gekommen ist. Mit jedem Beitrag vertiefen sie ihr Vertrauensverhältnis innerhalb der DAO.

Viele arbeiten hauptberuflich in anderen Bereichen. Einige tragen zu einem halben Dutzend DAOs bei. Aber alle sind von ihrer Leidenschaft für das, was Yearn aufbaut, angezogen. Wenn ein Mitwirkender sich voll und ganz engagieren will, wird er vielleicht ein Macher.

Aber was bedeutet das genau? Die Macher tragen mit größerer Regelmäßigkeit bei. Sie helfen, alle beweglichen Teile der großen Maschine zu orchestrieren. Sie sind keine Angestellten. Vielmehr sind sie das, was der Name beschreibt: Sie sind Macher. 

Sie tun das, was Yearn tun muss, um sich weiterzuentwickeln, zu wachsen und sich zu verändern. Sie rennen gegen Mauern. Sie reißen sie nieder. Sie bauen auf, worüber andere nur reden. Wie alle Mitwirkenden von Yearn akzeptieren auch die Macher nicht den Status quo. Sie sind Agenten des Wandels. Sie sind Entdecker. Sie sind Suchende. Sie sind Erbauer. Und sie glauben, dass in jedem von uns ein Macher steckt.

Die Industrie und die Konzerne haben Generationen damit verbracht, den Willen zum Handeln zu unterdrücken. Sie wollen, dass wir erst fragen, bevor wir handeln. Sie verwechseln Analyse mit Fortschritt. Sie beauftragen Berater mit der Entwicklung ausgefallener Fahrpläne. Sie setzen Markierungen und Meilensteine für jeden Zentimeter des Fortschritts und müssen wissen, wie sich jede Minute, die sie aufwenden, in Gewinne umsetzt. Es gibt allerdings einen Grund, warum Unternehmen die Blockchain nicht erfunden haben

Zu Yearn beizutragen ist ein Akt der Auflehnung. Es ist ein Akt der Rücknahme der Erlaubnis. Es ist nicht nur ein Träumen. Es ist Tun.

CODA

Bei Yearn ist die Tür immer offen. Aber nur du kannst hindurchgehen.

# YFI-Internat

![](./image7.png?w=968&h=625)

Das YFI-Internat ist ein neuartiges Programm für angehende Strategen, um Fragen zu stellen und zu lernen. Es ist nicht wie eine normale Schule, sondern erfahrene Strategen halten regelmäßig Sprechstunden ab, um jungen Talenten zu helfen, sich weiterzuentwickeln.

Um dem YFI-Internat beizutreten, musst du den allgemeinen Einarbeitungsprozess durchlaufen, Interesse an der Strategieentwicklung bekunden, an einer Strategie arbeiten oder aktiv eine Strategie entwickeln und schließlich zur Teilnahme eingeladen werden.

Darüber hinaus kannst du beitreten, wenn du von einem beliebigen Yearn-Mitarbeiter eine blaue Pille erhältst.

Du fragst dich, was das ist? Du wirst es erfahren, wenn sie auf dich zukommen.

Bewirb dich [hier](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda), um eine Chance auf einen Platz im YFI-Internat zu bekommen.

# Vaults bei Yearn 

Eine detaillierte Beschreibung der Strategien für alle unsere aktiven yVaults findest du [hier](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Nachrichten zum Ökosystem

[Yearn hat Huobi Wallet auf unserer UI integriert](https://twitter.com/HuobiWallet/status/1503939305135247365)

[Alchemix, ein Protokoll, das auf der Yearn-Infrastruktur aufbaut, hat vor kurzem seine V2 gestartet](https://twitter.com/AlchemixFi/status/1503747272143740942)

[Sieh dir neue Yearn-Kunstwerke aus dem PILLS-Universum an](https://twitter.com/pillsuniverse/status/1502662158810759168)

[Steakwallet bietet eine der einfachsten UIs für Einzahlungen in Yearn Vaults](https://twitter.com/steakwallet/status/1502018618506293248)

[Sturdy Finance hat neue fBEETS-Sicherheiten, die von Yearn auf Fantom betrieben werden, hinzugefügt](https://twitter.com/SturdyFinance/status/1509962174629875726)

[Wirf einen Blick auf das Yearn v3 Design](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[Höre dir den Vortrag von Tracheopteryx über DAOs im Delphi DISRUPTORS-Podcast an](https://twitter.com/tracheopteryx/status/1511000392552763399)

[Verdiene hohe feste Renditen auf USDC und DAI bei Tempus Finance von Yearn](https://twitter.com/TempusFinance/status/1508823240768167943)

[Eine Abstimmung zur Aufnahme von yvYFI als Sicherheit für den MAI-Stablecoin wurde gestartet](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[Gasfreie Yearn-Transaktionen auf Fantom sind dank Wido möglich](https://twitter.com/joinwido/status/1506718710836436996)
