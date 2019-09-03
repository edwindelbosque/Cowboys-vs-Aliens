import chai from 'chai';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys'
const expect = chai.expect;

let round, game;
describe('Round', () => {
  beforeEach(() => {
    // testData = { 
    //   surveys: [
    //     { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' } ],
    //   answers: [
    //     { answer: 'Beer', respondents: 67, surveyId: 1 },
    //     { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
    //     { answer: 'Donuts', respondents: 24, surveyId: 1 } ]
    //   }
    game = new Game(data);
    game.startRound();
    round = new Round(game);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

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

})

// <------ end of describe block