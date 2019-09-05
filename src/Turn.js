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

  identifyAnswerInfo() {
    return this.currentRound.survey.filter(survey => {
      return survey.answer;
    });
  }

  identifyCorrectAnswers() {
    return this.identifyAnswerInfo().map(answerInfo => {
      return answerInfo.answer
    })
  }

  capitalizeGuess(guess) {
    return guess.toUpperCase();
  }

  checkGuess(guess) {
    return this.identifyCorrectAnswers().includes(this.capitalizeGuess(guess)) ? true : false;
  }

  countRespondents(guess) {
    let answerInfo = this.identifyAnswerInfo().find(answer => {
      let textAnswer = answer.answer.toUpperCase();
      return textAnswer.includes(this.capitalizeGuess(guess))
    })
    return answerInfo.respondents;
  }

  updateScore(guess) {
    if (this.checkGuess(guess)) {
      let index = this.identifyCorrectAnswers().findIndex(answer => answer === guess) + 1;
      this.currentPlayer.score += this.countRespondents(guess);
      DOMupdates.appendAnswer(guess, index);
      DOMupdates.appendRespondents(this.countRespondents(guess), index);
      DOMupdates.appendPlayerScore(this.currentPlayer.score);
    }
  }

  giveFeedback(guess) {
    return this.checkGuess(guess) ? 'Correct!' : 'Incorrect!'
  }

  togglePlayer() {
    this.currentPlayer === this.currentRound.game.player1
      ? this.currentPlayer = this.currentRound.game.player2
      : this.currentPlayer = this.currentRound.game.player1
  }
}

export default Turn;