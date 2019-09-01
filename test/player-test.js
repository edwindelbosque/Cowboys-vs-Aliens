import chai from 'chai';
import Player from '../src/Player';
const expect = chai.expect;

let player;
beforeEach(() => {
  player = new Player(1, 'Alien');
});

describe('Player', () => {

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(player).to.be.an.instanceOf(Player);
  });

  it('should be assigned an id', () => {
    expect(player.id).to.equal(1);
  });

  it('should have a name', () => {
    expect(player.name).to.equal('Alien');
  });

  it('should start with a score of 0', () => {
    expect(player.score).to.equal(0);
  });







}); // <------- end of describe block