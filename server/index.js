/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const clone = require('clone');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

const names = ['Olivia', 'Sophia', 'Amelia', 'Lily', 'Emily', 'Ava', 'Isla', 'Isabella', 'Mia', 'Isabelle', 'Muhammad', 'Oliver', 'Harry', 'Jack', 'George', 'Noah', 'Leo', 'Jacob', 'Oscar', 'Charlie'];
const words = ['vivamus', 'lacinia', 'urna', 'dolor', 'sagittis', 'imperdiet', 'ligula', 'pulvinar', 'a', 'donec', 'ut', 'lacinia', 'justo', 'vivamus', 'tincidunt', 'rhoncus', 'lorem', 'aliquam', 'varius', 'dui', 'nec', 'mollis', 'viverra', 'arcu', 'mi'];

const capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const commenter = function () {
  return names[Math.floor(Math.random() * names.length)];
};

const message = function () {
  let res = capitalize(words[Math.floor(Math.random() * words.length)]);
  for (let i = 0; i < 3 + Math.random() * 7; i++)
    res += ' ' + words[Math.floor(Math.random() * words.length)];

  return res;
};

const comment = function (depth = 0) {
  if (depth >= 5)
    return {
      id: ('' + Math.random()).substring(2),
      commenter: commenter(),
      message: message(),
      likes: Math.floor(Math.random() * 100),
      creation: new Date(),
      answers: [],
    };

  const answers = [];
  while (Math.random() < Math.pow(2, -depth) && answers.length < 10)
    answers.push(comment(depth + 1));

  return {
    id: ('' + Math.random()).substring(2),
    commenter: commenter(),
    message: message(),
    likes: Math.floor(Math.random() * 100),
    creation: new Date(),
    answers: answers,
  };
};

const comments = [];
for (let i = 0; i < 3 + Math.random() * 7; i++)
  comments.push(comment());

const get = function (id, elem) {
  if (elem && elem.id === id) {
    return elem;
  }

  let res;
  if (elem && elem.answers)
    for (const answer of elem.answers)
      res = res || get(id, answer);

  if (elem)
    return res;

  for (const answer of comments)
    res = res || get(id, answer);

  return res;
};

const like = function (id) {
  const res = get(id);
  if (res)
    res.likes += 1;
  return res;
};

const edit = function (id, message) {
  const res = get(id);
  if (res)
    res.message = message;
  return res;
};

app.post('/like/:id', function (req, res) {
  const id = req.params.id;

  let comment = like(id);

  if (comment)
    res.json(comment);
  else
    res.sendStatus(404);
});

app.post('/edit/:id', function (req, res) {
  const id = req.params.id;
  const message = req.body.message;

  let comment;
  if (id && message) {
    comment = edit(id, message);
  } else {
    res.sendStatus(400);
    return;
  }

  if (comment)
    res.json(comment);
  else
    res.sendStatus(404);
});

app.get('/deep', function (req, res) {
  res.json(comments);
});

app.get('/shallow', function (req, res) {
  const _comments = clone(comments);
  for (let i = 0; i < _comments.length; i++)
    for (let j = 0; j < _comments[i].answers.length; j++)
      for (let k = 0; k < _comments[i].answers[j].answers.length; k++)
        _comments[i].answers[j].answers[k].answers = [];

  res.json(_comments);
});

console.log(`App listening on port ${port}`);
