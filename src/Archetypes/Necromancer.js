"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        Necromancer._createdArcheTypeInstances += 1;
        this._energyType = 'mana';
    }
    static createdArcheTypeInstances() {
        return Necromancer._createdArcheTypeInstances;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Necromancer;
Necromancer._createdArcheTypeInstances = 0;
