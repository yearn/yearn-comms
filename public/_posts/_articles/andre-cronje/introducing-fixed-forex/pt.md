---
title:  Introduzindo Fixed Forex"
image:
  src: ./andre-hero.png
  width: 700
  height: 300
author: Andre
translator: JKtranslator
---

# Introduzindo Fixed Forex (USD, EUR, ZAR, JPY, CNY, etc)

**Isenção de responsabilidade;**

- Sem tokens
- Auditoria não está completa
- O contrato é experimental

**Principais características;**

- 0 governança (ou multisig)
- 0 configuração
- 0 taxas
- 0 extração de valor
- Gentle liquidations
- Dynamic minting caps based on on-chain liquidity
- Dynamic LTVs based on on-chain protocols

**Fixed Forex**

A Fixed Forex é feita para ser um framework de stable coin decentralizada imutável, sem taxas, sem governança.

LTVs (razão empréstimo-valor) são derivadas do Compound, Aave v1, Aave v2 e Iron Bank. Assim como esses sistemas adicionam ou atualizam colaterais aceitos, a Fixed Forex é atualizada de forma dinâmica.

O limite de emissões (quanta liquidez um usuário pode emitir contra um certo colateral) é derivado a partir da liquidez on-chain, quanto mairo a liquidez, maior o limite.

O Fixed Forex introduz liquidações leves, que é a quantidade mínima de dívida paga de volta para nivelar a posição de um usuário, sem precisar se preocupar com o saldo inteiro sendo liquidado durante eventos de baixas.

Para fins de lançamento, o contrato não vai ser verificado no etherscan, porém você pode encontrar o endereço e o ABI abaixo.

[0x92FC8E6EfdF389e2527d14393b15F543f9a03420](https://etherscan.io/address/0x92fc8e6efdf389e2527d14393b15f543f9a03420)

[ABI](https://gist.github.com/andrecronje/4ce11e8603a7f61af4619a86647db1d4)

O lançamento completo será baseado nas pools de crypto da curve.fi, para permitir um mercado forex decentralizado.