---
layout: post
title: "Newsletter #62 de Yearn Finance "
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-05-23'
translator: RestlessMik3
---

![](./image1.jpg?w=900&h=453)

Bienvenido a la 62ª edición de la newsletter de Yearn Finance. Nuestro objetivo con esta newsletter es mantener a Yearn y a la comunidad cripto informada sobre las últimas noticias, incluidos los lanzamientos de productos, los cambios en la gobernanza y las actualizaciones del ecosistema. Si estás interesado en obtener más información sobre Yearn Finance, sigue nuestras cuentas oficiales de [Twitter](https://twitter.com/iearnfinance) y [Medium](https://medium.com/iearn)

**Resumen**

- Se acercan las vaults V3
- Nueva web de Yearn Watch 
- Lista de permitidos de Yearn
- Gente de Yearn: MarcoWorms
- Yearn quiere comprar tu YFI
- Vaults de Yearn
- Noticias del ecosistema

## Se acercan las vaults V3

![](./image2.jpg?w=900&h=429)

Vaults v3 de Yearn nos obliga a una revisión completa de nuestros sistemas, y estas son seis de las funciones principales que nos complace implementar.

Tramos junior: Yearn siempre se ha comprometido con las vaults "solo hacia arriba", vaults que hacen todo lo posible para evitar pirateos o pérdidas. La compensación por una mayor seguridad/protección suele ser un menor rendimiento. v3 introducirá "tramos junior", para habilitar vaults de mayor riesgo y mayor recompensa.

Solidity: Vaults v2 están escritas en Vyper, y ahora v3 usa Solidity. Esto significa que Yearn puede aprovechar una base de desarrolladores mucho más grande (según DefiLlama, ~69 % del código DeFi está escrito en Solidity frente a ~10 % para Vyper). Lo mejor de todo es que los fanáticos de Vyper aún pueden usarlo con módulos v3.

Tokens de vault estandarizados con ERC-4626: los colaboradores de Yearn ayudaron a crear un nuevo estándar de token para Ethereum: ERC-4626. Los tokens de rendimiento de v3 serán totalmente componibles con cualquier otro proyecto que se construya en ERC-4626.

Gas optimizado: los estrategas usan ySwaps para hacer intercambios de tokens en vaults. Numerosas mejoras en el código harán que este y otros procesos sean radicalmente más eficientes, lo que debería impulsar los APY en todas las vaults.

Estrategias flexibles: más estrategias con una mejor modularidad harán que las vaults de Yearn sean mucho más flexibles. Ya no tienen un límite de 20 estrategias por vault y los socios pueden incluso compartir el control sobre la administración de la vault. No podemos esperar a ver cómo otros protocolos usan Yearn v3.

Automatización: al aprovechar Keep3r Network, Yearn v3 automatizará casi todos los aspectos de la gestión de vaults. v3 pondrá a la vista la automatización del 100 % de las vaults. Y permitirá una mejor protección MEV con cosechas en tiempo real.

La actualización v3 es la mayor colección de actualizaciones en la historia de Yearn.

Con tramos junior, modularización, tokens componibles con rendimiento y un lenguaje de programación más accesible, v3 arrojará combustible a la capacidad de Yearn para innovar.

En palabras de Skeletor Spaceman, "Queremos movernos rápido y no romper cosas". v3 es cómo llega Yearn allí. Se vienen cosas.
Leer más sobre las vaults v3 [aquí](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0).

Te invitamos a participar, dar tu opinión y participar en la comunidad de Yearn uniéndote a nosotros en [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), o [Github](http://github.com/yearn). Ven a construir con nosotros.

## Nueva web de Yearn Watch

![](./image3.jpg?w=900&h=705)

La nueva [yearn.watch](https://yearn.watch/) El sitio se ha puesto en marcha y ofrece muchas actualizaciones a nuestra última iteración.

Algunas de estas actualizaciones incluyen tiempos de carga ultrarrápidos, nuevas máscaras de UI/UX, muchas mejoras y alertas.

Además, se ha agregado una cantidad significativa de detalles al nuevo sitio, con nuevas visualizaciones de riesgos y más. Hay muchas más cosas en camino, ya que el sitio ha sido tomado por un nuevo equipo de colaboradores.

## Lista de permitidos de Yearn

![](./image4.jpg?w=900&h=429)

Para hacer que el sitio web de Yearn sea aún más seguro, recientemente se ha introducido una nueva característica, denominada Lista de permitidos. En esencia, permite que todas las transacciones que se realizan a través del sitio web/SDK se validen con un contrato en cadena que mantiene un registro de todos los datos de llamada válidos que el sitio web puede producir.

Esto evita que el sitio web sea susceptible a varios ataques de intermediarios en los que se proporcionan datos al sitio web, ya sea a través de la API de Zapper/0x o la propia de Yearn. Por ejemplo, si la API de Yearn devuelve una lista de vaults con direcciones maliciosas, con la intención de que los usuarios aprueben una de ellas cuando intentan depositar, la lista de permitidos bloquearía la transacción.

Invitamos a otros protocolos a que también aprovechen sus propias listas de permitidos para mejorar su seguridad. Las instrucciones para crear su propia lista de permitidos se detallan más adelante.

Clic [aquí](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4) para obtener más información sobre la lista de permitidos de Yearn.

## Gente de Yearn: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms es un colaborador de Yearn que hace marketing y escribe contenido que puedes ver con frecuencia en estas newsletters y en Twitter.

Antes de unirse a Yearn, Marco incursionaba en las criptomonedas y estaba cansado de fintech y el modelo de capital de riesgo. Se enteró de Yearn después de aprender sobre DeFi y leer el manifiesto de The Blue Pill.

En Yearn, Marco suele pasar el día colaborando o escribiendo nuevos artículos. Si no está escribiendo artículos, está en los grupos sociales de Yearn ayudando a las personas cuando tienen preguntas.

Como siempre, Yearn promueve una cultura tranquila que permite prosperar a cualquier persona de todos los orígenes, y Marco reconoce que realmente alentamos a los colaboradores a hacer lo que creen.

Mira [la entrevista completa](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e) del colaborador de Yearn, Defiglenn.

## Yearn quiere comprar tu YFI

![](./image6.jpg?w=900&h=450)

Escuchamos que algunas personas están vendiendo.

Genial, porque estamos comprando.

Como YFI es crucial para construir Yearn (debido a su papel en nuestras estrategias de compensación y retención), estamos continuamente recomprando YFI en el mercado abierto. A partir de ahora, ofreceremos este servicio en lugar de compras de mercado completamente manuales.

Nuestra alcancía de recompra se recargará regularmente con DAI y siempre está dispuesta a recomprar su YFI al precio actual, atendido por un oráculo de Chainlink. Las estadísticas ahora son en tiempo real para una total transparencia de la actividad de recompra.

[https://yearn.clinic](https://yearn.clinic/) o [https://buyback.yearn.finance/](https://buyback.yearn.finance/) son los enlaces para vendernos YFI.

## Vaults de Yearn

Puede leer una descripción detallada de las estrategias para todas nuestras yVaults activas [aquí](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Noticias del ecosistema

[YFI ha sido habilitado para privacidad por Incognito Chain](https://twitter.com/IncognitoChain/status/1527045614273544200)

[Sturdy Finance ofrece los APY más altos en USDC en todas las cadenas, impulsado por Yearn](https://twitter.com/pgpsam/status/1526301386173992961)

[Estrategias de Bancor v3 llegarán pronto a Yearn](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap anuncia Iron Fleet en colaboración con Yearn](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Echa un vistazo a un taller de Yearn de Skeleter Spaceman](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Los grupos de Yearn ahora se rastrean individualmente en DefiLlama](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Se ha puesto en marcha una nueva vault de Lido stETH para el nuevo grupo Curve concentrado](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Mira la grabación de una discusión de Coordinape](https://twitter.com/YFI_interns/status/1525159821321830403)
