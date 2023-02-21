---
title:  "Risiko, Werkzeuge und Einblicke"
image:
  src: ./cover.jpg
  width: 1500
  height: 500
date: "2021-08-12"
author: Storm Blessed
translator: Nesyeth
---

Originalquelle: [twitter](https://twitter.com/storming0x/status/1436851219864059906)

##### 1
Ich habe am Wochenende etwas gecodet und beschlossen, einen Tweetstorm über [@iearnfinance](https://twitter.com/iearnfinance) Risiken, Tools und Einblicke hinter die Kulissen zu machen.

🧵 👇

##### 2
Wenn man [yearn.finance](http://yearn.finance) nicht kennt, kann man es sich als "Renditefunktionsprotokoll" vorstellen. Das Spitzenprodukt von Yearn sind die Vaults. Lege Geld in die Vaults und irgendwie wächst dieses Geld am nächsten Tag und wächst ständig weiter. Das ist natürlich eine starke Vereinfachung.

##### 3
Ermöglicht wird dies durch ein Team intelligenter Leute, die Strategien für den Vault programmieren, um Geld mit dem Ziel zu verteilen, Rendite zu erzielen. Die Strategien sind intelligente Verträge, die häufig eingesetzt und aktualisiert werden müssen. Diese intelligenten Verträge sind flexibel und dynamisch. Beispielhafte Zuweisungen:

![3_1436841383378120712](3_1436841383378120712.jpg?w=1200&h=663)

##### 4
Angesichts der Art und Weise, wie das yearn-Protokoll funktioniert, muss es sehr schnell umgeschaltet werden, um neue Verträge und Strategien rasch auf den Weg zu bringen, was sich auf die Sicherheit auswirkt. Eines der Hauptanliegen von Yearn ist das Risiko aus allen Perspektiven. Wir sind bei der EOD im Risikogeschäft tätig. Wie lässt sich das ausgleichen?

##### 5
Wir müssen einen Risikorahmen schaffen, um sich ein Bild zu machen. Das ist die Anzahl der Vaults + Strategien, die derzeit eingesetzt werden. An der Komplexität dieses Systems führt kein Weg vorbei, viele Teile müssen zusammenpassen, damit es funktioniert.

![3_1436842206359285762](3_1436842206359285762.jpg?w=398&h=117)

##### 6
In meinem früheren Leben habe ich mich mit Luftfahrtsystemen beschäftigt. Ich denke, man kann viele Lehren aus der Luftfahrt ziehen, die auch ein Risikogeschäft ist. Die Komplexität ist wie im Finanzwesen hoch. Trotzdem denkt man nicht zweimal darüber nach, einen Flug für die nächste Reise zu buchen.

##### 7
Jeden Tag finden Millionen von Flügen statt, und bei vielen Flügen kommt es zu Zwischenfällen. Ein Zwischenfall führt nicht zu einem Unfall = Flugzeugabsturz. Damit ein Flugzeug abstürzt, müssen viele Zwischenfälle gleichzeitig eintreten. Dies ist im derzeitigen Flugbetrieb äußerst unwahrscheinlich.

##### 8
Aber jedes Mal, wenn es einen Zwischenfall gibt, verlangen die Luftfahrtprozesse und -systeme, dass man die Ursache korrigiert und behebt. Wir haben ein ähnliches Verfahren eingeführt. Nicht jedes Problem führt zu einem Verlust von Mitteln, aber wir müssen daraus lernen und uns verbessern.

##### 9
Dieser Prozess wurde Anfang des Jahres nach einem wirklich schlimmen Monat mit vielen Zwischenfällen und Problemen eingeführt. Und es wurden mehrere Initiativen gestartet und umgesetzt, um menschliche Faktoren zu automatisieren und so weit wie möglich aus unseren täglichen Entscheidungen zu entfernen.

[twitter.com/storming0x/sta…](https://twitter.com/storming0x/status/1395452522840608768?s=20)

> ![storming0x](storming0x-881012267675820034.jpg?w=48&h=48)
> Storm Blessed 0x ([@storming0x](https://twitter.com/storming0x))

> Wir haben gerade einen 16-stündigen Einsatz hinter uns, bei dem es um ein Problem bei Yearn ging. Extrem müde, aber dankbar, dass wir die Chance haben, Teil dieses großartigen Teams zu sein.

Die Krise wurde gelöst und es gingen keine Mittel verloren. Viele wichtige Erkenntnisse und Dinge, die [@iearnfinance](https://twitter.com/iearnfinance) stärker machen werden. Brauchen 😴

##### 10
Das kann natürlich noch verbessert werden und ist ein ständiger Prozess, aber was uns nicht umbringt, macht uns stärker. Es ist Teil meiner Aufgabe, diesen Prozess in der DNA von Yearn zu verankern.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/EMERGENCY.md)

##### 11
Wir hatten Situationen, in denen der Code einen Fehler aufwies und falsche Abrechnungen machte, die zu Krisensituationen und Problemen führten.
Behebungen:
-Wir haben Simulationsbots hinzugefügt, um Probleme zu erkennen, bevor sie in der Kette auftreten.
-Gesundheitsprüfungen auf der Kette, die ein trx rückgängig machen, wenn die Asserts nicht erfüllt sind.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/DEPLOYMENT.md#health-checks)

##### 12
Der Simulations-Bot ist an die Benachrichtigung über unser Telegramm gebunden und sendet uns mit zeitlichem Vorlauf jedes Problem. Kürzlich konnten wir eine Krise durch eine Simulation komplett verhindern, die Strategie wurde abgewickelt, ohne dass wir etwas in der Kette korrigieren mussten. Wir sind von korrigierenden zu präventiven Maßnahmen übergegangen.

![3_1436848158034644993](3_1436848158034644993.jpg?w=652&h=780)

![3_1436848166805000195](3_1436848166805000195.jpg?w=984&h=748)

![3_1436848196399996929](3_1436848196399996929.jpg?w=1200&h=1000)

##### 13
[yearn.watch](http://yearn.watch) ist die Website, die ich aufgebaut habe, um Strategien und den Zustand von Vaults zu verfolgen. Sie nutzt ein großartiges Stück Infrastruktur, das intern vom Yearn-Team entwickelt wurde, um Daten abzurufen. Wir haben spezielle Multicall-Verträge, um diese Daten effizient abrufen zu können und Entscheidungen zu treffen.

![3_1436848846378729473](3_1436848846378729473.jpg?w=1200&h=739)

![3_1436848859322273796](3_1436848859322273796.jpg?w=1200&h=767)

##### 14
Wir haben auch ein Risiko-Dashboard, das wir entwickelt haben, um jede Strategie zu bewerten und unser Risiko zu jedem Zeitpunkt einzuschätzen. Es wird von unserer internen Infrastruktur gespeist und bei Änderungen in der Kette automatisch angepasst.
(Beispielhafte Daten unten)

![3_1436849527198085126](3_1436849527198085126.jpg?w=1200&h=498)

![3_1436849597129715717](3_1436849597129715717.jpg?w=583&h=433)

![3_1436849615987351553](3_1436849615987351553.jpg?w=719&h=314)

##### 15
Es ist noch zu früh, um es zu veröffentlichen, da wir unsere Daten und Modelle noch optimieren, um angesichts unseres internen Prozesses eine objektive Bewertung zu erhalten. Sobald wir mehr Daten dazu gesammelt haben, werde ich gerne mehr darüber berichten.

##### 16
Wir sind weit davon entfernt, das Risiko und die Sicherheit von Smart Contracts zu lösen, aber das Einzige, was wir tun können, ist, es weiter zu versuchen. Wir hoffen, dass dieser Blick hinter die Kulissen andere Projekte im Ökosystem informieren kann, um dir zu helfen oder auch andere Ideen zu entwickeln, von denen wir alle profitieren können.

Vielen Dank für's Lesen!
