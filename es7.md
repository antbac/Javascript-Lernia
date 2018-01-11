# Array Includes
It is now easier than ever before to check whether or not an array contains the given element.

```javascript
var myList = [-1, 0, 1];
console.log(myList.includes(0));
console.log(myList.includes(2));
```
### Output
> true<br>
> false

# Exponentiation
Exponentiation now has a shorthand version in form of **\*\***.

```javascript
console.log(2 ** 4);
console.log(3 ** 2);
```
### Output
> 16<br>
> 9

# Destructuring With Rests
You can now grab the remainder of the elements when using destruction.

```javascript
var myList = [1, 2, 3, 4];
var [a, b, ...c] = myList;
console.log(a);
console.log(b);
console.log(c);
```
### Output
> 1<br>
> 2<br>
> [ 3, 4 ]
