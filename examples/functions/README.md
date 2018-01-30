# Functions in JavaScript

Functions in JavaScript have a very simple syntax. This is partly because of the following reasons:
1. The language is dynamically typed so you don't specify the return type
2. JavaScript automatically pads or ignores parameters that should/shouldn't have been there

### Usage

```javascript
function functionName(parameter1, parameter2) {
  return 'returned value';
}

const foo = functionName(0, 1);
alert(foo); // Prints: "returned value"
```

### Advanced Usage

You can't **overload** functions in JavaScript since they are already overloaded by default.
if too many arguments are passed, the excessive ones will automatically be dropped.
If you don't pass enough parameters JavaScript will pass **undefined** to the remaining parameters.
This results in :
```javascript
// I will never be reachable later on
function foo(parameter1) {
  return 'foo';
}

// Since I overwrite you
function foo(parameter1, parameter2) {
  return parameter2;
}

const a = foo('only 1 parameter');             // a = "undefined"
const b = foo('2 different ', 'parameters');   // b = "parameters"
const c = foo('1 parameter ', 'too ', 'much'); // c = "too "
```
