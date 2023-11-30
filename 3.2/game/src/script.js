/* eslint-disable space-before-function-paren */
/* eslint-disable semi */

function getGameButtonClickHandler(url) {
  return location.assign(url);
}

const gameButtons = document.querySelectorAll('.game-button');
const unwantedButton = document.querySelector('.unwanted-button');
const boomButton = document.querySelector('.boom-button');
const wallButton = document.querySelector('.wall-button');
const busStationButton = document.querySelector('.bus-station-button');
const doorButton = document.querySelector('.door-button');
const roadButton = document.querySelector('.road-button');
const blackButton = document.querySelector('.black-button');
const sheduleButton = document.querySelector('.shedule-button');
const sitButton = document.querySelector('.sit-button');
const stayButton = document.querySelector('.stay-button');
const stayAgainButton = document.querySelector('.stay-again-button');
const layButton = document.querySelector('.lay-button');
const subWallButton = document.querySelector('.sub-wall-button');
const subBusStationButton = document.querySelector('.sub-bus-station-button');
const subRoadButton = document.querySelector('.sub-road-button');
const subGameButton = document.querySelector('.sub-game-button');

gameButtons.forEach(element => {
  element.addEventListener('click', () => {
    getGameButtonClickHandler('./start.html');
  });
})

unwantedButton.addEventListener('click', function () {
  getGameButtonClickHandler('./nextstep.html');
});

boomButton.addEventListener('click', function () {
  getGameButtonClickHandler('./boom.html');
});

wallButton.addEventListener('click', function () {
  getGameButtonClickHandler('./wall.html');
});

busStationButton.addEventListener('click', function () {
  getGameButtonClickHandler('./bus_station');
});

doorButton.addEventListener('click', function () {
  getGameButtonClickHandler('./door');
});

roadButton.addEventListener('click', function () {
  getGameButtonClickHandler('./road');
});

blackButton.addEventListener('click', function () {
  getGameButtonClickHandler('./black.html');
});

sheduleButton.addEventListener('click', function () {
  getGameButtonClickHandler('./shedule.html');
});

sitButton.addEventListener('click', function () {
  getGameButtonClickHandler('./sit.html');
});

stayButton.addEventListener('click', function () {
  getGameButtonClickHandler('./stay.html');
});

stayAgainButton.addEventListener('click', function () {
  getGameButtonClickHandler('./stay_again.html');
});

layButton.addEventListener('click', function () {
  getGameButtonClickHandler('./lay.html');
});

subWallButton.addEventListener('click', function () {
  getGameButtonClickHandler('./../wall.html');
});

subBusStationButton.addEventListener('click', function () {
  getGameButtonClickHandler('./../bus_station');
});

subRoadButton.addEventListener('click', function () {
  getGameButtonClickHandler('./../road.html');
});

subGameButton.addEventListener('click', function () {
  getGameButtonClickHandler('./../start.html');
});
