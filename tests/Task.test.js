const Task = require('../src/Task');
const { v4: uuidv4 } = require('uuid');

describe('Task', () => {
    it('should create a task with id, title, and completed status', () => {
        const id = uuidv4();
        const title = 'Test task';
        const task = new Task(id, title);

        expect(task).toEqual(expect.objectContaining({
            id: id,
            title: 'Test task',
            completed: false // Valor padrão esperado para a propriedade completed
        }));
    });

    it('should mark a task as completed', () => {
        const task = new Task(1, 'Complete me', false);

        task.setCompleted(true);

        expect(task.completed).toBe(true);
    });
});
