import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  constructor(nm: string) {
    this.name = nm;
    this.special = 0;
    this.cost = 0;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  protected abstract get energyType(): EnergyType;
}