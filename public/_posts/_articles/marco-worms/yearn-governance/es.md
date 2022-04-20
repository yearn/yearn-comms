---
title:  "Explicación de la gobernanza de Yearn: propuestas, token $YFI y ejecución"
image:
  src: ./image1.jpg
  width: 900
  height: 482
date: '2022-04-19'
author: Marco_Worms
translator: RestlessMik3
---

![](./image1.jpg?w=900&h=482)

Cualquiera puede discutir o proponer ideas en Yearn's [Discord](https://discord.com/invite/6PNv2nF), [Twitter](https://twitter.com/iearnfinance), [Reddit](https://www.reddit.com/r/yearn_finance), [Pool of Ideas](https://yearnfinance.notion.site/yearnfinance/Pool-of-Ideas-d75383ade9154d8bb6163388c6c2b39b), [Telegram](https://t.me/yearnfinance/), y [Foro de Gobernanza](https://gov.yearn.finance/). A medida que maduran las propuestas, se convierte en un voto estructurado en el Foro de Gobernanza donde el [token YFI](https://www.coingecko.com/en/coins/yearn-finance) se usa como poder de voto.

- Los poseedores de tokens pueden votar en [La página de snapshots de Yearn](https://yearn.snapshot.page/#/), ¡no hay consumo de gas en la transacción de votación!
- También hay un [repositorio de gobierno retirado](https://docs.yearn.finance/contributing/governance/proposal-repository) que ahora no se usa pero se puede explorar para aprender sobre la historia de Yearn.

El tipo más común de propuestas en el foro son las Propuestas de mejora de Yearn (YIP), pero hay otros tipos cubiertos en la [implementación actual de la gobernanza de Yearn (YIP-61)](https://gov.yearn.finance/t/yip-61-gobernanza-2-0/10460):

- **Propuesta de mejora anual (YIP):** Una propuesta para ejecutar cualquier poder delegado a los titulares de YFI o fuera del alcance de los poderes enumerados
- **Propuesta de delegación de año (YDP):** Una propuesta para cambiar la forma en que un yTeam tiene poder sobre un alcance
- **Propuesta de Señalización de Año (YSP):** Una propuesta no vinculante para señalar los sentimientos o la intención de la comunidad sobre cualquier tema

### Alcance de la Gobernanza

[YIP-61](https://gov.yearn.finance/t/yip-61-governance-2-0/10460) determina cómo funciona actualmente la gobernanza de Yearn: [yTeams](https://gov.yearn.finance/t/yip-61-governance-2-0/10460#yteams-9) tienen autoridad delegada de los titulares de YFI para utilizar poderes limitados de forma autónoma. Tener YFI permite tener control sobre cómo se distribuye el poder entre los equipos, YFI otorga poder de voto exclusivo para aprobar o denegar cambios que cambian la dinámica de poder dentro del protocolo, como:

- Cambiar firmantes de Multisig o yTeams
- Ratificar yTeams
- Gastar Fondos del Tesoro
- Establecer tarifas de protocolo
- Cambiar contrato YFI

## Proceso del Foro de Gobernanza

Cualquiera puede crear una nueva propuesta en [Yearn Governance Forums](https://gov.yearn.finance/):

![](./image2.jpg?w=900&h=486)

### Plantilla de propuesta

Según lo establecido por [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959), aquí hay una forma estándar de escribir propuestas:

**Resumen**:
El resultado del cambio propuesto, escrito de manera no técnica y accesible.

- **Estado:** *(Este campo no es obligatorio pero ayuda a todos)*
    - **Discusión:** Esta propuesta se encuentra actualmente en fase de discusión. De acuerdo con nuestras reglas de votación descritas en YIP-55, estará en discusión durante al menos 3 días con una encuesta de foro no vinculante para medir el sentimiento antes de que se le pueda asignar un número de YIP y pasar a snapshot para una votación vinculante.
    - **Votación:** Esta propuesta se encuentra actualmente en la fase de votación. Emite tu voto en snapshot. Puede conocer nuestras reglas de votación en YIP-55
    - **Aprobada:** Esta propuesta fue aprobada el 25 de abril de 2021 a las 7:00 UTC con un 99,97 % de votos a favor.

**Resumen:**
Una breve descripción (~200 palabras) del cambio propuesto. Debe describir claramente lo que sucede si se aprueba la propuesta.

**Motivación:**
El problema actual que te hizo escribir la propuesta de cambio.

**Especificación:**
Una descripción larga de cómo esta propuesta resuelve el problema, debe describir cómo implementar el YIP

**Encuesta:**
Una dinámica de votación que se crea en el foro de gobierno para medir el sentimiento de la comunidad sobre la propuesta debe ser superior al 50 %.

### Discusión

Debe haber suficiente tiempo (al menos 3 días) de discusión para que los miembros de la comunidad puedan abordar la propuesta desde muchos ángulos. Utiliza la herramienta de encuesta integrada de Discourse para evaluar el sentimiento de la comunidad sobre la propuesta antes de realizar una votación formal; la encuesta debe tener al menos un 50 % de votos a favor.

![](./image3.jpg?w=900&h=351)

Lo ideal sería que las discusiones tomaran el tiempo necesario para aclarar lo que se propuso a la comunidad. Hablar con diferentes partes interesadas **antes** de proponer algo es una buena manera de medir el sentimiento y lo ayuda a presentar ideas complejas con un mejor apoyo desde el principio. Un ejemplo de propuesta con excelente discusión es [YIP-57](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319) que acuñó 6,666 tokens YFI más allá del suministro inicial de 30,000 y tuvo para alinear diferentes tipos de partes interesadas, desde miembros de DAO hasta grandes titulares de YFI.

### Votación

Después de pasar el paso de discusión, la propuesta se convierte en un YIP (o tal vez un YDP dependiendo de su contenido) y se someterá a la fase de votación. Para enviar un voto en [Página de snapshots de Yearn](https://yearn.snapshot.page/#/) debe tener al menos 1 $ YFI o pedirle a alguien que lo haga por ti, si la propuesta es sólida, esto no será una barrera. ¡Comuníquete con un moderador del foro para obtener un número oficial para el nuevo YIP!

El poder de voto corresponde 1:1 a cuánto $YFI tiene un votante. Entonces, una billetera con 10 $YFI tiene 10 veces más poder de voto que alguien con 1 $YFI.

La votación toma al menos 5 días y necesita más del 50 % de votos aprobatorios, no hay quórum a ser cumplido como se describe en [YIP-55](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959): "el requisito de quórum puede ser difícil de cuantificar y podría conducir a una reunión de votantes apáticos que consume mucho tiempo".

![](./image4.jpg?w=900&h=543)

Mantener o hacer staking de YFI en los siguientes lugares te permite votar:
- Tu billetera
- YFI yVault V2 (equivalente a tener el token yvYFI)
- Token LP YFI/WETH de Balancer  
- Token LP YFI/WETH de Uniswap  
- Token LP YFI/WETH de Sushiswap en staking en MasterChef
- YFI como colateral en MakerDAO 
- YFI como colateral en Unit Protocol
- Bancor

### Concluir y ejecutar

Si la votación ha pasado con más del 50% de los votos, Yearn DAO debe ejecutarla. La forma en que [Yearn DAO](https://yearnfinance.notion.site/yearnfinance/Welcome-to-Yearn-Finance-26d6c4210e3e405c9f02f84ba567a249) funciona no es como una empresa de comando y control de arriba hacia abajo, por lo que no hará cumplir ni obligará un equipo o cualquier individuo para ejecutar la propuesta. El DAO se asegurará de que se establezcan los incentivos correctos para que se ejecute la propuesta (por ejemplo, asignar el tesoro para pagar el trabajo realizado por los contribuyentes)

Recientemente se aprobaron 2 YIP y Yearn los está ejecutando mientras escribo esto:

- [YIP-65: Tokenomics de YFI en evolución](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Optimización de la compensación de los contribuyentes](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)

## Lanzamiento justo de YFI

![](./image5.jpg?w=900&h=228)

[Andre Cronje](https://medium.com/@andrecronje) fue el primer constructor de Yearn y lo que provocó se convirtió en una DAO con más de 200 participantes activos. Esto solo es posible que exista como está hoy porque Cronje entregó cada centímetro de poder que tenía sobre el protocolo, y la forma en que lo hizo fue a través de YFI. Quien haya usado los servicios y el ecosistema de Yearn en los primeros días recibió este poder, y puedes encontrar información sobre cómo sucedió este proceso en las publicaciones de Cronje:

1) [YFI](https://medium.com/iearn/yfi-df84573db81) (Ganar YFI es simple, proporciona liquidez a una de las plataformas)
2) [Ganando YFI en curve.fi/y](https://medium.com/iearn/earning-yfi-y-curve-fi-53b5fd347f0f) (Obtén YFI proporcionando liquidez a Curve)
3) [Grupo de recompensas de YFI](https://medium.com/iearn/yfi-rewards-pool-810ef9256ec6) (Grupo de recompensas por quemar YFI)
4) [Grupo #3 Governanza Meta Rendimiento](https://medium.com/iearn/pool-3-meta-yield-governance-58f68e6d2f19) (Pool que recompensó muchas cosas, incluida la participación en la gobernanza)

## Recursos adicionales

Si está buscando inspiración para hacer una propuesta, puede echar un vistazo a los siguientes YIP que tuvieron una discusión extensa y cambiaron la dinámica de poder dentro del protocolo:

- [YIP 32: Eliminar la quema de YFI](https://gov.yearn.finance/t/yip-32-remove-yfi-burning/1907)
- [YIP 36: Recompensas del sistema como capital operativo](https://gov.yearn.finance/t/yip-36-system-rewards-as-operational-capital/2311)
- [YIP 41: Empoderar temporalmente el Multisig](https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630/2)
- [YIP-51: Establecer estructura de tarifas de Vault v2](https://gov.yearn.finance/t/yip-51-set-vault-v2-fee-structure/7752)
- [YIP-52: Hacer socios a los estrategas haciendo que tengan piel en el juego por sacar beneficio del glorioso cerebro de Yearn](https://gov.yearn.finance/t/yip-52-make-strategist-skin-in-game-partner-for-make-benefit-of-glorious-brain-of-yearn/7856)
- [YIP-54: Formalizar Financiamiento de Operaciones](https://gov.yearn.finance/t/yip-54-formalize-operations-funding/7956)
- [YIP-55: Formalizar el proceso YIP](https://gov.yearn.finance/t/yip-55-formalize-the-yip-process/7959)
- [YIP-56: Recompra y construcción](https://gov.yearn.finance/t/yip-56-buyback-and-build/8929)
- [YIP-57: Financiamiento del futuro de Yearn](https://gov.yearn.finance/t/yip-57-funding-yearns-future/9319)
- [YIP-61: Gobernanza 2.0](https://gov.yearn.finance/t/yip-61-governance-2-0/10460)
- [YIP-65: Tokenomics de YFI en evolución](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994)
- [YIP-66: Optimización de la compensación de los contribuyentes](https://gov.yearn.finance/t/yip-66-streamlining-contributor-compensation/12247)
