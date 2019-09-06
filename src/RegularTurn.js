import Round from "./Round";
import DOMupdates from "./DOMupdates";

class RegularTurn extends Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
  }

  identifyQuestion() {
    return this.currentRound.survey[0].id
  }

  capitalizeGuess(guess) {
    return guess.toUpperCase();
  }

  checkGuess(guess) {
    console.log(this.currentRound.capitalizeAnswers());
    return this.currentRound.capitalizeAnswers().includes(this.capitalizeGuess(guess));
  }

  spliceAnswers(guess) {
    let i = this.currentRound.capitalizeAnswers().findIndex(answer => answer === this.capitalizeGuess(guess))
    this.currentRound.answers.splice(i, i + 1);
    this.currentRound.endRound();
  }

  countRespondents(guess) {
    let answerInfo = this.currentRound.answers.find(answer => {
      let textAnswer = answer.answer.toUpperCase();
      return textAnswer.includes(this.capitalizeGuess(guess))
    })
    return answerInfo.respondents;
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
    return this.checkGuess(guess) ? 'Correct!' : 'Incorrect!'
  }

  togglePlayer(guess) {
    if (!this.checkGuess(guess)) {
      this.currentPlayer === this.currentRound.game.player1
        ? this.currentPlayer = this.currentRound.game.player2
        : this.currentPlayer = this.currentRound.game.player1
    }
  }
}

export default RegularTurn;