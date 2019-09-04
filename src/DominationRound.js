import Round from './Round.js';
import DominationTurn from './DominationTurn.js';


class DominationRound extends Round {
  constructor(game, multiplier) {
    super(game);
    this.multiplier = multiplier;
  }



  startDominationRound() {
    let dominationTurn = new DominationTurn()
  }



  endDominationRound() {

  }


}



export default DominationRound;
