import Round from "./Round";
import DOMupdates from "./DOMupdates";

class Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
  }
}

  updateScore(guess) {
    this.togglePlayer(guess);
    if (this.checkGuess(guess)) {
      let upperCaseGuess = guess.toUpperCase()
      let index = this.currentRound.capitalizeAnswers().findIndex(answer => answer === upperCaseGuess) + 1;
      this.currentPlayer.score += this.countRespondents(upperCaseGuess);
      DOMupdates.appendAnswer(upperCaseGuess, index);
      DOMupdates.appendRespondents(this.countRespondents(upperCaseGuess), index);
      DOMupdates.appendPlayerScore(this.currentPlayer.score, this.currentPlayer, this.currentRound.game.player1);
      this.spliceAnswers(guess);
    }
  }

  giveFeedback(guess) {
    return this.checkGuess(guess) ? 'Correct! Guess again.' : 'X'
  }

  togglePlayer(guess) {
    if (!this.checkGuess(guess)) {
      this.currentPlayer === this.currentRound.game.player1
        ? this.currentPlayer = this.currentRound.game.player2
        : this.currentPlayer = this.currentRound.game.player1
    }
  }
}

export default Turn;