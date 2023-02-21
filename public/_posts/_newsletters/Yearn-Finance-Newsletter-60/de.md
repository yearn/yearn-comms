---
layout: post
title: "Yearn Finance Newsletter #60"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 1000
  height: 500
author: Yearn
date: '2022-04-13'
translator: Nesyeth
---

### Woche bis zum 12. April 2022

![](./cover.jpg?w=1000&h=500)

Willkommen zur 60. Ausgabe des Yearn Finance Newsletters. Mit diesem Newsletter möchten wir die Yearn- und die breitere Krypto-Community über die neuesten Nachrichten informieren, darunter Produkteinführungen, Änderungen in der Unternehmensführung und Aktualisierungen im Ökosystem. Wenn du mehr über Yearn Finance erfahren möchten, folge unseren offiziellen [Twitter](https://twitter.com/iearnfinance)- und [Medium](https://medium.com/iearn)-Konten.

## Zusammenfassung

- Sehnsucht nach Yearn
- Die große Vault-Standardisierung
- Wie Web3 eine unzensiertes Yearn ermöglicht
- Wie yVault-Strategen geboren werden
- Tips für neue DAO-Mitarbeiter
- Vaults bei Yearn
- Nachrichten zum Ökosystem

# Sehnsucht nach Yearn

![](./image2.jpg?w=1000&h=563)

Ein Premium-Bericht über Yearn von Messari ist jetzt für alle verfügbar. Der Bericht wurde ursprünglich im November für zahlende Abonnenten veröffentlicht und enthält eine Fülle von Daten und Erklärungen.

Auszüge aus dem Artikel lauten: "Wir alle kennen Yearn. Es ist der Rendite-Aggregator, der auf den renditegenerierenden Protokollen von DeFi wie Compound, Aave, Curve und Convex aufbaut. Die Nutzer können mit einem Klick auf eine Schaltfläche passiv Geld verdienen. Im Laufe der Zeit ist das Protokoll zu einem Synonym für Rendite geworden und hat sich in der Branche einen Ruf als führende risikominimierte Renditequelle erworben... Das von den meisten Nutzern verwendete Flaggschiff-Protokoll, Vault, macht 67% des TVL von Yearn aus. Die Nutzer zahlen in einen Vault ein, der für jeden Vermögenswert definiert ist, und die zugrunde liegenden Renditestrategien werden ausgeführt, um das Kapital einzusetzen... Yearn ist in der Lage, einen einzigen, vertrauenswürdigen Integrationspunkt zu anderen Protokollen für Rendite anzubieten, so dass keine Zeit verschwendet wird und kein Integrationsrisiko bei der Verwaltung und Pflege der Strategien selbst entsteht... Wie sich Yearn weiterentwickelt, hängt weitgehend von seiner V3-Benutzeroberfläche, seiner Multi-Ketten-Strategie und der Verteidigungsfähigkeit seiner Position ab."

Fantom und Arbitrum sind live. Wohin als nächstes?

Du findest ihn hier:[messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn).

# Die große Vault-Standardisierung

![](./image3.jpg?w=900&h=577)

Du hast schon von ERC-20, ERC-721 und ERC-1155 gehört. Bald wirst du ERC-4626s kennen. Der Tokenized Vault Standard (ERC-4626) ist endgültig. Und die große Vault-Standardisierung beginnt jetzt.

Hier ist ein kurzer Überblick über ERC-4626: Renditetoken sind ein Chaos. Rendite-Aggregatoren, Vaults, Lending Markets und native Rendite-Token wie $xSUSHI werden oft mit leichten Variationen implementiert. Um eine einzige Anwendung auf der Grundlage von DeFis renditetragenden Token zu entwickeln, musst du Dutzende von komplexen, fehleranfälligen Adaptern schreiben, die jede einzelne Variante verarbeiten können.

Mit ERC-4626 gehört das der Vergangenheit an. Das ist Kompositionsfähigkeit vom Feinsten. Erstelle eine App auf einem ERC-4626 Vault, und sie wird für alle anderen ERC-4626 Token funktionieren.

Yearn V3 mit ERC-4626 war unvermeidlich. Die Mitwirkenden arbeiten bereits hart an der Implementierung des Standards für die V3-Vaults von Yearn. So auch die Entwickler von Alchemix, Balancer, Rari Capital, Fei Protocol, Yield Protocol, OpenZeppelin und andere. Vielleicht werden wir eines Tages sogar einen ERC-4626-Tab auf Etherscan sehen. Mit einem Wort, ERC-4626 wird der Goldstandard für jede Art von verzinslichen Token sein... von Yearn Vault über AAVE Deposits bis hin zu Balancer Linear Pools.

Bist du bereit, sich der großen Vault-Standardisierung anzuschließen? In Joey Santoros Thread findest du [hier](https://twitter.com/joey__santoro/status/1504603906726240258) weitere Details und eine Basisimplementierung von Transmissions11.

Die Zukunft ist kompositionsfähig.

Willst du mehr Code? Sieh dir diese [diese ERC-4626 Vyper 0.3.2-Demo-Implementierung an](https://github.com/fubuloubu/ERC4626), die von den Yearn-Mitarbeitern Fubuloubu und Banteg zusammen mit Transmissions11 und Joey Santoro erstellt wurde.

Lies [hier](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/) einen weiteren CoinDesk-Artikel über ERC-4626.

# Wie Web3 eine unzensiertes Yearn ermöglicht

![](./image4.jpg?w=900&h=451)

Die große Vision des Web3 ist ein Internet (und ein Finanzsystem), das nie ausfällt, nie zensiert wird und für alle zugänglich ist.

Blockchains und Self-Hosting machen das möglich. Bist du neugierig, wie du Yearn, Uniswap und andere Web3-Anwendungen nutzen kannst, ohne ihre Websites anzufassen? Wenn im Web2-Paradigma eine Website ausfällt, haben die Endnutzer kein Glück. Mit Web3 ist ein Dienst immer für jeden mit einer Internetverbindung verfügbar (vorausgesetzt, die zugrunde liegende Blockchain ist verfügbar).

Da Web3 Open-Source ist, kannst du Yearn, Uniswap und andere Web3-Dienste nutzen, indem du ihre Dateien herunterladen und ihre Websites direkt auf deinem Computer hostest. Es werden keine Server von Dritten benötigt!

Um selbst zu hosten, brauchst du nur einen Computer (Windows, Mac oder Linux) und eine spezielle Software. Sobald alles eingerichtet ist, kannst du Yearn und andere Dienste direkt in deinem Browser nutzen, ohne deren URLs zu besuchen (sondern stattdessen etwas wie "localhost:3000" eingeben).

Klick [hier](https://medium.com/iearn/self-hosting-web3-services-299306b706ee), um den Web2-Mittelmann zu entfernen und die große Vision des Web3 mit einem einfachen Artikel von MarcoWorms zu verwirklichen.

# Wie yVault Strategien geboren werden

![](./image5.jpg?w=900&h=650)

Strategien sind das Rückgrat von Yearn, wobei jeder einzelne Vault mehrere dieser beweglichen Teile enthält. Damit unsere Nutzer die beste risikobereinigte Rendite in DeFi erzielen können, müssen wir mit dem sich ständig ändernden Umfeld Schritt halten und neue Strategien entwickeln. Oben findest eine Anleitung, wie neu geschriebene yVault-Strategien für die Produktion freigegeben werden.

Lies diesen Beitrag [heir](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) von MarcoWorms, einem Mitarbeiter von Yearn, um weitere Informationen über die Strategie von yVault zu erhalten.

# Tipps für neue DAO-Mitwirkende

![](./image6.jpg?w=900&h=473)

In DAOs wie Yearn kannst du zum Eigentümer werden, indem du die Verantwortung für die Ergebnisse übernimmst und die Befugnis erhältst, die Entscheidungen zu treffen, die zu diesen Ergebnissen führen.

Im Folgenden findest du einige Kommentare von verschiedenen Yearn-Mitarbeitern aus allen Bereichen des Lebens, die Ratschläge für neue DAO-Mitarbeiter geben:

Tracheopteryx, einer unserer Hauptverantwortlichen, sagt: "Mach die Arbeit, die du liebst, die du am besten kannst, für die du bezahlt werden kannst, und behalte dabei die Bedürfnisse der DAO im Auge. Storming0x, der sich auf die Entwicklung von Sicherheit und Protokollen konzentriert, sagt außerdem: "Bringe dich ein, fühle dich nicht schlecht, wenn du überfordert bist oder Fragen stellst. Viele Leute sind hier, um Neueinsteigern zu helfen, und wir haben heutzutage einen viel besseren Einarbeitungssprozess". Und schließlich sagt ein anon-Beitragsschreiber: "1. Verstehe unsere Kultur. Lies alles, was du in die Finger bekommen kannst. 2. Baue Vertrauen auf. 3. Nimm die Kosten für die Einarbeitung in Kauf. 4. Schreibe Einarbeitungsdokumente. 5. Lerne alle kennen. 6. Finde heraus, was zum Teufel hier los ist. 7. Habe eine Meinung zu dieser Richtung. 8. Delegiere".

Lies [hier](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d) den vollständigen Artikel von Kish, um weitere Tipps von Yearn-Mitarbeitern zu lesen und sich DAOs mit tieferem Wissen zu nähern.

Wir laden dich ein, dich zu engagieren, Feedback zu geben und sich an der Yearn-Community zu beteiligen, indem du sich uns auf [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) oder [Github](http://github.com/yearn) anschließt. Komm und baue mit uns.

# Vaults bei Yearn 

Eine detaillierte Beschreibung der Strategien für alle unsere aktiven yVaults kannst du [hier](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3) lesen.

# Ökosystem Nachrichten

[MAI Vaults zur Nutzung von Yearn-Strategien zu 0% Zinsen sind jetzt auf Fantom möglich ](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[Eine neue yearn.watch Seite ist in der Entwicklung](https://watch.major.tax/)

[Lesen Sie die kurzen Gedanken von storming0x zu Yearn in einem YFI-Internatsinterview](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Tipps zur Sicherheit von einem Yearn-Mitarbeiter](https://twitter.com/storming0x/status/1509769575021178886)

[Sehen Sie sich das neue coordinape aktualisieren](https://twitter.com/coordinape/status/1512247042806005763)
