import Round from './Round.js';
import DominationTurn from './DominationTurn.js';


class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.multiplier = multiplier;
  }




// display stuff and instantiate dominationTurn
// do we need a multiplier in turn and round?

  beginDominationTurn() {
    this.beginTurn();
  }

  // ^this.beginTurn ?

  startDominationRound() {
    DOMupdates.appendMultiplierInput();
  }

  displayReadyButton() {
    
  }


  endDominationRound() {

  // endGame()
  // invoke end game? 
  }


}



export default DominationRound;
