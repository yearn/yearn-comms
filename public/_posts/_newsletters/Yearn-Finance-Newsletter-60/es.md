---
layout: post
title: "Newsletter #60 de Yearn Finance"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 1000
  height: 500
author: Yearn
date: '2022-04-13'
translator: RestlessMik3
---

### Semana que finaliza el 12 de abril de 2022

![](./cover.jpg?w=1000&h=500)

Bienvenido a la 60.ª edición de la Newsletter de Yearn Finance. Nuestro objetivo con esta Newsletter es mantener a Yearn y a la comunidad cripto informada sobre las últimas noticias, incluidos los lanzamientos de productos, los cambios en la gobernanza y las actualizaciones del ecosistema. Si está interesado en obtener más información sobre Yearn Finance, siga nuestras cuentas oficiales [Twitter](https://twitter.com/iearnfinance) y [Medium](https://medium.com/iearn).

## Resumen

- Anhelando Yearn
- La estandarización de la Gran Vault
- Cómo Web3 permite un Yearn sin censura
- Cómo nacen las yVault Stratocaster 
- Consejos para nuevos colaboradores del DAO
- Vaults en Yearn
- Noticias del ecosistema

# Anhelando Yearn

![](./image2.jpg?w=1000&h=563)

Un informe premium sobre Yearn de Messari ya está disponible para todos. Originalmente compartida con sus suscriptores de pago en noviembre, la pieza contiene una gran cantidad de datos y explicaciones.

Extractos del artículo dicen: "Todos conocemos a Yearn. Es el agregador de rendimiento que se configura, se olvida y se ejecuta sobre los protocolos de generación de rendimiento de DeFi como Compound, Aave, Curve y Convex. Los usuarios pueden ganar de forma pasiva con el clic de un botón. Con el tiempo, el protocolo se ha convertido en sinónimo de rendimiento y se ha ganado una reputación en la industria como una fuente líder de rendimiento con riesgo minimizado... El protocolo insignia utilizado por la mayoría de los usuarios, Vaults representa el 67% del TVL de Yearn. Una Vault que se define por activo y las estrategias de rendimiento subyacentes se ejecutan para implementar el capital... Yearn puede ofrecer un punto de integración único y confiable a otros protocolos de rendimiento para que no se pierda tiempo y no se introduzca el riesgo de integración administrando y manteniendo estrategias en sí mismas... A partir de aquí, el crecimiento de Yearn depende en gran medida de su interfaz de usuario V3, su estrategia multicadena y la defensa de su posición”.

Fantom y Arbitrum están en vivo. ¿Dónde seguir?

Acceda aquí en [messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn).

# La estandarización de la Gran Vault

![](./image3.jpg?w=900&h=577)

Ha oído hablar de los ERC-20, ERC-721 y ERC-1155. Pronto conocerá los ERC-4626. El estándar de Vault tokenizada (ERC-4626) es definitivo. Y la Estandarización de la Gran Vault comienza ahora.

Aquí hay una breve descripción general de ERC-4626: los tokens que generan rendimiento son un desastre. Los agregadores de rendimiento, las Vaults, los mercados de préstamos y los tokens de rendimiento nativos como $xSUSHI a menudo se implementan con ligeras variaciones. Para crear una sola aplicación sobre los tokens de rendimiento de DeFi, debe escribir docenas de adaptadores complejos y propensos a errores que puedan manejar cada variación única.

ERC-4626 hace que eso sea cosa del pasado. Es componibilidad en su máxima expresión. Crea una aplicación sobre una Vault ERC-4626 y funcionará para todos los demás tokens ERC-4626.

Yearn V3 usando ERC-4626 era inevitable. Los colaboradores ya están trabajando arduamente para implementar el estándar para las Vaults V3 de Yearn. También lo son los desarrolladores de Alchemix, Balancer, Rari Capital, Fei Protocol, Yield Protocol, OpenZeppelin y más. Tal vez algún día, incluso veremos una pestaña ERC-4626 en Etherscan. En una palabra, ERC-4626 será el estándar de oro para cualquier tipo de token que genere intereses... desde Yearn Vaults hasta depósitos AAVE y grupos lineales de Balancer.

¿Está listo para unirse a la estandarización de la Gran Vault? Consulte el hilo de Joey Santoro [aquí](https://twitter.com/joey__santoro/status/1504603906726240258) para obtener más detalles y una implementación de referencia por transmissions11.

El futuro es componible.

¿Quieres más código? Eche un vistazo a [esta implementación de demostración de ERC-4626 Vyper 0.3.2](https://github.com/fubuloubu/ERC4626) de los colaboradores de Yearn fubuloubu y banteg junto con transmissions11 y Joey Santoro.

Lee un artículo de seguimiento de CoinDesk sobre ERC-4626 [aquí](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/).

# Cómo Web3 permite un Yearn sin censura

![](./image4.jpg?w=900&h=451)

La gran visión de Web3 es una Internet (y un sistema financiero) que nunca se cae, nunca se censura y es accesible para todos.

Las cadenas de bloques y el alojamiento propio lo hacen posible. ¿Tiene curiosidad por saber cómo puede usar Yearn, Uniswap y otras aplicaciones de Web3 sin tocar sus sitios web? En el paradigma Web2, si un sitio web deja de funcionar, los usuarios finales no tienen suerte. Con Web3, un servicio siempre está disponible para cualquier persona con conexión a Internet (suponiendo que la cadena de bloques subyacente estén en línea).

Dado que Web3 es de código abierto, puedes usar Yearn, Uniswap y otros servicios de Web3 descargando sus archivos y hospedando sus sitios web directamente en tu computadora. ¡No se necesitan servidores de terceros!

Para autohospedarse, todo lo que necesita es una computadora (Windows, Mac o Linux) y algún software especial. Una vez que esté configurado, puede usar Yearn y otros servicios directamente en su navegador sin visitar sus URL (sino escribiendo algo como "localhost: 3000").

Haga clic [aquí](https://medium.com/iearn/self-hosting-web3-services-299306b706ee) para matar al intermediario de Web2 y realizar la gran visión de Web3 con un artículo simple de MarcoWorms.

# Cómo nacen las yVault Stratocaster 

![](./image5.jpg?w=900&h=650)

Las estrategias son la columna vertebral de Yearn, con cada Vault que contiene múltiples de estas partes móviles. Para permitir que nuestros usuarios obtengan el mejor rendimiento ajustado al riesgo en DeFi, debemos mantenernos al día con el espacio en constante cambio y escribir nuevas estrategias. Arriba hay una guía sobre cómo se respaldan las estrategias de yVault recién escritas para entrar en producción.

Consulte [este artículo](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) del colaborador de Yearn, MarcoWorms, para obtener más información sobre el respaldo de la estrategia de yVault.

# Consejos para nuevos colaboradores del DAO

![](./image6.jpg?w=900&h=473)

La cultura de Yearn es global, amistosa y está compuesta por varios constructores, colaboradores y emprendedores. Si bien puede parecer que hay una razón principalmente monetaria para unirse a la mayoría de los DAO, unirse a Yearn DAO es una experiencia satisfactoria que le brinda a uno la oportunidad de trabajar en un espacio nuevo y en constante cambio.

En un DAO como Yearn, puede convertirse en propietario asumiendo la responsabilidad de los resultados y estando facultado para tomar las decisiones que conducirán a esos resultados.

Los siguientes son algunos comentarios de varios colaboradores de Yearn de todos los ámbitos de la vida sobre consejos para los nuevos colaboradores de DAO:

Tracheopteryx, uno de nuestros principales contribuyentes de gobernanza, dice: "Haz el trabajo que amas, en el que eres mejor, por el que te pueden pagar, teniendo en cuenta las necesidades de la DAO". Además, Storming0x, que se enfoca en la seguridad y el desarrollo de protocolos, dice: “Participa, no te sienta mal por sentirte abrumado o por hacer preguntas. Mucha gente está aquí para ayudar a los recién llegados, y tenemos un proceso de incorporación mucho mejor en estos días”. Por último, un colaborador anónimo dice: “1. Comprender nuestra cultura. Lee todo lo que puedas encontrar. 2. Genera confianza. 3. Absorbe tu coste de incorporación. 4. Escribe documentos de incorporación. 5. Conoce a todos. 6. Averigua qué diablos está pasando. 7. Ten una opinión sobre esa dirección. 8. Delega”.

Consulte el artículo completo [aquí](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d) de Kish para leer más consejos de los colaboradores de Yearn y acercarse a los DAO con un conocimiento más profundo.

Lo invitamos a participar, dar su opinión y participar en la comunidad de Yearn uniéndose a nosotros en [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance), o [Github](http://github.com/yearn). Ven a construir con nosotros.

# Vaults en Yearn

Puede leer una descripción detallada de las estrategias para todos nuestros yVaults activos [aquí](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Noticias del Ecosistema 

[Las Vaults MAI para aprovechar las estrategias de Yearn al 0% de interés ahora son posibles en Fantom](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[Se está desarrollando un nuevo sitio yearn.watch](https://watch.major.tax/)

[Lea los breves pensamientos de storming0x sobre Yearn en una entrevista con el internado de YFI](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Consejos sobre seguridad de un colaborador de Yearn](https://twitter.com/storming0x/status/1509769575021178886)

[Mira la nueva actualización de coordinape](https://twitter.com/coordinape/status/1512247042806005763)
