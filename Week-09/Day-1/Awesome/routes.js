const express = require('express');
const app = express();
let table = [
  { author: 'RHCP', title: 'Californication', year: '2000', rating: 5 }
]

app.get('/awesome', (req, res) => {
  res.status(200).send({ table });
});



module.exports = app;