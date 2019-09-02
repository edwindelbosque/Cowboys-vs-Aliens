import chai from 'chai';
import Player from '../src/Player';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys.js';
const expect = chai.expect;

let player1, player2, round, game;
beforeEach(() => {
  player1 = new Player('Cowboy');
  player2 = new Player('Alien');
  game = new Game(data)
  round = new Round(game);
});

describe('Player', () => {

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

  // it('should update score when a player guesses correctly', () => {
  //   expect(player1.updateScore('bowling ball')).to.equal(5);
  // });





}); // <------- end of describe block