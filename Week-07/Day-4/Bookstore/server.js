'use strict'

const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})

app.get('/', (req, res) => {
  // res.render('home')
  conn.query('SHOW TABLES')
});

app.get('/books', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});