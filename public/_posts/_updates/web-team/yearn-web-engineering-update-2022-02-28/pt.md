---
layout: post
title: "Atualização da Engenharia Web: 28 de fevereiro de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-03-09"
translator: jameskbh
---

fonte: [Web Engineering Update 28 Feb](https://yearnweb.substack.com/p/yearn-web-engineering-update-18a?s=w)

#### Semana de 28 de fevereiro de 2022

## **Resumo 🌅**

Você pode dizer que a primavera está no ar pela quantidade de mudanças que acontecem no espaço Web3. O Iron Bank se ramificou independentemente da interface do usuário do site da Yearn; eles desenvolveram um site incrível (app.ib.xyz) enquanto sua equipe se propõe a fornecer uma experiência de usuário simplificada. Zapper foi temporariamente derrubado devido a chamadas de API crescentes (e um vazamento de memória) que deu aos nossos saldos de token um pouco de dor de cabeça. Essa questão nos fez reconsiderar nossa confiança em aplicativos de terceiros, o que se refletiu em nossa retrospectiva. Estamos ansiosos pelo nosso ciclo de planejamento, na próxima semana, para nos diminuir nossa dependência externa externa e garantir que nosso Front End esteja mais resiliente do que nunca.

## **Realizações ♨**

**V3 Front End**

- correção: alerta de temperatura para erro zapper
- façanha: mudanças no iron bank
- correção: avisos lint
- correção: Rendimento sob exibição modal 0
- correção: tw.card img

**SDK v1.1.1**

- teste: adicionar especificações para EarningsInterface#accountAssetsData
- correção: usar manualmente a lista de permissões antes de gravar
- teste: adicionar especificações para AllowListService

## ** Foco contínuo e problemas pendentes 🏴‍☠️**

**Foco do Ciclo**

- Nós solicitamos nossos engenheiros neste ciclo que enviassem issues ao GitHub para nossa comunidade trabalhar.
- O lançamento da Arbitrum correu muito bem e, no momento da redação deste artigo, já há pouco mais de US$ 2 milhões em ativos gerenciados.

**Questões pendentes**

- Gerenciaro a lista cada vez maior de vaults no yearn-exporter
- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **Venha Construir conosco! 👷**

Estamos continuamente adicionando problemas públicos ao nosso GitHub e sempre aceitamos novas contribuições em qualquer um dos nossos repositórios

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
