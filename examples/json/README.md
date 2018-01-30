# JSON - JavaScript Object Notation

JSON has become the universal way to send data online.
But originally it was just the way JavaScript stored and represented their objects.

### Usage / Syntax

JSON handles everything as key-value pairs and can store anything in its values/properties including other objects.

```javascript
const myObject = {
  key1: 'a string',
  key2: 42,
  key3: function () {
    return 'I came from a function';
  },
  key4: {
    nestedKey1: ['A list in a nested object']
  }
};

const a = myObject.key1; // a = "a string"
const b = myObject.key2; // b = 42
const c = myObject.key3; // c = a function that returns 'I came from a function'
const d = myObject.key4; // d = an object
```
