---
layout: post
title: "Yearn Finance Newsletter #60"
categories: [Newsletters]
image:
	src: ./cover.jpg
	width: 576
	height: 288
author: Yearn
date: '2022-04-13'
translator: jameskbh
---

### Semana que termina em 12 de abril de 2022

![](./image1.jpg?w=900&h=453)

Bem-vindo à 60ª edição da Yearn Finance Newsletter. Nosso objetivo com este boletim é manter a comunidade da Yearn e a comunidade cripto em geral informadas sobre as notícias mais recentes, incluindo lançamentos de produtos, mudanças de governança e atualizações do ecossistema. Se você estiver interessado em aprender mais sobre Yearn Finance, siga nossas contas oficiais [Twitter](https://twitter.com/iearnfinance) e [Medium](https://medium.com/iearn).

## Sumário

- Anseiando por Yearn
- A Grande Padronização dos Vaults
- Como a Web3 permite um Yearn sem censura
- Como as Estratégias para yVault nascem
- Dicas para novos contribuidores da DAO
- Vaults na Yearn
- Notícias do Ecossistema

# Anseiando por Yearn

![](./image2.jpg?w=1000&h=563)

Um relatório Messari premium sobre Yearn agora está disponível para todos. Originalmente compartilhado com seus assinantes em novembro, a peça contém uma infinidade de dados e explicadores.

Trechos do artigo afirmam: "Todos conhecemos Yearn. É o agregador de rendimento "configure-e-esqueça" que funciona em cima de protocolos DeFi de geração de rendimento, como Compound, Aave, Curve e Convex. Os usuários podem obter ganhos passivos com o clique de um botão. Com o tempo, o protocolo tornou-se sinônimo de rendimento e conquistou uma reputação na indústria como o líder em geração de rendimento com risco minimizado... O protocolo principal, usado pela maioria dos usuários, os Vaults, é responsável por 67% da TVL de Yearn. Os usuários depositam em um Vault que é definido por ativo, e as estratégias de rendimento subjacentes são executadas para implantar o capital... Yearn é capaz de oferecer um único ponto de integração confiável para outros protocolos de rendimento, para que o tempo do usuário não seja desperdiçado, e o risco de integração não seja introduzido ao gerenciar e manter estratégias por conta própria... Para onde Yearn vai daqui depende em grande parte de sua interface de usuário V3, estratégia multicadeia e a defensabilidade de sua posição”.

Fantom e Arbitrum estão ao vivo. Para onde depois?

Acesse aqui em [messari.io/article/yearning-for-yearn](messari.io/article/yearning-for-yearn).

# A Grande Padronização dos Vaults

![](./image3.jpg?w=900&h=577)

Você já ouviu falar de ERC-20, ERC-721 e ERC-1155. Em breve você conhecerá o ERC-4626s. O Padrão do Vault Tokenizado (ERC-4626) tem sua versão final. E a Grande Padronização dos Vaults começa agora.

Aqui está uma breve visão geral do ERC-4626: os tokens com geração de rendimento são uma bagunça. Agregadores de rendimento, Vaults, mercados de empréstimo e tokens de rendimento nativos como $xSUSHI são frequentemente implementados com pequenas variações. Para criar um único aplicativo em cima dos tokens com rendimento da DeFi, você precisa escrever dezenas de adaptadores complexos e propensos a erros para lidar com cada variação exclusiva.

ERC-4626 torna isso uma coisa do passado. É a composabilidade seu melhor nível. Crie um aplicativo usando um Vault ERC-4626 e ele funcionará para todos os outros tokens ERC-4626.

Yearn V3 usando o ERC-4626 era inevitável. Os contribuidores já estão trabalhando duro para implementar o padrão para os Vaults V3 da Yearn. Assim como os desenvolvedores de Alchemix, Balancer, Rari Capital, FEI Protocol, Yield Protocol, OpenZeppelin e muito mais. Talvez um dia, veremos uma aba ERC-4626 no site Etherscan. Em uma palavra, o ERC-4626 será o padrão-ouro para qualquer tipo de token gerador de rendimentos... de Vaults Yearn a depósitos AAVE e pools lineares do Balancer.

Pronto para participar da Grande Padronização deos Vaults? Confira o fio de Joey Santoro [aqui](https://twitter.com/joey__santoro/status/1504603906726240258) para mais detalhes e uma implementação básica por transmissions11.

Composabilidade é o futuro.

Quer mais código? Confira [esta demo de implementação do ERC-4626 Vyper 0.3.2](https://github.com/fubuloubu/ERC4626) pelos contribuidores Yearn, fubuloubu e banteg, juntamente com transmissions11 e Joey Santoro.

Leia um artigo de acompanhamento do CoinDesk sobre o ERC-4626 [aqui](https://www.coindesk.com/layer2/2022/04/08/defi-giant-yearn-leads-the-way-on-erc-4626-token-standard-adoption/).

# Como a Web3 permite um Yearn sem censura

![](./image4.jpg?w=900&h=451)

A grande visão da Web3 é uma internet (e sistema financeiro) que nunca está em offiline, nunca censurada e acessível a todos.

Blockchains e auto-hospedagem ajudam a tornar isso possível. Curioso como você pode usar Yearn, Uniswap e outros aplicativos Web3 sem tocar seus sites? No paradigma Web2, se um site cair, os usuários finais ficam sem acesso. Com o Web3, um serviço está sempre disponível para qualquer pessoa com uma conexão à Internet (assumindo que o blockchain subjacente esteja online).

Como o Web3 é de código aberto, você pode usar Yearn, Uniswap e outros serviços Web3 baixando seus arquivos e auto-hospedando seus sites diretamente em seu computador. Não são necessários servidores de terceiros!

Para auto-hospedar o site, tudo o que você precisa é de um computador (Windows, Mac ou Linux) e um software especial. Depois de configurar, você pode usar Yearn e outros serviços diretamente no seu navegador sem visitar as URLs (mas digitando algo como "localhost:3000").

Clique [aqui](https://medium.com/iearn/self-hosting-web3-services-299306b706ee) para acabar com o intermediário Web2 e realizar a grande visão do Web3, num artigo simples do MarcoWorms.

# Como as Estratégias para yVault nascem

![](./image5.jpg?w=900&h=650)

As estratégias são a espinha dorsal de Yearn, com cada Vault contendo várias dessas partes móveis. Para permitir que nossos usuários obtenham o melhor rendimento ajustado ao risco no DeFi, devemos acompanhar o espaço em constante mudança e escrever novas estratégias. Acima está um guia sobre como as estratégias do yVault recém-escritas são endossadas para entrar em produção.

Confira [esta peça](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d) do colaborador da Yearn MarcoWorms, para obter mais informações sobre o endosso da estratégia para um yVault.

# Dicas para novos contribuidores da DAO

![](./image6.jpg?w=900&h=473)

A cultura da Yearn é global, amigável e composta por vários construtores, contribuintes e empreendedores. Embora possa parecer haver uma razão principalmente monetária para ingressar na maioria dos DAOs, ingressar na DAO de Yearn é uma experiência gratificante, que permite uma chance de trabalhar em um espaço novo e em constante mudança.

Em DAOs como Yearn, você pode se tornar um proprietário assumindo a responsabilidade pelos resultados e tendo o poder de tomar as decisões que levarão a esses resultados.

A seguir estão alguns comentários de vários contribuintes da Yearn de todas as esferas, sobre conselhos para novos contribuintes da DAO: 

Tracheopteryx, um dos nossos principais colaboradores de governança, diz: "Faça o trabalho que você ama, que você é melhor, que você pode ser pago, ao mesmo tempo tendo em mente as necessidades da DAO". Além disso, Storming0x, que se concentra na segurança e no desenvolvimento de protocolos, diz: “Envolva-se, não se sinta mal por estar confuso ou fazer perguntas. Muitas pessoas estão aqui para ajudar os recém-chegados, e temos um processo de integração muito melhor nos dias de hoje”. Por fim, um colaborador anon diz: “1. Entenda nossa cultura. Leia tudo o que puder. 2. Construa confiança. 3. Absorva seu custo de integração. 4. Escreva documentos de integração. 5. Conheça todos. 6. Descubra o que diabos está acontecendo. 7. Tenha uma opinião sobre essa direção. 8. Delegue".

Confira o artigo completo do Kish [aqui](https://medium.com/iearn/tips-for-new-contributors-4e978d6b73d) para ler mais dicas de contribuintes da Yearn e para abordar DAOs com um conhecimento mais aprofundado.

Convidamos você a se envolver, dar feedback e participar da comunidade Yearn juntando-se a nós no [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) ou [Github](http://github.com/yearn) . Venha construir conosco.

# Vaults na Yearn 

Você pode ler uma descrição detalhada das estratégias para todos os nossos yVaults ativos [aqui](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Notícias do Ecossistema

[MAI vaults para alavancar estratégias Yearn com 0% de juros agora estão disponíveis na rede Fantom](https://twitter.com/QiDaoProtocol/status/1511787974383521805)

[Um novo site yearn.watch está em desenvolvimento](https://watch.major.tax/)

[Leia as breves reflexões de storming0x sobre Yearn em uma entrevista sobre YFI Boarding School](https://twitter.com/YFI_interns/status/1510244675671793670?s=20&t=27yxNtksWs-le96KTQVXrw)

[Dicas sobre segurança de um contribuinte Yearn](https://twitter.com/storming0x/status/1509769575021178886)

[Confira a nova atualização do Coordinape](https://twitter.com/coordinape/status/1512247042806005763)
