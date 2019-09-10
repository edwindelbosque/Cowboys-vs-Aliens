import chai from 'chai';
import Player from '../src/Player';
import DOMupdates from '../src/DOMupdates.js'
import spies from 'chai-spies'
const expect = chai.expect;
chai.use(spies);


describe('Player', () => {
  let player1, player2;
  beforeEach(function () {
    chai.spy.on(DOMupdates, ['showWinner', 'clearAnswers'], () => true);
    player1 = new Player('Cowboy');
    player2 = new Player('Alien');
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

}); // <------- end of describe block