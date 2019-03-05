'use strict'

const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.json()); //middleware

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doubling', (req, res) => {

  let query = req.query;
  let answer = {
    received: query.input,
    result: query.input * 2,
  }

  let error = {
    error: 'Please provide an input!'
  }

  query.input === undefined ? res.json(error) : res.json(answer);
});

app.get('/greeter', (req, res) => {
  let query = req.query;
  let answer = {
    welcome_message: `Oh, hi there ${query.name}, my dear ${query.title}!`
  }

  query.name === undefined && query.title === undefined ? res.json({ error: 'Please provide a name and a title!' }) :
    query.name === undefined && query.title !== undefined ? res.json({ error: 'Please provide a name!' }) :
      query.name !== undefined && query.title === undefined ? res.json({ error: 'Please provide a title!' }) :
        res.json(answer);
});

app.get('/appenda/:id', (req, res) => {
  let query = req.params;
  let answer = {
    appended: `${query.id}a`
  }
  query.id === undefined ? res.status(404).send() : res.json(answer);
});





app.post('/dountil/:action', (req, res) => {
  let data = req.body;
  let type = req.params;

  function refactorio(n) {
    let result = 1
    for (let index = 1; index <= n; index++) {
      result *= index
    }
    return result
  }

  function counter(startNumber) {
    let result = 0
    for (let index = 1; index <= startNumber; index++) {
      result += index
    }
    return result
  }

  let resulta = {
    sum: counter(data.until),
    factor: refactorio(data.until)
  }

  data === undefined ? res.json({ error: "Please provide a number!" }) :
    type.action === 'sum' ? res.json({ result: resulta.sum }) :
      type.action === 'factor' ? res.json({ result: resulta.factor }) :
        res.status(404).send();
})

function sum(number) {
  let result = 0;
  number.forEach(elemnet => result += elemnet)
  return result;
}

function multiply(number) {
  let result = 1;
  number.forEach(elemnet => result *= elemnet)
  return result;
}

function double(number) {
  let result = number.map(elemnet => elemnet *= 2)
  return result;
}

app.post('/arrays', (req, res) => {
  let data = req.body;
  data.what === undefined || data.numbers === undefined ? res.json({ error: "Please provide what to do with the numbers!" }) :
    data.what === 'sum' ? res.json({ result: sum(data.numbers) }) :
      data.what === 'multiply' ? res.json({ result: multiply(data.numbers) }) :
        data.what === 'double' ? res.json({ result: double(data.numbers) }) :
          res.json({ error: "Please provide what to do with the numbers!" });
});