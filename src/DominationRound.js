import Round from './Round.js';
import DominationTurn from './DominationTurn.js';
import DOMupdates from "./DOMupdates";

class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.multiplier = multiplier;
    this.seconds = 30;
    this.respondentsInfo = [];
    this.dominationGuesses = [];
  }

  endDominationRound() {
    DOMupdates.appendPlayerScore(this.currentPlayer.score, this.currentPlayer, this.game.player1);
    this.game.roundCount++;
    this.game.chooseRound();
  }
}

export default DominationRound;