<h1 align="center">
    <img alt="SempreIT" title="#SempreIT" src="./screenshots/logo.png" width="250px" />
</h1>

<h4 align="center">
	:heavy_check_mark:  Sempre IT projeto Fullstack 🚀 Concluído! :heavy_check_mark:
</h4>
<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
<a href="https://insomnia.rest/run/?label=Sempre%20IT%20Projeto%20Fullstack&uri=https%3A%2F%2Fraw.githubusercontent.com%2FJulioCesar012%2FprojetoSempreIT%2Fmaster%2Fbackend%2FSempreITRotas.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>
<p align="center">
  <a href="#information_source-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-objetivo">Objetivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-testar-online">Testar online</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: Sobre o Projeto

PROJETO desenvolvido especialmente para a SEMPRE IT. Apliacação para controle de gestão de produtos, CRUD básico. Adicionei também um filtro nas tabelas, porém um filtro totalmente do lado do cliente, sem precisar consultar no banco de dados, apenas retorna os dados em tela, para isso utilizei alguns parâmetros para realizar a busca, e a biblioteca para tal foi a AntDesign.

## :computer: Objetivo

O projeto consiste em ter um controle e gerenciamento de produtos. Crud de listar, inserir, editar, deletar produtos. Também funciona com autenticação assinada via token. Sendo assim provemos dois tipos de usuários. Para tal usei também o Private Route para privar rotas e autorizar a entrada delas apenas com dados repassados ao storage da apliacação.

<h1 align="center">
    <img alt="Example" title="Example" src="./screenshots/telaInicial.png" width="500px" />
</h1>

## :rocket: Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias e depêndencias:

## :computer: Frontend:

- [Javascript][javascript]
- [React.js][reactjs]
- [AntDesign][antdesign]
- [Reactstrap][reactstrap]
- [Yarn][yarn]
- [Pubsub-js][pubsub-js]
- [React Highlight Words][react-highlight-words]
- [React Router Dom][react-router-dom]
- [Axios][axios]

## :computer: Backend:

- [Node.js][nodejs]
- [Express][nodejs]
- [Mysql][nodejs]
- [Bcrypt][nodejs]
- [Body-parser][nodejs]
- [Cors][nodejs]
- [Jsonwebtoken][nodejs]
- [Knex][nodejs]

## :information_source: Backend

Configure seu banco de dados Mysql. Usei o xampp localmente na minha máquina linux, porém como está em produção coloquei o banco de dados mysql do [cloudclusters.io][cloudclusters] || Configure o seu database mysql no arquivo knexfile.js e dentro da pasta database configure o arquivo connectionDBMysql. Esses dois arquivos contém seus dados de acesso ao database.

Não esqueça de rodar as migrations localmente assim que instalar as dependências do projeto. Rode o seguinte comando depois de ter configurado seu database:

```bash
$ yarn knex migrate:latest
```

Minhas configs no arquivo connectionDBMysql:

```bash
const mysql = require('mysql');

const pool = mysql.createPool({
  "host": "localhost",
  "user": "root",
  "password": "",
  "database": "sempreitfullstack",
});

exports.pool = pool;
```

Minhas configs no arquivo knexfile:

```bash
development: {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "sempreitfullstack",
  },
  migrations: {
    directory: "./src/database/migrations",
  },
},
```

## :information_source: Como usar

Clone a aplicação com o git clone, siga os passos abaixo.

Reposiórios individuais:

- [Backend][backend_github]
- [Frontend][frontend_github]

Em seu terminal na linha de comando:

### Instale a API Backend

```bash
# Clone o repositório
$ git clone https://github.com/JulioCesar012/SempreIT_Backend

# Vá para a pasta backend
$ cd projetoSempreIT/backend

# Instale as dependências
$ yarn install
      ou
$ npm install

# Rode as Migrações
$ yarn knex migrate:latest

# Inicie o servidor
$ yarn start

# rodando na porta padrão: 3333
```

### Instale o Front-end

```bash
# Clone o repositório
$ git clone https://github.com/JulioCesar012/SempreIT_Frontend

# Vá para a pasta frontend
$ cd projetoSempreIT/frontend

# Instale as dependências
$ yarn install
      ou
$ npm install

# Inicie
$ yarn start

# rodando na porta 3000

#Login usuário comum:

Rota: https://frontendsempreit.herokuapp.com/login
	http://localhost:3000/login

  email: user1@gmail.com
  senha: 123456

  email: user2@gmail.com
  senha: 123456

#Login administrador:

Rota: https://frontendsempreit.herokuapp.com/login_admin
	http://localhost:3000/login_admin

  email: admnistrator1@gmail.com
  senha: 123456789

  email: admnistrator2@gmail.com
  senha: 123456789
```

- Observação: No projeto usei localmente xampp na sua última versão com o servidor mysql e apache rodando em minha máquina, para local, é recomendado usar o xampp e configurar seu database no arquivo knexfile.js e no connectionDBMysql. Usei Linux que é meu sistema operacional preferido.

## :rocket: Testar Online

O projeto foi hospedado em servidor heroku tanto frontend como backend, e o banco de dados mysql sendo utilizado direto das hospedagem 000webhost, clique no link abaixo:

- [Aplicação web funcional][frontend]

Desenvolvido com ♥ por @JulioCesar012 :wave: [Me contate!](https://www.linkedin.com/in/julio-cesar-filho-759653171/)

[nodejs]: https://nodejs.org/
[javascript]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
[reactjs]: https://reactjs.org
[antdesign]: https://ant.design/
[reactstrap]: https://reactstrap.github.io/
[yarn]: https://yarnpkg.com/
[pubsub-js]: https://www.npmjs.com/package/pubsub-js
[react-highlight-words]: https://www.npmjs.com/package/react-highlight-words
[react-router-dom]: https://reactrouter.com/web/guides/quick-start
[axios]: https://github.com/axios/axios
[express]: https://expressjs.com/pt-br/
[mysql]: https://www.mysql.com/
[bcrypt]: https://www.npmjs.com/package/bcryptjs
[body-parser]: https://www.npmjs.com/package/body-parser
[cors]: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS
[jsonwebtoken]: https://jwt.io/
[knex]: http://knexjs.org/
[cloudclusters]: https://www.cloudclusters.io/

[backend_github]: https://github.com/JulioCesar012/SempreIT_Backend
[frontend_github]: https://github.com/JulioCesar012/SempreIT_Frontend

[frontend]: https://frontendsempreit.herokuapp.com/
