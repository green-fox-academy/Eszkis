const express = require('express');
const app = express();
let table = [
  { name: 'bolognai', amount: 1, calorie: 100 },
  { name: 'milanoi', amount: 1, calorie: 100 },
]

app.get('/drax', (req, res) => {
  res.status(200).send({
    table
  });
});

app.get('/drax/add', (req, res) => {
  data = req.query;

  if ('name' in data && 'amount' in data && 'calorie' in data) {
    let newData = {
      name: data.name, amount: parseInt(data.amount), calorie: parseInt(data.calorie)
    }
    table.push(newData);
    res.status(200).send({
      table
    })
  } else {
    res.status(200).send({
      error: 'No data was given'
    })
  }
});

app.get('/drax/remove:id', (req, res) => {
  data = req.params;
  parseInt(data.id) > table.length ?
    res.status(200).send({
      error: 'Cant delete that data'
    }) : (table.splice((data.id - 1), 1),
      res.status(200).send({
        table
      })
    )
});

app.get('/drax/edit', (req, res) => {
  data = req.query;
  if ('id' in data && 'amount' in data) {
    parseInt(data.id) > table.length ?
      res.status(200).send({
        error: 'Cant edit that data'
      }) : (table[data.id - 1].amount += parseInt(data.amount),
        res.status(200).send({
          table
        })
      )
  }
});

module.exports = app;