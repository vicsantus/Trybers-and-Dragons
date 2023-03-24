import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static lastId = 0;
  _energyType: EnergyType = 'mana';

  constructor(nm: string) {
    super(nm);
    Mage.newId();
  }

  private static newId() {
    this.lastId += 1;
    return this.lastId;
  }

  static createdArchetypeInstances(): number {
    return Mage.lastId;
  }

  protected get energyType(): EnergyType {
    return this._energyType;
  }
}