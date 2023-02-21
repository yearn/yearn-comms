---
title: "Como as novas estratégias dos Yearn Vault são endossadas?"
image:
  src: ./image1.jpg
  width: 1280
  height: 800
date: '2022-02-02'
author: Marco_Worms
translator: jameskbh
---

![](./image1.jpg?w=900&h=478)\
*Processo de verificação de estratégia*

No último artigo sobre [Vaults Yearn e Estratégias](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432), descrevemos brevemente o **Processo de verificação de estratégias**. Agora vamos nos aprofundar em como qualquer pessoa pode propor uma nova estratégia para Yearn e quais medidas são tomadas para garantir que as estratégias endossadas sejam resilientes.

![](./image2.jpg?w=900&h=478)\
*Recapitulação rápida: uma Estratégia é um contrato que investirá e coletará lucros usando os fundos do yVault.*

Antes de enviar uma estratégia para ser endossada por Yearn, o estrategista deve redigir um documento de Due Diligence sobre ela: [SNX](https://hackmd.io/0w1RZh7DSc27A9EyzlHbJQ?view) e [Vesper](https://hackmd.io/@Ap_76vwNTg-vxJxbiaLMMQ/SkXEzic7O) são bons modelos a serem seguidos. O documento de Due Diligence é importante porque descreve todas as especificações dos processos que uma estratégia usa e revisa as práticas de segurança comuns do contrato inteligente. A Yearn usará este documento para validar processos e avaliar riscos do que foi construído!

Algumas das coisas que o documento deve descrever são:

- Descentralização do protocolo: O protocolo usa um multisig? Que poderes ele tem? Os contratos são mutáveis?
- Lista de relatórios de auditoria
- Todos os detalhes intrísicos da estratégia
- Caminho para implantar no ambiente de produção

O estrategista pode codificar uma estratégia usando o [repositório de modelos “brownie-strategy-mix”](https://github.com/yearn/brownie-strategy-mix). Quando a estratégia for concluída e revisada por 2 pares, ela deve ser implantada no ape.tax, que é um site que permite que os vaults experimentais sejam testados em um ambiente de produção.

![](./image3.jpg?w=352&h=28)\
*aviso sobre vaults ape.tax!*

Com o documento concluído e após alguns ciclos de coleta serem concluídos com sucesso sem problemas, o estrategista pode agora [abordar os colaboradores de Yearn](https://docs.yearn.finance/developers/v2/DEPLOYMENT#deploying-a-new-strategy ) para que a estratégia seja aprovada pelo [Comitê de Coleta Segura](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533). Uma revisão de segurança completa será feita por revisores internos de Yearn.

Depois que todos os comentários são abordados e o código é aprovado, a estratégia pode ser promovida para produção a reimplantando e anexando a um vault existente, ou endossando o vault do ape.tax.

**A estratégia agora é endossada e está ativa em [yearn.finance](https://yearn.finance/)!!**

A partir de agora o estrategista + qualquer comitê de apoio será recompensado com uma taxa de desempenho de 10% do rendimento das estratégias do vault. Como a segurança é uma preocupação de alta prioridade, é procedimento aumentar a frequência de monitoramento e auditoria à medida que a estratégia aumenta seu valor total bloqueado:

- Quando a estratégia tem **mais de 10M em TVL** o estrategista deve — criar um comitê de 3 pessoas com profundo conhecimento, monitorando a estratégia 24 horas por dia, 7 dias por semana.
- Quando a estratégia tiver **mais de 100M em TVL**, ela será auditada por uma empresa de auditoria externa respeitável e começaremos a fazer revisões internas recorrentes.

Para obter mais informações sobre como as estratégias são desenvolvidas e endossadas, você pode ler estes documentos:

- [O que são Vaults e Estratégias?](https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432)
- [Documentos oficiais — Introdução ao Vaults e estratégias](https://docs.yearn.finance/developers/v2/getting-started)
- [Documentos oficiais — Como implantar um vault e uma estratégia V2](https://docs.yearn.finance/developers/v2/DEPLOYMENT)
- [Proposta sobre a Coleta Segura de Yearn](https://gov.yearn.finance/t/introducing-yearn-safe-farming-committee/10533)