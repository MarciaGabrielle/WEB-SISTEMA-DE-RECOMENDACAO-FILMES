# WEB-SISTEMA-DE-RECOMENDACAO-FILMES

## 📌 Introdução

Este é um sistema de recomendação de filmes desenvolvido com a stack MERN (MongoDB, Express, React e Node.js). O objetivo do projeto é fornecer uma experiência personalizada para os usuários, sugerindo filmes baseados nos seus favoritos.

## 🎯 Funcionalidades

- Autenticação de usuários (login/cadastro)
- Adicionar e remover filmes dos favoritos
- Recomendações personalizadas baseadas nos favoritos do usuário
- Listagem de filmes populares e melhor avaliados
- Pesquisa de filmes
- Interface com suporte a temas (modo claro e escuro)

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js, Redux Toolkit, Material UI
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **API de Dados:** TMDB API
- **Autenticação:** JSON Web Token (JWT)

## 🏗️ Arquitetura do Sistema

O sistema segue uma arquitetura baseada em serviços RESTful, com um backend que gerencia usuários e recomendações e um frontend que exibe os filmes e interações do usuário. A comunicação entre frontend e backend é feita por meio de requisições HTTP.

### Estrutura do Projeto

```
📂 web-sistema-de-recomendacao-filmes
 ├── 📂 client (Frontend - React.js)
 ├── 📂 server (Backend - Node.js & Express)
 ├── 📜 README.md
 ├── 📜 LICENSE
 ├── 📜 .gitignore
```

## 📌 Configuração e Execução

### 🔹 Clonar o repositório

```sh
git clone https://github.com/MarciaGabrielle/WEB-SISTEMA-DE-RECOMENDACAO-FILMES.git
cd WEB-SISTEMA-DE-RECOMENDACAO-FILMES
```

### 🔹 Configuração do Backend

1. Instalar dependências:
   ```sh
   cd server
   npm install
   ```
2. Criar um arquivo `.env` na raiz do backend com as seguintes variáveis:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   TMDB_API_KEY=your_tmdb_api_key
   ```
3. Rodar o backend:
   ```sh
   npm start
   ```

### 🔹 Configuração do Frontend

1. Instalar dependências:

   ```sh
   cd client
   npm install
   ```

2. Rodar o frontend:

   ```sh
   npm start
   ```

## 🎬 Sistema de Recomendação Implementado

O sistema utiliza um modelo híbrido de recomendação baseado nos seguintes métodos:

- **Filtragem baseada em conteúdo:** Recomendação de filmes com gêneros semelhantes aos favoritos do usuário.

- **Categorias pré-definidas:** Exibição de listas de filmes populares e melhor avaliados da API do TMDB.

&#x20;

## 💡 Inspiração

O código-fonte deste projeto foi inspirado no repositório [fullstack-mern-movie-2022](https://github.com/trananhtuat/fullstack-mern-movie-2022).

## 👥 Contribuidores

- **Marcia Gabrielle** - [GitHub](https://github.com/MarciaGabrielle)

🚀 Projeto desenvolvido para aprendizado e prática de desenvolvimento full-stack!

