let dimensions = 10;
let snake = [];
let food = [];
let timer;

const FOOD = 0;
const SNAKE = 1;
const HEAD = 2;
const EMPTY = 3;

function $(input) {
  if (input.charAt(0) === '.') {
    return document.getElementsByClassName(input.substring(1));
  }

  if (input.charAt(0) === '#') {
    return document.getElementById(input.substring(1));
  }

  return document.getElementsByTagName(input);
}

function setTile(y, x, type) {
  if (type === FOOD) {
    food = [y, x];
    $(`#${y},${x}`).className = 'food';
  } else if (type === SNAKE) {
    $(`#${y},${x}`).className = 'snake';
  } else if (type === HEAD) {
    snake.push([y, x]);
    $(`#${y},${x}`).className = 'head';
  } else if (type === EMPTY) {
    $(`#${y},${x}`).className = 'empty';
  }
}

function setup() {
  // board
  let html = '';
  for (let y = 0; y < dimensions; y++) {
    html += `<div class="row" style="height: ${100 / dimensions}%">`;
    for (let x = 0; x < dimensions; x++) {
      html += `<div id="${y},${x}" style="width: ${100 / dimensions}%"></div>`;
    }

    html += '</div>';
  }

  $('#board').innerHTML = html;

  // create Snake
  snake = [[0, 0], [0, 1], [0, 2]];
  for (const tile of snake) {
    setTile(tile[0], tile[1], SNAKE);
  }

  setTile(snake[snake.length - 1][0], snake[snake.length - 1][1], HEAD);

  // create food
  // create timer
}
