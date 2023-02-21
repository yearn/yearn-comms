---
title: "Lista de permitidos de Yearn"
image:
  src: ./image1.jpg
  width: 770
  height: 367
date: '2022-05-06'
author: Weaver
translator: Restlessmik3
---

![](./image1.jpg?w=770&h=367)

## Visión general  

Para hacer que el sitio web de Yearn sea aún más seguro, recientemente se ha introducido una nueva característica, denominada Lista de permitidos. En esencia, permite que todas las transacciones que se realizan a través del sitio web/SDK se validen con un contrato en cadena que mantiene un registro de todos los datos de llamadas válidos que el sitio web puede producir.

Esto evita que el sitio web sea susceptible a varios ataques de intermediarios en los que se proporcionan datos al sitio web, ya sea a través de la API de Zapper/0x o de Yearn. Por ejemplo, si la API de Yearn devuelve una lista de vaults con direcciones maliciosas, con la intención de que los usuarios aprueben una de ellas cuando intentan depositar, la lista de permitidos bloquearía la realización de la transacción.

Invitamos a otros protocolos a que también aprovechen sus propias listas de permitidos para mejorar su seguridad. Las instrucciones para crear su propia lista de permitidos se detallan más adelante.

## Cómo funciona

Tomemos un ejemplo de validación de los datos de llamada para una transacción que aprueba un depósito en una vault.

En el contrato de la lista de permitidos hay una lista de condiciones, que son estructuras contra las que se validan.

Aquí está la que se utiliza para aprobar un token en la vault (en formato JSON):

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

- `id`: El identificador de la condición permite que el propietario del protocolo actualice o elimine la condición.

- `implementationId`: El identificador del contrato de implementación. Los contratos de implementación contienen la lógica para validar la condición. Cada lista de permitidos puede tener múltiples contratos de implementación para validar. Por ejemplo, en la lista de permitidos de Yearn, hay una implementación para todo lo relacionado con las vaults, y otra para la sección de laboratorios del sitio web, con productos más experimentales. 

- `methodName`: El nombre de la función que está permitida.

- `paramTypes`: Los parámetros de la función.  

- `requirements`: Información sobre cómo se ejecutará la validación

Puede haber dos tipos de requisitos: `target` y `param`.

- Si el primer argumento requerido es `target` entonces el siguiente argumento será la función que se debe llamar en la implementación para validar el objetivo de la transacción.

- Si el primer argumento requerido es `param` entonces, de la misma manera, la función a usar para la validación viene a continuación, y el argumento final es la posición del parámetro para que pueda extraerse de los datos de la llamada al validar.  

Aquí está la transacción, aprobando la Vault Curve RocketPool, que estaremos validando

- target:`0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08`  
- calldata:`0x095ea7b30000000000000000000000005c0a86a32c129538d62c106eb8115a8b02358d570000000000000000000000000000000000c097ce7bc90715b34b9f1000000000`  

Hay 3 pasos para validarlo:

1. Primero revisamos el [selector de método](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L72). A partir de la condición, generamos lo que esperamos que sea el selector de método para una transacción de aprobación. Como tenemos el nombre de la función y los parámetros almacenados en la condición, podemos recrear la función y tomar `bytes4(keccak256(bytes(reconstructedMethodSignature)))`. Luego podemos comparar esto con los primeros 4 bytes de los datos de llamada, para asegurarnos de que el sitio web está llamando a una función válida. La firma de 4 bytes de `approve(address,uint256)` es `0x095ea7b3` para que podamos ver que los datos de llamada son válidos para esto.

2. Luego [validamos el objetivo](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L50). Para ello hacemos una llamada al contrato de implementación de la condición, utilizando la validación proporcionada, en este caso `isVaultUnderlyingToken`. Siempre sabemos que estamos validando una dirección, por lo que podemos suponer que esa función tiene un solo parámetro de dirección. También se supone que esta función devuelve un `bool`. Si el valor devuelto es falso, la transacción no es válida. En el contrato de implementación hay una función `isVaultUnderlyingToken` que luego procede a llamar al registro de vaults de Yearn para realizar la validación real.

3. Entonces [validamos todas las condiciones de los parámetros](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L95), de los cuales puede haber más de uno, o ninguno en el caso de una función sin argumentos. En este caso queremos comprobar que el parámetro en la posición 0 cumple la función `isVault` en el contrato de implementación, de esta manera sabremos que el usuario está depositando en una vault válida. De nuevo, el contrato de implementación utiliza el registro de la vault de Yearn para verificar si la dirección decodificada de los datos de llamada es una vault válida o no.

Una transacción enviada a la lista de permitidos se valida con cada condición, si alguna de ellas confirma que la transacción es válida, entonces podemos estar seguros de que la transacción que está a punto de enviarse, que se le ha dado al usuario al interactuar con el sitio web, no es maliciosa y es segura de ejecutar.

## ¿Quién controla la lista de permitidos de cada sitio web?

La lista de permitidos se diseñó para que cada sitio web tuviera una instancia propia, pero necesitamos alguna forma en la cadena para vincular cada lista de permitidos con cada sitio web. Para ello utilizamos ENS/DNSSEC para verificar el propietario de cada dominio — https://docs.ens.domains/dns-registrar-guide. De esta forma, sabemos que el control de la lista de permitidos está vinculado al control del dominio y, siempre que esto no se vea comprometido, se puede obtener la lista de permitidos correcta para un sitio web determinado.

La seguridad de una lista de permitidos también depende de los contratos de implementación. Si estos fueran fácilmente mutables o se implementaran incorrectamente, la seguridad de la lista de permitidos se vería comprometida. Es mejor hacer que estos contratos sean inmutables, o si necesitan ser actualizables, entonces sería preferible que el multisig del protocolo sea el dueño.

## Registro como protocolo

Para que los protocolos creen y registren su propia lista de permitidos, pueden seguir los siguientes pasos:

- Inicia el registro de la lista de permitidos usando `registerProtocol` en el [contrato de registro de lista de permitidos](https://etherscan.io/address/0xb39c4EF6c7602f1888E3f3347f63F26c158c0336). Esto desplegará una nueva lista de permitidos para el dominio del protocolo. Nota: la cuenta que inicia el registro deberá registrarse como propietario del dominio a través de ENS.
- Implementa contratos de implementación personalizados, que se pueden usar para validar contra objetivos/parámetros
- Vincula estos contratos de implementación a la lista de permitidos usando la función `setImplementation`.
- Descubre todas las transacciones que se crean a través del sitio web y crea las condiciones correspondientes. Establece estas condiciones en la lista de permitidos usando `addConditions`

Se puede encontrar un script de implementación de ejemplo [aquí](https://github.com/yearn/yearn-allowlist/blob/main/scripts/chains/250/deploy.py)

## Mejoras futuras

Como se detalla, esta función reduce la manipulación de los datos a partir de los cuales se crean las transacciones que envían los usuarios, como los datos de las API. Sin embargo, si el código fuente del sitio web se ve comprometido o se inyecta un código malicioso, estas comprobaciones podrían simplemente ignorarse y formarse transacciones maliciosas para presentarlas al usuario..

Para evitar esto, la lista de permitidos podría integrarse en una billetera (como metamask), que a su vez validaría todas las transacciones que están a punto de enviarse contra la lista de permitidos obtenida para el nombre de dominio del que se originó la transacción. Esto eliminaría por completo la manipulación del código fuente de front-end como un vector de ataque y sería una ventaja competitiva para cualquier billetera que lo implemente. El Registro de lista de permitidos se puede utilizar para validar cualquier dato de llamada para cualquier sitio web con la siguiente función:

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

## Lecturas adicionales

**Eth-Lista de permitidos**
https://github.com/yearn/eth-allowlist

**Ejemplo de implementación de lista de permitidos de Yearn**
https://github.com/yearn/yearn-allowlist

**registro ENS DNS**
https://docs.ens.domains/dns-registrar-guide

*Este artículo fue proporcionado de forma anónima por un desarrollador de Yearn. solo copio y pego — xoxo weaver.*
