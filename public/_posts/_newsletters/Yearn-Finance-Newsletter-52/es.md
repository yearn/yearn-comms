---
layout: post
title: "Newsletter #52 de Yearn Finance"
categories: [Newsletters]
image:
  src: ./cover.jpeg
  width: 1152
  height: 576
author: Yearn
date: '2022-01-02'
translator: RestlessMik3
---
### Semana que termina el 2 de enero de 2022

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/cover.jpeg?w=880&h=440)

Bienvenido a la 52ª edición de la Newsletter de Yearn Finance. Nuestro objetivo con esta newsletter es mantener informada a la comunidad de Yearn y de cripto en general con las últimas noticias, incluyendo el lanzamiento de productos, cambios de gobernanza y actualizaciones del ecosistema. Si estás interesado en aprender más de Yearn Finance, sigue las cuentas de [Twitter](https://twitter.com/iearnfinance) y [Medium](https://medium.com/iearn) oficiales.

## Resumen

- YIP-65 entra en votación
- Propuesta - Programa piloto de recompra de DCA
- Reflexionando sobre Yearn
- Yearn ha recibido una subvención FTM de 1 millón de la Fundación Fantom
- Bóvedas en Yearn
- Noticias del ecosistema

## YIP-65 entra en votación

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image2.jpg?w=980&h=871)

En resumen, YIP-65 busca evolucionar el papel que juega YFI en Yearn en cuatro fases distintas, consolidando la visión del token como la base fundamental de la gobernanza.

Esto se hará dirigiendo una parte de YFI que es recomprada por el Tesoro como resultado de [BABY](https://yips.yearn.finance/YIPS/yip-56) como recompensa a aquellos holders de YFI que participen activamente en la gobernanza de Yearn.

Luego, el papel que juega YFI en en la gobernanza de Yearn evolucionará a través de cuatro componentes distintos.

1: xYFI. Distribuya YFI que ha sido recomprado con tokens del Tesoro como recompensa en una bóveda de YFI.

2: YFI con voto bloqueado. Se introduce el bloqueo al estilo "ve" de YFI (veYFI) por hasta cuatro años (duración máxima exacta por determinar), donde una duración de bloqueo más larga brinda una mayor participación en el poder de voto y una mayor participación en las recompensas de YFI. Es posible salir temprano del bloqueo pagando una penalización que se recompensa a los otros poseedores de fichas bloqueadas.

3: Medidores de bóveda + Votación. Se introducen medidores de bóveda donde los depositantes de la vault hagan stake de sus tokens de la vault y ganen recompensas de YFI de acuerdo con su peso de veYFI. Los YFI se asignan a los medidores basados en votaciones semanales de gobernanza.

4: Funciones de "trabajo útil". Se amplían los deberes y responsabilidades de los votantes de veYFI y su YFI bloqueado a cambio de obtener recompensas de protocolo adicionales. Depende del diseño de la vault v3.

A continuación, se dará un mandato a los desarrolladores de Yearn para implementar los componentes anteriores a su discreción cuando sea factible.

Finalmente, el YFI elegible para votar en la gobernanza de Yearn estará restringido solo a aquellos haciendo staking en xYFI (desde la Fase 1 en adelante) o con voto bloqueado en Yearn (desde la Fase 2 en adelante).

Lee más sobre las actualizaciones y los beneficios de tokenomics propuestos [aquí](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994) y vota sobre la snapshot [aquí](https://snapshot.org/#/ybaby.eth/proposal/0x8f7417fa5565d9f46e16618503e8808c36d51b2a9e8217a68c632d7c090d69d9).

Un agradecimiento especial a los autores: @ 0xJiji, @banteg, daryllautk, HAtTip3675, @onlylarping, @ vany365 y @Wot_Is_Goin_On por crear esta importante propuesta.

## - [Propuesta] - Programa piloto de recompra de DCA

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image3.jpg?w=690&h=301)

El objetivo de este programa piloto es proporcionar una mejor comprensión a través del ejemplo de que el método DCA es una mejor manera de ejecutar recompras dentro de la tesorería.

El equipo de Yearn, sobre la base de que se aprueba una votación snapshot, asignará $ 1M en ETH (249.376559 ETH a $ 4010 por ETH) hacia este programa de recompra y creará una posición de 30 días de YFI a ETH dentro de Mean Finance a una tasa de 8.31255197 ETH por día

El equipo de Mean espera tener al menos algunos efectos rotundos dentro de la comunidad y el liderazgo de la DAO.

Lea más sobre la propuesta [aquí](https://gov.yearn.finance/t/proposal-mean-dca-buyback-pilot-program/12065).

## Reflexionando sobre Yearn

Es 2022, hora de volver a analizar sus apuestas DeFi. Aquí hay una breve descripción de por qué Yearn es diferente.

Si bien Yearn generalmente se etiqueta como un "agregador de rendimiento", esto puede llevar a la idea de que un equipo trabaja para generar un rendimiento. Peor aún, a veces se lo considera un simple farmer de CRV. Esta no es una forma útil de entender Yearn.

Actualmente existen limitaciones importantes en la generación de rendimiento, como un pequeño grupo de personas que pueden crear estrategias, las altas tarifas del gas que limitan ciertas estrategias, la falta de protocolos probados para construir estrategias y la falta de formas de automatizar procesos.

En lugar de esperar a que se alivien estas restricciones (y ya lo están con más estrategas incorporados, otras cadenas y L2 con tarifas bajas), Yearn ha estado construyendo silenciosamente la infraestructura para optimizar la interacción entre protocolos, estrategas y capital a escala.

Yearn ha estado construyendo la máquina que construye la máquina de agregación de rendimiento (parafraseando al Sr. Musk), lista para un mundo de un número cada vez mayor de tokens, protocolos complejos, cadenas, estrategas, herramientas y capital.

Con $ 7 mil millones en hacks de DeFi en 2021, el enfoque principal ha sido la seguridad. La mayoría de los protocolos DeFi limitan los riesgos financieros ajustando los parámetros (por ejemplo, los protocolos de préstamos reducen el valor de préstamo a garantía de los activos más riesgosos) y minimizan los riesgos tecnológicos al centrarse en una cosa (por ejemplo, préstamos).

Yearn hace DeFi de la manera más difícil, ya que combina múltiples protocolos y estrategias en una sola vault. Otros protocolos se jactan de la cantidad de auditorías que han realizado. yAcademy de Yearn está capacitando a la próxima generación de auditores, lo que ayuda a acelerar la aprobación de nuevas estrategias.

Después de la seguridad viene la eficiencia del capital: descubrir cómo se debe dividir una bóveda en protocolos de préstamos, LP, oportunidades agrícolas apalancadas y otras estrategias para optimizar los rendimientos ajustados al riesgo. Y luego intentar automatizarlo.

Parte de la razón detrás del "lanzamiento justo" de YFI fue la comprensión de que producir un rendimiento alto ajustado al riesgo por los billones de dólares que se encuentran en TradFi sería demasiado trabajo para un equipo. El internado de YFI ahora está capacitando a estrategas novatos.

La escalabilidad requiere reducir los procesos manuales: recompras, cosechas, cambio de ponderaciones estratégicas, cobertura después de los movimientos de precios. No es coincidencia que Andre creó Keep3r. Incluso hay un grupo de análisis de datos que estudia el momento óptimo para realizar recompras.

Coordinación con descentralización: ¿cómo se construye un sistema que incentive a personas que nunca se han conocido a hacer que todo esto suceda? Las ayudas de Coordinape, una herramienta cuyos orígenes se remontan a un grupo de Yearn que se encontró por primera vez con el problema, ahora está siendo utilizada por innumerables DAO.

Cada nuevo protocolo DeFi crea una oportunidad potencial para un estratega. La nueva estrategia mejora el rendimiento ajustado al riesgo para las vaults, lo que incentiva más capital, lo que genera más tarifas que se pueden usar para construir esta bestia de plataforma.

Los ejemplos de este hilo muestran cómo Yearn intenta resolver los problemas generalizados en DeFi. El término "protocolo DeFi" no parece hacerle justicia, tal vez Yearn podría describirse mejor como un DAO fintech.

Gracias a Wot_Is_Goin_On por el increíble hilo que se puede encontrar [aquí](https://twitter.com/Wot_Is_Goin_On/status/1477277152336916484).

## Yearn ha recibido una subvención FTM de 1 millón de la Fundación Fantom

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image4.jpg?w=1100&h=1092)

Yearn ha recibido una subvención FTM de 1 millón de la Fundación Fantom.

No hemos vendido, más del 90% fue donado a la vault de FTM. Otras vaults obtuvieron una donación proporcional para un aumento inmediato del valor del 1%.

Esta subvención es la primera de muchas, continuaremos recibiendo más a medida que logremos las metas de TVL.

## Vaults en Yearn

Puede leer una descripción detallada de las estrategias para todos nuestras yVaults activas [aquí](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Noticias del ecosistema

[Consulte el nuevo panel de Smart Savings de DeFi Saver que incluye Yearn](https://twitter.com/DeFiSaver/status/1476614075815809028?s=20)

[Ver la sudadera con capucha 2021 Yearn contributor hecha por loldefi](https://twitter.com/loldefi/status/1477062572595884032)

[Yearn continúa recomprando yvBOOST](https://twitter.com/wavey0x/status/1474946151006842884)

[Lea un análisis sobre los sobornos de $ CRV, incluido yvBOOST](https://twitter.com/0xSEM/status/1475284063204388867)
