import Round from './Round.js';
import DominationTurn from './DominationTurn.js';
import DOMupdates from "./DOMupdates";

class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.multiplier = multiplier;
    this.seconds = 30;
    this.respondentsInfo = [];
    this.dominationGuesses = [];
  }




// display stuff and instantiate dominationTurn
// do we need a multiplier in turn and round?

  beginDominationTurn() {
    console.log('beginDominationTurn ran!')
    this.organizeSurvey();
    DOMupdates.appendCurrentPlayerName(this.currentPlayer.name);
    DOMupdates.appendQuestion(this.question.question);
  }

  organizeData(data) {
  }
  //^temporary solutin??


  displayReadyButton() {
    
  }


  endDominationRound() {
    console.log('endDominationRound ran!')
  }


}



export default DominationRound;