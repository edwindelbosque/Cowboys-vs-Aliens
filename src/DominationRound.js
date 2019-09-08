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

  findCorrectGuesses() {
// this.dominationGuesses
    //every guess is compared to this.respondentsInfo.answer
      // true? >>> get value of respondents
      // false? >> nada
//return is one number (total respondent points)
    //change method name
  
    console.log(this.dominationGuesses)
    console.log(this.respondentsInfo)
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