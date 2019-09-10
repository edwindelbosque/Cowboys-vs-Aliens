import chai from 'chai';
import data from '../data/surveys.js'
import Game from '../src/Game';
// import Round from '../src/Round';
import DominationRound from '../src/DominationRound';
import DominationTurn from '../src/DominationTurn';
import DOMupdates from '../src/DOMupdates';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

let game, dominationRound, dominationTurn;

describe('DominationTurn', () => {
  
  beforeEach(() => {
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers'], () => true);
    game = new Game(data, 'Erick', 'Jeannie');
    dominationRound = new DominationRound(game, 3);
    dominationTurn = new DominationTurn(dominationRound)
    game.startDominationRound();
  });
  
  afterEach(function () {
    chai.spy.restore(DOMupdates)
  });

  it('should be a function', () => {
    expect(DominationTurn).to.be.a('function');

  });

  it('should be an instance of DominationRound', () => {
    expect(dominationTurn).to.be.an.instanceOf(DominationTurn);
  });

  it('should save guess', () => {
    dominationTurn.saveGuess('wrong')
    expect(dominationRound.dominationGuesses).to.eql(['wrong'])
  });

}); // <------ end of describe block