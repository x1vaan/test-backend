# Test-Backend

## Introdução
> API REST para gestão de universidades, teste de backend.

## Bibliotecas
- Express: Rapida e facil para criar o servidor.
- Mongoose: ODM para a conexão com o banco de dados.
- Axios: Para o consumo da API das universidades.
- Dotenv: Ler as variaveis do arquivo .env

## Estrutura do projeto
> Diretorio principal:
- index.js: Codigo levantando o servidor.
- .env:
```
PORT=yourport
MONGO_URI=URI banco de dados
```
Substituir as variaves com o port e URI do banco de dados que serão usados.

> Diretorio src
```
cd src
```
- addUniversities.js: Este arquivo tem uma função que consume a API das universidades, e são salvadas no banco de dados que sera executada quando o servidor correr pela primeira vez, no diretorio principal, arquivo index.js.
- app.js: Middlewares do Express.js.
- db.js: Conexão com o Banco de Dados.

```
cd .\src\models\
```
- Modelo do documento da universidade.

```
cd .\src\routes\
```
- Routes da API REST. 

## Run the project
>No diretorio principal, os seguintes comandos:
```
npm install 
npm start
```
