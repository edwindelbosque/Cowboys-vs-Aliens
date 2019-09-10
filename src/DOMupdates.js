import $ from 'jquery';

const DOMupdates = {
  showWinner(player) {
    $('.section--scoreboard').text(player.score).css({ fontSize: '80px' });
    $('.header__h1--display').text(`${player.name} WINS!`).css({ fontSize: '100px' }).addClass('winner-text')
    $('#section-players').hide();
    $('#multiplier').hide();
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

  appendCurrentPlayerName(name, round) {
    name === round.game.player1.name
      ? $('#players-turn').text(`${name}`).css({ color: '#ff0084' })
      : $('#players-turn').text(`${name}`).css({ color: '#0a7cff' })
  },

  appendMultiplierInput() {
    $('#multiplier').show();
  },

  submitMultiplierInput() {
    $('#multiplier-input-btn').click($('#go-btn').show());
  },

  clickGoBtn() {
    $('#multiplier').fadeOut();
    $('.section__div--turn').css({ zIndex: '1', opacity: '1' });
  },

  displayFeedback(checkedGuess) {
    if (checkedGuess) {
      $('.section__div--answer-board').css({ borderColor: '#00ff00', transition: '.3s' })
      $('.div__section--middle-row').css({ borderTopColor: '#00ff00', borderBottomColor: '#00ff00', transition: '.3s' })
      setTimeout(function () {
        $('.section__div--answer-board').css({ borderColor: '#8f8f8f', transition: '.3s' })
        $('.div__section--middle-row').css({ borderTopColor: '#8f8f8f', borderBottomColor: '#8f8f8f', transition: '.3s' })
      }, 600);
    } else {
      $('.section__div--answer-board').css({ borderColor: '#ff5050', transition: '.3s' })
      $('.div__section--middle-row').css({ borderTopColor: '#ff5050', borderBottomColor: '#ff5050', transition: '.3s' })
      setTimeout(function () {
        $('.section__div--answer-board').css({ borderColor: '#8f8f8f', transition: '.3s' })
        $('.div__section--middle-row').css({ borderTopColor: '#8f8f8f', borderBottomColor: '#8f8f8f', transition: '.3s' })
      }, 600);
    }
  }
}

export default DOMupdates;