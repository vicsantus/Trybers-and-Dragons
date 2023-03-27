import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Jorge the Warrior');
for (let x = 0; x < 60; x += 1) player1.levelUp();
const player2 = new Character('Black Petrik');
const player3 = new Character('Ginny the unstoppable');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Array<Battle>) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
