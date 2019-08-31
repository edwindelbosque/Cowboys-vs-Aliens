import chai from 'chai';
import Player from '../src/Player';
const expect = chai.expect;

let player;
beforeEach(() => {
  player = new Player();
});

describe('Player', () => {

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should be an instance of Player', () => {
    expect(player).to.be.an.instanceOf(Player);
  });









}); // <------- end of describe block