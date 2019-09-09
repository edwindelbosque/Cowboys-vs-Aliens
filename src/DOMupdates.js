import $ from 'jquery';
import Turn from './Turn';


const DOMupdates = {
  showWinner(player) {
    $('').text(player.name);
    $('').text(player.score);
  },

  appendQuestion(question) {
    $('#current-question').text(question);
  },

  clearQuestion() {
    $('#current-question').text('');
  },

  clearAnswers() {
    $('#answer-1').text('');
    $('#answer-2').text('');
    $('#answer-3').text('');
    $(`#answer-pts-1`).text('');
    $(`#answer-pts-2`).text('');
    $(`#answer-pts-3`).text('');
  },

  appendAnswer(answer, index) {
    $(`#answer-${index}`).text(answer);
  },

  appendRespondents(number, index) {
    $(`#answer-pts-${index}`).text(number);
  },

  appendPlayerScore(score, currentPlayer, player) {
    let number = currentPlayer === player ? 1 : 2;
    $(`#player-${number}-score`).text(score);
  },

  appendCurrentPlayerName(name) {
    $('#players-turn').text(name);
  },

  appendMultiplierInput() {
    $('#multiplier').show();
  },

  submitMultiplierInput() {
    $('#multiplier-input-btn').click(appendGoButton());
  },

  appendGoButton() {
    $('#go-btn').show();
  },

  clickGoBtn() {
    $('#go-btn').on('click', console.log('Go!'));
  },

  displayFeedback(checkedGuess) {
    if (checkedGuess) {
      $('.section__div--answer-board').css({ borderColor: 'green' })
      $('.div__section--middle-row').css({ borderTopColor: 'green', borderBottomColor: 'green' })
      setTimeout(function () {
        $('.section__div--answer-board').css({ borderColor: 'white' })
        $('.div__section--middle-row').css({ borderTopColor: 'white', borderBottomColor: 'white' })
      }, 500);
    } else {
      $('.section__div--answer-board').css({ borderColor: 'red' })
      $('.div__section--middle-row').css({ borderTopColor: 'red', borderBottomColor: 'red' })
      setTimeout(function () {
        $('.section__div--answer-board').css({ borderColor: 'white' })
        $('.div__section--middle-row').css({ borderTopColor: 'white', borderBottomColor: 'white' })
      }, 500);
    }
  }
}



export default DOMupdates;