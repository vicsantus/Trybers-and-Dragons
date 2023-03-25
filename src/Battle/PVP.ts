import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) {
    super(player1);
  }

  logDaBatalha(): number {
    let winner: number;
    console.log('FIM DA BATALHA');
    if (this.player1.lifePoints < this.player2.lifePoints) {
      console.log('O PLAYER 2 VENCEU');
      winner = -1;
    } else {
      console.log('O PLAYER 1 VENCEU');
      winner = 1;
    }
    console.log('VIDA FINAL');
    console.log(`PLAYER 1: ${this.player1.lifePoints}`);
    console.log(`PLAYER 2: ${this.player2.lifePoints}`);
    return winner;
  }

  fight(): number {
    while (this.player1.lifePoints === -1 
      || this.player2.lifePoints === -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    const winner = this.logDaBatalha();
    return winner;
  }
}