class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    changeCompleted(taskId) {
        const task = this.tasks.find(task => task.id === taskId)
        if (task) {
            task.setCompleted(!task.completed);
        }
    }

    getTaskById(taskId) {
        const task = this.tasks.find(task => task.id === taskId)
        if (!task) return null;

        return task;
    }

    getTasks() {
        return this.tasks;
    }
}

module.exports = TaskList;
