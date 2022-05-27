---
layout: post
title: "Yearn Finance Newsletter #62"
categories: [Newsletters]
image:
  src: ./cover.jpg
  width: 576
  height: 288
author: Yearn
date: '2022-05-23'
translator: jameskbh
---

![](./image1.jpg?w=900&h=453)

Bem-vindo à 62ª edição da Yearn Finance Newsletter. Nosso objetivo com este boletim é manter a comunidade da Yearn e a comunidade cripto em geral informadas sobre as notícias mais recentes, incluindo lançamentos de produtos, mudanças de governança e atualizações do ecossistema. Se você estiver interessado em aprender mais sobre Yearn Finance, siga nossas contas oficiais [Twitter](https://twitter.com/iearnfinance) e [Medium](https://medium.com/iearn).

**Resumo**

- V3 Vaults estão chegando
- Novo Site Yearn Watch
- Lista de Permissões de Yearn
- Pessoas de Yearn: MarcoWorms
- Yearn Quer Comprar Seu YFI
- Vaults na Yearn
- Notícias do Ecossistema

## V3 Vaults estão chegando

![](./image2.jpg?w=900&h=429)

Os Yearn v3 Vaults são uma revisão completa de nossos sistemas, e aqui estão seis dos principais recursos que estamos animados para implantar.

Tranches júnior: Yearn sempre foi comprometida com Vaults "up-only" - Vaults que fazem todo o possível para evitar hacks ou perdas. A contrapartida da maior segurança é muitas vezes rendimentos mais baixos. v3 irá introduzir "tranches júnior", para permitir Vaults de maior risco, em busca de maior recompensa.

Solidity: v2 Vaults são escritos em Vyper, e agora v3 usa Solidity. Isso significa que o Yearn pode tocar em uma base de desenvolvedores muito maior (de acordo com DefiLlama ~69% do código DeFi é escrito em Solidity vs ~10% para Vyper). O melhor de tudo, os fãs do Vyper ainda podem usá-lo com os módulos v3.

Tokens de Vaults padronizados com ERC-4626: Os contribuidores da Yearn ajudaram a criar um novo padrão de token para o Ethereum: ERC-4626. Os tokens com rendimento do v3 serão totalmente compostáveis com todos os outros projetos construídos no ERC-4626.

Gás otimizado: os estrategistas usam ySwaps para fazer trocas de tokens nos Vaults. Numerosas melhorias de código tornarão este e outros processos radicalmente mais eficientes em termos de gás, o que deve impulsionar os APYs em todos os Vaults.

Estratégias flexíveis: Mais estratégias com melhor modularidade tornarão os Vaults da Yearn uma ordem de magnitude mais flexíveis. Eles não estão mais limitados a 20 estratégias por Vault e os parceiros podem até compartilhar o controle sobre o gerenciamento do Vault. Mal podemos esperar para ver como outros protocolos usarão o Yearn v3.

Automação: Ao aproveitar a Rede Keep3r, a Yearn v3 automatizará quase todos os aspectos do gerenciamento dos Vaults. v3 colocará 100% de automação de Vaults como algo possível. E permitirá uma melhor proteção MEV com coletas em tempo real.

A atualização v3 é a maior coleção de atualizações da história da Yearn.

Com tranches júnior, modularização, tokens de rendimento compostáveis e uma linguagem de programação mais acessível, o v3 introduzirá combustível de foguete na capacidade de inovação da Yearn.

Nas palavras de Skeletor Spaceman, "Queremos agir rápido e não quebrar as coisas". v3 é como Yearn chega lá. Prepare-se para uma enxurrada de produtos.

Leia mais sobre os Vaults v3 [aqui](https://medium.com/iearn/yearn-vaults-v3-36ce7c468ca0).

Convidamos você a se envolver, dar feedback e participar da comunidade Yearn juntando-se a nós no [Discord](https://discord.gg/8rF374XkXy), [Twitter](http://twitter.com/iearnfinance) ou [Github](http://github.com/yearn) . Venha construir conosco.

## Novo Site Yearn Watch

![](./image3.jpg?w=900&h=705)

O novo site [yearn.watch](https://yearn.watch/) foi lançado e oferece muitas atualizações nessa última iteração.

Algumas dessas atualizações incluem tempos incríveis de carregamento rápido, novas skins de UI/UX e melhorias em abundância e alertas.

Adicionalmente, uma quantidade significativa de detalhes foi adicionada ao novo site, com novas visualizações para riscos e muito mais. Há muito mais coisas em andamento, já que o site foi assumido por uma nova equipe de colaboradores.

## Lista de Permissões de Yearn

![](./image4.jpg?w=900&h=429)

Para tornar o site da Yearn ainda mais seguro, um novo recurso foi recentemente introduzido, denominado Lista de Permissões (Allowlist). Em essência, permite que todas as transações que são feitas através do site/SDK sejam validadas contra um contrato on-chain que mantém um registro de todos os dados válidos que o site pode produzir.

Isso evita que o site seja suscetível a vários ataques man-in-the-middle onde os dados são fornecidos ao site, seja através da API do Zapper/0x ou da própria Yearn. Por exemplo, se a API do Yearn retornar uma lista de Vaults com endereços maliciosos, com a intenção de que os usuários aprovem um deles ao tentar depositar, a Lista de Permissões impedirá que a transação seja feita.

Convidamos outros protocolos a também a tomar proveito da criação de suas próprias listas de permissões para aumentar sua segurança. As instruções para criar sua própria Lista de Permissões são detalhadas mais adiante.

Clique [aqui](https://medium.com/iearn/yearn-allowlist-71757d4e3cf4) para saber mais sobre a lista de permissões Yearn.

## Pessoas de Yearn: MarcoWorms

![](./image5.jpg?w=380&h=380)

MarcoWorms é um colaborador da Yearn que faz marketing e escreve conteúdo que você pode ver muitas vezes nestes boletins informativos e no Twitter.

Antes de ingressar na Yearn, Marco estava mergulhando em cripto e estava cansado de fintech e do modelo VC. Ele descobriu sobre o Yearn depois de aprender sobre DeFi e ler o manifesto da Pílula Azul.

Na Yearn, Marco geralmente passa seu dia colaborando ou escrevendo novos artigos. Se ele não está escrevendo artigos, ele está nos grupos sociais Yearn ajudando as pessoas, sempre que tenham perguntas.

Como sempre, a Yearn promove uma cultura descontraída que permite que qualquer pessoa de todas as origens floresça, e Marco reconhece que realmente incentivamos os contribuidores a fazer o que acreditam.

Confira [a entrevista completa](https://medium.com/iearn/people-of-yearn-marco-worms-c9bb139d278e) do colaborador da Yearn Defiglenn.

## Yearn Quer Comprar Seu YFI

![](./image6.jpg?w=900&h=450)

Soubemos que algumas pessoas estão vendendo.

Ótimo, porque estamos comprando.

Como o YFI é crucial para a construção da Yearn (devido ao seu papel em nossas estratégias de remuneração e retenção), estamos continuamente comprando de volta o YFI do mercado aberto. A partir de agora, ofereceremos este serviço ao invés de compras totalmente manuais no mercado.

Nosso saldo de buyback será regularmente recarregado com DAI e está sempre disponível a comprar de volta seu YFI ao preço de mercado, servido por um oráculo Chainlink. As estatísticas agora são em tempo real para total transparência da atividade de recompra.

[https://yearn.clinic](https://yearn.clinic/) ou [https://buyback.yearn.finance/](https://buyback.yearn.finance/) são os links para vender o YFI para nós.

## Vaults na Yearn

Você pode ler uma descrição detalhada das estratégias para todos os nossos yVaults ativos [aqui](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Notícias do Ecossistema

[O YFI foi ativado em privacidade pela Incognito Chain](https://twitter.com/IncognitoChain/status/1527045614273544200)

[Sturdy Finance está oferecendo os maiores APYs no USDC em todas as cadeias, com tecnologia da Yearn](https://twitter.com/pgpsam/status/1526301386173992961)

[As estratégias do Bancor v3 chegarão em breve a Yearn](https://twitter.com/iearnfinance/status/1524417579539779585?s=20&t=cFsaa8mpS97O9Gvbhjm0iQ)

[Starkswap anuncia a Iron Fleet em colaboração com a Yearn](https://twitter.com/starkswap/status/1523695464180510721?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Confira um workshop de Yearn com Skeleter Spaceman](https://twitter.com/iearnfinance/status/1524491263344533506?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Os pools Yearn agora são rastreados individualmente no DefiLlama](https://twitter.com/DefiLlama/status/1524968130967216146?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Um novo vault Lido stETH foi ativado, para o novo pool concentrado Curve](https://twitter.com/iearnfinance/status/1524913700334731264?s=20&t=0eYE4R6Ip9eG2SmowIrFYw)

[Confira a gravação de uma conversa sobre o Coordinape](https://twitter.com/YFI_interns/status/1525159821321830403)
