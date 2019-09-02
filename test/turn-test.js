import chai from 'chai';
import Turn from '../src/Turn';
import Player from '../src/Player';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys.js'
const expect = chai.expect;

let player1, player2, round, game;
beforeEach(() => {
  // turn = new Turn(round, player1);
  player1 = new Player('Cowboy');
  player2 = new Player('Alien');
  game = new Game(data);
  round = new Round(game);
});

describe('Turn', () => {
  
  it('should be a function', () => {
    let turn = new Turn(round, player1);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    let turn = new Turn(round, player1);
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should know ID of survey question', () => {
    let turn = new Turn(round, player1);
    expect(turn.identifyQuestion()).to.eql(1)
  });

  it('should find answers for prompted question', () => {
    let turn = new Turn(round, player1);
    expect(turn.identifyAnswerInfo()).to.eql(
      [
        { answer: 'Beer', respondents: 67, surveyId: 1 },
        { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
        { answer: 'Donuts', respondents: 24, surveyId: 1 }
      ])
  });

  it('should return correct answers from answer info', () => {
    let turn = new Turn(round, player1);
    expect(turn.identifyCorrectAnswers()).to.eql(['Beer', 'Bowling Ball', 'Donuts'])
  });

  it('should capitalize guesses', () => {
    let turn = new Turn(round, player1);
    expect(turn.capitalizeGuess('bOwLiNg BaLL')).to.equal('Bowling Ball')
  });

  it('should check to see if guess was correct', () => {
    let turn = new Turn(round, player1);
    expect(turn.checkGuess('bOwLiNg BaLL')).to.equal(true);
  });

  it('should find number of respondents', () => {
    let turn = new Turn(round, player1);
    turn.checkGuess('bOwLiNg BaLL');
    expect(turn.countRespondents('bowling ball')).to.equal(5)
  });

  it('should allot appropriate number of points', () => {
    let turn = new Turn(round, player1);
    turn.updateScore('bowling ball');
    expect(player1.score).to.equal(5)
  });

  // it('should update score', () => {
  //   let turn = new Turn(round, player1);
  //   turn.checkGuess('Bowling Ball');
  //   player1.updateScore('Bowling Ball');
  //   expect(player1.score).to.equal(5)
  // });

  // it('should give feedback', () => {
  //   let turn = new Turn(round, player1);
  //   expect(turn.giveFeedback()).to.equal('Correct!')
  // });

  // it('should switch player after a turn is complete', () => {
  //   let turn = new Turn(round, player1);
  // });


// last test == next player should be able to guess?...

}); // <------ end of describe block