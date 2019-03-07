'use strict'

const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');
const env = require('dotenv');
const cat = ['Science', 'Technology', 'Computers', 'Nature', 'Medical']
env.config();

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
  res.render('home')
});

app.get('/books', (req, res) => {
  let query = req.query;
  let keys = Object.keys(query);
  console.log(keys);
  
  conn.query(`SELECT book_name,
  aut_name,
  cate_descrip,
  pub_name,
  book_price 
  FROM book_mast bm LEFT JOIN author a ON bm.aut_id=a.aut_id 
  LEFT JOIN category c ON bm.cate_id=c.cate_id
  LEFT JOIN publisher p ON bm.pub_id=p.pub_id;`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.render('home', { datas: rows })
    });
});