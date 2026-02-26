// Main Game Controller

class Game {
    constructor() {
        this.players = [];
        this.isGameActive = false;
    }

    startGame() {
        this.isGameActive = true;
        console.log('Game has started!');
    }

    addPlayer(player) {
        this.players.push(player);
    }

    endGame() {
        this.isGameActive = false;
        console.log('Game has ended!');
    }
}

module.exports = Game;