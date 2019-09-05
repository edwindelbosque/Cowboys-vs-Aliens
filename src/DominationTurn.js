import Turn from './Turn.js';


class DominationTurn extends Turn {
  constructor(currentRound) {
    super(currentRound);
      this.currentRound = currentRound;
      this.currentPlayer = currentRound.currentPlayer;
      this.seconds = 30;
      this.guesses = [];
  }

  decreaseTimer() {

  }

  multiplyScores() {
    return this.currentPlayer.calculateFinalScore(this.countRespondents())
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

import Game from './Game.js';
