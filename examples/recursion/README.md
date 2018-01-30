# Recursion

Recursion is not unique to JavaScript.
It is an important programming technique that basically allows us to write more advanced loops.

Recursion is when a function calls itself.
If we combine this with functions we can achieve infinitely nested loops inside a file of finite length.

### Usage

Recursion has been for a long time and was originally a purely mathematical notation.
Therefore, a function calculating the **factorial** of a number is a very common example of a recursive function.

```javascript
function factorial(num) {
  if (num <= 1)
    return 1;
  return num * factorial(num - 1);
}
```

### Advanced Usage

Graphs are a common data-structure in programming and by using loops within your recursive functions you can write a short but powerful function that can walk through the graph.

A tree is a graph that have a restriction, namely, no loops may occur.
Although the comments provided by the server in this repository are given in a list, they are really represented as a tree.

We can therefore go through each node (comment/answer) in the list and print them using the following 9-line function:
```javascript
function visitAll(level, node) {
  if (Array.isArray(node)) {
    for (const child of node)          // A loop
      visitAll(level, child);          // where we make recursive calls
  } else {
    console.log(`${level} ${node.message}`);
    for (const child of node.answers)  // A loop
      visitAll('-' + level, child);    // where we make recursive calls
  }
}

const level = '-';
const comments = [
  {
    message: '1st comment',
    answers: [
      {
        message: '1st answer',
        answers: []
      },
      {
        message: '2nd answer',
        answers: []
      },
    ]
  },
  {
    message: '2nd comment',
    answers: [
      {
        message: '1st answer',
        answers: []
      },
      {
        message: '2nd answer',
        answers: []
      },
    ]
  }
];

visitAll(level, comments);
```
