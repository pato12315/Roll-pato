class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    introduce() {
        console.log(`I am ${this.name}, with ${this.health} health and ${this.attack} attack`);
    }
}

class WarriorDuck extends Character {
    constructor(name) {
        super(name, 150, 20);
    }
    specialAbility() {
        console.log(`${this.name} uses Shield Bash!`);
    }
}

class MageDuck extends Character {
    constructor(name) {
        super(name, 100, 15);
    }
    specialAbility() {
        console.log(`${this.name} casts Fireball!`);
    }
}

class ArcherDuck extends Character {
    constructor(name) {
        super(name, 120, 18);
    }
    specialAbility() {
        console.log(`${this.name} fires an arrow!`);
    }
}

class HealerDuck extends Character {
    constructor(name) {
        super(name, 90, 10);
    }
    specialAbility() {
        console.log(`${this.name} casts Healing Light!`);
    }
}

// Example usage:
const warrior = new WarriorDuck('Waddles');
const mage = new MageDuck('Quackers');
warrior.introduce();
mage.introduce();
warrior.specialAbility();
mage.specialAbility();

