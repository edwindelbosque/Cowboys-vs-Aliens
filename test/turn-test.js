import chai from 'chai';
import Turn from '../src/Turn';
import Player from '../src/Player';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys.js'
const expect = chai.expect;

let turn, player1, player2, round, game;
beforeEach(() => {
  turn = new Turn(round);
  player1 = new Player(1, 'Cowboy');
  player2 = new Player(2, 'Alien');
  round = new Round(
    { id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' },
    [
      { answer: 'Beer', respondents: 67, surveyId: 1 },
      { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
      { answer: 'Donuts', respondents: 24, surveyId: 1 }
    ]
  );
  // game = new Game(surveys);
});

describe('Turn', () => {
  
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should know ID of survey question', () => {
    expect(turn.identifyQuestion()).to.eql(1)
  });

  it('should find answers for prompted question', () => {
    expect(turn.identifyAnswerInfo()).to.eql(
      [
        { answer: 'Beer', respondents: 67, surveyId: 1 },
        { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
        { answer: 'Donuts', respondents: 24, surveyId: 1 }
      ])
  });

  it('should return correct answers from answer info', () => {
    expect(turn.identifyCorrectAnswers()).to.eql(['Beer', 'Bowling Ball', 'Donuts'])
  });

  it('should capitalize guesses', () => {
    expect(turn.capitalizeGuess('bOwLiNg BaLL')).to.equal('Bowling Ball')
  });

  it('should check to see if guess was correct', () => {
    expect(turn.checkGuess('Bowling Ball')).to.equal(true);
  });

  it('should update score', () => {
    turn.checkGuess('Bowling Ball');
    expect(player1.updateScore()).to.equal(1)
  });


// last test == next player should be able to guess?...

}); // <------ end of describe block