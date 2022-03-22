---
title: "Configurando notificações para transações no blockchain com o Tenderly"
image:
  src: ./cover.jpg
  width: 1200
  height: 675
date: '2022-03-18'
author: Marco_Worms
translator: jameskbh 
---

No [artigo](https://medium.com/iearn/yearn-finance-partners-with-tenderly-to-supercharge-development-debugging-incident-analysis-6489260298a5) em que Yearn anunciou uma parceria com a Tenderly, houve uma seção onde mencionamos:

> "Tenderly tem embutido alertas personalizáveis que permitem que até mesmo os usuários novatos possam criar alertas sobre praticamente qualquer evento on-chain."
>

Um colaborador de Yearn entrou em contato para saber mais sobre isso, e acho que é uma ótima oportunidade para mostrar esse recurso! Vamos começar dando uma olhada em quais redes podemos usar o Tenderly além da Ethereum Mainnet:

![](./image1.jpg?w=909&h=441)\
*Redes suportadas por Tenderly*

Vou explorar o serviço **“Monitoramento -> Alerta”** localizado na barra lateral [Painel do Tenderly](https://dashboard.tenderly.co/) após fazer login em qualquer projeto:

![](./image2.jpg?w=237&h=199)\
*Barra lateral no lado esquerdo após o login*

Há uma ressalva neste serviço sobre o uso gratuito que aparecerá quando você abrir a página Alerta:

`Você receberá um lote de alertas que aconteceram ao longo de 15 minutos. Atualize seu plano para Tenderly Pro/Dev para receber alertas em tempo real`

Para testar, isso não é um problema, e você pode prosseguir com a versão gratuita. Para uma utilização mais robusta dos alertas, terá de atualizar a sua conta.

Vamos começar verificando tudo o que podemos fazer ao tentar **criar um novo alerta**. O artigo não explorará todas as possibilidades, então dê uma olhada nelas para entender o melhor uso para suas necessidades:

![](./image3.jpg?w=1537&h=669)\
*Criar Alerta*

- **Tipo de alerta** serão as condições que definiremos para um evento em cadeia para acionar uma notificação:

![](./image4.jpg?w=1437&h=413)\
*todos os Tipos de Alerta*

- **Alvo do Alerta** será o contrato monitorado para os eventos e condições acima:

![](./image5.jpg?w=991&h=253)\
*todos Alvos de Alerta*

- **Destinos de Alerta** serão os locais que receberão notificações quando o contrato acima atender às condições para um alerta:

![](./image6.jpg?w=937&h=195)\
*todos os Destinos de Alerta*

Antes de criar um novo alerta, devemos primeiro:

- Decidir sobre quais eventos de qual contrato queremos ser notificados
- Adicionar o contrato que queremos acompanhar na guia "Contratos", para que possamos escolhê-lo na etapa 2
- Conectar-se com os destinos que receberão as mensagens (usaremos telegram neste guia) para que possamos enviar notificações a eles na etapa 3

Agora vamos começar!

### Adicionar Telegram como destino

Na aba de alerta, vá para “Destinos” no menu superior e clique em “Telegram”:

![](./image7.jpg?w=1364&h=617)\
*Adicionar Telegram como destino*

Dê um rótulo e siga as instruções para permitir que o bot lhe envie mensagens:

![](./image8.jpg?w=591&h=475)\
*Seguindo instruções para permitir que o bot envie mensagens para você*

Para concluir o processo acima, copie as "palavras mágicas" da etapa de instrução 3. Cola-o no chat com o bot do Tenderly no Telegram, que é acessado clicando em [@TenderlyRobot](https://t.me/TenderlyRobot).

![](./image9.jpg?w=772&h=235)\
*Mensagem de confirmação de que o bot agora pode enviar mensagens neste chat!*

### Monitoramento de depósitos/saques do Yearn Vault

Vamos começar monitorando alguns eventos feitos no vault SPELL da Rede Fantom. Precisamos saber o endereço do contrato do SPELL yVault, e podemos encontrá-lo acessando a [interface do Yearn Vaults](https://yearn.finance/#/vaults) e clicando no SPELL vault.

![](./image10.jpg?w=625&h=287)\
*Yearn Vaults em Fantom*

Depois de clicar nele, veremos esta página com todos os detalhes do Vault, clique no botão "explorador de blocos" que o levará ao contrato do Vault:

![](./image11.jpg?w=1157&h=757)\
*detalhes do yVault SPELL*

Isso abrirá o [contrato do yVault SPELL](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d) no FTMScan (Fork Fantom de [Etherscan](https://etherscan.io/)):

![](./image12.jpg?w=1367&h=845)\
*[Contrato do yVault SPELL no FTMScan](https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d)*

Destacei as informações importantes para o nosso caso de uso para:
- Primeiro o endereço do contrato
- Em seguida, o "Nome do token" (ajuda quando você tem muitas guias de contrato abertas)
- Por fim, o histórico de métodos (funções) que este contrato executou

Por exemplo, **adicionaremos uma notificação para quando alguém depositar tokens no Vault**. Para fazer isso, copie o URL da página do contrato:

https://ftmscan.com/address/0xD3c19eB022CAC706c898D60d756bf1535d605e1d

Em seguida, vá para a guia de contrato da Tenderly e clique para importar este contrato em seu painel, isso nos permitirá criar alertas para ele:

![](./image13.jpg?w=1399&h=681)\
*Importando o contrato no Tenderly*

Cole o endereço, selecione o "Contrato Vyper" (nome é mostrado assim porque o Yearn Vaults usa a [linguagem de programação Vyper](https://vyper.readthedocs.io/en/stable/index.html)). Quando ele aparecer, clique em "Importar":

![](./image14.jpg?w=1155&h=909)\
*Importando o contrato no Tenderly*

Depois de importar, o contrato está pronto para criarmos um alerta para ele!

![](./image15.jpg?w=865&h=467)\
*Importando o contrato no Tenderly*

Vamos criar um alerta então:

![](./image16.jpg?w=1817&h=713)\
*Criando um novo alerta*

Queremos receber uma notificação toda vez que alguém depositar no yVault SPELL. Para fazer isso, verificaremos o método "Depósito" que existe no contrato do yVault. "Método" é um nome análogo a "chamada de função", então esse é o tipo de alerta que usaremos neste caso.

![](./image17.jpg?w=761&h=265)\
*Selecionar o tipo de alerta*

O alvo será um endereço:

![](./image18.jpg?w=759&h=245)\
*Selecione o alvo do alerta*

Você poderá selecionar o contrato que adicionamos anteriormente e, em seguida, escolher qualquer função que exista dentro dele. Observe que muitas funções podem ter nomes semelhantes, funções que começam com “_” geralmente são funções internas privadas e não serão as que estamos procurando.

Neste caso, temos _deposit (private: para uso interno) e deposit (public: para usuários externos). Vamos escolher o que é público:

![](./image19.jpg?w=1319&h=679)\
*Selecione o alvo do alerta*

Por fim, escolha o destino no Telegram que foi configurado anteriormente e salve o alerta:

![](./image20.jpg?w=1325&h=909)\
*Selecione o destino de alerta*

Terminamos! O alerta foi criado e eu vou receber uma mensagem toda vez que alguém depositar SPELL naquele yVault!

![](./image21.jpg?w=1521&h=739)\
*Alerta criado com sucesso!*

Aqui está um exemplo de notificação que recebi depois de configurar este exemplo e depositar um pouco de SPELL no Vault para acioná-la, recebi a notificação imediatamente após a confirmação da transação!

![](./image22.jpg?w=495&h=579)\
*Notificação de novo depósito de SPELL no yVault da rede Fantom enviado para o meu Telegram!*

##Considerações finais

Este exemplo do Yearn mostra uma maneira simples de monitorar a chamada de função de um contrato. Se você explorar todas as opções do sistema de alerta, verá que isso pode ser facilmente ajustado a muitos usos diferentes, por exemplo:

- Os desenvolvedores de coleções NFT podem monitorar sempre que seu contrato chama a emissão de um novo token e anunciar isto automaticamente no Discord
- As pessoas que monitoram os fluxos de Tokenomics podem usar notificações para ficar de olho nos saldos da carteira e nas ações dos contratos para ver se os desenvolvedores estão fazendo o que se espera que seja feito

Você pode monitorar qualquer tipo de atividade on-chain e ser notificado por ela, então experimente todas as diferentes opções!
Produtor: [Worms](https://twitter.com/MarcoWorms), Revisores: [Cryptouf](https://twitter.com/cryptouf), [Dark Ghosty](https://github.com/DarkGhost7)
