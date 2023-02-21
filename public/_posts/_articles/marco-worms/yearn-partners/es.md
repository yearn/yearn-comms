---
title:  "Socios de Yearn: construyendo con yVaults"
image:
  src: ./cover.png
  width: 1500
  height: 729
date: '2022-03-07'
author: Marco_Worms
translator: RestlessMik3
---

![](./cover.png?w=1400&h=729)

Las [Vaults de Yearn](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) están construidas con estándares abiertos y los socios de YFI han creado aplicaciones increíbles encima de ellas en los últimos dos años. ¡Este artículo muestra cómo otros protocolos han extendido los productos de Yearn y esperamos que inspire más experimentos además de los servicios de YFI!

## Casos de ejemplo

Los casos de asociación más comunes son:
1. Usar yVaults como garantía para prestar/tomar prestado
2. Usar yVaults para generar rendimiento con los fondos de los usuarios

En ambos casos, el socio es recompensado con tarifas de rendimiento extraídas de las ganancias generales de la vault, cuanto más volumen total contribuya un socio a una vault, mayor será la parte de las ganancias que reciba.

> En 2021, Yearn compartió $2,793,161 con socios a través del programa de asociación

Profundicemos ahora en los casos de uso de nuestro socio más grande:

## Yearn + [Abracadabra](http://abracadabra.money/)

Abracadabra usa yVaults en su servicio de préstamo: la innovación clave es aceptar tokens que devengan intereses como garantía para el préstamo, cuando se reembolsan, el usuario recibe los tokens de la vault de garantía, que incluyen las ganancias que se generaron durante el tiempo bloqueado.

Una visión general de Abracadabra sería:
1. El usuario deposita wETH (Ethereum envuelto, igual que Ethereum) en una vault y recibe yvWETH
2. El usuario deposita yvWETH en Abracadaba como garantía, Abracadabra le permite al usuario acuñar un porcentaje de su garantía como una moneda estable en dólares llamada Magic Internet Money (MIM)

![](./image1.jpg?w=633&h=527)\
*[Abracadabra](http://abracadabra.money/) Interfaz de “préstamo”*

Cuando el usuario acuña MIM, la garantía depositada se bloquea hasta que se devuelve el MIM prestado.

- Si el usuario paga a tiempo, la garantía se desbloquea, si es un yVault, ¡esto significaría que sus tokens de yVault se devolverán con todas las ganancias obtenidas mientras estaban bloqueados!
- Si el usuario no paga a tiempo, parte de su garantía se utilizará para pagar el servicio (liquidado)

Idealmente, el interés generado por el token de la vault depositado superará el costo de la tarifa de préstamo de Abracadabra, por lo que el caso de uso completo aquí sería bloquear un token que devenga intereses como garantía.

## Yearn + [Alchemix](https://alchemix.fi/)

Alchemix utiliza  yVault DAI (otra moneda estable en dólares, muy parecida a MIM) para generar intereses a partir de DAI depositados por el usuario y reembolsar automáticamente los préstamos.

1. El usuario deposita DAI o ETH en Alchemix
2. Alchemix deposita DAI o ETH en las Vaults de Yearn para generar rendimiento para el usuario (y reembolsar automáticamente el préstamo tomado en el siguiente paso).
3. El usuario puede pedir prestado hasta el 50 % de la garantía depositada como DAI y hasta el 25 % como ETH como alUSD o alETH (se puede convertir a DAI o ETH en el ecosistema Alchemix), lo que bloquea el monto depositado proporcionalmente a la cantidad prestada
4. A medida que el monto depositado en el paso 2 genera un rendimiento, se paga automáticamente el préstamo del usuario y el usuario puede retirarlo proporcionalmente al rendimiento generado.

Aquí está la descripción general completa del ecosistema Alchemix y cómo se integra con Yearn:

![](./image2.png?w=1400&h=950)\
*ecosistema [Alchemix](https://alchemix.fi/)*

## yVaults en B2B

*Para casos de uso comercial, Yearn DAO realmente marca la diferencia: tiene la infraestructura para proporcionar la mejor seguridad de vault en DeFi en este momento.*

Los socios ganan una parte de las tarifas en función del TVL que aportan a las vaults. Puede obtener más información sobre nuestro modelo de participación en las ganancias en la [Documentación de socios de Yearn](https://docs.yearn.finance/partners/introduction). Las aplicaciones de billetera de los socios y las secciones de ganancias implementan yVaults y los sirven a los usuarios de diferentes formas:

**Obtenga secciones:** páginas que brindan un frente alternativo para que los usuarios depositen sus activos en yVaults. Puede encontrar un buen ejemplo de la sección Ganar en [ShapeShift](https://shapeshift.com/), su contrato para depositar los activos en Vaults de Yearn es [de código abierto en GitHub](https://github.com/shapeshift/yearn-router).

![](./image3.jpg?w=750&h=554)\
*[ShapeShift](https://shapeshift.com/) sección de ganancias*

**Carteras**: los socios brindan opciones de generación de rendimiento de Yearn dentro de su ecosistema utilizando yVaults. [SteakWallet](https://www.steakwallet.fi/) es un buen ejemplo de un servicio de billetera que se integra con Yearn:

![](./image4.jpg?w=363&h=681)\
*interfaz [SteakWallet](https://www.steakwallet.fi/)*

## Recursos para convertirse en socio

Si desea construir sobre nuestros yVaults, se recomienda:

- Lea la [documentación del programa de asociación](https://docs.yearn.finance/partners/introduction) y siga el formulario de socio
- Para conocer las pautas técnicas, consulte la [documentación de los métodos de integración de Yearn](https://docs.yearn.finance/partners/integration_guide)

*¡Nos encantaría saber de ti, sobre lo que estás construyendo y sobre los protocolos de $YFI!*

Productores: [Worms](https://twitter.com/MarcoWorms), Revisores: [Corn](https://twitter.com/omgcorn), [Dark Ghosty](https://github.com/DarkGhost7)
