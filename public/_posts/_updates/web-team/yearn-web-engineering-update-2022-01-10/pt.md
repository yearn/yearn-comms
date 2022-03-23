---
layout: post
title: "Atualização de Engenharia Web: 10 de janeiro de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-01-12"
translator: jameskbh
---

fonte: [Web Engineering Update  10 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update))

## ## Semana de 10 de janeiro de 2022

## **Resumo**

Início rápido do ano com vários lançamentos chegando. Pequenos bugs são abordados à medida que surgem e a segurança continua a ser nossa principal prioridade. Vários colaboradores pela primeira vez abriram PRs numa tendência empolgante, enquanto procuramos expandir continuamente a funcionalidade do site para redes atuais e futuras. 🚀

Esta semana, houve várias atualizações para o yearn-meta, incluindo descrições de token e estratégias para nossos 12 novos vaults, bem como atualizações de back-end para o Iron Bank e lógica de preços aprimorada para os tokens Curve LP.

## **Realizações ✅**

- Versão 1.0.5
- correção: atualização de preço de token na tx
- correção: downgrade bnc-onboard

- Versão 1.0.6
- refactor: fixar novas dependências
- correção: adicionar timeouts de dev para reduxtoolkit
- atualização: validação de ativos suportados \[WEB-1060\] (#418)
- correção: saldo yvBoost exibido corretamente \[WEB-1080\] (#423)
- correção: atualização do link para a política de segurança
- atualização: update no sdk (#427)
- atualização: remover tokens não suportados (#425)

- Miscelânea
- correção: lidar com a resposta de vaults personalizados em camelCase para snake_case (web-1104)
- correção: normalizar o casing do refactor para objeto composto (web-1103)
- correção: paginar saldos de token (web-1125)
- adição: propriedades de limite de garantia aos tipos (web-1124)
- correção: descrições adicionadas para tokens subjacentes (web-1119)
- atualização: pequena melhoria na documentação de configuração (web-946)
- correção: usar o endereço checksummed (web-1113)
- adição: trocar o logotipo branco pelo preto para o rai curve (web-1112)
- adição: atualizar logotipos de token do crypto pool (web-1111)
- correção: ícones para crv-eth, cvx-eth e ust-wormhole (web-1108)
- correção: api mainnet parou sem notificação (web-1091)
- correção: atualizar gráfico da página de detalhes do Vault para "up-only" (web-1045)
- correção: erro no assetsPositionsof na rede ftm (web-1075)
- correção: saldo yvBoost incorreto (web-1080)
- correção:  FE validar endereços de ativos suportados (web-1060)
- correção: dependências de pré-visualização de compilação e pin (web-942)
- correção: erro zapper no depósito para o Vault (web-1056)

## **Foco atual e problemas pendentes**

- Foco do Ciclo: Segurança Web
- O ciclo de duas semanas continua nosso foco na mitigação de ataques front-end. Esteja atento a uma postagem detalhada sobre essas atualizações assim que elas forem concluídas.

- Questões Pendentes
- Atualizar o conjunto de testes para SDK
- Melhorar os erros de simulação para serem mais específicos e informativos
- Inserir o código Refactor APY na API e escrever documentação

## **Venha Construir conosco! :man_mechanic:**

- Estamos continuamente adicionando problemas públicos ao nosso GitHub e sempre aceitamos novas contribuições em qualquer um dos nossos repositórios

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
