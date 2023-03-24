import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static lastId = 0;
  _energyType: EnergyType = 'stamina';

  constructor(nm: string) {
    super(nm);
    Warrior.newId();
  }

  private static newId() {
    this.lastId += 1;
    return this.lastId;
  }

  static createdArchetypeInstances(): number {
    return Warrior.lastId;
  }

  protected get energyType(): EnergyType {
    return this._energyType;
  }
}