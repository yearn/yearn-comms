---
layout: post
title: "Atualização de Engenharia Web: 14 de março de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-22"
translator: jameskbh 
---

fonte: [Web Engineering Update 14 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-report?s=r)

#### Semana de 14 de março de 2022

## **Resumo 💌**

Uma vitória em particular esta semana foi conseguir fazer o setup do acompanhamento de nossos parceiros no front-end e no SDK. Isso nos ajudará a descobrir quais serviços estão sendo utilizados mais (ledger, shapeshift, etc.) para que possamos começar a trazer mais recursos específicos para nossos parceiros e ter uma ideia melhor de quais parceiros estão sendo utilizados pela comunidade. Nós também tivemos algumas correções visuais agradáveis esta semana: corrigir o interruptor para indicar claramente se ele está ligado ou desligado, e um novo cofre quebrou nossa UI com a quantidade de 0 's que ele inseriou no front-end (por falar nisso, Rocket Pool da Curve está agora ao vivo na Yearn.) Um salve para nossos devs que, tarde da noite em um fim de semana, fizeram algumas mudanças rápidas para fazer o site ficar funcionando com um visual limpo novamente.

## **Realizações 🎊**

**V3 Front End v1.0.29**

- correção: clareza do botão ligar e desligar
- correção: evitar mostrar o gráfico do vault para único ponto de dados
- adição: definir novo zapper zap no endereço do contrato
- correção: carteira conectada antes getTokenAllowance
- correção: reabilitar contagem da carteira
- correção: api overflow

**SDK v1.2.1-0**

- refactor: lidar mais eficazmente com erros de busca de dados do zapper
- correção: alterar instrução "se" para alternar para busca de saldos de token
- teste: adicionar testes de unidade de cache
- correção: passar endereços vaultDynamic, de modo que o lens adapter será chamado com os parâmetros corretos
- refactor: retornar todos os tokens suportados na rede disponível
- adição: usar o provedor de endereços para buscar endereços de contrato
- correção: adicionar configuração para o subgraph descentralizado da mainnet
- adição: serviço de parceiro para depósito nos Vaults

## **Foco atual e problemas pendentes 🍙**

**Foco do Ciclo 🔎**

- Desacoplar / minimizar dependências
- Concluir a atualização da interface do usuário
- Zap na rede Fantom

**Questões pendentes 🏴‍☠️**

- Algumas questões de carteira (transações em lote ambire, carteira rainbow)
- Um Vault não está passando seu TVL para o front-end.
- Ainda é necessário a criação de alguns testes unitários no SDK
- https://github.com/yearn/yearn-finance-v3/issues
- https://github.com/yearn/yearn-sdk/issues

## **Venha Construir conosco! 👷**

Estamos continuamente adicionando problemas públicos ao nosso GitHub e sempre aceitamos novas contribuições em qualquer um dos nossos repositórios

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
