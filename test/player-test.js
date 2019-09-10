import chai from 'chai';
import Player from '../src/Player';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys.js';
import DOMupdates from '../src/DOMupdates.js'
import spies from 'chai-spies'
const expect = chai.expect;
chai.use(spies);


describe('Player', () => {
  let player1, player2, round, game;
  beforeEach(function () {
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers'], () => true);
    player1 = new Player('Cowboy');
    player2 = new Player('Alien');
    game = new Game(data, 'playerone', 'playertwo')
    round = new Round(game);
  });
  
  afterEach(function () {
    chai.spy.restore(DOMupdates)
  });

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(player1).to.be.an.instanceOf(Player);
  });

  it('should be an instance of Player', () => {
    expect(player2).to.be.an.instanceOf(Player);
  });

  it('should have a name', () => {
    expect(player2.name).to.equal('Alien');
  });

  it('should start with a score of 0', () => {
    expect(player1.score).to.equal(0);
  });

  it.skip('should multiply the player score based on the multiplier', () => {
    const examplePlayer = new Player('Todd')
    examplePlayer.score = 20;
    examplePlayer.multiplier = 2
    examplePlayer.calculateFinalScore()
    expect(examplePlayer.score).to.equal(40)
  })

  // it('should update score when a player guesses correctly', () => {
  //   expect(player1.updateScore('bowling ball')).to.equal(5);
  // });





}); // <------- end of describe block