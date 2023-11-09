## Encurtador de URL -URL-Shortener

### Descrição

Encurtador de URL é um projeto desenvolvido em NodeJS, Express e Sqlite, que tem como objetivo encurtar URLs.


### Instalação

Para instalar o projeto, basta clonar o repositório e executar o comando `npm install` para instalar as dependências.

### Execução

Para executar o projeto, basta executar o comando `npm start` e acessar o endereço `http://localhost:3000` no navegador.

### Rotas

#### Encurtar URL

Para encurtar uma URL, basta enviar uma requisição POST para a rota `/new` com o seguinte corpo:

```json
{
    "url": "https://www.google.com"
}
```

A resposta será um JSON com a URL encurtada:

```json
{
    "url": "http://localhost:3000/1"
}
```

#### Redirecionar URL

