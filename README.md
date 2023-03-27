
# Projeto pessoal Trybers 'n Dragons

🐉 Contextualizando 🐲

  No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma **raça** definida.

  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

  Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

  Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.

  Agora, cabe a você, nobre ~~dev~~ guerreiro, explorar essas terras e cumprir as quests que surgirão ao longo da sua incrível jornada.

  **_Now, follow ~~the blind~~ the dungeon master!_**


## Instalação

Instalação do projeto

```bash
  git clone git@github.com:vicsantus/Trybers-and-Dragons.git
  cd Trybers-and-Dragons
  docker-compose up -d
  docker exec -it trybers_and_dragons bash
  npm i
  npx ts-node src/index.ts
```

Caso queria mudar personalização de lutas PVP e PVE, abra o arquivo em src/index.ts, e faça as alterações necessárias.
## Funcionalidades

- Feito em POO com Typescript
- Aplicado alguns principios de SOLID
- Caso queira mudar como a forma do dano é aplicado, basta alterar o arquivo src/Battle/PVP.ts ou PVE.ts, na linha de fight.
- Projeto extensível

