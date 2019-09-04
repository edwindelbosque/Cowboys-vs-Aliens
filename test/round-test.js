import chai from 'chai';
// import Turn from '../src/Turn';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys'
const expect = chai.expect;

let round, game;
describe('Round', () => {
  beforeEach(() => {
    game = new Game(data);
    game.startRound();
    round = new Round(game);
    // turn = new Turn(round)
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  // it('should end round when all players guess all correct answers', () => {
  //  expect(game.roundCount).to.equal(2)
  // });

  it('should update roundCounter in game class', () => {
    round.answers = [];
    round.endRound(game);
    expect(game.roundCount).to.equal(2);
    round.endRound(game);
    expect(game.roundCount).to.equal(3);
  });

  it('should get just the answers from the survey array', () => {
    round.organizeSurvey()
    expect(round.answers).to.include(game.currentSurvey[0]);
    expect(round.answers).to.include(game.currentSurvey[1]);
    expect(round.answers).to.include(game.currentSurvey[2]);
  });

});// <------ end of describe block