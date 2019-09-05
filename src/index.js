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
// import data from '../data/surveys'
import Game from './Game';
import Round from './Round';
import Turn from './Turn';

let game, round, turn;

const main = $('main');
const startGameButton = $('#start-game-button');
const exitButton = $('#exit-button');
const cowboyInput = $('#cowboy-name-input');
const alienInput = $('#alien-name-input');
const guessInput = $('#guess-input');
const guessButton = $('#guess-button');
const cowboyImage = $('#cowboy-image');
const alienImage = $('#alien-image');
let fetchedData = [];

// function fetchMe() {
//   fetchedData.push(fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
//     .then(data => data.json()).then(data => data.data));
// }

// fetchMe();
// // console.log(data);
// console.log('hoo', fetchedData);

// const getMasterProd = () => fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data').then(data => data.json());
// let hi = [];

// $(document).ready(() => {
//   getMasterProd()
//     .then((data) => {
//       hi.push(data.data);
//     });
// });

// console.log('hi', hi);
// console.log(getMasterProd())

// const wrapperFunc = async () => {
//   let notes = await getData()
// }

// console.log(getData());

// var obj;

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => obj = data)
//   .then(() => console.log(obj))


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

  const getData = async (url) => (await fetch(url).then(data => data.json()).then(data => data.data));

  (async () => {

    let notes = await getData('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data');
    console.log(notes);
    var game = new Game(notes, cowboyInput.val(), alienInput.val());
    game.startGame();
    round = new Round(game);
    round.organizeSurvey();
    turn = new Turn(round);

  })();


})

setTimeout(function () {
  cowboyInput.val('');
  alienInput.val('');
  startGameButton.css('opacity', '0');
}, 2000);


exitButton.on('click', () => {
  $("html").delay(250).animate({ scrollTop: 0 }, 1000);
});

function displayStartButton() {
  alienInput.val() === '' || cowboyInput.val() === ''
    ? startGameButton.animate({ opacity: '0' }, 100)
    : startGameButton.animate({ opacity: '1' }, 100)
}

guessButton.on('click', () => {
  turn.updateScore(guessInput.val());
  guessInput.val(''); /*not sure why this input clears on an incorrect answer, but not on a correct answer*/
});