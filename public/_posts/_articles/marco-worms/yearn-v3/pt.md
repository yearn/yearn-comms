---
title:  "Yearn Vaults v3"
image:
  src: ./image1.jpg
  width: 900
  height: 429
date: '2022-05-03'
author: Marco Worms
translator: jameskbh 
---

![](./image1.jpg?w=900&h=429)

Tendo em vista as mudanças emocionantes que os Vaults v3 estão trazendo para desenvolvedores e degens, conversei com o colaborador Yearn liderando a equipe de design v3. Fiquei surpreso ao saber sobre o número de novos recursos! Inicialmente, nossa conversa começou em torno do padrão [ERC-4626](https://twitter.com/iearnfinance/status/1511444220850184197) que padroniza os vaults entre os protocolos, mas acontece que isso é apenas a ponta do iceberg.

## O objetivo do v3 é melhorar todos os principais aspectos dos Yearn Vaults

### Segurança

Manter a posição de Yearn como o melhor da classe em práticas de segurança DeFi.

### Desenvolvimento

Reduzir o atrito para criar estratégias, e permitir uma gama mais ampla de estratégias para um Vault.

### Automação

Permitir que mais funções do Vault, além da coleta, sejam automatizadas, ficando um passo mais perto do sonho do Vault 100% automatizado.

## Para lidar com o escopo v3, os desenvolvedores estão trabalhando no seguinte:

### Aumentar modularidade

Implementar código que seja simples de forma robusta no contrato yVault, o que permite que uma lógica mais inteligente seja colocada em módulos que podem ser iterados.

Adotar o padrão ERC-4626, que permite que nossos Vaults sejam compatíveis com quaisquer outros protocolos que o sigam.

### Melhorar a relação Vault <-> Estratégia

Permitir formas mais simples de testar e implantar estratégias e, em geral, incluir mais ferramentas para lidar com uma gama mais ampla de possibilidades de rendimento, incluindo o bloqueio de fundos, estratégias mais arriscadas e estratégias multicadeia.

### Criar novos produtos

Criar novos produtos como Junior Tranches, que permitem estratégias mais arriscadas e que os usuários escolham uma opção de depósito de maior risco.

Permitir mais de 1 Vault para cada tipo de token.

Permitir que os Vaults sejam controlados por multisigs que podem ser compartilhados com protocolos de parceiros.

## Flexibilidade

v3 dará aos desenvolvedores e estrategistas mais flexibilidade para enviar código para a produção. Ele aumenta a modularização dos contratos e também abre portas para novas formas de depósito em Vaults.

Também veremos uma melhor automatização dos contratos periféricos: na v2 apenas as funções de coleta são automatizadas e, na v3, chegaremos mais perto de um Vault 100% automatizado porque agora as funções mais importantes são mais fáceis de automatizar com a [Keep3r Network](https://keep3r.network/).

> **Queremos nos mover rápido e não quebrar as coisas** — Skeletor

## Estratégias bombadas

Os vaults v2 tinham um limite de 20 estratégias por cofre, na v3 esse limite será aumentado. Além disso, as estratégias mais arriscadas seguirão agora um modelo de contrato análogo às [Tranches Sênior/Júnior](https://corporatefinanceinstitute.com/resources/knowledge/finance/junior-tranche-debt/).

Estratégias mais arriscadas agora terão um contrato Junior Tranche, o que significa que o usuário primeiro depositará tokens em um Vault e poderá então optar por depositar os tokens do Vault em um contrato de tranche júnior para uma opção de maior risco/maior recompensa. Os usuários também podem escolher estratégias específicas para se concentrar. Este é um recurso opcional que as pessoas com um apetite de maior risco podem querer explorar.

Outra coisa em que a equipe v3 está trabalhando é como descentralizar o [endosso de estratégia](https://medium.com/iearn/how-new-yearn-vault-strategies-are-endorsed-8c0e0870790d). Hoje muitos aspectos de auditoria de segurança na Yearn são centralizados. Mas ser capaz de descentralizar esse processo daria mais espaço para escalar o produto.

Outros recursos se concentram em melhorar o uso geral dos Vaults pelos usuários, estrategistas e desenvolvedores, como:

- ySwaps (o serviço que os estrategistas usam para fazer trocas de token) está sendo otimizado para eficiência de gás.
- as coletas v2 levam 6 horas para que os preços das cotas do Vault subam, mas em v3 o tempo é dinâmico, melhorando a proteção MEV.
- O aumento da modularidade em torno dos processos do Vault nos permite fazer parcerias mais estreitas com outros protocolos e construir soluções mais especializadas para seus casos.

## Código dos Vaults

O código dos Vaults v2 é escrito em [Vyper](https://vyper.readthedocs.io/en/stable/), mas a v3 é construído em [Solidity](https://docs.soliditylang.org/en/v0.8.13/).

Vyper é uma linguagem sólida como provado pelo sistema v2, mas tem um pool de desenvolvedores menor. Nossa decisão de ir com Solidity foi baseada, entre outros fatores, no acesso ao maior pool de desenvolvedores necessário para um projeto crítico como este. Vemos um futuro brilhante para a Vyper e continuaremos a explorá-lo em Yearn com contratos inteligentes, qualquer um dos módulos em torno de Vaults pode ser feito usando-o.

![](./image2.jpg?w=900&h=253)\
*[Defillama - Estatísticas de uso de linguagem de programação de blockchain](https://defillama.com/languages)*

As estatísticas sobre linguagens de programação usadas em blockchains podem ser monitoradas em [Defillama](https://defillama.com/languages), no momento o Vyper representa cerca de 10% e o Solidity 69%. Isso reflete a dominância do mercado da Solidity e, como precisávamos de mais colaboradores para desenvolver a v3, escolhemos a tecnologia que nos permitiria construir uma equipe experiente mais rapidamente.

## O futuro aguarda

Eu só arranhei a superfície do que está por vir na v3. Os contribuidores da Yearn também estão trabalhando na construção de uma série de outros produtos e funcionalidades emocionantes! 

**[Saiba mais sobre as oportunidades de participar da Yearn aqui!](https://yearnfinance.notion.site/Join-Us-3e9c95b9bd7846a18c0f1cbe6ab05eda)**

*Feito em [yearn.finance](https://yearn.finance/#/portfolio)*
