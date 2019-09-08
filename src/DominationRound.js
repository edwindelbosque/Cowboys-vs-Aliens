import Round from './Round.js';
import DominationTurn from './DominationTurn.js';
import DOMupdates from "./DOMupdates";

class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.multiplier = multiplier;
  }

  beginDominationTurn() {
    this.beginTurn();
  }

  startDominationRound() {
    DOMupdates.appendMultiplierInput();
  }

  displayReadyButton() {
    
  }


  endDominationRound() {

  }


}



export default DominationRound;
