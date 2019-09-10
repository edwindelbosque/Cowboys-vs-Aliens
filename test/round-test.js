import chai from 'chai';
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
  beforeEach(function () {
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers', 'appendCurrentPlayerName', 'appendQuestion'], () => true);
    game = new Game(data);
    game.startRound();
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

  it('should organize survey', () => {
    expect(round.answers.length).to.eql(0);
    round.organizeSurvey();
    expect(round.answers.length).to.eql(3);
  });

  it('should begin turn while invoking appendCurrentPlayerName and appendQuestion', () => {
    round.beginTurn();
    expect(DOMupdates.appendCurrentPlayerName).to.have.been.called(1);
    expect(DOMupdates.appendQuestion).to.have.been.called(1);
  });

  it('should update roundCounter in game class', () => {
    regularRound.answers = [];
    regularRound.endRound(game);
    expect(game.roundCount).to.equal(2);
    regularRound.endRound(game);
    expect(game.roundCount).to.equal(3);
  });



});// <------ end of describe block