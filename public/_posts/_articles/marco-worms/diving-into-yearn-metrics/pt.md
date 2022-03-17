---
title:  "Aprofundando-se nas Métricas de Yearn"
image:
  src: ./image3.jpg
  width: 1400
  height: 625
date: '2022-02-17'
author: Marco_Worms
translator: jameskbh
---

Fazer sua própria pesquisa é um exercício necessário ao lidar com criptomoedas e para os [yVaults e Estratégias](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432) existem um punhado de visualizações que você pode explorar e usar para processar todos os números. Neste artigo, vou mergulhar em todos os recursos públicos de análise de Yearn usados pelos estrategistas para monitorar a integridade dos vaults e estratégias. Portanto, aprender a navegar nessas ferramentas permitirá que você tenha o mesmo nível de informações sobre os vaults que um membro da equipe do Yearn. As três ferramentas que vamos explorar hoje são:

### **[Vaults de Yearn](https://vaults.yearn.finance/)**

Uma visão abrangente de todos os yVaults e descrições de estratégias. Um ótimo lugar para começar a aprender sobre como e onde os fundos do vault são delegados.

### **[Yearn Vision](https://yearn.vision/)**

Um painel interativo completo que pode ser usado para analisar dados históricos de todos os vaults e estratégias. É aqui que poderemos extrair e analisar qualquer tipo de dados históricos de yVaults e uso de estratégias.

### **[Yearn Watch](https://yearn.watch/)**

Um painel feito por estrategistas para estrategistas que contém acesso rápido a dados úteis sobre a saúde das estratégias para cada yVault.

### **[Vaults de Yearn](https://vaults.yearn.finance/)**

Vaults de Yearn é um ótimo recurso para começar a entender como os fundos são gerenciados por um vault. Aqui você encontrará descrições de todos os yVaults e suas estratégias:

![](./image1.jpg?w=1211&h=733)

No lado esquerdo, você pode escolher os vaults Ethereum ou Fantom, e eles são agregados como:

- **Stables**: yVaults feitos para stablecoins
- **DeFi Tokens**: yVaults feitos para tokens do ecossistema DeFi da rede escolhida (ETH ou FTM)
- **Curve Pools**: yVaults feitos para tokens do ecossistema [curve.fi](https://curve.fi/)
- **Cofres aposentados**: yVaults antigos que não são mais usados
- 
Ao escolher uma seção, você verá uma lista de vaults. Você pode clicar em um vault para expandi-lo e ver as descrições de todas as estratégias que ele usa:

![](./image2.jpg?w=897&h=856)

Se você quiser se aprofundar nos números de cada vault/estratégia, precisará entrar em nossa próxima ferramenta! Que é Yearn Vision:

## **Yearn Vision**

**Link: https://yearn.vision/**

O Yearn Vision é um conjunto completo de painéis de análise com muitas visualizações pré-criadas para analisar dados históricos de vauts e estratégias. Vamos detalhar um pouco do que pode ser encontrado aqui, começando pela página inicial:

![](./image3.jpg?w=1400&h=625)

![](./image4.jpg?w=1400&h=445)

Esta página nos dá muitas informações sobre a saúde geral de todos os Yearn Vaults.

Há informações sobre TVL (Total Value Locked) que representa todos os fundos depositados em todos os yVaults. Podemos ver o TVL total do Ethereum e do Fantom, e também a contribuição de cada rede. Existem alguns gráficos mostrando deltas diários/semanais, que são comparações entre dados atuais e passados. O “preço da cota” também é uma métrica importante a ser seguida, pois representa os ganhos acumulados do vault, pois este número cresce ao longo do tempo acima de 1,0. Abaixo, você pode ver um exemplo de preço da cota de ETH para yETH. Veja como funciona o “preço da cota”:

![](./image5.jpg?w=1400&h=849)\
*como funciona o “preço da cota”*

De volta ao painel do Vision, no canto superior direito, você sempre pode alterar o intervalo de tempo que atualizará a maioria dos gráficos.

![](./image6.jpg?w=226&h=469)\
*alterar o intervalo de tempo no canto superior direito*

Não se assuste com os gráficos com muitas cores, eles normalmente mostram todos os vaults/estratégias e você reduz o ruído selecionando apenas aquele sobre o qual deseja aprender mais. Você pode clicar na lista de itens para filtrar as análises por uma única parte, a maioria deles virá com todos os itens selecionados por padrão, então você terá que escolher o vault que deseja verificar:

![](./image7.jpg?w=884&h=231)\
*Sem filtro*

![](./image8.jpg?w=895&h=258)\
*Filtrado*

“tempo desde o último relatório” significa quando essas estratégias de vault foram coletadas pela última vez. O gráfico “Filtrado” acima é um exemplo de todas as coletas do yVault USDC que aconteceram na última semana, a queda vertical significa que uma colheita aconteceu, então “tempo desde a última colheita/relatório” vai para 0

Você pode alternar para outros painéis no lado esquerdo da tela:

![](./image9.jpg?w=225&h=221)\
*veja todos os painéis: https://yearn.vision/dashboards*

Aqui você encontrará muitos painéis para se aprofundar no que está acontecendo em Yearn!

![](./image10.jpg?w=1395&h=565)\
*painéis usados por estrategista*

Vamos dar uma olhada no painel "Visão geral do Vault":

![](./image11.jpg?w=1400&h=640)\
*Painel de visão geral do Vault: https://yearn.vision/d/ibsIoEknkdffd/vault-overview?orgId=1*

Neste painel de visão geral do Vault, podemos ver que existem 6 estratégias ativas para o yVault USDC: “totalDebt” é o valor que o vault está delegando a essas estratégias, “quantidade de fundos disponíveis” significa quantos fundos estão disponíveis para uam retirada barata (em relação ao gas utilizado), quando esse número for menor que o valor que você gostaria de retirar, a transação custará um pouco mais de gás porque o vault terá que receber fundos delegados às estratégias e fazer mais operações no processo.

Usaremos o yearn.watch mais tarde para ver como os fundos são delegados proporcionalmente para cada estratégia.

Há também ótimos painéis para inspecionar a saúde geral de Yearn, e você pode até monitorar a tesouraria do DAO:

![](./image12.jpg?w=1363&h=201)\
*Painel da Tesouraria de Yearn: https://yearn.vision/d/9_ppKhd7z/treasury*

## **Yearn Watch**

**Link: https://yearn.watch/**

O Yearn Watch é um painel feito por estrategistas para estrategistas, para que você possa navegar rapidamente por informações importantes sobre a saúde de cada estratégia. A tela inicial já o recebe com todos os vaults:

![](./image13.jpg?w=1255&h=799)

Se você abrir um vault, verá informações sobre a alocação de ativos. Eu usei uma parte dessa visualização na seção Yearn Vision, vamos ver a visualização completa desse yVault USDC:

![](./image14.jpg?w=855&h=855)

A visualização “detalhes” mostra tudo sobre a alocação geral do fundo. Se você mudar para a visualização de “estratégias”, poderá mergulhar ainda mais fundo e inspecionar cada estratégia individualmente e encontrar facilmente seus contratos e transações na rede.
Uma vez dentro de uma estratégia, uma visão perspicaz são os “relatórios” (coletas) que mostram as últimas 10 transações de coleta para que você possa monitorar os ganhos em tempo real do vault e monitorar o lucro de cada coleta:

![](./image15.jpg?w=1253&h=759)

Expandindo um relatório individual para obter mais informações:

![](./image16.jpg?w=1157&h=415)

### **Isso é Yearn Pessoal!**

Espero que este artigo ajude as pessoas a extrair boas informações sobre seus depósitos no Yearn! É ótimo poder acessar as mesmas ferramentas que os veteranos que trabalham nesses produtos usam para monitorá-los, há muitas informações valiosas sobre o passado e o presente dos yVaults e produtos de Yearn.

Produtor: [Worms](https://twitter.com/MarcoWorms), Revisor: [Dark Ghosty](https://github.com/DarkGhost7)

Muito obrigado Dark Ghosty por passar por todos esses painéis e me mostrar como navegar neles ❤

**Feito em [yearn.finance](https://yearn.finance/)**
