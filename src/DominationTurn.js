import Turn from './Turn.js';

class DominationTurn extends Turn {
  constructor(currentRound) {
    super(currentRound)
    this.seconds = 30;
    this.guesses = []
    this.dominationPoints = 0
  }

  getQuestion() {
    //returns STRING of actual survey question
    return this.currentRound.survey[0].question
  }

  // capitalizeGuess(guess) {
  //   return guess.toUpperCase();
  // }

  // checkGuess(guess) {
  //   console.log(this.currentRound.capitalizeAnswers());
  //   return this.currentRound.capitalizeAnswers().includes(this.capitalizeGuess(guess));
  // }

  // will invoke a new domination turn for player2?

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
