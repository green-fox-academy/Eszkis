'use strict'

const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const env = require('dotenv');
env.config();
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.use(express.json())

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})

app.get('/', (req, res) => {
  allData()
    .then((rows) =>
      res.render('main', { rows })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    })
});

app.post('/api/users', (req, res) => {
  let data = req.body;
  register(data.email)
    .then((rows) => {
      return rows
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send();
    })
});

const allData=()=>{
  return new Promise((res, rej) => {
    conn.query(`SELECT * FROM users`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows);
      }
    });
  });
};

const register = (data) => {
  return new Promise((res, rej) => {
    conn.query(`INSERT INTO users (userName) VALUES (${mysql.escape(data.userName)})`, (err, insInfo) => {
      if (err) {
        rej(err);
      } else {
        res(insInfo);
      }
    });
  });
};