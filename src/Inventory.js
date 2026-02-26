// Inventory.js
// This file handles inventory management functionalities.

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    getItems() {
        return this.items;
    }
}

module.exports = Inventory;