---
title: "Yearn UI v3.0"
image:
  src: ./cover.png
  width: 800
  height: 450
date: '2021-09-17'
author: Dudesahn
translator: Nesyeth
---

# Yearn UI v3.0

### Die nächste Version der yearn.finance-Benutzeroberfläche ist da

![](image1.png?w=800&h=450)

_v3 Designerkundung der Startseite_

Wir haben yearn.finance von Grund auf neu aufgebaut. Wir haben uns mit dem Feedback und den Problemen von v2 auseinandergesetzt und vieles mehr. v3 wurde mit Blick auf Benutzerfreundlichkeit, Kompatibilität und die Multi-Chain-Zukunft entwickelt, und die Beta-Version ist jetzt live: [beta.yearn.finance](http://beta.yearn.finance).

## Eine realisierte Vision

![](image2.png?w=300&h=398)

_v3 Designerkundung_

Wenige Monate nach der Veröffentlichung von yearn.finance v2 im Januar begannen die Mitarbeiter von Yearn mit einer umfassenden Überarbeitung mit der Vision eines voll funktionsfähigen, skalierbaren Systems für die sich ständig weiterentwickelnde DeFi-Landschaft.

Heute wird diese Vision mit der neuen, von Grund auf überarbeiteten v3 Beta-Version, die heute sowohl für Nutzer als auch für Mitwirkende freigegeben wird, endlich Wirklichkeit.

Wir haben uns das Feedback der Community genau angehört und die dringendsten Probleme angegangen. Die Neufassung geht jedoch weit darüber hinaus und bietet zahlreiche Ergänzungen und Funktionen, die das Benutzererlebnis erheblich verbessern und den gesamten Prozess von Anfang bis Ende vereinfachen sollen.

## Wichtige Verbesserungen

-   Du kannst nun deine Gesamtposition, die gesamten historischen Erträge und die voraussichtlichen jährlichen Erträge sehen, wobei die Vault-Einlagen sowohl auf den zugrunde liegenden Token als auch auf $ angezeigt werden.
-   Jede Transaktion über die Schnittstelle, einschließlich Zaps in und aus Vaults, wird mit [Tenderly](https://tenderly.co) simuliert und zeigt dir die geschätzten erhaltenen Token an. Keine unerwarteten Ausrutscher oder mysteriöserweise fehlgeschlagene Transaktionen mehr.
-   Eine Wallet-Seite, die es dir ermöglicht, mit fast allen Token, die du besitzt, in Vaults zu zappen oder an Iron Bank zu liefern.
-   Vault-Detailseite mit historischen Vault-Erträgen, Informationen zu den zugrunde liegenden Token und Strategiebeschreibungen.
-   Neuer "Labs"-Bereich, der als Heimat für weitere experimentelle Vaults dient.
-   Vollständig integrierte Iron Bank mit staubfreien Kreditrückzahlungen und -abhebungen.
-   Völlig neu gestaltetes Erlebnis für Mobilgeräte.
-   Mehrere UI-Themen, mit einzigartigen, freischaltbaren Themen für Yearn NFT-Inhaber, die in Kürze erscheinen. Wie ihr seht, wird für alle Screenshots das Cyberpunk-Thema (zu finden unter Einstellungen) verwendet.

Bitte denkt daran, dass es sich um eine **_Beta-Version handelt:_** Noch ist nichts endgültig, und wir planen, die Version in den nächsten Wochen zu überarbeiten, wenn wir Feedback erhalten und weitere Verbesserungen implementieren. Wenn du uns Feedback geben möchtest, besuche unseren neuen [Discord-Kanal](https://discord.gg/Rw9zA3GbyE), der für das Feedback zur v3-Web-UI eingerichtet wurde.

![](image3.png?w=300&h=354)

_v3 Designerkundung_

## Warte, welche Website ist das noch mal?

Dies ist die neue yearn.finance, die von einer Gruppe von Yearn-Mitarbeitern gepflegt wird. [yearn.fi](https://yearn.fi/) ist eine Website, die hauptsächlich von [Andre](https://twitter.com/AndreCronjeTech) und [Anton](https://twitter.com/AntonNellCrypto) gepflegt wird.

Die Seiten ergänzen sich. Anton implementiert Funktionen, die wir hinzufügen (wie das SDK), und wir planen, neue Funktionen hinzuzufügen, die Andre und Anton veröffentlichen, wie das Risiko-/Protokoll-Dashboard.

Weiter unten bekommst du einen **tieferen Einblick** in die Betaversion (besonders nützlich für B2B oder potenzielle Integratoren), und am Ende findest du einen Ausblick auf die zukünftige Roadmap.

## Yearn web infra

Unser neues v3 Front-End und Back-End wurden mit Blick auf Skalierbarkeit und Kompatibilität entwickelt und lässt sich in mehrere Komponenten aufteilen: **Lens, Meta, Subgraph, Exporter, SDK, and Front-end.**

Im Folgenden wird jede einzelne Komponente kurz beschrieben:

### Lens

![](image4.png?w=800&h=500)

_Lens Blockdiagramm_

Die Linse von Yearn ist eine Gruppe von Verträgen, die On-Chain-Daten zusammenfassen, um sie leicht konsumierbar zu machen. Die Linse umfasst ein Orakel, Register, Adressgeneratoren, Adapter und Hilfsverträge. Lens-Verträge sind konfigurierbar (so dass Berechnungen individuell hinzugefügt/aktualisiert werden können), alle Adapter sind erweiterbar, und alle Speichervariablen können aktualisiert werden. Lens bietet Informationen, die für jeden Benutzer nach Vermögenswerten oder Protokollen skaliert sind, Informationen, die für einen bestimmten Vault oder Iron Bank-Markt skaliert sind, und Informationen, die für das gesamte Protokoll skaliert sind.

#### Anwendungsfälle

Wichtige Anwendungsfälle für Yearn's lens sind On-Chain-Benutzersalden, Vault-Salden und TVL (alle normalisiert auf USDC über ein On-Chain-Orakel) für das gesamte Yearn-Protokoll. Zusammenfassend lässt sich sagen, dass Lens als einfacher Integrationspunkt für jedes Protokoll oder jeden Partner dient, der Yearn-Daten schnell auf die Kette bringen möchte.

[Lens Quellcode](https://github.com/yearn/yearn-lens/)

### Meta

Das Metadaten-Repository von Yearn ist ein einfaches Framework, mit dem die Vault-Einstellungen im Front-End sehr schnell angepasst werden können, ohne dass eine Code-Bearbeitung erforderlich ist. Die Mitglieder des Yearn-Teams müssen lediglich eine JSON-Datei bearbeiten, die automatisch die aktualisierten IPFS-Metadaten-Dateien erstellt und bereitstellt.

#### Derzeit werden folgende Schemata und Funktionen unterstützt:

-   Ausblenden eines Vault aus der UI
-   Deaktivieren von Einzahlungen/Auszahlungen und/oder Zappen in/aus einem Vault
-   Anziegen, ob für einen Vault eine Migration auf eine neuere Version verfügbar ist
-   APY-Werte außer Kraft setzen
-   Name und Beschreibung der Strategie
-   Vault-Symbol, Name oder Token-Symbol außer Kraft setzen
-   Überschreiben des Symbols, Namens oder Symbols des zugrunde liegenden Tokens

#### Anwendungsfälle

-   Schnelles Konfigurieren vieler Aspekte eines Vault, auch wenn du kein Programmierer bist (erfordert dennoch eine PR-Überprüfung)
-   Bearbeiten die Konfiguration an einer Stelle und alle Integratoren werden aktualisiert
-   Behalten die Kontrolle über Token- und Vault-Namen, Icons und Symbole

[Meta Quellcode](https://github.com/yearn/yearn-meta)

### Untergraph

![](image5.png?w=800&h=680)

_Im Dashboard und für jeden Vault angezeigte Erträge_

Der primäre Anwendungsfall des Yearn-Subgraphen besteht darin, historische On-Chain-Daten zu aggregieren und zu transformieren und sie leicht abfragbar zu machen. Wie du in der Abbildung oben sehen kannst, wird der Subgraph derzeit zur Anzeige verwendet:

-   Historische Benutzereinnahmen, die auf einen Vault beschränkt sind
-   Historische Benutzereinnahmen insgesamt
-   Historische Erträge des Vaults (auf der Detailseite des Vaults angezeigt)

Da die Erträge der einzelnen Vaults nicht von Haus aus auf Vertragsebene integriert sind, verwenden wir unseren Untergraphen, um Ereignisse wie Einzahlungen, Abhebungen und Ernten zu verfolgen, die dann aggregiert werden, damit die Erträge [berechnet](https://github.com/yearn/yearn-sdk/blob/master/src/interfaces/earnings.ts) werden können.

Das Ökosystem von Yearn ist von Natur aus komplex, was bedeutet, dass es schwierig ist, einen Subgraphen zu haben, der große Mengen an genauen Daten liefert. Wie bei allen Aspekten der Website ist der Code quelloffen. Wenn du also Probleme mit deinen Einnahmen bemerkst, lass es uns wissen oder sende einen PR an das Subgraph-Repositorium unten.

[Untergraph Quellcode](https://github.com/yearn/yearn-vaults-v2-subgraph/)

### Exporter

Der Yearn-Exporter fungiert als unsere primäre API und enthält alle APY- und TVL-Berechnungen. Er hängt nur von den On-Chain-Daten ab und bietet darüber hinaus Tools, mit denen jeder jeden messbaren Aspekt der Yearn-Produkte zulassungsfrei überprüfen kann. Er unterstützt sowohl den Export von Echtzeit- als auch von historischen Daten.

[Exporter Quellcode](https://github.com/yearn/yearn-exporter

### SDK

![](image6.png?w=800&h=638)

_SDK Blockdiagramm_

Das neue SDK von Yearn ist der Motor, der unsere neue v3-Website antreibt, und das Front-End wurde speziell für die Nutzung von Daten aus dem SDK entwickelt. Das SDK aggregiert On-Chain- und Off-Chain-Daten, um Front-Ends und B2B-Integrationen zu bedienen, indem es Daten von Lens, Exporter, Subgraph, Meta und [Zapper](https://zapper.fi) abruft.

#### Anwendungsfälle

-   V3 frontend
-   Integratoren: Die Verwaltung und Konfiguration des Vault wird für den Integrator übernommen. Eine Aktualisierung der Daten, die unser SDK abruft, bedeutet, dass sich die Integratoren automatisch darum kümmern.
-   Dashboards für Strategen

[SDK Quellcode](https://github.com/yearn/yearn-sdk)

### Frontend

Während die oben aufgeführte Backend-Infrastruktur die benötigten Daten generiert, werden sie vom Frontend konsumiert und so präsentiert, dass die Benutzer leicht damit interagieren können.

![](image7.png?w=913&h=696)

_v3 FE Blockdiagramm_

Unser Front-End-Code ist in zwei verschiedene Teile unterteilt: **die v3-Kernlogik und die UI-Schicht**.

Die **v3-Kernlogik** soll einfach in jedes Repo implementiert werden können und ist für die Kommunikation mit dem SDK und anderen externen Datenanbietern zuständig, nicht nur durch den Abruf von Daten, sondern auch durch POST/WRITE-Anfragen. Die Kernlogik modelliert und füttert die Benutzeroberfläche mit einem geeigneten und traditionellen Datenschema, das alle verschiedenen Daten (Vaults, Token, Benutzersalden usw.) zusammenfasst

Die **UI-Schicht** bezieht die Daten direkt vom Kern und zeigt sie wie gewünscht in jedem Repo an. Sie kann in fünf Hauptseiten unterteilt werden, die im Folgenden beschrieben werden.

[Frontend Quellcode](https://github.com/yearn/yearn-finance-v3)

![](image8.png?w=659&h=398)

_Nahaufnahme der seitlichen Navigationsleiste und des Armaturenbretts_

#### Startseite

Auf der Startseite findest du eine Übersicht über alle Guthaben in deinem Wallet sowie über alle drei Yearn-Produktkategorien: Vaults, Labs und Iron Bank.

#### Wallet

In der Walletansicht werden alle Vermögenswerte in deinem Wallet und ihr Gesamtwert angezeigt, und du kannst sie entweder in einen beliebigen Vault einzahlen oder die Token an Iron Bank liefern, wenn ein Markt vorhanden ist.

#### Vaults

Unsere neue Vaults-Seite enthält ein Dashboard mit Benutzerinformationen zu Vault-Einlagen, Empfehlungen (derzeit werden die Vaults mit den höchsten Renditen angezeigt), zugrundeliegendem Token-Guthaben, Dollarwert und historischen Erträgen für alle Vault-Einlagen sowie dem aktuellen APY. Wenn du auf einen Vault klickst, wird die Detailseite des Vault angezeigt.

#### Vault Detailseite

![](image9.png?w=800&h=554)

_Vault detailseite_

Die Vault-Detailseite ist eine eindeutige URL für jeden Vault (demnächst in den Labs), die die TVL des Vaults, den effektiven Jahreszins, Informationen zu den zugrundeliegenden Token, Strategiebeschreibungen und historische Vaulterträge anzeigt und es den Nutzern ermöglicht, Ein- und Auszahlungen vorzunehmen.

#### Labs

Eine Sache, die den Nutzern auffallen wird, ist, dass yveCRV, yvBOOST und unser yvBOOST-ETH pJar (ein Produkt, das in Zusammenarbeit mit [pickle.finance](https://www.pickle.finance)) eingeführt wurde) nicht mehr auf unserer Vault-Seite zu finden sind. Stattdessen wurden sie alle in unseren neuen Labs-Bereich verschoben.

Was sind Labs, fragt ihr?

Ursprünglich wurden die Vaults von Yearn so konzipiert, dass sie nur nach oben offen sind und die Nutzer jederzeit Geld abheben “up-only” können. Als die Yearn-Strategien immer ausgefeilter wurden und wir nach neuen Wegen zur Renditeerzielung suchten, wurde uns klar, dass viele Strategien für diesen speziellen Rahmen nicht gut geeignet sind.

So haben beispielsweise mehrere Strategen an einseitigen LP-Strategien gearbeitet. Zwischen Handelsgebühren und Einsatzanreizen kann die Rendite von Geldern in AMM-LPs recht lukrativ sein - aber es besteht ein offensichtliches Risiko eines unbeständigen Verlusts und/oder kurzfristiger Rückschläge in Abhängigkeit von Marktschwankungen.

Darüber hinaus können Protokolle wie Bancor eine 24-stündige Abkühlungszeit für die Freigabe von Geldern verlangen. Früher hätte eine solche Anforderung den Aspekt der "jederzeitigen Abhebung" von Vaults zunichte gemacht.

In Labs lassen wir mehr Flexibilität zu, und solange die Nutzer im Voraus über die Bedingungen informiert sind, werden die Strategien Lock-Ups und das Potenzial für vorübergehende Verluste im Streben nach einer höheren, langfristigen und nachhaltigen Rendite zulassen.

#### Iron Bank

Ähnlich wie bei Vaults und Labs zeigt Iron Bank ein Dashboard mit relevanten Informationen an, einschließlich der insgesamt bereitgestellten, der insgesamt ausgeliehenen, der genutzten und der gesamten Ausleihgrenze.

### Zusätzliche Merkmale

![](image10.png?w=300&h=410)

_Simulation eines Zaps, der die Slippagetoleranz überschreitet_

#### Simulationen

Bevor Einzahlungen, Abhebungen oder Zaps in oder aus einem Vault erfolgen, **verwenden wir** [**Tenderly**](https://tenderly.co/), **um die Transaktion zu simulieren.** Dadurch erhalten die Nutzer viele nützliche Informationen, bevor sie überhaupt eine Transaktion einreichen und sich verpflichten, Gasgebühren zu zahlen:

-   Wenn die Simulation erfolgreich ist, kann der Nutzer die ungefähre Anzahl der Token sehen, die er erhalten wird.
-   Wenn simuliert wird, dass die Transaktion zu einer größeren Abweichung führt als die Toleranz des Nutzers (für Zaps), wird dem Nutzer eine Warnung angezeigt, wie hoch die tatsächliche Abweichung wahrscheinlich ist.
-   Wenn die simulierte Transaktion fehlschlägt, wird dem Benutzer eine Warnung angezeigt.

Um eine Transaktion zu simulieren, müssen wir zunächst die [API von Zapper](https://docs.zapper.fi/zapper-api/api-guides/zap-in#check-zap-allowance) aufrufen, um festzustellen, ob der Benutzer den Zapper genehmigen muss. Wenn dies der Fall ist, erstellen wir einen Tenderly-Fork, um den Zustand zwischen den Simulationen zu erhalten. Dann simulieren wir die Genehmigungstransaktion, wiederum mit Zapper, um die Transaktionsdaten abzurufen, die für die Genehmigung simuliert werden müssen. Nachdem die Genehmigungssimulation erfolgreich war, [holen](https://docs.zapper.fi/zapper-api/api-guides/zap-in#zap-in) wir die Transaktionsdaten für den eigentlichen Zapper ab und führen eine weitere Simulation durch. Schließlich sind wir in der Lage, die vollständig simulierten Daten über den ZAP zu sehen, ohne dass der Benutzer ihn zuerst genehmigen muss.

Bitte beachte, dass eine Simulation fehlschlägt, wenn du versuchst, eine Transaktion zu simulieren, für die du nicht genügend Gas hast. Obwohl wir sie ausgiebig getestet haben, sind Simulationen komplexe Vorgänge. Bitte gib uns Feedback, wenn du Probleme hast oder Simulationen fehlschlagen.

#### Handy

![](image11.png?w=300&h=518)

_v3 mobile Erfahrung_

Eine weitere wichtige Anforderung an die neue Website war die vollständige Unterstützung von Mobiltelefonen, was in der Vergangenheit schmerzlich vermisst wurde.

Die Website unterstützt nun die Anzeige aller Informationen sowohl auf einem großen als auch auf einem mobilen Bildschirm. Dazu gehören das Benutzer-Dashboard, die Suchfunktion, alle Aktionsschaltflächen (Einzahlung, Abhebung, Bereitstellung, Ausleihe), Informationen zum effektiven Jahreszins und Transaktionsmodalitäten, die speziell für mobile Geräte entwickelt wurden.

Obwohl wir derzeit aufgrund der Beschränkungen einiger App Stores keine native Yearn-App haben, haben wir uns dazu verpflichtet, eine nativ-ähnliche Erfahrung auf mobilen Browsern zu bieten.

## Zukünftiger Fahrplan

![](image12.png?w=800&h=462)

_v3 Design Erkundung_

### Der Zusammenschluss

Obwohl nicht ganz so dramatisch wie die Verschmelzung von Ethereums PoW mit PoS, war das Ziel des Starts von v3 web als Beta, die volle Funktionsgleichheit mit unserer bestehenden Web-UI herzustellen, bevor sie ersetzt wird. Zusätzlich zu einer Beta-Phase, um öffentliches Feedback zu sammeln und Fehler zu finden, sind hier einige Punkte, die wir gerade implementieren:

-   Detailannsichten der Lapsseiten
-   Hover-Tooltips, die mit v2 übereinstimmen (APY, Überschriften, etc.)

### … und darüber hinaus (nach dem Zusammenschluss)

-   Neue Landing Page mit verbessertem Onboarding - **die Skizzen in diesem Beitrag sind einige der Teile aus unserer v3 Design-Erkundung.**
-   Historischer APY für Vaults
-   Historische Protokollausbeute und Gaseinsparungen der Nutzer
-   Genehmigungen für das gaslose Auszapfen
-   Schätzungen der Gaskosten
-   Mehrsprachige Unterstützung
-   Integration des Risiko-Dashboards von [yearn.fi](http://yearn.fi/)
-   Inegration von [Bowswap](https://bowswap.finance/) zur Erleichterung des Wechsels von ertragsschwachen zu ertragsstarken Vaults
-   Möglichkeit,benutzerdefinierte Skins hinzuzufügen
-   Detailliertere Informationen zur Benutzerposition auf der Startseite
-   Möglichkeit, Staub auf der Portemonnaie-Seite auszublenden
-   Verschiedene andere Dinge, die wir noch nicht ankündigen können, die aber sehr bald live gehen werden 👻

## Ein Wort der Dankbarkeit

![](image13.png?w=2000&h=1125)

_Yearn webteam selbsporträt_

Nichts von alledem wäre möglich ohne die großartige Yearn-Gemeinschaft, darunter Dutzende von Personen, die in den letzten Monaten Feedback und Ideen eingereicht haben, unsere Web-Beratergruppe, alle Mitwirkenden bei Yearn und vor allem die Designer und Techniker, die unermüdlich daran gearbeitet haben, diese neue Website Wirklichkeit werden zu lassen (viele von ihnen sind auf dem Bild oben zu sehen).

Wenn du in irgendeiner Weise helfen möchtest, komm in unseren öffentlichen [discord](https://discord.gg/8rF374XkXy), erstelle ein Issue in einem der oben verlinkten [repos](https://github.com/yearn) oder teile uns deine Designs auf [twitter](https://twitter.com/iearnfinance) mit!
