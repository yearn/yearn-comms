---
title:  "O que você pode fazer com YFI?"
image:
  src: ./cover.png
  width: 768
  height: 429
date: '2021-05-05'
author: Dark Ghosty
translator: JKtranslator
---

# O que você pode fazer com YFI?
Neste artigo, examinamos o que se pode fazer com seu YFI para obter rendimento em [DeFi](https://www.coindesk.com/what-is-defi), quais riscos estão associados a cada opção e o rendimento aproximado que você pode obter.

- Todos os valores de APY são de 27 de abril.
- Todas as posições que contraem dívida pressupõem um empréstimo a 70% da taxa máxima para poder suportar uma redução de 30% no preço YFI.
- Este não é um conselho de investimento. Interagir com os protocolos DeFi é arriscado, faça sua própria pesquisa.

___

## **Antes de começar, considere fazer um seguro para seu YFI com um seguro para DeFi**
Uma nota sobre o seguro para DeFi e como ele funciona. O seguro para DeFi cobre *principalmente* bugs no código solidity que levam a uma perda significativa de fundos para aquele protocolo específico. Mas certifique-se de ler a documentação do seguro Defi cuidadosamente para saber o que eles cobrem e o que não cobrem.

Por exemplo, digamos que alguém tivesse seguro para seu vault yearn, mas havia um bug com o código da MakerDAO e o CDP do vault perdeu alguns fundos por causa disso. Essa pessoa, tendo apenas seguro em Yearn, não seria capaz de reivindicar quaisquer perdas e seu seguro não pagaria neste caso. Isso porque não foi um bug nos contratos inteligentes da yearn que causou o prejuízo. Para obter mais informações sobre seguros, sinta-se à vontade para perguntar em nosso [discord](discord.yearn.finance) em #support.

### **Provedores de seguro DeFi**
- [Nexus Mutual](https://app.nexusmutual.io/#/SmartContractCover) 
    - [Documentação](https://nexusmutual.gitbook.io/docs/)
- [Cover Protocol](https://app.coverprotocol.com/)
- [Documentação](https://docs.coverprotocol.com/)

___

## ***Depósito direto***
Esta seção aborda maneiras pelas quais você pode usar seu YFI sozinho. Métodos alternativos de geração de rendimento, como fornecer liquidez a um [formador de mercado automatizado (AMM)](https://www.gemini.com/cryptopedia/amm-what-are-automated-market-makers) podem exigir que você emparelhe seu YFI com outro token, o que pode comprometer sua exposição total ao YFI. Isso não quer dizer que seja livre de riscos, mas que você não terá que lidar com o que é conhecido como [perda impermanente (IL)](https://www.gemini.com/cryptopedia/decentralized-finance-impermanent-loss-defi). * Ter fundos em contratos inteligentes sempre traz algum risco.*

### Yearn: v2 YFI yVault
O Yearn Finance YFI v2 yVault permite que você deposite o YFI e relaxe enquanto ganha rendimento nos melhores lugares para fazer-lo. No momento em que este artigo foi escrito, o vault abre um CDP e usa o DAI recém-criado para investir. Além disso, o yVault empresta YFI para CREAM e AAVE para obter mais rendimento.

#### Site
- [Yearn.Finance](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1)

#### Ferramentas
- [Yearn Hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): Este link mostrará quanto dos fundos no vault são alocados para quais estratégias.
- [Vaults at Yearn](https://medium.com/yearn-state-of-the-vaults/the-vaults-at-yearn-9237905ffed3): Aqui você pode ver o que cada estratégia no vault yvYFI v2 faz. 
- [Yearn Vision](yearn.vision): Painéis para estatísticas de vault.
- [Zap em v2 YFI yVault](https://zapper.fi/invest?protocol=yearn&contractAddress=0xe14d13d8b3b85af791b2aadd661cdbd5e6097db1&modal=invest)

#### Riscos
Atualmente, os riscos associados a este vault são risco de contrato inteligente para os contratos dos vaults de yearn (que são [auditados](https://github.com/yearn/yearn-security/tree/master/audits)), riscos MakerDAO CDP e, uma vez que uma estratégia empresta YFI para CREAM e AAVE para rendimento extra, risco de contrato inteligente para ambas as plataformas também . O vault tem monitoramento de seu CDP e mantém uma [proporção de integridade](https://medium.com/iearn/delegated-vaults-explained-fa81f1c3fce2)de 3, o que significa que ele irá emitir apenas 1/3 do máximo disponível para emissão em DAI e então usar esse DAI para investimento.

#### Seguro 
No momento em que este artigo foi escrito, para estar totalmente seguro no cofre YFI v2, você precisa de cobertura para Yearn, MakerDAO, AAVE e CREAM. Você pode ser seletivo sobre qual cobertura comprar e pagar apenas pela cobertura dos protocolos que acredita serem arriscados. Você pode ver com quais protocolos este yVault interage para seguro no [yearn hub](https://yearn-hub.vercel.app/vault/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1).

#### APY
APY: 2,866% 
Cálculo: Líquido do último mês, anualizado.
Fonte: [vaults.finance: yearn v2 API](https://vaults.finance/all)
Observação: APY atingiu um pico por um tempo para 24%

Este vault é o vault YFI mais atualizado da equipe do yearn e provou que pode se mover rapidamente para pular para as próximas oportunidades de investimento para o YFI, para obter melhor rendimento, se forem seguras para serem cultivadas, como fizeram recentemente com o farm de BDP: Big Data Protocol. 

- [Yearn.Finance: YFI Vault](https://yearn.finance/vaults/0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1): a página do vault de Yearn mostra APY semanal ou mensal com base em uma fórmula. 

## ***Depósito direto, possível IL***
Algumas técnicas de geração de rendimento são projetadas para reduzir o risco de IL, mas não para removê-lo totalmente. Um exemplo disso é fornecer liquidez ao protocolo Bancor. Se os fundos forem mantidos no Bancor por mais de 100 dias e forem expostos a IL, eles serão subsidiados com BNT no momento do saque pelo valor equivalente perdido (que o usuário é livre para converter de volta para YFI). Na prática, isso significa que você não precisa se preocupar com IL se fizer um depósito de mais de 100 dias no Bancor.

### Bancor: YFI/BNT Single-Sided Protected Pool

Bancor é um AMM como Sushiswap e Uniswap, mas com uma diferença fundamental que foi lançada no Bancor v2.1. Bancor agora tem proteção contra IL *se* você ficar no pool por mais de 100 dias. Essa proteção começa em 30 dias e se expande para proteção total em 100 dias. Atualmente, as recompensas incentivadas para o pool YFI foram interrompidas, mas há uma [proposta](https://gov.bancor.network/t/proposal-re-enable-lm-rewards-on-yfi/1838) para trazê-las de volta, e se for aprovado, isso significará maiores rendimentos neste pool YFI.


#### Site

[Bancor YFI Pool](https://app.bancor.network/eth/portfolio/stake/add/single/0xAeB3a1AeD77b5D6e3feBA0055d79176532e5cEb8)

#### Ferramentas

- [Guia do Ceazor para Bancor v2.1: YFI / BNT Single-Sided Protected Pool](https://youtu.be/LhLMhizDNwE?t=23)
- [Documentação Bancor](https://docs.bancor.network/)
- [Painel Dune do Bancor](https://duneanalytics.com/Bancor/bancor_1)
- [Bancor v2.1 Staking for (DeFi) Dummies](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e)
- [Zap into YFI / BNT Single-Sided Protected Pool](https://zapper.fi/invest?protocol=bancor&contractAddress=0x555981b82743aa443cb1c3002c85ba9d795d4596&modal=legacy-invest)

#### Riscos

Risco de contrato inteligente bancor e confiança no [modelo bancor v2.1](https://blog.bancor.network/proposing-bancor-v2-1-single-sided-amm-with-elastic-bnt-supply-bcac9fe655b). Bancor é [auditado](https://docs.bancor.network/ethereum-contracts/security).

#### Seguro 

Para o seguro DeFi, você só precisaria fazer um seguro do Bancor para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos. 

#### APY

APY: 3,7% 
Cálculo: Último mês, anualizado.
Fonte: Equipe Bancor

- [YFI Pool APY](https://duneanalytics.com/queries/30793/62118): Clique uma vez em cada pool até que apenas YFI fique. Isso mostrará as estatísticas do APY para o pool.

___

## ***[Posição de dívida garantida](https://defipulse.com/blog/what-is-a-cdp)***

Os protocolos baseados em CDP permitem que você deposite seu YFI em troca de uma quantidade menor do token emitido pelo protocolo, que geralmente é uma stablecoin. Você pode então usar o token emitido para cultivar e gerar rendimento. Usar esse método consome mais tempo do que os outros e requer monitoramento constante do CDP para garantir que você esteja acima da taxa de liquidação. Além disso, requer que você use as stablecoins emitidas para encontrar rendimento em outro lugar e que gerencie isso também. 

Nesta seção, usamos o índice de garantia, que é um percentual. Isso significa que se o índice de garantia é de 69%, como no caso do Unit Protocol, se o preço de seu YFI depositado para emitir as stablecoins vale $ 1000, o máximo que você poderá emitir em stablecoins é $ 690. Observe que este é o *MAX* que você pode pedir emprestado e se ficar acima desse índice, você será liquidado - sugerimos que você peça um empréstimo muito abaixo disso para que isso não aconteça com você. 


### MakerDAO
MakerDAO é o Dapp mais antigo para obter empréstimos com sua criptomoeda. Você pode usar seu YFI na MakerDAO para emitir a stablecoin DAI e, em seguida, usar esse DAI para produzir rendimentos. 

#### Site
- [Oasis.app](https://oasis.app/borrow)

#### Ferramentas
- [DeFiSaver](https://app.defisaver.com/): ajuds a gerenciar seu índice no CDP

#### Riscos
Risco de liquidação se seu CDP ficar acima de um índice de garantia de 57%, falha de contrato inteligente para Makerdao, falha de oráculo de preços e falha de contrato inteligente do protocolo onde você deposita ou empresta seu DAI.

#### Seguro 
Para o seguro DeFi, você precisaria segurar o MakerDAO e também o protocolo onde você empresta ou deposita seus stablecoins DAI para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: -5,5% + (21,07% * 0,44) = 3,7708%
Cálculo: Taxa Dai - (APY de Yield Farm de Stablecoin (Zap para v2 crvIB yVault) *% do DAI que você pode emitir e estar seguro). 
Observação: Para emprestar o DAI, você precisa pagar uma taxa anual de 5,5% à MakerDAO. Este é um exemplo, mas você poderia produzir rendimento em qualquer lugar.
Fonte: [Oasis App Borrow - Selecione o tipo de garantia YFI-A](https://oasis.app/borrow)

### Unit Protocol
O Unit Protocol é uma plataforma CDP semelhante ao MakerDAO, exceto que este, permite criar stablecoin USDP em vez de DAI. Com a Unit, eles têm uma taxa de garantia de 69%, que é maior do que a MakerDAO e foram auditados, mas são uma plataforma mais recente.

#### Site
- [Unit Protocol](https://unit.xyz/)

#### Ferramentas
- [Documentação](https://docs.unit.xyz/)
- [Tutorial em vídeo Ceazor](https://youtu.be/zlFBeoTHJUs?t=33)

#### Riscos
Risco de liquidação se o índice de garantia exceder 69%, falha de contrato inteligente de Unit Protocol, falha de oráculo e falha de contrato inteligente para onde você empresta ou deposita seu USDP. Você pode encontrar suas auditorias [aqui](https://github.com/unitprotocol/protocol_docs).

#### Seguro 
Para o seguro DeFi, você precisaria segurar o Unit Protocol e onde quer que você empreste seus stablecoins USDP para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: -5,5% + (21,07% * 0,53) = 5,67%
Cálculo: 5,5 taxa anual da unidade + (rendimento do uso do [v2 crvIB yVault](https://yearn.finance/vaults/0x27b7b1ad7288079A66d12350c828D3C00A6F07d7) *% do USDP que você pode emitir e estar seguro). 
Observação: Você pode usar o seu USDP em qualquer lugar se encontrar um rendimento mais alto, usamos o vault USDP da Yearn como exemplo.
Fonte: [Unit Protocol](https://unit.xyz/asset/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)

___

## ***Para Emprestar & Tomar Emprestado***


Nesta seção, cobrimos as plataformas que permitem que você empreste seu YFI ou use seu YFI como garantia para tomar emprestado stablecoins ou outros tokens, que você pode usar para fazer farm. Isso é diferente de abrir um CDP, que permite emitir stablecoins a uma taxa anual fixa, ao passo que emprestar e tomar emprestado geralmente possuem taxa variável. Nessa categoria, você não deve apenas se preocupar com onde emprestar as stablecoins que tomou emprestado, mas também com as taxas de fornecimento para empréstimo e de tomada de empréstimo, bem como com a taxa de utilização da pool. Se o pool de YFI para o qual você está emprestando for totalmente utilizado, o que significa que as pessoas estão tomando emprestado cada YFI emprestado, você terá que esperar para sacar, até que haja liquidez livre no pool para fazê-lo. 

### Cream Finance
Cream.Finance é um protocolo de empréstimo descentralizado. Você pode tomar emprestado stablecoins contra seu YFI para até 50% de sua garantia total. 

#### Site
- [Cream.Finance](https://app.cream.finance/)

#### Ferramentas
- [Documentação do Cream](https://docs.cream.finance/)
- [Ceazor Video Tutorial: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=598)

#### Riscos
Risco de liquidação se você ultrapassar o índice de garantia de 50%, falha de contrato inteligente para Cream Finance, falha de oráculo e falha de contrato inteligente para onde você empresta ou deposita seus stablecoins. Além disso, você precisa verificar manualmente se o APY da sua farm excede o APY do seu empréstimo, ou você perderá dinheiro. Você pode encontrar a auditoria deles [aqui](https://docs.cream.finance/audit-report).

#### Seguro 
Para o seguro DeFi, você precisaria segurar Cream Finance e onde quer que você empreste seus stablecoins, para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: 0,27% - 18,81% + (60,30% *.39) = 4,977%
Cálculo: APY de Emprestar (YFI) - APY de Tomar Emprestado (USDC) + (Stablecoin Yield Farm APY (Zap para v1 crvEURS yVault) *% de stablecoin que você pode pegar emprestado e estar seguro). 
Observação: Este é um exemplo, mas você poderia produzir rendimento em qualquer lugar.
Fonte: [Cream] ([Cream.Finance](https://app.cream.finance/)) e [Yearn](https://yearn.finance/vaults/0x98B058b2CBacF5E99bC7012DF757ea7CFEbd35BC) Rendimentos.

### Iron Bank
O Iron Bank é exatamente como o Cream v1, mas eles são mais seletivos quanto aos ativos que listam e permitem que os protocolos validados tomem emprestado fundos com pouca ou nenhuma garantia, como Alpha Homora v2 e Yearn Finance. Como os protocolos podem emprestar com pouca garantia, as taxas de utilização no Iron Bank tendem a ser mais altas do que no CREAM ou AAVE. 

#### Site
- [Iron Bank](https://v1.yearn.finance/lending)

#### Ferramentas
- [Documentação do Iron Bank](https://docs.cream.finance/iron-bank/collateral-and-reserve-factor)

#### Riscos
Risco de liquidação se você ultrapassar o índice de garantia, falha de contrato inteligente para o Iron Bank, falha de oráculo e falha de contrato inteligente para onde você empresta seus stablecoins emprestados. Você pode encontrar a auditoria deles [aqui](https://github.com/trailofbits/publications/blob/master/reviews/CREAMSummary.pdf).

#### Seguro 
Para o seguro DeFi, você precisaria segurar Iron Bank e onde quer que você empreste seus stablecoins, para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: 
Cálculo: 
Fonte: 
Observação: Atualmente, você não pode pedir emprestado ao seu YFI no Ironbank, mas isso pode mudar no futuro.

### AAVE
AAVE é outro lugar onde você pode tomar um empréstimo usando seu YFI. Você pode pegar emprestado até 40% em outras moedas no AAVE. A AAVE tem taxas fixas e variáveis para empréstimos de stablecoins, enquanto na MakerDAO e na Unit é sempre de 5,5%. É possível obter uma taxa mais barata na AAVE para tomar empréstimo de stablecoins, mas você precisa observar os níveis de garantia e a taxa de empréstimo, se ela não é variável, ao tomar um empréstimo aqui.

#### Site
- [AAVE](https://app.aave.com/)

#### Ferramentas
- [Ceazor Video Tutorial: AAVE v2](https://youtu.be/eMP_uIwniHc?t=46)
- [Ceazor Video Tutorial: Getting Paid to Lend while Borrowing](https://youtu.be/AJx_TH3CMZc?t=407)

#### Riscos
Risco de liquidação se você ultrapassar o índice de garantia de 40%, falha de contrato inteligente para AAVE, falha de oráculo (usa Chainlink) e falha de contrato inteligente para onde você empresta seus stablecoins. Você pode encontrar suas auditorias [aqui](https://docs.aave.com/developers/security-and-audits).

#### Seguro 
Para o seguro DeFi, você precisaria segurar AAVE e onde quer que você empreste seus stablecoins, para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: 0,11% - 3,98% + (60,30% *.31) = 14,83%
Cálculo: APY de Emprestar (YFI) - APY de Tomar Emprestado (TUSD) + (Stablecoin Yield Farm APY (Zap para v1 crvEURS yVault) *% de stablecoin que você pode pegar emprestado e estar seguro).
Observação: Este é apenas um exemplo. Você pode pegar emprestado qualquer stablecoin e usá-lo na farm de sua escolha. 
Fonte: [AAVE - YFI](https://app.aave.com/deposit/YFI-0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5)

___

## ***Fornecimento de Liquidez***

Esta seção discute estratégias que o expõem a perdas impermanentes, e você também deve fornecer liquidez para ambos os lados do pool do AMM. **Se quiser investir seu YFI, você também terá que adicionar uma quantia igual em $ de ETH.**

### Sushiswap YFI/WETH Pool
Sushiswap é um AMM que geralmente tem rendimentos mais altos do que Uniswap, pois seus pools são subsidiados com recompensas SUSHI. 

#### Site
- [Sushiswap](https://app.sushi.com/yield)
#### Ferramentas
- [YFI Sushi pools](https://analytics.sushi.com/tokens/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e)
- [apy.vision YFI / ETH Sushi Pool](https://apy.vision/#/pools/0x088ee5007c98a9677165d78dd2109ae4a3d04d0c)
- [Zap no Sushiswap YFI / WETH Pool](https://zapper.fi/invest?protocol=sushiswap&contractAddress=0x088ee5007c98a9677165d78dd2109ae4a3d04d0c&modal=invest)

#### Riscos
Perda impermanente, risco de contrato inteligente para Sushiswap. 

#### Seguro 
Para o seguro DeFi, você só precisaria fazer um seguro do Sushiswap para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: 39,08%
Cálculo: APY anual por depositar seu token SLP de sushi YFI / WETH no sushi.
Fonte: [Sushiswap Yield](https://app.sushi.com/yield)

### Uniswap v2 YFI/WETH Pool
Geralmente, em AMMs, como Uniswap, Bancor e Sushiswap, você deseja estar no pool com maior volume, pois isso significa mais taxas para provedores de liquidez. Em média, o Sushiswap tem mais liquidez do que o Uniswap, então geralmente seria melhor fazer LP lá, mas o Uniswap poderia ter rendimentos melhores do que o Sushiswap.

#### Site
- [Uniswap YFI / WETH Pool](https://app.uniswap.org/#/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e)

#### Ferramentas
- [Zapper Uni YFI / WETH](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)
- [Calculadora IL para YFI / WETH Pair](https://app.sommelier.finance/pair?id=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&timeWindow=total): Isso pode ajudar a mostrar quanto você vai ganhar ou perder se você começou a LP neste pool em uma certa data.
- [Uniswap Analytics YFI / WETH](https://info.uniswap.org/pair/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Apy.vision YFI / WETH](https://apy.vision/#/pools/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)
- [Zap no Uniswap v2 YFI / WETH Pool](https://zapper.fi/invest?protocol=uniswapV2&contractAddress=0x2fdbadf3c4d5a8666bc06645b8358ab803996e28&modal=invest)

#### Riscos
Perdas impermanentes e risco de contrato inteligente são as preocupações a serem observadas ao fornecer liquidez na Uniswap.

#### Seguro 
Para o seguro DeFi, você só precisaria fazer um seguro do Uniswap para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: 20,79%
Cálculo: Últimos 30 dias anualizados após subtrair IL.
Fonte: [apy.vision](https://apy.vision/#/pools/0x2fdbadf3c4d5a8666bc06645b8358ab803996e28)

### Pickle.Finance pSUSHI YFI/WETH jar
Pickle possui vaults parecidos com Yearn (chamado de jarros), que permite que você reinvista automaticamente suas recompensas SUSHI do pool SUSHI YFI / WETH, e também dá a você PICKLE como recompensa extra por investir com eles.

Para depositar com Pickle.Finance, você precisa apostar seu SLP (token Sushiswap LP) em seu pote de picles [aqui] (https://app.pickle.finance/jars) e, em seguida, depositá-lo em sua fazenda [aqui](https://app.pickle.finance/farms). Agora você também pode fazer stake de PICKLE por DILL, aumentando suas recompensas PICKLE ganhas no farm em até 2,5x.

#### Site
- [Pickle.Finance Farm](https://app.pickle.finance/farms)
- [Pickle.Finance Jar](https://app.pickle.finance/jars)

#### Ferramentas
- [Calculadora de incentivo DILL](https://app.pickle.finance/dill)
- [Tutorial de Ceazor: Yearn Zap no yveCRV-ETH Pickle Farm](https://youtu.be/Q3HELI9TfjQ?t=25)

#### Riscos
Perda impermanente na posição Sushiswap LP, risco de contrato inteligente para Pickle.Finance e Sushiswap. 

#### Seguro 
Para o seguro DeFi, você só precisaria fazer um seguro do Sushiswap e Pickle.Finance para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: 43% sem incentivo, 58% com incentivos totais. 
Cálculo: APY, Incentivo total é obtido ao fazer stake de PICKLE para DILL
Fonte: [Pickle.Finance Farms](https://app.pickle.finance/farms)

___

## ***Fornecimento de liquidez alavancado***
Nesta seção, você pode estar sujeito a perdas impermanentes e terá que observar os índices de sua dívida para ter certeza de que não será liquidado.

### Alpha Homora v2
Alpha Homora v2 permite que você pegue seu token Uniswap ou Sushiswap LP e o deposite com eles para a farm com até 1,75x de alavancagem. Com Alpha Homora, você pode farm esses pools com 1 ativo (basicamente zaps automáticos para o outro ativo no pool), eles automatizam todas as etapas com 3 transações, e tokens coletados no pool são reinvestidos automaticamente, como em pickle.finance. Da mesma forma que pickle.finance lhe dará PICKLE se você usar seu produto Farm, se você usar alavancagem para cultivar pools de AMM (Uniswap ou Sushiswap), Alpha Homora lhe dará ALPHA além do rendimento que você normalmente receberia conforme mostrado [ aqui](https://alphafinancelab.gitbook.io/alpha-homora/where-does-apy-come-from-for-each-pool). 

#### Site
- [Alpha Finance](https://homora.alphafinance.io/farm)

#### Ferramentas
- [Documentação](https://alphafinancelab.gitbook.io/alpha-homora/)
- [Tutorial em vídeo Ceazor](https://youtu.be/WKW8TsTyGOg?t=41)

#### Riscos
Risco de liquidação se o índice de dívida exceder 60% LTV (Empréstimo x Garantia), falha de contrato inteligente para Alpha Homora v2, falha de contrato inteligente para qual pool você está alavancando (Uniswap ou Sushiswap). Você pode encontrar suas auditorias [aqui](https://github.com/peckshield/publications/blob/master/reviews/PeckShield-Security-Review-Alpha-Homora-v1.0.pdf).

#### Seguro 
Para um seguro defi, você precisaria fazer um seguro do Alpha Finance e do AMM que está usando, para ter cobertura total no caso de um bug de contrato inteligente que levou à perda de fundos.

#### APY
APY: 75,38% 
Cálculo: Isso com uma alavancagem de 1,5x no Sushi ETH / YFI Pool. 
Fonte: [Alpha Homora - Farm](https://homora.alphafinance.io/farm)