// Combat.js - Turn-based combat system

class Combat {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
        this.currentTurn = 'player';
        this.battleLog = [];
    }

    playerAttack(skillName) {
        const damage = Math.floor(Math.random() * 20) + 10;
        this.enemy.hp -= damage;
        this.battleLog.push(`${this.player.name} attacked ${this.enemy.name} for ${damage} damage!`);
        this.switchTurn();
        return damage;
    }

    enemyAttack() {
        const damage = Math.floor(Math.random() * 15) + 5;
        this.player.hp -= damage;
        this.battleLog.push(`${this.enemy.name} attacked ${this.player.name} for ${damage} damage!`);
        this.switchTurn();
        return damage;
    }

    switchTurn() {
        this.currentTurn = this.currentTurn === 'player' ? 'enemy' : 'player';
    }

    isGameOver() {
        return this.player.hp <= 0 || this.enemy.hp <= 0;
    }

    getWinner() {
        if (this.player.hp > 0) return this.player;
        if (this.enemy.hp > 0) return this.enemy;
        return null;
    }
}

module.exports = Combat;