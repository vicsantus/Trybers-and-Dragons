import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  _player1: Fighter;
  _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  logDaBatalha(): number {
    let winner: number;
    console.log('FIM DA BATALHA');
    if (this._player1.lifePoints < this._player2.lifePoints) {
      console.log('O PLAYER 2 VENCEU');
      winner = -1;
    } else {
      console.log('O PLAYER 1 VENCEU');
      winner = 1;
    }
    console.log('VIDA FINAL');
    console.log(`PLAYER 1: ${this._player1.lifePoints}`);
    console.log(`PLAYER 2: ${this._player2.lifePoints}`);
    return winner;
  }

  fight(): number {
    do {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1 
        || this._player2.lifePoints === -1) break;
    } while (this._player1.lifePoints > 0 
      || this._player2.lifePoints > 0);
    const winner = this.logDaBatalha();
    return winner;
  }
}