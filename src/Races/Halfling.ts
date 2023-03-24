import Race from './Race';

export default class Halfling extends Race {
  private static lastId = 0;
  _maxLifePoints: number;

  constructor(nm: string, dex: number) {
    super(nm, dex);
    this._maxLifePoints = 60;
    Halfling.newId();
  }

  private static newId() {
    this.lastId += 1;
    return this.lastId;
  }

  static createdRacesInstances(): number {
    return Halfling.lastId;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}