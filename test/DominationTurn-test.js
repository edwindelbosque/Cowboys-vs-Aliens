import chai from 'chai';
import data from '../data/surveys.js'
import Game from '../src/Game';
// import Round from '../src/Round';
import DominationRound from '../src/DominationRound';
import DominationTurn from '../src/DominationTurn';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';
const expect = chai.expect;

let game, dominationRound, dominationTurn;
beforeEach(() => {
  game = new Game(data, 'Erick', 'Jeannie');
  game.startDominationRound();
  dominationRound = new DominationRound(game, 3);
  dominationTurn = new DominationTurn(dominationRound)

});

describe('DominationTurn', () => {

  it.only('should be a function', () => {
    expect(DominationTurn).to.be.a('function');

  });

  it.only('should be an instance of DominationRound', () => {
    expect(dominationTurn).to.be.an.instanceOf(DominationTurn);
  });

  it.only('should be asked a question', () => {
    expect(dominationTurn.getQuestion()).to.equal(dominationRound.survey[0].question)
  });

  it.skip('should save guess', () => {
    dominationTurn.saveRespondents()
    expect(dominationTurn.respondentsInfo).to.eql([{},{}])
  });
  //method IS WORKING, unsure best way to test

  it.only('should save guess', () => {
    dominationTurn.saveGuess('wrong')
    expect(dominationTurn.dominationGuesses).to.eql(['wrong'])
  });

  // it.only('should save all prompted survey respondents', () => {

  //   dominationTurn.getQuestion();
  //   dominationTurn.saveRespondents();
  //   dominationTurn.saveGuess('wrong1')
  //   dominationTurn.getQuestion();
  //   dominationTurn.saveRespondents();
  //   dominationTurn.saveGuess('wrong2')
  //   console.log('??--->', dominationRound.survey[0].question)
  //   console.log('R info---->', dominationTurn.respondentsInfo)
  //   expect(dominationTurn.dominationGuesses).to.eql(['wrong1', 'wrong2'])
  // });


  // it('should ask another question after only one guess', () => {
  //   expect(dominationTurn.getQuestion()).to.equal('string')
  // });

  // it.only('should multiply scores based on users multiplier', () => {
  //   expect(dominationTurn.calculateScores())
  // });

  // it('should send total respondents to be multiplied', () => {
  //   const newPlayer = new Player('Fernice');
  //   newPlayer.multiplier = 2;
  //   dominationTurn.countRespondents('Beer')
  //   dominationTurn.multiplyScores();
  //   expect(newPlayer.score).to.equal(6)

  // })





}); // <------ end of describe block