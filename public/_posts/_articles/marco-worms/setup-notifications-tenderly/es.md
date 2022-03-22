---
title: "Configuración de notificaciones para transacciones en la Blockchain con Tenderly"
image:
  src: ./image1.jpg
  width: 1500
  height: 729
date: '2022-03-18'
author: Marco_Worms
translator: RestlessMik3
---

En el [artículo](https://medium.com/iearn/yearn-finance-partners-with-tenderly-to-supercharge-development-debugging-incident-analysis-6489260298a5) donde Yearn anunció su asociación con Tenderly, hubo un sección donde mencionamos:

> "Tenderly tiene alertas personalizables integradas que permiten que incluso los usuarios novatos creen alertas sobre prácticamente cualquier evento en cadena".
>

Un colaborador de Yearn se acercó para obtener más información sobre esto, ¡y creo que es una gran oportunidad para mostrar esta función! Empecemos echando un vistazo a qué redes podemos usar con Tenderly además de Ethereum Mainnet:

![](./image1.jpg?w=909&h=441)\
*Redes apoyadas por Tenderly*

Voy a explorar el servicio **“Monitoreo -> Alertas”** ubicado en la barra lateral [Panel de control de Tenderly](https://dashboard.tenderly.co/) después de iniciar sesión en cualquier proyecto:

![](./image2.jpg?w=237&h=199)\
*Barra lateral en el lado izquierdo después de iniciar sesión*

Hay una advertencia para este servicio sobre el uso gratuito que aparecerá cuando abra la página de alertas:

`Recibirás un lote de alertas que ocurrieron durante 15 minutos. Actualice su plan a Tenderly Pro/Dev para recibir alertas en tiempo real`

Para las pruebas, esto no es un problema, por lo que puede continuar con la versión gratuita. Para un uso más sólido de las alertas, deberá actualizar su cuenta.

Comencemos revisando todo lo que podemos hacer cuando tratamos de **crear una nueva alerta**. El artículo no explorará todas las posibilidades, así que eche un vistazo para comprender el mejor uso para sus necesidades:

![](./image3.jpg?w=1537&h=669)\
*Crear alerta*

- **Tipo de alerta** serán las condiciones que estableceremos para que un evento en cadena active una notificación:

![](./image4.jpg?w=1437&h=413)\
*todos los tipos de alerta*

- **Objetivo de alerta** será el contrato monitoreado para los eventos y condiciones anteriores:

![](./image5.jpg?w=991&h=253)\
*todos los objetivos de alerta*

- **Destinos de alerta** serán los lugares que recibirán notificaciones cuando el contrato anterior cumpla las condiciones para una alerta:

![](./image6.jpg?w=937&h=195)\
*todos los destinos de alerta*

Antes de crear una nueva alerta primero debemos:

- Decidir sobre qué eventos de qué contrato queremos ser notificados
- Agregue el contrato que queremos escuchar en la pestaña "Contratos", para que podamos orientarlo en el paso 2
- Conéctese con los destinos que recibirán los mensajes (usaremos Telegram en esta guía) para que podamos enviarle notificaciones en el paso 3

¡Ahora comencemos!

### Añadir Telegram como destino

En la pestaña de alertas, ve a “Destinos” en el menú superior y haz clic en “Telegram”:

![](./image7.jpg?w=1364&h=617)\
*Añadir Telegram como destino*

Etiquételo y siga las instrucciones para permitir que el bot le envíe mensajes:

![](./image8.jpg?w=591&h=475)\
*Siga las instrucciones para permitir que el bot le envíe mensajes*

Para completar el proceso anterior, copie las "palabras mágicas" del paso 3 de instrucciones. Péguelas en el chat con el bot de telegramas de Tenderly que se abre al hacer clic en [@TenderlyRobot](https://t.me/TenderlyRobot).

![](./image9.jpg?w=772&h=235)\
*¡Mensaje de confirmación de que el bot ahora puede enviar mensajes en este chat!*

### Monitoreo de depósitos/retiros de Yearn Vault

Comencemos monitoreando algunos eventos realizados en SPELL yVault en Fantom Network. Necesitamos saber la dirección del contrato de SPELL yVault, podemos encontrarla yendo a la [interfaz de Yearn Vaults](https://yearn.finance/#/vaults) y haciendo clic en la vault de SPELL.

![](./image10.jpg?w=625&h=287)\
*Vaults de Yearn en Fantom*

Después de hacer clic en él, veremos esta página con todos los detalles de la vault, haga clic en el botón "explorador de bloques" que lo llevará al contrato de la vault:

![](./image11.jpg?w=1157&h=757)\
*Detalles de yVault de SPELL*

Esto abrirá [Contrato yVault de SPELL](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d) en FTMScan (Fork para Fantom de [Etherscan](https://etherscan.io/)):

![](./image12.jpg?w=1367&h=845)\
*[Contrato de yVault de SPELL en FTMScan](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d)*

Destaqué la información importante para nuestro caso de uso en orden:
- Primero la dirección del contrato
- Luego, el "Nombre del token" (ayuda cuando tiene muchas pestañas de contrato abiertas)
- Por último, la historia de los métodos (funciones) que ejecutó este contrato.

Para nuestro ejemplo, **agregaremos una notificación para cuando alguien deposite tokens en la vault**. Para ello copia la URL de la página del contrato:

https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d

Luego vaya a la pestaña de contrato de Tenderly y haga clic para importar este contrato en su tablero, esto nos permitirá crear alertas para él:

![](./image13.jpg?w=1399&h=681)\
*Contrato de importación en Tenderly*

Pegue la dirección, seleccione el "Contrato Vyper" (el nombre se muestra así porque Yearn Vaults usa [lenguaje de programación Vyper](https://vyper.readthedocs.io/en/stable/index.html)). Cuando aparezca, haz clic en "Importar":

![](./image14.jpg?w=1155&h=909)\
*Contrato de importación en Tenderly*

¡Después de importar, el contrato está listo para que podamos crear una alerta para él!

![](./image15.jpg?w=865&h=467)\
*Contrato de importación en Tenderly*

Vamos a crear una alerta entonces:

![](./image16.jpg?w=1817&h=713)\
*Creando una nueva alerta*

Queremos recibir una notificación cada vez que alguien deposite en SPELL yVault. Para ello comprobaremos el método de “Depósito” que existe en el contrato de yVault. "método" es un nombre análogo a "llamada de función", por lo que ese es el tipo de alerta que usaremos en este caso.

![](./image17.jpg?w=761&h=265)\
*Seleccione tipo de alerta*

El destino será una dirección:

![](./image18.jpg?w=759&h=245)\
*Seleccione el objetivo de la alerta*

Podrá seleccionar el contrato que agregamos anteriormente y luego elegir cualquier función que exista dentro de él. Tenga en cuenta que muchas funciones pueden tener nombres similares, las funciones que comienzan con "_" a menudo son funciones internas privadas y no serán las que estamos buscando.
En este caso tenemos _deposit (privado: para uso interno) y deposit (público: para usuarios externos). Elegiremos el que es público:

![](./image19.jpg?w=1319&h=679)\
*Seleccione el objetivo de la alerta*

Por último, elija el destino de Telegram que se configuró anteriormente y guarde la alerta:

![](./image20.jpg?w=1325&h=909)\
*Seleccione el destino de la alerta*

¡Hemos terminado! ¡Se crea la alerta y recibiré un mensaje cada vez que alguien deposite SPELL en ese yVault!

![](./image21.jpg?w=1521&h=739)\
*¡Alerta creada con éxito!*

Aquí hay una notificación de ejemplo que recibí después de configurar este ejemplo y depositar un poco de SPELL en la Vault para activarla. ¡Recibí la notificación instantáneamente después de la confirmación de la transacción!

![](./image22.jpg?w=495&h=579)\
*¡Notificación de nuevo depósito de SPELL en Fantom yVault enviado a mi Telegram!*

## Pensamientos finales

Este ejemplo de Yearn muestra una forma simple de monitorear la llamada de función de un contrato. Si explora todas las opciones del sistema de alertas, verá que esto se puede modificar fácilmente para muchos usos diferentes, por ejemplo:

- Los desarrolladores de colecciones de NFT pueden monitorear cada vez que su contrato llama a la acuñación de un nuevo token y anunciarlo automáticamente en Discord
- Las personas que monitorean los flujos de Tokenomics pueden usar notificaciones para controlar los saldos de la billetera y las acciones de los contratos para ver si los desarrolladores están haciendo lo que se espera que se haga.

Puede monitorear cualquier tipo de actividad en la cadena y recibir notificaciones, ¡así que experimente con todas las diferentes opciones!
Productores: [Worms](https://twitter.com/MarcoWorms), Revisores: [Cryptouf](https://twitter.com/cryptouf), [Dark Ghosty](https://github.com/DarkGhost7)
