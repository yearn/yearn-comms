---
title: "Yearn Vaults v3"
image:
  src: ./image1.jpg
  width: 900
  height: 429
date: '2022-05-03'
author: Marco Worms
translator: Nesyeth
---

![](./image1.jpg?w=900&h=429)

Im Hinblick auf die aufregenden Änderungen, die v3 Vaults sowohl für Entwickler als auch für Degens mit sich bringt, habe ich mit dem Yearn-Mitarbeiter gesprochen, der das v3-Designteam leitet. Ich war überrascht über die Anzahl der neuen Funktionen! Unser Gespräch drehte sich zunächst um den [ERC-4626](https://twitter.com/iearnfinance/status/1511444220850184197) Standard, der Vaults protokollübergreifend standardisiert, aber es stellte sich heraus, dass dies nur die Spitze des Eisbergs ist.

## Der Zweck von v3 ist die Verbesserung aller Kernaspekte von Yearn Vaults

### Sicherheit

Beibehaltung der Position von Yearn als Klassenbester bei DeFi-Sicherheitspraktiken.

### Entwicklung

Verringerung der Reibung bei der Erstellung von Strategien und Ermöglichung einer breiteren Palette von Strategien für einen Vault.

### Automatisierung

Ermöglicht die Automatisierung weiterer Vaultfunktionen neben der Ernte und kommt damit dem Traum vom 100% automatisierten Vault einen Schritt näher.

## Um den Umfang von v3 in Angriff zu nehmen, arbeiten die Entwickler an Folgendem:

### Erhöhung der Modularität

Implementierung von einfachem, robustem Code in den yVault-Vertrag, der es ermöglicht, intelligentere Logik in Modulen zu platzieren, die iteriert werden können.

Die Übernahme des ERC-4626-Standards, der die Kompatibilität unserer Vaults mit allen anderen Protokollen ermöglicht, die diesem Standard folgen.

### Verbesserung der Beziehung Strategie <-> Vaultraum

Ermöglicht ein einfacheres Testen und Einsetzen von Strategien und bietet insgesamt mehr Instrumente für ein breiteres Spektrum an Renditemöglichkeiten, einschließlich Schließungsfonds, risikoreichere Strategien und Strategien auf verschiedenen Ketten.

### Neue Produkte erstellen

Schaffung neuer Produkte wie Junior Tranches, die risikoreichere Strategien ermöglichen und es den Nutzern erlauben, eine risikoreichere Einlageoption zu wählen.

Mehr als 1 Vault für jeden Token-Typ zulassen.

Ermöglicht die Steuerung von Vaults durch Multisigs, die mit Partnerprotokollen gemeinsam genutzt werden können.

## Flexibilität

v3 wird Entwicklern und Strategen mehr Flexibilität bei der Übergabe von Code an die Produktion bieten. Es erhöht die Modularisierung der Verträge und öffnet auch Türen für neue Möglichkeiten der Hinterlegung in Vault.

Wir werden auch eine bessere Automatisierung von peripheren Verträgen sehen: in v2 sind nur die Erntefunktionen automatisiert und in v3 werden wir uns einem 100% automatisierten Vault nähern, weil jetzt wichtigere Funktionen einfacher mit dem [Keep3r Network](https://keep3r.network/) Network zu automatisieren sind.

> **Wir wollen uns schnell bewegen und nichts kaputt machen** - Skeletor

## Strategien auf Steroiden

In v2 war die Anzahl der Strategien pro Vault auf 20 begrenzt, in v3 wird diese Grenze erhöht. Darüber hinaus werden risikoreichere Strategien nun einem Vertragsmodell analog zu den [Senior/Junior Tranches](https://corporatefinanceinstitute.com/resources/knowledge/finance/junior-tranche-debt/) folgen.

Für risikoreichere Strategien gibt es jetzt einen Junior-Tranchen-Vertrag, d. h. der Nutzer zahlt zunächst Token in einen Vault ein und kann dann wählen, ob er die Vault-Token in einen Junior-Tranchen-Vertrag einzahlen möchte, um eine Option mit höherem Risiko und höherer Rendite zu erhalten. Die Nutzer können auch bestimmte Strategien wählen, auf die sie sich konzentrieren möchten. Dies ist eine optionale Funktion, die für Personen mit einer höheren Risikobereitschaft interessant sein könnte.

Ein weiterer Punkt, an dem das v3-Team arbeitet, ist die Dezentralisierung der [Strategiebefürwortung](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d). Heute sind viele Aspekte der Sicherheitsprüfung bei Yearn zentralisiert. Eine Dezentralisierung dieses Prozesses würde jedoch mehr Raum für die Skalierung des Produkts bieten.

Weitere Funktionen zielen darauf ab, die allgemeine Nutzung von Vaults durch Nutzer, Strategen und Entwickler zu verbessern, z. B:

- ySwaps (der Dienst, mit dem Strategen Token-Swaps durchführen) wird für die Gaseffizienz optimiert.
- In v2 dauert es 6 Stunden, bis die Aktienkurse steigen, aber in v3 ist die Zeit dynamisch, was den MEV-Schutz verbessert.
- Die größere Modularität der Vault-Prozesse ermöglicht es uns, engere Partnerschaften mit anderen Protokollen einzugehen und Lösungen zu entwickeln, die stärker auf deren Bedürfnisse zugeschnitten sind.

## Vaults code

Der Code von v2 vaults ist in [Vyper](https://vyper.readthedocs.io/en/stable/) geschrieben, aber v3 ist mit [Solidity](https://docs.soliditylang.org/en/v0.8.13/) erstellt.

Vyper ist eine solide Sprache, wie das v2-System beweist, hat aber einen kleineren Entwicklerpool. Unsere Entscheidung für Solidity basierte unter anderem auf dem Zugang zu einem größeren Entwicklerpool, der für ein kritisches Projekt wie dieses notwendig ist. Wir sehen eine große Zukunft für Vyper und werden es in Yearn für Smart Contracts weiter erforschen, jedes der Module rund um Vault kann damit realisiert werden.

![](./image2.jpg?w=900&h=253)\
*[Statistiken zur Nutzung der Defillama-Blockchain-Programmiersprache](https://defillama.com/languages)*

Statistiken über die in verschiedenen Blockchains verwendeten Kodierungssprachen können auf [Defillama](https://defillama.com/languages), eingesehen werden. Im Moment macht Vyper etwa 10% und Solidity 69% aus. Dies spiegelt die Marktdominanz von Solidity wider. Da wir für die Veröffentlichung von v3 mehr Mitwirkende benötigten, haben wir uns für die Technologie entschieden, die es uns ermöglicht, schneller ein erfahrenes Team aufzubauen.

## Die Zukunft erwartet dich

Ich habe nur an der Oberfläche dessen gekratzt, was in v3 kommen wird. Die Mitarbeiter von Yearn arbeiten auch an der Entwicklung einer Reihe anderer spannender Produkte und Funktionalitäten!

**[Erfahre hier mehr über die Möglichkeiten, bei Yearn mitzumachen!](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)**

*Erstellt [yearn.finance](https://yearn.finance/#/portfolio)*
