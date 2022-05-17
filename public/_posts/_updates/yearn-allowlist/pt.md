---
title: "Yearn Allowlist"
image:
  src: ./image1.jpg
  width: 770
  height: 367
date: '2022-05-06'
author: Weaver
translator: jameskbh 
---

![](./image1.jpg?w=770&h=367)

## Visão geral 

Para tornar o site da Yearn ainda mais seguro, um novo recurso foi recentemente introduzido, denominado Lista de Permissões (Allowlist). Em essência, permite que todas as transações que são feitas através do site/SDK sejam validadas contra um contrato on-chain que mantém um registro de todos os dados válidos que o site pode produzir.

Isso evita que o site seja suscetível a vários ataques man-in-the-middle onde os dados são fornecidos ao site, seja através da API do Zapper/0x ou da própria Yearn. Por exemplo, se a API do Yearn retornar uma lista de Vaults com endereços maliciosos, com a intenção de que os usuários aprovem um deles ao tentar depositar, a Lista de Permissões impedirá que a transação seja feita.

Convidamos outros protocolos a também a tomar proveito da criação de suas próprias listas de permissões para aumentar sua segurança. As instruções para criar sua própria Lista de Permissões são detalhadas mais adiante.

## Como isso funciona 

Vamos dar um exemplo da validação dos dados de uma transação que aprova o depósito em um Vault.

No contrato da Lista de Permissões há uma lista de condições, que são estruturas usadas para validação.

Aqui está uma para aprovar um token de Vault (em formato JSON):

```
{
  "id"= "TOKEN_APPROVE_VAULT",
  "implementationId": "IMPLEMENTATION_YEARN_VAULTS",
  "methodName": "approve",
  "paramTypes": ["address", "uint256"],
  "requirements": [
    ["target", "isVaultUnderlyingToken"],
    ["param", "isVault", "0"]
  ]
}
```

- `id`: O identificador da condição, permite que a condição seja atualizada ou removida pelo proprietário do protocolo 

- `implementationId`: O identificador do contrato de implementação. Os contratos de implementação possuem a lógica para validar a condição. Cada Lista de Permissões pode ter vários contratos de implementação para validar. Por exemplo, na Lista de Permissões de Yearn, há uma implementação para todas as coisas relacionadas a Vaults, e outra para a seção Labs do site, com produtos mais experimentais 

- `methodName`: O nome da função que é permitida 

- `paramTypes`: Os parâmetros da função 

- `requirements`: Informações sobre como a validação será executada 

Podem existir dois tipos de requisitos:  `target` and `param`.

- Se o primeiro argumento de requisito for `target`, o próximo argumento será a função que deve ser chamada na implementação para validar o alvo da transação. 

- Se o primeiro argumento de requisito for `param`, então a função a ser usada para a validação vem em seguida, e o argumento final é a posição do parâmetro para que ele possa ser extraído do calldata ao executar a validação. 

Aqui está a transação, aprovando o Curve RocketPool Vault, que a vamos validar

- target:`0x447Ddd4960d9fdBF6af9a790560d0AF76795CB08`  
- calldata:`0x095ea7b30000000000000000000000005c0a86a32c129538d62c106eb8115a8b02358d570000000000000000000000000000000000c097ce7bc90715b34b9f1000000000`  

Existem 3 etapas para validação:

1. Primeiro, verificamos o [seletor de método](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L72). A partir da condição, geramos o que esperamos que o seletor de método seja para uma transação de aprovação. Como temos o nome da função e os parâmetros armazenados na condição, podemos recriar a função e pegar `bytes4(keccak256(bytes(reconstructedMethodSignature)))`. Podemos então comparar isso com os primeiros 4 bytes do calldata, para garantir que uma função válida esteja sendo chamada pelo site. A assinatura de 4 bytes de `approve(address, uint256)` é `0x095ea7b3` para que possamos ver que o calldata é válido.

2. Em seguida, [validamos o alvo](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L50). Para isso, fazemos uma chamada para o contrato de implementação da condição, usando a validação fornecida, neste caso `isVaultUnderlyingToken`. Nós sempre sabemos que estamos validando um endereço, para que possamos assumir que essa função tem um único parâmetro de endereço. Também é assumido que esta função retorna um `bool`. Se o valor retornado for falso, então a transação não é válida. No contrato de implementação há uma função `isVaultUnderlyingToken`, que então passa a chamar o registro de Vaults da Yearn para executar a validação.

3. Em seguida, [validamos todas as condições dos parâmetros](https://github.com/yearn/eth-allowlist/blob/03f2a9ad5716abd0dbfc6d45885f5d6a04061edc/contracts/libraries/CalldataValidation.sol#L95), nos quais pode haver mais de um, ou nenhum, no caso de uma função sem argumentos. Neste caso queremos verificar se o parâmetro na posição 0 satisfaz a função `isVault` no contrato de implementação, desta forma saberemos que o usuário está depositando em um Vault válido. Novamente, o contrato de implementação usa o registro do Vault Yearn para verificar se o endereço decodificado do calldata é um Vault válido ou não.

Uma transação submetida à Lista de Permissões é validada contra cada condição, se alguma delas confirmar que a transação é válida, então podemos estar confiantes de que a transação que está prestes a ser submetida e que foi dada ao usuário ao interagir com o site, não é maliciosa e segura para executar.

## Quem controla a lista de permissões de cada site?

A Lista de Permissões foi projetada para que cada site tenha uma instância própria, mas a precisamos de uma forma online na cadeia, para vincular cada Lista de Permissões a cada site. Para fazer isso, usamos o ENS/DNSSEC para verificar o proprietário de cada domínio — https://docs.ens.domains/dns-registrar-guide. Dessa forma, sabemos que o controle da Lista de Permissões está vinculado ao controle do domínio e, desde que ele não seja comprometido, a Lista de Permissões correta para um determinado site pode ser obtida.

A segurança de uma Lista de Permissões também depende dos contratos de implementação. Se eles forem facilmente mutáveis ou implementados incorretamente, a segurança da Lista de Permissões é comprometida. É melhor tornar esses contratos imutáveis, ou se eles precisam ser atualizáveis, então é preferível que a propriedade dele seja do multisig do protocolo.

## Registrando-se como um protocolo

Para que os protocolos criem e registrem sua própria Lista de Permissões, eles devem fazer as seguintes etapas:

- Iniciar o cadastro da Lista de Permissões utilizando `registerProtocol` no [Contrato de Registro de Lista de Permissões](https://etherscan.io/address/0xb39c4EF6c7602f1888E3f3347f63F26c158c0336). Isso implantará uma nova Lista de Permissões para o domínio do protocolo. Nota: a conta que inicia o registro precisará ser registrada como proprietária do domínio através do ENS.
- Implantar contratos de implementação personalizados, que podem ser usados para validar metas/parâmetros
- Vincular esses contratos de implementação à Lista de Permissões usando a função `setImplementation`.
- Descobrir todas as transações que são criadas através do site e criar condições correspondentes. Definir essas condições na Lista de Permissões usando `addConditions`

Um exemplo de script de implantação pode ser encontrado [aqui](https://github.com/yearn/yearn-allowlist/blob/main/scripts/chains/250/deploy.py)

## Melhorias futuras

Conforme detalhado, esse recurso reduz a manipulação de dados a partir dos quais as transações que os usuários estão enviando são criadas, como dados de APIs. No entanto, se o código-fonte do site estiver comprometido ou o código malicioso for injetado, essas verificações podem simplesmente ser ignoradas e transações maliciosas criadas para serem apresentadas ao usuário.

Para evitar isso, a Lista de Permissões poderia ser integrada a uma carteira (como a metamask), que validaria todas as transações que estão prestes a ser enviadas em relação à Lista de Permissões obtida para o nome de domínio que gerou a transação. Isso removeria completamente a opção de manipulação do código-fonte do front-end ser um vetor de ataque, e seria uma vantagem competitiva para qualquer carteira que o implementasse. O Registro da Lista de Permissões pode ser usado para validar quaisquer dados para qualquer site com a seguinte função:

```
/**
* @notice Determina se um determinado alvo e um dado calldata são ou não válidos
* @dev Para ser válido, o alvo e os dados de cálculo devem passar nos testes de condições da lista de permissões
* @param targetAddress O endereço de destino da chamada do método
* @param data Os dados brutos da chamada
* @return isValid Verdadeiro se válido, falso se não
*/
   
function validateCalldataByOrigin(
  string memory originName,
  address targetAddress,
  bytes calldata data
) public view returns (bool isValid) {
  address allowlistAddress = allowlistAddressByOriginName[originName];
  isValid = CalldataValidation.validateCalldataByAllowlist(
    allowlistAddress,
    targetAddress,
    data
  );
}
```

## Leituras adicionais

**Eth-Allowlist**
https://github.com/yearn/eth-allowlist

**Exemplo de implementação da lista de permissões de Yearn**
https://github.com/yearn/yearn-allowlist

**Registro DNS ENS**
https://docs.ens.domains/dns-registrar-guide

*Este artigo foi fornecido anonimamente por um desenvolvedor de Yearn. Eu só copiei e colei — xoxo weaver.*
