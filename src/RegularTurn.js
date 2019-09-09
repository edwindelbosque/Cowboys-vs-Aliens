import Round from "./Round";
import DOMupdates from "./DOMupdates";
import Turn from "./Turn"

class RegularTurn extends Turn {
  constructor(currentRound) {
    super(currentRound)
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
  }

  identifyQuestion() {
    return this.currentRound.survey[0].id
  }

  capitalizeGuess(guess) {
    return guess.toUpperCase();
  }

  // checkGuess(guess) {
  //   return this.currentRound.answerStrings.includes(this.capitalizeGuess(guess));
  // }

  spliceAnswers(guess) {
    let i = this.currentRound.answerStrings.findIndex(answer => answer === this.capitalizeGuess(guess))
    this.currentRound.answerStrings[i] = 'false';
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
        DOMupdates.appendCurrentPlayerName(this.currentPlayer.name);
      } else {
        this.currentPlayer = this.currentRound.game.player1;
        DOMupdates.appendCurrentPlayerName(this.currentPlayer.name);
      }
    }
  }
}

export default RegularTurn;