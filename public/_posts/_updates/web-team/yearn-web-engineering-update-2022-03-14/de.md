---
layout: post
title: "Webtechnik-Update: 14. März 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-22"
translator: Nesyeth
---

Originalquelle: [Web Engineering Update 14 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-report?s=r)

#### Woche vom 14. März 2022

## **Zusammenfassung 💌**

Ein besonderer Erfolg in dieser Woche ist die Einrichtung unseres Partner-Trackings im Frontend und SDK. Dies wird uns dabei helfen, herauszufinden, welche Dienste am meisten genutzt werden (Ledger, Shapeshift usw.), so dass wir anfangen können, mehr Funktionen speziell für unsere Partner einzubauen und eine bessere Vorstellung davon zu bekommen, welche Partner von der Community genutzt werden. Wir hatten diese Woche auch einige nette visuelle Korrekturen: Wir haben den Kippschalter repariert, so dass er deutlich anzeigt, ob er ein- oder ausgeschaltet ist, und ein neuer Vault hat unser UI mit der Menge an 0en kaputt gemacht, die er in das Frontend übertragen hat (wo wir gerade dabei sind, Curve's Rocket Pool ist jetzt live auf Yearn.).Ein großes Lob an unsere Entwickler, die am Wochenende spät nachts noch schnell ein paar Änderungen vorgenommen haben, damit die Website wieder sauber aussieht.

## **Erreichte Ziele 🎊**

**V3 Front End v1.0.29**

- Erledigt: Klarheit beim Ein- und Ausschalten des Kippschalters
- Erledigt: Vault diagramm für einzelnen Datenpunkt nicht mehr anzeigen
- feat:neue Zapper-Zap in Vertragsadresse setzen
- Erledigt: Wallet verbunden vor getTokenAllowance
- Erledigt: Tally-Wallet wieder aktivieren
- Erledigt: Apy-Überlauf

**SDK v1.2.1-0**

- refactor: Fehler beim Abrufen von Zapper-Daten werden besser behandelt
- Erledigt: Änderung der if-Anweisung in einen Schalter für den Abruf von Token-Salden
- test: Cache-Unit-Tests hinzufügen
- Erledigt: vaultDynamic-Adressen durchreichen, damit der Linsenadapter mit den richtigen Parametern aufgerufen wird
- refactor: Rückgabe aller unterstützten Token im verfügbaren Netzwerk
- feat: Adressanbieter zum Abrufen von Vertragsadressen verwenden
- Erledigt: Konfiguration für dezentralen Mainnet-Subgraphen hinzufügen
- feat: Partnerdienst für Einzahlung in Vault hinzufügen

## **Laufende Schwerpunkte und offene Fragen 🍙** 

**Zyklus-Fokus 🔎**

- Abhängigkeiten entkoppeln / minimieren
- UI-Überarbeitung abschließen
- Zap in Fantom

**Offene Fragen 🏴‍☠️**

- Einige Probleme mit Wallets (Ambire Batch-Transaktionen, Rainbow Wallet)
- Ein Vaultraum gibt seine TVL nicht an das Frontend weiter
- Es müssen noch einige Unit-Tests im SDK erstellt werden
- https://github.com/yearn/yearn-finance-v3/issues
- https://github.com/yearn/yearn-sdk/issues

## **Komm und baue mit uns! 👷** 

Wir fügen auf GitHub ständig neue öffentliche Themen hinzu und freuen uns über neue Beiträge in unseren Repos

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
