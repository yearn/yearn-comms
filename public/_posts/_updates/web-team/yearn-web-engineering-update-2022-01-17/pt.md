---
layout: post
title: "Atualização de Engenharia Web: 7 de janeiro de 2022"
categories: [Updates]
image:
  src: ./logo.png
  width: 1256
  height: 1024
author: f0xTheSin
date: "2022-01-20"
translator: jameskbh
---

fonte: [Web Engineering Update 7 Jan](https://yearnweb.substack.com/p/yearn-web-engineering-update-7d7)

### Semana de 17 de janeiro de 2022

## **Resumo**

Um grande lançamento esta semana com dicas de APY aparecendo; agora você pode ver informações mais detalhadas quando passar o mouse sobre o APY de um Vault. A finalização das melhorias de segurança continua sendo o foco principal, com a adição de Vaults do Arbitrum em seguida e mais trabalho para melhorar nossa IU/UX de múltiplas redes também.

Outras atualizações incluem não mais sobras após retiradas do Vault, suporte para um novo Vault de LINK na rede Fantom e correções de IU para o yvBOOST e o Iron Bank.

## **Realizações ✅**

### **Web Release 1.0.8 (17 Jan 2022)**

- adições: instruções readme melhoradas 📚
- adições: APY detalhado para Vaults e Labs
  - Ao passar o mouse sobre o APY de um Vault na página de Vaults, ou na página de detalhes agora fornecerá um detalhamento semelhante ao visto no site v2, com informações extras incluídas para os Vaults Curve LP.
- adição: adicionar rota de status de saúde 🏘️
- adição: Saque total para os Vaults
  - Anteriormente, quando realizando uma retirada, a interface do usuário iria converter a entrada do usuário do saldo do token subjacente por cotas do Vault e, em seguida, enviaria isso para o contrato do Vault por meio do comando `withdraw(shares)`. No entanto, se o preço das cotas aumentasse após uma coleta, isso poderia deixar um usuário com uma sobra (uma pequena quantidade fracionária de cotas do Vault). Agora, a interface do usuário detecta se um usuário está tentando retirar toda a sua posição do Vault e, em vez disso, passa por `withdraw(max_uint)`, que consumirá todas as cotas do Vault do usuário, e não deixará sobra nenhuma, mesmo se o preço da cota estiver aumentando cada bloco.
- correção: cálculo de retirada de cota dos labs
  - Houve um problema ao exibir a quantidade de yveCRV que um usuário receberia de uma retirada do yvBOOST devido ao manuseio especial do token do Vault (yvBOOST) como token de exibição. Isto foi corrigido.
- estilo: regra eslint para ordem de importação 📝

### **SDK Versão 1.0.15 (19 de janeiro de 2022)**

- adição: lista de permissões
- tarefa(deps): atualizar shelljs de 0.8.4 a 0.8.5
- adição: habilitar testes ci em pull requests
- correção(account.summaryof): ignorar Vaults do labs para cálculo de patrimônio
- correção: resolver a importação de busca ausente

### **Variedades**

- adição: framework para monitoramento puppeteer do site em tempo real
- correção: atualização do limite de empréstimo do usuário
  - Esta correção de IU considera um limite de garantia de um ativo, quando exibir o limite de empréstimo de um usuário para o Iron Bank
- correção: atualização de cálculos curve para novos pools
- correção: erro de exibição yvBoost
- adição: remover sobreposição "new type" para curve vaults
- correção: exibir ativos totais
- correção: erro de retirada yvBoost
- adição: logotipo fantom link vault
- adição: informações do Vault Link
- correção: ignorar vaults do labs para cálculo de patrimônio
- correção: resolver a importação de busca ausente

## **Foco atual e problemas pendentes**

-**Foco do Ciclo 🎯**

  - Finalizar e enviar melhorias de segurança, com um artigo completo em breve.
  - Arbitrum está chegando! Neste ciclo, a equipe da web está colocando a rede Arbitrum no site, à medida que começamos o teste dos vaults e a integração.
  - Com o lançamento de Vaults em breve em nossa terceira cadeia, a Yearn está projetando uma interface multi-cadeia/UX para permitir que os usuários visualizem mais facilmente as posições atuais e novas oportunidades em todas as cadeias suportadas dentro do ecossistema da Yearn.

**Problemas atuais 🐛**

- Erro de migração do Vault: Após a migração, alguns usuários devem atualizar a página para que o novo Vault apareça e o Vault antigo desapareça. Difícil de reproduzir de forma consistente (2/16 tentativas no Fantom), esse erro parece ser devido ao desalinhamento de dados entre o RPC da carteira e nosso SDK.
- Erro JSON-RPC: Este parece mais comumente no Fantom. Mensagens de erro aprimoradas no frontend ajudarão melhor os usuários a determinar se estão enfrentando um erro RPC verdadeiro ou algo diferente.

## **Venha Construir conosco! :man_mechanic:**

- Estamos continuamente adicionando problemas públicos ao nosso GitHub e sempre aceitamos novas contribuições em qualquer um dos nossos repositórios

  - https://github.com/yearn/yearn-finance-v3
  - https://github.com/yearn/yearn-sdk
  - https://github.com/yearn/yearn-exporter
  - https://github.com/yearn/yearn-lens
  - https://github.com/yearn/yearn-meta


