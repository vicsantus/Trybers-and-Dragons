import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private readonly _race: Race;
  private readonly _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private readonly _energy: Energy;

  constructor(nm: string) {
    this._dexterity = getRandomInt(1, 10);
    const rc = new Elf(nm, this._dexterity);
    const arc = new Mage(nm);
    this._race = rc;
    this._archetype = arc;
    this._maxLifePoints = rc.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: arc.energyType, amount: getRandomInt(1, 10) };
  }

  get lifePoints(): number { return this._lifePoints; }

  get archetype() { return this._archetype; }

  get maxLifePoints() { return this._maxLifePoints; }

  get dexterity() { return this._dexterity; }

  get race() { return this._race; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get energy(): Energy { return { ...this._energy }; }
  
  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength * 1.7);
  }

  levelUp(): void {
    const up = getRandomInt(1, 10);
    const newMaxLifePoints = this._maxLifePoints + up;
    if (newMaxLifePoints <= this._race.maxLifePoints) {
      this._maxLifePoints = newMaxLifePoints;
    } else { this._maxLifePoints = this._race.maxLifePoints; }
    this._strength += up;
    this._defense += up;
    this._dexterity += up;
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      const resto = this._lifePoints - damage;
      this._lifePoints = resto;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}