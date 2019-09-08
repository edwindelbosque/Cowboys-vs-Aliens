import Turn from './Turn.js';

class DominationTurn extends Turn {
  constructor(currentRound) {
    super(currentRound)
    this.respondentsInfo = [];
    this.dominationGuesses = [];
    this.dominationPoints = 0
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

    //surveys saved will allow for points to be added once dom turn is complete
  }

  saveGuess(guess) {
    return this.dominationGuesses.push(guess)
  }



  decreaseTimer() {

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
