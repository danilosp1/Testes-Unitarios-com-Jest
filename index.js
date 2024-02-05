const TaskManager = require('./src/TaskManager');

// Criando a instância da aplicação
const manager = new TaskManager();

// Adicionando tarefas
console.log('Adicionando tarefas...');
const first = manager.addTask('Comprar leite');
const second = manager.addTask('Pagar as contas');
const thirty = manager.addTask('Assistir a uma aula de programação');

// Mostrando tarefas adicionadas
console.log('Tarefas atuais:');
console.log(manager.getAllTasks());

// Removendo uma tarefa
const tasks = manager.getAllTasks();
console.log(`Removendo a tarefa: ${first.getTitle()}`);
manager.removeTask(first.getId());

// Mostrando tarefas após a remoção
console.log('Tarefas após remoção:');
console.log(manager.getAllTasks());

