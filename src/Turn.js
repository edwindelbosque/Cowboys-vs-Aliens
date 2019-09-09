import Round from "./Round";
import DOMupdates from "./DOMupdates";

class Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
  }

  checkGuess(guess) {
    return this.currentRound.answerStrings.includes(this.capitalizeGuess(guess));
  }

  giveFeedback(guess) {
    DOMupdates.displayFeedback(this.checkGuess(guess));
  }
}

export default Turn;