import Race from './Race';

export default class Orc extends Race {
  private static lastId = 0;
  // protected _id: number;
  _maxLifePoints: number;

  constructor(nm: string, dex: number) {
    super(nm, dex);
    this._maxLifePoints = 74;
    Orc.newId();
  }

  // get id(): number { return this._id; }

  private static newId() {
    this.lastId += 1;
    return this.lastId;
  }

  static createdRacesInstances(): number {
    return Orc.lastId;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}