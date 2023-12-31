import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdArcheTypeInstances = 0;
  
  constructor(name: string) {
    super(name);
    Ranger._createdArcheTypeInstances += 1;
    this._energyType = 'stamina';
  }
 
  static override createdArchetypeInstances() {
    return Ranger._createdArcheTypeInstances;
  }

  override get energyType(): EnergyType {
    return this._energyType;
  }
}