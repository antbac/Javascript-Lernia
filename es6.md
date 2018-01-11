# Default Parameters
If the user does not specify all input-parameters, the functions will assume some by default.

```javascript
function add(a = 1, b = 2) {
  return a + b;
}

console.log(add());
console.log(add(10));
console.log(add(10, 20));
```
### Output
> 3<br>
> 12<br>
> 30

# Template Literals and Multi-line strings
Instead of building strings using a bunch of **+** operations we can instead use **${}** for adding logic-content.
Note that we can place any JavaScript code we wish in the *${}*.
It also takes the exact string found between the *`*-marks, including potential newlines.

```javascript
var name = 'Anton';
console.log(`Hello ${name}`);
console.log(`1 + 2 = ${1 + 2}`);
console.log(
`


Down Here`
);
```
### Output
> Hello Anton<br>
> 1 + 2 = 3<br>
><br>
><br>
><br>
> Down Here

# Destruction
We can destruct arrays and maps to pick out some values we'd like to use.
Note that we don't have to pick all the possible values.

```javascript
var { foo, bar } = { foo: 'Hello', bar: 'World', car: 'Mercedes' };
console.log(`${foo} ${bar}`);
var [foo, bar] = ['Hello', 'World', 'Mercedes'];
console.log(`${foo} ${bar}`);
```
### Output
> Hello World<br>
> Hello World

# Block Scoped Variables
By using **var**, the variable is available outside of the scope.
By using **let**, the variable is not available outside of the scope.
Using **let** is therefore recommended in most cases to prevent the developer from making unnecessary mistakes.

```javascript
if (true) {
  var foo = 'Hello';
  let bar = 'World';
}

try {
  console.log(`${foo} ${bar}`);
} catch (e) {
  console.log(e.message);
}
```
### Output
> bar is not defined

# Constant Variables
Variables defined as **const** can not change the value / reference of the variable.
This is used to prevent the developer from making unnecessary mistakes.
Note that you may still change the content of an object.

```javascript
try {
  const foo = 1;
  foo = 2;
} catch (e) {
  console.log(e.message);
}

const myList = [1, 2, 3];
myList.push(4);
console.log(myList);

```
### Output
> Assignment to constant variable.<br>
> [ 1, 2, 3, 4 ]

# Classes
For anyone who loves OOP, this is the syntax in JavaScript

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old`;
  }
}

class User extends Person {
  constructor(name, age, username, password = 'pass') {
    super(name, age);
    this.username = username;
    this.password = password;
  }

  getUserInfo() {
    return this.getInfo() + ` and has the username ${this.username}`;
  }
}
const user = new User('Anton', 23, 'antbac');
console.log(user.getUserInfo());
```
### Output
> Anton is 23 years old and has the username antbac


# Arrow Functions
Arrow functions are great for 2 reasons.
First of all they give us shorter function syntax.
This is especially convenient in case you have a short function like squaring a number.
The second reason is that arrow functions do not bind **this**, making it much easier to deal with callbacks.

```javascript
const myList = [1, 2, 3, 4];
console.log(myList.map(elem => elem * elem));

function foo() {
  this.counter = 0;
  setTimeout(function () {
    this.counter++;
    console.log(`Normal function: ${this.counter}`);
  }, 0);
}

function bar() {
  this.counter = 0;
  setTimeout(() => {
    this.counter++;
    console.log(`Arrow function: ${this.counter}`);
  }, 0);
}

foo();
bar();
```
### Output
> [ 1, 4, 9, 16, ]<br>
> Normal function: NaN<br>
> Arrow function: 1


# For ... Of
You often want to iterate over a list of items, but you don't always care about the index.
For-Of allows you to do this the way For-Each does in other languages.

```javascript
const myList = [1, 2, 3, 4];
for (const elem of myList) {
  console.log(elem);
}
```
### Output
> 1<br>
> 2<br>
> 3<br>
> 4


# Spreading of Elements
You can spread out an iterable sequence in order to i.e. convert a string to a list or concatenate two lists.

```javascript
var name = 'Anton';
var foo = ['a', 'b', 'c'];
var bar = [1, ...foo, 2, ...name];
console.log(bar);

```
### Output
> [ 1, 'a', 'b', 'c', 2, 'A', 'n', 't', 'o', 'n' ]
