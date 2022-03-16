---
title: "Yearn Finance faz Parceria com Tenderly para Turbinar Desenvolvimento, Depuração & Análise de Incidentes"
image:
  src: ./cover.png
  width: 1280
  height: 800
date: '2022-03-02'
author: Weaver
translator: jameskbh 
---

A parceria Yearn-Tenderly provou ser mutuamente benéfica.

Tenderly deu à Yearn acesso às melhores ferramentas de desenvolvedores da categoria, insights mais profundos sobre a atividade on-chain e suporte de uma equipe estelar de desenvolvedores. Enquanto Yearn forneceu a eles muitos casos de uso e requisitos de um importante protocolo DeFi, ajudando o produto Tenderly a iterar e se adaptar às necessidades da indústria.

![](cover.png?w=1400&h=670)

## Situação
A Yearn Finance orgulha-se de ser um dos protocolos mais seguros e de TVL mais altos em todo DeFi. Yearn também tem uma enorme quantidade de infraestrutura na rede: mais de 300 v2 vault e contratos inteligentes de estratégia apenas na mainnet (sem mencionar v1 vaults, infraestrutura keep3r, contratos auxiliares, implantações em outras redes, etc.).

Yearn também é um *lego financeiro* aberto. O que significa que ele usa muitos protocolos diferentes em todo o cenário DeFi para ajudar a gerar rendimento e, por sua vez, muitos protocolos diferentes usam Yearn para gerar rendimento para seus usuários e tesourarias. Embora ser tão profundamente integrado permita oportunidades massivas, também tem o custo de propagação de risco: à medida que o número de integrações entre os protocolos aumenta, a superfície de ataque também cresce.

## Desafio
Com uma equipe tão grande de colaboradores de desenvolvimento e vasta infraestrutura na rede, torna-se importante encontrar e utilizar as melhores ferramentas para desenvolvedores da categoria. Alguns dos desafios que a Yearn enfrenta para executar suas operações em escala são:

#### Monitoramento e Alerta
O monitoramento de dados on-chain é fundamental para aprender sobre eventos que potencialmente afetam a segurança do Yearn, a segurança de uma integração ou simplesmente para rastrear padrões no comportamento do usuário.

Por exemplo: E se uma das fontes de rendimento que a Yearn utiliza implementar uma nova proposta de governança para eliminar as recompensas do farming? Ou talvez um protocolo em que fazemos farming atualize os assinantes de seu multisig, criando uma preocupação de segurança e queremos saber sobre isso.

Gastar tempo e recursos dos desenvolvedores construindo e mantendo a infraestrutura fora da cadeia, em vez do trabalho de protocolo principal, não é um grande investimento para Yearn.

#### Depuração
Ambientes de desenvolvimento de contratos inteligentes em Solidity ainda são imaturos em comparação com ambientes de programação tradicionais como Java, Javascript, etc. Escrever código seguro para um protocolo que tem US$ 6 bilhões em ativos sob gestão é um desafio. Para serem bem-sucedidos, os desenvolvedores e equipes de segurança da Yearn precisam de ferramentas que possam depurar código e transações em ambientes locais e ao vivo na mainnet.

### Análise de Incidentes
Quando um evento de segurança que afeta os fundos do usuário acontece na rede, seja contra Yearn ou outro protocolo, precisamos de ferramentas adequadas para entender rapidamente o que aconteceu e como responder. Além do simplesmente alertar, devemos ser capazes de mergulhar profundamente no rastreamento de uma determinada transação ou conjunto de transações e compartilhar nossas descobertas com a equipe.

## Solução
Uma vez que os desenvolvedores do Yearn descobriram que o Tenderly é a ferramenta de análise mais confiável e útil disponível durante as salas de guerra, ele decidiu entrar em um relacionamento mais formal com o Tenderly. 

A equipe da Yearn trouxe à tona uma experiência no cenário DeFi e os casos de uso inerentes a qualquer protocolo DeFi muito ativo, enquanto a equipe da Tenderly compartilhou algumas das mentes mais brilhantes do Ethereum, que têm algumas das infraestruturas de nós de rede de maior desempenho e confiabilidade do setor.

Nos últimos meses, os desenvolvedores de Yearn se tornaram grandes usuários de produtos Tenderly, fornecendo feedback e influência sobre o roteiro do produto. Nesse tempo, Tenderly enviou algumas ferramentas e recursos incrivelmente úteis que ajudaram a resolver cada um dos desafios listados acima.

#### Monitoramento e alerta
Tenderly tem embutido alertas personalizáveis que permitem que até mesmo os usuários novatos possam criar alertas sobre praticamente qualquer evento on-chain. Internamente, Yearn usa isso extensivamente para manter um olho em eventos críticos e valores na rede. Por exemplo, nossos grupos de Telegram multisig são alertados com um hiperlink quando uma nova transação multisig é minerada.

Ações Web3 é outro recurso do Tenderly permitindo que os usuários acionem scripts internos em reação a eventos on-chain (por exemplo, enviar uma transação para desativar a atividade keep3r se um bug em uma estratégia causar uma coleta repetida).

#### Depuração
Usar o depurador Tenderly tem sido um grande avanço para os desenvolvedores do Yearn. Já é passado os dias de usar Ganache para bifurcar a mainnet em ambientes de desenvolvimento local. Enquanto Ganache pode ser lento, não confiável, e levar a falhas de RPC; os forks Tenderly são especialmente robustos, e têm economizado muitas horas de trabalho do desenvolvedor, ajudando a encontrar a linha exata que fez com que uma transação fosse revertida. Além disso, forks individuais e rastreamento de transações podem ser compartilhados via URL, para que você saiba que está olhando para a mesma coisa que seus colegas e revisores de código.

### Análise de Incidentes
Tenderly oferece a melhor interface de usuário da indústria para um depurador. Tem sido de valor inestimável para a equipe do Yearn chegar ao fundo dos eventos de segurança e ajudar a dissecar bugs e ataques. Os ambientes de sala de guerra são estressantes e barulhentos, por isso é útil ter URLs compartilháveis que ajudem todos a estar na mesma página. Mais esforços estão em andamento em relação à análise de incidentes, mas abordaremos isso em um post separado. 

## Tenderly UI preview

*Visão geral da transação:*
![](image1.png?w=1140&h=609)

*Contexto de erro:*
![](image2.png?w=1131&h=432)

*Simulação de erro *
![](image3.png?w=1280&h=672)

## O que vem a seguir
Uma coisa com a qual a Yearn está mais animada é trazer novos colaboradores e atrair talentos. Em colaboração com a equipe da Tenderly, oferecemos acesso gratuito de 90 dias à Tenderly para membros do YFI Boarding School (uma comunidade para futuros estrategistas). Acreditamos que isso tem ajudado os membros deste grupo a obter insights mais profundos sobre seu próprio código de estratégia, ajudando-os a aprender de forma mais eficiente, além de mostrar a eles o poder do produto da Tenderly.

Yearn Finance é DeFi tornado simples. Saiba mais consultando nossos documentos, nossa visão e como se juntar a nós. 

Tenderly fornece uma plataforma de desenvolvedor de ponta a ponta para equipes e empresas que procuram construir produtos inovadores em blockchain. Saiba mais em tenderly.co.
