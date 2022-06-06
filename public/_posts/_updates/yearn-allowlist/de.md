---
title: "Yearn Erlaubnisliste"
image:
  src: ./image1.jpg
  width: 770
  height: 367
date: '2022-05-06'
author: Weaver
translator: Nesyeth
---

![](./image1.jpg?w=770&h=367)

## Übersicht

Um die Yearn-Website noch sicherer zu machen, wurde kürzlich eine neue Funktion eingeführt, die sogenannte Erlaubnisliste (Allowlist). Im Wesentlichen ermöglicht sie, dass alle Transaktionen, die über die Website/SDK getätigt werden, anhand eines Vertrags auf der Kette validiert werden, der eine Aufzeichnung aller gültigen Anrufdaten enthält, die von der Website erzeugt werden können.

Dadurch wird verhindert, dass die Website für verschiedene Angriffe durch Mittelsmänner anfällig ist, bei denen Daten an die Website übermittelt werden, sei es über die API von Zapper/0x oder die von Yearn selbst. Wenn zum Beispiel die API von Yearn eine Liste von Vaults mit bösartigen Adressen zurückgibt, mit der Absicht, dass die Nutzer eine davon genehmigen, wenn sie versuchen, eine Einzahlung vorzunehmen, würde die Allowlist die Transaktion blockieren.

Wir laden auch andere Protokolle dazu ein, ihre eigenen Erlaubnisliste zu nutzen, um ihre Sicherheit zu verbessern. Anweisungen zur Erstellung deiner eigenen Allowlist findest du weiter unten.

## Wie es funktioniert

Nehmen wir ein Beispiel für die Validierung der Anrufdaten für eine Transaktion zur Genehmigung einer Einzahlung in einen Vaultraum.

Der Erlaubnislistenvertrag enthält eine Liste von Bedingungen, bei denen es sich um Strukturen handelt, die validiert werden.

Hier ist der für die Genehmigung eines Vault-Tokens (in JSON-Form):

```
{
  "id"= "TOKEN_APPROVE_VAULT",
  "implementationId": "IMPLEMENTATION_YEARN_VAULTS",
  "methodName": "approve",
  "paramTypes": ["address", "uint256"],
  "requirements": [
    ["target", "isVaultUnderlyingToken"],
    ["param", "isVault", "0"]
  ]
}
```

- `id`: Die Kennung der Bedingung, mit der die Bedingung durch den Protokolleigentümer aktualisiert oder entfernt werden kann

- `implementationId`: Der Bezeichner des Implementierungsvertrags. Implementierungsverträge enthalten die Logik zur Validierung der Bedingung. Jede Allowlist kann mehrere Implementierungsverträge haben, gegen die sie validiert wird. In der Yearn-Erlaubnisliste gibt es zum Beispiel eine Implementierung für alles, was mit Vaults zu tun hat, und eine weitere für den Laborbereich der Website mit experimentelleren Produkten.

- `methodName`: Der Name der Funktion, die erlaubt ist

- `paramTypes`: Die Parameter der Funktion

- `requirements`: Informationen darüber, wie die Validierung ausgeführt werden soll

Es kann zwei Arten von Anforderungen geben: `target`- und `param`.
  
- Wenn das erste Anforderungsargument ein `target` Argument ist, ist das nächste Argument die Funktion, die bei der Implementierung aufgerufen werden `param`, um das Ziel der Transaktion zu validieren.

- Wenn das erste Anforderungsargument ein `param` ist, kommt als nächstes die Funktion, die für die Validierung verwendet werden soll, und das letzte Argument ist die Position des Parameters, so dass er bei der Validierung aus den Calldata extrahiert werden kann.

Hier ist die Transaktion, die den Curve RocketPool Vault genehmigt und die wir validieren werden

- target:`0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08`  
- calldata:`0x095ea7b30000000000000000000000005c0a86a32c129538d62c106eb8115a8b02358d570000000000000000000000000000000000c097ce7bc90715b34b9f1000000000`  

Es gibt drei Schritte zur Validierung:

1. Wir prüfen zunächst den [Methodenselektor](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L72). Aus der Bedingung generieren wir den erwarteten Methodenselektor für eine Genehmigungstransaktion. Da wir den Funktionsnamen und die Parameter in der Bedingung gespeichert haben, können wir die Funktion neu erstellen und `bytes4(keccak256(bytes(reconstructedMethodSignature)))` benutzen. Dies können wir dann mit den ersten 4 Bytes der Aufrufdaten vergleichen, um sicherzustellen, dass eine gültige Funktion von der Website aufgerufen wird. Die 4-Byte-Signatur von `approve(address,uint256)` ist `0x095ea7b3`, so dass wir sehen können, dass die Aufrufdaten für diese Funktion gültig sind.

2. Anschließend wird [das Ziel validiert](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L50). Dazu erfolgt ein Aufruf des Implementierungsvertrags der Bedingung unter Verwendung der bereitgestellten Validierung, in diesem Fall `isVaultUnderlyingToken`. Da wir immer wissen, dass wir eine Adresse validieren, können wir davon ausgehen, dass diese Funktion einen einzigen Adressparameter hat. Es wird auch angenommen, dass diese Funktion ein `bool` zurückgibt. Wenn der zurückgegebene Wert falsch ist, ist die Transaktion nicht gültig. Im Implementierungsvertrag gibt es eine Funktion `isVaultUnderlyingToken`, die dann das Vaultregister von Yearn aufruft, um die eigentliche Validierung durchzuführen.

3. Anschließend [überprüfen wir alle Parameterbedingungen](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L95), von denen es mehr als eine geben kann, oder keine, wenn es sich um eine Funktion ohne Argumente handelt. In diesem Fall wollen wir prüfen, ob der Parameter an Position 0 die Funktion `isVault` des Implementierungsvertrags erfüllt, damit wir wissen, dass der Benutzer in einen gültigen Vault einzahlt. Auch hier verwendet der Implementierungsvertrag das Vaultregister von Yearn, um zu prüfen, ob die aus den Aufrufdaten entschlüsselte Adresse ein gültiger Vault ist oder nicht.

Eine an die Erlaubnisliste übermittelte Transaktion wird anhand der einzelnen Bedingungen überprüft. Bestätigt eine dieser Bedingungen, dass die Transaktion gültig ist, können wir sicher sein, dass die Transaktion, die gerade übermittelt wird, unabhängig davon, wie sie dem Benutzer bei der Interaktion mit der Website mitgeteilt wurde, nicht bösartig ist und sicher ausgeführt werden kann.

## Wer kontrolliert die Erlaubnisliste der einzelnen Websites?

Die Erlaubnisliste wurde so konzipiert, dass jede Website eine eigene Instanz hat, aber wir brauchen eine Möglichkeit, jede Erlaubnisliste mit jeder Website zu verknüpfen, und zwar innerhalb der Kette. Zu diesem Zweck verwenden wir ENS/DNSSEC, um den Eigentümer jeder Domain zu verifizieren. — https://docs.ens.domains/dns-registrar-guide. Auf diese Weise wissen wir, dass die Kontrolle über die Erlaubnisliste mit der Kontrolle über die Domain verknüpft ist, und solange dies nicht gefährdet ist, kann die richtige Erlaubnisliste für eine bestimmte Website abgerufen werden.

Die Sicherheit einer Erlaubnisliste hängt auch von den Implementierungsverträgen ab. Wenn diese leicht veränderbar wären oder falsch implementiert würden, wäre die Sicherheit der Erlaubnisliste gefährdet. Am besten ist es, diese Verträge unveränderlich zu machen, oder wenn sie aktualisierbar sein müssen, dann wäre der Besitz durch die Multisig des Protokolls vorzuziehen.

## Anmeldung als Protokoll

Um eine eigene Erlaubnisliste zu erstellen und zu registrieren, können Protokolle in folgenden Schritten erstellt werden:

- Starte die Registrierung der Erlaubnisliste mit registerProtocol auf dem [Allowlist-Registry-Vertrag](https://etherscan.io/address/0xb39c4EF6c7602f1888E3f3347f63F26c158c0336). Dadurch wird eine neue Erlaubnisliste für die Domäne des Protokolls eingerichtet. Hinweis: Das Konto, das die Registrierung startet, muss über ENS als Eigentümer der Domäne registriert sein.
- Setze benutzerdefinierte Implementierungsverträge ein, die zur Validierung von Zielen/Parametern verwendet werden können
- Verknüpfe diese Implementierungsverträge mit der Erlaubnisliste, indem du die Funktion `setImplementation` verwendest.
- Ermittel alle Transaktionen, die über die Website erstellt werden, und erstelle entsprechende Bedingungen. Setze diese Bedingungen mit `addConditions` in die Erlaubnisliste

Ein Beispiel für ein Deployment-Skript findest du [hier](https://github.com/yearn/yearn-allowlist/blob/main/scripts/chains/250/deploy.py)

## Zukünftige Verbesserungen

Wie bereits erwähnt, verringert diese Funktion die Manipulation von Daten, aus denen die von den Nutzern eingereichten Transaktionen erstellt werden, wie z. B. Daten aus APIs. Wenn jedoch der Quellcode der Website kompromittiert oder bösartiger Code eingeschleust wird, könnten diese Prüfungen einfach ignoriert und bösartige Transaktionen gebildet werden, die dem Nutzer präsentiert werden.

Um dies zu vermeiden, könnte die Erlaubnisliste in ein Wallet (wie z.B. metamask) integriert werden, die ihrerseits alle Transaktionen mit der Erlaubnisliste abgleicht, die für den Domänennamen, von dem die Transaktion ausgeht, abgerufen wird. Dies würde die Manipulation des Front-End-Quellcodes als Angriffsvektor vollständig ausschließen und wäre ein Wettbewerbsvorteil für jedes Wallet, das dies implementiert. Die Erlaubnisliste Registry kann zur Validierung beliebiger Abrufdaten für beliebige Websites mit der folgenden Funktion verwendet werden:

```
/**
* @notice Determine whether or not a given target and calldata is valid
* @dev In order to be valid, target and calldata must pass the allowlist conditions tests
* @param targetAddress The target address of the method call
* @param data The raw calldata of the call
* @return isValid True if valid, false if not
*/
   
function validateCalldataByOrigin(
  string memory originName,
  address targetAddress,
  bytes calldata data
) public view returns (bool isValid) {
  address allowlistAddress = allowlistAddressByOriginName[originName];
  isValid = CalldataValidation.validateCalldataByAllowlist(
    allowlistAddress,
    targetAddress,
    data
  );
}
```

## Weitere Informationen

**Eth-Erlaubnisliste**
https://github.com/yearn/eth-allowlist

**Beispiel für die Implementierung von Yearn's Erlaubnisliste**
https://github.com/yearn/yearn-allowlist

**ENS DNS registrierung**
https://docs.ens.domains/dns-registrar-guide

*Dieser Artikel wurde anonym von einem Yearn-Entwickler zur Verfügung gestellt. Ich kopiere einfach - xoxo weaver.*
