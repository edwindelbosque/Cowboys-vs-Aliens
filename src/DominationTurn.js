import Turn from './Turn.js';
import DOMupdates from "./DOMupdates";

class DominationTurn extends Turn {
  constructor(currentRound, multiplier) {
    super(currentRound)
    this.dominationPoints = 0;
    this.multiplier = multiplier;
  }

  getQuestion() {
    //returns STRING of actual survey question
    return this.currentRound.survey[0].question
  }

  organizeRespondents() {
    let answerInfo = this.currentRound.survey.filter(obj => {
      return obj.answer
    })

    return answerInfo.reduce((acc, obj) => {
      acc[obj.answer] = obj.respondents
      return acc
    }, {})

    //makes survey into a single object of key-value pairs
    // {[answer]: [respondents], [answer]: [respondents], [answer]: [respondents]}
  }

  saveRespondents() {
    return this.currentRound.respondentsInfo.push(this.organizeRespondents())

    //surveys saved will allow for points to be added once dom ROUND is complete
  }

  saveGuess(guess) {
    return this.currentRound.dominationGuesses.push(guess)
    //surveys saved will allow for points to be added once dom ROUND is complete
  }

  capitalizeGuess(guess) {
    return guess.toUpperCase();
  }

  checkGuess(guess) {
    return this.currentRound.answerStrings.includes(this.capitalizeGuess(guess));
  }

  spliceAnswers(guess) {
    let i = this.currentRound.answerStrings.findIndex(answer => answer === this.capitalizeGuess(guess))
    this.currentRound.answerStrings[i] = 'false';
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
      let index = this.currentRound.answerStrings.findIndex(answer => answer === upperCaseGuess) + 1;
      this.currentPlayer.score += this.countRespondents(upperCaseGuess) * this.multiplier;
      DOMupdates.appendAnswer(upperCaseGuess, index);
      DOMupdates.appendRespondents(this.countRespondents(upperCaseGuess), index);
      this.spliceAnswers(guess);
    }
  }

  multiplyScores(multiplier) {
    // game.player.score + this.dominationPoints
    // return score * multiplier
  }


//   continueDominationRound() {
//     if (this.currentPlayer === player2) {
//       game.getWinner()
//     } else {
//       this.changeDominationTurn()
//     }
//   }

//   changeDominationTurn() {
//     this.guesses = [];
//     this.seconds = 30;
//     game.selectSurvey();
//   }


// }

// //Extend from round
// //Keep track of timer
}

export default DominationTurn;
import Game from './Game.js';
