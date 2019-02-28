'use strict'

const express = require('express');
const app = express();
const port = 3000;
const todos = ['get up', 'survive', 'go back to bed'];

app.set('view engine', 'ejs');

app.get('/', (reg, res) => {
  res.render('home', { todos });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})