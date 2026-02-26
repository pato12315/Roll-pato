// Quest.js

class Quest {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    isCompleted() {
        return this.completed;
    }
}

module.exports = Quest;