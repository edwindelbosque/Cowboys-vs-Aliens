// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/start-page.gif';
import './images/alien-icon.png';
import './images/cowboy-icon.png';
import './images/favicon-32x32.png';
import './images/favicon-16x16.png';
import './images/grainy-filter.jpg'
import './images/grainy-filter-2.png'
import Game from './Game';
import Round from './Round';
import Turn from './Turn';
import RegularRound from './RegularRound'
import RegularTurn from './RegularTurn'
import DominationRound from './DominationRound'
import DominationTurn from './DominationTurn'
import data from '../data/surveys'

let game, regularRound, regularTurn, dominationRound, dominationTurn;

const main = $('main');
const startGameButton = $('#start-game-button');
const exitButton = $('#exit-button');
const cowboyInput = $('#cowboy-name-input');
const alienInput = $('#alien-name-input');
const guessInput = $('#guess-input');
const guessButton = $('#guess-button');
const cowboyImage = $('#cowboy-image');
const alienImage = $('#alien-image');

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

cowboyInput.on('keyup', () => {
  displayStartButton();
}).on('focus', () => {
  cowboyImage.css('z-index', '1').animate({ height: '210px', width: '210px', marginBottom: '12px' }, 300);
}).on('focusout', () => {
  cowboyImage.css('z-index', '0').animate({ height: '200px', width: '200px', marginBottom: '12px' }, 300);
})

alienInput.on('keyup', () => {
  displayStartButton();
}).on('focus', () => {
  alienImage.css('z-index', '1').animate({ height: '210px', width: '210px', marginBottom: '12px' }, 300);
}).on('focusout', () => {
  alienImage.css('z-index', '0').animate({ height: '200px', width: '200px', marginBottom: '12px' }, 300);
})

startGameButton.on('click', () => {
  $('#cowboy-name').text(cowboyInput.val().toUpperCase());
  $('#alien-name').text(alienInput.val().toUpperCase());
  $("html").delay(250).animate({ scrollTop: main.offset().top }, 1000)
})
 


  // const getData = async (url) => (await fetch(url).then(data => data.json()).then(data => data.data));

  // (async () => {
  //   let fetchedData = await getData('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data');


function instantiateRoundAndTurn() {
  if (game.roundCount < 3) {
    regularRound = new RegularRound(game);
    regularRound.beginTurn();
    regularTurn = new RegularTurn(regularRound);
  }
  if (game.roundCount === 3) {
    dominationRound = new DominationRound(game);
    dominationRound.startDominationRound();
    dominationTurn = new DominationTurn(dominationRound);
  }
} 
  //   }})();
// }).on('click', () => {
//   startGameButton.animate({ opacity: '0' }, 60);
// })

startGameButton.on('click', () => {
  game = new Game(data, cowboyInput.val(), alienInput.val());
  game.chooseSurvey();
  instantiateRoundAndTurn();
  startGameButton.animate({ opacity: '0' }, 60);
})

exitButton.on('click', () => {
  $("html").delay(250).animate({ scrollTop: 0 }, 1000);
  startGameButton.css('opacity', '0');
  cowboyInput.val('');
  alienInput.val('');
});

function displayStartButton() {
  alienInput.val() === '' || cowboyInput.val() === ''
    ? startGameButton.animate({ opacity: '0' }, 20)
    : startGameButton.animate({ opacity: '1' }, 20)
}

guessButton.on('click', () => {
  regularTurn.updateScore(guessInput.val());
  guessInput.val('');
  if (regularRound.answerStrings.every(answer => answer === 'false')) {
    instantiateRoundAndTurn();
  }
})