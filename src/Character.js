class Character {
    constructor(name, breed, hp, attack, defense) {
        this.name = name;
        this.breed = breed;
        this.hp = hp;
        this.maxHp = hp;
        this.attack = attack;
        this.defense = defense;
        this.level = 1;
        this.experience = 0;
        this.skills = [];
        this.inventory = [];
    }

    takeDamage(damage) {
        const actualDamage = Math.max(1, damage - this.defense);
        this.hp -= actualDamage;
        return actualDamage;
    }

    heal(amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    gainExperience(amount) {
        this.experience += amount;
        if (this.experience >= this.level * 100) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.maxHp += 10;
        this.hp = this.maxHp;
        this.attack += 5;
        this.defense += 2;
    }

    addSkill(skill) {
        this.skills.push(skill);
    }

    isAlive() {
        return this.hp > 0;
    }
}

module.exports = Character;