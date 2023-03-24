import { IRace } from '../interfaces/IRace';

export default abstract class Race implements IRace {
  readonly name: string;
  readonly dexterity: number;

  constructor(nm: string, dex: number) {
    this.name = nm;
    this.dexterity = dex;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}