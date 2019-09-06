import Round from "./Round";
import DOMupdates from "./DOMupdates";

class Turn {
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
    return this.currentRound.capitalizeAnswers().includes(this.capitalizeGuess(guess)) ? true : false;
  }

  countRespondents(guess) {
    let answerInfo = this.currentRound.answers.find(answer => {
      let textAnswer = answer.answer.toUpperCase();
      return textAnswer.includes(this.capitalizeGuess(guess))
    })
    return answerInfo.respondents;
  }

  updateScore(guess) {
    if (this.checkGuess(guess)) {
      let upperCaseGuess = guess.toUpperCase()
      let index = this.currentRound.capitalizeAnswers().findIndex(answer => answer === upperCaseGuess) + 1;
      this.currentPlayer.score += this.countRespondents(upperCaseGuess);
      DOMupdates.appendAnswer(upperCaseGuess, index);
      DOMupdates.appendRespondents(this.countRespondents(upperCaseGuess), index);
      DOMupdates.appendPlayerScore(this.currentPlayer.score, this.currentPlayer, this.currentRound.game.player1);
    }
  }

  giveFeedback(guess) {
    return this.checkGuess(guess) ? 'Correct!' : 'Incorrect!'
  }

  togglePlayer(guess) {
    if (!this.checkGuess(guess)) {
      console.log('woooo', this.currentPlayer)
      this.currentPlayer === this.currentRound.game.player1
        ? this.currentPlayer = this.currentRound.game.player2
        : this.currentPlayer = this.currentRound.game.player1
    }
  }
}

export default Turn;