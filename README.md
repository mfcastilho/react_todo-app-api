# Todo API

## Descrição

Esta é uma API RESTful para gerenciar uma lista de tarefas (todos). A API foi construída utilizando Node.js, Express, TypeScript e Prisma ORM, seguindo um padrão de camadas. O banco de dados utilizado é o PostgreSQL. O projeto inclui validações, tratamento de erros e segue boas práticas de codificação com ESLint e Prettier.

<div align="center">
    <img src="https://github.com/mfcastilho/react_todo-app-api/blob/master/docs/images/typescript_logo.png" alt="TypeScript" width="70" height="70"/>
    &nbsp;&nbsp;
    <img src="https://github.com/mfcastilho/react_todo-app-api/blob/master/docs/images/express-js.png" alt="Express" width="70" height="70"/>
    &nbsp;&nbsp;
    <img src="https://github.com/mfcastilho/react_todo-app-api/blob/master/docs/images/postgresql_logo.png" alt="PostgreSQL" width="70" height="70"/>
    &nbsp;&nbsp;
    <img src="https://github.com/mfcastilho/react_todo-app-api/blob/master/docs/images/prisma_logo.png" alt="Prisma" width="70" height="70"/>
</div>


## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **ESLint** - para manter a qualidade do código
- **Prettier** - para formatação do código
- **dotenv** - para variáveis de ambiente
- **express-async-errors** - para tratamento de erros assíncronos

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
    ```

4. Execute as migrações do banco de dados:

    ```bash
    npx prisma migrate dev
    ```

## Uso

Para iniciar o servidor, use o comando:

```bash
npm run dev
```

## Endpoints

### GET /todos
Carrega todas as tarefas.

**Response:**
```json
[
  { "id": 74, "completed": false, "userId": 4, "title": "expedita tempore nobis eveniet laborum maiores", "createdAt": "2020-07-06T14:30:32.542Z", "updatedAt": "2020-07-06T14:30:32.542Z" },
  { "id": 77, "completed": true, "userId": 4, "title": "consequatur illum asperiores", "createdAt": "2020-07-06T14:30:32.542Z", "updatedAt": "2020-07-06T14:30:32.542Z" },
  { "id": 83, "completed": false, "userId": 5, "title": "rerum est autem sunt rem eveniet architecto", "createdAt": "2020-07-06T14:30:32.542Z", "updatedAt": "2020-07-06T14:30:32.542Z" }
]
```
## Endpoints

### GET /todos?userId=2&completed=true
Carrega todas as tarefas concluídas do usuário com ID 2.

**Response:**
```json
[
  { "id": 77, "completed": true, "userId": 2, "title": "consequatur illum asperiores", "createdAt": "2020-07-06T14:30:32.542Z", "updatedAt": "2020-07-06T14:30:32.542Z" }
]
```
## Endpoints

### GET /todos/:id
Carrega uma tarefa pelo ID.

**Response:**
```json
{
  "id": 74,
  "userId": 4,
  "completed": false,
  "title": "expedita tempore nobis eveniet laborum maiores",
  "createdAt": "2020-07-06T14:30:32.542Z",
  "updatedAt": "2020-07-06T14:30:32.542Z"
}
```
## POST /todos
Cria uma nova tarefa.

**Request:**
```json
{
  "title": "Learn JS",
  "userId": 4,
  "completed": false
}
```
Response:
```json
{
  "id": 85,
  "userId": 4,
  "completed": false,
  "title": "Learn JS",
  "createdAt": "2020-07-06T14:30:32.542Z",
  "updatedAt": "2020-07-06T14:30:32.542Z"
}
```

## PATCH /todos/
Atualiza uma tarefa pelo ID.

**Request:**
```json
{
  "completed": true
}
```

Response:
```json
{
  "id": 74,
  "userId": 4,
  "completed": true,
  "title": "expedita tempore nobis eveniet laborum maiores",
  "createdAt": "2020-07-06T14:30:32.542Z",
  "updatedAt": "2020-07-06T14:30:32.542Z"
}
``` 
## DELETE /todos/:id
Exclui uma tarefa pelo ID.

**Response:**
```json
{
  "message": "No content"
}
```


## Estrutura do Projeto

A estrutura de pastas do projeto é a seguinte:

src  
├── configs  
├── controllers  
├── dto  
├── entities  
├── errors  
├── middlewares  
├── repositories  
├── routes  
├── services  
├── types  
├── utils  
└── server  

## Contribuição

Se você quiser contribuir com este projeto, siga estas etapas:

1. Fork o projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

## Licença

Distribuído sob a licença MIT. Veja LICENSE <a href="https://github.com/mfcastilho/react_todo-app-api/blob/master/LICENSE"> aqui </a> para mais informações.

Qualquer dúvida ou sugestão, fique à vontade para entrar em contato. Agradeço pelo interesse no projeto!
