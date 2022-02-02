---
title:  "Yearn UI v3.0"
image:
  src: ./cover.png
  width: 800
  height: 450
date: '2021-09-17'
author: Dudesahn
translator: JKtranslator
---

# Yearn UI v3.0

### A próxima iteração da IU yearn.finance está aqui

![](image1.png?w=800&h=450)

_exploração do design da página inicial v3_

Reconstruímos yearn.finance do zero. Trabalhamos para resolver o feedback e os pontos fracos da v2 e _muito_ mais. A v3 foi desenvolvida com a experiência do usuário, capacidade de composição e o futuro de várias redes em mente, e a versão beta está ao vivo agora: [beta.yearn.finance](http://beta.yearn.finance).

## Uma visão realizada

![](image2.png?w=300&h=398)

_exploração do design v3_

Poucos meses após o lançamento do yearn.finance v2 em janeiro, os contribuidores do Yearn começaram uma grande reescrita com uma visão de um sistema escalonável com recursos completos, construído para o cenário de DeFi em constante evolução.

Hoje, essa visão está finalmente se concretizando com o novo beta v3, reconstruído do zero, sendo lançado hoje para usuários e colaboradores.

Ouvimos atentamente o feedback da comunidade e os pontos fracos mais urgentes foram resolvidos. A reescrita vai muito além disso, no entanto, e apresenta várias adições e recursos que visam melhorar muito a experiência do usuário e simplificar todo o processo do início ao fim.

## Principais melhorias

- Agora você pode ver sua posição total, histórico total de ganhos e ganhos anuais previstos, com depósitos em vaults denominados tanto no token subjacente e como em valores monetários $.
- Qualquer transação através da interface, incluindo zaps dentro e fora dos vaults, é simulada usando [Tenderly](https://tenderly.co), mostrando a você os tokens estimados recebidos. Chega de slippage inesperada ou transações com falhas misteriosas.
- Página da carteira que permite que você facilmente entre em vaults ou forneça ao Iron Bank com quase qualquer token que você tiver.
- Visualização da página de detalhes do vault com histórico de ganhos do vault, informações de tokens subjacentes e descrições de estratégia.
- Nova seção “Labs” para servir de lar para mais vaults experimentais.
- Iron Bank totalmente integrado com reembolsos e retiradas de empréstimos livres de sobras.
- Experiência totalmente redesenhada para celular.
- Vários temas de interface do usuário, com temas desbloqueáveis exclusivos para portadores de Yearn NFTs em breve. Você notará que em todas as imagens usamos o tema cyberpunk (encontre-o nas configurações).

Lembre-se de que este é um **_lançamento beta:_** nada é definitivo ainda, e planejamos iterar nas próximas semanas conforme recebermos feedback e implementarmos mais refinamentos. Se você gostaria de fornecer feedback, vá para nosso novo [canal do discord](https://discord.gg/Rw9zA3GbyE) criado para feedback da interface de usuário (IU) da v3 web.

![](image3.png?w=300&h=354)

_exploração do design v3_

## Espere, que site é este mesmo?

Este é o novo yearn.finance, que é mantido por um grupo de contribuidores de Yearn. [yearn.fi](https://yearn.fi/) é um site mantido principalmente por [Andre](https://twitter.com/AndreCronjeTech) e [Anton](https://twitter.com/AntonNellCrypto).

Os sites são complementares; Anton implementa recursos que adicionamos (como o SDK) e planejamos adicionar novos recursos que Andre e Anton lançam, como o painel de risco/protocolo.

Leia abaixo para um **mergulho mais profundo** na versão beta (especialmente útil para B2B ou integradores em potencial) e para futuros itens do roteiro no final.

## Yearn web infra

Nosso novo front-end e back-end v3 foram projetados com escalabilidade e composição em mente e podem ser divididos em vários componentes distintos: ** Lens, Meta, Subgraph, Exporter, SDK e Front-end.**

Descrevemos resumidamente cada um deles abaixo:

### Lens

![](image4.png?w=800&h=500)

_Diagrama de blocos lens_

A lens de Yearn é um grupo de contratos que agregam dados da rede para torná-los facilmente consumíveis. A lens inclui um oráculo, registros, geradores de endereços, adaptadores e contratos auxiliares. Os contratos de lens são configuráveis (permitindo que os cálculos sejam adicionados/atualizados individualmente), todos os adaptadores são extensíveis e todas as variáveis de armazenamento podem ser atualizadas. Lens fornece informações filtradas para qualquer usuário por ativo ou protocolo, informações direcionadas para um vault ou mercado do Iron Bank específicos e informações de todo o protocolo.

### Casos de uso

Casos de uso importantes para a lens de Yearn incluem saldos do usuário na rede, saldos do vault e TVL (todos normalizados para USDC por meio de um oráculo on-chain) para todo o protocolo Yearn. Em resumo, lens serve como um ponto de integração simples para qualquer protocolo ou parceiro que deseja obter os dados de Yearn na cadeia rapidamente.

[Código-fonte de lens](https://github.com/yearn/yearn-lens/)

### Meta

O repositório de metadados de Yearn é uma estrutura simples que permite que as configuraçõesde front-end do vault sejam ajustadas muito rapidamente, sem a necessidade de qualquer edição de código. Os membros da equipe Yearn simplesmente precisam editar um arquivo JSON que irá construir e implantar automaticamente os arquivos de metadados IPFS atualizados.

#### Os esquemas e recursos atualmente suportados incluem:

- Ocultar um vault da IU
- Desativar o depósito/saque e/ou zap in/out de um vault
- Indicar se um vault tem uma migração disponível para uma versão mais recente
- Substituir valores de APY
- Nome e descrição da estratégia
- Substituição de símbolo, nome ou ícone de token do Vault
- Símbolo de token subjacente, nome ou substituição de ícone

### Casos de uso

- Configure rapidamente muitos aspectos de um vault, mesmo se você não for um programador (ainda requer revisão de um PR no GitHub)
- Edite a configuração em um só lugar e todos os integradores serão atualizados
- Mantenha o controle sobre os nomes de tokens e vault, ícones e símbolos

[Código-fonte do Meta](https://github.com/yearn/yearn-meta)

### Subgraph

![](image5.png?w=800&h=680)

_Ganhos exibidos no painel e para cada vault_

O principal caso de uso do subgraph de Yearn é agregar e transformar dados históricos da cadeia e torná-los facilmente consultáveis. Como você pode ver na imagem acima, o subgrph é usado atualmente para exibir:

- Histórico de ganhos do usuário com escopo para cada vault
- Histórico de ganhos gerais do usuário
- Histórico de ganhos do Vault (mostrados na página de detalhes do Vault)

Uma vez que os ganhos de cada vault não são nativamente integrados no nível do contrato, usamos nosso subgraph para rastrear eventos de depósitos, retiradas e coletas, que são agregados para que os ganhos possam ser [calculados](https://github.com/yearn/yearn-sdk/blob/master/src/interfaces/earnings.ts).

O ecossistema de Yearn é inerentemente complexo, o que significa que é difícil ter um subgraph que forneça grandes quantidades de dados precisos. Como acontece com todos os aspectos do site, o código é aberto, portanto, se você notar qualquer problema com seus ganhos, sinta-se à vontade para nos informar ou enviar um PR para o repositório de subgraph abaixo.

[Código-fonte do subgraph](https://github.com/yearn/yearn-vaults-v2-subgraph/)

### Exportador

O exportador do Yearn funciona como nossa API primária e contém todos os cálculos APY e TVL. Depende apenas dos dados da rede e também fornece ferramentas para qualquer pessoa verificar sem permissão qualquer aspecto mensurável dos produtos Yearn. Ele suporta a exportação de dados históricos e em tempo real.

[Código-fonte do exportador](https://github.com/yearn/yearn-exporter)

### SDK

![](image6.png?w=800&h=638)

_Diagrama de blocos SDK_

O novo SDK de Yearn é o mecanismo que alimenta nosso novo site v3, e o front-end foi projetado especificamente para consumir dados do SDK. O SDK agrega dados da rede e fora da rede para atender às integrações de front-ends e B2B, buscando dados do lens, exportador, subgraph, meta e [Zapper](https://zapper.fi).

### Casos de uso

-   V3 front-end
- Integradores B2B: o gerenciamento e a configuração do vault são feitos pelo integrador. Uma atualização nos dados que nosso SDK busca significa que os integradores são atendidos automaticamente.
- Painéis do estrategista

[Código-fonte do SDK](https://github.com/yearn/yearn-sdk)

### Front-end

Enquanto a infraestrutura de back-end listada acima gera os dados necessários, o front-end os consome e os apresenta de uma maneira que os usuários possam interagir facilmente com eles.

![](image7.png?w=913&h=696)

_diagrama de bloco do FE v3_

Nosso código de front-end é dividido em duas partes diferentes: **lógica central v3** e **camada IU**.

A **lógica central v3** deve ser fácil de implementar em qualquer repo e é responsável pela comunicação com o SDK e outros provedores de dados externos, não apenas buscando dados, mas também fazendo solicitações POST/WRITE. A lógica central também modela e alimenta a IU com um esquema de dados mais adequado e tradicional, combinando todas as diferentes partes de dados (vaults, tokens, saldos de usuário, etc.).

A **camada da IU** consome os dados diretamente do centro e os exibe conforme desejado em cada repo. Ele pode ser dividido em cinco páginas principais, descritas a seguir.

[Código-fonte do front-end](https://github.com/yearn/yearn-finance-v3)

![](image8.png?w=659&h=398)

_Closeup da barra de navegação lateral e painel_

#### Página Inicial

A página inicial contém uma visão geral de todos os seus ativos em sua carteira, bem como todas as três categorias de produtos Yearn: Vaults, Labs e Iron Bank.

#### Carteira

A visualização da carteira exibe todos os ativos em sua carteira, seu valor total, e permite que você os deposite em qualquer vault ou forneça os tokens para o Banco de Ferro, se houver um mercado disponível.

#### Vaults

Nossa nova página de vaults contém um painel com informações do usuário sobre depósitos de vaults, recomendações (atualmente exibindo vaults de maior rendimento), saldo do token subjacente, valor em dólares e histórico de ganhos para quaisquer depósitos de vaults, bem como APY atual. Clicar em qualquer vault abrirá a página de detalhes do vault.

#### Página de detalhes do Vault

![](image9.png?w=800&h=554)

_Página de detalhes do vault_

A página de detalhes do vault é um URL exclusivo para cada vault (em breve também na página labs) que exibe TVL, APY, informações de token subjacentes, descrições de estratégia, histórico de ganhos do vault e permite aos usuários depositar e sacar.

#### Labs

Uma coisa que os usuários notarão é que yveCRV, yvBOOST e nosso yvBOOST-ETH pJar (um produto lançado em colaboração com [pickle.finance](https://www.pickle.finance)) não estão mais em nossa página de cofres. Em vez disso, todos eles foram movidos para nossa nova seção Labs.

O que é Labs, você pergunta?

Os vaults de Yearn foram originalmente criados com a ideia de terem “somente resultados positivos” e que os usuários poderiam sacar a qualquer momento. Conforme as estratégias de Yearn se tornaram mais sofisticadas e buscamos novas maneiras de gerar rendimento, percebemos que muitas estratégias não são adequadas para essa estrutura específica.

Por exemplo, vários estrategistas têm trabalhado em estratégias de LP unilateral. Entre as taxas de negociação e os incentivos de staking, o rendimento dos fundos em LPs da AMM pode ser bastante lucrativo - mas há um risco óbvio de perda impermanente e/ou perdas de curto prazo, dependendo das flutuações do mercado.

Além disso, protocolos como o Bancor podem exigir um período de espera de 24 horas para liberar fundos. Anteriormente, um requisito como este quebraria o aspecto de “saque a qualquer momento” dos vaults.

Em Labs, permitimos mais flexibilidade e, desde que os usuários estejam cientes das condições desde o início, as estratégias permitirão bloqueio temporário de capital e o potencial de perdas temporárias em busca de maior rendimento sustentável de longo prazo.

#### Iron Bank

Semelhante a dos vaults e labs, a página do Iron Bank mostra um painel com informações relevantes, incluindo total fornecido, total emprestado, limite de empréstimo usado e limite de empréstimo total.

### Recursos adicionais

![](image10.png?w=300&h=410)

_Simulação de um zap excedendo a tolerância de slippage_

#### Simulações

Antes de depositar, retirar ou fazer zaps para dentro ou fora de um vault **nós usamos** [**Tenderly**](https://tenderly.co/) **para simular a transação.** Isso fornece muitas informações benéficas aos usuários antes mesmo de eles enviarem uma transação e se comprometerem a gastar o gás:

- Se a simulação for bem-sucedida, eles poderão ver aproximadamente o número de tokens que serão recebidos.
- Se for simulado que a transação resultará em mais slippage do que a tolerância do usuário (para os zaps), um aviso será exibido para o usuário informando o quanto a slippage real provavelmente seria.
- Se a transação simulada falhar, um aviso será exibido para o usuário.

Para simular uma transação, primeiro precisamos fazer uma chamada para a [API  do Zapper](https://docs.zapper.fi/zapper-api/api-guides/zap-in#check-zap-allowance) para ver se o usuário precisa aprovar o zap. Se isso acontecer, criamos um fork do Tenderly para que possamos preservar o estado entre as simulações. Em seguida, simulamos a transação de aprovação, novamente usando o Zapper, para buscar os dados da transação que precisam ser simulados para a aprovação. Depois que a simulação de aprovação for bem-sucedida, [buscamos](https://docs.zapper.fi/zapper-api/api-guides/zap-in#zap-in) os dados da transação para o zap real e executamos outra simulação. Por fim, podemos ver os dados totalmente simulados sobre o zap, sem precisar que o usuário os aprove primeiro.

Observe que a simulação falhará se você tentar simular uma transação para a qual não tem gás suficiente. Embora as tenhamos testado extensivamente, as simulações são ações complexas, portanto, envie feedback se você tiver quaisquer problemas ou simulações com falha.

#### Mobile

![](image11.png?w=300&h=518)

_v3 experiência móvel_

Outro requisito importante para o novo site era o suporte móvel completo, algo que faltava no passado.

O site agora suporta a exibição de todas as informações em tela de tamanho normal e móvel. Isso inclui o painel do usuário, a funcionalidade de pesquisa, todos os botões de ação (depositar, retirar, fornecer, emprestar), informações APY e modais de transação projetados especificamente com layouts móveis em mente.

Embora atualmente não tenhamos um aplicativo Yearn nativo devido a algumas restrições das App Stores, temos o compromisso de fornecer uma experiência semelhante à nativa em navegadores móveis.

## Futuros Passos

![](image12.png?w=800&h=462)

_exploração do design v3_

### A Fusão

Embora não seja tão dramático quanto a fusão do PoW da Ethereum com o PoS, o objetivo de lançar a web v3 como uma versão beta era estabelecer paridade completa de recursos com nossa interface de usuário da web existente, antes de substituí-la. Além de um período beta para coletar feedback público e detectar bugs, aqui estão alguns itens que estamos implementando:

- Visualizações de detalhes da página do Labs
- Passar o mouse sobre as dicas para corresponder à v2 (APY, cabeçalhos, etc)

### … E além (pós-fusão)

- Nova página inicial com integração aprimorada - **os esboços neste post são algumas das peças de nossa exploração de design v3.**
- APY histórico para vaults
- Histórico de Rendimento e de economia de gás do usuário
- Aprovações de zap out sem consumo de gás
- Estimativas de custo de gás
- Suporte em Vários Idiomas
- Integrar o painel de risco de [yearn.fi](http://yearn.fi/)
- Integração de [Bowswap](https://bowswap.finance/) para facilitar a mudança de vaults de baixo para alto rendimento
- Capacidade de adicionar temas personalizados
- Informações mais detalhadas sobre a posição do usuário na página inicial
- Capacidade de ocultar sobras de tokens na página da carteira
- Várias outras coisas que ainda não podemos anunciar, mas em breve estarão no ar 👻

## Uma palavra de gratidão

![](image13.png?w=2000&h=1125)

_Selfie da equipe Yearn web_

Nada disso seria possível sem a incrível comunidade Yearn, incluindo dezenas de pessoas que enviaram feedback/ideias nos últimos meses, nosso grupo de consultores da web, todos os colaboradores da Yearn e especialmente os designers e engenheiros que trabalharam incansavelmente para fazer isso novo site uma realidade (muitos dos quais são retratados na arte acima).

Se você gostaria de ajudar a contribuir de alguma forma, junte-se ao nosso [discord](https://discord.gg/8rF374XkXy), crie uma questão em um dos [repos](https://github.com/yearn) linkado acima, ou compartilhe seus designs conosco no [twitter](https://twitter.com/iearnfinance)!
