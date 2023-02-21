---
layout: post
title: "Yearn Finance Newsletter #52"
categories: [Newsletters]
image:
  src: ./cover.jpeg
  width: 1152
  height: 576
author: Yearn
date: '2022-01-02'
translator: jameskbh
---


### Semana que termina em 2 de janeiro de 2022

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/cover.jpeg?w=880&h=440)

Bem-vindo à 52ª edição da Yearn Finance Newsletter. Nosso objetivo com este boletim é manter a comunidade da Yearn e a comunidade cripto em geral informadas sobre as notícias mais recentes, incluindo lançamentos de produtos, mudanças de governança e atualizações do ecossistema. Se você estiver interessado em aprender mais sobre Yearn Finance, siga nossas contas oficiais [Twitter](https://twitter.com/iearnfinance) e [Medium](https://medium.com/iearn).

## Sumário

- YIP-65 entra em votação
- [Proposta] - Programa Piloto de Recompra DCA - Mean Finance
- Refletindo sobre Yearn
- Yearn recebeu uma doação de 1 milhão de FTM da Fantom Foundation
- Vaults na Yearn
- Notícias do Ecossistema

## YIP-65 entra em votação

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image2.jpg?w=980&h=871)

Em resumo, o YIP-65 procura evoluir o papel que a YFI desempenha no Yearn em quatro fases distintas, consolidando a visão do token como a base fundamental da governança.

Isso será feito direcionando uma parte da YFI que é comprada de volta pela Tesouraria como resultado de [BABY](https://yips.yearn.finance/YIPS/yip-56) como recompensa para os detentores de token YFI que ativamente participarem da Governança de Yearn.

Então, o papel que YFI desempenha na Governança de Yearn será desenvolvido por meio de quatro componentes distintos.

1: xYFI. Distribuir YFI que foi comprado de volta com tokens da Tesouraria, como recompensas em um vault YFI.

2: YFI bloqueado para votação. Introduzir bloqueio de estilo "ve" de YFI (veYFI) por até quatro anos (duração máxima exata a ser definida), onde uma duração de bloqueio mais longa dá uma maior participação no poder de voto e nas recompensas YFI. Uma saída antecipada do bloqueio é possível, pagando uma penalidade que é recompensada aos outros detentores de token bloqueados.

3: Vault Gauges + Votação. Introduzir gauges de vaults onde os depositantes do vault fazem staking de seus tokens do vault e ganham recompensas YFI de acordo com seu peso veYFI. YFI são alocados para gauges com base em votos semanais de governança.

4: Recursos de "trabalho útil". Expandir os deveres e responsabilidades dos eleitores veYFI e seu YFI bloqueado, em troca de ganhar recompensas de protocolo adicionais. Pendente o projeto do vault v3 a ser definido.

Em seguida, um mandato será dado aos Desenvolvedores do Yearn para implementar os componentes acima a seu critério, conforme e quando se tornarem viáveis.

Finalmente, o YFI elegível para votar na Governança de Yearn será restrito apenas àqueles em stake em xYFI (da Fase 1 em diante) ou com bloqueio para votação em Yearn (da Fase 2 em diante).

Leia mais sobre as atualizações e benefícios da tokenomics propostos [aqui](https://gov.yearn.finance/t/yip-65-evolving-yfi-tokenomics/11994) e vote em snapshot [aqui](https://snapshot.org/#/ybaby.eth/proposal/0x8f7417fa5565d9f46e16618503e8808c36d51b2a9e8217a68c632d7c090d69d9).

Agradecimentos especiais aos autores: @0xJiji, @banteg, daryllautk, HAtTip3675, @onlylarping, @vany365 e @Wot_Is_Goin_On por criarem esta importante proposta.

## [Proposta] - Programa Piloto de Recompra DCA - Mean Finance

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image3.jpg?w=690&h=301)

O objetivo deste programa piloto é fornecer uma melhor compreensão por meio de exemplos de que a DCA é a melhor maneira de executar recompras dentro da tesouraria.

A equipe do Yearn, com base na aprovação de uma votação do Snapshot, alocará US$ 1 milhão em ETH (249,376559 ETH @ US$ 4010 por ETH) para este programa de recompra e criará uma posição de 30 dias YFI para ETH dentro da Mean Finance a uma taxa de 8,31255197 ETH por dia

A equipe Mean espera ter pelo menos alguns efeitos retumbantes dentro da comunidade e liderança do DAO.

Leia mais sobre a proposta [aqui](https://gov.yearn.finance/t/proposal-mean-dca-buyback-pilot-program/12065).

## Refletindo sobre Yearn

É 2022, hora de re-analisar suas apostas DeFi. Aqui está uma breve visão geral de por que Yearn é diferente.

Embora o Yearn seja geralmente rotulado como um “agregador de rendimento”, isso pode levar à ideia de que uma equipe trabalha para gerar um rendimento. Pior ainda, às vezes é considerado um simples coletor de CRV. Esta não é uma maneira correta de entender Yearn.

Atualmente, existem restrições significativas na geração de rendimento, como um pequeno grupo de pessoas que podem construir estratégias, altas taxas de gás limitando certas estratégias, falta de protocolos testados para construir estratégias e falta de maneiras de automatizar processos.

Em vez de esperar que essas restrições diminuam (e já estão com mais estrategistas sendo integrados, outras cadeias e L2s com taxas baixas), Yearn vem construindo silenciosamente infraestrutura para otimizar a interação entre protocolos, estrategistas e capital em escala.

Yearn vem construindo a máquina que constrói a máquina de agregação de rendimento (parafraseando Musk), pronta para um mundo de um número cada vez maior de tokens, protocolos complexos, cadeias, estrategistas, ferramentas e capital.

Com US$ 7 bilhões em hacks DeFi em 2021, o foco principal tem sido a segurança. A maioria dos protocolos DeFi limita os riscos financeiros ajustando parâmetros (por exemplo, protocolos de empréstimo reduzem o valor do empréstimo para garantia de ativos mais arriscados) e minimizam os riscos tecnológicos concentrando-se em uma coisa (por exemplo, empréstimos).

O Yearn faz o DeFi da maneira mais difícil, pois combina vários protocolos e estratégias em um único vault. Outros protocolos se gabam do número de auditorias que fizeram. A yAcademy de Yearn está treinando a próxima geração de auditores - ajudando a acelerar a aprovação de novas estratégias.

Depois da segurança, vem a eficiência do capital – descobrir como um vault deve ser dividido em protocolos de empréstimo, LPs, oportunidades de farm alavancadas e outras estratégias para otimizar os retornos ajustados ao risco. E, em seguida, tentar automatizá-lo.

Parte da razão por trás do "lançamento justo" de YFI foi a percepção de que produzir um alto rendimento ajustado ao risco para os trilhões de dólares em TradFi seria muito trabalho para uma equipe. A escola de YFI agora está treinando estrategistas de primeira viagem.

A escalabilidade requer a redução de processos manuais - recompras, coletas, alteração dos pesos da estratégia, hedge após movimentos de preços. Não é por acaso que André criou Keep3r. Existe até um grupo de análise de dados trabalhando no momento ideal para fazer recompras.

Coordenação com descentralização – como construir um sistema que incentive pessoas que nunca se encontraram a fazer tudo isso acontecer? O Coordinape ajuda - uma ferramenta cujas origens remontam a um grupo de Yearn que se deparou com o problema - agora está sendo usado por inúmeros DAOs.

Cada novo protocolo DeFi cria uma oportunidade potencial para um estrategista. A nova estratégia melhora o rendimento ajustado ao risco para os vaults, o que incentiva mais capital, levando a mais taxas que podem ser usadas para construir essa plataforma.

Os exemplos neste tópico mostram como Yearn está tentando resolver os problemas generalizados no DeFi. O termo "protocolo DeFi" não parece fazer justiça, talvez Yearn possa ser melhor descrito como um DAO fintech.

Obrigado a Wot_Is_Goin_On pelo tópico incrível que pode ser encontrado [aqui](https://twitter.com/Wot_Is_Goin_On/status/1477277152336916484).

## Yearn recebeu uma doação de 1 milhão de FTM da Fantom Foundation

![](/_posts/_newsletters/Yearn-Finance-Newsletter-52/image4.jpg?w=1100&h=1092)

Yearn recebeu uma doação de 1 milhão de FTM da Fantom Foundation.

Nós não nos desfizemos deles, mais de 90% foi doado para o vault de FTM. Outros vaults receberam uma doação proporcional para um aumento imediato de 1% no valor.

Este subsídio é o primeiro de muitos, continuaremos recebendo mais à medida que atingirmos as metas da TVL.

## Vaults na Yearn

Você pode ler uma descrição detalhada das estratégias para todos os nossos yVaults ativos [aqui](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3).

## Notícias do Ecossistema

[Confira o novo painel Smart Savings do DeFi Saver, incluindo Yearn](https://twitter.com/DeFiSaver/status/1476614075815809028?s=20)

[Veja o moletom do contribuidor do Yearn 2021 feito por loldefi](https://twitter.com/loldefi/status/1477062572595884032)

[Yearn continua a recomprar yvBOOST](https://twitter.com/wavey0x/status/1474946151006842884)

[Leia uma análise sobre incentivos $CRV, incluindo yvBOOST](https://twitter.com/0xSEM/status/1475284063204388867)
