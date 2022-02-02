---
title:  "Liquidity Mining Prämien v2"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: Nesyeth
---

# Liquidity Mining Prämien v2

Author: [Andre Cronje](https://twitter.com/AndreCronjeTech)</br>

15. August 2021

Konzept und Architektur von [pods.finance](https://www.pods.finance/)

[LM-Kaufoption-Prämienvertrag](https://twitter.com/AndreCronjeTech/status/1426580528510251008)

## **Geschichte**

Liquidität Mining / Prämien / Anreize, wie auch immer du sie nennen willst, sind von Natur aus Teil der Kryptowährung. Sogar Proof of Work (Mining) bietet etwas für Prämien (in Proof of Work, die Bereitstellung von Sicherheit \[oder eher Strom\] für Krypto)

Der erste (meines Wissens nach), der Belohnungen für Liquidität anbot, war [synthetix.io](https://synthetix.io/). Dies begann mit dem `sETH/ETH`, der schließlich in den `sUSD` [curve.fi](https://curve.fi/) überging. Wenn du diesen Pools Liquidität zur Verfügung gestellt hast, wurdest du mit SNX (dem nativen Synthetix-Token) belohnt

Der etwas legendäre [StakingRewards-Vertrag](https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol)-Vertrag wurde ursprünglich in Zusammenarbeit mit Anton von [1inch.exchange](https://1inch.exchange/) entwickelt. Dieser Vertrag wurde die Grundlage für das Liquid Mining, wie wir es heute kennen.

## **Problembeschreibung**

Als die Liquiditätsgewinnung zunahm, wurden einige, nicht bahnbrechende, Schwachstellen deutlich. Die beiden folgenden sind meiner Meinung nach die schlimmsten;

- Liquiditätsheuschrecken (oder Loyalität), auch als "Klebrigkeit" bezeichnet
- Token-Loyalität oder opportunistisches Dumping

Liquidität verschwindet schnell, wenn die Anreize wegfallen, und aggressive Liquiditätsprogramme können sich oft nachteilig auf den Token-Preis auswirken, was meiner Meinung nach zwar nicht unbedingt etwas Schlechtes ist (da es ganz von der Tokenomics / dem Zweck abhängt), aber in der öffentlichen Wahrnehmung ist es klar, dass ein Projekt ein Betrug ist, wenn der Preis sinkt.

## **Problembeispiel**

Ich glaube, dass das Problem im Kern das Problem "etwas für nichts" ist. Wenn du etwas für nichts erhältst, wirst du deine Gewinne einfach auf die Bank bringen. Nehmen wir [curve.fi](https://curve.fi/) als praktisches Beispiel: Wenn du dem 3pool Liquidität in Form von DAI/USDC/USDT zur Verfügung stellest, erhältst du CRV-Belohnungen. Für dieses Beispiel nehmen wir an, dass der Liquiditätsanbieter eine Liquiditätsheuschrecke ist, also nur daran interessiert ist, CRV zu erhalten und es sofort für mehr DAI/USDC/USDT zu verkaufen.

Der Grund dafür ist, dass sie "etwas" für praktisch "nichts" erhalten haben. Wer Liquidität bereitstellt, wird belohnt, so einfach ist das.

## **Kurzeinführung in Optionen**

Um es einfach zu halten, gibt es zwei Optionen, einen PUT (das Recht zu verkaufen) und einen CALL (das Recht zu kaufen). In diesem Fall kannst du dir sich einen PUT als einen Marktverkauf und einen CALL als einen Marktkauf vorstellen. Nehmen wir der Einfachheit halber an, dass CRV bei $2 gehandelt wird. Eine CALL-Option mit einem Ausübungspreis von $2 würde mir erlauben, CRV bei $2 zu kaufen, eine PUT-Option mit einem Ausübungspreis von $2 würde mir erlauben, CRV bei $2 zu verkaufen.

Im weiteren Verlauf dieses Artikels werden wir uns nur auf CALL, das Recht zu kaufen, konzentrieren. Eine Option hat also 3 grundlegende Eigenschaften;

- Was kaufst du? (In unserem Beispiel CRV)
- Wie hoch ist der Ausübungspreis? (in anderen Worten, wie viel zahlst du dafür? In unserem Beispiel $2 ~ oder 2 DAI)
- Wann ist der Verfallstermin? (normalerweise ein zukünftiges Datum, in unserem Beispiel war der Verfallstag der aktuelle Zeitstempel/jetzt)

## **Liquiditätsabbau als Option**

Um bei unserem [curve.fi](https://curve.fi/)-Beispiel zu bleiben: Wenn du Liquidität bereitstellst und CRV als Belohnung forderst, kann dies als Ausübung einer CRV-CALL-Option mit einem `Ausübungspreis` von $0 und einer `Laufzeit` bis zum nächsten Tag betrachtet werden. Wenn du anfängst, darüber in Form von CALL-Optionen nachzudenken, gibt das dem Projekt plötzlich viel mehr Macht;

- Ausübungspreis = Spot - 50%
- Verfall = aktuelles Datum + 1 Monat

Auf der einfachsten Ebene könnten wir einfach sagen, `Verfall` = jetzt und `Ausübungspreis` = Spot - 50%, was würde das bedeuten? Nehmen wir an, der Liquiditätsminer hat 1000 CRV gemined. Anstatt einfach die CRV-CALL-Option zum `Ausübungspreis` von $0 und dem `Verfallsdatum` jetzt zu erhalten (1000 Token umsonst), würde er jetzt das Recht erhalten, 1000 CRV zu $1000 zu kaufen. Selbst wenn sie eine Liquiditätsheuschrecke sind, hätten sie immer noch einen Anreiz, dies zu tun, da sie immer noch $1000 Gewinn machen (Handelswert 1000 CRV @ $2 =$2000 - $1000 Kauf).

Die "Gewinne" ($1000 im obigen Beispiel) können nun an die veCRV-Inhaber ausgeschüttet werden oder an die Stiftung, die Schatzkammer DAO usw. gehen. Diese Mittel könnten sogar verwendet werden, um den Markt zu machen und zusätzliche Liquidität bereitzustellen.

Nun, lass uns einen Schritt weiter gehen und einen zukünftige Ablauf einfügen, sagen wir 1 Monat, jetzt um des Arguments willen, jeder, der Liquidität erhielt wurde nehmen und dumpen, so 1 Monat alt der Preis ist $1, aber der CALL-Option Preis war auch $1, so dass zu diesem Zeitpunkt für die "Dumper" keinen Grund gibt, die Option zu nehmen, da sie nicht zusätzlichen Gewinn machen würden. Dies bedeutet also, dass eine zusätzliche Preisuntergrenze für die erhaltenen Token festgelegt wurde. Da diese Token einfach nicht eingefordert werden (sie können sogar an die DAO zurückgeschickt werden).

## **Zusammenfassung**

Mit ein paar einfachen Änderungen am bestehenden StakingRewards-Vertrag können wir die oben genannten Funktionen hinzufügen, während die UX und das Benutzererlebnis gleich bleiben.

Prototyp-Code [hier](https://gist.github.com/andrecronje/6c3da8b294488001adeda528f70bc301) verfügbar

Durch den Wechsel zu Options Liquidity Mining anstelle des traditionellen Liquidity Mining bedeutet dies;

- Abnehmende Liquiditätsheuschrecken
- Verringerung des Verkaufsdrucks
- Natürliche Preisuntergrenze (twap - Abschlag % über Epoche)
- Zusätzliche Gebühreneinnahmen für DAO/Token-Inhaber

## **Danksagung**

Vielen Dank an [pods.finance](https://www.pods.finance/), @josephdelong und das Team von [sushi.com](https://sushi.com/), die dieses Konzept entwickelt und mit mir geteilt haben