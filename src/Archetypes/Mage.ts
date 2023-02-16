import Archetype from './Archetype';
import { EnergyType } from '../Energy';
  
export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdArcheTypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    Mage._createdArcheTypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArcheTypeInstances() {
    return Mage._createdArcheTypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}