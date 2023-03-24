import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static lastId = 0;
  _energyType: EnergyType = 'stamina';

  constructor(nm: string) {
    super(nm);
    Ranger.newId();
  }

  private static newId() {
    this.lastId += 1;
    return this.lastId;
  }

  static createdArchetypeInstances(): number {
    return Ranger.lastId;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}