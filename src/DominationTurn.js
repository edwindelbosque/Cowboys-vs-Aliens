import Turn from './Turn.js';
import DOMupdates from "./DOMupdates";

class DominationTurn extends Turn {
  constructor(currentRound, multiplier) {
    super(currentRound)
    this.dominationPoints = 0;
    this.multiplier = multiplier;
  }

  checkGuess(guess) {
    return this.currentRound.answerStrings.includes(guess.toUpperCase());
  }

  spliceAnswers(guess) {
    let i = this.currentRound.answerStrings.findIndex(answer => answer === guess.toUpperCase())
    this.currentRound.answerStrings[i] = 'false';
  }

  countRespondents(guess) {
    let answerInfo = this.currentRound.answers.find(answer => {
      let textAnswer = answer.answer.toUpperCase();
      return textAnswer.includes(guess.toUpperCase())
    })
    return answerInfo.respondents;
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
import Game from './Game.js';
