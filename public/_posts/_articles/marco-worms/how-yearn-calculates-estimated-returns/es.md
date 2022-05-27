---
title: "Cómo calcula Yearn los rendimientos estimados (APY)"
image:
  src: ./image1.jpg
  width: 469
  height: 246
date: '2022-02-14'
author: Marco_Worms
translator: 
---

![](./image1.jpg?w=469&h=246)\
*Antiguo APY mostrado*

En las últimas semanas, recibimos muchos comentarios sobre cómo nuestro panel v3 muestra el "Rendimiento porcentual anual" (APY) de los activos depositados. Especialmente en Fantom, donde el ecosistema tiene precios y estrategias más volátiles, implementamos cambios a corto plazo en la forma en que se muestra el APY para representar el rendimiento recibido por [weve y 0xdao](https://twitter.com/iearnfinance/status/1484570907041357828). Cuando volvimos a nuestros cálculos anteriores, no consideramos que los cálculos de APY a largo plazo estuvieran inflados, ahora hemos impulsado una actualización para corregir ese error. ¡Este artículo tiene como objetivo brindar más contexto sobre lo que sucedió y nuestra solución!

## Contexto rápido: ¿APR y APY?

En DeFI, a menudo vemos mucho estos 2 términos:

- **APR:** Tasa de porcentaje anual
- **APY:** Porcentaje de rendimiento anual

Ambos se utilizan para comunicar al usuario cuánto esperaba ganar con una inversión:

- **APR** asume que no hay capitalización automática del rendimiento
- **APY** indica que el rendimiento se capitaliza automáticamente en la inversión

## Lo que aprendimos

Actualizamos la forma en que nuestra interfaz muestra los APY hace unas semanas cuando atravesamos [las guerras de Fantom ve(3,3)](https://twitter.com/iearnfinance/status/1484570907041357828) para reflejar mejor el APY usando datos recientes de cosecha. Antes de este cambio, mostrábamos APY más conservadores basados en datos históricos a largo plazo, pero durante las guerras, la mayoría de los APY de la vault de Fantom se dispararon y las ganancias a corto plazo no se mostraban correctamente a los usuarios. Hicimos un cambio para mostrar un número basado en la cosecha reciente para que las personas pudieran ver que nuestras vaults estaban cultivando los protocolos más rentables.

![](./image2.jpg?w=591&h=397)

La desventaja de calcular los APY a través de datos recientes es: cuando las ganancias de las guerras comenzaron a disminuir, mostramos un número que provenía de cosechas recientes realmente rentables, pero las próximas cosechas probablemente no serían tan rentables (emisiones reducidas de protocolos comunitarios creados para cultivar la guerra y menos especulación después de que se tomó la instantánea de los 20 TVL principales), por lo que decidimos hacer algunos cambios para solucionar este caso.

Así que teníamos un cálculo de APY realmente conservador antes del episodio mencionado anteriormente, luego cambiamos para centrarnos en datos recientes. ¡Pasar por estos 2 extremos nos hizo aprender mucho sobre lo que funciona y lo que no! Así es como lo hacemos ahora:

### Para vaults que usan activos que no son Curve:

![](./image3.jpg?w=150&h=190)\
*nueva APY mostrada para vault distintas a crv*

- **APR bruta:** APR total de Vault antes de las tarifas deducidas
- **APY neta:** APY actual de la vault
- **APY semanal:** Basado en las cosechas de los últimos 7 días
- **APY mensual:** Basado en las cosechas de los últimos 30 días
- **APY desde inicio:** Basado en todas las cosechas desde que existe la vault

### Para vaults que usan activos de Curve:

![](./image4.jpg?w=182&h=196)\
*nueva APY mostrada para vaults de crv*

- **APY grupal:** APY de la tarifa de swaps de Curve en ese grupo, la mitad va aquí, la otra mitad para los titulares de veCRV.
- **APR recompensas de bonificación:** Recompensas agregadas generalmente por el propietario de ese token. IE frax curve pools también te da frax. El APY si vendes el token al precio actual.
- **APR CRV Base:** La APR de la cantidad mínima de emisiones CRV que obtiene este grupo de Curve. (si no has hecho staking de veCRV para impulsar, obtienes este + apy grupo + las recompensas de bonificación.
- **Impulso:** Aumenta la cantidad del multiplicador que obtienes del veCRV en staking
- **APR Convex:** APR actual por depositar en Convex
- **APR bruta:** APR total de Vault antes de las tarifas deducidas
- **APY Neta:** APY actual de la vault

---

Gracias a todos los que dieron su opinión sobre esta función y también a los equipos que actuaron rápidamente. ¡Esperamos que la nueva forma de mostrar la información refleje mejor la realidad de las ganancias de una vault!

Creado por: [Worms](https://twitter.com/MarcoWorms), Revisado por: [x48](https://twitter.com/x48_crypto), [Vany](https://twitter.com/vannny365), [Dark Ghosty](https://github.com/DarkGhost7)
