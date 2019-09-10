import chai from 'chai';
import Player from '../src/Player';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys.js'
import DOMupdates from '../src/DOMupdates.js';
import RegularRound from '../src/RegularRound'
import RegularTurn from '../src/RegularTurn'
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
chai.spy.on(DOMupdates, ['appendAnswer'], () => true);



describe('Turn', () => {
  
  let player1, player2, round, game, regularRound, regularTurn;
  beforeEach(function () {
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers', 'appendCurrentPlayerName', 'displayFeedback'], () => true);
    game = new Game(data, 'playerone', 'playertwo')
    player1 = new Player('Cowboy');
    player2 = new Player('Alien');
    round = new Round(game);
    regularRound = new RegularRound(game);
    regularRound.organizeSurvey();
    regularTurn = new RegularTurn(regularRound);
  });
  
  afterEach(function () {
    chai.spy.restore(DOMupdates)
  });

  it('should be a function', () => {
    expect(RegularTurn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(regularTurn).to.be.an.instanceOf(RegularTurn);
  });

  it('should check to see if guess was incorrect', () => {
    expect(regularTurn.checkGuess('Wrong Answer')).to.equal(false);
  });

  it.skip('should find number of respondents', () => {
    expect(regularTurn.countRespondents(regularRound.answers[0].answer)).to.equal(regularRound.answers[0].respondents)
  });

  it.skip('should toggle player when guess is incorrect only', () => {
    expect(regularTurn.currentPlayer).to.equal(game.player1);
    regularTurn.togglePlayer('wrong');
    expect(regularTurn.currentPlayer).to.equal(game.player2);
    regularTurn.togglePlayer('wrong');
    expect(regularTurn.currentPlayer).to.equal(game.player1);
    regularTurn.togglePlayer(regularRound.answers[0].answer)
    expect(regularTurn.currentPlayer).to.equal(game.player1);
  });

  it.skip('should give feedback', () => {
    expect(regularTurn.giveFeedback('wrong guess')).to.equal('Incorrect!')
    expect(regularTurn.giveFeedback(regularRound.answers[0].answer)).to.equal('Correct!')
  });

  it('should splice the answers array in Round', () => {
    regularTurn.spliceAnswers('wrong');
    expect(regularRound.answers.length).to.equal(3)
    regularTurn.spliceAnswers(regularRound.answers[0].answer);
    expect(regularRound.answers.length).to.equal(2)
    regularTurn.spliceAnswers(regularRound.answers[0].answer);
    expect(regularRound.answers.length).to.equal(1)
    regularTurn.spliceAnswers(regularRound.answers[0].answer);
  });

}); // <------ end of describe block