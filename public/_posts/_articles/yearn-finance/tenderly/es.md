---
title: "Yearn Finance se asocia con Tenderly para supercargar el desarrollo, eliminación de bugs y analisis de incidentes"
image:
  src: ./cover.png
  width: 1280
  height: 800
date: '2022-02-25'
author: Weaver
translator: RestlessMik3
---

La asociación Yearn-Tenderly ha demostrado ser mutuamente beneficiosa.

Tenderly le ha dado a Yearn acceso a las mejores herramientas de desarrollo de su clase, información más detallada sobre la actividad en cadena y soporte de un equipo de estrellas de rock del desarrollo. Mientras que Yearn ha proporcionado casos de uso clave y requisitos de un importante protocolo DeFi, ayudando al producto Tenderly a iterar y adaptarse a las necesidades de la industria.

![](cover1.png?w=1400&h=670) 

## Situación
Yearn Finance se enorgullece de ser uno de los protocolos TVL más seguros y más altos de todo DeFi. Yearn también tiene una gran cantidad de infraestructura en cadena: más de 300 contratos inteligentes de estrategia y vault v2 solo en la red principal (sin mencionar las vaults v1, la infraestructura keep3r, los contratos auxiliares, las implementaciones de cadenas laterales, etc.).

Yearn es también un *lego de dinero* sin permiso. Lo que significa que utiliza muchos protocolos diferentes en todo el panorama de DeFi para ayudar a generar rendimiento y, a su vez, muchos protocolos diferentes usan Yearn para generar rendimiento para sus usuarios y tesorerías. Si bien estar tan profundamente integrado permite una gran oportunidad, también tiene el costo de acumular riesgos: a medida que crece la cantidad de integraciones entre protocolos, la superficie de ataque también crece.

## Desafío

Con un equipo tan grande de colaboradores de desarrollo y una vasta infraestructura en cadena, se vuelve importante encontrar y utilizar las mejores herramientas de desarrollo de su clase. Algunos de los desafíos que enfrenta Yearn al ejecutar sus operaciones a escala son:

#### Monitoreo y Alertas
El monitoreo de los datos en cadena es fundamental para conocer los eventos que pueden afectar la seguridad de Yearn, la seguridad de una integración o simplemente para rastrear patrones en el comportamiento del usuario.

Por ejemplo: ¿Qué sucede si una de las fuentes de rendimiento que utiliza Yearn implementa una nueva propuesta de gobernanza para eliminar las recompensas agrícolas? O tal vez una granja actualiza a los firmantes su multisig, creando un problema de seguridad y queremos saber al respecto.

Gastar el tiempo y los recursos del desarrollador en la construcción y el mantenimiento de la infraestructura fuera de la cadena en lugar del trabajo del protocolo central no es una gran inversión para Yearn.

#### Depuración
Los entornos de desarrollo de contratos inteligentes de Solidity aún son inmaduros en comparación con los entornos de programación tradicionales como Java, Javascript, etc. Escribir código seguro para un protocolo que tiene 6 mil millones $ en activos bajo administración es una hazaña. Para tener éxito, los desarrolladores y los equipos de seguridad de Yearn necesitan herramientas que puedan depurar el código y las transacciones tanto en entornos locales como en vivo en la red principal.

#### Análisis de incidentes
Cuando ocurre un evento de seguridad en la cadena que afecta los fondos de los usuarios, ya sea contra Yearn u otro protocolo, necesitamos las herramientas adecuadas para comprender rápidamente qué sucedió y cómo responder. Más allá de la simple alerta, debemos poder profundizar en el rastro de una transacción o conjunto de transacciones en particular y compartir nuestros hallazgos con el equipo.

## Solución
Una vez que los desarrolladores de Yearn descubrieron que Tenderly es la herramienta de análisis más confiable y útil disponible durante las salas de guerra, Yearn decidió entablar una relación más formal con Tenderly.

El equipo de Yearn aportó su experiencia en el panorama de DeFi y los casos de uso inherentes a cualquier protocolo DeFi altamente activo, mientras que el equipo de Tenderly compartió algunas de las mentes más brillantes en Ethereum que tienen una de las infraestructuras de nodos confiables y de mayor rendimiento en La industria.

Durante los últimos meses, los desarrolladores de Yearn se han convertido en grandes usuarios de los productos Tenderly, proporcionando comentarios e influencia sobre la hoja de ruta del producto. En ese tiempo, Tenderly ha enviado algunas herramientas y capacidades increíblemente útiles que ayudaron a abordar cada uno de los desafíos enumerados anteriormente.

#### Monitoreo y alertas
Tenderly tiene alertas personalizables integradas que permiten incluso a los usuarios novatos crear alertas sobre prácticamente cualquier evento en cadena. Internamente, Yearn usa esto ampliamente para vigilar eventos críticos y valores en cadena. Por ejemplo, cada uno de nuestros grupos multisig de Telegram recibe una alerta con un hipervínculo cuando se extrae una nueva transacción multisig.

Las acciones de Web3 son otra característica de Tenderly que permite a los usuarios activar scripts internos en reacción a eventos en cadena (por ejemplo, enviar una transacción para deshabilitar la actividad de keep3r si un error en una estrategia provoca una recolección repetida).

#### Depuración
Usar el depurador Tenderly ha sido un gran avance para los desarrolladores de Yearn. Atrás quedaron los días de usar Ganache para bifurcar mainnet en entornos de desarrollo local. Si bien Ganache puede ser lento, poco confiable y provocar bloqueos de RPC; Las bifurcaciones Tenderly son especialmente robustas y han ahorrado muchas horas a los desarrolladores al ayudar a encontrar la línea exacta que provocó la reversión de una transacción. Además, las bifurcaciones individuales y los seguimientos de transacciones se pueden compartir a través de URL para que sepa que está viendo lo mismo que sus compañeros y revisores de código.

#### Análisis de incidentes
Tenderly ofrece el mejor depurador de interfaz de usuario de la industria. Ha sido invaluable para el equipo de Yearn llegar al fondo de los eventos de seguridad y ayudar a diseccionar errores y ataques. Los ambientes de la sala de guerra son estresantes y ruidosos, por lo que es útil tener sus URLs compartidas que ayudan a todos a estar en la misma página. Se están realizando más esfuerzos con respecto al análisis de incidentes, pero cubriremos esto en una publicación separada.

## Vista previa de la interfaz de usuario de Tenderly

*Resumen de la transacción:*
![](image1.png?w=1140&h=609)

*Contexto de error:*
![](image2.png?w=1131&h=432)

*Simulación de error*
![](image3.png?w=1280&h=672)

## Que sigue
Una de las cosas que más entusiasman a Yearn es atraer nuevos colaboradores y atraer talento. En colaboración con el equipo de Tenderly, ofrecemos 90 días de acceso gratuito a Tenderly para miembros de YFI Boarding School (una comunidad para futuros estrategas). Creemos que esto ha ayudado a los miembros del internado a obtener una visión más profunda de su propio código de estrategia, ayudándolos a aprender de manera más eficiente, al mismo tiempo que les muestra el poder del producto de Tenderly.

Yearn Finance es DeFi simplificado. Obtenga más información consultando nuestros documentos, nuestra visión y cómo unirse a nosotros.

Tenderly proporciona una plataforma de desarrollo integral para equipos y empresas que buscan crear productos innovadores de blockchain. Obtenga más información en tenderly.co.
