const TaskManager = require('../src/TaskManager');
const Task = require('../src/Task');

describe('TaskManager', () => {
    let taskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    it('should add a task', () => {
        const task = taskManager.addTask('New Task');
        expect(taskManager.getAllTasks()).toContainEqual(expect.objectContaining({ title: task.title }));
    });

    it('should remove a task', () => {
        const task = taskManager.addTask('Task to be removed');
        taskManager.removeTask(task.id);
        expect(taskManager.getAllTasks()).not.toContainEqual(task);
    });

    it('should get a task by id', () => {
        const task = taskManager.addTask('New Task')

        expect(taskManager.getTaskById(task.id)).toBe(task);
    });

    it('should get all tasks', () => {
        const task1 = taskManager.addTask('New Task 1')
        const task2 = taskManager.addTask('New Task 2')

        expect(taskManager.getAllTasks()).toStrictEqual([task1, task2]);
    });

    it('should change a task completed', () => {
        const task = taskManager.addTask('New Task');

        taskManager.changeCompleted(task.getId());

        expect(taskManager.getTaskById(task.getId())).toEqual(expect.objectContaining({ completed: true }));

        taskManager.changeCompleted(task.getId());

        expect(taskManager.getTaskById(task.getId())).toEqual(expect.objectContaining({ completed: false }));
    });
});
