


class DominationTurn extends Turn {
  constructor(currentRound, currentPlayer, currentSurvey) {
    super(currentRound, currentPlayer, currentSurvey)
      this.seconds = 30;
      this.guesses = [];
  }

  decreaseTimer() {

  }
  
  calculateScores() {

  }

  continueDominationRound() {
    if(this.currentPlayer === player2) {
      game.getWinner()
    } else {
      this.changeDominationTurn()
    }
  }

  changeDominationTurn() {
    this.guesses = [];
    this.seconds = 30;
    game.selectSurvey();
  }


}


  //Extend from round
  //Keep track of timer



export default DominationTurn;
import Turn from './Round.js';
import Game from './Game.js';
