# Modifying the DOM

JavaScript has the ability to change anything on the website, including the content of it.

### Usage

You can access DOM-elements for example by using one of the following commands:
```javascript
document.getElementsByClassName('className') // Returns a list of element
document.getElementById('id')                // Returns an element
document.getElementsByName('name')           // Returns a list of element
document.getElementsByTagName('tagName')     // Returns a list of element
```

The HTML of the elements can then be set using for example **innerHTML** or **appendChild**:
```javascript
document.getElementById('id').innerHTML = '<p>I am a paragraph</p>';

const newNode = document.createElement('p');
const text = document.createTextNode('I am also a paragraph');
newNode.appendChild(text);
document.getElementById('id').appendChild(newNode);
```
