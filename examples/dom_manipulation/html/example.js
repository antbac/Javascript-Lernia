// Main funnction called upon rendering of the page
function main() {

  // Add text to a h1 element
  alert('hello');
  document.getElementById('header').innerHTML = 'I am a header set through JavaScript';

  // Would overwrite
  //document.getElementById('header').innerHTML = 'Hello';

  // Append items to our list
  // Item 1:
  let firstItem = document.createElement('li'); // Create a list item
  let firstText = document.createTextNode('1st element'); // Create the text of the li
  firstItem.appendChild(firstText); // Set the text of the li

  document.getElementById('list').appendChild(firstItem); // Add the li to the list

  // Item 2:
  let secondItem = document.createElement('li'); // Create a list item
  let secondText = document.createTextNode('2nd element'); // Create the text of the li
  secondItem.appendChild(secondText); // Set the text of the li

  document.getElementById('list').appendChild(secondItem); // Add the li to the list

  //alert('You are about to ruin your list');
  //document.getElementById('list').innerHTML = '<li>3rd element</li>';
}
