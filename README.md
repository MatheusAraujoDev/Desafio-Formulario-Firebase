# Teste Técnico Key People Insights
---
# Sobre o Desafio
##### Contexto:
Dentro da plataforma da KPIs nós possuímos um módulo de pesquisa com funcionários. São
pesquisas que questionam como o funcionário está se sentindo e ajuda o RH de nossos clientes a
entender o que podem fazer para melhorar a vida dos funcionários

##### O Desafio:
Montar uma estrutura onde um usuário possa responder uma pesquisa e no final deve aparecer os gráficos com todos os resultados da pesquisa.

---
# Requisitos
● A primeira tela deve ser a de boas-vindas para iniciar a pesquisa.
● Após a pesquisa iniciada deve aparecer as perguntas a responder.
● As perguntas da pesquisa são:
  ○ “Quantas pessoas tem a sua equipe?”
  ○ “Qual a sua satisfação com a empresa?”
● Após responder todas as perguntas o usuário deve ir para a tela de resultados, onde irá encontrar
os gráficos (1 gráfico para cada pergunta). Os dados apresentados devem ser um compilado
(distribuição de respostas) de todas as respostas (de todos que responderam a pesquisa) para
cada pergunta.

---

# Tecnologias e Ferramentas utilizadas
- React Hooks para gerenciamentos de Estado dos componentes.
 - Biblioteca firebase gerenciar o banco de dados e requisições.
 - Ciclo de Vida de um componente React.
 - React Router para estrutura de rotas.
 - [React Testing Library](https://testing-library.com/) para realização de testes do FrontEnd.
 - Biblioteca [Material UI](https://mui.com/pt/) para estilização do projeto.
 - Biblioteca [Nivo](https://nivo.rocks/) para criação de gráficos.
 - Assim como referências na documentação das ferramentas e no conteúdo do curso da [Trybe](https://www.betrybe.com/)

---

# Linter
Para o desenvolvimento do projeto utilizei as regras do linter [EsLint](https://eslint.org/docs/user-guide/getting-started). Para um código mais limpo, de melhor qualidade e evitar bugs.

 # Clone o projeto para sua máquina
- Para fazer isso, basta abrir o seu terminal e digitar o comando `git clone git@github.com:MatheusAraujoDev/Desafio-Tecnico-Key-People-Insights.git`
- Feito isso utilize o comando `cd desafio-tecnico-key-people-insights` para entrar na pasta do repositório que você acabou de clonar.

---

# Instruções para executar o projeto

## 1- Instale as dependências
Abra um novo terminal, certifique-se de que está na pasta correta do passo anterior. Feito isso realize o comando `npm install` dentro dela (necessário apenas uma vez).

## 2- Configure suas variáveis de ambiente(.env)
- Por questões de segurança, o banco de dados possui suas configurações mantidas em variáveis de ambiente. Você deverá que criar um arquivo `.env` na raiz do projeto(desafio-tecnico-key-people-insights/.env)
- Criado seu arquivo `.env` copie e cole em seu arquivo estas configurações:
```
Configurações que vou adicionar ainda.
```

## 3- Inicialize a aplicação
- Digite o comando `npm start` em seu terminal para iniciar o projeto. Você pode utilizar o mesmo terminal que realizou o primeiro passo.

---

# Execução dos testes

Para executar os testes basta executar o comando `npm test` na pasta raiz do projeto.

Inserir Imagem

---

## Executar um teste específico:
Para executar um teste específico você poderá usar o comando `npm test <nomedoarquivo>`.
Como por exemplo o comando `npm test App.test.js`.

Inserir Imagem

# Referências
● Material UI: https://mui.com/
● Firebase:
○ https://firebase.google.com/docs/storage/web/start#:~:text=import%20%7B-,initializeApp,-%7D%20from%20%22firebase/app
○ https://youtu.be/jCY6DH8F4oc?t=20
● Nivo.Rocks: https://nivo.rocks/bar/
● React Testing Library: https://testing-library.com/
● SweetAlert2: https://sweetalert2.github.io/