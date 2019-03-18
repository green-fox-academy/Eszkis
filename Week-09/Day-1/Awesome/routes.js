const express = require('express');
const app = express();
let table = [
  { author: 'RHCP', title: 'Californication', genre:'rock', year: '2000', rating: 3 },
  { author: 'RHCP', title: 'Californication', genre:'rock', year: '2000', rating: 5 },
  { author: 'RHCP2', title: 'Californication', genre:'hip-hop', year: '2001', rating: 2 },
  { author: 'RHCP2', title: 'Californication', genre:'hip-hop', year: '2001', rating: 7 },
  { author: 'RHCP3', title: 'Californication', genre:'classic', year: '2005', rating: 1 }
]

app.get('/awesome', (req, res) => {
  res.status(200).send({ table });
});

app.get('/awesome/add', (req, res) => {
  let data = req.query;
  let newData = {
    author: data.author, title: data.title, year: data.year, rating: parseInt(data.rating)
  }
  table.push(newData);
  res.status(200).send({ table });
});

app.get('/awesome/remove:id', (req, res) => {
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

app.get('/awesome/rating', (req, res) => {
  data = req.query;
  if ('id' in data && 'number' in data) {
    parseInt(data.id) > table.length ?
      res.status(200).send({
        error: 'Cant edit that data'
      }) : (table[data.id - 1].rating = parseInt(data.number),
        res.status(200).send({
          table
        })
      )
  }
});

app.get('/awesome/top:number', (req, res) => {
  data = req.params;
  table.sort((a, b) => { return b.rating - a.rating })
  let newTable = table.filter(element => table.indexOf(element) < data.number)
  res.status(200).send({
    newTable
  })
});

app.get('/awesome/filter', (req, res) => {
  data = req.query;
  let newTable = table.filter(element => element[Object.keys(data)[0]] == data[Object.keys(data)[0]])
  res.status(200).send({
    newTable
  })
});

module.exports = app;