"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        Mage._createdArcheTypeInstances += 1;
        this._energyType = 'mana';
    }
    static createdArcheTypeInstances() {
        return Mage._createdArcheTypeInstances;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Mage;
Mage._createdArcheTypeInstances = 0;
