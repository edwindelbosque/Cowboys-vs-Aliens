import chai from 'chai';
import Game from '../src/Game';
const expect = chai.expect;

let game;
beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });


}); // <------ end of describe block