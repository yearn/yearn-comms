---
title:  "Riesgo, herramientas e información"
image:
  src: ./cover.jpg
  width: 1500
  height: 500
date: "2021-08-12"
author: Storm Blessed
translator:RestlessMik3
---

fuente original: [twitter](https://twitter.com/storming0x/status/1436851219864059906)

##### 1
Estuve programando un poco de fin de semana y decidí hacer una tormenta de tweets sobre [@iearnfinance](https://twitter.com/iearnfinance) riesgos, herramientas y conocimientos entre bastidores.

🧵 👇

##### 2
Si no conoces [yearn.finance](http://yearn.finance), puedes considerarlo como el "protocolo de función de rendimiento". El producto estrella de Yearn son las Vaults. Pon dinero en las Vaults y de alguna manera al día siguiente ese dinero crece y sigue creciendo constantemente. Esta es una simplificación excesiva por supuesto.

##### 3
Esto es posible gracias a un equipo de personas inteligentes que codifican estrategias para que la Vault asigne dinero con el objetivo de obtener ganancias. Las estrategias son contratos inteligentes que deben implementarse y actualizarse con frecuencia. Estos contratos inteligentes son flexibles y dinámicos. Asignaciones de ejemplo:

![3_1436841383378120712](3_1436841383378120712.jpg?w=1200&h=663)

##### 4
Dada la forma en que funciona el protocolo Yearn, necesita un cambio muy rápido para lanzar nuevos contratos y estrategias rápidamente, esto tiene implicaciones en la seguridad. Una de las principales preocupaciones de Yearn es el riesgo desde todas las perspectivas. Estamos en el EOD en el negocio del riesgo. ¿Cómo equilibrar esto?

##### 5
Tenemos que llegar a un marco de riesgo. Para obtener la imagen. Este es el número de Vaults + estrategias implementadas actualmente. No hay forma de evitar la complejidad de este sistema, muchas piezas deben encajar en su lugar para que funcione.

![3_1436842206359285762](3_1436842206359285762.jpg?w=398&h=117)

##### 6
En mi vida anterior tenía experiencia en sistemas aeronáuticos. Creo que se pueden extraer muchas lecciones de la aviación, que también está en el negocio del riesgo. La complejidad como en las finanzas es alta. Aún así no te lo piensas dos veces reservando un vuelo para tu próximo viaje.

##### 7
Cada día se realizan millones de vuelos, y muchos vuelos tienen incidencias. Un incidente no conduce a un accidente = accidente de avión. Es necesario que sucedan muchos incidentes al mismo tiempo para que un avión se estrelle. Esto en las operaciones actuales de las aerolíneas es extremadamente improbable.

##### 8
Pero cada vez que hay un incidente, el proceso y los sistemas de aviación requieren que se corrija y arregle la causa raíz. Hemos implementado un proceso similar en yearn, cada cuarto de guerra no conduce a una pérdida de fondos, pero debemos aprender de él y mejorar.

##### 9
Este proceso se implementó a principios de este año después de un mes realmente malo de incidentes y salas de guerra. Y se iniciaron e implementaron varias iniciativas para automatizar y eliminar los factores humanos tanto como sea posible de nuestras decisiones diarias.

[twitter.com/storming0x/sta…](https://twitter.com/storming0x/status/1395452522840608768?s=20)

> ![storming0x](storming0x-881012267675820034.jpg?w=48&h=48)
> Storm Blessed 0x ([@storming0x](https://twitter.com/storming0x))

> Acabamos de salir de una sala de guerra de más de 16 horas lidiando con una situación en Yearn. Extremadamente cansado pero agradecido de tener la oportunidad de ser parte de este increíble equipo.

Crisis resuelta y sin pérdida de fondos. Muchos aprendizajes clave y cosas que harán que [@iearnfinance](https://twitter.com/iearnfinance) sea más fuerte. Necesito 😴

##### 10
Este por supuesto aún es mejorable, y es un proceso constante, pero con el tiempo lo que no nos mata seguro nos hace más fuertes. Es parte de mi trabajo hacer que este proceso quede arraigado en el ADN de Yearn.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/EMERGENCY.md)

##### 11
Tuvimos salas de guerra donde el código tenía un error e hizo una contabilidad incorrecta que condujo a salas de guerra y problemas.
Correcciones:
-Agregamos bots de simulación para detectar problemas antes de que sucedan en la cadena.
-En los controles de salud de la cadena que revierten un trx si no se cumplen las afirmaciones.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/DEPLOYMENT.md#health-checks)

##### 12
El bot de simulación está vinculado a alertar en nuestro telegrama y enviarnos con tiempo de anticipación cualquier problema. Recientemente tuvimos una sala de guerra completamente impedida por una simulación, la estrategia se redujo sin tener que corregir nada en la cadena. Pasamos de la acción correctiva a la preventiva.

![3_1436848158034644993](3_1436848158034644993.jpg?w=652&h=780)

![3_1436848166805000195](3_1436848166805000195.jpg?w=984&h=748)

![3_1436848196399996929](3_1436848196399996929.jpg?w=1200&h=1000)

##### 13
[yearn.watch](http://yearn.watch) es el sitio que construí para rastrear estrategias y el estado de las Vaults. Utiliza una gran pieza de infraestructura construida internamente por el equipo de Yearn para obtener datos. Contamos con contratos multillamada especializados para poder obtener estos datos de manera eficiente para la toma de decisiones.

![3_1436848846378729473](3_1436848846378729473.jpg?w=1200&h=739)

![3_1436848859322273796](3_1436848859322273796.jpg?w=1200&h=767)

##### 14
También tenemos un tablero de riesgos que creamos para calificar cada estrategia para evaluar en cualquier momento nuestro riesgo. Esto se completa con nuestra infraestructura interna y se ajusta automáticamente mediante cambios en la cadena.
(Datos de muestra a continuación)

![3_1436849527198085126](3_1436849527198085126.jpg?w=1200&h=498)

![3_1436849597129715717](3_1436849597129715717.jpg?w=583&h=433)

![3_1436849615987351553](3_1436849615987351553.jpg?w=719&h=314)

##### 15
Esta es una herramienta de riesgo interna que se agregó recientemente, aún es demasiado pronto para hacerse pública ya que estamos ajustando nuestros datos y modelos para intentar obtener una calificación objetiva dado nuestro proceso interno. Una vez que recopilamos más datos sobre esto, me complace compartir más sobre esto.

##### 16
Estamos lejos de resolver el riesgo y la seguridad de los contratos inteligentes, pero lo único que podemos hacer es seguir intentándolo. Esperamos que esta vista detrás de escena pueda informar a otros proyectos en el ecosistema para ayudarlos o también generar otras ideas de las que todos podamos beneficiarnos.

¡Gracias por leer!
