import DOMupdates from "./DOMupdates";
import Turn from "./Turn"

class RegularTurn extends Turn {
  constructor(currentRound) {
    super(currentRound)
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
  }

  spliceAnswers(guess) {
    let i = this.currentRound.answerStrings.findIndex(answer => answer === guess.toUpperCase())
    this.currentRound.answerStrings[i] = 'false';
    this.currentRound.endRound();
  }

  updateScore(guess) {
    this.togglePlayer(guess);
    this.giveFeedback(guess)
    if (this.checkGuess(guess)) {
      let upperCaseGuess = guess.toUpperCase()
      let index = this.currentRound.answerStrings.findIndex(answer => answer === upperCaseGuess) + 1;
      this.currentPlayer.score += this.countRespondents(upperCaseGuess);
      DOMupdates.appendAnswer(upperCaseGuess, index);
      DOMupdates.appendRespondents(this.countRespondents(upperCaseGuess), index);
      DOMupdates.appendPlayerScore(this.currentPlayer.score, this.currentPlayer, this.currentRound.game.player1);
      this.spliceAnswers(guess);
    }
  }

  togglePlayer(guess) {
    if (!this.checkGuess(guess)) {
      if (this.currentPlayer === this.currentRound.game.player1) {
        this.currentPlayer = this.currentRound.game.player2;
        DOMupdates.appendCurrentPlayerName(this.currentPlayer.name, this.currentRound);
      } else {
        this.currentPlayer = this.currentRound.game.player1;
        DOMupdates.appendCurrentPlayerName(this.currentPlayer.name, this.currentRound);
      }
    }
  }
}

export default RegularTurn;