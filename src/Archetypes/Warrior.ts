import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdArcheTypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    Warrior._createdArcheTypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArcheTypeInstances() {
    return Warrior._createdArcheTypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}