import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const newLife = this._lifePoints - attackPoints;
    if (newLife <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = newLife;
    }
    return this._lifePoints;
  }
}