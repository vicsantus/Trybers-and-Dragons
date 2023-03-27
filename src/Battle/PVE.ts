import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  champion: Fighter;
  enemy: Array<SimpleFighter | Fighter>;
  _numberOfDefeatedEnemies = 0;

  constructor(ch: Fighter, eny: Array<SimpleFighter | Fighter>) {
    super(ch);
    this.champion = ch;
    this.enemy = eny;
  }

  get numberOfDefeatedEnemies() {
    return this._numberOfDefeatedEnemies;
  }

  fight(): number {
    let winner = 1;
    for (let x = 0; x < this.enemy.length; x += 1) {
      this.champion.attack(this.enemy[x]);
      this.enemy[x].attack(this.champion);
      if (this.champion.lifePoints > 0) {
        this._numberOfDefeatedEnemies = x + 1;
      } else if (this.champion.lifePoints === -1) {
        winner = -1;
        break;
      }
    }
    console.log(`Número de inimigos vencidos: ${this.numberOfDefeatedEnemies}`);
    return winner;
  }
}