---
layout: post
title: "Actualización de ingeniería web: 07 de marzo, 2022
"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-15"
translator: RestlessMik3
---

fuente original: [Web Engineering Update 07 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-updates?s=r)

#### Semana del 7 de marzo de 2022

## **Resumen 💌**

Esta semana surgieron un par de errores que necesitábamos eliminar rápidamente mientras tratábamos de concentrarnos en nuestra renovación de la interfaz de usuario. Zapper nos dio un contrato de ZapIn actualizado que causó algunos problemas hasta que lo aplastamos actualizándolo en el código. La renovación de la interfaz de usuario incluye algunas actualizaciones de fuentes muy necesarias junto con nuevos íconos e imágenes que creó el equipo de diseño. Esto también incluirá algunos cambios de nombre de variables que deberían hacer que los temas sean más fáciles de mantener para el equipo de Front End y más claros para que la comunidad implemente los suyos propios. Por último, estamos recibiendo apoyo de la comunidad al abordar un problema en el que realizas una transacción de aprobación, actualiza la página y te pide que realices otra aprobación.

## **Logros 🎊**

**Front End V3 v1.0.27**

- funionalidad: agregar soporte de billetera huobi
- funionalidad: aprobaciones firmadas para retiros
- arreglo: botón de salida exitosa de tx en los detalles de la vault
- arreglo: agregar token de vault a MetaMask
- arreglo: solución rápida para el formato de fecha de subgraph
- funionalidad: validar tx usando la lista de permitidos
- funionalidad: actualizar contrato zapper

**SDK v1.1.1**

- refactorizar: manejar errores de obtención de datos de zapper
- arreglo: cambia la declaración if para obtener saldos de tokens
- arreglo: agregar comentario obsoleto a las ganancias del protocolo
- prueba: agregar prueba de unidad de caché

## **Enfoque continuo y problemas pendientes 🍙**

**Enfoque de ciclo**

- Desacoplar/minimizar dependencias
- Terminar la renovación de la interfaz de usuario
- Zap en Fantom

**Cuestiones pendientes**

- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **Ven a construir con nosotros! 👷**

Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
