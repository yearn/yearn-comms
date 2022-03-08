---
title: "Profundizando en las métricas de Yearn"
image:
  src: ./image3.jpg
  width: 1400
  height: 625
date: '2022-02-17'
author: Marco_Worms
translator: RestlessMik3
---

Hacer su propia investigación es un ejercicio necesario cuando se trata de criptomonedas y para [yVaults y estrategias](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) hay un puñado de vistas que puede explorar y usar para calcular todos los números. En este artículo, me sumergiré en todos los recursos analíticos públicos de Yearn utilizados por los estrategas para monitorear el estado de las vaults y las estrategias, por lo que aprender a navegar por estas herramientas le permitirá tener el mismo nivel de información sobre las vaults que un miembro del equipo de Yearn. Las tres herramientas que exploraremos hoy son:

### **[Las vaults en Yearn](https://vaults.yearn.finance/)**

Una descripción completa de todos los yVaults y descripciones de estrategias. Un excelente lugar para comenzar a aprender cómo y dónde se delegan los fondos de la vault.

### **[Visión de Yearn](https://yearn.vision/)**

Un tablero interactivo completo que se puede usar para analizar datos históricos para todas las vaults y estrategias. Aquí es donde podremos extraer y analizar cualquier tipo de datos históricos de yVaults y el uso de estrategias.

### **[Yearn Watch](https://yearn.watch/)**

Un panel creado por estrategas para estrategas que contiene acceso rápido a datos útiles sobre el estado de las estrategias para cada yVault.

### **[Las vaults de Yearn](https://vaults.yearn.finance/)**

"Las vaults de Yearn" es un excelente recurso para comenzar a comprender cómo una vault administra los fondos. Aquí encontrará descripciones de todos los yVaults y sus estrategias:

![](./image1.jpg?w=1211&h=733)

En el lado izquierdo, puede elegir las vaults Ethereum o Fantom y se agregan como:

- **Estables**: yVaults hechas para monedas estables
- **Tokens DeFi**: yVaults realizados para tokens del ecosistema DeFi de la red elegida (ETH o FTM)
- **Pools de curve**: yVaults creados para tokens del ecosistema [curve.fi](https://curve.fi/)
- **Vaults retiradas**: antiguas yVaults que ya no se usan

Cuando elija una sección, verá una lista de vaults. Puede hacer clic en una vault para expandirla y ver las descripciones de todas las estrategias que utiliza:

![](./image2.jpg?w=897&h=856)

Si desea profundizar en los números para cada vault/estrategia, ¡deberá saltar a nuestra próxima herramienta! Que es "Visión de Yearn":

## **Visión de Yearn**

**Enlace: https://yearn.vision/**

Visión de Yearn es un conjunto completo de paneles de análisis con muchas vistas prefabricadas para analizar datos históricos de vaults y estrategias. Analicemos algo de lo que se puede encontrar aquí, comenzando con la página de inicio:

![](./image3.jpg?w=1400&h=625)

![](./image4.jpg?w=1400&h=445)

Esta página nos brinda mucha información sobre el estado general de todas las vaults de Yearn .

Hay información sobre TVL (Valor total bloqueado) que representa todos los fondos depositados en todas las vaults. Podemos ver el TVL total de Ethereum y Fantom y también cada segmento de red. Hay algunos gráficos que muestran deltas diarios/semanales, que son comparaciones con datos actuales y pasados. El "precio de la acción" también es una métrica importante a seguir, representa las ganancias de por vida de la vault en forma de un número que crece con el tiempo por encima de 1.0. A continuación puede ver un ejemplo de precio de acción de ETH a YETH. Así es como funciona el "precio de las acciones":

![](./image5.jpg?w=1400&h=849)\
*cómo funciona el "precio de las acciones"*

Volviendo al panel de Visión, en la esquina superior derecha, siempre puede cambiar el rango de tiempo que actualizará la mayoría de los gráficos.

![](./image6.jpg?w=226&h=469)\
*cambiar el intervalo de tiempo en la esquina superior derecha*

No se asuste con los gráficos con muchos colores, normalmente muestran todas las vaults/estrategias y reduce el ruido seleccionando solo el que desea obtener más información. Puede hacer clic en la lista de elementos para filtrar los análisis por una sola parte, la mayoría de ellos vendrán con todos los elementos seleccionados de forma predeterminada, por lo que deberá elegir la vault que desea verificar:

![](./image7.jpg?w=884&h=231)\
*Sin filtrar*


![](./image8.jpg?w=895&h=258)\
*Filtrado*

"tiempo desde el último informe" significa cuándo se recolectaron por última vez las estrategias de esta vault. El gráfico "filtrado" anterior es un ejemplo de toda la cosecha del USDC yVault que ocurrió la última semana, la caída vertical significa que ocurrió una cosecha, por lo que el "tiempo desde la última cosecha/informe" va a 0

Puede cambiar a otros paneles en el lado izquierdo de la pantalla:

![](./image9.jpg?w=225&h=221)\
*ver todos los paneles: https://yearn.vision/dashboards*

¡Aquí encontrarás un montón de paneles para profundizar en lo que está sucediendo en Yearn!

![](./image10.jpg?w=1395&h=565)\
*paneles utilizados por el estratega*

Echemos un vistazo al panel de control "Vault Overview":

![](./image11.jpg?w=1400&h=640)\
*Panel de información general de Vault: https://yearn.vision/d/ibsIoEknkdffd/vault-overview?orgId=1*

En este panel de información general de la vault podemos ver que hay 6 estrategias activas para USDC yVault: "totalDebt" es la cantidad que la vault está delegando a estas estrategias, "cantidad de fondos libres" significa cuántos fondos están disponibles a bajo costo (gasolina). sabio) retiro, cuando este número es menor que la cantidad que le gustaría retirar, la transacción costará un poco más de gas porque la vault tendrá que tomar fondos delegados a las estrategias y realizar más operaciones en el proceso.

Usaremos yearn.watch más adelante para ver cómo se delegan los fondos proporcionalmente para cada estrategia.

También hay excelentes paneles para inspeccionar la salud general de Yearn, e incluso puedes monitorear la tesorería de DAO:

![](./image12.jpg?w=1363&h=201)\
*Panel de control del Tesoro de Yearn: https://yearn.vision/d/9_ppKhd7z/treasury*

## **Yearn Watch**

**Enlace: https://yearn.watch/**

Yearn Watch es un panel creado por estrategas para estrategas, por lo que puede navegar rápidamente a través de información importante sobre el estado de cada estrategia. La pantalla de inicio ya te saluda con todas las vaults:

![](./image13.jpg?w=1255&h=799)

Si abre una vault, verá información sobre la asignación de activos. Usé una parte de esta vista en la sección Yearn Vision, veamos la vista completa para ese USDC yVault:

![](./image14.jpg?w=855&h=855)

La vista de "detalles" muestra todo sobre la asignación general del fondo. Si cambia a la vista de "estrategias", puede profundizar aún más e inspeccionar cada estrategia individualmente y encontrar fácilmente sus contratos y transacciones en cadena.
Una vez dentro de una estrategia, una vista perspicaz son los "informes" (cosechas) que le muestran las últimas 10 transacciones de cosecha para que pueda monitorear las ganancias en tiempo real de la vault y monitorear las ganancias de cada cosecha:

![](./image15.jpg?w=1253&h=759)

Ampliación de un informe individual para obtener más información:

![](./image16.jpg?w=1157&h=415)

### **¡Eso es todo amigos de Yearn!**
¡Espero que este artículo ayude a las personas a extraer buena información sobre sus depósitos en Yearn! Es genial poder acceder a las mismas herramientas que los veteranos que trabajan en estos productos usan para monitorearlos, hay mucha información valiosa sobre el pasado y el presente de YVaults y productos de Yearn.

Creador: [Worms](https://twitter.com/MarcoWorms), Revisor: [Dark Ghosty](https://github.com/DarkGhost7)

Muchas gracias Dark Ghosty por revisar todos estos paneles y mostrarme cómo navegar por ellos ❤

**Hecho en [yearn.finance](https://yearn.finance/)**