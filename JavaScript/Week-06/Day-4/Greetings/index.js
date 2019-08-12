'use strict'

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (reg, res) => {
  res.render('home', { query: reg.query , params: {}});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})