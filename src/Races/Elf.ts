import Race from './Race';

export default class Elf extends Race {
  private static lastId = 0;
  _maxLifePoints: number;

  constructor(nm: string, dex: number) {
    super(nm, dex);
    this._maxLifePoints = 99;
    Elf.newId();
  }

  private static newId() {
    this.lastId += 1;
    return this.lastId;
  }

  static createdRacesInstances(): number {
    return Elf.lastId;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}