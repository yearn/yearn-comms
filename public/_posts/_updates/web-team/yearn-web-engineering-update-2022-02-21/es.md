---
layout: post
title: "Actualización de ingeniería web: 21 de febrero 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-02-24"
translator: RestlessMik3
---

Fuente original: [Web Engineering Update 21 Feb](https://yearnweb.substack.com/p/yearn-web-engineering-update-b04?utm_source=url)

#### Semana del 21 de febrero 2022

## **Resumen**

Arbitrum se lanza oficialmente en Yearn. Actualmente, solo hay una vault que emplea una estrategia (tricrypto de curve). Hemos aprendido de los dolores de crecimiento por los que pasamos con Fantom para ofrecer una implementación más fluida; para nuestros usuarios, nuestros estrategas y nuestros ingenieros.

Our team continues to expand as we add chains, strategies, and vaults. We’ve brought in additional project managers and product owners to help wrangle the work and keep our community engaged.

Nuestro equipo continúa expandiéndose a medida que agregamos cadenas, estrategias y vaults. Hemos incorporado gerentes de proyecto y propietarios de productos adicionales para ayudar a organizar el trabajo y mantener a nuestra comunidad comprometida.

## **Logros ✅**

**Lanzamiento SDK 1.0.3**

- correción: mejorar desempeño de paginación
- funcionalidad: permitir aprobaciones firmadas al retirar
- prueba: agregar especificaciones para la earningsInterface
- prueba: agregar especificaciones para la VaultInterface
- funcionalidad: agregar prueba de unidades de token
- tarea: actualizar la dirección del adaptador de registro del Iron Bank

**Lanzamiento de la v3 del Front End**

- correción: removido contrato lens y prueba
- funcionalidad: habilitar Arbitrum
- correción: agregar caso inicial para reduce en depositos de vault
- correción: corregir URL incorrecta para iconos de labs
- correción: permitir retirar todo de ETH
- funcionalidad: agregar manejo de errores para simulaciones
- correción: actualizar abordaje con la última corrección de PR para conectar

## **Enfoque continuo y problemas pendientes**

**Enfoque del ciclo 🎯**
- Lanzamiento de Arbitrum
- Renovación de UI

**Problemas actuales 🐛**
- Cuando usas trustwallet y cambias la red desde adentro, no ocurre el mismo evento de cambio de red que ocurre en las otras wallets.
- La carta de la vault pickle jar pSLPyvBOOST no se presenta adecuadamente.

## **¡Ven a construir con nosotros! 👷**

Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
