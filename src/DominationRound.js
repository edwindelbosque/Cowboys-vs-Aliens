import Round from './Round.js';
import DOMupdates from "./DOMupdates";

class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.multiplier = multiplier;
  }

  endDominationRound() {
    DOMupdates.appendPlayerScore(this.currentPlayer.score, this.currentPlayer, this.game.player1);
    this.game.roundCount++;
    this.game.chooseRound();
  }
}

export default DominationRound;