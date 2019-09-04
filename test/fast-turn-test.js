import chai from 'chai';
import data from '../data/surveys.js'
import Game from '../src/Game';
// import Round from '../src/Round';
import DominationRound from '../src/DominationRound';
import DominationTurn from '../src/DominationTurn';
const expect = chai.expect;

let game, dominationTurn, dominationRound;
beforeEach(() => {
  game = new Game(data, 'Erick', 'Jeannie');
  game.startRound();
  dominationRound = new DominationRound(game, 3);
  dominationRound.organizeSurvey();
  dominationTurn = new DominationTurn(dominationRound)
  
});

describe('DominationTurn', () => {
  
  it.only('should be a function', () => {
    expect(DominationTurn).to.be.a('function');
  });

  it.only('should be an instance of DominationRound', () => {
    expect(dominationTurn).to.be.an.instanceOf(DominationTurn);
  });


  


}); // <------ end of describe block