---
title:  "Servicios Web3 de alojamiento propio"
image:
  src: ./image1.jpg
  width: 1400
  height: 702
date: '2022-03-31'
author: Marco_Worms
translator: RestlessMik3
---

![](./image1.jpg?w=1400&h=702)

Web3 ha traído una nueva forma de comunicarse con las aplicaciones: las aplicaciones ya no están alojadas en proveedores de servidores centralizados, sino en cadenas de bloques, que son sistemas descentralizados. Las aplicaciones construidas sobre bases descentralizadas son resistentes al tiempo de inactividad y la censura, pero hay un problema: servir la interfaz de la aplicación a los usuarios que usan el navegador web a menudo depende de entidades centralizadas.

En este artículo, aprenderemos a autohospedar las interfaces de las aplicaciones para los servicios cripto principales y de Yearn, por lo que si los sitios web oficiales están caídos por algún motivo, ¡puedes servir el sitio web por ti mismo ya que la cadena de bloques nunca está caída!

## Back-end, Front-end, Web3!

Una introducción rápida a estos conceptos.:

- **Front-end** es el nombre que se le da a la parte de la aplicación que ve el usuario, como un sitio web o una aplicación móvil.
- **Back-end** es el nombre que se le da a la parte de la aplicación que el usuario no ve. Muchas acciones de front-end dependen del back-end para ser procesadas.

En Web3, la cadena de bloques logra descentralizar el back-end, pero el front-end seguirá brindándose al usuario mediante el método centralizado predeterminado:

- El usuario solicita al navegador que vaya a una página (ejemplo http://yearn.finance)
- El navegador solicita DNS para la IP de esta dirección (13.227.124.73)
- El navegador solicita los archivos para la IP

Y si ocurre alguno de estos dos:

**El DNS no resuelve su dominio en una dirección IP**

o

**La dirección IP no le sirve los archivos front-end**

No podrás ver el front-end para hacer clic en cosas y comunicarte con el back-end. Para poder utilizar los servicios de Web3 sin estas preocupaciones, puedes hospedar el front-end y solucionar tanto el problema de "resolución de DNS" como el de "IP no en línea" al mismo tiempo.

![](./image2.jpg?w=1400&h=679)

## ¿Por qué autohospedarse??

El alojamiento propio de un sitio web en web3 significa que el front-end funcionará incluso cuando el proveedor de front-end predeterminado esté inactivo. ¡Esto elimina muchos intermediarios que existen en el medio del camino de su máquina para llegar a los archivos front-end! Es una relación ganar/ganar para el individuo y el servicio que si sabes cómo hacerlo puedes respaldar los servicios que son esenciales para ti:

- El individuo gana más resiliencia al acceder al servicio incluso cuando las condiciones para llegar al front-end son malas.
- El servidor que entrega los archivos front-end recibe menos solicitudes, lo que ayuda a que no se congestione.
- La versión local de la aplicación se congelará en una versión específica. Si esta versión funciona bien para el individuo, es genial tener una copia de seguridad, de modo que si el front-end rompe alguna función, aún puedes acceder a la versión funcional.

Para autohospedar un servicio, tendremos que revisar la documentación del desarrollador sobre cómo descargar, configurar y ejecutar un entorno local para cada aplicación.

Después de ejecutarlo localmente, en lugar de acceder a la URL predeterminada del sitio web en el navegador, usaremos algo como "localhost:application" y funcionará perfectamente. La "application" es un número que a menudo tiene como valor predeterminado 3000.

![](./image3.jpg?w=1400&h=1115)

## Puntos a tener en cuenta

**A los usuarios de Windows:** Dependiendo del servicio, puede ser más fácil usar Linux en lugar de Windows, pero si tienes Windows, no te preocupes, muchos servicios funcionan bien desde el primer momento, y para los que no, puedes usar [WSL (Subsistema de Windows para Linux)]( https://docs.microsoft.com/en-us/windows/wsl/install). Una [Maquina Virtual](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html) también es una buena alternativa, puedes instalar una distribución común de Linux como [Ubuntu](https://ubuntu.com/) o [Debian](https://www.debian.org/) que a menudo tiene muchos recursos para sortear los errores. Si tienes errores inesperados en Windows, se recomienda intentar ejecutar en Mac/Linux.

**Para usuarios de Mac/Linux**: Si algún comando muestra errores inesperados, intenta ejecutarlos usando la palabra clave `sudo` antes, como `sudo command`, esto obliga a ejecutar el comando como administrador y, a veces, sus permisos predeterminados no son los igual que los de administración.

**Para cualquier error inesperado:** ¡Lee detenidamente el archivo Léame del repositorio! Si nada funciona, Google es tu mejor amigo, es realmente difícil hacer una guía que funcione para todas las versiones de todos los sistemas operativos, así que si algo sale mal, te recomiendo que tu primera respuesta sea copiar el error y pegarlo en Google;) a menudo resuelve el problema!

**Si todo salió bien pero las transacciones en cadena fallan:** Hay un archivo llamado `.env` que utilizan los proyectos para configurar las claves predeterminadas. Allí puedes encontrar lugares para agregar claves de proyecto para servicios como [Infura](https://infura.io/) y [The Graph](https://thegraph.com/studio/), algunas de las aplicaciones pueden requerirlo. Para usar tus propias claves, debes crear una cuenta en el sitio web del servicio y obtenerlas.

**Volver a ejecutar un servicio despues de ejecutarlo** Puedes omitir cualquier `git clone` e `yarn install` y otros pasos clave de configuración, por lo general, solo tienes que `cd` (cambiar de directorio) en la carpeta del proyecto de nuevo y ejecuta `yarn start`

**Después de ejecutar un servicio para ejecutar otro:** Tendrás que cerrar la ventana de la terminal O apagar la ejecución por ti mismo: para hacer esto, usa "Ctrl+C" y puedes salir de la carpeta del proyecto con el comando `cd ..`

## ¡Manos a la obra!

**Requerimientos**

1) Instalar [Node.js](https://nodejs.org/en/)
2) Instalar [git](https://git-scm.com/downloads)
3) Escribe `npm install --global yarn` en una ventana de terminal para configurar [Yarn](https://yarnpkg.com/) (utilizado para instalar las dependencias para la mayoría de los proyectos)

### Cómo abrir terminales:

- **Windows:** Windows + R -> escribe `cmd` -> Enter
- **Mac:** CMD + Space -> Terminal

**Indice**

- [Yearn](#Yearn-Website)
- [Yearn Blog](#Yearn-Blog)
- [Yearn Dev Docs](#Yearn-Dev-Docs)
- [Yearn Website](#Yearn-Website)
- [Yearn Vaults Descriptions](#Yearn-Vaults-Descriptions)
- [Yearn Mini](#Yearn-Mini)
- [Yearn Watch](#Yearn-Watch)
- [Uniswap](#Uniswap)
- [Curve](#Curve)
- [Cowswap](#Cowswap)
- [Gnosis Safe](#Gnosis-Safe)

### Yearn Website

#### Repositorio: https://github.com/yearn/yearn-finance-v3 

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-finance-v3`
3) `cd yearn-finance-v3`
4) `yarn install`
5) Sin windows: `yarn dev` / Con Windows: `yarn dev-win`
6) El navegador debería abrir automáticamente una pestaña en `localhost:3000`

![](./image4.jpg?w=1145&h=667)

### Yearn Blog

#### Repositorio: https://github.com/yearn/yearn-comms

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-comms`
3) `cd yearn-comms`
4) `yarn install`
5) `yarn dev`
6) Abrir el navegador y navegar a `localhost:3000`

![](./image5.jpg?w=1235&h=703)

### Yearn Dev Docs

#### Repositorio: https://github.com/yearn/yearn-devdocs

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-devdocs`
3) `cd yearn-devdocs`
4) `yarn install`
5) `yarn start`
6) El navegador debería abrir automáticamente una pestaña en `localhost:3000`

![](./image6.jpg?w=1093&h=447)

### Yearn Vaults Descriptions

#### Repositorio: https://github.com/yearn/yearn-vaults-descriptions

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-vaults-descriptions`
3) `cd yearn-vaults-descriptions`
4) `yarn install`
5) `yarn dev`
6) Abrir el navegador y navegar a `localhost:3000`

![](./image7.jpg?w=1223&h=517)

### Yearn Mini

#### Repositorio: https://github.com/DarkGhost7/yearn-mini

1) Abrir terminal
2) `git clone https://github.com/DarkGhost7/yearn-mini`
3) `cd yearn-mini`
4) `yarn install`
5) `yarn start`
6) El navegador debería abrir automáticamente una pestaña en `localhost:3000`

![](./image8.jpg?w=1400&h=986)

### Yearn Watch

#### Repositorio: https://github.com/yearn/yearn-watch

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-watch`
3) `cd yearn-watch`
4) `yarn install`
5) `cp .env.example .env`
6) Agregar [Infura](https://infura.io/dashboard), [The Graph](https://thegraph.com/studio/apikeys/), y [Alchemy](https://www.alchemy.com/) claves para `.env`
7) `yarn start`
8) El navegador debería abrir automáticamente una pestaña en `localhost:3000`

![](./image9.jpg?w=1191&h=531)

### Uniswap

#### Repositorio: https://github.com/Uniswap/interface

*No funcionó en Windows*

1) Abrir terminal
2) `git clone https://github.com/Uniswap/interface`
3) `cd interface`
4) `yarn install`
5) `yarn start`
6) Abrir el navegador y navegar a `localhost:3000`

![](./image10.jpg?w=1400&h=628)

### Curve

*Interfaz de usuario antigua ya que la actual no es de código abierto*

#### Repositorio: https://github.com/curvefi/crv.finance

1) Abrir terminal
2) `git clone https://github.com/curvefi/crv.finance`
3) `cd crv.finance`
4) `yarn install`
5) `yarn start`
6) El navegador debería abrir automáticamente una pestaña en `localhost:3000`

![](./image11.jpg?w=1400&h=568)

### Cowswap

#### Repositorio: https://github.com/gnosis/cowswap

*No funcionó en Windows*

1) Abrir terminal
2) `git clone https://github.com/gnosis/cowswap`
3) `cd cowswap`
4) `yarn install`
5) `yarn start`
6) El navegador debería abrir automáticamente una pestaña en `localhost:3000`

![](./image12.jpg?w=983&h=511)

### Gnosis Safe

#### Repositorio: https://github.com/gnosis/safe-react

1) Abrir terminal
2) `git clone https://github.com/gnosis/safe-react`
3) `cd safe-react`
4) `yarn install`
5) Agrega [Infura](https://infura.io/dashboard) claves para `.env`
6) `yarn start`
7) El navegador debería abrir automáticamente una pestaña en `localhost:3000`

![](./image13.jpg?w=1400&h=550)

---

*Creadores: [Worms](https://twitter.com/MarcoWorms), Revisado por: [Dark Ghosty](https://github.com/DarkGhost7), [Cryptouf](https://twitter.com/cryptouf)*

*Hecho en yearn.finance*
