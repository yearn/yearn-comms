---
title:  "Risco, Ferramental, & Insight"
image:
  src: ./cover.jpg
  width: 1500
  height: 500
date: "2021-08-12"
author: Storm Blessed
translator: jameskbh
---

fonte: [twitter](https://twitter.com/storming0x/status/1436851219864059906)

##### 1
Ao criar alguns códigos no fim de semana, decidi fazer uma tempestade de tweets sobre como [@iearnfinance](https://twitter.com/iearnfinance) aborda risco, ferramentas e percepções nos bastidores.

🧵 👇

##### 2
Se você não conhece [yearn.finance](http://yearn.finance), pode pensar nele como o "protocolo da geração de rendimento". Seu produto principal são os Vaults. Coloque dinheiro nos vaults e, de alguma forma, no dia seguinte esse dinheiro crescerá e continuará crescendo constantemente. Esta é uma simplificação exagerada, é claro.

##### 3
Isso é possível por conta de uma equipe de pessoas inteligentes que codificam estratégias para que o vault aloque dinheiro com o objetivo de obter retornos. 
As estratégias são contratos inteligentes que precisam ser implantados e atualizados com frequência. Esses contratos inteligentes são flexíveis e dinâmicos. Exemplo de alocações:

![3_1436841383378120712](3_1436841383378120712.jpg?w=1200&h=663)

##### 4
Dada a forma como o protocolo yearn funciona, ele precisa de agilidade para lançar novos contratos e estratégias rapidamente, o que tem implicações na segurança. Uma das principais preocupações da yearn é o risco, de todas as perspectivas. Estamos na fronteira no negócio de risco. Como equilibrar isso?

##### 5
Precisamos criar uma estrutura de tratamento do risco. Para obter uma imagem. Este é o número de vaults + estratégias implementadas atualmente. Não há como contornar a complexidade desse sistema, muitas peças precisam se encaixar para que isso funcione. 

![3_1436842206359285762](3_1436842206359285762.jpg?w=398&h=117)

##### 6
Na minha vida anterior, tive formação em sistemas aeronáuticos. Acho que muitas lições podem ser tiradas da Aviação, que também é um negócio de risco. A complexidade, como em finanças, é alta. Mesmo assim, você não pensa duas vezes em reservar um voo para sua próxima viagem.

##### 7
Todos os dias, milhões de voos ocorrem, e muitos voos apresentam incidentes. Um incidente não leva a um acidente = queda de avião. Você precisa de muitos incidentes ao mesmo tempo para que um avião caia. Isso nas operações atuais das companhias aéreas é extremamente improvável.

##### 8
Mas toda vez que ocorre um incidente, o processo e os sistemas da aviação exigem que você corrija e conserte a causa raiz. Implementamos um processo semelhante em yearn, cada sala de guerra não leva à perda de fundos, mas somos obrigados a aprender com isso e melhorar.

##### 9
Este processo foi implementado no início deste ano, após um mês realmente ruim de incidentes e salas de guerra. E várias iniciativas foram iniciadas e implementadas para automatizar e remover os fatores humanos tanto quanto possível de nossas decisões diárias.

[twitter.com/storming0x/sta…](https://twitter.com/storming0x/status/1395452522840608768?s=20)

> ![storming0x](storming0x-881012267675820034.jpg?w=48&h=48)
> Storm Blessed 0x ([@storming0x](https://twitter.com/storming0x))

> Acabamos de sair de uma sala de guerra de mais de 16 horas lidando com uma situação em yearn. Extremamente cansado, mas grato por ter a chance de fazer parte deste time incrível.

Crise resolvida e nenhum dinheiro perdido. Muitos aprendizados importantes e coisas que tornarão [@iearnfinance](https://twitter.com/iearnfinance) mais forte. Preciso 😴

##### 10
É claro que o processo ainda pode ser melhorado, e é um processo constante, mas em yearn o que não nos mata com certeza nos fortalece. Faz parte do meu trabalho tornar esse processo enraizado no DNA de Yearn.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/EMERGENCY.md)

##### 11
Tínhamos salas de guerra onde o código tinha um bug e contabilizava incorretamente, o que levava a salas de guerra e problemas.
Correções:

- Adicionamos bots de simulação para detectar problemas antes que aconteçam na rede.
- Verificações de integridade na rede que revertem uma transação se as verificações não forem atendidas.

[github.com/yearn/yearn-de…](https://github.com/yearn/yearn-devdocs/blob/master/docs/developers/v2/DEPLOYMENT.md#health-checks)

##### 12
O bot de simulação está vinculado a alertar em nosso telegram e nos enviar com antecedência qualquer problema. Recentemente, tivemos uma sala de guerra completamente eliminada por uma simulação, a estratégia foi desativada sem ter que corrigir nada na rede. Mudamos de ação corretiva para preventiva

![3_1436848158034644993](3_1436848158034644993.jpg?w=652&h=780)

![3_1436848166805000195](3_1436848166805000195.jpg?w=984&h=748)

![3_1436848196399996929](3_1436848196399996929.jpg?w=1200&h=1000)

##### 13
[yearn.watch](http://yearn.watch) é o site que construí para rastrear estratégias e o estado dos vaults. Utiliza uma ótima peça em infra-estrutura construída internamente pela equipe da yearn para buscar dados. Temos contratos multichamada especializados para poder obter esses dados de forma eficiente para a tomada de decisões. 

![3_1436848846378729473](3_1436848846378729473.jpg?w=1200&h=739)

![3_1436848859322273796](3_1436848859322273796.jpg?w=1200&h=767)

##### 14
Também temos um painel de risco que criamos para pontuar cada estratégia para avaliar nosso risco a qualquer momento. Isso é preenchido por nossa infra-estrutura interna e ajustado automaticamente por mudanças na rede.
(Dados de amostra abaixo)

![3_1436849527198085126](3_1436849527198085126.jpg?w=1200&h=498)

![3_1436849597129715717](3_1436849597129715717.jpg?w=583&h=433)

![3_1436849615987351553](3_1436849615987351553.jpg?w=719&h=314)

##### 15
Esta é uma ferramenta de risco interna que foi adicionada muito recentemente, ainda é muito cedo para se tornar pública, uma vez que estamos ajustando nossos dados e modelos para tentar chegar a uma pontuação objetiva de acordo com nosso processo interno. Assim que coletarmos mais dados sobre isso, ficarei feliz em compartilhar mais sobre ela.

##### 16
Estamos longe de resolver o risco e a segurança do contrato inteligente, mas a única coisa que podemos fazer é continuar tentando. Esperamos que essa visão dos bastidores possa informar outros projetos no ecossistema para ajudá-los, ou quem também venham a apresentar outras ideias das quais todos possamos nos beneficiar.

Obrigado pela leitura!

