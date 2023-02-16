"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        Warrior._createdArcheTypeInstances += 1;
        this._energyType = 'stamina';
    }
    static createdArcheTypeInstances() {
        return Warrior._createdArcheTypeInstances;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Warrior;
Warrior._createdArcheTypeInstances = 0;
