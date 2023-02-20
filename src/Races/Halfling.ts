import Race from './Race';

export default class Halfling extends Race {
  public _maxLifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Halfling._createdRacesInstances;
  }
}