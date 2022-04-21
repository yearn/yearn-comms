---
title: "Yearn Finance explicado: ¿Qué son las vaults y las estrategias?"
image:
  src: ./image3.jpg
  width: 1024
  height: 597
date: '2022-01-18'
author: Marco_Worms
translator: RestlessMik3
---

![](./image1.jpg?w=900&h=478)\
*Ejemplo simple de vault de Ethereum en Yearn*

[Yearn Finance](http://yearn.finance/) es un conjunto de productos en finanzas descentralizadas (DeFi) que proporciona generación de rendimiento, agregación de préstamos y más en la cadena de bloques. El protocolo lo mantienen varios desarrolladores independientes y lo rigen los holders de $YFI.

El producto principal actual de Yearn orientado al usuario es **yVault**, que proporciona generación de rendimiento automatizada para muchos criptoactivos diferentes, cada uno impulsado por una o más **Estrategias**. El diseño de yVault es abierto, lo que significa que otros protocolos pueden construir e innovar sobre Yearn, [como el caso de Abracadabra + Yearn](https://twitter.com/MarcoWorms/status/1483223651684081670).

# Vaults de año (yVaults)

La forma abreviada de nombrar una Vault de Yearn es **yVault**. En la versión actual de Yearn (v2) estas son las características de un yVault:

- **El token que deposita en un yVault es el token que recibirá rendimiento**, siempre compuesto automáticamente en el yVault
- **Un yVault puede tener muchas estrategias activas al mismo tiempo.** Un yVault puede cambiar la asignación de capital de sus estrategias cuando lo considere necesario
- A diferencia de muchos otros agregadores de rendimiento **no hay tarifas de depósito/retiro** cobradas al usuario
- **yVaults implementan el estándar ERC20**, esto significa que se pueden mover fácilmente entre billeteras y mercados, ya que pueden ser utilizados por cualquier aplicación que maneje tokens erc20 (como intercambios descentralizados)

## Estrategias y Estrategas

**Estrategas** son personas que construyen una o más **Estrategias** subyacentes para yVaults

[Cualquiera puede crear una estrategia](https://docs.yearn.finance/developers/v2/getting-started), pero para poder agregarla a un yVault, el estratega debe pasar la estrategia a través de [el proceso de investigación de la estrategia](https://docs.yearn.finance/developers/v2/getting-started#overview-of-our-vetting-process) que incluye la investigación de concepto, revisión de código, revisión de seguridad y prueba de red principal.

![](./image2.jpg?w=4000&h=588)\
*Proceso de investigación de la estrategia*

Por sus esfuerzos, los estrategas son recompensados con una parte de la tarifa de rendimiento de la estrategia.

- Hasta el 10% de las comisiones de rendimiento generadas por una estrategia específica (comisión de rendimiento) va al estratega
- El 10% de las comisiones de rendimiento generadas por todas las estrategias (comisión de rendimiento) se destina a la tesorería de Yearn DAO.
- Durante el año, el 2% de los activos totales de la vault se toman como tarifas que se destinan a Yearn para pagar gastos como gas, subvenciones para desarrolladores y otros servicios.

Ahora que sabemos qué son yVaults y Strategies, profundicemos un poco más en cómo funciona su funcionamiento interno.

# Profundizando en vaults y estrategias

### Desglosando una estrategia

![](./image3.jpg?w=1024&h=597)\
*¡Gracias Finematics por esta imagen!*

La imagen de arriba es una descripción general de la estrategia de vault de Ethereum en una versión 1 de yVault. yVaults ahora está en la versión 2 y puede manejar múltiples estrategias al mismo tiempo, pero este ejemplo se centrará en una sola estrategia. Hay una [publicación y video completos de Finematics](https://finematics.com/yearn-vaults-eth-vault-explained/) sobre cómo funciona esto en caso de que quiera profundizar más.

¡En este ejemplo, podemos ver cómo una estrategia puede usar otras vaults! En la estrategia Ethereum v1 yVault:

- Cuando un usuario deposita ETH, el ETH se presta en MakerDAO como garantía
- La garantía se utiliza para pedir prestado DAI
- El DAI prestado se deposita en el yVault DAI 

Entonces usamos ETH para pedir prestado DAI y generar rendimiento usando la estrategia yVault DAI.

### ¿Cómo/cuándo mueve Yearn los fondos dentro de la vault y cobra tarifas?

Una de las funciones clave de una estrategia se llama “cosecha”. Cuando se llama, desencadena un proceso de reequilibrio en el que se obtienen ganancias y se reinvierten en la estrategia.

### ¿Cómo garantiza Yearn que una estrategia siempre genere tokens en lugar de perderlos?

Los estrategas utilizan una serie de herramientas para monitorear los datos en cadena para garantizar la salud de la estrategia. Una de esas herramientas es [Yearn Watch](https://yearn.watch/) que presenta una interfaz de usuario agradable con muchas de las métricas clave en vivo en la cadena de bloques.

Tan importante como monitorear las estrategias después de que van a producción es la debida diligencia realizada antes de enviarlas a producción con dinero real. El equipo de estrategia de Yearn también tiene un "Sistema de puntuación de estrategia" que evalúa el nivel de riesgo de las estrategias subyacentes utilizadas. ¡Esperamos exponer esto mejor a nuestros usuarios en nuestra documentación y aplicaciones en el futuro!

### Las estrategias tienen restricciones aprendidas por la experiencia con vaults anteriores

- Los fondos de la vault deben ir "solo hacia arriba" y no hacia abajo
- Evitar pérdidas impermanentes (p. ej., no proporcione liquidez de YFI/ETH en un grupo de liquidez)
- Los usuarios deberían poder retirar dinero en cualquier momento (por lo que la estrategia no puede bloquear todos los fondos de la vault, solo una pequeña fracción)
- Use solo protocolos con un historial probado y contratos inmutables bien entendidos

### Keep3rs y yVaults

Yearn y [Keep3r](https://docs.keep3r.network/) tienen una sinergia muy fuerte: Keep3r es utilizado por yVaults para automatizar tareas comunes para las vaults.

Por ejemplo, los Guardianes podrían beneficiarse de llamar a la función de recolección siempre que las condiciones tengan sentido para el yVault, como:

- Una estrategia ha obtenido X cantidad de ganancias
- Ha pasado Y cantidad de tiempo desde la última cosecha
- No hay pérdida que suceda si se llama a la cosecha

Y hay muchos casos como este, otro ejemplo sería un Guardián que pide un reequilibrio de la asignación de activos de la vault para evitar la liquidación en alguna parte de la estrategia.

![](./image4.jpg?w=562&h=651)

### Estrategias de construcción

* **yVaults** están programados en [Vyper](https://vyper.readthedocs.io/en/stable/)
* **Estrategias** están programadas en [Solidity](https://docs.soliditylang.org/en/v0.8.11/)

> ¡No necesita ser un desarrollador avanzado o un analista financiero para convertirse en estratega!

Si bien el mantenimiento de yVaults es un asunto de desarrollo más complejo, las estrategias se diseñaron para que cualquiera pueda escribir una, el requisito para una buena estrategia es:

- Conocimiento sobre el ecosistema de cadena de bloques en el que se implementará, que se puede adquirir realizando una investigación profunda de tokenómica y documentación para todos los tokens utilizados en la estrategia misma.
- Conocimiento de programación Solidity similar a [completar el Nivel 4 en CryptoZombies](https://cryptozombies.io/)
- Sepa cómo moverse por [git](https://git-scm.com/), [eth-brownie](https://eth-brownie.readthedocs.io/en/stable/) y [ganache](https://trufflesuite.com/ganache/).
- ¡Después de comprender los conceptos básicos de las herramientas anteriores, está listo para [copiar nuestra plantilla de estrategia](https://github.com/yearn/brownie-strategy-mix)! Las funciones que debes comenzar a cambiar en esta plantilla para construir con tu propia primera estrategia son prepararRetorno, ajustarPosición y liquidarPosición.

Una última cosa: después de que Yearn apruebe una estrategia y la ponga en producción, ¡debes ayudar a monitorearla!

### Aprende más

Si deseas obtener más contenido sobre Vaults y Estrategias, consulta estos recursos. Todos me ayudaron a entender los conceptos explicados en este artículo, también Yearn contribuidooooooores son las personas más amables y siempre me ayudan a encontrar el mejor recurso para obtener información de calidad sobre cada tema.

- [Descripciones de yVaults](https://vaults.yearn.finance/)
- [Documentos de yVault](https://docs.yearn.finance/getting-started/products/yvaults/overview)
- [Conviértete en un gran estratega](https://www.youtube.com/watch?v=NVR3teJw0Y0)
- [Video/artículo externo de Finematics sobre yVaults](https://finematics.com/yearn-vaults-eth-vault-explained/)
- [Recursos adicionales de Yearn](https://docs.yearn.finance/developers/v2/additional-resources)

### ¡Toma la píldora azul!

Si te encantó la abstracción de Vaults and Estrategies:

- Manténgase actualizado con nuestras últimas noticias en el Twitter de Yearn Finance
- Lee nuestro [Libro de la píldora azul](https://thebluepill.eth.link/) que describe la visión y la historia de Yearn
- ¡Y más acerca de [Unirse al equipo de Yearn](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)!

*Productor: [Worms](https://twitter.com/MarcoWorms), Revisores: [Wavey](https://twitter.com/wavey0x)*

*¡Gracias Farrah y Weaver por ayudarme a incorporar a Yearn y conectarme con personas y recursos increíbles que me permitieron escribir este primer artículo aquí
