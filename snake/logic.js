/*jshint esversion: 6 */

let dimensions = 10;
let direction;
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
  for (const tile of snake) {
    if (tile.y === y && tile.x === x) {
      return false;
    }
  }

  if (food.y === y && food.x === x) {
    return false;
  }

  return true;
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

function move() {
  const head = snake[snake.length - 1];
  let { y, x } = head;
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

  int = 1;

  $('#board').innerHTML = html;

  // create Snake
  direction = RIGHT;
  snake = [{ y: 0, x: 0 }, { y: 0, x: 1 }, { y: 0, x: 2 }];
  for (const tile of snake) {
    setTile(tile.y, tile.x, SNAKE);
  }

  setTile(snake[snake.length - 1].y, snake[snake.length - 1].x, HEAD);

  // create food
  newFood();

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
