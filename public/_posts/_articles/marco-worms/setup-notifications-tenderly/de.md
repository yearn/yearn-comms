---
title: "Benachrichtigungen für Blockchain-Transaktionen mit Tenderly einrichten"
image:
  src: ./cover.jpg
  width: 1200
  height: 675
date: '2022-03-18'
author: Marco_Worms
translator: Nesyeth
---

In dem [Artikel](https://medium.com/iearn/yearn-finance-partners-with-tenderly-to-supercharge-development-debugging-incident-analysis-6489260298a5), in dem Yearn die Partnerschaft mit Tenderly ankündigte, gab es einen Abschnitt, in dem wir sagten, dass es sich um eine Partnerschaft handelt:

> "Tenderly verfügt über integrierte, anpassbare Benachrichtigungen, die es selbst unerfahrenen Benutzern ermöglichen, Benachrichtigungen zu praktisch jedem Ereignis in der Kette zu erstellen."
>

Ein Mitarbeiter von Yearn hat sich gemeldet, um mehr darüber zu erfahren, und ich denke, es ist eine gute Gelegenheit, diese Funktion vorzustellen! Beginnen wir damit, einen Blick darauf zu werfen, welche Netzwerke wir mit Tenderly neben dem Ethereum Mainnet nutzen können:

![](./image1.jpg?w=909&h=441)\
*Von Tenderly unterstützte Netzwerke*

Ich werde den Dienst **"Monitoring -> Alerting"** erkunden, der sich in der [Dashboard-Seitenleiste](https://dashboard.tenderly.co/) von Tenderly befindet, nachdem ich mich bei einem Projekt angemeldet habe:

![](./image2.jpg?w=237&h=199)\
*Menü auf der linken Seite nach dem Einloggen*

Es gibt einen Vorbehalt bezüglich der kostenlosen Nutzung dieses Dienstes, der angezeigt wird, wenn du die Benachrichtigungsseite öffnest:

`Du erhältst eine Reihe von Benachrichtigungen, die innerhalb von 15 Minuten aufgetreten sind. Aktualisiere deinen Plan auf Tenderly Pro/Dev, um Echtzeit-Benachrichtigungen zu erhalten`

Zum Testen ist dies kein Problem, du kannst also mit der kostenlosen Version fortfahren. Für eine robustere Nutzung von Benachrichtigungen musst du dein Konto aktualisieren.

Beginnen wir damit, zu prüfen, was wir alles tun können, wenn wir **eine neue Benachrichtigung erstellen** wollen. Der Artikel wird nicht alle Möglichkeiten aufzeigen, also schauen dir diese an, um die beste Verwendung für deine Bedürfnisse zu verstehen:

![](./image3.jpg?w=1537&h=669)\
*Benachrichtigung erstellen*

- **Alert Type** sind die Bedingungen, die wir für ein Kettenereignis festlegen, um eine Benachrichtigung auszulösen:

![](./image4.jpg?w=1437&h=413)\
*alle Benachrichtigungsarten*

- **Alert Target** wird der Vertrag sein, der für die oben genannten Ereignisse und Bedingungen überwacht wird:

![](./image5.jpg?w=991&h=253)\
*alle Benachrichtigungsziele*

- **Alert Destinations** sind die Orte, die Benachrichtigungen erhalten, wenn der oben genannte Vertrag die Bedingungen für eine Benachrichtigung erfüllt:

![](./image6.jpg?w=937&h=195)\
*alle Zielorte der Benachrichtigung*

Bevor wir eine neue Ausschreibung erstellen können, müssen wir zunächst:

- Entscheiden, über welche Ereignisse von welchem Vertrag wir benachrichtigt werden wollen
- Den Vertrag, den wir abhören wollen, auf der Registerkarte "Verträge" hinzufügen, damit wir ihn in Schritt 2 nutzen können.
- mit den Zielen, die die Nachrichten empfangen sollen (in dieser Anleitung verwenden wir Telegram) verbinden, damit wir in Schritt 3 Benachrichtigungen an sie senden können

Und jetzt los geht's!

## Telegram als Ziel hinzufügen

Gehe auf der Registerkarte "Destinations" im oberen Menü und klicke auf "Telegram":

![](./image7.jpg?w=1364&h=617)\
*Telegram als Ziel hinzufügen*

Beschrifte es und folge den Anweisungen, damit der Bot dir Nachrichten senden kann:

![](./image8.jpg?w=591&h=475)\
*Folgen den Anweisungen, um dem Bot zu erlauben, dir Nachrichten zu senden*

Um den obigen Vorgang abzuschließen, kopiere die “magic words” aus Anweisungsschritt 3. Füge sie in den Chat mit dem Telegram-Bot von Tenderly ein, der sich durch Klicken auf [@TenderlyRobot](https://t.me/TenderlyRobot) öffnet.

![](./image9.jpg?w=772&h=235)\
*Bestätigungsmeldung, dass der Bot jetzt Nachrichten in diesem Chat senden kann!*

## Überwachung von Yearn Vault Einlagen/Abhebungen

Beginnen wir mit der Überwachung einiger Ereignisse auf dem SPELL yVault im Fantom-Netzwerk. Wir müssen die Adresse des SPELL yVault-Vertrags kennen. Wir können sie finden, indem wir die [Yearn Vaults-Schnittstelle](https://yearn.finance/#/vaults) aufrufen und auf den SPELL Vault klicken.

![](./image10.jpg?w=625&h=287)\
*Yearn Vault bei Fantom*

Nachdem du darauf geklickt hast, siehst du diese Seite mit allen Details zum Vault. Klicke auf die Schaltfläche "Block-Explorer", die dich zum Vertrag des Vault führt:

![](./image11.jpg?w=1157&h=757)\
*SPELL yVault Einzelheiten*

Dadurch wird der [SPELL yVault-Vertrag](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d) auf FTMScan [Fantom-Fork von Etherscan](https://etherscan.io/) geöffnet:

![](./image12.jpg?w=1367&h=845)\
*[SPELL yVault-Vertrag auf FTMScan](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d)*

Ich habe die für unseren Anwendungsfall wichtigen Informationen der Reihe nach hervorgehoben:
- Zunächst die Vertragsadresse
- Dann den "Token-Namen" (hilfreich, wenn du viele Vertragsregisterkarten geöffnet hast)
- Schließlich die Geschichte der Methoden (Funktionen), die dieser Vertrag ausgeführt hat

In unserem Beispiel **fügen wir eine Benachrichtigung hinzu, wenn jemand Token in den Vault einzahlt**. Kopiere dazu die URL der Vertragsseite:

https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d

Gehe dann auf die Registerkarte "Vertrag" von Tenderly und klicke auf "Importieren", um diesen Vertrag in das Dashboard zu importieren, damit wir Benachrichtigungen für ihn erstellen können:

![](./image13.jpg?w=1399&h=681)\
*Vertrag in Tenderly importieren*

Fügen die Adresse ein, wähle den "Vyper Contract" (der Name wird so angezeigt, weil Yearn Vaults die [Programmiersprache Vyper](https://vyper.readthedocs.io/en/stable/index.html) verwenden). Wenn er angezeigt wird, klicke auf "Importieren":

![](./image14.jpg?w=1155&h=909)\
*Vertrag in Tenderly importieren*

Nach dem Importieren ist der Vertrag bereit, damit wir eine Benachrichtigung dafür erstellen können!

![](./image15.jpg?w=865&h=467)\
*Vertrag in Tenderly importieren*

Dann lass uns eine Benachrichtigung erstellen:

![](./image16.jpg?w=1817&h=713)\
*Erstellen einer neuen Benachrichtigung*

Wir wollen jedes Mal eine Benachrichtigung erhalten, wenn jemand in den SPELL yVault einzahlt. Dazu überprüfen wir die Methode "Deposit", die im yVault-Vertrag existiert. "method" ist ein analoger Name zu “function call", also ist das die Art von Benachrichtigung, die wir in diesem Fall verwenden werden.

![](./image17.jpg?w=761&h=265)\
*Benachrichtigungsart auswählen*

Ziel wird eine Adresse sein:

![](./image18.jpg?w=759&h=245)\
*Benachrichtigungsart auswählen*

Du kannst den Vertrag auswählen, den wir zuvor hinzugefügt haben, und dann jede Funktion auswählen, die darin enthalten ist. Beachte, dass viele Funktionen ähnliche Namen haben können. Funktionen, die mit "_" beginnen, sind oft private interne Funktionen und nicht die, nach denen wir suchen.

In diesem Fall haben wir _deposit (privat: zur internen Verwendung) und deposit (öffentlich: für externe Benutzer). Wir entscheiden uns für die öffentliche Variante:

![](./image19.jpg?w=1319&h=679)\
*Benachrichtigungsziel auswählen*

Wähle abschließend das zuvor eingerichtete Telegramziel aus und speichere die Meldung:

![](./image20.jpg?w=1325&h=909)\
*Benachrichtigungsziel auswählen*

Wir sind fertig! Die Benachrichtung ist erstellt und ich erhalte jedes Mal eine Nachricht, wenn jemand SPELL in diesem yVault hinterlegt!

![](./image21.jpg?w=1521&h=739)\
*Benachrichtigung erfolgreich erstellt!*

Hier ist ein Beispiel für eine Benachrichtigung, die ich erhielt, nachdem ich dieses Beispiel eingerichtet und ein wenig SPELL in den Vault eingezahlt hatte, um es auszulösen. Ich erhielt die Benachrichtigung sofort nach der Bestätigung der Transaktion!

![](./image22.jpg?w=495&h=579)\
*Benachrichtigung über neues SPELL-Depot bei Fantom yVault an mein Telegram geschickt!*

## Abschließende Überlegungen

Dieses Yearn-Beispiel zeigt eine einfache Möglichkeit, einen Funktionsaufruf eines Vertrags zu überwachen. Wenn du alle Optionen des Benachrichtigungssystems erforscht, wirst dusehen, dass diese Funktion leicht für viele verschiedene Zwecke angepasst werden kann, zum Beispiel:

- Die Entwickler von NFT-Sammlungen können überwachen, wann ihr Vertrag das Minting eines neuen Tokens auslöst und dies automatisch auf Discord bekannt geben.
- Personen, die die Tokenomics-Ströme überwachen, können mit Hilfe von Benachrichtigungen ein Auge auf den Kontostand und die Aktionen von Verträgen werfen, um zu sehen, ob die Entwickler das tun, was von ihnen erwartet wird.

Du kannst jede Art von Aktivität auf der Kette überwachen und darüber benachrichtigt werden, also experimentiere mit den verschiedenen Optionen!
Ersteller: [Worms](https://twitter.com/MarcoWorms), Rezensenten: [Cryptouf](https://twitter.com/cryptouf), [Dark Ghosty](https://github.com/DarkGhost7)
