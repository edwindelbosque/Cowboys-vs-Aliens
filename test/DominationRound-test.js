import chai from 'chai';
import data from '../data/surveys.js'
import Game from '../src/Game';
import DominationRound from '../src/DominationRound';
import DominationTurn from '../src/DominationTurn';

import DOMupdates from '../src/DOMupdates.js'
import spies from 'chai-spies'
const expect = chai.expect;
chai.use(spies);


describe('DominationRound', () => {
  
  let  game, dominationRound;
  beforeEach(() => {
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers'], () => true);
    game = new Game(data)
    dominationRound = new DominationRound(game, 3);
  });
  
  afterEach(function () {
    chai.spy.restore(DOMupdates)
  })

  it('should be a function', () => {
    expect(DominationRound).to.be.a('function');
  });

  it('should be an instance of DominationRound', () => {
    expect(dominationRound).to.be.an.instanceOf(DominationRound);
  });


  //temporary solution???????



  // it('should instantiate a new Domination turn', () => {
  //   dominationRound.startDominationRound()

  // })




}); // <------ end of describe block