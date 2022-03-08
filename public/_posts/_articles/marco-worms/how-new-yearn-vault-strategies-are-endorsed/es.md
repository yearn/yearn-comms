---
title:  "¿Cómo se respaldan las nuevas estrategias de Vaults de Yearn?"
image:
  src: ./image1.jpg
  width: 1280
  height: 800
date: '2022-02-02'
author: Marco_Worms
translator: RestlessMik3
---

![](./image1.jpg?w=900&h=478)\
*Proceso de investigación de la estrategia*

En el último artículo sobre [Vaults y estrategias de Yearn](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) describimos brevemente el **Proceso de investigación de estrategias**. Ahora profundizaremos en cómo cualquiera puede proponer una nueva estrategia a Yearn y qué pasos se toman para garantizar que las estrategias respaldadas sean resistentes.

![](./image2.jpg?w=900&h=478)\
*Resumen rápido: una estrategia es un contrato que invertirá y cosechará ganancias utilizando los fondos de yVault.*

Antes de enviar una estrategia para que Yearn la respalde, el estratega debe escribir un documento de debida diligencia al respecto: [SNX](https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view) y [Vesper](https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O) son buenas plantillas a seguir. El documento de debida diligencia  es importante porque describe todas las especificaciones de los procesos que utiliza una estrategia y revisa las prácticas comunes de seguridad de los contratos inteligentes. Yearn usará este documento para validar los procesos y evaluar los riesgos de lo que se construyó.

Algunas de las cosas que el documento debe describir son:

- Descentralización del protocolo: ¿El protocolo utiliza un multisig? ¿Qué poderes tiene? ¿Los contratos son mutables?
- Lista de informes de auditoría
- Todos los detalles de la estrategia intrínseca
- Ruta para implementar en el entorno de producción

El estratega puede codificar una estrategia utilizando el [repositorio de plantillas “brownie-strategy-mix”](https://github.com/yearn/brownie-strategy-mix). Cuando la estrategia es completada y revisada por 2 pares, debe implementarse en ape.tax, que es un sitio web que permite probar vaults experimentales en un entorno de producción.

![](./image3.jpg?w=352&h=28)\
*Advertencia de vaults de Ape.tax!*

Con el documento terminado y después de que algunos ciclos de cosecha se completen con éxito y sin problemas, el estratega ahora puede [buscar colaboradores de Yearn](https://docs.yearn.finance/developers/v2/DEPLOYMENT#deploying-a-new-strategy) para que el [Comité de agricultura segura](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533) apruebe la estrategia. Los revisores internos de Yearn realizarán una revisión de seguridad completa.

Después de que se aborden todos los comentarios y se apruebe el código, la estrategia se puede promover a producción ya sea volviendo a implementar y adjuntando a una vault existente o respaldando la vault de ape.tax.

**La estrategia ahora está respaldada y en vivo en [yearn.finance](https://yearn.finance/)!!**

De ahora en adelante, el estratega + cualquier comité de apoyo será recompensado con una tarifa de rendimiento del 10% del rendimiento de las estrategias de la vault. Dado que la seguridad es una preocupación de alta prioridad, esperamos aumentar la frecuencia de monitoreo y auditoría a medida que la estrategia escala en Valor total bloqueado:

- Cuando la estrategia tiene **más de 10 millones en TVL**, el estratega debe: crear un comité de 3 personas con conocimientos profundos que supervisen la estrategia las 24 horas del día, los 7 días de la semana.
- Cuando la estrategia tenga **más de 100 millones en TVL**, será auditada por una empresa de auditoría externa acreditada y comenzaremos a realizar revisiones internas periódicas.

Para obtener más información sobre cómo se desarrollan y respaldan las estrategias, puede leer estos documentos:

- [¿Qué son las vaults y las estrategias?](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)
- [Documentos oficiales: Introducción a Vaults y estrategias](https://docs.yearn.finance/developers/v2/getting-started)
- [Documentos oficiales: implementación de una vault y estrategia V2](https://docs.yearn.finance/developers/v2/DEPLOYMENT)
- [Propuesta sobre agricultura segura de Yearn](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533)