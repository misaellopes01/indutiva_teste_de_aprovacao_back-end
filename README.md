## INDUTIVA - TESTE DE APROVAÇÃO (BACK-END)

# API RESTFULL de cadastro que deverá receber o parâmetro _nome, e-mail, senha_ e realizar o cadastro dessas informações no banco de dados.

Principais tecnologias usadas: Node.js, TypeScript, TypeORM, SQLite

1. Clonar ou baixar o Repositório <br>
2. Rodar `yarn` ou `npm install` para instalar as dependências <br>
3. (Opcional) caso delete o banco de dados em `./src/database/database.sqlite`, rodar `yarn typeorm migration:run` para criar o _banco de dados_ e a migration _users_ <br>
4. Rodar `yarn dev` para rodar o servidor em modo de desenvolvimento <br>
5. Acessar a rota `http://localhost:3333/user/create` através de um cliente de requisições _http como o Insomnia_ <br>
6. Fazer uma requisição _Post_ em formato `json`:

```json
{
  "name": "Misael Lopes",
  "email": "mecl.ely@gmail.com",
  "password": "12345"
}
```
