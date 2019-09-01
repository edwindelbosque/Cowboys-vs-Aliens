import chai from 'chai';
import Round from '../src/Round';
import Game from '../src/Game';
import surveys from '../data/surveys'
const expect = chai.expect;

let round, game;
beforeEach(() => {
  round = new Round(
    { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' },
    [
      { answer: 'Beer', respondents: 67, surveyId: 1 },
      { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
      { answer: 'Donuts', respondents: 24, surveyId: 1 }
    ]
  );
  game = new Game(surveys);
});

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have the instantiated arguments as properties', () => {
    expect(round.surveyQuestion).to.deep.equal({ id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' });
    expect(round.answers).to.deep.equal([
      { answer: 'Beer', respondents: 67, surveyId: 1 },
      { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
      { answer: 'Donuts', respondents: 24, surveyId: 1 }
    ]);
  })

  it.skip('should update roundCounter in game class', () => {
    round.answers = [];
    round.endRound(game);
    expect(game.roundCounter).to.equal(2);
    round.endRound(game);
    expect(game.roundCounter).to.equal(3);
  });


})

// <------ end of describe block