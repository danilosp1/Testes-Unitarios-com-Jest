class Task {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    setCompleted(value) {
        this.completed = value;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.title;
    }
}

module.exports = Task;