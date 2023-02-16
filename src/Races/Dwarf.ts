import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances: 0;

  constructor(name: string, dexteryte: number) {
    super(name, dexteryte);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf._createdRacesInstances;
  }
}