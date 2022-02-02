---
title:  "Faire Markteinführungen, dezentrale Zusammenarbeit und feste Devisen"
image: ./Fair-launches-decentralized-collaboration-and-Fixed-Forex/andre-hero.png
author: Andre
translator: Nesyeth
---

# Faire Markteinführungen, dezentrale Zusammenarbeit und feste Devisen

**\-Faire Markteinführungen-**

Es hat eine Weile gedauert, bis ich endlich begriffen habe, was hinter einer fairen Markteinführung steckt. Es geht nicht darum, die Token zu verschenken, es geht nicht darum, dass es keinen Vorverkauf gab, sondern einfach darum, dass jeder den gleichen Vorteil hatte, jeder hatte die gleichen Regeln, es gab keine geheime "Freunde und Familie"-Runde, keine Seed-Runden, keine Influencer-Zuteilung, es gab keine Whitelists, keine Teilnahmebeschränkung, die Regeln wurden zur Verfügung gestellt, und jeder konnte teilnehmen. Ich kann mit gutem Gewissen sagen, dass ein fairer Start ein Start ist, bei dem für alle Teilnehmer die gleichen Regeln gelten.

**\-Dezentralisierte Zusammenarbeit-**

Ich sehe immer noch viel Tribalismus, ich schätze, das ist verständlich, ich habe nie verstanden, wie die Leute so besessen von Sportteams geworden sind, ich habe angefangen, mich zu fragen, wie viel von diesem Tribalismus wegen der Wetten auf die Teams ist, schließlich ist es das, was Krypto ist, Wetten auf dein Lieblingsteam. So wie ich den Tribalismus im Sport nie verstanden habe, verstehe ich ihn auch in der Kryptowelt nicht. Nach meinen Maßstäben sehe ich einfach "richtig" und "falsch", egal, ob es sich um ein Team handelt, mit dem ich verbunden bin oder nicht, wenn ich das "Richtige" sehe, lobe ich es, wenn ich das "Falsche" sehe, verurteile ich es.

Aber ich denke, dass einige Teams oft den Wert der Zusammenarbeit außer Acht lassen. Das ist etwas, was mir an yveCRV immer gefallen hat, und damit auch an seinen Klonen, stCRV und cvxCRV, es ist das Produkt der Zusammenarbeit zwischen curve, yearn, sushi und pickle. Es kann ohne all diese Entitäten nicht existieren. Aus demselben Grund war vor yveCRV der y-Pool mein ganzer Stolz, er war das Ergebnis der Zusammenarbeit zwischen curve, yearn, aave, compound und dydx.

Vor diesem Hintergrund wurde mir klar, dass Produkte nicht isoliert sein können, sondern dass sie eine Verschmelzung von Produkten und Teams sein müssen, um weiterhin erfolgreich zu sein. Meine ursprüngliche Iteration von festen Devisen war eigenständig, nicht erweiterbar, nicht verwaltbar, ohne jegliche Wertschöpfung und ohne Token.

**\-Feste Devisen (Fixed Forex)-**

Wir sprechen immer wieder über die Störung der Devisenkontrolle, wir sprechen immer wieder über die Störung des Fiat, auf ihre eigene Art und Weise, Tether und Circle haben mehr für die Störung der Devisenkontrolle getan, als Krypto. Sowohl Tether als auch Circle nehmen Einlagen vor Ort entgegen, das Fiat-Geld verlässt nie das Bankkonto, daher gibt es keine Devisenkontrolle (in der Theorie, in der Praxis und bei der Regulierung sieht es ganz anders aus). Nehmen wir also an, du möchtest eine Zahlung von den USA nach Korea tätigen, von USD zu KRW. Ein "einfacher" Weg wäre die Einzahlung von USD für USDT, der Transfer von USDT zu Upbit, der Tausch von USDT in KRW und die Abhebung von KRW.

Die festen Devisen wurde entwickelt, um die oben genannten Ziele zu erreichen, ohne dass die Endnutzer sich der Schritte bewusst sind oder sie kennen. Feste Devisen bestehen aus zwei Kernkomponenten: Devisen mit auf-der-Kette-Liquidität und dezentralisierte Fiat-an- und aus-Rampen.

Obwohl ich von letzterem am meisten begeistert bin, ist der Starttermin erst möglich, wenn wir die Liquidität auf der Kette erreicht haben. In diesem Artikel werden wir daher erklären, wie die festen Devisen funktionieren und wie Nutzer daran teilnehmen können.

**\-Iron Bank Feste Devisen (ibff)-**

Feste Devisen unterstützen Iron Bank, Yearn, Sushi, und Curve

![](image1.jpg?w=500&h=500)

**Haftungsausschlüsse**

- Ungeprüft
- 0 Nutzen für eine frühe Teilnahme, nur Risiko.
- Die anfängliche Token-Ausschüttung wird ein Bruchteil der Ausgaben sein, dies dient nur zu Testzwecken.
- Angesichts der unglaublich niedrigen anfänglichen Ausschüttung, kaufe diese Token nicht, stelle keine Liquidität für diese Token bereit, da du sonst Geld verlieren wirst.

Feste Devisen ist der Sammelname für USD, EUR, ZAR, JPY, CNY, AUD, AED, CAD, INR und alle anderen Feste Devisen-Paare, die unter dem Namen Fixed Forex eingeführt werden.

Die erste verfügbare Option ist [ibEUR](https://www.coingecko.com/en/coins/iron-bank-euro), die über [yearn.fi/lend](https://yearn.fi/lend) gemintet werden kann.

![](image2.png?w=700&h=194)

Alle Devisen-Optionen können über eine der akzeptierten Sicherheiten auf [yearn.fi](https://yearn.fi/lend) gemintet werden.

![](image3.png?w=645&h=874)

Die aktuellen Sicherheitenfaktoren findest du in der Iron Bank-Dokumentation, [hier](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

Jedes Devisenpaar wird auf 2 Liquiditätspools ausgerichtet;

ib\*/\* ([curve.fi](https://curve.fi/))  
ib\*/ETH ([sushi.com](https://sushi.com/))

![](image4.png?w=700&h=243)

Für jeden Vermögenswert stehen den Liquiditätsanbietern vier Renditeoptionen zur Verfügung;

1.  Bereitstellung von ib* auf [yearn.fi/lend](https://yearn.fi/lend) und Zinsen erhalten (derzeit 6,38%)
2.  Bereitstellung von ib\*/ETH an [sushi.com](https://sushi.com/) (derzeit 390%)
3.  Bereitstellung von ib\*/\* für [curve.fi](https://curve.fi/) (Pool in Vorbereitung)
4.  Stake in Iron Bank Fixed Forex und verdienen das native Token IBFF (vested, veIBFF)

\-veIBFF-

Der IBFF-Mechanismus ist komplex und sollte vor der Teilnahme sorgfältig verstanden werden.

Die anfängliche Einführung zielt nur auf einen einzigen Pool ab, [ibEUR/ETH](https://analytics.sushi.com/tokens/0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27)

Als LP kannst du den LP-Token in den IBFF [faucet](https://etherscan.io/address/0x7d254d9adc588126edaee52a1029278180a802e8) einbringen, der einen Bruchteil des Token-Tropfens liefert, der erforderlich ist, um eine Token-Sperre im Vesting-Kontrakt [veIBFF](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1) zu erzeugen.

Der eigentliche systemeigene Token ist veIBFF, oder vested IBFF, veIBFF verdient Protokollgebühren, diese Gebühren sind dynamisch und basieren auf Angebot und Nachfrage. Derzeit betragen diese Gebühren 10,15% der TVL.

IBFF-Eigentümer können eine Sperrfrist von bis zu 4 Jahren mit linearem Verfall für den veIBFF [Vertrag](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1) festlegen.

Sobald eine Sperre erstellt wurde, können LPs ibEUR/ETH in den [Verteilungsvertrag](https://etherscan.io/address/0x1da8a6fe33bd35b99505d67843eec9fa124f2d4b) investieren. Der Verteilungsvertrag wird die Token alle 7 Tage linear verteilen.

Verteilungs-Token werden auf der Grundlage deiner Sperrfrist vergütet. Wenn die Sperrfrist 1 Jahr beträgt, erhälst du 1/4 Token als veIBFF, die in 1 Jahr freigeschaltet werden. Die verbleibenden 3/4 Token werden auf den [Gebührenverteilungsvertrag](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859) verteilt.

VeIBFF-Inhaber haben zwei wöchentliche Ansprüche, Anspruch 1 ist das Protokoll der aufgelaufenen Gebühren (10,15% der TVL derzeit), und verteilte IBFF aus dem [Vertriebsvertrag](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859).

Einfach ausgedrückt, je mehr Zeit du investierst, desto unverhältnismäßiger ist deine Belohnung.

**Haftungsausschlüsse;** 

- Ungeprüft.
- 0 Nutzen für eine frühe Teilnahme, nur Risiko.
- Die anfängliche Token-Ausschüttung wird ein Bruchteil der Ausgaben sein, dies dient nur zu Testzwecken.
- In Anbetracht der unglaublich niedrigen anfänglichen Ausschüttung, kaufe Sie diese Token nicht, biete keine Liquidität für diese Token, da du Geld verlieren wirst.

**Links;**

[Forum](https://gov.yearn.finance/c/projects/fixed-forex/26)  
[Website](https://yearn.fi/lend)  
Keine sozialen Medien
