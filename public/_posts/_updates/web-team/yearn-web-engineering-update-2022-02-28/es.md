---
layout: post
title: "Actualización de ingeniería web: 28 de febrero, 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-09"
translator: Restlessmik3
---

fuente original: [Web Engineering Update 28 Feb](https://yearnweb.substack.com/p/yearn-web-engineering-update-18a?s=w)

#### Semana del 28 de febrero, 2022

## **Resumen 🌅**

Puedes decir que la primavera está en el aire por la cantidad de cambios que ocurren en el espacio Web3. Iron Bank se ha diversificado independientemente de la interfaz de usuario de Yearn; han desarrollado un sitio increíble (app.ib.xyz) a medida que su equipo se propone brindar una experiencia de usuario optimizada. Zapper se detuvo temporalmente debido al aumento de las llamadas a la API (y una fuga de memoria), lo que le dio un poco de dolor de cabeza a nuestros saldos de tokens. Este problema nos hizo reconsiderar nuestra dependencia de las aplicaciones de terceros, lo que se reflejó en nuestra retrospectiva. Esperamos con ansias nuestro ciclo de planificación la próxima semana para, con suerte, desvincularnos de la dependencia externa y garantizar que nuestro Front End sea más resistente que nunca.

## **Logros ♨**

**Front End V3**

- corrección: alerta temporal por error en zapper
- funcionalidad: cambios del Iron bank
- corrección: avisos del linter
- corrección: rendimiento bajo visualización modal 0
- corrección: tw.card img

**SDK v1.1.1**

- prueba: agregar especificaciones para EarningsInterface#accountAssetsData
- corrección: usar manualmente la lista de permitidos antes de escribir
- prueba: agregar especificaciones para AllowListService

## **Enfoque continuo y problemas pendientes 🏴‍☠️**

**Enfoque de ciclo**

- Hemos presionado a nuestros ingenieros en este ciclo para que ingresen problemas en GitHub para que nuestra comunidad trabaje en ellos..
- El lanzamiento de Arbitrum fue fantásticamente bien y, en el momento de escribir este artículo, ya tiene un poco más de $ 2 millones en activos administrados..

**Cuestiones pendientes**

- Administrar la lista cada vez mayor de vaults con yearn-exporter
- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **Ven a construir con nosotros! 👷**

Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
