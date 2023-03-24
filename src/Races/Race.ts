import { IRace } from '../interfaces/IRace';

export default abstract class Race implements IRace {
  readonly name: string;
  readonly dexterity: number;
  // protected static lastId = 0;
  // protected _id: number;

  constructor(nm: string, dex: number) {
    this.name = nm;
    this.dexterity = dex;
    // this._id = Race.newId();
  }

  // private static newId() {
  //   this.lastId += 1;
  //   return this.lastId;
  // }

  // get id(): number { return this._id; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  protected abstract get maxLifePoints(): number;
}