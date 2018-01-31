function main() {
  // Edit the background color of the top div
  document.getElementById('a').style.backgroundColor = 'yellow';

  alert('hold on');

  // Hide the second element
  document.getElementById('b').style.display = 'none';

  // Set the font size
  document.getElementById('a').style.fontSize = '2em';

  alert('hold on again');

  // We can also set attributes (i.e. the style) of each tag
  // Remember that we DO OVERWRITE the style attribute now
  //let node = document.getElementById('a');
  //node = document.getElementById('b');
  //node = document.getElementById('c');
  for (const node of document.getElementsByTagName('div')) {
    node.setAttribute('style', 'background: red;');
  }
}
