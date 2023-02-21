---
layout: post
title: "Atualização de Engenharia Web: 07 de março de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
autor: f0xTheSin
date: "2022-03-15"
translator: jameskbh
---

fonte: [Web Engineering Update 07 Mar](https://yearnweb.substack.com/p/yearn-web-engineering-updates?s=r)

#### Semana de 7 de março de 2022

## **Resumo 💌**

Esta semana tivemos alguns erros que precisávamos eliminar rapidamente enquanto tentávamos nos concentrar em nossa atualização da interface do usuário. Zapper nos deu um contrato ZapIn atualizado que causou alguns problemas até que conseguimos atualizá-lo em código. A renovação da interface do usuário inclui algumas atualizações de fonte muito necessárias, juntamente com novos ícones e imagens que a equipe de design desenvolveu. Isso também incluirá algumas alterações de nome de variáveis que devem tornar os temas mais fáceis de manter para a equipe do Front End e mais claros para a comunidade implementar os seus próprios. Por fim, estamos recebendo suporte da comunidade para resolver um problema em que você executa uma transação de aprovação, atualiza a página e ela pede que você faça outra aprovação.

## **Realizações 🎊**

**V3 Front End v1.0.27**

- adição: suporte a carteira huobi
- adição: aprovações assinadas para saques
- correção: botão de saída de sucesso da tx em detalhes do Vault
- correção: adicionar token vault ao MetaMask
- correção: quickfix para o formato de data do subgraph
- adição: validar tx usando a lista de permissões
- adição: atualizar contrato Zapper

**SDK v1.1.1**

- refactor: lidar com erros de busca de dados do zapper
- correção: alterar instrução "se" para alternar para busca de saldos de token
- correção: adicionar comentário obsoleto aos ganhos do protocolo
- teste: adicionar teste de unidade cache

## **Foco atual e problemas pendentes 🍙**

**Foco do Ciclo**

- Desacoplar / minimizar dependências
- Concluir a atualização da interface do usuário
- Zap na rede Fantom

**Questões pendentes**

- [https://github.com/yearn/yearn-finance-v3/issues](https://github.com/yearn/yearn-finance-v3/issues)

## **Venha Construir conosco! 👷**

Estamos continuamente adicionando problemas públicos ao nosso GitHub e sempre aceitamos novas contribuições em qualquer um dos nossos repositórios

- https://github.com/yearn/yearn-finance-v3
- https://github.com/yearn/yearn-sdk
- https://github.com/yearn/yearn-exporter
- https://github.com/yearn/yearn-lens
- https://github.com/yearn/yearn-meta
