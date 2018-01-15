const dimensions = 10;
const snake = [];
const apple = [];
let timer;

function $(input) {
  if (input.charAt(0) === '.') {
    return document.getElementsByClassName(input.substring(1));
  }

  if (input.charAt(0) === '#') {
    return document.getElementById(input.substring(1));
  }

  return document.getElementsByTagName(input);
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
  // create apple
  // create timer
}
