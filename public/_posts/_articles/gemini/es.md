---
title: "Yearn Finance y Robots de Dinero"
image:
  src: ./cover.png
  width: 1281
  height: 721
date: '2021-03-25'
author: Gemini/Cryptopedia
translator: RestlessMik3
---

Publicación original: [https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol](https://www.gemini.com/cryptopedia/yearn-finance-defi-lending-protocol)

# Yearn Finance y robots de dinero: estrategia DeFi automatizada

Yearn Finance ofrece un conjunto de estrategias de inversión impulsadas por robots que contienen "sabiduría procedente de la multitud": la propia comunidad de Yearn.

![](image1.png?w=1281&h=721)

## Resumen

Los robots de dinero de Yearn Finance ejecutan estrategias de inversión en plataformas de finanzas descentralizadas (DeFi) con el objetivo de generar los mayores rendimientos con el menor riesgo. Las estrategias implementadas incluyen proporcionar activos para préstamos, obtener tokens de proyectos con agricultura de rendimiento, proporcionar liquidez o una combinación de estas y otras estrategias de inversión en una amplia gama de protocolos de préstamos DeFi. El protocolo Yearn le permite participar fácilmente en estrategias de inversión complejas al proporcionar tokens a la plataforma. Su conjunto de productos en expansión tiene como objetivo simplificar la inversión en DeFi y está ganando terreno entre los inversores.

## Contenido

- Yearn.Finance: yVaults
- Estudios de casos de estrategia de yVault: GUSD
- Variedad de productos DeFi
- Sabiduría de la multitud

Yearn Finance desarrolla productos que automatizan y tienen como objetivo simplificar la complejidad de las finanzas descentralizadas (DeFi) con "robots de dinero" que trabajan para maximizar los rendimientos por una tarifa. Yearn comenzó con un solo desarrollador de [Ethereum](https://www.gemini.com/cryptopedia/ethereum-smart-contracts-tokens-use-cases): [Andre Cronje](https://www.gemini.com/cryptopedia/glossary#andre-cronje), que buscó automatizar y optimizar sus propias devoluciones de DeFi. Ahora se ha convertido en una de las comunidades descentralizadas más activas y comprometidas en Ethereum con un enfoque en el desarrollo de formas cada vez más innovadoras para generar retornos.

Los robots de dinero se refieren a estrategias comerciales automatizadas ejecutadas por Yearn en plataformas DeFi basadas en Ethereum. Existen innumerables estrategias de inversión que se pueden implementar en un número creciente de protocolos DeFi. Por ejemplo, un robot de dinero de Yearn puede ganar tarifas comerciales en el [protocolo de la curva](https://www.gemini.com/cryptopedia/curve-crypto-automated-market-maker), pedir prestado dinero usando [préstamos flash de Aave](https://www.gemini.com/cryptopedia/aave-flashloans) y prestar activos a [Compuesto](https://www.gemini.com/cryptopedia/compound-finance-defi-crypto).

## Yearn.Finance: yVaults

Los productos más populares en el ecosistema de Yearn son [yVaults](https://www.gemini.com/cryptopedia/glossary#y-vaults), una serie de conjuntos de tokens que siguen una estrategia de inversión que se asigna a través de las plataformas DeFi. Depositar tokens en un yVault genera automáticamente un nuevo [yToken](https://www.gemini.com/cryptopedia/glossary#y-tokens), que es un tipo de [token de proveedor de liquidez (LP)](https://www.gemini.com/cryptopedia/liquidity-provider-amm-tokens). Los tokens LP se crean automáticamente cuando los tokens se depositan en un [grupo de liquidez](https://www.gemini.com/cryptopedia/glossary#liquidity-pool) y sirven como reclamo de los activos subyacentes de un grupo. Cada yToken se puede canjear en cualquier momento por los tokens depositados originalmente más cualquier recompensa acumulada mientras los tokens estaban funcionando en yVault.

Por ejemplo, puede depositar [GUSD](https://www.gemini.com/cryptopedia/gusd-gemini-dollar-stablecoin-features) en GUSD yVault y recibir el token LP llamado yGUSD. Cuando intercambia el yGUSD por el GUSD subyacente, recibe ese GUSD más cualquier ganancia o recompensa que el GUSD haya acumulado al usar la estrategia de yVault. YVaults de Yearn comprime capas complejas de aplicaciones y componentes DeFi en una estrategia comercial simplificada donde los inversores proporcionan activos y tienen un token para participar en una estrategia algorítmica sofisticada.

## Estudios de casos de estrategia de yVault: GUSD

Las estrategias de yVault son fluidas y la comunidad de Yearn puede decidir cambiar o ajustar una estrategia a medida que se vuelve menos rentable. En la estrategia yGUSD para octubre de 2020, que ya se modificó para optimizarla, la estrategia genera rendimiento para el titular de yGUSD a través de los siguientes pasos:

1. GUSD se deposita en un grupo de Curve compuesto por [stablecoins](https://www.gemini.com/cryptopedia/what-are-stablecoins-how-do-they-work) GUSD, [DAI](https://www.gemini.com/cryptopedia/dai-stablecoin-what-is-dai-token), USDC y USDT para ganar tarifas.
2. El token LP generado a partir del grupo de monedas estables se deposita en Curve para ganar el [token CRV](https://www.gemini.com/cryptopedia/glossary#crv-token).
3. El 90 % de los tokens CRV ganados se venden por DAI.
4. DAI se deposita nuevamente en el grupo original de monedas estables GUSD, DAI, USDC, USDT para ganar más tarifas.

Desde el punto de vista de un usuario, los pasos anteriores tienen lugar bajo el capó algorítmico. Esta estrategia de GUSD en sí es bastante simple en comparación con las estrategias de yVault más complejas y secuencialmente complicadas, que pueden implicar pedir dinero prestado, usar [apalancamiento](https://www.gemini.com/cryptopedia/glossary#leverage) y mantener la exposición a las fuerzas del mercado.

Por ejemplo, la bóveda YETH, que aún se encuentra en una etapa experimental a partir de diciembre de 2020 y aún no se ha lanzado por completo, utiliza [MakerDAO](https://www.gemini.com/cryptopedia/makerdao-defi-mkr-dai-coins) y protocolos Curve en su estrategia. Con la estrategia YETH, los titulares de ETH permanecen expuestos a la apreciación (o depreciación) del precio de ETH mientras obtienen rendimiento a través de los siguientes pasos:

1. ETH se deposita en MakerDAO como garantía.
2. El DAI se toma prestado de MakerDAO utilizando el ETH depositado como garantía.
3. El DAI prestado se deposita en la bóveda yDAI.
4. La bóveda yDAI deposita DAI en Curve para ganar comisiones.
5. El token LP generado a partir del grupo DAI se apuesta en Curve para ganar el token CRV.
6. Los tokens CRV se venden por ETH.
7. ETH se vuelve a depositar en MakerDAO como garantía.

Debido a que la bóveda de YETH toma prestado DAI de MakerDAO, existe el riesgo de ser liquidado, o de que el robot de dinero venda su ETH para pagar su préstamo de DAI. La liquidación se produce cuando el valor de la garantía ETH cae por debajo del umbral mínimo del 150 % del valor del DAI prestado. Para evitar la liquidación, el robot de dinero YETH tiene como objetivo mantener el valor de la garantía ETH en un 200% seguro en comparación con el valor de la deuda DAI. Si el valor de la garantía de ETH comienza a caer por debajo del objetivo del 200 %, el robot de dinero pagará automáticamente parte de la deuda de DAI para mantener el exceso de garantía. La gestión de la deuda, la garantía y la liquidación agrega una capa adicional de complejidad a las vaults de Yearn.

Es importante reconocer los compuestos de riesgo de la estrategia de yVault a medida que se vuelve más compleja en virtud de la dependencia de más protocolos y plataformas. Las estrategias como el ejemplo de YETH también tienen los riesgos inherentes al uso del apalancamiento, así como los riesgos de liquidación y falla del contrato inteligente.

## Variedad de productos DeFi

El conjunto de productos Yearn es un conjunto de productos DeFi en constante expansión y evolución. Además de las diversas estrategias de yVault, Yearn ofrece múltiples productos activos que juntos forman su ecosistema.

Otros productos de Yearn incluyen la aplicación yEarn, que se enfoca en usar monedas estables como DAI y ponerlas a trabajar en grupos de préstamos de alto interés en Compound o Aave. Otro producto, Zap, está diseñado para reducir los costos de transacción en Ethereum al combinar lo que habrían sido varias transacciones manuales en una transacción más compleja con un solo clic. La función yInsure proporciona un seguro para contratos inteligentes como salvaguarda en caso de una vulnerabilidad o falla en el código.

También hay una multitud de productos actualmente en la etapa de investigación y desarrollo, incluidos yTrade para operaciones de apalancamiento, yLiquidate para automatizar liquidaciones y yBorrow para préstamos. Hasta ahora, Yearn ha demostrado ser un terreno fértil para la investigación y el desarrollo, y es probable que sus ofertas de productos continúen expandiéndose a medida que madure el espacio DeFi. 

## Sabiduría de la multitud

Un robot de dinero de Yearn ejecuta un plan estratégico para la inversión de activos digitales: cómo asignarlos, dónde colocarlos, cuándo moverlos y cuándo venderlos. De hecho, cualquiera puede idear una nueva estrategia publicándola en el foro de gobierno de Yearn y explicando la lógica y los beneficios potenciales a la comunidad. Si la comunidad lo aprueba, la estrategia se implementará y el creador de la estrategia gana honorarios, beneficiándose de su estrategia exitosa.

Aunque el espacio DeFi presenta muchos mecanismos algorítmicos y automatizados en sus diversas plataformas, las estrategias de robots de dinero de Yearn son creadas e influenciadas por miembros de la comunidad. La administración de la comunidad de Yearn, distribuyó "[lanzamiento justo](https://www.gemini.com/cryptopedia/what-is-yearn-finance-yfi-coin-yearnfinance)" de sus muy escasos [tokens de gobierno de la plataforma YFI](https://www.gemini.com/cryptopedia/glossary#yfi-token) y la naturaleza colaborativa presentan un recordatorio oportuno del ingenio y la eficacia humanos, incluso en la era de los algoritmos automatizados. Con Yearn, las ideas pueden provenir de cualquier lugar y la sabiduría proviene de la multitud. La efectividad de esa sabiduría se prueba, itera y mejora constantemente en tiempo real con dinero real.

Yearn Finance presenta una propuesta única de estratificación, interoperabilidad y crowdsourcing en DeFi. Es un experimento en inversión automatizada y desarrollo de productos, en incentivos y coordinación. Y es un experimento para ver si una comunidad descentralizada con un amplio mandato para optimizar los rendimientos puede hacerlo de manera efectiva sin conflictos organizacionales. Si bien muchas plataformas DeFi se enfocan en desintermediar jugadores y sistemas heredados, la innovación de Yearn es actuar como un intermediario que reúne a la comunidad descentralizada y las plataformas dispares en beneficio de sus usuarios. 
