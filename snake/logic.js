let dimensions = 10;
let direction;
let snake = [];
let food = [];
let timer;

const FOOD = 0;
const SNAKE = 1;
const HEAD = 2;
const EMPTY = 3;

const UP = 10;
const DOWN = 11;
const RIGHT = 12;
const LEFT = 13;

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

function move() {
  const head = snake[snake.length - 1];
  console.log(head);
  let [y, x] = head;
  switch (direction) {
    case RIGHT:
      x += 1;
      break;
    case LEFT:
      x -= 1;
      break;
    case UP:
      y -= 1;
      break;
    case DOWN:
      y += 1;
      break;
  }
  setTile(head[0], head[1], SNAKE);
  snake.push([y, x]);
  setTile(y, x, HEAD);
  setTile(snake[0][0], snake[0][1], EMPTY);
  snake.shift(); // Remove the first element
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
  direction = RIGHT;
  snake = [[0, 0], [0, 1], [0, 2]];
  for (const tile of snake) {
    setTile(tile[0], tile[1], SNAKE);
  }

  setTile(snake[snake.length - 1][0], snake[snake.length - 1][1], HEAD);

  // create food
  // create timer
  timer = setInterval(move, 350);

}

window.onkeyup = function (e) {
  const key = e.keyCode ? e.keyCode : e.which;

  //console.log('You pressed: ' + key);
  if (key === 37) { // LEFT
    direction = LEFT;
  } else if (key === 38) { // UP
    direction = UP;
  } else if (key === 39) { // RIGHT
    direction = RIGHT;
  } else if (key === 40) { // DOWN
    direction = DOWN;
  }
};
