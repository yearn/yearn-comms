---
title: "Newsletter #50 de Yearn Finance"
image:
  src: ./cover.jpeg
  width: 576
  height: 288
author: Yearn
date: "2021-12-05"
translator: Restlessmik3
---

### Semana que termina el 5 de Diciembre de 2021

![](./cover.jpeg?w=576&h=288)

Bienvenido a la edición número 50 de la newsletter de Yearn Finance. Nuestro objetivo con esta newsletter es mantener informada a la comunidad de Yearn y de cripto en general con las últimas noticias, incluyendo el lanzamiento de productos, cambios de gobernanza y actualizaciones del ecosistema. Si estás interesado en aprender más de Yearn Finance, sigue las cuentas de [Twitter](https://twitter.com/iearnfinance) y [Medium](https://medium.com/iearn) oficiales.

## Resumen

-   Nueva UI de Yearn
    
-   Propuesta de tokenomics de YFI actualizada
    
-   Documentos de Yearn actualizados
    
-   YIP-64 no ha conseguido cuórum
    
-   Yearn delega 23M de veCRV a Convex
    
-   Estrategia de Snapshot de Yearn 

-   Vaults de Yearn

-   Noticias del ecosistema

## Nueva UI de Yearn

![](./image2.jpg?w=512&h=512)

Hemos reconstruido [yearn.finance](https://yearn.finance/) desde cero con el feeback de la comunidad. Ahora mismo está en línea así que puedes probarla. 

Una de las funcionalidades mas interesantes (en mi opinión) es la función de simulación. Para depositar en las vaults de versiones de UI previas, hemos agregado soporte de Zapper, por ejemplo, puedes depositar a la vault de 3CRV con ETH o cualquier otro token soportado por Zapper lo cual es conveniente e implica que se realizará un Zap (intercambio) en tus depósitos. Te preguntarás ¿que es ese mensaje de "Simulando"? No es más que una simulación que se realiza utilizando la API de Zapper y Tenderly de manera de conocer el resultado exacto antes de realizarse, como cuando haces depósitos por ejemplo ETH>3crv.

¿Por que es esto útil y genial? Debido a que los protocolos son dinámicos, es difícil predecir un buen estimado de los tokens de la vault que recibirás. El deslizamiento puede ser mayor que lo esperado o el camino utilizado para la transacción puede fallar hacendote perder el gas, entre otras cosas. Esta simulación puede evitarte esas situaciones tanto en los depósitos como en los retiros.

Los retiros son otra área difícil de predecir. Las simulaciones ayudan a verificar si puede retirarse dadas las condiciones de la vault, algunas son más líquidas que otras dependiendo de las asignaciones de estrategias.

Si recibe un mensaje de "Simulación fallida ...", lo más probable es que si sigue adelante con la transacción, se revertirá.

La interfaz de usuario v3 es nueva, por lo que se está trabajando más para mejorar esta UX para que sea aún más fluida.

Mira debajo del capó [aquí](https://medium.com/iearn/yearn-ui-v3-0-a194355bdb1f). Si eres un desarrollador, contribuye [aquí](https://github.com/yearn/yearn-finance-v3).

## Propuesta de tokenomics de YFI actualizada

Una snapshot está en vivo para medir el apoyo a las propuestas de la comunidad sobre tokenomics de YFI.

Actualmente hay 5 opciones en votación, y los nombres de trabajo son ySplit, veYFI, xYFI, BurnKeYs y Status Quo. La [propuesta ySplit](https://docs.google.com/document/d/1dAWTkS_ZsXNy7mKKjOFUjILSlLsLz9KhGfLrwVu0GUg/edit) sugiere dividir el token YFI en 10,000 a 1,000,000 para combatir el sesgo de la unidad. La [propuesta veYFI](https://docs.google.com/document/d/1hoi-IVccOB6iUJYzuApVbyjbQBx8-M0UuzZosb9wlWM/edit) sugiere bloquear YFI durante un período de tiempo determinado para recibir los derechos de gobernanza que dictan a las vaults donde deberían dirigirse las ganancias del tesoro. [xYFI](https://docs.google.com/document/d/1ev16BXu3bDC8zMSBvHmxMWIeD82ptZck6SJAO5frV5g/edit) sugiere la creación de una bóveda de participación de YFI donde se enviarán las ganancias de tesorería excedentes. [BurnKeYs](https://docs.google.com/document/d/1BqmRsfdfCIaCtNZULdhKqUJzpKdaHE1XOGQlVp2nuSc/edit) pide que la función de mint del token YFI se deshabilite permanentemente, lo que limita el suministro a 36,666 tokens. Status Quo dejaría los tokenomics de YFI en su estado actual e informaría a los titulares y potenciales inversores de los beneficios.

Vote aquí en [Snapshot](https://yearn.snapshot.page/#/proposal/0x783cb3d57dd59b2827f6a42967375f06504cc947ebaa3c0e495c7b29ffd47aea). Gracias a todos los miembros de la comunidad que han contribuido. Se puede encontrar una actualización del grupo de trabajo, incluido el haiku, [aquí](https://docs.google.com/document/d/1-YEfXqXgTm-qzhPRUKs5allfX1XqYUOYwr_49FApnLU/edit).

## Documentos de Yearn actualizados

Hace varios meses, los colaboradores de Yearn se propusieron reescribir nuestros documentos para hacerlos amigables y accesibles.

Los documentos completamente actualizados están aquí para guiar a los usuarios, desarrolladores, socios y para alimentar su curiosidad con muchas entradas nunca antes vistas.

Consulte los nuevos documentos [aquí](https://docs.yearn.finance/).

## YIP-64 no ha conseguido cuórum

![](./image3.jpg?w=1100&h=759)

YIP-64: Ajustar las tarifas en las monedas no estables yVaults entró en la fase de votación y terminó con la votación mayoritaria en contra de las tarifas de ajuste.

Consulte la propuesta [aquí](https://snapshot.org/#/ybaby.eth/proposal/0xfe7296601d199b89a8aa53f95d6243ef935d736bea2f13109979d8d5098017d2).

##  Yearn delega 23M de veCRV a Convex

![](./image4.jpg?w=873&h=615)

Yearn ha delegado 23 millones de veCRV a Convex Finance utilizando la nueva función de delegación de impulso nativa de Curve. Esto aumentará los rendimientos de los grupos de fábrica para nuestros dos DAO. Esto no afecta a los fondos comunes, las tarifas o las votaciones.

La delegación de veCRV no utilizada [aquí](https://convex-boost-delegation.vercel.app/) aumenta las recompensas de fábrica para todos los participantes de Convex, lo que ayuda a aumentar el rendimiento de Convex y Yearn. Nuestra transacción de delegación se puede encontrar [aquí](https://etherscan.io/tx/0x4734c879b23c678cb97ba90591e16a14f1f7a2e0a7d71bfa67d2e7bb5d718e5f).

## Estrategia de Snapshot de Yearn 

En preparación para varias votaciones importantes, se actualizó la estrategia Snapshot de Yearn.

Le permite votar con YFI productivo, es decir, YFI en billetera, todas las vaults Yearn v2, Bancor, Balancer v2, Uniswap v2, Sushi (incluido MasterChef), MakerDAO, Unit, Instadapp (incluido MakerDAO).

El contrato se puede encontrar [aquí](https://github.com/yearn/snapshot-strategy) y la implementación se puede encontrar [aquí](https://etherscan.io/address/0xA79e803FffE9DA37477ddaFD7C6F3dbDCa1C566C#code)

## Vaults de Yearn

Puede leer una descripción detallada de las estrategias para todos nuestros yVaults activos [aquí](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Noticias del ecosistema

[Utilice de forma segura su YFI en la plataforma de Qredo Network](https://twitter.com/QredoNetwork/status/1461031928564436994)

[Escuche Into the Byte Code con trachaeopteryx](https://twitter.com/benmercerdev/status/1464347991674863626?s=21)

[Steakwallet ahora es compatible con las bóvedas beta de Yearn en Fantom](https://twitter.com/steakwallet/status/1463623834389602311?s=21)

[Tesseract ingresa a los cinco protocolos de más rápido crecimiento en Polygon](https://twitter.com/marketducky/status/1461734313636945926?s=21)

[Vea el vídeo de incorporación de Coordinape](https://twitter.com/coordinape/status/1460591450413015043?s=21)

[Yearn en la billetera L2 de Argent con tarifas tan bajas como 2$](https://twitter.com/argentHQ/status/1468934923264401419)

[Las vaults de Tesseract han aumentado sus límites de depósito](https://twitter.com/tesseract_fi/status/1468217220966801413)

[Obtenga un descuento en boletos de ETHDubai manteniendo $ yvBOOST o $ yvYFI](https://twitter.com/ETHDubaiConf/status/1467068791456923648)

[Ver el foco de Zapper sobre las simulaciones de Yearn](https://twitter.com/zapper_fi/status/1466447565302517765)

[Escuche las ideas de Facu sobre Yearn con el podcast On the Ledger](https://twitter.com/Ledger/status/1465678701635506185)

[YFI ahora se puede gastar en la aplicación de Flexa](https://twitter.com/FlexaHQ/status/1469092114038415364)
