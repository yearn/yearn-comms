---
title: "¿Qué puedo hacer con YFI?"
image:
  src: ./cover.png
  width: 768
  height: 429
date: '2021-05-05'
author: Dark Ghosty
translator: RestlessMik3
---

# ¿Qué puedo hacer con YFI?

En este artículo, hablamos sobre las cosas que se pueden realizar con YFI para generar rentabilidad en [DeFi](https://www.coindesk.com/what-is-defi), que riesgos están asociados con cada opción, y la rentabilidad aproximada que puedes obtener.

- Los APYs han sido calculados desde el 27 de abril.
- Todas las posiciones que requieren de un préstamo se calculan asumiendo que se realizó el préstamo al 70% del ratio máximo para poder resistir una deducción del precio de YFI de 30%.
- Esto no es asesoría financiera. Interactuar con protocolos de Defi es **riesgoso**, por favor realiza tus propias investigaciones.

___

## **Antes de que empieces, considera asegurar tu YFI con una póliza de seguros de Defi**

Una nota sobre cómo funcionan los seguros de Defi. Los seguros de Defi mayormente cubren para errores en el código de solidity que conlleve una pérdida material de fondos para ese protocolo específico. Asegúrate de leer cuidadosamente la documentación de cada seguro de Defi para conocer qué cubren y qué no.

Por ejemplo, digamos que alguien tiene un seguro para una vault de Yearn, pero hubo un error en el código de MakerDAO y el CDP de la vault pierde parte de los fondos debido a esto. Debido a que esta persona tiene seguro en Yearn, no podría reclamar sus pérdidas y su seguro no le pagaría en este caso. Esto es debido a que no ha sido un error en el contrato inteligente de Yearn. Para más información sobre estos seguros, siéntete libre de preguntar en nuestro [discord](discord.yearn.finance) en #support.

### **Proveedores de cobertura de Defi**

- [Nexus Mutual](https://app.nexusmutual.io/#/SmartContractCover)
    - [Documentación](https://nexusmutual.gitbook.io/docs/)

___

## ***Depósitos directos***

Esta sección se enfoca en las formas de usar YFI por si mismo. Métodos alternativos de generación de rendimiento, como proveer liquidez a un exchange descentralizado [automated market maker (AMM)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers)  . Esto podría requerir hacer un  par de YFI con otro token que podría comprometer tu exposición completa a YFI. Esto no es libre de riesgo pero no tendrás que exponerte a [pérdidas impermanentes (IL)](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi). *Tener fondos en un contrato inteligente siempre conlleva riesgos.*

### Yearn: yVault YFI v2

Las yVaults YFI v2 permiten depositar YFI, sentarte y relajarte mientras genera rendimiento para ti en los lugares óptimos para hacerlo. Al momento de escribir el código de la vault se abre un CDP y utiliza el DAI creado para farmear. Además, la yVault presta YFI a CREAM y AAVE para mayor rendimiento.

#### Web

- [Yearn.Finance](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)

#### Herramientas

- [Hub de Yearn](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Este enlace te mostrará cuanto de los fondos están expuestos a las distintas vaults.
- [Vaults de Yearn](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3): Aquí podrás ver lo que hace cada estrategia de la Yvault YFI v2.
- [Visión de Yearn](yearn.vision): Cuadros de mando para las estadísticas de las vaults.
- [Haz Zap directo a las yVault YFI v2 ](https://zapper.fi/invest?protocol=yearn&contractAddress=0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1&modal=invest)

#### Riesgos

Actualmente los riesgos asociados a esta vault son riesgos asociados a el contrato inteligente (los cuales están [auditados](https://github.com/yearn/yearn-security/tree/master/audits)),riesgos de ls CDP de MakerDAO, y como la estrategia presta YFI a CREAM y AAVE para generar rendimiento adicional, riesgo de contrato para esas dos plataformas tambien. La vault tiene monitorizaciones para sus riesgos de CDP y mantiene un [ratio saludable](https://medium.com/iearn/delegated-vaults-explained-fa81f1c3fce2) de los 3, lo que quiere decir que solo creará 1/3 del máximo disponible para ser creado en DAI para farmear.

#### Seguros

En este momento para estar completamente asegurado en la vault YFI v2, tendrías que tener cobertura para Yearn, MakerDAO y Cream. Puedes ser selectivo con respecto a cuál cobertura comprar y solo pagar por cobertura en los protocolos que consideres riesgosos. Puedes ver con cuales protocolos interactua esta vault en el [hub de yearn](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1).

#### APY

- APY: 2.866%
- Cálculos: Neto del mes pasado anualizado.
- Fuente: [vaults.finance: yearn v2 API](https://vaults.finance/all)
- Nota: El APY alcanzó un pico de 24% por un momento.

Esta vault es la más actualizada de las vaults del equipo de Yearn y ha sido probado que puede saltar a nuevas farms de Yearn para obtener mejor rendimiento cuando sean seguras para ser utilizadas. Recientemente lo hizo con la farm de BDP: Big Data Protocol.

- [Yearn.Finance: Vault YFI ](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): La página de Vaults de Yearn muestra el APY de forma semanal y mensual calculada en función a una fórmula.

___

## ***Posible pérdida impermanente (IL) en depósitos directos***

Algunas técnicas generadoras de rendimiento están diseñadas para reducir el riesgo de IL pero no lo eliminan del todo. Un ejemplo es proveer liquidez al protocolo de Bancor. Si los fondos se mantienen 100 días, y son expuestos a IL, ellos podrán subsidiarlo con BNT en el momento del retiro por el valor equivalente de la pérdida (El usuario es libre de convertirlo a YFI de nuevo). En la práctica, esto significa que no tienes que preocuparte por la pérdida impermanente (IL) si haces staking por más de 100 días.

### Bancor: Pool protegida de un solo lado (YFI/BNT)

Bancor es un AMM como Sushiswap o Uniswap pero con una diferencia clave que ha sido desplegada en Bancor v2.1. Bancor tiene ahora protección contra IL *si* te mantienes en el pool por más de 100 días. Esta protección empieza a los 30 días y escala hasta la protección completa en 100 días. Actualmente las recompensas incentivadas de la pool de YFI están desactividadas pero hay una [propuesta](https://gov.bancor.network/t/proposal-re-enable-lm-rewards-on-yfi/1838) para traerlas de vuelta, y si se aprueba, significará que el pool de YFI tendrá una rentabilidad mayor.

#### Web

[Pool de YFI en Bancor](https://app.bancor.network/eth/portfolio/stake/add/single/0xAeB3a1AeD77b5D6e3feBA0055d79176532e5cEb8)

#### Herramientas

- [Guía para Bancor v2.1 de Ceazor: Pool protegida de un solo lado (YFI/BNT)](https://youtu.be/LhLMhizDNwE?t=23)
- [Documentación de Bancor](https://docs.bancor.network/)
- [Cuadro de mando Dune de Bancor](https://duneanalytics.com/Bancor/bancor_1)
- [Stacking en Bancor v2.1 para tontos (de DeFi)](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e)
- [Zap directo a la pool protegida de un solo lado (YFI/BNT)](https://zapper.fi/invest?protocol=bancor&contractAddress=0x555981b82743aa443cb1c3002c85ba9d795d4596&modal=legacy-invest)

#### Riesgos

Riesgo de contrato inteligente de Bancor y confiando en el [modelo Bancor v2.1](https://blog.bancor.network/proposing-bancor-v2-1-single-sided-amm-with-elastic-bnt-supply-bcac9fe655b). Bancor es [auditado](https://docs.bancor.network/ethereum-contracts/security).

##### Seguros

Solo necesitas asegurar Bancor para asegurarte en Defi y tener cobertura completa en caso de un error en el contrato inteligente que conlleve pérdidas en los fondos.

#### APY

- APY: 3.7%
- Cálculos: Mes pasado anualizado.
- Fuente: Equipo de Bancor
- [YFI Pool APY](https://duneanalytics.com/queries/30793/62118): Haz clic en cada pool hasta que solo quede YFI, de esta manera se mostrará las APY para esta pool.

___

## ***[Posición de deuda colateralizada](https://defipulse.com/blog/what-is-a-cdp)***

Protocolos basados en CDP te permiten depositar YFI a cambio de una cantidad menor de un token creado por el protocolo, habitualmente una moneda estable. De esta manera puedes usar dicho token para farmear y generar rentabilidad. usando este método es más demandante en tiempo que otros y requiere monitoreo constante del CDP para asegurarte de que estás sobre el ratio de liquidación. Además requiere utilizar las monedas estables creadas para obtener rentabilidad en otro sitio con las gestiones adicionales que conlleva.

En esta sección, utilizamos el ratio de colateral el cual es un porcentaje. Esto significa que si el ratio es 69%, como en el caso de Unit Protocol, entonces el precio de tu YFI depositado para crear monedas estables está valorado en 1000$, por lo que el máximo a crear en monedas estables será de 690$. Nótese que es el *Máximo* que podrás tomar prestado y si va por encima del ratio serás liquidado -- sugerimos que tomes prestado mucho menos para que esto no te pase.

### MakerDAO

MakerDAO es la dapp más antigua y con mayor recorrido en la cual puedes tomar un préstamo en criptomonedas. Puedes usar tu YFI en MakerDAO para crear la moneda estable DAI y utilizarla para generar rendimiento.

#### Web

- [Oasis.app](https://oasis.app/borrow)

#### Herramientas

- [DeFiSaver](https://app.defisaver.com/): help manage your CDP health ratio

#### Riesgos

Riesgo de liquidación si tu CDP llega por debajo del ratio de colateral del 57%, riesgo de contrato inteligente de MakerDAO, riesgo de fallo de oráculo y riesgo del contrato inteligente donde deposites el DAI.

#### Seguros

Para seguro de Defi, tendrás que asegurar MakerDAO así como el protocolo donde vayas a utilizar los DAI creados para generar rendimiento de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: -5.5% + (21.07% * 0.44) = 3.7708%
- Cálculos: Fee de Dai - (APY de generación de rendimiento de moneda estable (Has Zap directo a la yVault crvIB v2) * % de DAI que puedes crear estando seguro).
- Notas: Para tomar prestado DAI tendrás que pagar 5.5% de fee anual a MakerDAO. Esto es un ejemplo pero puedes farmear donde quieras.
- Fuente: [Préstamos en Oasis App - Selecciona el tipo de colateral YFI-A](https://oasis.app/borrow)

### Unit Protocol

Unit Protocol es una plataforma de CDP similar a MakerDAO, a excepción que este te permite crear la moneda estable USDP y no DAI. Con Unit el ratio de colateral es de 69% lo cual es mayor que el de MakerDAO y, aunque han sido auditados, son una plataforma más reciente.

#### Web

- [Unit Protocol](https://unit.xyz/)

#### Herramientas

- [Documentación](https://docs.unit.xyz/)
- [Vídeo Tutorial de Ceazor](https://youtu.be/zlFBeoTHJUs?t=33)

#### Riesgos

Riesgo de liquidación si excedes el ratio de colateral del 69%, riesgo de contrato inteligente de Unit Protocol, riesgo de fallo de oráculo y riesgo del contrato inteligente donde deposites el USDP. Puedes encontrar sus auditorias [Aquí](https://github.com/unitprotocol/protocol_docs).

#### Seguros

Para seguro de Defi, tendrás que asegurar Unit Protocol así como el protocolo donde vayas a utilizar los USDP creados para generar rendimiento de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: -5.5% + (21.07% * 0.53)  = 5.67%
- Cálculos: 5.5 fee anual de Unit + (rendimiento por utilizar la [yVault crvIB v2](https://yearn.finance/vaults/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7) * % de USDP que puedes crear estando seguro).
- Nota: Esto es un ejemplo pero puedes farmear donde quieras.
- Fuente: [ Unit Protocol](https://unit.xyz/asset/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)

___

## ***Prestar y tomar prestado***

En esta sección cubrimos las plataformas que te permiten prestar tu YFI o bien utilizar tu YFI como colateral para tomar prestadas monedas estables o otros tokens los cuales puedes utilizar para farmear. Esto conlleva una tarifa porcentual anual variable a diferencia de abrir un CDP que te permite la creación de monedas estables con un porcentaje fijo anual. En esta categoría debes prestar atención no solo a donde prestar las monedas que has tomado prestadas sino también a los porcentajes de las tarifas en ambos casos así como la tarifa porcentual por la utilización de la pool de préstamos. Si la pool de YFI donde estás prestando tu YFI está completamente vacía, significa que tendrás que esperar a que haya liquidez para retirar tu YFI.

### Cream Finance

Cream.Finance es un protocolo de préstamos descentralizado. Puedes tomar prestadas monedas estables con tu YFI como colateral hasta por un 50% del total colateralizado.

#### Web

- [Cream.Finance](https://app.cream.finance)

#### Tools

- [Documentación Cream ](https://docs.cream.finance/)
- [Video Tutorial de Ceazor: Cobrar por tomar prestado para prestar](https://youtu.be/AJx_TH3CMZc?t=598)

#### Riesgos

Riesgo de liquidación si excedes el ratio de colateral del 50%, riesgo de contrato inteligente de Cream Finance, riesgo de fallo de oráculo y riesgo del contrato inteligente donde prestes o deposites tus monedas estables. Además deberás revisar de forma manual que el APY de tu farmeo exceda el APY del préstamo tomado de manera de no perder dinero. Puedes encontrar la auditoría [Aquí](https://docs.cream.finance/audit-report).

#### Seguros

Para un seguro de Defi, tendrás que asegurar Cream.Finance así como el protocolo donde vayas a prestar tus DAI de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: 0.27% - 18.81% + (60.30% * .39) = 4.977%.
- Cálculos: APY Suministro (YFI) - APY préstamo (USDC) + (APY farmeo de rendimiento con de moneda estable (Zap a yVault crvEURS v1) * % de moneda estable que puedas tomar prestadas estando a salvo).
- Nota: Esto es un ejemplo, puedes farmear donde prefieras.
- Fuente: [Cream](https://app.cream.finance) y [Yearn](https://yearn.finance/vaults/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC) Yields.

### Iron Bank

El Iron Bank es como Cream v1, pero son más selectivos con los activos que listan y permiten a los protocolos filtrados, como Alpha Homora v2 y Yearn Finance, tomar prestados fondos con poco o ningún colateral. Debido a esto las tarifas suelen ser más altas que en CREAM o AAVE.

#### Web

- [Iron Bank](https://v1.yearn.finance/lending)

#### Herramientas

- [Documentación de Iron Bank](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

#### Riesgos

Riesgo de liquidación si superas el ratio de colateral, riesgo de contrato inteligente de Iron Bank, fallo de Oráculo, y riesgo de fallo de contrato inteligente de donde tomaste las monedas estables prestadas. Encontrarás la auditoría [Aquí](https://github.com/trailofbits/publications/blob/master/reviews/CREAMSummary.pdf).

#### Seguros

Para un seguro de Defi, tendrás que asegurar Ironbank así como el protocolo donde vayas a prestar las monedas estables de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY:
- Cálculos:
- Source:
- Nota: Actualmente no puedes tomar prestado con YFI como colateral en Ironbank pero esto puede cambiar en el futuro.

### AAVE

AAVE es otro sitio donde puedes tomar un préstamo con tu YFI. Puedes tomar prestado hasta un 40% en otras monedas en AAVE. AAVE tiene tanto tarifas fijas como variables para el préstamo de monedas estables, mientras en MakerDAO y Unit es del 5.5%. Es posible obtener mejores tarifas en AAVE para obtener monedas estables pero tienes que vigilar el nivel de colateral y tarifa de préstamo.

#### Web

- [AAVE](https://app.aave.com/)

#### Herramientas

- [Video Tutorial de Ceazor : AAVE v2](https://youtu.be/eMP_uIwniHc?t=46)
- [Video Tutorial de Ceazor: Cobrar por tomar prestado para prestar](https://youtu.be/AJx_TH3CMZc?t=407)

#### Riesgos

Riesgo de liquidación si superas el 40% del ratio de colateral, riesgo de contrato inteligente de AAVE, fallo de Oráculo (utiliza Chainlink), y riesgo de fallo de contrato inteligente del protocolo donde prestaste las monedas estables. Encontrarás la auditoría [Aquí](https://docs.aave.com/developers/security-and-audits).

#### Seguros

Para un seguro de Defi, tendrás que asegurar AAVE así como el protocolo donde vayas a prestar las monedas estables de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: 0.11% - 3.98% + (60.30% * .31) = 14.83%
- Cálculos: Supply APY (YFI) - Borrow APY (TUSD) + (Stablecoin Yield Farm APY (Zap to v1 crvEURS yVault) * % of stablecoin you can borrow and be safe)
- Nota: Esto es un ejemplo pero puedes prestar donde quieras y obtengas mayor rentabilidad.
- Fuente: [AAVE - YFI](https://app.aave.com/deposit/YFI-0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5)

___

## ***Proveer liquidez***

Esta sección discute estrategias que te exponen a pérdidas impermanentes, además deberás proveer liquidez a ambos lados de la pool del AMM. **si quieres hacer staking de YFI, deberás agregar un importe equivalente en dólares de ETH.**

###  Pool YFI/WETH de Sushiswap

Sushiswap es un AMM que generalmente tiene mejores rendimientos que Uniswap y sus pools están subsidiados con recompensas de Sushi.

#### Web

- [Sushiswap](https://app.sushi.com/yield)

#### Herramientas

- [Sushi pools de YFI](https://analytics.sushi.com/tokens/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)
- [apy.vision Sushi pools de YFI/ETH](https://app.apy.vision/pools/sushiswap_eth-YFI-WETH-pool-0x088ee5007c98a9677165d78dd2109ae4a3d04d0c)
- [Haz Zap directo a la pool YFI/WETH de Sushiswap](https://zapper.fi/invest?protocol=sushiswap&contractAddress=0x088ee5007c98a9677165d78dd2109ae4a3d04d0c&modal=invest)

#### Riesgos

Pérdidas impermanentes y riesgo de contrato inteligente de Sushiswap.

#### Seguros

Para un seguro de Defi, solo tendrás que asegurar Sushiswap de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: 39.08%
- Calculation: Yearly APY from staking your YFI/WETH sushi SLP token at sushi.
- Source: [Sushiswap Yield](https://app.sushi.com/yield)

### Uniswap v2 YFI/WETH Pool

Generalmente en AMM como Uniswap, Bancor y Sushiswap, quieres estar en las pools con mayor volumen ya que esto significa más fees para los proveedores de liquidez. De media Sushiswap tiene mayor liquidez que Uniswap, por lo que generalmente es mejor proveer liquidez ahí pero Uniswap tiene mejores rendimientos que Sushiswap.

#### Web

- [Uniswap YFI/WETH Pool](https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e)

#### Herramientas

- [Zapper Uni YFI/WETH](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)
- [Calculadora de pérdidas impermanentes para el par YFI/WETH](https://app.sommelier.finance/pair?id=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&timeWindow=total): Esto podrá ayudarte a saber cuanto ganarás o perderá si has empezado a proveer liquidez en esta pool en cierta fecha.
- [Analytics del par YFI/WETH en Uniswap](https://info.uniswap.org/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Apy.vision YFI/WETH](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Zap al par YFI/WETH en Uniswap v2](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)

#### Riesgos

Debes estar atento a las pérdidas impermanentes y riesgo de contrato inteligente al proveer liquidez en Uniswap.

#### Seguros

Para un seguro de Defi, tendrás que asegurar Uniswap de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: 20.79%
- Cálculos: últimos 30 días anualizados al substraer la pérdida impermanente. 
- Fuente: [apy.vision](https://app.apy.vision/pools/uniswap_eth-YFI-WETH-pool-0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)

### Jar pSUSHI YFI/WETH de Pickle.Finance

Pickle es un tipo de vault similar a las de Yearn llamadas "Jars" que te permiten hacer auto-compuestos de las recompensas de la pool YFI/WETH de Sushi y te recompensa con Pickle por hacer staking con ellos.

Para depositar con Pickle.Finance necesitas hacer stake de tus SLP (Token LP de Sushiswap) en las jars de Pickle [Aquí](https://app.pickle.finance/jars) y luego depositarlos en su farm [Aquí](https://app.pickle.finance/farms). En este punto puedes bloquear PICKLE y obtener DILL, potenciando tus recompensas obtenidas hasta en 2.5x.

#### Web

- [Farm de Pickle.Finance](https://app.pickle.finance/farms)
- [Jar de Pickle.Finance](https://app.pickle.finance/jars)

#### Herramientas

- [Calculadora de potenciador de Dill](https://app.pickle.finance/dill)
- [Tutorial de Ceazor: Haz Zap en Yearn a la farm yveCRV-ETH de Pickle](https://youtu.be/Q3HELI9TfjQ?t=25)

#### Riesgos

Pérdidas impermanentes en la posición LP de Sushiswap y riesgo de contrato inteligente tanto en Pickle.Finance como Sushiswap.

#### Seguros

Para un seguro de Defi, tendrás que asegurar tanto Sushiswap como Pickle.Finance de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: 43% sin potenciador, 58% con potenciador.
- Cálculos: APY, tomando en cuenta el potenciador de bloquear PICKLE por DILL.
- Fuente: [Farms de Pickle.Finance](https://app.pickle.finance/farms)

___

## ***Proveer liquidez con apalancamiento***

En esta sección puedes estar sujeto a pérdidas impermanentes y deberás vigilar los ratos de deuda para no ser liquidado.

### Alpha Homora v2

Alpha Homora v2 permite depositar tus tokens LP de Uniswap o Sushiswap para farmear con hasta hasta 1.75x de apalacamiento. Con Alpha Homora puedes farmear estos pools con un solo activo (básicamente hace Zap automatico a el otro activo de la pool), ellos automatizan todos los pasos con 3 transacciones y los tokens farmeados son auto-compuestos como en el caso de pickle.finance. De la misma manera que pickle.finance te da Pickle si utilizas sus farms, si usas apalancamiento para farmear pools de AMM (Uniswap o Sushiswap). Alpha Homora te dará ALPHA encima de los rendimientos que recibirias normalmente, como podrás ver [Aquí](https://alphafinancelab.gitbook.io/alpha-homora/where-does-apy-come-from-for-each-pool).

#### Web

- [Alpha Finance](https://homora.alphafinance.io/farm)

#### Herramientas

- [Documentación](https://alphafinancelab.gitbook.io/alpha-homora/)
- [Video Tutorial de Ceazor](https://youtu.be/WKW8TsTyGOg?t=41)

#### Riesgos

Riesgo de liquidación si superas el 60% del LTV (Relación prestamos/valor), riesgo de contrato inteligente de Alpha Homora v2 y riesgo de fallo de contrato inteligente del protocolo que estás apalancando (Uniswap o Sushiswap). Encontrarás la auditoría [Aquí](https://github.com/peckshield/publications/blob/master/reviews/PeckShield-Security-Review-Alpha-Homora-v1.0.pdf).

#### Seguros

Para un seguro de Defi, tendrás que asegurar tanto Alpha Finance como el AMM que estés utilizando de manera de tener cobertura total en caso de pérdida de fondos por error en el contrato inteligente.

#### APY

- APY: 75.38%
- Cálculos: Calculado con 1.5x del apalancamiento en el pool ETH/YFI de Sushi.
- Fuente: [Farm de Alpha Homora](https://homora.alphafinance.io/farm)
