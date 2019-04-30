'use strict'

const express = require('express');
const app = express();
const port = 8000;
const mysql = require('mysql');
const env = require('dotenv');
env.config();
const conn = mysql.createConnection({
  host: process.env.RDS_HOST,
  user: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE,
  port: process.env.RDS_PORT
});

app.use(express.json())

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});

app.get('/', (req, res) => {
  createTable()
    .then((rows) => {
      console.log('DB table is created');
      console.log(rows);
    })
    .catch((error) => {
      console.log('DB table creation is failed');
      console.log(error);
    })
  allData()
    .then((rows) =>
      res.render('main', { rows })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
});

app.post('/api/users', (req, res) => {
  let data = req.body;
  register(data)
    .then((rows) => {
      return rows
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
});

const allData = () => {
  return new Promise((res, rej) => {
    conn.query(`SELECT * FROM users ORDER BY id`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows);
      }
    });
  });
};

const createTable = () => {
  console.log('Started to create new table');
  return new Promise((res, rej) => {
    conn.query(`CREATE TABLE IF NOT EXISTS users (
      id INT NOT NULL AUTO_INCREMENT,
      userName varchar(20) COLLATE latin1_general_ci NOT NULL DEFAULT '',
      PRIMARY KEY (id)
     ) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;`, (err, rows) => {
      if (err) {
        console.log('createTable failed');
        rej(err);
      } else {
        console.log('createTable success');
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