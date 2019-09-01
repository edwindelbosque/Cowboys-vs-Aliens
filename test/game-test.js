import chai from 'chai';
import Game from '../src/Game';
import data from '../data/surveys.js'
const expect = chai.expect;

let game;
beforeEach(() => {
  game = new Game(data);
});

describe('Game', () => {
  
  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should hold all survey data', () => {
    expect(game.data).to.deep.equal(data);
  });

  it('should select a random survey', () => {
    game.pickSurvey(3)
    expect(game.currentSurvey.length).to.equal(4);
  });

  it('should sort the answers from highest respondents to lowest', () => {
    game.pickSurvey(3)
    expect(game.currentSurvey).to.eql([   
      { id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' },
      { answer: 'Watch', respondents: 58, surveyId: 3 },
      { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
      { answer: 'Calendar', respondents: 3, surveyId: 3 },
    ])
  });

  it.only('should keep track of the previous surveys', () => {
    game.pickSurvey();
    expect(game.usedSurveys.length).to.equal(1);
  });

  // it('should choose which round to start', () => {
  //   game.chooseRound() {
  //     expect(game.current)
  //   }
  // })




}); // <------ end of describe block



