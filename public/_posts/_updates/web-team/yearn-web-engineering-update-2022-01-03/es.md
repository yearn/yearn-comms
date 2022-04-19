---
layout: post
title: "Actualización de ingeniería web: 3 de enero de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: Dudesahn
date: "2022-01-05"
translator: RestlessMik3
---

Fuente original: [Web Engineering Update 4 Jan](https://yearnweb.substack.com/p/update-jan-5-2022)

#### Semana del 3 de enero de 2022

## **Resumen**

El lanzamiento del sitio beta v3 a producción en diciembre ha ido bien. Continuamos abordando los errores a medida que surgen y actualmente nos enfocamos en aumentar la seguridad y el monitoreo del sitio web.

## **Logros**

- Versión 1.0.4
  - Corrección: enlace de alquimia en el pie de página
  - Corrección: enlace de la API de pickle
  - Corrección: los laboratorios depositan la cantidad esperada del token
  - Corrección: obtención de la vault de vista detallada en el conmutador de red
  - Corrección: permitir la cancelación de recuperaciones de noticias cuando el usuario realiza acciones asincrónicas
  - Logro: acceso NFT creado (deshabilitado por ahora)
  - Logro: guardar las ganancias históricas en el token subyacente
  - Logro: interfaz de usuario de pie de página mejorada
  - Logro: interfaz de usuario de cambio de red mejorada
  - Logro: soporte para Fantom en yearn-exporter

- Corrección: resultado esperado del token del depósito yvBoost
- Logro: agregar aviso para "agregar red" si el usuario no tiene en MetaMask
- Logro: agregar enlace de reddit y logotipo al pie de página
- Logro: apoyar a Fantom en Yearn-Exporter
- Corrección: eliminar idiomas beta

## **Enfoque continuo y problemas pendientes**

- Enfoque del Ciclo: Seguridad Web
  - En respuesta a la creciente sofisticación de los ataques frontales a los protocolos DeFi, hemos pasado las últimas semanas diseñando e implementando varias mejoras en la seguridad web de Yearn, incluido el monitoreo, la verificación en tiempo real y la implementación de una red multigrado. Más detalles a seguir después del lanzamiento.

- Error de migración de vault
  - Algunos usuarios han informado de un problema al migrar vaults que requieren una actualización de la página para que aparezca su nuevo saldo de vault. Si bien este problema ha resultado un poco difícil de replicar, los ingenieros están depurando esta semana.

## **¡Ven a construir con nosotros!**

- Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

  - https://github.com/yearn/yearn-finance-v3
  - https://github.com/yearn/yearn-sdk
  - https://github.com/yearn/yearn-exporter
  - https://github.com/yearn/yearn-lens
  - https://github.com/yearn/yearn-meta
