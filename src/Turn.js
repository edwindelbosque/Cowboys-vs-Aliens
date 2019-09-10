import DOMupdates from "./DOMupdates";

class Turn {
  constructor(currentRound) {
    this.currentRound = currentRound;
    this.currentPlayer = currentRound.currentPlayer;
  }

  checkGuess(guess) {
    return this.currentRound.answerStrings.includes(guess.toUpperCase());
  }

  giveFeedback(guess) {
    DOMupdates.displayFeedback(this.checkGuess(guess));
  }

  countRespondents(guess) {
    let answerInfo = this.currentRound.answers.find(answer => {
      let textAnswer = answer.answer.toUpperCase();
      return textAnswer.includes(guess.toUpperCase());
    })
    return answerInfo.respondents;
  }
}

export default Turn;