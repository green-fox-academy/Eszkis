'use strict'

let fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const path = require('path');
const env = require('dotenv');
const filterCat = {
  Category: 'c.cate_descrip',
  Publishers: 'p.pub_name',
  PriceLower: 'bm.book_price',
  PriceGreater: 'bm.book_price'
}

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

app.get('/books', (req, res) => {
  const query = req.query;
  const keys = Object.keys(query);
  let checker = true;
  keys.forEach(element => element in filterCat ? undefined : checker = false);
  const where = Object.keys(query).map(property => {
    return isNaN(query[property]) ? `${filterCat[property]} = '${query[property]}'` :
      property === 'PriceLower' ? `${filterCat[property]} < ${parseInt(query[property])}` :
        `${filterCat[property]} > ${parseInt(query[property])}`
  });
  let filter;
  if (checker && keys.length > 0) {
    filter = ` WHERE ${where.join(' AND ')}`
  } else {
    filter = ''
  };

  conn.query(`SELECT book_name,
  aut_name,
  cate_descrip,
  pub_name,
  book_price 
  FROM book_mast bm LEFT JOIN author a ON bm.aut_id=a.aut_id 
  LEFT JOIN category c ON bm.cate_id=c.cate_id
  LEFT JOIN publisher p ON bm.pub_id=p.pub_id${filter};`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.render('home', { datas: rows })
    });
});

let rawData = fs.readFileSync('rawData.txt', 'utf-8').split('\r\n');
let rows = rawData.map(element => element.split(','));
conn.query(`CREATE TABLE IF NOT EXISTS csv (
${rows[0][0]} varchar(4) COLLATE latin1_general_ci NOT NULL DEFAULT '',
${rows[0][1]} varchar(10) COLLATE latin1_general_ci NOT NULL DEFAULT '',
${rows[0][2]} varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
${rows[0][3]} varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
${rows[0][4]} varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
${rows[0][5]} varchar(6) COLLATE latin1_general_ci NOT NULL DEFAULT '',
${rows[0][6]} varchar(40) COLLATE latin1_general_ci NOT NULL DEFAULT '',
${rows[0][7]} varchar(7) COLLATE latin1_general_ci NOT NULL DEFAULT '',
PRIMARY KEY (${rows[0][0]})
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;`)

rows.forEach(element => {
  rows.indexOf(element) === 0 ? undefined :
    conn.query(`INSERT INTO csv (id,prefix, first_name, last_name, address, height, bitcoin_address, color_preference) VALUES 
    (${mysql.escape(element[0])}, ${mysql.escape(element[1])}, ${mysql.escape(element[2])}, ${mysql.escape(element[3])}, ${mysql.escape(element[4])}, ${mysql.escape(element[5])}, ${mysql.escape(element[6])}, ${mysql.escape(element[7])});`)
});

let random = Math.floor(Math.random() * 1000) + 1

conn.query(`SELECT * FROM csv WHERE id = ${random};`, (err, selectedRows) => {
  if (err) {
    console.log(err);
    res.status(500).send();
    return;
  }
  let keys = Object.keys(selectedRows[0]);
  console.log(`Cheking id:${random} for random check`);
  keys.forEach(element => {
    selectedRows[0][element] === rows[random][keys.indexOf(element)] ?
      console.log(element, ' is the same') :
      console.log(element, ' is not the same');
  })
});

conn.query(`DROP TABLE csv;`, (err, rows) => {
  if (err) {
    console.log(err);
    res.status(500).send();
    return;
  }
});