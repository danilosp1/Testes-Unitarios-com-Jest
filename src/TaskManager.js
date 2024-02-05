const TaskList = require('./TaskList');
const Task = require('./Task')
const { v4: uuidv4 } = require('uuid');

class TaskManager {
    constructor() {
        this.taskList = new TaskList();
    }

    addTask(title) {
        const id = uuidv4();
        const task = new Task(id, title);
        this.taskList.addTask(task);
        return task;
    }

    removeTask(taskId) {
        this.taskList.removeTask(taskId);
    }

    changeCompleted(taskId) {
        this.taskList.changeCompleted(taskId);
    }

    getTaskById(taskId) {
        return this.taskList.getTaskById(taskId);
    }

    getAllTasks() {
        return this.taskList.getTasks();
    }
}

module.exports = TaskManager;
