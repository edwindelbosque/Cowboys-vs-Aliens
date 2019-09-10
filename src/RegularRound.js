import Round from '../src/Round';

class RegularRound extends Round  {
  constructor(game) {
    super(game);
  }

  endRound() {
    if (this.answerStrings.every(answer => answer === 'false')) {
      this.game.roundCount++;
      this.game.chooseRound();
    }
  }
}

export default RegularRound;