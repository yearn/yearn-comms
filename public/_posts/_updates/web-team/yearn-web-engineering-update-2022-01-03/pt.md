---
layout: post
title: "Atualização de Engenharia Web: 3 de janeiro de 2022"
categories: [Atualizações]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: Dudesahn
date: "2022-01-05"
translator: jameskbh
---

fonte: [Web Engineering Update 3 Jan](https://yearnweb.substack.com/p/update-jan-5-2022)

#### Semana de 3 de janeiro de 2022

## **Resumo**

O lançamento do site beta v3 para produção em dezembro correu bem. Continuamos a abordar os bugs à medida que eles surgem, e atualmente estamos focados no aumento da segurança e monitoramento do site.

## **Realizações**

- Versão 1.0.4
  - Correção: link alchemy no rodapé
  - Correção: link API pickle
  - Correção: Quantidade esperada de tokens no depósito no labs
  - Correção: visualização detalhada vault na mudança de rede
  - Correção: permitir cancelar buscas por atualizações quando o usuário executa ações assíncronas
  - Atualização: criado acesso NFT (desativado por enquanto)
  - Atualização: ganhos históricos do Vault no token subjacente
  - Atualização: interface de usuário do rodapé melhorada
  - Atualização: melhoria da interface de usuário para mudança de rede
  - Atualização: suporte para Fantom no yearn-exporter
- Correção: resultado esperado do depósito do token no yvBoost
- Atualização: adicionar prompt de "adicionar rede" se o usuário não a tem no MetaMask
- Feat: adicionar link do reddit e logotipo no rodapé
- Atualização: suporte para Fantom no yearn-exporter
- Correção: remover idiomas beta

## **Foco atual e problemas pendentes**

- Foco do Ciclo: Segurança Web
  - Em resposta à crescente sofisticação dos ataques front-end aos protocolos DeFi, passamos as últimas semanas projetando e implementando várias melhorias na segurança da web de Yearn, incluindo monitoramento, verificação em tempo real e implementação de um multisig web. Mais detalhes a seguir após a implantação.
- Erro de migração do Vault
  - Alguns usuários relataram um problema ao migrar Vaults, que exigiam uma atualização de página para que o saldo do novo Vault apareça. Embora esse problema tenha se mostrado um pouco difícil de replicar, os engenheiros estão depurando esta semana.

## **Venha Construir conosco!**

- Estamos continuamente adicionando problemas públicos ao nosso GitHub e sempre aceitamos novas contribuições em qualquer um dos nossos repositórios

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
