'use strict'

const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'todos'
});

// conn.connect((err) => {
//   if (err) {
//     console.log('Error connecting to DB');
//     console.error();
//     return
//   }
//   console.log('DB is connected');
// });
// conn.end();

app.get('/', (req, res) => {
  conn.query('SHOW DATABASE', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);

})