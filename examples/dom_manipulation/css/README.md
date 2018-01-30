# Modifying the CSS properties of DOM-elements

JavaScript has the ability to change anything on the website, including the look of it.

### Usage

You can access DOM-elements for example by using one of the following commands:
```javascript
document.getElementsByClassName('className') // Returns a list of element
document.getElementById('id')                // Returns an element
document.getElementsByName('name')           // Returns a list of element
document.getElementsByTagName('tagName')     // Returns a list of element
```

The syle can then be changed using the **style** property like so:
```javascript
document.getElementById('id').style.backgroundColor = 'red';
document.getElementById('id').style.display = 'none';
```
