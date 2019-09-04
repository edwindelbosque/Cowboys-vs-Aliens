import chai from 'chai';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Game from '../src/Game';
import data from '../data/surveys.js'
const expect = chai.expect;

let round, game, turn;
beforeEach(() => {
  game = new Game(data, 'Erick', 'Jeannie');
  game.startGame();
  round = new Round(game);
  round.organizeSurvey();
  turn = new Turn(round);
});

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should know ID of survey question', () => {
    expect(turn.identifyQuestion()).to.eql(round.survey[0].id)
  });

  it('should return correct answers from answer info', () => {
    expect(turn.identifyCorrectAnswers()[0]).to.eql(round.answers[0].answer)
    expect(turn.identifyCorrectAnswers()[1]).to.eql(round.answers[1].answer)
    expect(turn.identifyCorrectAnswers()[2]).to.eql(round.answers[2].answer)
  });

  it('should capitalize guesses', () => {
    expect(turn.capitalizeGuess('bOwLiNg BaLL')).to.equal('Bowling Ball')
  });

  it('should check to see if guess was incorrect', () => {
    expect(turn.checkGuess('Wrong Answer')).to.equal(false);
  });

  it('should find number of respondents', () => {
    expect(turn.countRespondents(round.answers[0].answer)).to.equal(round.answers[0].respondents)
  });

  it('should allot appropriate number of points', () => {
    turn.updateScore(round.answers[0].answer);
    round.currentPlayer
    expect(turn.currentPlayer.score).to.equal(round.answers[0].respondents)
  });

  it('should toggle player when guess is incorrect only', () => {
    expect(turn.currentPlayer).to.equal(game.player1);
    turn.togglePlayer('wrong');
    expect(turn.currentPlayer).to.equal(game.player2);
    turn.togglePlayer('wrong');
    expect(turn.currentPlayer).to.equal(game.player1);
    turn.togglePlayer(round.answers[0].answer)
    expect(turn.currentPlayer).to.equal(game.player1);
  });

  it('should account for correct guesses only', () => {
    turn.rememberCorrectGuesses('wrong');
    expect(turn.correctGuesses).to.eql([]);
    turn.rememberCorrectGuesses(round.answers[0].answer);
    expect(turn.correctGuesses).to.eql([round.answers[0].answer]);
    turn.rememberCorrectGuesses(round.answers[1].answer);
    expect(turn.correctGuesses).to.eql([round.answers[0].answer, round.answers[1].answer]);
  });


  it('should give feedback', () => {
    expect(turn.giveFeedback('wrong guess')).to.equal('Incorrect!')
    expect(turn.giveFeedback(round.answers[0].answer)).to.equal('Correct!')
  });


}); // <------ end of describe block