---
title:  "Recompensas de minería de liquidez v2"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
date: '2021-08-15'
author: Andre
translator: RestlessMik3
---

# Recompensas de minería de liquidez v2

Concepto y arquitectura por [pods.finance](https://www.pods.finance/)

[Contrato de recompensas de opción de compra de LM](https://twitter.com/AndreCronjeTech/status/1426580528510251008)

## **Historia**

Minería de liquidez / Recompensas / Incentivos, como quieras llamarlos, son parte innata de las criptomonedas. Incluso la prueba de trabajo (minería) proporciona algo a cambio de recompensas (en prueba de trabajo, proporciona seguridad \[o más bien electricidad\] para cripto)

El primero (que yo sepa) en proporcionar recompensas por liquidez fue [synthetix.io](https://synthetix.io/), esto comenzó con el grupo `sETH/ETH`, que eventualmente se movió a `sUSD` [curve.fi](https://curve.fi/) grupo. Si proporcionó liquidez a estos grupos, fue recompensado con SNX (el token Synthetix nativo).

El contrato algo legendario [StakingRewards](https://github.com/Synthetixio/synthetix/blob/develop/contracts/StakingRewards.sol), se desarrolló originalmente en asociación con Anton de [1inch.exchange](https://1inch.exchange/). Este contrato se convirtió en la base de lo que es la minería de liquidez tal como la conocemos hoy.

## **Planteamiento del problema**

A medida que crecía la minería de liquidez, se hicieron evidentes algunas fallas que no rompían los acuerdos. Creo que los dos siguientes son los más desestresantes;

- Langostas de liquidez (o lealtad), también denominada "pegajosidad"
- Lealtad simbólica o dumping oportunista

La liquidez desaparece rápidamente cuando cesan los incentivos, y los programas de liquidez agresivos a menudo pueden tener un detrimento en el precio del token, lo cual, aunque creo que este último no es necesariamente algo malo (ya que depende completamente de la tokenómica/propósito), desde la percepción pública , está claro, cuando el precio baja, un proyecto es una estafa.

## **Ejemplo de problema**

Creo que, en esencia, el problema es el problema de "algo por nada". Si recibe algo a cambio de nada, simplemente depositará sus ganancias en el banco. Tomemos [curve.fi](https://curve.fi/) como un ejemplo práctico, si proporciona liquidez en forma de DAI/USDC/USDT a 3pool, recibe recompensas CRV. Por el bien de este ejemplo, supongamos que el proveedor de liquidez es una langosta de liquidez, por lo que solo está interesado en recibir CRV y venderlo inmediatamente por más DAI/USDC/USDT.

La razón de esto, es que recibieron "algo" por prácticamente "nada". Proporcione liquidez, obtenga recompensas, así de simple.

## **Introducción rápida a las opciones**

Tratando de mantener esto simple, hay dos opciones, una 'VENTA o PUT' (el derecho a vender) y una 'CALL' (el derecho a comprar). En este caso, puede pensar en una 'VENTA' como una venta de mercado y una 'CALL' como una compra de mercado. Entonces, continuando con el uso de CRV, para simplificar, digamos que CRV se cotiza a 2$. Una opción de 'CALL' con un 'precio de ejercicio' de 2$ me permitiría comprar CRV a 2$, una opción de 'VENTA' con un 'precio de ejercicio' de 2$ me permitiría vender CRV a 2$.

Para el resto de este artículo, solo nos centraremos en CALL, el derecho a comprar. Entonces, una opción tiene 3 propiedades básicas;

- ¿Qué estás comprando? (En nuestro ejemplo CRV)
- ¿Qué es el `precio de ejercicio`? (también conocido como, ¿cuánto está pagando por él? En nuestro ejemplo, 2$ ~ o 2 DAI)
- ¿Cuándo es el 'caducidad'? (normalmente alguna fecha futura, en nuestro ejemplo, la caducidad era `marca de tiempo actual/ahora`)

## **Minería de liquidez como opciones**

Siguiendo con nuestro ejemplo de [curve.fi](https://curve.fi/), si proporciona liquidez y reclama CRV como recompensa, esto puede verse como el ejercicio de una opción CRV CALL con `precio de ejercicio` 0$, y ` vencimiento` ahora. Cuando comienzas a pensar en términos de opciones de CALL, de repente le da al proyecto mucho más poder, por ejemplo, ahora un proyecto podría ofrecerlo como;

- precio de ejercicio = spot - 50%
- caducidad = fecha actual + 1 mes

En su nivel más básico, podríamos decir simplemente, `vencimiento` = ahora y `precio de ejercicio` = spot - 50%, ¿qué significaría esto? Digamos que el minero de liquidez, extrajo 1000 CRV, en lugar de simplemente recibir la opción CRV CALL a un 'precio de ejercicio' 0$ y 'caducan' ahora (1000 tokens gratis), ahora recibirían el derecho a comprar 1000 CRV a 1000$. Incluso si son una langosta de liquidez, aún estarían incentivados para hacer esto, ya que aún obtienen una ganancia de 1000$ (valor comercial 1000 CRV @ 2$ = 2000$ -  1000$ de compra).

Las "ganancias" (1000$ en el ejemplo anterior), ahora se pueden distribuir a los titulares de veCRV, o ir a la fundación, tesorería DAO, etc. Estos fondos podrían incluso usarse para crear mercado y proporcionar liquidez adicional.

Ahora, demos un paso más y agreguemos un vencimiento futuro, digamos 1 mes, ahora por el bien del argumento, todos los que estaban recibiendo liquidez estaban reclamando y vendiendo, por lo que 1 mes después el precio es 1$, pero el precio de la opción CALL era también 1$, por lo que en este punto, no hay razón para que el "desechador o dumper" reclame la opción, ya que no obtendría ganancias adicionales. Entonces, esto significa además que estableció un precio mínimo adicional para los tokens recibidos. Como estos tokens simplemente no se reclamarán (incluso se pueden devolver a la DAO)

## **Conclusión**

Hacer algunas modificaciones simples al contrato de StakingRewards existente nos permite agregar la funcionalidad anterior, manteniendo la misma UX y experiencia de usuario.

Código prototipo disponible [aquí](https://gist.github.com/andrecronje/6c3da8b294488001adeda528f70bc301)

Al cambiar a opciones de minería de liquidez en lugar de la minería de liquidez tradicional, significa;

- Disminución de langostas de liquidez
- Disminuir la presión de venta.
- Precio mínimo natural (twap - % de descuento sobre la época)
- Ingresos por tarifas adicionales para titulares de tokens/DAO

## **Atribución**

Gracias al equipo de [pods.finance](https://www.pods.finance/), @josephdelong y [sushi.com](https://sushi.com/) por idear este concepto y compartirlo conmigo.
