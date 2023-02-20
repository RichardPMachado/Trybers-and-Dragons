import Race from './Race';

export default class Orc extends Race {
  public _maxLifePoints: number;
  static _createdRacesInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  override get maxLifePoints() {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Orc._createdRacesInstances;
  }
}