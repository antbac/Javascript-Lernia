/*jshint esversion: 6 */

let dimensions = 10;
let direction = [];
let snake = [];
let food = {};
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
    $(`#${y},${x}`).className = 'food';
  } else if (type === SNAKE) {
    $(`#${y},${x}`).className = 'snake';
  } else if (type === HEAD) {
    $(`#${y},${x}`).className = 'head';
  } else if (type === EMPTY) {
    $(`#${y},${x}`).className = 'empty';
  }
}

function isFree(y, x) {
  if ($(`#${y},${x}`).className === 'empty')
    return true;
  return false;
}

function newFood() {
  const freeTiles = [];
  for (let y = 0; y < dimensions; y++) {
    for (let x = 0; x < dimensions; x++) {
      if (isFree(y, x)) {
        freeTiles.push([y, x]);
      }
    }
  }

  const index = Math.floor(Math.random() * freeTiles.length);
  const [y, x] = freeTiles[index];
  food.y = y;
  food.x = x;
  setTile(y, x, FOOD);
}

function partOfSnake(y, x) {
  for (const tile of snake) {
    if (tile.y === y && tile.x === x) {
      return true;
    }
  }

  return false;
}

function move() {
  const head = snake[snake.length - 1];
  let { y, x } = head;
  switch (direction[0]) {
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

  if (y === -1 || x === -1 || y === dimensions || x === dimensions || partOfSnake(y, x)) {
    clearInterval(timer);
    return;
  }

  direction[1] = direction[0];

  setTile(head.y, head.x, SNAKE);
  setTile(y, x, HEAD);

  snake.push({ y: y, x: x });
  if (y !== food.y || x !== food.x) {
    setTile(snake[0].y, snake[0].x, EMPTY);
    snake.shift(); // Remove the first element
  } else {
    newFood();
  }
}

function setup() {
  // board
  let html = '';
  for (let y = 0; y < dimensions; y++) {
    html += `<div class="row" style="height: ${100 / dimensions}%">`;
    for (let x = 0; x < dimensions; x++)
      html += `<div class="empty" id="${y},${x}" style="width: ${100 / dimensions}%"></div>`;
    html += '</div>';
  }

  $('#board').innerHTML = html;

  // create Snake
  snake = [{ y: 0, x: 0 }, { y: 0, x: 1 }, { y: 0, x: 2 }];
  for (const tile of snake) {
    setTile(tile.y, tile.x, SNAKE);
  }

  setTile(snake[snake.length - 1].y, snake[snake.length - 1].x, HEAD);

  // set direction
  direction = [RIGHT, RIGHT];

  // create food
  newFood();

  // create timer
  timer = setInterval(move, 350);

}

window.onkeyup = function (e) {
  const key = e.keyCode ? e.keyCode : e.which;

  //console.log('You pressed: ' + key);
  if (key === 37) { // LEFT
    if (direction[1] !== RIGHT)
      direction[0] = LEFT;
  } else if (key === 38) { // UP
    if (direction[1] !== DOWN)
      direction[0] = UP;
  } else if (key === 39) { // RIGHT
    if (direction[1] !== LEFT)
      direction[0] = RIGHT;
  } else if (key === 40) { // DOWN
    if (direction[1] !== UP)
      direction[0] = DOWN;
  }
};
