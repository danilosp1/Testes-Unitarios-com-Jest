const TaskList = require('../src/TaskList');
const Task = require('../src/Task');
const { v4: uuidv4 } = require('uuid');

describe('TaskList', () => {
    let taskList;

    beforeEach(() => {
        taskList = new TaskList();
    });
    
    it('should add a task to the list', () => {
        const task = new Task(1, 'Test Task');
        taskList.addTask(task);

        expect(taskList.getTasks()).toContain(task);
    });

    it('should remove a task from the list', () => {
        const task = new Task(1, 'Test Task');
        taskList.addTask(task);
        taskList.removeTask(1);

        expect(taskList.getTasks()).not.toContain(task);
    });

    it('should get a task by id', () => {
        const id = uuidv4();
        const task = new Task(id, 'Test Task');
        taskList.addTask(task);

        expect(taskList.getTaskById(id)).toBe(task);
    });

    it('should get all tasks', () => {
        const id = uuidv4();
        const id2 = uuidv4();
        const task = new Task(id, 'Test Task');
        const task2 = new Task(id2, 'Test Task 2');
        taskList.addTask(task);
        taskList.addTask(task2);

        expect(taskList.getTasks()).toStrictEqual([task, task2]);
    });

    it('should change a task completed', () => {
        const id = uuidv4();
        const task = new Task(id, 'Test Task');
        taskList.addTask(task);

        taskList.changeCompleted(id);

        expect(taskList.getTaskById(id)).toEqual(expect.objectContaining({ completed: true }));

        taskList.changeCompleted(id);

        expect(taskList.getTaskById(id)).toEqual(expect.objectContaining({ completed: false }));
    });
});
