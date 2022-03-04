---
title:  "Introducción de Fixed Forex"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
date: '2021-07-02'
translator: RestlessMik3
---

# Introducción de Fixed Forex (USD, EUR, ZAR, JPY, CNY, etc.)

**Descargo de responsabilidad;**

- Sin ficha
- La auditoría no ha sido completada
- El contrato es experimental

**Características clave;**

- 0 gobernanza (o multisig)
- 0 configuración
- 0 tarifas
- 0 valor de extracción
- Liquidaciones suaves
- Límites dinámicos de creación de tokens basados en la liquidez en cadena
- LTV dinámicos basados en protocolos en cadena

**Fixed Forex**

Fixed Forex está diseñado para ser un marco de moneda estable descentralizado, inmutable, 0 tarifas, 0 gobernabilidad.

Los LTV (relación préstamo-valor) se derivan de Compound, Aave v1, Aave v2 y Iron Bank. A medida que estos sistemas agregan o actualizan sus garantías aceptadas, también Fixed Forex se actualiza dinámicamente.

Los límites de creación de tokens (cuánta liquidez puede crear un usuario contra un colateral determinado) se derivan de la liquidez disponible en la cadena, cuanto mayor sea la liquidez en la cadena, mayores serán los límites de acuñación.

Fixed Forex presenta liquidaciones suaves, la cantidad mínima absoluta de deuda se paga para que la posición de los usuarios vuelva a ser uniforme, sin preocuparse más de que se liquide la pila completa durante los eventos de reducción.

A los efectos de este comunicado, el contrato no se verificará en etherscan; sin embargo, puede encontrar la dirección y el ABI a continuación;

[0x92FC8E6EfdF389e2527d14393b15F543f9a03420](https://etherscan.io/address/0x92fc8e6efdf389e2527d14393b15f543f9a03420)

[ABI](https://gist.github.com/andrecronje/4ce11e8603a7f61af4619a86647db1d4)

El lanzamiento completo se basará en los fondos cripto de curve.fi, para permitir un mercado de divisas descentralizado.
