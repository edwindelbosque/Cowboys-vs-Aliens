import chai from 'chai';
// import Turn from '../src/Turn';
import Round from '../src/Round';
import RegularRound from '../src/RegularRound'
import Game from '../src/Game';
import data from '../data/surveys'
import DOMupdates from '../src/DOMupdates.js'
import spies from 'chai-spies'
const expect = chai.expect;
chai.use(spies);

describe('Round', () => {
  
  let game, round, regularRound;
  beforeEach(() => {
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers'], () => true);
    game = new Game(data);
    game.startRegularRound();
    round = new Round(game);
    regularRound = new RegularRound(game)
  });

  afterEach(function () {
    chai.spy.restore(DOMupdates)
  });

  it('should be a function', () => {
    expect(RegularRound).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should update roundCounter in game class', () => {
    regularRound.answers = [];
    regularRound.endRound(game);
    expect(game.roundCount).to.equal(2);
    regularRound.endRound(game);
    expect(game.roundCount).to.equal(3);
  });

  // it('should get just the answers from the survey array', () => {
  //   regularRound.organizeSurvey();
  //   expect(regularRound.answers).to.include(game.currentSurvey[0]);
  //   expect(regularRound.answers).to.include(game.currentSurvey[1]);
  //   expect(regularRound.answers).to.include(game.currentSurvey[2]);
  // });

});// <------ end of describe block