# Callbacks

JavaScript allows you to pass a function as a argument.
Callback is basically just another word for a function passed as a parameter.

### Usage

If you wish to pass a function as argument you have to do so without using parenthesis after the function-name or else it will evaluate the function and pass its returned value as the argument instead.
```javascript
function add(a, b) {
  if (a === undefined)
    a = 0;
  if (b === undefined)
    b = 0;
  return a + b;
}

function evaluate(a, b, callback) {
  return callback(a, b);
}

alert(evaluate(1, 2, add));   // This will print 3
alert(evaluate(1, 2, add())); // This will complain since callback will be 0 instead of a function
```
