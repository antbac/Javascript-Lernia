# Events

Events allow us to run JavaScript-code when certain events happen, such as an element being clicked or hovered over by the cursor.

### Usage

You can set the triggers using JavaScript, but it is more common to write them out in the HTML-code.
```html
<button onclick="func()">Click me</button>
<button onmouseover="func()">You don't even have to click me</button>
<h1 onclick="func()">You can click any element</h1>

<button onclick="func1()">I will call another function</button>
```

The JavaScript would then need to contain the function **func** and **func1** which are the functions we decided to call upon the given events.
```javascript
function func() {
  alert('I am the normal func');
}

function func1() {
  alert('I am func1');
}
```
