---
title: "Yearn Finance erklärt: Was sind Vaults und Strategien?"
image:
  src: ./image3.jpg
  width: 1024
  height: 597
date: '2022-01-18'
author: Marco_Worms
translator: Delace19
---

![](./image1.jpg?w=900&h=478)\
*Einfaches Ethereum Yearn Vault Beispiel*

[Yearn Finance](http://yearn.finance/) ist eine Produktreihe im Bereich der dezentralen Finanzierung (DeFi), die Renditegenerierung, Kreditaggregation und mehr auf der Blockchain bietet. Das Protokoll wird von verschiedenen unabhängigen Entwicklern gepflegt und von $YFI-Inhabern verwaltet.

Das derzeitige benutzerorientierte Kernprodukt von Yearn ist **yVault**, das eine automatisierte Ertragsgenerierung für viele verschiedene Krypto-Assets bietet, die jeweils von einer oder mehreren **Strategien** gesteuert werden. Das Design von yVault ist offen, was bedeutet, dass andere Protokolle auf Yearn aufbauen und innovativ sein können, [wie z. B. der Fall Abracadabra + Yearn case](https://twitter.com/MarcoWorms/status/1483223651684081670).

# Yearn Vaults (yVaults)

Die Kurzform für einen Yearn Vault ist **yVault**. In der aktuellen Version von Yearn (v2) sind dies die Merkmale eines yVault:

- **Der Token, den du in einen yVault einzahlst, ist der Token, den du als Ertrag erhältst**, der immer automatisch in den yVault eingezahlt wird
- **Ein yVault kann viele Strategien gleichzeitig aktiv haben.** Ein yVault kann die Kapitalallokation seiner Strategien ändern, wenn er dies für notwendig erachtet
- Gegensatz zu vielen anderen Rendite-Aggregatoren werden dem Nutzer **keine Gebühren für Einzahlungen oder Abhebungen** berechnet.
- **yVaults Token implementieren den ERC20-Standard**, was bedeutet, dass sie leicht zwischen Wallets und Märkten verschoben werden können und von jeder App verwendet werden können, die mit diesem Standard kommuniziert (wie dezentrale Börsen)

## Strategien und Strategen

**Strategen** sind Personen, die eine oder mehrere zugrunde liegende **Strategien** für yVaults entwickeln

[Jeder kann eine Strategie erstellen](https://docs.yearn.finance/developers/v2/getting-started), aber um sie zu yVault hinzuzufügen, muss der Stratege die Strategie durch den [Strategieüberprüfungsprozess](https://docs.yearn.finance/developers/v2/getting-started#overview-of-our-vetting-process) führen, der eine Konzeptüberprüfung, eine Codeüberprüfung, eine Sicherheitsüberprüfung und Mainnet-Tests umfasst.

![](./image2.jpg?w=4000&h=588)\
*Strategieüberprüfungsprozess*

Für ihre Bemühungen werden die Strategen mit einem Teil der Performancegebühr der Strategie belohnt.

- Bis zu 10% der mit einer bestimmten Strategie erwirtschafteten Rendite (Performance Fee) geht an den Strategen
- 10% der von allen Strategien erwirtschafteten Renditegebühren (Performance Fee) fließen in die Yearn DAO-Kasse.
- Im Laufe des Jahres werden 2% des Gesamtvermögens des Vaults als Gebühren eingenommen, die an Yearn gehen, um Ausgaben wie Gasgebühren, Entwicklungszuschüsse und andere Dienstleistungen zu bezahlen.

Nachdem wir nun wissen, was yVaults und Strategien sind, wollen wir uns etwas näher mit ihrer Funktionsweise befassen

# Tieferes Eintauchen in Vaults und Strategien

### Eine Strategie aufschlüsseln

![](./image3.jpg?w=1024&h=597)\
*Vielen Dank an Finematics für dieses Bild!*

Das obige Bild ist ein Überblick über die Ethereum-Vault-Strategie auf einem yVault der Version 1. yVaults sind jetzt in der Version 2 und können mehrere Strategien gleichzeitig handhaben, aber dieses Beispiel konzentriert sich auf eine einzige Strategie. Es gibt e[einen ganzen Finematics-Beitrag und ein Video](https://finematics.com/yearn-vaults-eth-vault-explained/) darüber, wie dies funktioniert, falls du tiefer eintauchen möchtest!

In diesem Beispiel können wir sehen, wie eine Strategie andere Vaults verwenden kann! In der Ethereum v1 yVault Strategie:

- Wenn ein Nutzer ETH einzahlt, wird die ETH bei MakerDAO als Sicherheit geliehen.
- Die Sicherheiten werden verwendet, um DAI zu leihen
- Die geliehenen DAI werden in den DAI yVault eingezahlt

Wir verwenden also ETH, um DAI zu leihen und mit der DAI yVault-Strategie Rendite zu erzielen.

### Wie/wann verschiebt Yearn die Gelder in den Vault und berechnet Gebühren?

Eine der wichtigsten Funktionen einer Strategie ist die "Ernte". Wenn sie aufgerufen wird, löst sie einen Rebalancing-Prozess aus, bei dem Gewinne realisiert und wieder in die Strategie investiert werden.

### Wie garantiert Yearn, dass eine Strategie immer Token erzeugt, anstatt sie zu verlieren?

Strategen verwenden eine Reihe von Tools, um die Daten auf der Blockchain zu überwachen und den Zustand der Strategie sicherzustellen. Eines dieser Tools ist [Yearn Wach](https://yearn.watch/) Wach, das eine schöne Benutzeroberfläche mit vielen wichtigen Metriken live auf der Blockchain präsentiert.

Genauso wichtig wie die Überwachung von Strategien, nachdem sie in Produktion gegangen sind, ist die Due Diligence, die durchgeführt wird, bevor sie mit echtem Geld in Produktion geschickt werden. Das Yearn-Strategieteam verfügt auch über ein "Strategie-Scoring-System", das das Risikoniveau für die zugrunde liegenden Strategien bewertet. Wir hoffen, dies in Zukunft in unserer Dokumentation und in unseren Apps besser für unsere Nutzer darzustellen!

### Aus den Erfahrungen mit früheren Vaults wurden Strategien entwickelt, die zu Einschränkungen führen

- Vaultfond sollten nur „nach oben“  und nicht nach unten gehen
- Vermiedung von Dauerverlusten (z. B. keine YFI/ETH-Liquidität in einem Liquiditätspool bereitstellen)
- Die Nutzer sollten jederzeit Abhebungen vornehmen können (die Strategie kann also nicht alle Vaultfonds zeitlich begrenzen, sondern nur einen kleinen Teil)
- Nutze nur Protokolle mit nachgewiesener Erfolgsbilanz und gut verstandenen, unveränderlichen Verträgen

### Keep3rs and yVaults

Yearn und [Keep3r](https://docs.keep3r.network/) haben eine sehr starke Synergie: Keep3r wird von yVaults verwendet, um allgemeine Aufgaben für Vaults zu automatisieren!

Beispielsweise könnten die Hüter davon profitieren, die Erntefunktion immer dann aufzurufen, wenn die Bedingungen für den yVault sinnvoll sind, z. B:

- Eine Strategie hat einen Gewinn in Höhe von X erwirtschaftet
- Es ist Y Zeit seit der letzten Ernte vergangen
- Es gibt keinen Verlust, der eintreten wird, wenn die Ernte aufgerufen wird

Und es gibt viele solche Fälle. Ein weiteres Beispiel wäre, dass ein Vermögensverwalter eine Neuverteilung der Vaultanlagen fordert, um eine Liquidation in einem Teil der Strategie zu vermeiden.

![](./image4.jpg?w=562&h=651)

### Strategien entwickeln

* **yVaults** werden in [Vyper](https://vyper.readthedocs.io/en/stable/) programmiert
* **Strategien** werden in [Solidity](https://docs.soliditylang.org/en/v0.8.11/) programmiert

> Du müssen kein fortgeschrittener Entwickler oder Finanzanalyst sein, um ein Stratege zu werden!

Während die Pflege von yVaults eine komplexere Entwicklungsangelegenheit ist, wurden die Strategien so konzipiert, dass jeder in der Lage ist, eine zu schreiben, die Voraussetzung für eine gute Strategie ist:

- Wissen über das Blockchain-Ökosystem, in dem du dich engagieren wirst. Dieses Wissen kannst du dir durch eine gründliche Recherche der Tokenomics und der Dokumentation für alle Token aneignen, die du in deiner Strategie verwendest.
- Solidity-Programmierkenntnisse, [die dem Abschluss von Level 4 bei CryptoZombies](https://cryptozombies.io/) entsprechen
- Wissen, wie man mit [git](https://git-scm.com/), [eth-brownie](https://eth-brownie.readthedocs.io/en/stable/) und [ganache](https://trufflesuite.com/ganache/) umgeht.
- Nachdem du die Grundlagen der oben genannten Werkzeuge verstanden haben, bist du bereit, [unsere Strategievorlage zu kopieren](https://github.com/yearn/brownie-strategy-mix)! Die Funktionen, die du in dieser Vorlage ändern sollst, um deine erste eigene Strategie zu erstellen, sind prepareReturn, adjustPosition und liquidatePositon.

Ein letzter Punkt: Nachdem eine Strategie von Yearn gebilligt und in die Praxis umgesetzt wurde, solltest du bei ihrer Überwachung mithelfen!

### Mehr erfahren

Wenn du mehr über Vaults und Strategien wissen willst, schau dir diese Quellen an! Sie alle haben mir geholfen, die Konzepte zu verstehen, die in diesem Artikel erklärt werden. Außerdem sind die vielen Yearn Mitwirkenden die nettesten Leute und helfen mir immer, die beste Ressource zu finden, um hochwertige Informationen zu jedem Thema zu erhalten.

- [yVaults Beschreibungen](https://vaults.yearn.finance/)
- [yVault Docs](https://docs.yearn.finance/getting-started/products/yvaults/overview)
- [Werde ein mächtiger Stratege](https://www.youtube.com/watch?v=NVR3teJw0Y0)
- [Externes Video/Artikel von Finematics über yVaults](https://finematics.com/yearn-vaults-eth-vault-explained/)
- [Zusätzliche Ressourcen von Yearn](https://docs.yearn.finance/developers/v2/additional-resources)

### Nimm die Blaue Pille!

Wenn dir die Vaults und die Abstraktion der Strategien gefallen hat:

- Bleibe auf dem Laufenden mit unseren neuesten Nachrichten auf dem Yearn Finance Twitter
- unser [Blue Pill Book](https://thebluepill.eth.link/) das die Vision und Geschichte von Yearn umreißt
- erfahre, wie du dem [Yearn-Team beitreten](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)! kannst!

*Autor: [Worms](https://twitter.com/MarcoWorms), Überprüfer: [Wavey](https://twitter.com/wavey0x)*

*Vielen Dank an Farrah und Weaver, dass sie mir geholfen haben, bei Yearn einzusteigen und mich mit großartigen Menschen und Ressourcen in Kontakt zu bringen, die es mir ermöglicht haben, diesen ersten Artikel hier zu schreiben!*
