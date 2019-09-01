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
    game.chooseSurvey(3)
    expect(game.currentSurvey.length).to.equal(4);
  });

  // it.only('should sort the answers from highest respondents to lowest', () => {
  //   game.chooseSurvey(3)
  //   expect(game.currentSurvey).to.eql([   
  //     { id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' },
  //     { answer: 'Watch', respondents: 58, surveyId: 3 },
  //     { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
  //     { answer: 'Calendar', respondents: 3, surveyId: 3 },
  //   ]) 
  // });

  // it.only('should keep track of the previous surveys', () => {
  //   game.chooseSurvey(3);
  //   expect(game.usedSurveys.length).to.equal(1);
  // });

it.only('should asdfa', () => {
  game.usedSurveys = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  game.chooseSurvey();
 
  expect(game.currentSurvey).to.deep.equal(15)

});





}); // <------ end of describe block



