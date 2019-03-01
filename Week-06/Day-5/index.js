'use strict'

const express = require('express');
const app = express();
const port = 3000;
const images = [
  { name: 'Logo', description: 'Darksiders game series logo', img: `static\\images\\Logo.jpg` },
  { name: 'War1', description: 'First horseman you can play', img: 'static\\images\\War1.jpg' },
  { name: 'War2', description: 'He is the one who found out, that the angels broke the final seal', img: 'static\\images\\War2.jpg' },
  { name: 'Death1', description: 'The one who rides the pale horse. Main caracter in the second game.', img: 'static\\images\\Death1.jpg' },
  { name: 'Death2', description: 'Do anything to save his brother war. Even sacrifice his own, and fellow nephalems life for him. ', img: 'static\\images\\Death2.jpg' },
  { name: 'Fury1', description: 'The most egoist from the four. Only live for the thrill of the fights.', img: 'static\\images\\Fury1.jpg' },
  { name: 'Fury2', description: 'She saves a lot of the remaining humans from earth during her quest.', img: 'static\\images\\Fury2.jpg' },
];

let selected = images[0];

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.get('/', (reg, res) => {
  res.render('home', { images, selected })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// images.forEach(element =>
//   console.log(element.img));
