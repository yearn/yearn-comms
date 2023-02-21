---
layout: post
title: "Newsletter #59 de Yearn Finance"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1000
  height: 500
author: Yearn
date: '2022-04-06'
translator: RestlessMik3
---

### Semana que finaliza el 5 de abril de 2022

![](./cover.png?w=1000&h=500)

Bienvenido a la 59.ª edición de la newsletter de Yearn Finance. Nuestro objetivo con esta newsletter es mantener a Yearn y a la criptocomunidad en general informados sobre las últimas noticias, incluidos lanzamientos de productos, cambios en la gobernanza y actualizaciones del ecosistema. Si está interesado en obtener más información sobre Yearn Finance, siga nuestras cuentas oficiales [Twitter](https://twitter.com/iearnfinance) y [Medium](https://medium.com/iearn).

## Resumen

- Presentamos nuestra vault más nueva y poderosa
- Hablando de estrategias con Facu en ETHDubai
- Unirse al DAO de Yearn : Incorporación
- Cómo se utiliza Tenderly en Yearn
- Colaboradores de Yearn
- Internado YFI
- Vaults de Yearn
- Noticias del ecosistema

# Presentamos nuestra vault más nueva y poderosa

![](./image2.png?w=900&h=473)

Nuestra vault más nueva de Curve Rocket Pool está activa y puede ganar recompensas de participación de ETH en 2 lados de un grupo de Curve Finance con Rocket Pool ETH (rETH) y Lido stETH (wstETH). Dado que ambos lados del grupo son tokens ETH de participación líquida, obtendrá recompensas de participación de Ethereum, emisiones de $CRV y tarifas comerciales de Curve. Yearn recolectará y volverá a depositar automáticamente las emisiones de CRV y CVX en la bóveda para aumentar su rendimiento.

Usa Zaps de Yearn para depositar cualquier token importante ($ETH, $USDC, etc.) en esta vault. Zaps convertirá automáticamente su depósito a rETH+wstETH, lo agrupará en Curve y lo apostará en Yearn en una sola transacción.

O puede ingresar a Curve Rocket Pool manualmente depositando Rocket Pool ETH (rETH) + Lido stETH (wstETH) en Curve o depositando sus tokens rETH+wstETH LP en Yearn.

Embárcate ahora en [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults)

# Hablando de estrategias con Facu en ETHDubai

![](./image3.jpg?w=1024&h=512)

En el reciente evento ETHDubai, el colaborador de Yearn, saltyfacu, repasa la esencia general de las estrategias en Yearn, nuestro negocio principal.

Habla de las relaciones entre Vaults, que son ERC-20 escritos en Vyper, y Strategies, la parte contable de Yearn escrita en Solidity. Las estrategias hacen todo el trabajo pesado para el ecosistema de Yearn y, por ejemplo, yvUSDC es una vault que emplea hasta 20 estrategias.

Cada estrategia tiene una asignación de capital diferente y se puede vincular sin capital. El flujo aquí es que los usuarios interactúan con tokens de vault, que tienen estrategias subyacentes para interactuar con otros protocolos y dexes.

Para escribir una estrategia, necesitarás git, eth-brownie, ganache, el repositorio brownie-strategy-mix y código VS. En términos de experiencia, necesitarás algunos conocimientos de programación, haber completado el nivel 4 de CryptoZombies y superior, comprender cómo interactúan los protocolos DeFi y mucha fuerza de voluntad.

Completar y publicar una estrategia requiere seis pasos: diligencia debida, codificación, revisión por pares, experimentación (con vaults de Ape tax), revisión del desarrollo central/comité de agricultura segura y luego producción. Después de todo esto, debes quedarte y monitorear la estrategia para asegurarse de que todo funcione según lo previsto.

Consulta la conferencia completa [aquí](https://youtu.be/ooYgIMlqITQ?t=21266), a partir de la marca de tiempo 5:54:26.

Te invitamos a participar, dar tu opinión y participar en la comunidad de Yearn uniéndote a nosotros en [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), o [Github](http://github.com/yearn). Ven a construir con nosotros.

# Unirse al DAO de Yearn: Incorporación

![](./image4.png?w=1024&h=768)

En este artículo, Cryptouf y Farrahmay ofrecen una introducción al proceso de incorporación para unirse a una DAO, específicamente a Yearn. Lea a continuación un resumen de su diálogo.

¿Qué debe tener en cuenta un nuevo colaborador cuando toma la decisión de unirse a una DAO? Tendrán que investigar la DAO a la que se están uniendo y su ethos.

Dada la afluencia de gente nueva a web3 todos los días, me imagino que podría haber una avalancha de nuevos colaboradores en canales como Discord, Telegram y Twitter. ¿Qué hace Yearn para preparar a los colaboradores para el éxito? Consideramos importante dejar en claro nuestra misión y objetivos, que esperamos atraigan a las personas adecuadas para contribuir en Yearn.

La incorporación puede significar diferentes cosas para diferentes DAO. ¿Cómo define la incorporación de DAO? ¿Tiene Yearn un plan de incorporación formal para los nuevos contribuyentes? Nuestro proceso de incorporación utiliza las 4 C de la incorporación: cumplimiento, aclaración, cultura y conexión.

¿Qué deben hacer los contribuyentes para asegurarse de tener éxito al unirse a una DAO? Cada persona que se una a una DAO tendrá diferentes niveles de conocimiento y familiaridad con Web3, DeFi, ingeniería y DAO. Contribuir con éxito en un DAO requiere que uno sea emprendedor y no tenga miedo de hablar y hacer preguntas.

La primera ola de colaboradores que se unieron a una DAO estaba menos preocupada por la compensación, sino que se centró en construir el marco y los cimientos de una DAO. A medida que se unen nuevas oleadas de contribuyentes, la compensación es un factor fundamental para garantizar que las personas se sientan recompensadas y puedan dedicar el tiempo necesario para ayudar a que la DAO crezca a largo plazo. Yearn utiliza Coordinape para recompensar a sus miembros por sus contribuciones. ¿Puedes compartir más información sobre cómo Yearn Finance usa Coordinape y las ventajas y desventajas de la herramienta? Coordinape es una herramienta para que los DAO incentiven, recompensen y aprovechen a los colaboradores de su comunidad.

Coordinape tiene una función para dar fe a las personas, por lo que todos los miembros tienen la opción de agregar a alguien. Esta función es increíble para la descentralización, pero cuantos más miembros tenga un círculo, más se puede jugar con esta función y los miembros pueden responder por sus amigos. ¿Qué está haciendo Yearn para evitar esto? Algunos miembros pueden estar involucrados durante unos meses y luego abandonar la DAO o simplemente estar menos activos durante unos meses (¡por cualquier motivo!). En un mundo utópico, los miembros deberían informar claramente esto a otros miembros para recibir menos recompensas, o incluso optar por no participar, para que no sean recompensados cuando no trabajaron durante algún tiempo. ¿Pero es realmente el caso? Se puede jugar con cualquier herramienta, y Coordinape no es una excepción.

Consulte el artículo completo [aquí](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc). Un agradecimiento especial al escritor Cryptouf y al colaborador de Yearn Farrahmay por sus ideas.

# Cómo se utiliza Tenderly en Yearn 

![](./image5.png?w=1200&h=675)

Los estudiantes de derecho tienen adderall. Los estrategas de Yearn tienen Tenderly. Con herramientas de monitoreo, alerta, depuración y análisis de incidentes, Tenderly convierte a los usuarios incondicionales de DeFi en superhumanos.

Pero es tan simple que cualquiera puede usarlo. En su última publicación, el colaborador de Yearn, MarcoWorms, te guía a través del proceso de configuración de alertas de Telegram para prácticamente cualquier acción en cadena en todas las cadenas de bloques EVM líderes. Se requiere codificación cero.

Haz clic [aquí](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba) para ver un ejemplo del mundo real. Allí, Worms te muestra exactamente cómo configurar un bot de Telegram que monitorea los depósitos y retiros de yVault $SPELL y te alerta cuando ocurren esas transacciones.

Lo que viene después depende de ti.

# Colaboradores de Yearn

![](./image6.jpg?w=800&h=510)

Si Yearn valora un rasgo más que cualquier otro, es la voluntad de actuar. Está tan arraigado en la cultura de Yearn que llamamos a nuestros colaboradores más activos *Hacedores*. Es un sustantivo y un descriptor, pero es más que eso… es un mandamiento para actuar.

Como un DAO descentralizado, Yearn no tiene jefes, ni códigos de vestimenta, ni pista para la promoción o salidas de golf con el CEO. Yearn solo tiene colaboradores. Como con cualquier DAO, hay diferentes niveles de participación.

En el primer nivel, hay usuarios, tirulares de tokens, votantes e inversores. En un nivel más profundo, hay colaboradores: personas de todo el mundo que pasan tiempo activamente en uno o más de los muchos proyectos de Yearn.

Los colaboradores alinean sus esfuerzos (y reciben una compensación si así lo desean) a través de la herramienta de coordinación DAO creada en Yearn: Coordinape. Allí, los colaboradores se dividen en círculos y dan fe de los esfuerzos de los demás cada mes. Algunos trabajan en Yearn una hora a la semana; algunos varias horas al día. Las tareas no se asignan sino que se buscan. Y no existe un silo rígido donde los contribuyentes se vean obligados a permanecer.

Pueden cruzar fronteras para ayudar a otros círculos: desde la ingeniería hasta diseño, desde las traducciones hasta las estrategias, desde la escritura hasta la planificación de eventos. Los colaboradores vienen en todas las formas y tamaños, de todas las geografías. Son animadores de lo fantástico, codificadores experimentales y PMs unidos por el sentimiento de que ha llegado el momento del cambio. Con cada aporte, profundizan sus lazos de confianza dentro de la DAO.

Muchos tienen trabajos de tiempo completo en otros lugares. Algunos contribuyen a media docena de DAO. Pero todos se sienten atraídos por su pasión por lo que construye Yearn. Cuando un colaborador quiere hacer todo lo posible, puede convertirse en Doer.

Pero, ¿qué significa eso exactamente? Los hacedores contribuyen con más regularidad. Ayudan a orquestar todas las piezas móviles de la gran máquina. No son empleados. Pero más bien son lo que su nombre describe: son Hacedores.

Hacen las cosas que Yearn necesita hacer para evolucionar, crecer y cambiar. Chocan contra las paredes. Los derriban. Construyen lo que otros simplemente hablan. Al igual que todos los colaboradores de Yearn, Doers no acepta el statu quo. Son agentes de cambio. Son exploradores. Son buscadores. son constructores Y creen que hay un Doer dentro de todos nosotros.

El industrialismo y las corporaciones han pasado generaciones suprimiendo la voluntad de hacer. Quieren que preguntemos antes de actuar. Confunden análisis con progreso. Comisionan a consultores para que desarrollen hojas de ruta sofisticadas. Establecen marcadores e hitos para cada centímetro de progreso. Deben saber cómo cada minuto gastado se traduce en ganancias. Sin embargo, hay una razón por la cual las corporaciones no inventaron las cadenas de bloques

Contribuir a Yearn es un acto de desafío. Es un acto de recuperar el permiso. No es simplemente soñarlo. Es hacerlo.

CODA

En Yearn la puerta siempre está abierta. Pero solo tú puedes atravesarla.

# Internado YFI

![](./image7.png?w=968&h=625)

El internado YFI es un programa novedoso para que los posibles estrategas hagan preguntas y aprendan. No es como una escuela regular, pero los estrategas senior organizan horas de oficina periódicamente para ayudar a los jóvenes talentos a evolucionar.

Para unirse al internado de YFI, debe: pasar por el proceso general de incorporación, indicar interés en el desarrollo de la estrategia, trabajar en una estrategia o construir una estrategia activamente y, por último, ser invitado a unirse.

Además, puede unirse a través de la píldora azul de cualquier colaborador principal de Yearn.

¿Qué es lo que puedes preguntar? Lo sabrás cuando vengan a ti.

Solicita [aquí](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) para tener la oportunidad de unirse al internado de YFI.

# Vaults de Yearn

Puede leer una descripción detallada de las estrategias para todos nuestras yVaults activas [aquí](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Ecosistema Noticias

[Yearn ha integrado Huobi Wallet en la interfaz de usuario](https://twitter.com/HuobiWallet/status/1503939305135247365)

[Alchemix, un protocolo basado en la infraestructura de Yearn, lanzó recientemente su V2](https://twitter.com/AlchemixFi/status/1503747272143740942)

[Echa un vistazo al nuevo arte de Yearn del Universo PILLS](https://twitter.com/pillsuniverse/status/1502662158810759168)

[Steakwallet proporciona una de las interfaces de usuario más sencillas para depositar en las vaults de Yearn](https://twitter.com/steakwallet/status/1502018618506293248)

[Sturdy Finance ha agregado una nueva garantía de fBEETS impulsada por Yearn en Fantom](https://twitter.com/SturdyFinance/status/1509962174629875726)

[Echa un vistazo al diseño de Yearn v3](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[Escucha a tracheopteryx hablando sobre DAO en el podcast DISRUPTORS de Delphi](https://twitter.com/tracheopteryx/status/1511000392552763399)

[Obtén altos rendimientos fijos en USDC y DAI en Tempus Finance, impulsado por Yearn](https://twitter.com/TempusFinance/status/1508823240768167943)

[Se lanzó una votación para agregar yvYFI como garantía para la moneda estable MAI](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[Las transacciones Yearn sin gas en Fantom son posibles gracias a wido](https://twitter.com/joinwido/status/1506718710836436996)
