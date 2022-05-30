---
layout: post
title: "Actualización de ingeniería web: 14 de marzo 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-22"
translator: Restlessmik3
---

fuente original: [Web Engineering Update 14 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-report?s=r)

#### Semana del 14 de marzo de 2022

## **Resumen 💌**

Una victoria particular esta semana es obtener nuestra configuración de seguimiento de socios en el front-end y el SDK. Esto nos ayudará a determinar qué servicios se utilizan más (ledger, shapeshift, etc.) para que podamos comenzar a incorporar más funciones específicas para nuestros socios y tener una mejor idea de qué socios utiliza la comunidad. También tuvimos algunas correcciones visuales agradables esta semana: arreglar el toggle switch para indicar claramente si está encendido o apagado, y una nueva vault rompió nuestra interfaz de usuario con la cantidad de 0 que pasó al frontend (hablando de eso, Rocket Pool de Curve ahora está en vivo en Yearn). Un saludo a nuestros desarrolladores quienes, a altas horas de la noche en un fin de semana, hacen algunos cambios rápidos para que el sitio se vea limpio nuevamente.

## **Logros 🎊**

**Front End V3 v1.0.29**

- arreglo: aclarar cuando esta encendido y apagado el toggle switch
- arreglo: evitar mostrar el gráfico de la vault para un solo punto de datos
- funcionalidad: establecer un nuevo zapper zap en la dirección del contrato
- arreglo: billetera conectada antes de getTokenAllowance
- arreglo: volver a habilitar la billetera tally
- arreglo: desbordamiento apy
- 
**SDK v1.2.1-0**

- refactorizar: manejar los errores de obtención de datos de zapper con más gracia
- arreglo: cambiar la declaración if para obtener saldos de tokens
- prueba: agregar pruebas de unidad de caché
- arreglo: pasar las direcciones de vaultDynamic para que el adaptador de lens se llame con los parámetros correctos
- refactorizar: devolver todos los tokens admitidos en la red disponible
- funcionalidad: usar el proveedor de direcciones para obtener direcciones de contrato
- arreglo: agregar configuración para subgraph descentralizado de mainnet
- funcionalidad: agregar servicio de socio para depositar en vaults

## **Enfoque continuo y problemas pendientes 🍙**

**Enfoque de ciclo 🔎**

- Desacoplar/minimizar dependencias
- Terminar la renovación de la interfaz de usuario
- Zap en Fantom

**Cuestiones pendientes 🏴‍☠️**

- Algunos problemas con la billetera (transacciones por lotes de Ambire, billetera arcoíris)
- Una vault no pasa su TVL al frontend
- Todavía se necesitan algunas pruebas de unit creadas en el SDK
- https://github.com/yearn/yearn-finance-v3/issues
- https://github.com/yearn/yearn-sdk/issues

## **Ven a construir con nosotros! 👷**

Continuamente agregamos problemas públicos a nuestro GitHub y siempre damos la bienvenida a nuevas contribuciones en cualquiera de nuestros repositorios.

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
