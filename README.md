# Trabalho de Testes Unitário - Engenharia de Software 1

## Sobre a aplicação
Foi criada uma aplicação para simular uma lista de tarefas (To-Do List), que permite ao usuário adicionar, remover, listar e alterar o status de completo de uma tarefa. A aplicação utiliza Jest para implementação de testes unitários.

A aplicação possui as seguintes classes:
- *Task*: Representa uma tarefa individual
- *TaskList*: Gerencia uma lista de tarefas
- *TaskManager*: Interface para interagir com a lista de tarefas

## Sobre os testes elaborados
Para cada classe foram definidos testes para os respectivos métodos.

#### Task.test.js
- Valida a criação de tasks
- Verifica a alteração de status de uma task

#### TaskList.test.js
- Verifica a adição de task em uma lista
- Verifica a remoção de task de uma lista
- Verifica o retorno de uma task a partir do seu ID
- Verifica o retorno da lista de todas as tasks
- Verifica a alteração de status de uma task

#### TaskManager.test.js
- Verifica a adição de task em uma lista
- Verifica a remoção de task de uma lista
- Verifica o retorno de uma task a partir do seu ID
- Verifica o retorno da lista de todas as tasks
- Verifica a alteração de status de uma task

## Como configurar o ambiente e executar os testes
1. Instalar Node.js
2. Dentro da pasta do projeto, instalar as dependências utilizando:
```
npm install
```
3. Caso queira executar o index.js para verificar exemplos de como pode ser utilizadas as classes, utiliza-se:
```
npm start
```
4. Para executar os testes, utiliza-se:
```
npm run test
```


