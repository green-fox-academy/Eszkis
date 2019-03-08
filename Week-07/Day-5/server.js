'use strict'

let fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');
const env = require('dotenv');
env.config();
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});


app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})

app.get('/', (req, res) => {
  res.render('home', { basic: '' })
});

app.get('/home', (req, res) => {
  res.render('home', { basic: 'Hello world!' })
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM posts;`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.render('home', { basic: 'Post has been sent' })
    res.send({ datas: rows })
  });

})