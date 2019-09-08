import Round from './Round.js';
import DominationTurn from './DominationTurn.js';


class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.multiplier = multiplier;
    this.seconds = 30;
    this.respondentsInfo = [];
  }




// display stuff and instantiate dominationTurn
// do we need a multiplier in turn and round?

  beginDominationTurn() {
    this.beginTurn();
  }

  // ^this.beginTurn ?

  organizeData(data) {
  }
  //^temporary solutin??


  displayReadyButton() {
    
  }


  endDominationRound() {

  // endGame()
  // invoke end game? 
  }


}



export default DominationRound;