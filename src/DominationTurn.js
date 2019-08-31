class DominationTurn extends Turn {
  constructor(currentRound, currentPlayer, currentSurvey) {
    super(currentRound, currentPlayer, currentSurvey)
      this.seconds = 30;
      this.guesses = [];
      
    

  }
}


  //Extend from round
  //Keep track of timer



export default DominationRound;
import Turn from './Turn.js';