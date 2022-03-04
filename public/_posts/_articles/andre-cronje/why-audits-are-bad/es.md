---
title:  "Por qué las auditorías son malas"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
date: '2021-08-03'
author: Andre
translator: RestlessMik3
---

# Auditoría de Fixed Forex de Iron Bank: Por qué las auditorías son malas

Quería un título sensacionalista. El papel de una auditoría sobre la percepción pública es malo, una auditoría para uso personal es buena.

Hoy en día, verá que se solicitan auditorías, no para ser revisadas, sino simplemente como un elemento de línea. "¿El proyecto está auditado? \[Sí\] \[No\]", a menudo, ni siquiera se requerirá el enlace a la auditoría, simplemente \[Sí\]\[No\].

Usemos Fixed Forex como ejemplo, "¿Se audita el proyecto?" \[Sí\], y aquí está la [auditoría](https://github.com/andrecronje/fixed-forex-audit/blob/main/PeckShield-Audit-Report-ERC20-ibEUR-v1.0.pdf) . Es posible que incluso hayas abierto el enlace y luego hayas bajado hasta los hallazgos;

![](1.png?w=935&h=581)

Genial, ¿verdad? 1 bajo y 1 informativo. Pero ahora veámoslo contextualmente, esto es esencialmente un contrato ERC20, y si bien muestra que ibEUR y los activos ib posteriores son una implementación ERC20 simple, ¿qué pasa con el resto del ecosistema?

[Indicador ibEUR](https://etherscan.io/address/0x9d7ca778d067045a9d6b871c9d28589875308018)  
[Indicador ibKRW](https://etherscan.io/address/0x8992fd229b574b8083de1249bc6fd3711fda45dd)  
[Votación](https://etherscan.io/address/0xd9c8620c0c0b866b7b5180d2d70093165340326d)  
[Grifo](https://etherscan.io/address/0x7d254d9adc588126edaee52a1029278180a802e8)  
[Distribución ibEUR/ETH](https://etherscan.io/address/0x1da8a6fe33bd35b99505d67843eec9fa124f2d4b)  
[Recompensas ib](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859)  
[Distribución de tarifas](https://etherscan.io/address/0x27761efeb0c7b411e71d0fd0aee5dde35c810cc2)  

Ahora, es muy fácil para mí dejarlo en un simple tweet, "Informe de auditoría de Forex arreglado", y terminar con eso, y es por eso que, incluso en el pasado, odiaba compartir informes de auditoría, los usamos como un sello de aprobación, las personas no técnicas lo usan como confirmación de que están "seguros". Nada de lo que estamos haciendo es seguro, nada de lo que estamos tratando de hacer es fácil y no tenemos garantías futuras.

La descentralización es una responsabilidad, no un derecho, la descentralización real es increíblemente difícil y casi imposible de lograr de la noche a la mañana.

Hay verdadera elegancia en ser realmente dueño de sus fondos, pero hay una responsabilidad inherente.

Los equipos deben usar auditorías para complementar, es la misma razón por la que la codificación por pares funciona bien, o incluso una simple revisión por pares, pero las auditorías no son un sello de aprobación, las auditorías no son una garantía y las auditorías no son una red de seguridad.

De hecho, si viera una auditoría como la anterior, donde un equipo dijera que está "auditado" y todo lo que hizo fue auditar su ERC20, sería aún más cauteloso.
