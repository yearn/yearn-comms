---
title:  "Hackeando con Yearn"
image:
  src: ./cover.jpg
  width: 900
  height: 450
date: '2022-05-05'
author: Farrahmay
translator: RestlessMik3
---

**📣¡Yearn Finance hace un llamado a los piratas informáticos, desarrolladores y creativos para que se basen en nuestro protocolo!**

![](cover.jpg?w=900&h=450)

Ya sea que esté creando un dapp innovador o lanzando una estrategia de rendimiento, no hay escasez de formas de construir sobre Yearn. Esta guía te proporcionará recursos para que comiences a hackear Yearn.

Cubriremos 1- integraciones de vault y contratos inteligentes, 2- integraciones de front-end y SDK, 3- desarrollo de estrategias, 4- análisis de datos y, por último, brindaremos una gran cantidad de ejemplos para inspirarte.

## Que es Yearn?

Yearn Finance es un conjunto de productos de finanzas descentralizadas (DeFi) que permiten a los usuarios optimizar sus ganancias en criptos a través de servicios de préstamo y comercio.

El producto principal de Yearn es **Vault** (también conocido como yVault), un agregador de rendimiento que se configura y se olvida y se ejecuta sobre los protocolos de generación de rendimiento de DeFi, como Compound, Aave, Curve y Convex.

Las vaults, en esencia, son grupos de fondos con una estrategia de rendimiento asociada para maximizar los rendimientos del activo en la vault. Las estrategias de vault son más activas que simplemente prestar monedas. La mayoría de las estrategias pueden hacer varias cosas para maximizar los rendimientos, incluido el suministro de garantías y el préstamo de otros activos, como monedas estables, el suministro de liquidez y el cobro de tarifas o el cultivo de otros tokens y su venta para obtener ganancias.

**Debido a su diseño abierto, la Vault puede incorporar el rendimiento generado como un componente de diseño de tu proyecto.**

## DeFi y Hacking

DeFi está encontrando lentamente su camino en cada faceta del espacio blockchain. Ya sea que estés creando un juego P2E, un proyecto NFT o herramientas DAO, es probable que haya una funcionalidad DeFi que puedas incorporar para crear un mejor producto.

> Con Yearn, puedes incorporar la generación de rendimiento en tu producto, sin tener que crear una estrategia de rendimiento desde cero.

Las Vaults de Yearn se construyen con estándares abiertos y muchos proyectos han aprovechado las integraciones de vaults disponibles para construir aplicaciones sorprendentes sobre ellas.

**Casos de uso comunes:**

-   **Uso de Vaults como garantía para prestar/pedir prestado**
-   **Uso de Vaults para generar rendimiento con los fondos de los usuarios**

---

## Integración con las vaults de Yearn

### Empezando

Consulta nuestros documentos de desarrollo para [configurar tu máquina](https://docs.yearn.finance/developers/v2/getting-started).

### ¿Cómo integrar con las vaults?

La integración más simple con Yearn es redirigir fondos de un servicio a un yVaults para generar rendimiento para sus usuarios sobre activos que de otro modo no generarían rendimiento. Esto abre nuevas y emocionantes funcionalidades dentro de su producto o aplicación.

### *Background*

- *Escrito en Vyper* 🐍
- *Son un ERC20, por lo que puedes: transferir, intercambiar, usarlos como garantía y todo lo que haces con otros tokens.*
- *Mantén un registro de tus acciones (cantidad, precio por acción)*
- *Código inmutable administrado por Yearn Governance*
- *Una vault puede ejecutar múltiples estrategias al mismo tiempo* 😱
- *Integradas a Keep3rs* 🤖

**Imagen 1. Puedes interactuar con yVaults depositando o retirando.**

![](image1.jpg?w=900&h=368)

![](image2.jpg?w=900&h=368)

Obtén más información sobre las implicaciones de estos dos métodos [aquí](https://docs.yearn.finance/partners/integration_guide)

### Kit de inicio

Aquí hay un ejemplo detallado para integrar vaults V2 y ERC-4626. Hemos creado un SugarVault, donde un titular puede donar rendimientos a una segunda dirección con ejemplos de VaultAPI y 4626.

<autoslot link="https://github.com/storming0x/ystarter-foundry-kit"><autoslot>

**Lo que encontrarás en el kit:**

-   Ejemplo básico de Smart Contracts en Solidity para la integración con Vaults de Yearn para las interfaces V2 y ERC4626.
-   Adaptador ERC4626 para envolver vaults de Yearn.
-   Contratos de ejemplo.
-   Suite de prueba de muestra.

### Taller

Aprende a aprovechar el poder de Yearn mediante la creación de una integración rentable sobre las vaults v2 aprovechando el nuevo EIP-4626: ¡Estándar de vault tokenizada! Este taller te guiará a través de la creación de un enrutador comercial/B2B para vaults de Yearn v2, que cumpla con el nuevo EIP-4626. Podrás elegir entre múltiples estrategias de tarifas para que tus usuarios maximicen sus ganancias.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/urC35PMbpJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Para echar un vistazo a las vaults y contratos inteligentes actuales de Yearn, examina [este repositorio](https://github.com/yearn/yearn-vaults#readme) para ver el conjunto de contratos inteligentes que se utilizan para las vaults de Yearn. Contiene los requisitos, el código, los scripts de implementación y las pruebas necesarias para el protocolo central, incluida una estrategia de plantilla heredable para usar con estrategias basadas en Solidity que interactúan con Vaults de Yearn . Estos contratos se utilizan para crear una forma sencilla de generar rendimientos ajustados al alto riesgo para los depositantes de diversos activos a través de los mejores protocolos de préstamo, fondos de liquidez y estrategias de agricultura de rendimiento hechas por la comunidad en Ethereum.

### Patio de juego

Hemos configurado un entorno de prueba para que implementes y pruebes sus vaults. Accede aquí: [https://hack.yearn.finance/](https://hack.yearn.finance/)
- Implementa tu vault con tu propio token
- Crea tus propios tokens
- ¡Hackea!

### Recursos adicionales:

- [https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens](https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens)
- [https://github.com/yearn/yearn-integration-hardhat](https://github.com/yearn/yearn-integration-hardhat)

## Integraciones web y SDK

Yearn utiliza un SDK de JavaScript para formatear datos de protocolo y generar transacciones para leer/escribir datos de protocolo. El SDK de Yearn integra varios componentes, tanto dentro como fuera de la cadena.

[El repositorio aquí](https://github.com/turtlemoji/yearn-sdk-examples) contains a live preview and example usage of the [Yearn SDK](https://github.com/yearn/yearn-sdk). 
  
*¡Explora este código base para aprender cómo comenzar a interactuar con el protocolo de Yearn en tu propia aplicación!*
  
## Sandbox de vista previa en vivo

- [Haz clic aquí para ir a la zona de pruebas de vista previa en vivo](https://codesandbox.io/s/github/turtlemoji/yearn-sdk-examples/tree/main/)

![](image3.jpg?w=900&h=284)

<autoslot link="https://github.com/turtlemoji/yearn-sdk-examples"><autoslot>

**Recursos adicionales:**
  
-   [https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack)

## Construyendo una estrategia

Una estrategia Yearn es un conjunto de contratos inteligentes que implementan diferentes estrategias de farmeo que utilizan los activos depositados para generar los mejores rendimientos para los usuarios.
  
La implementación de la estrategia implica esencialmente mover activos de una aplicación de farmeo a otra con mayor interés. Esto se hará principalmente de forma automática. Las recompensas/ganancias generadas por las estrategias se actualizan periódicamente, se cosechan, se intercambian por el activo de la vault original y se depositan nuevamente para farmeo compuesto. Cada vault tiene una estrategia única y la estrategia se mejorará constantemente en función de las observaciones de nuestros motores de seguimiento.

Al tener una estrategia, los usuarios solo necesitan depositar activos individuales y dejar que las estrategias generen ganancias a partir de los fondos.
  
Yearn automatiza todo el proceso de rendimiento compuesto, haciéndolo lo más óptimo posible. La frecuencia de capitalización depende de diferentes variables en el sistema, como el valor total bloqueado (TVL) y la tasa de porcentaje anual (APR).
  
![](image4.jpg?w=900&h=819)

### Empezando:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NVR3teJw0Y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Recursos adicionales:**

-   [https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md](https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md)
-   [https://github.com/yearn/brownie-strategy-mix](https://github.com/yearn/brownie-strategy-mix)

## Análisis de datos
  
Yearn tiene como objetivo proporcionar más información sobre nuestros productos a nuestros clientes y socios mediante el análisis de los datos dentro y fuera de la cadena. Dado que todos los datos del protocolo de Yearn se almacenan públicamente en la cadena, se puede obtener mucha información al analizar estas transacciones.
  
Dos herramientas comunes para el análisis de datos en cadena son:
  
1. **Dune Analytics: consulta los datos del contrato y genera paneles con SQL**

- [Dashboards Actuales](https://dune.com/projects/yearn)

Aquí hay una lista de todas las cosas nuevas que puedes consultar:
  
- cosechas
- implementaciones
- transacciones
- contrato_tokens
- contrato_estrategias
- implementaciones_v2

Juega un poco con ellos en [https://dune.com/queries/625814](https://dune.com/queries/625814)

2. **Los datos del contrato Graph-Query con GQL usando los subgraphs de Yearn**

The Graph es un protocolo descentralizado para indexar y consultar datos de cadenas de bloques, comenzando con Ethereum. Es una forma más fácil de recuperar datos específicos de la cadena de bloques, dentro del espíritu de web3, con las ventajas de la descentralización y la confiabilidad.

GraphQL es el lenguaje de consulta subyacente utilizado en The Graph.
  
¿Cuál es la diferencia entre las llamadas API RESTFUL estándar y las llamadas GraphQL? La diferencia es que las API tradicionales requieren que los desarrolladores creen puntos finales específicos para los usuarios que devuelven datos específicos. Si el usuario requiere más información, es posible que deba realizar varias llamadas a la API, a veces cientos de llamadas a la API, para obtener la información que necesita. Con The Graph (que usa GraphQL), solo se necesita una llamada a un subgraph, siempre que el desarrollador haya creado un esquema flexible.

- [https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet](https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet)
- [https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql](https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql)

## Algunas de las preguntas de investigación que nos interesan:

- Selección de fondos de liquidez rentables para nuestras estrategias
- Evaluar el impacto de TVL en la pérdida impermanente
- Detección del volumen de varios grupos de liquidez
- Proporcionar métricas de riesgo a nuestras vaults.
- Volatilidad del precio del token subyacente
- Abordar los riesgos del protocolo
- Optimizar nuestras estrategias de acuerdo al cambio en las tarifas de gas
- Decidir cuándo reducir el apalancamiento y comercializar los tokens de gobernanza
- Decidir cuándo cosechar
- Predicción de pérdida impermanente para grupos Uniswap V3
- Construcción de cartera a través de productos de Yearn.
  Se pueden ver más detalles sobre estos temas en nuestra pestaña de problemas.

**Fuentes de datos**

**SDK de Yearn** [Docs]

[https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack)
  
Si no estás seguro de qué servicio debes consultar primero, Yearn SDK puede proporcionarte las direcciones de los contratos y los puntos finales de los servicios de Yearn.
  
**Yearn API** [Docs]
  
La API de Yearn puede proporcionar metadatos no específicos del usuario, incluido el tvl de vaults, apys, tarifas y metadatos de estrategia a través de la API REST, sin necesidad de realizar llamadas web3.

**Yearn Vision**

Yearn Vision es el panel de Grafana de la versión alojada de Yearn Exporter. Puede descargar las métricas históricas relacionadas con nuestras vaults y estrategias como archivos json o csv a través del tablero. Para obtener instrucciones sobre la descarga, consulta "Descarga de resultados de consultas como csv".
  
## Inspiración

Los casos de uso comunes para las vaults incluyen:
  
- Uso de vaults como garantía para prestar/tomar prestado
- Uso de Vaults para generar rendimiento con los fondos de los usuarios

*En ambos casos, el protocolo que se integra con Yearn se recompensa con tarifas de rendimiento extraídas de las ganancias generales de la vault, cuanto más volumen total contribuya un socio a una vault, mayor será la parte de las ganancias que reciba.*

Cientos de protocolos han creado funcionalidades interesantes utilizando los métodos de integración de Yearn. Éstos incluyen:
  
- Alchemix proporciona préstamos auto rreembolsables utilizando rendimientos de vault
- Abracadabra proporcionó el primer sistema de apalancamiento de yVault que permite a los usuarios tomar préstamos y mantener el rendimiento en marcha
- QiDao ofrece préstamos con 0% de interés si usa yVaults como garantía

Aquí hay algunas ideas sobre lo que puede construir:

1. Use las vaults como garantía para pedir dinero prestado y probablemente obtén algo de apalancamiento. (por ejemplo, Abracadabra)
2. Crea un producto que te permita usar el rendimiento para hacer cosas geniales:
    donar rendimiento a una ONG  
    invertir el rendimiento en cosas más arriesgadas o apuestas direccionales  
    pago de facturas y suscripciones
3. Crea una meta vault encima de varias vaults. Una idea que me viene a la mente es tener una meta vault de USD que deposite en varias vaults vinculadas a dólares en función de alguna estrategia y abstraiga la complejidad del usuario.
4. Crea una interfaz de usuario que acepte depósitos y te permita mover activos entre cadenas.
5. Usa las vaults como un lugar para ganar intereses sobre los fondos que el usuario no está utilizando actualmente de forma activa.

## Ejemplos

- **[Bunker Finance](https://bunker.finance/):** Bunker.finance es un protocolo descentralizado para préstamos respaldados por NFT. Se integraron con las vaults USDC y WETH de Yearn v3 y las usaron como un lugar para ganar intereses sobre los fondos que actualmente no se suministran a los prestatarios.
- **[Skew You](https://github.com/Tburm/tracer-vault):** Los usuarios pueden pedir prestado contra su garantía de opciones, desbloqueando un mundo completamente nuevo de eficiencia de capital.
- **[Possum](https://github.com/Possum-ONE):** Producto de renta fija que puede convertir cada granja en dos grupos fijos/variables. Según el modelo del juego, los usuarios del grupo fijo pueden tener un APY garantizado, mientras que el usuario variable obtiene un APY más alto con un mayor riesgo.
- **[Demon](https://demon-finance.netlify.app/):** Desmitificando oscuros números APY.
- **[Bowtie](https://github.com/ShayanJa/bowtie_finance):** Permite a los usuarios pedir prestado contra la garantía de sus opciones.

Además, realizar una búsqueda en GitHub de la funcionalidad de Yearn que le interesa implementar es una buena manera de encontrar ejemplos de código de trabajo.
  
## Recursos adicionales

- DevDocs: [https://yearn.github.io/yearn-devdocs](https://yearn.github.io/yearn-devdocs)
- yearn-vaults: [https://github.com/yearn/yearn-vaults](https://github.com/yearn/yearn-vaults)
- BaseRouter: [https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol)
- BaseWrapper: [https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol)
- Wrapper-mix: [https://github.com/yearn/brownie-wrapper-mix](https://github.com/yearn/brownie-wrapper-mix)
- [Artículo](https://medium.com/iearn/yearn-partners-building-with-yvaults-4cd042ea092): Socios de Yearn: construir con yVaults
- [Vídeo: Intro a Vaults de Yearn](https://www.youtube.com/watch?v=a1TsO62402c)
- Artículo [Verificación y aprobación de la estrategia](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d)
- [Vídeo](https://www.youtube.com/watch?v=NVR3teJw0Y0): ¡Conviértete en un poderoso estratega!
- [Tweet: Conseguir una estrategia para producir](https://twitter.com/flashfish0x/status/1460246273488044036?s=20&t=kxak7a6qtrmDCfcn6UrGYA)
