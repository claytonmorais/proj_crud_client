# PROJ CRUD CUSTOMER - POC - SOLIDITY
Projeto conceito para utilizaçáo de Smart Contract em Solidity


### Pré requisitos

```
Node: v18.15. (https://nodejs.org/en/)

Npm: 9.5.0 (https://nodejs.org/en/)

DotEnv 16.3.1 (https://www.npmjs.com/package/dotenv)

Truffle: 5.11.4 (https://www.npmjs.com/package/truffle)

Truffle Wallet Provider 2.1.15 (https://www.npmjs.com/package/@truffle/wallet-provider)

Truffle Plugin Verify 0.6.5 (https://www.npmjs.com/package/truffle-plugin-verify)

Vs Code: 1.57.0 (https://code.visualstudio.com/download)

Ganache: 2.7.1 (https://trufflesuite.com/ganache/)



```

## Iniciando o Projeto

Para iniciar o projeto, instale o truffle com o seguinte comando:

```
npm install -g truffle@5.11.5

npm install dotenv@16.3.1

npm install @truffle/wallet-provider@2.1.15

npm install truffle-plugin-verify@0.6.5

```

## Rodando os Testes

Para Rodar os testes unitários, execute os comandos abaixo:

```
truffle compile

truffle test
```

## Rodando local

Para rodar o projeto, no Ganache efetue os procedimentos:

```

truffle compile

truffle migrate --network development

```

## Efetuando deploy na Rede de Teste da Binance

Primeiro é necesário criar um arquivo .env na raiz do projeto e inserir as 12 palavras da frase secreta no Metamask 
(É necessário ter uma carteira na metamask)

OBS: Muito cuidado com sua Frase secreta e sua Chave privada.

Conteúdo do arquivo .env: 

```
SECRET= palavra1 palavra2 palavra2 ...
```


```

truffle compile

truffle migrate --network bscscan

```

## Verificando os Contratos na BSCScan

Após o deploy, obtenha os endereços dos dois contratos deployados (CompareUtils e StoreCustomer) e execute
os comandos para verificação:

```
truffle run verify CompareUtils@<ENDERELO DO CONTRATO - CompareUtils> --network bsctest 

truffle run verify StoreCustomer@<ENDEREÇO DO CONTRATO - StoreCustomer> --network bsctest 

```




## Autores

* **Clayton Morais de Oliveira** 
