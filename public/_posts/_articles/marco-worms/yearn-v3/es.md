---
title:  "Vaults v3 de Yearn "
image:
  src: ./image1.jpg
  width: 900
  height: 429
date: '2022-05-03'
author: Marco Worms
translator: RestlessMik3
---

![](./image1.jpg?w=900&h=429)

Mientras miramos hacia los emocionantes cambios que traerán las Vaults v3 tanto para los desarrolladores como para los "degens", hablé con el colaborador de Yearn que lidera el equipo de diseño de v3. ¡Me sorprendió enterarme de la cantidad de funciones nuevas! Inicialmente, nuestra conversación comenzó en torno al estándar [ERC-4626](https://twitter.com/iearnfinance/status/1511444220850184197) que estandariza las Vaults en todos los protocolos, pero resulta que eso es solo la punta del iceberg.

# El propósito de v3 es mejorar todos los aspectos centrales de las Vaults de Yearn 

### Seguridad

Mantener la posición de Yearn como la mejor en su clase para las prácticas de seguridad de DeFi.

### Desarrollo

Reduzca la fricción para crear estrategias y permita una gama más amplia de estrategias para una vault.

### Automatización

Permite que se automaticen más funciones de vaults además de la cosecha, acercándose un paso más al sueño de la vault 100% automatizada.

## Para abordar el alcance de la v3, los desarrolladores están trabajando en lo siguiente:

### Aumentar la modularidad

Implementar código que sea simple de manera robusta en el contrato yVault, lo que permite colocar una lógica más inteligente en módulos que se pueden iterar.

Adoptando el estándar ERC-4626 que permite que nuestras vaults sean compatibles con cualquier otro protocolo que lo siga.

### Mejorar la relación Estrategia <-> Vault

Permitir pruebas de estrategia más simples, implementación y, en general, incluir más herramientas para abordar una gama más amplia de posibilidades de rendimiento, incluido el bloqueo de fondos, estrategias más riesgosas y estrategias de cadenas múltiples.

### Crear nuevos productos

Crea nuevos productos como tramos Junior que permitan estrategias más riesgosas y permitan a los usuarios elegir una opción de depósito de mayor riesgo.

Permitir más de 1 vault para cada tipo de token

Permitir que las vaults sean controladas por multisigs que se pueden compartir con protocolos de socios

## Flexibilidad

V3 dará a los desarrolladores y estrategas más flexibilidad para enviar código a producción. Incrementa la modularización de los contratos y también abre puertas a nuevas formas de depositar en vaults.

También veremos una mejor automatización de los contratos periféricos: en v2 solo se automatizan las funciones de recolección y, en v3, nos acercaremos a una vault 100% automatizada porque ahora las funciones más importantes son más fáciles de automatizar con [Keep3r Network](https://keep3r.network/).

> **Queremos movernos rápido y no romper cosas** — Skeletor

## Estrategias con esteroides

Las Vaults v2 tenían un límite de 20 estrategias por vault, en v3 este límite aumentará. Además, las estrategias más riesgosas ahora seguirán un modelo de contrato análogo a los [Tramos Senior/Junior](https://corporatefinanceinstitute.com/resources/knowledge/finance/junior-tranche-debt/).

Las estrategias más arriesgadas ahora tendrán un contrato de Tramo Junior, lo que significa que el usuario primero depositará tokens en una vault y luego podrá optar por depositar los tokens de la vault en un contrato de tramo junior para una opción de mayor riesgo/mayor recompensa. Los usuarios también pueden elegir estrategias específicas en las que centrarse. Esta es una característica opcional que las personas con un mayor apetito por el riesgo podrían querer explorar.

Otra cosa en la que está trabajando el equipo v3 es cómo descentralizar [respaldo de estrategia](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d). Hoy en día, muchos aspectos de la auditoría de seguridad en Yearn están centralizados. Pero poder descentralizar este proceso daría más espacio para escalar el producto.

Otras funciones se centran en mejorar el uso general de las vaults por parte de usuarios, estrategas y desarrolladores, como:

- ySwaps (el servicio que utilizan los estrategas para realizar intercambios de tokens) se está optimizando para la eficiencia del gas.
- Las cosechas v2 tardan 6 horas para que suban los precios de las acciones, pero en v3 el tiempo es dinámico, lo que mejora la protección MEV.
- La mayor modularidad en torno a los procesos de Vault nos permite establecer asociaciones más estrechas con otros protocolos y crear soluciones más especializadas para sus casos.

##  Código de las Vaults
El código de las vaults v2 está escrito en [Vyper](https://vyper.readthedocs.io/en/stable/), pero v3 está construida con [Solidity](https://docs.soliditylang.org/en/v0.8.13/).

Vyper es un lenguaje sólido como lo demuestra el sistema v2, pero tiene un grupo de desarrolladores más pequeño. Nuestra decisión de apostar por solidity se basó, entre otros factores, en acceder al mayor grupo de desarrolladores necesario para un proyecto crítico como este. Vemos un futuro brillante para Vyper y continuaremos explorándolo en Yearn para los contratos inteligentes, cualquiera de los módulos alrededor de las vaults se puede hacer utilizandolo.

![](./image2.jpg?w=900&h=253)\
*[Estadísticas de uso del lenguaje de programación blockchain de Defillama](https://defillama.com/languages)*

Las estadísticas sobre los lenguajes de codificación utilizados en las cadenas de bloques se pueden monitorear en [Defillama](https://defillama.com/languages), actualmente Vyper representa alrededor del 10 % y Solidity el 69 %. Esto refleja el dominio del mercado de Solidity y, dado que necesitábamos más colaboradores para enviar la v3, elegimos la tecnología que nos permitiría crear un equipo experimentado más rápido.

## El futuro aguarda

Solo he arañado la superficie de lo que vendrá en v3. ¡Los colaboradores de Yearn también están trabajando en la creación de una serie de otros productos y funcionalidades interesantes!

**[¡Aprende más sobre las oportunidades para unirse a Yearn aquí!](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)**

**Hecho en [yearn.finance](https://yearn.finance/#/portfolio)**
