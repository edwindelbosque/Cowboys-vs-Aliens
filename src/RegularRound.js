
import Game from '../src/Game';
import Round from '../src/Round'
import Turn from "./Turn";
import DOMupdates from "./DOMupdates";
import RegularTurn from "./RegularTurn"


class RegularRound extends Round  {
  constructor(game) {
    super(game)
  }

  endRound() {
    if (this.answerStrings.every(answer => answer === 'false')) {
      this.game.roundCount++;
      this.game.chooseRound();
    }
  }
}

export default RegularRound;