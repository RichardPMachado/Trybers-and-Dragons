"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor(name) {
        super(name);
        Ranger._createdArcheTypeInstances += 1;
        this._energyType = 'stamina';
    }
    static createdArchetypeInstances() {
        return Ranger._createdArcheTypeInstances;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Ranger;
Ranger._createdArcheTypeInstances = 0;
