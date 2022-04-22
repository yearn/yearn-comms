---
layout: post
title: "Actualización de ingeniería web: 31 de enero de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin & dudesahn
date: "2022-02-04"
translator: RestlessMik3
---

fuente original: [Web Engineering Update 31 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update-160?s=r)

#### Semana del 31 de enero de 2022

## **Resumen**

Algunas semanas de limpieza mientras terminamos enero de 2022:

- Se ha incluido soporte para Arbitrum en un lanzamiento reciente para el sitio principal, así como para YearnWatch. Con algunas pruebas adicionales, Yearn estará listo para lanzar vaults y estrategias en nuestra tercera cadena.
- El equipo web también enfrentó algunos problemas de crecimiento cuando abordamos el mayor aumento de visitas de usuarios únicos que jamás hayamos tenido. Esto generó el crecimiento de un equipo de infraestructura con más detalles por venir.
- Web y estrategas se unieron para comenzar a revisar nuestro APY: agregar más datos, hacerlo más útil para los usuarios y hacerlo más accesible visualmente.
- Finalmente, hemos tenido un buen impulso de nuevos colaboradores que ayudaron con problemas en varios repositorios web.

## **Logros ✅**

**SDK Versión 1.0.28**

- logro: admite múltiples estrategias en los detalles de la vault
- corrección: actualice la dirección del ejemplo de simulación
- corrección: migrar a un nuevo punto final de caché
- logro: mejorar el manejo de errores para simulaciones 🤬
    - Cuando fallan las simulaciones, nuestro equipo de soporte hace un trabajo increíble con la resolución de problemas, pero es hora de darles más herramientas. Esta característica ayudará a los usuarios y al equipo de soporte a resolver problemas con mayor precisión.
- corrección: no se requiere deshabilitar la lista de permitidos
- corrección: leer metadatos de estrategias de la API

**SDK versión 1.0.27**

- corrección: mejora el rendimiento de la paginación

**SDK versión 1.0.26**

- corrección: los alcances correctos del usuario para validateCallData con el servicio de lista de permitidos

**SDK versión 1.0.25**

- corrección: agregue nuevos tipos de metadatos del banco de hierro
    - Específicamente, esto abordó la función de tope colateral que Iron Bank implementó recientemente

**Lanzamiento web 1.0.13**

- logro: agregar tipo de error a txError
- corrección: búsqueda de paginación

**Lanzamiento web 1.0.10**

- corrección: elimine los detalles de APY si tiene anulación
- corrección: aumentar los bloques de confirmación para transacciones

**Lanzamiento web 1.0.9**

- corrección: error de obtención del saldo del token
- logro: agregar campos de identificación de prueba para la integración
- logro: arbitraje de apoyo 🚀

**Misceláneas**

- logro: añadidos github ci, dependencias linting y readme.md 
- corrección: pruebas fijas para el contrato de ayudante de estrategia
- logro: propiedad manejable
- corrección: pruebas para el contrato del asistente de estrategia corrección: contrato de lente eliminado y prueba
- prueba: prueba agregada para el adaptador de registro de ironbank
- corrección: enlace de descripción de la vault
- corrección: agregar paginación para activos dinámicos
- logro: agregar estrategias 0xDAO 🤑
    - Aunque duró poco, fue divertido mientras duró 🙃
- logro: agregar llamadas múltiples al asistente de precios
- logro: agreguados TUSD y UST fantom IB
- corrección: eliminar el contrato de lente

## **Enfoque continuo y problemas pendientes**

**Enfoque de ciclo 🎯**

- Decidimos mantener los temas anteriores de seguridad y estabilidad este ciclo a medida que realineamos nuestro cronograma de ciclo. Las pruebas de extremo a extremo han demostrado ser más que útiles junto con los bots de alerta para actualizar al equipo con cualquier error o problema de rendimiento.

**Problemas actuales 🐛**

- FantomRPC. Si bien esto no es específico de Yearn, continúa afectando a los usuarios. Yearn ha cambiado nuestra infraestructura a un nodo autohospedado, que con suerte debería solucionar cualquier problema anterior que los usuarios experimentaron con el RPC público.
- Los cálculos de APY continúan siendo una fuente de preguntas, especialmente en Fantom. Las nuevas incorporaciones al repositorio yearn-exporter están casi completas y proporcionarán:
    - APY prospectivo por estrategia (Curve/Convex) y cosecha anterior (todas las demás vaults)
    - Snapshot de APY semanales, mensuales y desde el inicio a nivel de vault.
    - Para mostrar todos estos números nuevos, agregaremos una página de estadísticas muy básica. 📊

## ** ¡Ven a construir con nosotros! 👷**

Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
