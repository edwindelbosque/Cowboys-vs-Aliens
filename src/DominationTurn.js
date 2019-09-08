import Turn from './Turn.js';

class DominationTurn extends Turn {
  constructor(currentRound) {
    super(currentRound)
  }

  getQuestion() {
    //returns STRING of actual survey question
    return this.currentRound.survey[0].question
  }

  // organizeRespondents() {
  //   let answerInfo = this.currentRound.survey.filter(obj => {
  //     return obj.answer
  //   })

  //   return answerInfo.reduce((acc, obj) => {
  //     acc[obj.answer] = obj.respondents
  //     return acc
  //   }, {})

  //   //makes survey into a single object of key-value pairs
  //   // {[answer]: [respondents], [answer]: [respondents], [answer]: [respondents]}
  // }

  saveRespondents() {
    let answerInfo = [this.currentRound.survey[1], this.currentRound.survey[2], this.currentRound.survey[3]]
    
    answerInfo.forEach(answer => {
      this.currentRound.respondentsInfo.push(answer)
    })
    //surveys saved will allow for points to be added once dom ROUND is complete
  }

  saveGuess(guess) {
    return this.currentRound.dominationGuesses.push(guess)
    //surveys saved will allow for points to be added once dom ROUND is complete
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
