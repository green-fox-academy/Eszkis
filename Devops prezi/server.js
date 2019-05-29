'use strict'

const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
/* const env = require('dotenv');
env.config(); */
const conn = mysql.createConnection({
  host: 'dev-demo.ctxbh8rmdttq.eu-central-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'devops',
  port: 3306
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