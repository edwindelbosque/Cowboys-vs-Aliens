import Turn from './Turn.js';
import DOMupdates from "./DOMupdates";

class DominationTurn extends Turn {
  constructor(currentRound, multiplier) {
    super(currentRound)
    this.dominationPoints = 0;
    this.multiplier = multiplier;
  }

  spliceAnswers(guess) {
    let i = this.currentRound.answerStrings.findIndex(answer => answer === guess.toUpperCase())
    this.currentRound.answerStrings[i] = 'false';
  }

  updateScore(guess) {
    this.giveFeedback(guess)
    if (this.checkGuess(guess)) {
      let upperCaseGuess = guess.toUpperCase()
      let index = this.currentRound.answerStrings.findIndex(answer => answer === upperCaseGuess) + 1;
      this.currentPlayer.score += this.countRespondents(upperCaseGuess) * this.multiplier;
      DOMupdates.appendAnswer(upperCaseGuess, index);
      DOMupdates.appendRespondents(this.countRespondents(upperCaseGuess), index);
      this.spliceAnswers(guess);
    }
  }
}

export default DominationTurn;