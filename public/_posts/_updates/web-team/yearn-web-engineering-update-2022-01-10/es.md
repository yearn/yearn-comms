---
layout: post
title: "Actualización de ingeniería web: 10 de enero de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-01-12"
translator: RestlessMik3
---

fuente original: [Web Engineering Update 10 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update)

#### Semana del 10 de enero de 2022

## **Resumen**

Comienzo rápido del año con múltiples lanzamientos en camino. Los errores pequeños se abordan a medida que surgen y la seguridad sigue siendo nuestra máxima prioridad. Varios contribuyentes primerizos han abierto relaciones públicas, una tendencia emocionante a medida que buscamos expandir continuamente la funcionalidad del sitio web para las cadenas actuales y futuras. 🚀

Esta semana hubo varias actualizaciones de yearn-meta, incluidas descripciones de tokens y estrategias para nuestras 12 nuevas Vaults, así como actualizaciones de backend para Iron Bank y una lógica de precios mejorada para los tokens Curve LP.

## **Logros ✅**

- Versión 1.0.5
  - corrección: actualización del precio del token tx
  - corrección: degradar bnc-onboard

- Versión 1.0.6
  - refactorizar: fijar nuevas dependencias
  - corrección: agregamos tiempos de espera de desarrollo para reduxtoolkit
  - logro: validación de activos admitidos \[WEB-1060\] (#418)
  - corrección: el saldo de yvBoost se muestra correctamente \[WEB-1080\] (#423)
  - corrección: enlace de actualización a la política de seguridad
  - logro: actualizar SDK (# 427)
  - logro: eliminar tokens no admitidos (#425)

- Misceláneas
  - corrección: manejar la respuesta de Vaults personalizadas en camelCase a snake_case (web-1104)
  - corrección: refactorizar normalizar la carcasa del objeto compuesto (web-1103)
  - corrección: paginar saldos de tokens (web-1125)
  - logro: agregar propiedades de límite colateral a los tipos (web-1124)
  - corrección: descripciones agregadas para tokens subyacentes (web-1119)
  - logro: pequeña mejora en la documentación de configuración (web-946)
  - corrección: dirección de checksummed utilizada (web-1113)
  - logro: cambiar el blanco por el logotipo negro de curve rai (web-1112)
  - logro: agregar logotipos actualizados de tokens de grupos crypto (web-1111)
  - corrección: íconos para crv-eth, cvx-eth y ust-wormhole (web-1108)
  - corrección: la api de la red principal detuvo el entrenamiento sin notificación (web-1091)
  - corrección: actualiza el gráfico de la página de detalles de la Vault a "Up only" (web-1045)
  - corrección: error en assetsPositionsof fetch en ftm (web-1075)
  - corrección: saldo de yvBoost incorrecto (web-1080)
  - corrección: FE valida las direcciones de activos compatibles (web-1060)
  - Corrección: corrige la compilación de vista previa y las dependencias de pines (web-942)
  - corrección: error de zapper de depósito de Vault (web-1056)

## **Enfoque continuo y problemas pendientes**

- Enfoque del Ciclo: Seguridad Web
  - El ciclo de dos semanas continúa con nuestro enfoque en la mitigación de los ataques front-end. Espera atento una publicación detallada sobre estas actualizaciones una vez que se completen.

- Cuestiones pendientes
  - Actualizar conjunto de pruebas para SDK
  - Mejorar los errores de simulación para que sean más específicos e informativos.
  - Refactorizar código APY en API y escribir documentación

## ** ¡Ven a construir con nosotros! :man_mechanic:**

- Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

  - https://github.com/yearn/yearn-finance-v3
  - https://github.com/yearn/yearn-sdk
  - https://github.com/yearn/yearn-exporter
  - https://github.com/yearn/yearn-lens
  - https://github.com/yearn/yearn-meta
