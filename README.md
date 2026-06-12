```markdown
# 📝 To-Do List - Passo a Passo Completo (Full Stack)

Este guia prático ensina como configurar, executar e entender toda a estrutura do projeto. O sistema consiste em um gerenciador de tarefas com um aplicativo mobile (**React Native + Expo**) que se comunica com um backend (**Node.js + Express + MongoDB**).

---

## 📁 1. Estrutura de Pastas Completa

Certifique-se de que os arquivos do seu projeto estão organizados exatamente desta forma:

```text
To-doList/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js      # Conexão com o Banco de Dados
│   │   ├── controllers/
│   │   │   └── taskController.js # Lógica das funções do CRUD
│   │   ├── models/
│   │   │   └── taskmodels.js    # Estrutura dos dados (Schema)
│   │   ├── routes/
│   │   │   └── taskRoutes.js    # Definição das rotas/endpoints
│   │   └── server.js            # Arquivo principal do Servidor
│   ├── .env                     # Arquivo de senhas/configurações
│   └── package.json             # Dependências e Scripts do Node
└── frontend/
    ├── App.js                   # Código completo do App Mobile
    └── package.json             # Dependências do React Native

```

---

## 💻 2. Passo a Passo: Configuração do Backend

### Passo 2.1: Instalação

1. Abra o terminal do seu computador.
2. Navegue até a pasta `backend`:
```bash
cd backend

```


3. Instale todas as dependências necessárias rodando:
```bash
npm install

```



### Passo 2.2: Configurar as Variáveis de Ambiente

1. Na raiz da pasta `backend`, crie um arquivo com o nome exato de `.env`.
2. Adicione o seguinte conteúdo, substituindo a sua string de conexão do MongoDB:
```env
PORT=3000
MONGO_URI= sua_string_de_conexao_do_mongodb_aqui

```



### Passo 2.3: Iniciar o Servidor com Nodemon (Automático)

1. No terminal da pasta `backend`, execute o script de desenvolvimento:
```bash
npm run dev

```


2. O terminal deverá exibir a mensagem:
* `Servidor rodando automaticamente com nodemon na porta 3000`
* `MongoDB conectado com sucesso!`



---

## 🛰️ 3. Endpoints da API para Testes

Com o servidor rodando, você pode testar as rotas utilizando ferramentas como Postman ou Insomnia apontando para os seguintes endereços:

* **Cadastrar Tarefa (POST):** `http://localhost:3000/api/tasks`
* Corpo em JSON: `{"title": "Estudar React Native", "description": "Fazer o CRUD completo"}`


* **Listar Todas as Tarefas (GET):** `http://localhost:3000/api/tasks`
* **Editar Tarefa (PUT):** `http://localhost:3000/api/tasks/ID_DA_TAREFA`
* Corpo em JSON: `{"title": "Título Atualizado", "completed": true}`


* **Excluir Tarefa (DELETE):** `http://localhost:3000/api/tasks/ID_DA_TAREFA`

---

## 📱 4. Passo a Passo: Configuração do Frontend (Mobile)

### Passo 4.1: Instalação

1. Abra um **novo terminal** no seu computador (não feche o terminal do backend).
2. Navegue até a pasta `frontend`:
```bash
cd frontend

```


3. Instale as dependências do aplicativo rodando:
```bash
npm install

```



### Passo 4.2: Configurar o IP da API

Como o celular físico ou emulador não reconhecem a palavra `localhost`, você precisa descobrir o IP local da sua máquina (ex: `192.168.1.5`).

1. Abra o arquivo `frontend/App.js`.
2. Procure pela linha da constante `API_URL` (por volta da linha 6).
3. Altere o valor inserindo o IP do seu computador mantendo a porta do backend:
```javascript
const API_URL = 'http://SEU_IP_LOCAL:3000/api/tasks';

```



### Passo 4.3: Iniciar o Aplicativo com Expo

1. No terminal da pasta `frontend`, execute:
```bash
npx expo start

```

2. Um QR Code será gerado no terminal.
3. Abra o aplicativo **Expo Go** no seu celular físico (disponível na Google Play Store ou App Store).
4. Use a câmera do celular (iOS) ou a função de escanear do Expo Go (Android) para ler o QR Code do terminal.
5. O aplicativo carregará na tela do celular pronto para cadastrar, listar, editar e deletar as tarefas em tempo real integradas com o seu MongoDB!

