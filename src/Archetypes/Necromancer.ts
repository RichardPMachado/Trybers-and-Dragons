import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdArcheTypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    Necromancer._createdArcheTypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return Necromancer._createdArcheTypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}