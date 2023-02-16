import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;  

  constructor(name: string, dexteryte: number) {
    super(name, dexteryte);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf._createdRacesInstances;
  }
}