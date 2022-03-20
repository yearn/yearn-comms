---
title:  "Einführung von festen Devisen"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
date: '2021-07-02'
translator: Nesyeth
---

# Einführung von festen Devisen (USD, EUR, ZAR, JPY, CNY, usw.)

**Haftungsausschluss;**

- Kein token
- Die Prüfung ist noch nicht abgeschlossen
- Vertrag ist experimentell

**Wichtige Merkmale;**

- 0 Verwaltung (oder Multisig)
- 0 Konfiguration
- 0 Gebühren
- 0 Wertextraktion
- Sanfte liquidationen
- Dynamische Minting-Obergrenzen basierend auf der Liquidität auf der Kette
- Dynamische LTVs auf der Grundlage von Protokollen auf der Kette

**Festen Devisen**

Feste Devisen sind ein unveränderliches, gebührenfreies, dezentralisiertes und stabiles Münzsystem.

LTVs (Loan-to-Value-Ratios) werden von Compound, Aave v1, Aave v2 und Iron Bank abgeleitet. Wenn diese Systeme ihre akzeptierten Sicherheiten hinzufügen oder aktualisieren, werden auch die festen Devisen dynamisch aktualisiert.

Grenzen für Minting (wie viel Liquidität ein Nutzer gegen eine bestimmte Sicherheit minten kann) werden von der verfügbaren Liquidität auf der Kette abgeleitet; je höher die Liquidität auf der Kette, desto höher die Grenzen für das Minting.

Feste Devisen führen sanfte Liquidationen ein, d.h. der absolute Mindestbetrag an Schulden wird zurückgezahlt, um die Position eines Nutzers wieder auf ein ausgeglichenes Niveau zu bringen, so dass man sich keine Sorgen mehr machen muss, dass der gesamte Stapel bei Drawdown-Ereignissen liquidiert wird.

Für die Zwecke dieser Veröffentlichung wird der Vertrag nicht über Etherscan überprüft, du kannst jedoch die Adresse und ABI unten finden;

[0x92FC8E6EfdF389e2527d14393b15F543f9a03420](https://etherscan.io/address/0x92fc8e6efdf389e2527d14393b15f543f9a03420)

[ABI](https://gist.github.com/andrecronje/4ce11e8603a7f61af4619a86647db1d4)

Die vollständige Version wird auf den Krypto-Pools von curve.fi basieren, um einen dezentralen Devisenmarkt zu ermöglichen.
