---
layout: post
title: "Atualização de Engenharia Web: 31 de janeiro de 2022"
categories: [Atualizações]
image:
  src: ./logo.png
  width: 1256
  height: 1024
autor: f0xTheSin & dudesahn
date: "2022-02-04"
translator: jameskbh
---

fonte: [Web Engineering Update 31 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update-160?s=r)

#### Semana de 31 de janeiro de 2022

## **Resumo**

Algumas semanas de limpeza enquanto encerramos janeiro de 2022:

- O suporte ao Arbitrum foi incluído em um lançamento recente para o site principal, bem como para o YearnWatch. Com um pouco mais de testes, Yearn estará pronto para lançar vaults e estratégias em nossa 3ª cadeia.
- A equipe da web também enfrentou algumas dores de crescimento à medida que lidávamos com o maior pico de visitas únicas de usuários que já tivemos. Isso gerou o crescimento de uma equipe de infraestrutura, com mais detalhes por vir.
- Web e estrategistas se uniram para começar a revisar nosso APY: adicionar mais dados, torná-lo mais utilizável para os usuários e torná-lo mais acessível visualmente.
- Finalmente, tivemos um bom fluxo de novos colaboradores ajudando com problemas em vários repositórios da web.

## **Realizações ✅**

**SDK versão 1.0.28**

- entrega: exibir estratégias múltiplas nos detalhes do vault
- correção: atualização do endereço de exemplo de simulação
- correção: migrar para o novo endpoint de cache
- entrega: melhorar o tratamento de erros para simulações 🤬
  - Quando as simulações falham, nossa equipe de suporte tem feito um trabalho incrível com a solução de problemas, mas é hora de dar-lhes mais ferramentas. Esse recurso ajudará os usuários e a equipe de suporte a resolver problemas com maior precisão.
- correção: disableAllowlist não é necessário
- correção: ler metadados de estratégias da API

**SDK versão 1.0.27**

- correção: melhorar o desempenho de paginação

**SDK versão 1.0.26**

- correção: escopos corretos do usuário para validateCallData com serviço allowlist

**SDK versão 1.0.25**

- correção: adicionar novos tipos de metadados do iron bank
  - Especificamente, isso abordou o recurso de limite de garantia que o Iron Bank implementou recentemente

**Web Release 1.0.13**

- adição: adicionar o tipo de erro ao txError
- correção: busca de paginação

**Web Release 1.0.10**

- correção: remover detalhes APY se tiver sido substituído
- correção: aumentar os blocos de confirmação para transações

**Web Release 1.0.9**

- correção: erro de busca de saldo de token
- adição: adicionar campos de id de teste para integração
- adição: suporte à rede arbitrum 🚀

**Geral**

- adição: github ci, dependências linting, readme.md adicionado
- correção: correção nos testes para o contrato strategy helper
- adição: propriedade gerenciável
- correção: testes para o contrato strategy helper
- correção: removido contrato lens e teste
- teste: adicionado teste para o adaptador de registro ironbank
- correção: link de descrição do vault
- correção: adicionar paginação para ativos dinâmicos
- adição: introduzir estratégias 0xDAO 🤑
  - Embora de curta duração, isso foi divertido enquanto durou 🙃
- adição: adicione multicall ao ajudante de preços
- adição: inserir TUSD e UST fantom IB
- correção: remover contrato lens

## ** Foco atual e problemas pendentes **

** Foco no Ciclo 🎯**

- Decidimos manter temas anteriores de segurança e estabilidade neste ciclo à medida que realinhamos nosso cronograma de ciclo. Testes de ponta a ponta provaram ser mais do que úteis junto com bots de alerta para atualizar a equipe com quaisquer erros ou problemas de desempenho.

** Problemas atuais 🐛**

- Fantom RPC. Embora isso não seja específico de Yearn, continua afetando os usuários. O Yearn mudou nossa infraestrutura para um nó auto-hospedado, o que, esperançosamente, deve suavizar quaisquer problemas anteriores que os usuários tenham experimentado com o RPC público.
- Cálculos APY continuam a ser uma fonte de perguntas, especialmente em Fantom. As novas adições ao repo yearn-reporter estão quase concluídas e fornecerão:
  - APY prospectivo por estratégia (Curve/Convex) e coleta anterior (todos os outros vaults)
  - APY semanal, mensal, e desde o início no nível de cada vault.
  - Para exibir todos esses novos números, adicionaremos uma página de estatísticas muito básica. 📊

## **Venha Construir conosco! 👷**

Estamos continuamente adicionando problemas públicos ao nosso GitHub e sempre aceitamos novas contribuições em qualquer um dos nossos repositórios

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
