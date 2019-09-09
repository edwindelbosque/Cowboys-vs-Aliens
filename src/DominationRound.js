import Round from './Round.js';
import DominationTurn from './DominationTurn.js';


class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.surveys = [];
    this.multiplier = multiplier;
    this.seconds = 30;
    this.respondentsInfo = [];
    this.dominationGuesses = [];
  }

  

  beginDominationTurn() {
    this.beginTurn();
  }
  // ^this.beginTurn ?

  getTotalScore() {
    console.log('GUESSES--->', this.dominationGuesses)
    console.log('INFO--->', this.respondentsInfo)
  }

  displayReadyButton() {
    
  }

  totalScore() {

  }

  endDominationRound() {

  // endGame()
  // invoke end game? 
  }


}



export default DominationRound;