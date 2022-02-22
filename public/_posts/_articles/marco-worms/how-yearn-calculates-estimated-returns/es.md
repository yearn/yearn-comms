---
title: "¿Como se calculan los retornos estimados (APY) en Yearn?"

image:
  src: ./image1.jpg
  width: 469
  height: 246
date: '2022-02-14'
author: Marco_Worms
translator: RestlessMik3
---
# ¿Como se calculan los retornos estimados (APY) en Yearn?

![](./image1.jpg?w=469&h=246)
*Pantalla APY antigua*
</br>


En las últimas semanas, recibimos muchos comentarios sobre cómo nuestro panel v3 muestra el "Rendimiento porcentual anual" (APY) de los activos depositados. Especialmente en Fantom, donde el ecosistema tiene precios y estrategias más volátiles, implementamos cambios a corto plazo en la forma en que se muestra el APY para representar el rendimiento recibido por [weve y 0xdao](https://twitter.com/iearnfinance/status/1484570907041357828). Cuando volvimos a nuestros cálculos anteriores, no consideramos que los cálculos de APY a largo plazo estuvieran inflados, ahora hemos impulsado una actualización para corregir ese error. ¡Este artículo tiene como objetivo brindar más contexto sobre lo que sucedió y nuestra solución!
</br>

## Contexto rápido: ¿APR y APY?
En DeFI, a menudo vemos mucho estos 2 términos:
* **APR:** Tasa de Porcentaje Anual
* **APY:** Rendimiento porcentual anual  

Ambos se utilizan para comunicar al usuario cuánto esperaba ganar con una inversión:

* **APR** no asume capitalización automática de rendimiento
* **APY** indica que el rendimiento se capitaliza automáticamente en la inversión
</br>
## Lo que aprendimos
Actualizamos la forma en que nuestra interfaz muestra los APY hace unas semanas cuando atravesamos [Guerra ve(3,3) en Fantom](https://twitter.com/iearnfinance/status/1484570907041357828) para reflejar mejor el APY usando recientes cosecha datos. Antes de este cambio, mostrábamos APY más conservadores basados en datos históricos a largo plazo, pero durante las guerras, la mayoría de los APY de la vault de Fantom se dispararon y las ganancias a corto plazo no se mostraban correctamente a los usuarios. Hicimos un cambio para mostrar un número basado en la cosecha reciente para que las personas pudieran ver que nuestras vaults estaban cultivando los protocolos más rentables:

![](./image2.jpg?w=591&h=397)

</br>

La desventaja de calcular APY a través de datos recientes es: cuando las ganancias de las guerras comenzaron a disminuir, mostramos un número que provenía de cosechas recientes realmente rentables, pero las próximas cosechas probablemente no serían tan rentables (emisiones reducidas de protocolos comunitarios creados para cultivar la guerra, menos especulación dura después de que se tomó la instantánea de los 20 TVL principales), por lo que decidimos hacer algunos cambios para solucionar este caso.
Así que teníamos un cálculo de APY realmente conservador antes del episodio mencionado anteriormente, luego cambiamos para centrarnos en datos recientes. ¡Pasar por estos 2 extremos nos hizo aprender mucho sobre lo que funciona y lo que no! Así es como lo hacemos ahora:
</br>
### Para vaults que usan activos que no son curve:

![](./image3.jpg?w=150&h=190)
*nueva pantalla APY para vault no crv*
</br>

* **APR bruta:** APR total de Vault antes de las tarifas deducidas
* **APY neto:** APY actual de la vault
* **APY semanal:** Basado en las cosechas de los últimos 7 días
* **APY mensual:** Basado en las cosechas de los últimos 30 días
* **APY inicial:** Basado en todas las cosechas desde que existe la vault

</br>

### Para vaults que usan activos de curve:

![](./image4.jpg?w=182&h=196)
*nueva pantalla APY para vault crv*
</br>

* **APY del pool:** APY de la tarifa de los swaps de curve en ese pool, la mitad se destina aquí a los titulares de veCRV.
* **APR de recompensas de bonificación:** Recompensas añadidas generalmente por el propietario de ese token. IE frax curve pools también te da frax. El APY si vendió el token al precio actual.
* **APR base CRV:** La APR de la cantidad mínima de emisiones CRV que obtiene este grupo de curve. (si no has hecho staking de veCRV para impulsar, obtienes este + pool apy + las recompensas de bonificación.
* **Boost:** aumenta la cantidad del multiplicador que obtienes del veCRV en staking
* **APR convexo:** APR convexo actual si deposita en convex
* **APR bruta:** APR total de Vault antes de las tarifas deducidas
* **APY neto: **APY actual de la vault

---

Gracias a todos los que dieron su opinión sobre esta función y también a los equipos que actuaron rápidamente. ¡Esperamos que los nuevos cambios reflejen mejor la realidad de las ganancias de las vaults!
</br>
Productor: [Worms](https://twitter.com/MarcoWorms), Revisores: [x48](https://twitter.com/x48_crypto), [Vany](https://twitter.com/vannny365), [Dark Ghosty](https://github.com/DarkGhost7)
