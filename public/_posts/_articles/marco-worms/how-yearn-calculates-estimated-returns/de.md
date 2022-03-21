---
title: "Wie Yearn die geschätzte Rendite (APY) berechnet" 
image:
  src: ./image1.jpg
  width: 469
  height: 246
date: '2022-02-14'
author: Marco_Worms
translator: Delace19
---

![](./image1.jpg?w=469&h=246)\
*Alte APY-Anzeige*

In den letzten Wochen haben wir viele Rückmeldungen darüber erhalten, wie unser v3-Dashboard den „Annual Percentage Yield“ (APY) (deutsch: jährliche prozentuale Rendite) der hinterlegten Vermögenswerte anzeigt. Insbesondere auf Fantom, wo das Ökosystem volatilere Preise und Strategien aufweist, haben wir kurzfristige Änderungen an der Anzeige des APY vorgenommen, um die von [weve und 0xdao](https://twitter.com/iearnfinance/status/1484570907041357828) erhaltene Rendite darzustellen. Als wir zu unseren früheren Berechnungen zurückkehrten, haben wir nicht bedacht, dass die langfristigen APY-Berechnungen aufgebläht sind. Jetzt haben wir ein Update veröffentlicht, um diesen Fehler zu korrigieren. In diesem Artikel erfährst du mehr über die Hintergründe und unsere Lösung!

## Kurzer Kontext: APR und APY?

Im DeFI sehen wir häufig diese beiden Begriffe:

- **APR:** Jährlicher Prozentsatz
- **APY:** Jährliche Prozentuale Rendite

Beide werden verwendet, um dem Nutzer mitzuteilen, wie viel Gewinn er bei einer Investition zu erwarten hat:

- **APR** keine automatische Aufzinsung der Rendite voraus
- **APY** bedeutet, dass die Rendite automatisch in die Anlage einfließt

## Was wir gelernt haben

Vor ein paar Wochen haben wir die Art und Weise, wie unser Interface die APYs anzeigt, aktualisiert, als wir die [ve(3,3)-Kriege auf Fantom](https://twitter.com/iearnfinance/status/1484570907041357828) durchliefen, um die APYs anhand der aktuellen Ertragsdaten besser darzustellen. Vor dieser Änderung zeigten wir konservativere APYs an, die auf langfristigen historischen Daten basierten. Aber während der Kriege schossen die meisten APYs der Fantom-Vaults in die Höhe und die kurzfristigen Gewinne wurden den Nutzern nicht richtig angezeigt. Wir haben eine Änderung vorgenommen und zeigen nun eine Zahl an, die auf den jüngsten Ertrag basiert, damit die Leute sehen können, dass unsere Vaults die profitabelsten Protokolle anbauen:

![](./image2.jpg?w=591&h=397)

Der Nachteil der Berechnung des APY anhand aktueller Daten ist wie folgt: Als die Gewinne aus den Kriegen zu sinken begannen, zeigten wir eine Zahl an, die aus wirklich profitablen letzten Erträgen stammte. Aber die nächsten Erträge würden wahrscheinlich nicht mehr so profitabel sein (verminderte Emissionen aus Gemeinschaftsprotokollen, die erschaffen wurden, um den Wettbewerb zu steigern, weniger Hardcore-Spekulationen, nachdem der Schnappschuss der Top 20 TVL gemacht wurde). Also beschlossen wir, einige Änderungen vorzunehmen, um diesen Fall zu beheben.

Vor der oben erwähnten Episode hatten wir also eine sehr konservative Berechnung des effektiven Jahreszinses (APY), danach haben wir uns auf die jüngsten Daten konzentriert. Indem wir diese beiden Extreme durchliefen, haben wir viel darüber gelernt, was funktioniert und was nicht! So machen wir es jetzt:

### Für Vaults, die nicht-kurvenförmige Vermögenswerte verwenden:

![](./image3.jpg?w=150&h=190)\
*Neue APY-Anzeige für den Nicht-Crv-Vault*

- **Brutto effektiver Jahreszins (APR)** Gewölbter effektiver Jahreszins (gesamt) vor abgezogenen Gebühren
- **Netto APY:** Aktueller effektiver Jahreszins des Vaults
- **Wöchentlicher APY:** Basierend auf den Erträgen der letzten 7 Tage
- **Monatlicher APY:** Basierend auf den Erträgen der letzten 30 Tage
- **APY Gründung:** Basierend auf allen Erträgen seit Bestehen des Vaults

### Für Vaults, die Kurven-Assets verwenden:

![](./image4.jpg?w=182&h=196)\
*Neue APY-Anzeige für Crv-Vault*

- **Pool APY:** APY aus der Gebühr für Kurvenswaps auf diesen Pool, die Hälfte geht hierher, die andere Hälfte an veCRV-Inhaber. 
- **Bonus-Belohnungen APR:** Belohnungen, die in der Regel vom Besitzer des Tokens hinzugefügt werden. IE frax Kurve Pools gibt dir auch frax. Die APY, wenn du das Token zum aktuellen Preis verkaufst.
- **Basis CRV APR:** Der effektive Jahreszins(APY) für die Mindestmenge an CRV-Emissionen, die dieser Kurvenpool erhält. (Wenn du nicht veCRV für Boost gestapelt hast, erhälst du diese + Pool apy + die Bonusbelohnungen.)
- **Verstärken:** Erhöh den Anteil des Multiplikators, den du vom eingesetzten veCRV erhälst
- **Convex effektiver Jahreszins (APR):** Aktuelle konvex apr wenn du bei Convex einzahlst
- **Brutto effektiver Jahreszins (APR):** Gewölbter effektiver Jahreszins (gesamt) vor abgezogenen Gebühren
- **Netto APY:** Vault aktuell APY

---

Vielen Dank an alle, die Feedback zu dieser Funktion gegeben haben, und auch an die Teams, die schnell darauf reagiert haben. Wir hoffen, dass die neue Anzeige die Realität der Gewinne eines Vaults besser widerspiegelt!

Produzent: [Worms](https://twitter.com/MarcoWorms), Redakteure: [x48](https://twitter.com/x48_crypto), [Vany](https://twitter.com/vannny365), [Dark Ghosty](https://github.com/DarkGhost7)
