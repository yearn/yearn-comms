---
title:  "Hackear com Yearn"
image:
  src: ./cover.jpg
  width: 900
  height: 450
date: '2022-05-05'
author: Farrahmay
translator: jameskbh 
---

**📣 A Yearn Finance está convocando hackers, desenvolvedores e criadores para desenvolver nosso protocolo!**

![](cover.jpg?w=900&h=450)

Se você está construindo um dapp inovador ou lançando uma estratégia de agricultura de rendimento, há muitas maneiras de construir usando Yearn. Este guia fornecerá recursos para você começar a hackear com Yearn.

Abordaremos as 1- integrações entre Vault e contrato inteligente, 2- integrações front-end e SDK, 3- desenvolvimento de estratégia, 4- análise de dados e, por último, forneceremos uma série de exemplos para você se inspirar.

## O que é Yearn?

Yearn Finance é um conjunto de produtos financeiros descentralizados (DeFi) que permitem aos usuários otimizar seus ganhos em criptoativos por meio de serviços de empréstimo e negociação.

O produto principal da Yearn é o **Vault** (também conhecido como yVault) — um agregador de rendimento configure-e-esqueça que funciona em cima dos protocolos de geração de rendimento DeFi, como Compound, Aave, Curve e Convex.

Os vaults, em essência, são conjuntos de fundos com uma estratégia de rendimento associada para maximizar os retornos sobre o ativo no Vault. As estratégias do Vault são mais ativas do que apenas emprestar moedas. A maioria das estratégias pode fazer várias coisas para maximizar os retornos, incluindo fornecer garantias e emprestar outros ativos, como stablecoins, fornecer liquidez e coletar taxas ou cultivar outros tokens e vendê-los para obter lucro.

**Devido ao design aberto do Vault, você pode incorporar o rendimento gerado como um componente de design do seu projeto.**

## DeFi e Hacking

O DeFi está lentamente encontrando seu caminho em todas as facetas do espaço blockchain. Se você está construindo um jogo P2E, um projeto NFT ou ferramentas DAO, é provável que haja uma funcionalidade DeFi que você possa incorporar para construir um produto melhor.

> Com o Yearn, você pode incorporar a geração de rendimento em seu produto, sem ter que construir uma estratégia de rendimento do zero.

Os Yearn Vaults são construídos com padrões abertos e muitos projetos aproveitaram as integrações de Vault disponíveis para criar aplicativos incríveis em cima delas.

**Casos de uso comum:**

-   **Utilização de Vaults como garantia para tomar/fornecer empréstimos**
-   **Usando Vaults para gerar rendimento com fundos do usuário**

---

## Integração com os Vaults da Yearn

### Começando

Confira nossos documentos de desenvolvimento para [configurar sua máquina](https://docs.yearn.finance/developers/v2/getting-started).

### Como se integrar com os Vaults?

A integração mais simples com a Yearn é redirecionar fundos de um serviço para um yVaults, para gerar rendimento para seus usuários em ativos que, de outra forma, não gerariam rendimento. Isso abre novas funcionalidades empolgantes em seu produto ou aplicativo.

### *Informações*

- *Escrito em Vyper* 🐍
- *Seus tokens são ERC20, então você pode — Transferir, Trocar, usá-los como garantia, e tudo o que você faz com outros tokens.*
- *Acompanhe suas cotas (valor, preço por cota)*
- * Código imutável gerenciado por Yearn Governance*
- *Um Vault pode executar várias estratégias ao mesmo tempo* 😱
- *Keep3rs integrado* 🤖

**Figura 1. Você pode interagir com yVaults através do depósito ou retirada.**

![](image1.jpg?w=900&h=368)

![](image2.jpg?w=900&h=368)

Saiba mais sobre as implicações de ambos os métodos [aqui](https://docs.yearn.finance/partners/integration_guide)

### Starter Kit

Aqui está um exemplo detalhado como integrar Vaults V2 e o ERC-4626. Criamos um SugarVault, onde um detentor pode doar rendimentos para um segundo endereço com exemplos tanto do VaultAPI e 4626.

<autoslot link="https://github.com/storming0x/ystarter-foundry-kit"><autoslot>

**O que você encontrará no kit:**

- Exemplo básico de Contratos Inteligentes de Solidez para integração com o Yearn Vaults para as interfaces V2 e ERC4626.
-   Adaptador ERC4626 para envelopar Vaults Yearn.
- Contratos de Exemplo
-   Amostra da suíte de testes.

### Workshop

Aprenda a aproveitar o poder da Yearn criando uma integração lucrativa com os Vaults v2, aproveitando o novíssimo EIP-4626: Tokenized Vault Standard! Este workshop irá guiá-lo através da criação de um roteador B2B/empresarial para Vaults v2, que está em conformidade com o novo EIP-4626. Você poderá escolher entre várias estratégias de taxas para seus usuários para maximizar seu lucro.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/urC35PMbpJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Para ter um vislumbre dos Vaults e contratos inteligentes atuais da Yearn, consulte [este repositório](https://github.com/yearn/yearn-vaults#readme) para ver o conjunto de contratos inteligentes que são usados para os Vaults da Yearn. Ele contém os requisitos, código, scripts de implantação e testes necessários para o protocolo principal, incluindo um modelo de estratégia herdável para uso com estratégias baseadas em Solidity que interagem com o Yearn Vaults. Esses contratos são usados para criar uma maneira simples de gerar altos retornos ajustados ao risco para depositantes de vários ativos por meio dos melhores protocolos de empréstimo da categoria, pools de liquidez e estratégias de agricultura de rendimento feitas pela comunidade no Ethereum.

### Playground

Configuramos um ambiente de teste para você implantar e testar seus Vaults. Acesse aqui: [https://hack.yearn.finance/](https://hack.yearn.finance/)

- Implante seu Vault com seu próprio token
- Emita seus próprios tokens
- Hack!

### Recursos Adicionais:

- [https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens](https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens)
- [https://github.com/yearn/yearn-integration-hardhat](https://github.com/yearn/yearn-integration-hardhat)

## Integrações Web e SDK

O Yearn usa um SDK JavaScript para formatar dados do protocolo e gerar transações para ler/gravar estes dados. O Yearn SDK integra vários componentes, tanto on-chain quanto off-chain.

[Este repositório](https://github.com/turtlemoji/yearn-sdk-examples) contém uma pré-visualização ao vivo e exemplos de uso do [Yearn SDK](https://github.com/yearn/yearn-sdk). 
*Explore esta base de código para saber como começar a interagir com o protocolo Yearn em seu próprio aplicativo!*

## Sandbox com Pré-visualização

- [Clique aqui para acessar a sandbox com pré-visualização ao vivo](https://codesandbox.io/s/github/turtlemoji/yearn-sdk-examples/tree/main/)

![](image3.jpg?w=900&h=284)

<autoslot link="https://github.com/turtlemoji/yearn-sdk-examples"><autoslot>

**Recursos Adicionais**

-   [https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack)

## Construindo Uma Estratégia

Uma Estratégia Yearn é um conjunto de contratos inteligentes que implementam diferentes estratégias de agricultura de rendimento que utilizam os ativos depositados para gerar os melhores rendimentos para os usuários.

A implementação da estratégia implica essencialmente a transferência de ativos de uma aplicação de geração de rendimento para outra que esteja com retorno melhores. Isso será feito, em grande parte, automaticamente. Recompensas/lucros gerados por estratégias são regularmente atualizados, coletados, trocados pelo ativo original do Vault e depositados novamente para gerar rendimento composto. Cada Vault tem uma estratégia única e a estratégia será melhorada constantemente com base nas observações de nossos mecanismos de monitoramento.

Por ter esta estratégia, os usuários só precisam depositar ativos individuais e deixar que ela gere lucros destes fundos.

A Yearn automatiza todo o processo de reinvestimento, tornando-o o mais próximo possível do ideal. A frequência de reinvestimento depende de diferentes variáveis no sistema, como Valor Total Bloqueado (TVL) e Taxa Percentual Anual (APR).

![](image4.jpg?w=900&h=819)

### Começando:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NVR3teJw0Y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Recursos Adicionais**

-   [https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md](https://github.com/yearn/yearn-vaults/blob/main/CONTRIBUTING.md)
-   [https://github.com/yearn/brownie-strategy-mix](https://github.com/yearn/brownie-strategy-mix)

## Análise de dados

A Yearn visa fornecer mais informações sobre nossos produtos aos nossos clientes e parceiros por meio da análise dos dados on-chain e off-chain. Como todos os dados do protocolo Yearn são armazenados publicamente na cadeia, há muitos insights a serem obtidos com a análise dessas transações.

Duas ferramentas comuns para análise de dados on-chain são:

1. **Dune Analytics - Consultar dados do contrato e gerar dashboards com SQL**

- [Painéis atuais](https://dune.com/projects/yearn)

Aqui está uma lista de todas as coisas novas que você pode consultar:

- harvests
- implantações
- transações
- contrato dos tokens
- contrato da estratégia
- implantações v2

Explore todos eles em [https://dune.com/queries/625814](https://dune.com/queries/625814)

2. **the Graph - Consulta de dados do contrato com GQL usando os subgraphs Yearn **

The Graph é um protocolo descentralizado para indexação e consulta de dados de blockchains, começando com o Ethereum. É uma maneira mais fácil de recuperar dados específicos da blockchain, dentro do ethos da web3, com as vantagens da descentralização e confiabilidade.

GraphQL é a linguagem de consulta subjacente usada no Graph.

Qual é a diferença entre chamadas padrão RESTFUL API e chamadas GraphQL? A diferença é que as APIs tradicionais exigem que os desenvolvedores criem endpoints específicos para usuários que retornam dados específicos. Se o usuário precisar de mais informações, talvez precise fazer várias chamadas de API, às vezes centenas de chamadas de API, para obter as informações necessárias. Com o Graph (que usa GraphQL), apenas uma chamada é necessária para um subgraph, desde que o desenvolvedor tenha criado um esquema flexível.

- [https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet](https://thegraph.com/hosted-service/subgraph/rareweasel/yearn-vaults-v2-mainnet)
- [https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql](https://api.thegraph.com/subgraphs/name/rareweasel/yearn-vaults-v2-mainnet/graphql)

## Algumas das perguntas de pesquisa que nos interessam:

-   Visualização de pools de liquidez lucrativos para nossas estratégias
-   Avaliar o impacto da TVL na perda impermanente
-   Visualização do volume de vários pools
-   Fornecer métricas de risco aos nossos Vaults
-   Volatilidade dos preços do token subjacente
-   Abordagem dos riscos do protocolo
-   Otimizar nossas estratégias de acordo com a mudança nas taxas de gás
-   Decidir quando desalavancar e negociar os tokens de governança
-   Decidir quando fazer a coleta
-   Previsão de perda impermanente para pools Uniswap V3
- Construção de portfólio em todos os produtos da Yearn 
Mais detalhes sobre esses tópicos podem ser vistos em nossa guia de issues no GH.

**Fontes de Dados**

**Yearn SDK** [Docs]

[https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack](https://docs.yearn.finance/vaults/yearn-sdk/yearn-stack)
  
Se você não tiver certeza sobre qual serviço você deve primeiro procurar, o Yearn SDK pode fornecer endereços de contratos e endpoints dos serviços da Yearn.

**Yearn API** [Docs]
  
A API Yearn pode fornecer metadados não específicos do usuário, incluindo o TVL de Vaults, APYs, taxas e metadados de estratégia por meio da REST API, sem a necessidade de fazer chamadas web3.

**Yearn Vision**

Yearn Vision é o painel Grafana da versão hospedada do Yearn Exporter. Você pode baixar as métricas históricas relacionadas aos nossos Vaults e estratégias como arquivos json ou csv através do painel. Para obter instruções sobre como baixar os dados, consulte Baixando resultados de consulta como csv.

## Inspiração

Os casos de uso comum para Vaults incluem:

-   Utilização de Vaults como garantia para tomar/fornecer empréstimos
-   Usando Vaults para gerar rendimento com fundos do usuário

*Em ambos os casos, o protocolo integrado a Yearn é recompensado com taxas de desempenho retiradas dos lucros gerais do Vault: quanto maior o volume total que um parceiro contribui para um Vault, maior a parcela do lucro que recebe.*

Centenas de protocolos criaram funcionalidades interessantes usando os métodos de integração da Yearn. Estes incluem:

- Alchemix fornece empréstimos que se pagam automaticamente usando os rendimentos do Vault
- Abracadabra forneceu o primeiro sistema de alavancagem yVault, que permite aos usuários tomar empréstimos e manter o rendimento se acumulando
- QiDao fornece empréstimos com 0% de juros se você usar yVaults como garantia

Aqui estão algumas ideias sobre o que você pode construir:

1. Use os Vaults como garantia para pedir dinheiro emprestado e provavelmente obter alguma alavancagem. (por exemplo, Abracadabra)
2. Construa um produto que permita que você use o rendimento para fazer coisas legais:
  doar o rendimento para uma ONG 
  investir o rendimento em coisas mais arriscadas ou apostas direcionais 
  pagamento de contas e assinaturas
3. Crie um metavault em cima de vários Vaults. Uma ideia que vem à minha mente é ter um metavault em USD que faz depósitos em vários Vaults atrelados ao dólar com base em alguma estratégia e abstrai a complexidade do usuário.
4. Crie uma interface do usuário que aceite depósitos e permita que você mova ativos através de cadeias.
5. Use os Vaults como um lugar para ganhar juros sobre fundos que não estão sendo usados ativamente pelo usuário.

## Exemplos

- **[Bunker Finance](https://bunker.finance/):** Bunker.finance é um protocolo descentralizado para empréstimos lastreados em NFT. Eles se integraram aos Vaults USDC e WETH do Yearn v3 e os usam como um lugar para ganhar juros sobre fundos que atualmente não estão sendo fornecidos aos solicitantes.
- **[Skew You](https://github.com/Tburm/tracer-vault):** Os usuários podem contrair empréstimos contra suas garantias de opções, desbloqueando todo um novo mundo de eficiência de capital.
- **[Possum](https://github.com/Possum-ONE):** Produto de renda fixa que pode transformar cada agricultura de rendimento em dois pools fixos/variáveis. Com base na teoria de jogos, os usuários do pool fixo podem ter APY garantido, enquanto o usuário variável recebe maior APY com maior risco.
- **[Demon](https://demon-finance.netlify.app/):** Desmistificando números APY obscuros.
- **[Bowtie](https://github.com/ShayanJa/bowtie_finance):** Permite que os usuários tomem empréstimos contra suas garantias de opções.

Além disso, fazer uma pesquisa do GitHub para a funcionalidade Yearn que você está interessado em implementar é uma boa maneira de encontrar exemplos de códigos em funcionamento.

## Recursos Adicionais

- DevDocs: [https://yearn.github.io/yearn-devdocs](https://yearn.github.io/yearn-devdocs)
- yearn-vaults: [https://github.com/yearn/yearn-vaults](https://github.com/yearn/yearn-vaults)
- BaseRouter: [https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseRouter.sol)
- BaseWrapper: [https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol](https://github.com/yearn/yearn-vaults/blob/main/contracts/BaseWrapper.sol)
- Wrapper-mix: [https://github.com/yearn/brownie-wrapper-mix](https://github.com/yearn/brownie-wrapper-mix)
- [Artigo](https://medium.com/iearn/yearn-partners-building-with-yvaults-4cd042ea092): Parceiros Yearn – Construindo com yVaults
- [Vídeo: Introdução ao Yearn Vaults](https://www.youtube.com/watch?v=a1TsO62402c)
- Artigo: [Avaliação e endosso da estratégia](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d)
- [Video](https://www.youtube.com/watch?v=NVR3teJw0Y0): Torne-se um poderoso estrategista!
- [Tweet: Colocando uma Estratégia em Produção](https://twitter.com/flashfish0x/status/1460246273488044036?s=20&t=kxak7a6qtrmDCfcn6UrGYA)
