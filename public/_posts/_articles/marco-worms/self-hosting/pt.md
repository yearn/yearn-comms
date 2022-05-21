---
title:  "Auto-hospedagem de Serviços Web3"
image:
  src: ./image1.jpg
  width: 1400
  height: 702
date: '2022-03-31'
author: Marco_Worms
translator: jameskbh 
---

![](./image1.jpg?w=1400&h=702)

A Web3 trouxe uma nova maneira de se comunicar com aplicativos: os aplicativos não são mais hospedados por provedores de servidores centralizados, mas sim em blockchains, que são sistemas descentralizados. Aplicativos criados sobre fundações descentralizadas são resistentes ao apagão e censura, mas há um problema: a interface do aplicativo para os usuários que usam o navegador da web geralmente depende de entidades centralizadas.

Neste artigo, aprenderemos como auto-hospedar interfaces de aplicativos para serviços principais cripto e  daYearn. Portanto, se os sites oficiais estiverem desativados por qualquer motivo, você pode realmente hospedar o site para si mesmo, já que a blockchain nunca está desativada!

## Back-end, Front-end, Web3!

Uma rápida introdução a esses conceitos:

- **Front-end** é o nome dado à parte do aplicativo que é vista pelo usuário, como um site ou um aplicativo móvel.
- **Back-end** é o nome dado à parte do aplicativo que não é vista pelo usuário. Muitas ações front-end dependem do back-end para processamento.

Na Web3, a blockchain consegue descentralizar o back-end, mas o front-end ainda será entregue ao usuário usando o método centralizado padrão:

- O usuário solicita que o navegador acesse uma página (exemplo http://yearn.finance)
- O navegador solicita DNS para o IP deste endereço (13.227.124.73)
- O navegador solicita os arquivos para o IP

E se algum desses dois cenários acontecer:

**O DNS não resolve seu domínio para um endereço IP**

ou

**O endereço IP não fornece os arquivos front-end**

Você não poderá ver o front-end para clicar nas coisas e se comunicar com o back-end. Para poder usar serviços Web3 sem essas preocupações, você pode auto-hospedar o front-end e contornar o problema de "resolução DNS" e "IP-não-online" ao mesmo tempo!

![](./image2.jpg?w=1400&h=679)

## Por que auto-hospedagem?

A auto-hospedagem de um site na web3 significa que o front-end funcionará mesmo quando o provedor do front-end padrão estiver inativo. Isso corta muitos intermediários que existem no meio do caminho para sua máquina alcançar os arquivos front-end! É uma relação ganha/ganha para o indivíduo e o serviço que, se souber como fazê-lo, você faça backup dos serviços que são essenciais para você:

- O indivíduo ganha mais resiliência ao acessar o serviço mesmo quando as condições para chegar ao front-end são ruins.
- O servidor que fornece arquivos front-end recebe menos solicitações, o que ajuda a não ficar congestionado
- A versão local do aplicativo ficará congelada em uma versão específica. Se esta versão funciona bem para o indivíduo, é ótimo ter um backup, então se o front-end ao vivo deixar de funcionar qualquer recurso, você ainda pode acessar a versão funcional

Para auto-hospedar um serviço, teremos que acompanhar a documentação do desenvolvedor sobre como baixar, configurar e executar um ambiente local para cada aplicativo.

Depois de executá-lo localmente, em vez de acessar o URL do site padrão no navegador, usaremos algo como "localhost:application" e ele funcionará muito bem! O "aplicativo" é um número que muitas vezes é igual a 3000.

![](./image3.jpg?w=1400&h=1115)

## Pontos para prestar atenção

**Para usuários do Windows:** Dependendo do serviço, pode ser mais fácil usar o Linux em vez do Windows, mas se você tiver o Windows, não se preocupe, muitos serviços funcionam bem sem necessidade de configuração extra e, para os que não o fazem, você pode usar o [WSL (Subsistema do Windows para Linux)]( https://docs.microsoft.com/en-us/windows/wsl/install). Uma [Máquina Virtual](https://www.oracle.com/virtualization/technologies/vm/downloads/virtualbox-downloads.html) também é uma boa alternativa, você pode instalar uma distribuição comum do Linux como [Ubuntu](https://ubuntu.com/) ou [Debian](https://www.debian.org/) que muitas vezes tem muitos recursos para contornar erros. Se você receber erros inesperados no Windows, é recomendável tentar executar no Mac/Linux.

**Para usuários de Mac/Linux**: Se algum comando mostrar erros inesperados, tente executá-los usando a palavra-chave `sudo` antes, como `comando sudo`, isso força o comando a ser executado como administrador e às vezes suas permissões padrão não são as mesmas que as do administrador.

**Para quaisquer erros inesperados:** Leia atentamente o readme do repositório! Se nada funcionar, o Google é seu melhor amigo, é muito difícil fazer um guia que funcione para todas as versões de todos os sistemas operacionais, então se algo der errado, recomendo que sua primeira resposta seja copiar o erro e colá-lo no Google ;) isso muitas vezes resolve o problema!

**Se tudo correu bem, mas as transações onchain falham:** Há um arquivo chamado `.env` usado por projetos para configurar chaves padrão. Lá você pode encontrar lugares para adicionar chaves de projeto para serviços como [Infura](https://infura.io/) e [The Graph](https://thegraph.com/studio/). Alguns dos aplicativos podem exigir que você use suas próprias chaves: para isso, você tem que criar uma conta no site desses serviços!

**Depois de executar um serviço, para executá-lo novamente:** Você pode pular qualquer `git clone` e `yarn install` e outras etapas-chave de configuração, você geralmente só precisa `cd` (alterar diretório) na pasta do projeto novamente e executar `yarn start`

**Depois de executar um serviço, para executar outro:** Você terá que fechar a janela do terminal OU parar a execução você mesmo: para fazer isso use "Ctrl+C" e você pode sair da pasta do projeto com o comando `cd ..`

## Mãos à obra!

**Pré-requisitos**

1) Instalar [Node.js](https://nodejs.org/en/)
2) Instalar [git](https://git-scm.com/downloads)
3) Digitar `npm install --global yarn` em uma janela de terminal para configurar [Yarn](https://yarnpkg.com/) (usado para instalar as dependências para a maioria dos projetos)

### Como abrir o terminal:

- **Windows:** Windows + R -> digite `cmd` -> Enter
- **Mac:** CMD + Espaço -> Terminal

**Índice**

- [Site da Yearn](#Yearn-Website)
- [Blog Yearn](#Yearn-Blog)
- [Yearn Dev Docs](#Yearn-Dev-Docs)
- [Site da Yearn](#Yearn-Website)
- [Descrições dos Vaults](#Yearn-Vaults-Descriptions)
- [Yearn Mini](#Yearn-Mini)
- [Yearn Watch](#Yearn-Watch)
- [Uniswap](#Uniswap)
- [Curve](#Curve)
- [Cowswap](#Cowswap)
- [Gnosis Safe](#Gnosis-Safe)

### Site da Yearn

#### Repositório: https://github.com/yearn/yearn-finance-v3 

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-finance-v3`
3) `cd yearn-finance-v3`
4) `yarn install`
5) Não-Windows: `yarn dev` / Windows: `yarn dev-win`
6) O navegador deve abrir automaticamente uma guia em `localhost:3000`

![](./image4.jpg?w=1145&h=667)

### Yearn Blog

#### Repositório: https://github.com/yearn/yearn-comms

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-comms`
3) `cd yearn-comms`
4) `yarn install`
5) `yarn dev`
6) Abra o navegador e navegue até `localhost:3000`

![](./image5.jpg?w=1235&h=703)

### Yearn Dev Docs

#### Repositório: https://github.com/yearn/yearn-devdocs

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-devdocs`
3) `cd yearn-devdocs`
4) `yarn install`
5) `yarn start`
6) O navegador deve abrir automaticamente uma guia em `localhost:3000`

![](./image6.jpg?w=1093&h=447)

### Descrições Yearn Vaults

#### Repositório: https://github.com/yearn/yearn-vaults-descriptions

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-vaults-descriptions`
3) `cd yearn-vaults-descriptions`
4) `yarn install`
5) `yarn dev`
6) Abra o navegador e navegue até `localhost:3000`

![](./image7.jpg?w=1223&h=517)

### Yearn Mini

#### Repositório: https://github.com/DarkGhost7/yearn-mini

1) Abrir terminal
2) `git clone https://github.com/DarkGhost7/yearn-mini`
3) `cd yearn-mini`
4) `yarn install`
5) `yarn start`
6) O navegador deve abrir automaticamente uma guia em `localhost:3000`

![](./image8.jpg?w=1400&h=986)

## Yearn Watch

#### Repositório: https://github.com/yearn/yearn-watch

1) Abrir terminal
2) `git clone https://github.com/yearn/yearn-watch`
3) `cd yearn-watch`
4) `yarn install`
5) `cp .env.example .env`
6) Adicione as chaves [Infura](https://infura.io/dashboard), [The Graph](https://thegraph.com/studio/apikeys/) e [Alchemy](https://www.alchemy.com/) no `.env`
7) `yarn start`
8) O navegador deve abrir automaticamente uma guia em `localhost:3000`

![](./image9.jpg?w=1191&h=531)

### Uniswap

#### Repositório: https://github.com/Uniswap/interface

*Não funciona no Windows*

1) Abrir terminal
2) `git clone https://github.com/Uniswap/interface`
3) `interface cd`
4) `yarn install`
5) `yarn start`
6) Abra o navegador e navegue até `localhost:3000`

![](./image10.jpg?w=1400&h=628)

### Curve

*UI antiga, uma vez que a atual não é de código aberto*

#### Repositório: https://github.com/curvefi/crv.finance

1) Abrir terminal
2) `git clone https://github.com/curvefi/crv.finance`
3) `cd crv.finance`
4) `yarn install`
5) `yarn start`
6) O navegador deve abrir automaticamente uma guia em `localhost:3000`

![](./image11.jpg?w=1400&h=568)

### Cowswap

#### Repositório: https://github.com/gnosis/cowswap

*Não funciona no Windows*

1) Abrir terminal
2) `git clone https://github.com/gnosis/cowswap`
3) `cd cowswap`
4) `yarn install`
5) `yarn start`
6) O navegador deve abrir automaticamente uma guia em `localhost:3000`

![](./image12.jpg?w=983&h=511)

### Gnosis Safe

#### Repositório: https://github.com/gnosis/safe-react

1) Abrir terminal
2) `git clone https://github.com/gnosis/safe-react`
3) `cd safe-react`
4) `yarn install`
5) Adicione as chaves [Infura](https://infura.io/dashboard) em `.env`
6) `yarn start`
7) O navegador deve abrir automaticamente uma guia em `localhost:3000`

![](./image13.jpg?w=1400&h=550)

---

*Produtores: [Worms](https://twitter.com/MarcoWorms), Revisores: [Dark Ghosty](https://github.com/DarkGhost7), [Cryptouf](https://twitter.com/cryptouf)*

*Feito em yearn.finance*
