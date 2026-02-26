// World.js
// This file contains the implementation of the game world and exploration features.

class World {
    constructor() {
        this.locations = [];
    }

    addLocation(location) {
        this.locations.push(location);
    }

    explore(location) {
        console.log(`Exploring ${location}`);
    }
}

module.exports = World;