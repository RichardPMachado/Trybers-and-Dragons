export default abstract class Race {
 
  constructor(private _name: string, private _dexteryte: number) {}
    get name() {
      return this._name;
    }
    get dexteryte() {
      return this._dexteryte;
    }
    createdRacesInstaces(): number {
      throw new Error('Not implemented')
    } 
    abstract get maxiLifePoints(): number; 
}