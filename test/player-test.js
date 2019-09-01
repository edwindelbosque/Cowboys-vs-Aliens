import chai from 'chai';
import Player from '../src/Player';
const expect = chai.expect;

let player1, player2;
beforeEach(() => {
  player1 = new Player(1, 'Cowboy');
  player2 = new Player(2, 'Alien');
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

  it('should be assigned an id', () => {
    expect(player1.id).to.equal(1);
  });

  it('should have a name', () => {
    expect(player2.name).to.equal('Alien');
  });

  it('should start with a score of 0', () => {
    expect(player1.score).to.equal(0);
  });

  it('should update score when a player guesses correctly', () => {
    expect(player1.updateScore()).to.equal(1);
  });





}); // <------- end of describe block