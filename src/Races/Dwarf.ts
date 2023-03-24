import Race from './Race';

export default class Dwarf extends Race {
  private static lastId = 0;
  _maxLifePoints: number;

  constructor(nm: string, dex: number) {
    super(nm, dex);
    this._maxLifePoints = 80;
    Dwarf.newId();
  }

  private static newId() {
    this.lastId += 1;
    return this.lastId;
  }

  static createdRacesInstances(): number {
    return Dwarf.lastId;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

// const matheus = new Dwarf('Matheus', 5);
// const matheus2 = new Dwarf('Matheusa', 5);
// const matheus3 = new Dwarf('Matheus', 5);
// const matheus4 = new Dwarf('Matheus', 5);
// console.log(Dwarf.createdRacesInstances());
// console.log(matheus2.createdRacesInstances());
// console.log(matheus3.createdRacesInstances());
// console.log(matheus4.createdRacesInstances());
// console.log(matheus.maxLifePoints);
