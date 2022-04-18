---
layout: post
title: "Stealth Safe Guard: MEV Protection for your Gnosis Safe"
categories: [Updates]
image:
  src: ./cover.jpg
  width: 1256
  height: 1024
author: "0x71B1"
date: "2021-11-16"
translator: RestlessMik3
---

![](./cover.png?w=1000&h=500)

artículo original: [Yearn.Finance Engineering](https://mirror.xyz/yearn-finance-engineering.eth)

## Introducción

Gnosis Safe es un producto brillante y la elección unánime para equipos de protocolo multisig en Ethereum. Pero sin la atención de los propietarios, existen algunas amenazas al acecho cuando se trata de la protección MEV:

1. Amenaza de ejecutor de terceros
2. Amenaza de mempool público
3. Amenaza de bloque Uncled

Los protocolos como Yearn específicamente son grandes objetivos para MEV dado el volumen masivo de intercambios que ocurren a diario (algunos días más de $ 1,000,000). Hasta ahora, ha sido una lucha implementar los procesos adecuados a nivel humano para protegerse contra estas amenazas y mantenerse a salvo de renunciar a las oportunidades de MEV.

Esta publicación presenta "**Stealth Safe Guard**", una protección recientemente desarrollada que tiene como objetivo resolver estas 3 amenazas que pueden hacer que las interacciones con su safe sean vulnerables.

## Amenaza de ejecutor de terceros

### Definición del problema:

Las transacciones de Gnosis Safe pueden ser ejecutadas por cualquier persona que tenga las firmas requeridas, que están disponibles públicamente a través de la interfaz de usuario y la API oficiales de gnosis. Esto abre un vector de ataque en el que un actor malicioso puede agregar transacciones personalizadas antes y después de la ejecución de multisig tx y obtener su MEV.

### Solución:

Gnosis Safe >=1.3.0 resuelve esto al permitir que la safe asigne un contrato de protección que se puede configurar para permitir que solo las direcciones de confianza definidas por el usuario ejecuten las transacciones seguras. Más detalles sobre por qué [aquí](https://blog.gnosis.pm/gnosis-safe-mev-how-to-mitigate-it-347e13535e34).

En [StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol) este es el [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol).

## Amenaza de Mempool público

### Definición del problema:

Ejecutar transacciones seguras a través del mempool público abre la misma amenaza que se indicó anteriormente, cualquiera puede ver la tx y generar rápidamente un paquete de flashbots para obtener el MEV.

### Solución:

[StealthSafeGuard](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/contracts/guard/StealthSafeGuard.sol) requiere que los ejecutores pasen por [StealthRelayer](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthRelayer.sol), que protege contra los txs que ingresan al mempool público al agregar una recompensa consolidada a cualquiera que vea el tx y informa que es un hash secreto, el tx no se ejecutará y le quitará la penalización al ejecutor. Gracias al equipo de Tenderly, tenemos un conjunto de scripts automáticos que buscan este tipo de txs que los reportarán de inmediato y pagarán al minero la penalización total del ejecutor.

## Amenaza de bloque Uncled

### Definición del problema:

Incluso si todo lo anterior se hace correctamente, todavía hay una forma de que nuestro tx termine en las manos equivocadas. La forma más común de que esto suceda es cuando nuestro tx sigiloso termina siendo incluido SÓLO en un bloque no identificado. Esto permite que un atacante tome nuestro tx del bloque sin unir e incluirlo en el siguiente bloque.

### Solución:

Hay una manera fácil de evitar que esto suceda que requiere que nuestra tx solo tenga éxito en un número de bloque específico. **StealthRelayer** se puede configurar para requerir que el ejecutor envíe un número de bloque de destino en los argumentos de ejecución. Hacer esto con flashbots también nos permite apuntar al bloque desde la configuración del paquete y el contrato inteligente para evitar txs revertidas. La protección de bloqueo se puede desactivar para redes no compatibles con Flashbots (como FTM).

## Descripción

### Enlaces útiles:

- [¿Qué es gnosis safe guard?](https://help.gnosis-safe.io/en/articles/5496893-add-a-transaction-guard)
- [algunos contratos de ejemplo de guardia oficiales](https://github.com/gnosis/safe-contracts/tree/main/contracts/examples/guards)

**StealthSafeGuard** es un contrato de protección de seguridad de Gnosis que permite que las transacciones multisig se firmen de forma segura en la interfaz de usuario sin el riesgo de que un tercero las ejecute,  también permite que las ejecutemos usando un mempool + protección de bloque para evitar un sandwich y/o que sea atacada por uncle bandido usando [bonded-stealth-txs](https://github.com/lbertenasco/bonded-stealth-tx).

Esto se logra al requerir que `msg.sender` en **StealthSafeGuard** sea nuestro **StealthRelayer** y que nuestro `StealthRelayer.caller()` exista en `StealthSafeGuard.executors()`.

## Implementación y configuración

### Guardia

**StealthSafeGuard** se puede implementar fácilmente con el siguiente script: [/guard/00-stealth-safe-guard-deploy.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/00-stealth-safe-guard-deploy.ts)

Recuerde configurar correctamente su dirección `StealthRelayer` en el archivo [utils/contracts.ts](https://github.com/yearn/strategies-keep3r/blob/main/utils/contracts.ts#L73), y correctamente ingrese su dirección segura que se asignará como el rol de `Manager`, ya que `msg.sender` obtendrá el rol de `Owner`.

### Ejecutor

La(s) cuenta(s) que utilizarás para ejecutar las transacciones seguras deberán realizar algunas transacciones, incluida la vinculación de algunos ETH en [StealthVault](https://github.com/yearn/hardhat-monorepo/blob/main/packages/stealth-txs/contracts/StealthVault.sol), para poder ejecutar correctamente a través de **StealthRelayer**. Además de esto, el *Governor* o *Manager* de **StealthSafeGuard** necesitaría agregar estas cuentas como ejecutores. Puede verificar en las interacciones del contrato cómo realizar esto. La clave privada del *Executor* también se usará en los scripts a continuación.

### Interacciones de contrato

- *Executor* necesita llamar a `bond(1 ether)`
- Utilizado por **StealthRelayer** para validar los bonos del ejecutor y StealthHash
- *Executor* necesita habilitar `StealthRelayer` como `StealthVault.job`

### StealthRelayer

- *Governor* necesita llamar a `.addJob(GnosisSafeAddress)`
- *Governor* puede deshabilitar la protección de bloqueo llamando a `setForceBlockProtection(bool)`
    - la protección de bloqueo debe deshabilitarse para las cadenas en las que no se admiten flashbots
- *Executor* puede llamar a `execute(GnosisSafeAddress, data, stealthHash, blockNumber)` usando un paquete de flashbots
    - o `executeWithoutBlockProtection(GnosisSafeAddress, data, stealthHash)` en cadenas que no sean flashbots
    
### GnosisSafe

- Deberá ser version `≥1.3.0`
- Safe deberá ejecutarse en si misma `setGuard(StealthSafeGuard)`

### StealthSafeGuard

- *Governor* debería llamar a `addExecutor(executor)`
- *Governor* puede llamar a `setOverrideGuardChecks(true)` para deshabilitar todos los controles de guardia en caso de brick

## Solución de problemas y medidas de seguridad

Agregar un resguardo a una safe es una acción extremadamente delicada, ya que puede romper/brick la safe por completo (quedará fuera de su safe y perderá todos los activos que contiene). *Animamos a los nuevos usuarios a que prueben esto en una nueva safe para familiarizarse con ella.*

**StealthSafeGuard** cuenta con algunas protecciones que aseguran que nunca se quedará fuera de su safe.

1. El propietario de **StealthSafeGuard** NO debe ser la misma safe que protege
    1. En su lugar, debe configurar la safe como el rol de manager.
        1. `StealthSafeGuard.setPendingManager(safe)` como owner (segunda safe)
        2. `StealthSafeGuard.acceptManager()` como safe principal
    2. **StealthSafeGuard** *.owner* debe ser una safe independiente cuyo único propósito sea salvar la safe principal en caso de que surja un problema.
2. Tanto el *Owner* como el *Manager* pueden deshabilitar TODAS las comprobaciones (requisitos de **StealthRelayer** y *Executor*) activando una bandera
    1. `StealthSafeGuard.setOverrideGuardChecks(true)` como owner (segunda safe)
    2. `StealthSafeGuard.setOverrideGuardChecks(false)` como owner (segunda safe)
        1. recuerde que la bandera debe volver a establecerse manualmente en falso
3. Tanto el *Owner* como el *Manager* pueden cambiar el **StealthRelayer** llamando a `StealthSafeGuard.setStealthRelayer(address _newStealthRelayer)`
4. Tanto el *Owner* como el *Manager* pueden agregar y eliminar direcciones de executors
    1. `StealthSafeGuard.addExecutor(address _executor)`
    2. `StealthSafeGuard.removeExecutor(address _executor)`

## Automatización

La ejecución se puede automatizar ejecutando un script que cada X minutos:

1. consulta la API de gnosis safe para txs en cola y sus confirmaciones
2. genera la tx segura
3. agrega y codifica las firmas al tx
4. genera la transacción sin procesar de ejecución segura
5. obtiene detalles de la red y el gas
6. genera un hash sigiloso y asigna un número de bloque de destino
7. lo firma con el EOA del ejecutor
8. crea, simula y transmite el paquete a flashbots
9. recorre 5. y 8. hasta que el paquete se incluye en un bloque

Puede ver un ejemplo en: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

## Firma y ejecución manual

El siguiente comando te pedirá que ingreses la *Safe address* y *safeTxHash*, luego que envíes el mensaje firmado.

`npx hardhat run` [scripts/guard/02-stealth-relayer-guard-sign.ts](https://github.com/yearn/strategies-keep3r/blob/main/scripts/guard/02-stealth-relayer-guard-sign.ts) `--network rinkeby`

El mensaje firmado se puede agregar a `offchainSignatures` en: [scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts](https://github.com/yearn/hardhat-monorepo/blob/main/packages/strategies-keep3r/scripts/guard/01-stealth-safe-guard-get-signatures-and-execute.ts)

Luego, puedes ejecutar el script para obtener la primera Tx segura en cola, y tomará las firmas de la API de gnosis y agregará `offchainSignatures` a la transacción, y la enviará a los flashbots (si está en la red principal) a través del stealth relayer. `npx hardhat ejecuta scripts/guard/01-stealth-relayer-guard-get-signatures-and-execute.ts --network rinkeby`

## Mejoras

- reducir el consumo de gas
- agrega eventos útiles como ejecución exitosa y hash+nonce

## Créditos

**StealthSafeGuard** existe gracias a los esfuerzos de los equipos Flashbots, Gnosis y Yearn.

- El equipo de Gnosis agregó el sistema de protección en su [versión de contratos seguros 1.3.0](https://github.com/gnosis/safe-contracts/releases/tag/v1.3.0)
- El equipo de Flashbots proporciona la base sobre la cual se puede ejecutar Stealth-Tx de forma segura y precisa.

### ¿Interesado en crear soluciones similares?

💡 [¡Colabora con nosotros en yearn!](https://yearnfinance.notion.site/)

### ¿Está interesado en tener esto para su multisig, pero no está seguro de cómo hacerlo?

* git gud. * jk, puede comunicarse con cualquier moderador de Yearn a través de nuestro [discord](https://discord.yearn.finance/) o [telegram](https://t.me/yearnfinance) y solicitar hablar con nuestro propio experto en sigilo. [skeletor_spaceman](https://t.me/skeletor_spaceman) o cualquiera de los otros miembros de nuestro equipo de yMechanic en Telegram, nos complacerá guiarte.
