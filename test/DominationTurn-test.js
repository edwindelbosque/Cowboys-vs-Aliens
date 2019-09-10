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
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers', 'updateScore', 'displayFeedback', 'appendAnswer', 'appendRespondents'], () => true);
    game = new Game(data, 'Erick', 'Jeannie');
    game.chooseSurvey()
    dominationRound = new DominationRound(game, 3);
    dominationRound.organizeSurvey()
    dominationTurn = new DominationTurn(dominationRound)
    game.startRound();
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

  it('should update available answers based on guesses', () => {
    dominationTurn.spliceAnswers(dominationRound.answerStrings[0]);
    dominationTurn.spliceAnswers(dominationRound.answerStrings[1]);
    dominationTurn.spliceAnswers(dominationRound.answerStrings[2]);
    expect(dominationRound.answerStrings).to.eql(['false', 'false', 'false'])
  });

  it('should update player answer and score to DOM', () => {
    dominationTurn.updateScore(dominationRound.answerStrings[0])
    expect(DOMupdates.appendAnswer).to.have.been.called(1);
    expect(DOMupdates.appendRespondents).to.have.been.called(1);
  });

}); // <------ end of describe block