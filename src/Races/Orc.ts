import Race from './Race';

export default class Orc extends Race {
  public _maxLifePoints: number;
  static _createdRacesInstances = 0;
  constructor(name: string, dexteryte: number) {
    super(name, dexteryte);
    this._maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc._createdRacesInstances;
  }
}