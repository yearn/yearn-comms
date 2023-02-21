---
title:  "Yearn Partners: Bauen mit yVaults"
image:
  src: ./cover.png
  width: 1500
  height: 729
date: '2022-03-07'
author: Marco_Worms
translator: Nesyeth
---

![](./cover.png?w=1400&h=729)

[Yearn Vaults](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) basieren auf offenen Standards, und YFI-Partner haben in den letzten Jahren erstaunliche Anwendungen darauf aufgesetzt. Dieser Artikel zeigt, wie andere Protokolle die Yearn-Produkte erweitert haben, und wir hoffen, dass er zu weiteren Experimenten mit den YFI-Diensten anregt!

## Beispielfälle

Die häufigsten Fälle von Partnerschaften sind:
1. Verwendung von yVaults als Sicherheit für die Kreditvergabe/-aufnahme
2. Verwendung von yVaults zur Erwirtschaftung von Erträgen mit Eigenmitteln

In beiden Fällen wird der Partner mit Erfolgsgebühren belohnt, die aus dem Gesamtgewinn des Vault entnommen werden. Je mehr Gesamtvolumen ein Partner zu einem Vault beiträgt, desto größer ist sein Anteil am Gewinn, den er erhält.

> Im Jahr 2021 teilte Yearn über das Partnerschaftsprogramm 2.793.161 US-Dollar mit Partnern

Lass uns nun näher auf die Anwendungsfälle unseres größten Partners eingehen:

## Yearn + [Abracadabra](http://abracadabra.money/)

Abracadabra verwendet yVaults für seinen Ausleihservice: Die wichtigste Neuerung besteht darin, dass verzinste Token als Sicherheit für die Kreditaufnahme akzeptiert werden. Bei der Rückzahlung erhält der Nutzer die als Sicherheit dienenden Vault-Token zurück, einschließlich der Gewinne, die während der gesperrten Zeit erzielt wurden.

Ein Überblick über Abracadabra wäre das:
1. Nutzer zahlt wETH (wrapped Ethereum, wie Ethereum) in einen yVault ein, erhält yvWETH
2. Der Nutzer hinterlegt yvWETH auf Abracadaba als Sicherheit, Abracadabra erlaubt dem Nutzer, einen Prozentsatz seiner Sicherheit als Dollar-Stablecoin namens Magic Internet Money (MIM) zu minten

![](./image1.jpg?w=633&h=527)\
*[Abracadabra](http://abracadabra.money/) “borrow” Leihschnittstelle*

Wenn der Nutzer MIM prägt, werden die hinterlegten Sicherheiten gesperrt, bis die geliehenen MIM zurückgezahlt sind.

- Wenn der Nutzer rechtzeitig zahlt, wird die Sicherheit freigegeben. Bei einem yVault bedeutet dies, dass deine yVault-Token mit allen Gewinnen, die du während der Sperrung erzielt hast, zurückgegeben werden!
- Wenn der Nutzer nicht rechtzeitig zahlt, wird ein Teil deiner Sicherheiten zur Bezahlung des Dienstes verwendet (verwertet).

Im Idealfall übersteigen die Zinsen, die durch den hinterlegten Vault-Token generiert werden, die Kosten für die Leihgebühr von Abracadabra, so dass der vollständige Anwendungsfall hier das Sperren eines verzinsten Tokens als Sicherheit wäre

## Yearn + [Alchemix](https://alchemix.fi/)

Alchemix verwendet DAI (ein weiterer dollar stablecoin, ähnlich wie MIM) yVault, um Zinsen aus von Nutzern eingezahlten DAI zu generieren und Darlehen automatisch zurückzuzahlen.

1. Nutzer zahlt DAI oder ETH bei Alchemix ein
2. Alchemix deponiert DAI oder ETH in Yearn Vaults, um Rendite für den Nutzer zu generieren (und den im nächsten Schritt aufgenommenen Kredit automatisch zurückzuzahlen).
3. Der Nutzer kann bis zu 50 % der hinterlegten Sicherheiten als DAI und bis zu 25 % als ETH als alUSD oder alETH (kann im Alchemix-Ökosystem in DAI oder ETH umgewandelt werden) leihen, wodurch der hinterlegte Betrag proportional zum geliehenen Betrag gesperrt wird.
4. Da der in Schritt 2 eingezahlte Betrag eine Rendite abwirft, wird das Benutzerdarlehen automatisch zurückgezahlt, und der Benutzer kann dann im Verhältnis zur erzielten Rendite Geld abheben.

Hier findest du einen vollständigen Überblick über das Alchemix-Ökosystem und dessen Integration in Yearn:

![](./image2.png?w=1400&h=950)\
*[Alchemix](https://alchemix.fi/) Ökosystem*

## yVaults in B2B

*Für geschäftliche Anwendungsfälle macht die Yearn DAO wirklich einen Unterschied: Sie hat die Infrastruktur, um die derzeit beste Vault-Sicherheit in DeFi zu bieten*

Partner verdienen einen Anteil an den Gebühren, basierend auf den TVL, die sie zu den Vaults beitragen. Du kannst mehr über unser Gewinnbeteiligungsmodell in der [Yearn Partner Dokumentation](https://docs.yearn.finance/partners/introduction) lesen. Partner-Wallet-Apps und Earn-Sektionen implementieren yVaults und bieten sie den Nutzern in verschiedenen Formen an:

**Verdienstseiten (Earn Sections):** Seiten, die Nutzern eine alternative Möglichkeit bieten, ihr Vermögen in yVaults zu hinterlegen. Ein gutes Beispiel für einen Verdienstbereich findet sich auf [ShapeShift](https://shapeshift.com/), deren Vertrag zur Hinterlegung von Vermögenswerten in Yearn Vaults als [open-sourced auf GitHub](https://github.com/shapeshift/yearn-router) verfügbar ist.

![](./image3.jpg?w=750&h=554)\
*[ShapeShift](https://shapeshift.com/) Verdienstbereich*

**Wallets**: Partner bieten Yearn-Optionen zur Ertragsgenerierung innerhalb ihres Ökosystems mit yVaults an. Das [SteakWallet](https://www.steakwallet.fi/) ist ein gutes Beispiel für einen Wallet-Dienst, der mit Yearn integriert ist:

![](./image4.jpg?w=363&h=681)\
*[SteakWallet](https://www.steakwallet.fi/) Schnittstelle*

## Ressourcen, um Partner zu werden

Wenn du auf unseren yVaults aufbauen möchtest, sind folgende Punkte empfehlenswert:

- Lies die [Dokumentation des Partnerschaftsprogramms](https://docs.yearn.finance/partners/introduction) und fülle das Partnerformular aus.
- Technische Richtlinien findest du in der [Yearn Integration Methods Dokumentation](https://docs.yearn.finance/partners/integration_guide)

*Wir würden uns freuen, zu hören, was du auf der Grundlage von $YFI-Protokollen entwickelst!*

Ersteller: [Worms](https://twitter.com/MarcoWorms), Rezensenten: [Corn](https://twitter.com/omgcorn), [Dark Ghosty](https://github.com/DarkGhost7)
