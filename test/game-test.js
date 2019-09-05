import chai from 'chai';
import Game from '../src/Game';
import data from '../data/surveys.js'
import DOMupdates from '../src/DOMupdates.js'
import Player from '../src/Player';
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);
chai.spy.on(DOMupdates, ['showWinner'], () => {});

let game;
beforeEach(() => {
  game = new Game(data, 'playerone', 'playertwo');
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

  it('should sort the answers from highest respondents to lowest', () => {
    game.chooseSurvey(3)
    expect(game.currentSurvey).to.eql([   
      { id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' },
      { answer: 'Watch', respondents: 58, surveyId: 3 },
      { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
      { answer: 'Calendar', respondents: 3, surveyId: 3 },
    ]) 
  });

  it('should keep track of the previous surveys', () => {
    game.chooseSurvey();
    expect(game.usedSurveys.length).to.equal(1);
  });

it('should only pick a survey that has not been used', () => {
  game.usedSurveys = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  game.chooseSurvey();
  expect(game.currentSurvey).to.deep.equal([ { id: 15,
    question: 'Name Something You Might Add Milk To In The Morning.' },
  { answer: 'Cold Cereal', respondents: 67, surveyId: 15 },
  { answer: 'Coffee', respondents: 17, surveyId: 15 },
  { answer: 'Oatmeal', respondents: 3, surveyId: 15 } ])
});

it('should only pick a survey that has not been used', () => {
  game.usedSurveys = [1,2,3,4,5,6,7,9,10,11,12,13,14,15];
  game.chooseSurvey();
  expect(game.currentSurvey).to.deep.equal([{ id: 8,
    question:
     'What Might You Ask To Borrow From Someone At The Laundromat?' },
  { answer: 'Detergent', respondents: 69, surveyId: 8 },
  { answer: 'Change', respondents: 24, surveyId: 8 },
  { answer: 'Dryer Sheets', respondents: 6, surveyId: 8}])
})

it('should call something', () => {
  game.getWinner()
  expect(DOMupdates.showWinner).to.have.been.called(1)
})

// it('should create a regular round, () => {
//   game.startGame();
//   chai.spy.on(game.currentRound, 'beginRound', () => true)
//   expect(game.startRound).to.be.called(1);
// });



// it.only('should increase the round counter', () => {  
//   game.chooseRound() 
//   game.chooseRound()
//   expect(game.roundCount).to.equal(3)
// });





}); // <------ end of describe block


describe('getWinner', function() {
  it('should call something', () => {
    game.getWinner()
    expect(DOMupdates.showWinner).to.have.been.called(1)
  })
})




