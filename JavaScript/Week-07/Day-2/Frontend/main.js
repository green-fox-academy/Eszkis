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

const irandom = (i, zero = true) => {
  return zero ? Math.floor(Math.random() * i) : 1 + Math.floor(Math.random() * (i));
}

const pushRandomThing = (arr) => {
  const randomThings = [
    'Arrgh.',
    'Uhmm.',
    'Err..err..err.'
  ]
  for (let i = 0; i < irandom(2, false); i++) {
    arr.push(randomThings[irandom(3)]);
  }
}

function yodaIzer(text) {
  let finalText = '';
  text = text.toLowerCase();
  let basic = text.split('. ');
  let data = basic.map(element => element.split(' '));
  data = data.map(senteces => senteces.map(word => word.replace('.', '')));
  data.forEach(senteces => senteces.forEach((word, windex) => {
    let temp = ''
    windex % 2 === 1 ?
      (temp = word, senteces[windex] = senteces[windex - 1], senteces[windex - 1] = temp) : undefined;
  }));
  data.forEach(senteces => pushRandomThing(senteces));
  data.forEach(senteces => senteces.forEach((word, windex) => {
    let temp;
    windex === 0 ? (temp = word.charAt(0).toUpperCase() + word.slice(1), senteces[windex] = temp) : undefined;
  }));
  data.forEach(senteces => senteces.forEach((word, windex) => {
    windex === senteces.length - 1 ? (finalText += word + '. ') : (finalText += word + ' ');
  }));
  return finalText
}

app.post('/sith', (req, res) => {
  let data = req.body;

  data.text === undefined ?
    res.json({ error: "Feed me some text you have to, padawan young you are. Hmmm." }) :
    res.json({ sith_text: yodaIzer(data.text) })
});

let lang = {
  hu: 'teve',
  eng: 'oppish'
}

function gibrisizer(object) {
  let vowels = ['a', 'á', 'o', 'ó', 'u', 'ú', 'e', 'é', 'i', 'í', 'ö', 'ő', 'ü']
  let finalText = '';
  let basic = object.text.split('');
  let char = {
    hu: 'v',
    eng: 'op'
  }

  basic = basic.map(element => {
    if (vowels.indexOf(element.toLowerCase()) >= 0) {
      element = element + char[object.lang] + element.toLowerCase();
      return element
    } else {
      return element
    }
  })
  basic.forEach(elemnet => finalText += elemnet);
  return finalText;
}

app.post('/translate', (req, res) => {
  let data = req.body;
  data.text === undefined && data.lang === undefined ? res.json({ error: 'Please give  text, and language input!' }) :
    data.text === undefined ? res.json({ error: 'Please give a text input!' }) :
      !(data.lang in lang) ? res.json({ error: 'Please give a language input!' }) : res.json({
        translated: gibrisizer(data),
        lang: lang[data.lang]
      });
});