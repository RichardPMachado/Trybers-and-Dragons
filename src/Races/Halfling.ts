import Race from './Race';

export default class Halfling extends Race {
  public _maxLifePoints: number;
  static _createdRacesInstances = 0;
  
  constructor(name: string, dexteryte: number) {
    super(name, dexteryte);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling._createdRacesInstances;
  }
}