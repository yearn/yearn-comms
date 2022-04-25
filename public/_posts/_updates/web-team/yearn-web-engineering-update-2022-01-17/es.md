---
layout: post
title: "Actualización de ingeniería web: 7 de enero de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-01-20"
translator:
---

fuente original: [Web Engineering Update: Jan. 7, 2022](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7)

### Semana del 17 de enero de 2022

## **Resumen**

Un gran lanzamiento esta semana con la aparición de información sobre herramientas de APY; ahora puede ver información más detallada cuando pasa el cursor sobre el APY de una vault. Finalizar las mejoras de seguridad sigue siendo el enfoque principal, con la adición de las vaults de Arbitrum a continuación, y también más trabajo para mejorar nuestra UI/UX multicadena.

Otras actualizaciones incluyen no más polvo después de los retiros de la vault, soporte para una nueva vault LINK en Fantom y correcciones de interfaz de usuario para yvBOOST y Iron Bank.

## **Logros ✅**

### **Lanzamiento web 1.0.8 (17 de enero de 2022)**

- logro: instrucciones Léame mejoradas 📚
- logro: información sobre herramientas APY para vaults y laboratorios
  - Al pasar el cursor sobre el APY de una vault en la página de vaults o en la página de detalles, ahora se proporcionará un desglose similar al que se ve en el sitio web v2, con información adicional incluida para las vaults Curve LP.
- logro: agregar ruta de estado de salud 🏘️
- logro: retirar todo para vaults
  - Anteriormente, al retirar la interfaz de usuario, se convertía la entrada del usuario del saldo del token subyacente en acciones de la vault, y luego se pasaba al contrato de la vault a través de `withdraw(shares)`. Sin embargo, si el precio de las acciones aumentara después de una cosecha, esto podría dejar al usuario con polvo (una pequeña cantidad fraccionaria de acciones de la vault). Ahora, la interfaz de usuario detecta si un usuario está tratando de retirar toda la posición de su vault y, en su lugar, pasa "retirar (max_uint)", que quemará todas las acciones de la vault del usuario y no dejará polvo, incluso si el precio de las acciones aumenta cada bloque. .
- corrección: los laboratorios retiran el cálculo de acciones
  - Hubo un problema al mostrar la cantidad de yveCRV que un usuario recibiría de un retiro de yvBOOST debido al manejo especial del token de vault (yvBOOST) como token de visualización. Esto ha sido corregido.
- estilo: regla eslint para orden de importación 📝

### **SDK versión 1.0.15 (19 de enero de 2022)**

- logro: añadir lista de permitidos
- tarea (deps): bump shelljs de 0.8.4 a 0.8.5
- logro: habilitar pruebas ci en solicitudes de extracción
- corrección (account.summaryof): ignorar las vaults de laboratorio para el cálculo de existencias
- corrección: resolver la importación de recuperación faltante

### **Misceláneas**

- logro: marco de monitoreo del sitio del titiritero en vivo
- corrección: actualizar el límite de préstamo del usuario
  - Esta corrección de la interfaz de usuario considera el límite de garantía de un activo al mostrar el límite de préstamo de un usuario para Iron Bank
- corrección: actualizar los cálculos de curve para nuevos grupos
- corrección: error de visualización de yvBoost
- logro: eliminar la anulación de nuevo tipo para vaults de curve
- corrección: mostrar los activos totales
- corrección: error de retiro de yvBoost
- logro: agregar el logotipo de la vault de enlace fantom
- logro: agregar información de vault de enlace
- corrección: ignorar las vaults de laboratorio para el cálculo de existencias
- corrección: resolver la importación de recuperación faltante

## **Enfoque continuo y problemas pendientes**

- **Ciclo de enfoque 🎯 **

  - Finalizar y envíar las mejoras de seguridad, con una publicación de inmersión completa próximamente.
  - ¡Viene el arbitraje! En este ciclo, el equipo web lleva a Arbitrum a la vanguardia a medida que comenzamos las pruebas y la integración de la vault.
  - Con el lanzamiento de vaults pronto en nuestra tercera cadena, Yearn está diseñando una UI/UX de cadena múltiple para permitir a los usuarios ver más fácilmente las posiciones actuales y las nuevas oportunidades en todas las cadenas admitidas dentro del ecosistema de Yearn.

- **Problemas actuales 🐛**

  - Error de migración de la vault: después de la migración, algunos usuarios deben actualizar la página antes de que aparezca la nueva vault y desaparezca la antigua. Difícil de reproducir consistentemente (2/16 intentos en Fantom), este error parece deberse a una desalineación de datos entre la billetera RPC y nuestro SDK.
  - Error JSON-RPC: este parece aparecer más comúnmente en Fantom. Los mensajes de error mejorados en la interfaz ayudarán mejor a los usuarios a determinar si están experimentando un verdadero error de RPC o algo más.

## ** ¡Ven a construir con nosotros! :man_mechanic:**

- Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

  - https://github.com/yearn/yearn-finance-v3
  - https://github.com/yearn/yearn-sdk
  - https://github.com/yearn/yearn-exporter
  - https://github.com/yearn/yearn-lens
  - https://github.com/yearn/yearn-meta
