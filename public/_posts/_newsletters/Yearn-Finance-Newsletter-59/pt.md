---
layout: post
title: "Yearn Finance Newsletter #59"
categories: [Newsletters]
image:
  src: ./cover.png
  width: 1000
  height: 500
author: Yearn
date: '2022-04-06'
translator: jameskbh 
---

### Semana que termina em 5 de abril de 2022

![](./cover.png?w=1000&h=500)

Bem-vindo à 59ª edição da Yearn Finance Newsletter. Nosso objetivo com este boletim é manter a comunidade da Yearn e a comunidade cripto em geral informadas sobre as notícias mais recentes, incluindo lançamentos de produtos, mudanças de governança e atualizações do ecossistema. Se você estiver interessado em aprender mais sobre Yearn Finance, siga nossas contas oficiais [Twitter](https://twitter.com/iearnfinance) e [Medium](https://medium.com/iearn).

## Sumário

- Apresentamos o nosso mais novo e poderoso Vault
- Falando de Estratégias com Facu na ETHDubai
- Juntando-se ao DAO Yearn: Onboarding
- Como Yearn usa Tenderly
- Contribuidores da Yearn
- YFI Boarding School
- Vaults na Yearn 
- Notícias do Ecossistema

# Apresentamos o nosso mais novo e poderoso Vault

![](./image2.png?w=900&h=473)

Nosso mais novo Vault Curve Rocket Pool está ativo, e você pode ganhar recompensas de staking ETH nos 2 lados de um pool Curve Finance, com Rocket Pool ETH (rETH) e Lido stETH (wstETH). Como ambos os lados do pool são tokens ETH de staking líquidas, você ganhará recompensas de staking Ethereum, emissões $CRV e taxas de negociação da Curve. Yearn coletará e depositará automaticamente as emissões de CRV e CVX no Vault para aumentar seu rendimento.

Use o Yearn Zaps para depositar qualquer token mais conhecido ($ETH, $USDC, etc.) neste Vault. Zaps irá converter automaticamente o seu depósito para rETH+ wstETH, vai depositá-lo na Curve e vai fazer stake na Yearn em uma única transação.

Ou você pode entrar na Curve Rocket Pool manualmente depositando Rocket Pool ETH (rETH) + Lido stETH (wstETH) na Curve ou depositando seus tokensrETH+wstETH LP na Yearn.

Embarque agora em [https://yearn.finance/#/vaults](https://yearn.finance/#/vaults)

# Falando de Estratégias com Facu na ETHDubai

![](./image3.jpg?w=1024&h=512)

No recente evento ETHDubai, o contribuidor da Yearn, saltyfacu, analisa a essência geral das estratégias da Yearn, nosso negócio principal.

Ele discute as relações entre os Vaults, que são ERC-20s escritos em Vyper, e Strategies, a parte contábil de Yearn, escrita em Solidity. As estratégias fazem todo o trabalho pesado para o ecossistema Yearn e, por exemplo, o yvUSDC é um vault que emprega até 20 estratégias. 

As estratégias carregam uma alocação de capital diferente e podem ser anexadas sem capital inicial alocado. O fluxo aqui é que os usuários interagem com tokens do Vault, que têm estratégias subjacentes para interagir com outros protocolos e DEXs.

Para escrever uma estratégia, você precisará do git, eth-brownie, ganache, do repositório brownie-strategy-mix e do VS Code. Em termos de experiência, você precisará de algum conhecimento de programação, conclusão do CryptoZombies nível 4 ou acima, compreensão de como os protocolos DeFi interagem e muita força de vontade.

Completar e publicar uma estratégia leva seis passos: due diligence, codificação, revisão por pares, experimentação (com Vaults ape tax), comitê de revisão/segurança de agricultura com desenvolvedores do produto principal e, em seguida, produção. Depois de tudo isso, você deve ficar e monitorar a estratégia para garantir que tudo funcione como pretendido.

Confira a palestra completa [aqui](https://youtu.be/ooYgIMlqITQ?t=21266), começando no minuto 5:54:26.

Convidamos você a se envolver, dar feedback e participar da comunidade Yearn juntando-se a nós no [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) ou [Github](http://github.com/yearn) . Venha construir conosco.

# Juntando-se a DAO Yearn: Onboarding

![](./image4.png?w=1024&h=768)

Neste artigo, Cryptouf e Farrahmay oferecem uma cartilha no processo de integração de um DAO, especificamente a Yearn. Leia abaixo um resumo do diálogo.

O que um novo contribuidor deve ter em mente ao tomar a decisão de se juntar a um DAO? Eles precisarão pesquisar a DAO ao qual estão se juntando e seu ethos.

Dado o influxo de novas pessoas para a web3 todos os dias, imagino que possa haver uma onda de novos colaboradores em canais como Discord, Telegram e Twitter. O que Yearn faz para direcionar os contribuidores para o sucesso? Achamos importante esclarecer nossa missão e objetivos, que esperamos que atraiam as pessoas certas para contribuir com Yearn

A integração pode significar coisas diferentes para diferentes DAOs. Como você define DAO Onboading? A Yearn tem um plano formal de integração para novos contribuidores? Nosso processo de integração utiliza os 4 Cs da integração – conformidade, clarificação, cultura e conexão.

O que os contribuidores devem fazer para garantir que sejam bem-sucedidos ao ingressar em uma DAO? Cada pessoa que ingressa em uma DAO terá vários níveis de conhecimento e familiaridade com a Web3, DeFi, engenharia, DAO. Contribuir com sucesso em uma DAO requer que alguém seja um empreendedor e não tenha medo de falar e fazer perguntas.

A primeira onda de contribuidores que se juntaram a uma DAO estava menos preocupada com a compensação, mas em vez disso se concentrou em construir a estrutura e as bases da DAO. À medida que novas ondas de contribuidores se juntam, a compensação é um fator crítico para garantir que os indivíduos se sintam recompensados e possam comprometer o tempo necessário para ajudar a DAO a crescer a longo prazo. A Yearn usa o Coordinape para recompensar seus membros por suas contribuições. Você pode compartilhar mais informações sobre como a Yearn Finance usa o Coordinape e quaisquer prós/contras da ferramenta? O Coordinape é uma ferramenta para que as DAOs incentivem, recompensem e aproveitem seus contribuintes vindos da comunidade.

O Coordinape tem um recurso para adicção de pessoas, então todos os membros têm a opção de adicionar alguém. Esse recurso é incrível para a descentralização, mas quanto mais membros um círculo tem, mais esse recurso pode ser utilizado de forma errônea e os membros podem convidar apenas seus amigos. O que Yearn está fazendo para evitar isso? Alguns membros podem estar envolvidos por alguns meses e, em seguida, deixar a DAO ou apenas ser menos ativo por alguns meses (por qualquer motivo!). Em um mundo utópico, os membros devem relatar isso claramente a outros membros, a fim de receber menos recompensas, ou até mesmo usar a função "opt-out", para que eles não são recompensados quando eles não trabalharam durante algumas vezes. Mas é isso que se passa de fato? Qualquer ferramenta pode mal utilizada, e o Coordinape não é exceção.

Confira o artigo completo [aqui](https://mirror.xyz/cryptouf.eth/WRXKCZmEQvh1kqcn4U4HnY-BjDZQGAEjr1yyAOnHngc). Agradecimentos especiais ao escritor Cryptouf e a contribuidora da Yearn Farrahmay por seus insights.

# Como Yearn usa Tenderly

![](./image5.png?w=1200&h=675)

Estudantes de direito usam adderall. Estrategistas da Yearn usam Tenderly. Com ferramentas de monitoramento, alerta, depuração e análise de incidentes, o Tenderly transforma usuários DeFi hardcore de todos os lugares em super-humanos.

Mas é tão simples, que qualquer um pode usá-lo. Em seu último post, o colaborador da Yearn, MarcoWorms, orienta você sobre o processo de configuração de alertas para o Telegram para praticamente qualquer ação na cadeia em todas as principais blockchains EVM. Zero programação necessária.

Clique [aqui](https://medium.com/iearn/setup-notifications-for-blockchain-transactions-with-tenderly-407a3df6e1ba) para ver um exemplo do mundo real. Lá, o Worms mostra exatamente como configurar um bot do Telegram que monitora depósitos e retiradas do yVault $SPELL e alerta você à medida que essas transações acontecem.

O que vem a seguir é com você.

#  Contribuidores da Yearn

![](./image6.jpg?w=800&h=510)

Se Yearn valoriza uma característica mais do que qualquer outra, é a vontade de agir. Está tão enraizado na cultura da Yearn, que chamamos nossos colaboradores mais ativos de *Doers*. É um substantivo e um descritivo, mas é mais do que isso... é um mandamento para agir.

Como uma DAO descentralizada, Yearn não tem chefes, nem códigos de vestimenta, nem pistas para promoção ou passeios de golfe com o CEO. Yearn tem apenas colaboradores. Tal como acontece com qualquer DAO, existem vários níveis de participação.

No primeiro nível, há usuários, detentores de tokens, eleitores e investidores. Numa camada mais profunda, há contribuidores – pessoas em todo o mundo que ativamente gastam tempo em um ou mais dos muitos projetos da Yearn.

Os contribuidores alinham seus esforços (e são compensados se quiserem) através da ferramenta de coordenação da DAO criada na Yearn: Coordinape. Lá, os contribuidores se dividem em círculos e gratificam os esforços um do outro a cada mês. Alguns trabalham em Yearno uma hora por semana; outros, várias horas por dia. As tarefas não são atribuídas, mas buscadas. E não há um silo rígido onde os contribuidores são forçados a ficar.

Eles podem cruzar fronteiras para ajudar outros círculos: da engenharia aos gráficos, das traduções às estratégias, da escrita ao planejamento de eventos. Os contribuidores vêm em todas as formas e tamanhos, de todas as geografias. Eles são animadores dos fantásticos codificadores experimentais e Gerentes de Produtos unidos por um sentimento de que chegou a hora da mudança. A cada contribuição, eles aprofundam seus laços de confiança dentro da DAO.

Muitos trabalham em tempo integral em outros lugares. Alguns contribuem para meia dúzia de DAOs. Mas todos são atraídos por sua paixão pelo que Yearn está construindo. Quando um contribuidor quer se comprometer complatamente, ele pode se tornar um Doer.

Todavia, que significa isso, concretamente? Doers contribuem com mais regularidade. Eles ajudam a orquestrar todas as peças móveis da grande máquina. Eles não são empregados. Mas são o que o nome descreve: são Doers.

Eles fazem as coisas que Yearn precisa fazer para evoluir, crescer e mudar. Eles avançam contra os muros. Eles os derrubam. Eles constroem o que os outros meramente falam. Como todos os contribuidores da Yearn, os Doers não aceitam o status quo. Eles são agentes de mudança. Eles são exploradores. Eles são caçadores. Eles são construtores. E eles acreditam que há um Doer dentro de todos nós. 

O industrialismo e as corporações passaram gerações suprimindo a vontade de fazer. Querem que perguntemos antes de agir. Eles confundem análise com progresso. Eles contratam consultores para desenvolver roteiros sofisticados. Eles estabelecem marcadores e marcos para cada centímetro de progresso. Eles devem saber como cada minuto gasto se traduz em lucros. Há uma razão pela qual as corporações não inventaram blockchains, no entanto

Contribuir para a Yearn é um ato de desafio. É um ato de pegar de volta a permissão. Não é apenas sonhar. É Fazer.

CODA (final)

Na Yearn, a porta está sempre aberta. Mas só você pode entrar por ela.

# YFI Boarding School

![](./image7.png?w=968&h=625)

YFI boarding school é um programa inovador para estrategistas em potencial fazerem perguntas e aprenderem. Não é como uma escola regular, mas os estrategistas seniores dedicam horas específicas periodicamente para ajudar os jovens talentos a evoluir.

Para ingressar na YFI boarding schooI, você deve: passar pelo processo geral de integração, indicar interesse no desenvolvimento de estratégias, trabalhar em uma estratégia ou construir ativamente uma estratégia e, por fim, ser convidado a participar.

Além disso, você pode se juntar ao ser apresentado à pílula azul por qualquer contribuinte principal do Yearn.

"O que é isso?", você pode perguntar Você saberá quando eles vierem até você.

Inscreva-se [aqui](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda) para ter a chance de ingressar na YFI boarding school.

# Vaults na Yearn 

Você pode ler uma descrição detalhada das estratégias para todos os nossos yVaults ativos [aqui](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

# Notícias do Ecossistema

[A Yearn integrou a Huobi Wallet à nossa UI](https://twitter.com/HuobiWallet/status/1503939305135247365)

[Alchemix, um protocolo baseado na infraestrutura Yearn, lançou recentemente seu V2](https://twitter.com/AlchemixFi/status/1503747272143740942)

[Confira a nova arte Yearn do PILLS Universe](https://twitter.com/pillsuniverse/status/1502662158810759168)

[Steakwallet fornece uma das UIs mais simples de depositar em Vaults Yearn](https://twitter.com/steakwallet/status/1502018618506293248)

[A Sturdy Finance adicionou novas garantias da fBEETS fornecidas pela Yearn na rede Fantom](https://twitter.com/SturdyFinance/status/1509962174629875726)

[Confira uma prévia do design do Yearn v3](https://twitter.com/Wot_Is_Goin_On/status/1504907339182321666)

[Ouça a tracheopteryx falando sobre DAOs no podcast Delphi DISRUPTORS](https://twitter.com/tracheopteryx/status/1511000392552763399)

[Ganhe altos rendimentos fixos no USDC e DAI no Tempus Finance, que roda com Yearn](https://twitter.com/TempusFinance/status/1508823240768167943)

[Uma votação para adicionar yvYFI como garantia para a stablecoin MAI foi lançada](https://twitter.com/QiDaoProtocol/status/1507430869107150849)

[Transações Yearn sem consumo de gás na rede Fantom são possíveis graças a wido](https://twitter.com/joinwido/status/1506718710836436996)
