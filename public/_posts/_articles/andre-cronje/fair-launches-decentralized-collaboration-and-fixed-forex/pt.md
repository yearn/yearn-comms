---
title:  "Lançamentos justos, colaboração descentralizada e Fixed Forex"
image: ./Fair-launches-decentralized-collaboration-and-Fixed-Forex/andre-hero.png
author: Andre
translator: JKtranslator
---

# Lançamentos justos, colaboração descentralizada e Fixed Forex

**\-Lançamentos justos-**

Demorei um pouco para finalmente perceber a essência por trás de um lançamento justo. Não é simplesmente distribuir os tokens, não é não haver pré-venda, mas sim todos terem as mesmas chances, todos tinham o mesmo conjunto de regras, não havia nenhuma rodada secreta de “amigos e família”, rodadas de incubadoras, alocação de influenciador, não havia listas de permissões, nenhuma participação limitada: as regras foram fornecidas e qualquer pessoa poderia participar. Finalmente me sinto confortável em dizer que um lançamento justo, é um lançamento em que todos os participantes têm o mesmo conjunto de regras.

**\-Colaboração descentralizada-**

Ainda vejo muito tribalismo, mas acho que é compreensível, pois nunca entendi como as pessoas se tornaram tão tribais em relação a times esportivos. Por isso, comecei a me perguntar o quanto desse tribalismo é por causa de apostar nos times, afinal, é isso que cripto é, apostar no seu time favorito. Assim como nunca entendi o tribalismo nos esportes, também não o entendo em cripto. Pelos meus padrões, eu simplesmente vejo “certo” e “errado”, não importa se é um time ao qual estou associado ou não, se eu vejo o “certo”, eu elogio, se eu vejo o “errado”, eu deixo claro isso.

Mas acho que algumas equipes costumam desconsiderar o valor da colaboração. E é algo que sempre gostei no yveCRV e, por extensão, seus clones, stCRV e cvxCRV: são o produto da colaboração entre curve, yearn, sushi e pickle. Eles não podem existir sem todas essas entidades. Pelo mesmo motivo, antes de yveCRV, o y pool era meu orgulho e alegria, era a colaboração entre curve, yearn, aave, compound e dydx.

Com isso em mente, percebi que, para continuar tendo sucesso, os produtos não podem ser isolados, eles precisam ser um amálgama de produtos e equipes. Minha iteração original de Forex fixo era autônomo, não atualizável, ingovernável, sem qualquer extração de valor e sem token.

**\-Fixed Forex-**

Continuamos falando em romper o controle de câmbio, continuamos falando em romper com o fiat mas, à sua maneira, Tether and Circle fizeram mais para romper o controle de câmbio do que cripto. O controle de câmbio tende a ter uma regra simples, o dinheiro não pode sair de seu território sem permissão especial. Tanto o Tether quanto o Circle recebem depósitos localmente, o fiat nunca sai da conta bancária, portanto, não há controle de câmbio (isso em teoria: na prática e na regulamentação é uma história muito diferente). Então, vamos considerar que você deseja fazer um pagamento dos EUA para a Coréia, de USD para KRW, um caminho “simples” seria depositar USD por USDT, transferir USDT para Upbit, trocar USDT por KRW, retirar KRW.

O Fixed Forex é projetado para realizar o acima sem que os usuários finais estejam cientes ou tenham conhecimento das etapas. O Fixed Forex tem dois componentes principais, liquidez forex on-chain e saques e retiradas fiat descentralizadas.

Embora eu esteja mais animado com o último, sua data de início de operação só é possível depois de atingirmos a liquidez na rede. Portanto, para os fins deste artigo, explicaremos como o Fixed Forex funciona e como os usuários podem participar.

**\-Fixed Forex Iron Bank (ibff)-**

Fixed Forex alavancado Iron Bank, Yearn, Sushi e Curve

![](image1.jpg?w=500&h=500)

**Isenção de responsabilidade;**

-Não auditado.
- 0 benefício para participação antecipada, apenas risco.
- A distribuição inicial do token será uma fração da emissão, isso serve apenas para fins de teste.
- Dada a distribuição inicial incrivelmente baixa, não compre esses tokens, não forneça liquidez para esses tokens, você perderá dinheiro.

Fixed Forex fixo é o nome coletivo para USD, EUR, ZAR, JPY, CNY, AUD, AED, CAD, INR e quaisquer outros pares de forex lançados sob o guarda-chuva de Fixed Forex.

A primeira opção disponível é [ibEUR](https://www.coingecko.com/en/coins/iron-bank-euro), que pode ser emitido em [yearn.fi/lend](https://yearn.fi/lend)

![](image2.png?w=700&h=194)

Todas as opções de câmbio podem ser cunhadas por meio de qualquer uma das garantias aceitas em [yearn.fi](https://yearn.fi/lend)

![](image3.png?w=645&h=874)

Para fatores de garantia atualizados, você pode visitar a documentação do Iron Bank, [aqui](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

Cada par forex terá como alvo 2 pools de liquidez;

ib\*/\* ([curve.fi](https://curve.fi/)) 

ib\*/ETH ([sushi.com](https://sushi.com/))

![](image4.png?w=700&h=243)

Para cada ativo, os provedores de liquidez terão quatro opções de rendimento disponíveis;

1. Forneça ib\* para [yearn.fi/lend](https://yearn.fi/lend) e ganhe juros (atualmente 6,38%)
2. Forneça ib\*/ETH para [sushi.com](https://sushi.com/) (atualmente 390%)
3. Forneça ib\*/\* para [curve.fi](https://curve.fi/) (pool pendente)
4. Stake no Iron Bank Fixed Forex e ganhe o token nativo IBFF (bloqueado, veIBFF)

\-veIBFF-

O mecanismo do IBFF é complexo e deve ser bem compreendido antes de participar.

O lançamento inicial terá como alvo apenas um único pool, [ibEUR / ETH](https://analytics.sushi.com/tokens/0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27)

Como um LP, você pode fazer stake do token LP no IBFF [faucet](https://etherscan.io/address/0x7d254d9adc588126edaee52a1029278180a802e8), isso fornece um token fracionário, necessário para criar um bloqueio de token no contrato de vesting, [veIBFF](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1).

O verdadeiro token nativo do sistema é veIBFF, ou IBFF em bloqueio, o veIBFF recebe taxas de protocolo, essas taxas são dinâmicas com base na oferta e na demanda. Atualmente, essas taxas são de 10,15% do TVL.

Os proprietários de IBFF podem optar por criar um bloqueio de até 4 anos, com decadência linear no veIBFF [contrato](https://etherscan.io/address/0x4d0518c9136025903751209ddddf6c67067357b1)

Depois que um bloqueio foi criado, os LPs podem fazer staking do ibEUR / ETH no [contrato](https://etherscan.io/address/0x1da8a6fe33bd35b99505d67843eec9fa124f2d4b) de distribuição. O contrato de distribuição distribuirá tokens a cada 7 dias linearmente.

Os tokens de distribuição são recompensados com base no seu bloqueio de aquisição. Se o bloqueio for de 1 ano, você receberá 1/4 tokens como veIBFF, que será desbloqueado em 1 ano. Os 3/4 tokens restantes são distribuídos para o [contrato](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859) de distribuição de taxas.

Os titulares do veIBFF têm duas distribuições semanais, a distribuição 1 são taxas acumuladas de protocolo (10,15% da TVL atualmente) e IBFF distribuído do [contrato de distribuição](https://etherscan.io/address/0x83893c4a42f8654c2dd4ff7b4a7cd0e33ae8c859).

Resumindo, quanto maior for o seu tempo de investimento, mais desproporcional será a sua recompensa.

**Isenção de responsabilidade;**

-Não auditado.
- 0 benefício para participação antecipada, apenas risco.
- A distribuição inicial do token será uma fração da emissão, isso serve apenas para fins de teste.
- Dada a distribuição inicial incrivelmente baixa, não compre esses tokens, não forneça liquidez para esses tokens, você perderá dinheiro.

**Links;**

[Fórum](https://gov.yearn.finance/c/projects/fixed-forex/26)</br> 
[Site](https://yearn.fi/lend)</br> 
Sem redes sociais</br>
