import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _createdRacesInstances = 0;  

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Elf._createdRacesInstances;
  }
}