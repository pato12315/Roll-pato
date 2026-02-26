class EnemyDuck {
    constructor(name) {
        this.name = name;
    }
    quack() {
        console.log(`${this.name} says Quack!`);
    }
    fly() {
        console.log(`${this.name} is flying!`);
    }
}

module.exports = EnemyDuck;