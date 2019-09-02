import chai from 'chai';
import Player from '../src/Player';
import Turn from '../src/Turn';
import Round from '../src/Round';
const expect = chai.expect;

let player1, player2, round;
beforeEach(() => {
  player1 = new Player('Cowboy');
  player2 = new Player('Alien');
  round = new Round(
    { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' },
    [
      { answer: 'Beer', respondents: 67, surveyId: 1 },
      { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
      { answer: 'Donuts', respondents: 24, surveyId: 1 }
    ]
  );
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