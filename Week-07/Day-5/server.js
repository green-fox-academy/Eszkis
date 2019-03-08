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

app.use(express.json())

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
    res.send({ datas: rows })
  });
})

app.post('/posts', (req, res) => {
  let rawData = req.body;
  let header = req.headers;
  Object.keys(rawData).length === 0 ? undefined : (
    conn.query(`INSERT INTO posts(title, url, owner) VALUES (${mysql.escape(rawData.title)},${mysql.escape(rawData.url)},(SELECT userName FROM users WHERE id = ${mysql.escape(header.userid)}));`, (err, insInfo) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
      conn.query(`SELECT * FROM posts WHERE ID = ${insInfo.insertId}`, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        };
        res.send({ rows });
      });
    })
  )
});

app.put('/posts/:id/:type', (req, res) => {
  let type = req.params;
  let voteType = {
    upvote: 'score + 1',
    downvote: 'score - 1'
  }
  isNaN(type.id) ? res.send({ answer: 'Send a correct id number' }) : (
    conn.query(`UPDATE posts SET score = ${voteType[type.type]}, vote = vote + 1 WHERE id = ${type.id};`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
      rows.affectedRows < 1 ? res.send({ answer: 'Send a correct id number' }) : (
        conn.query(`SELECT * FROM posts WHERE ID = ${type.id}`, (err, rows) => {
          if (err) {
            console.log(err);
            res.status(500).send();
            return;
          };
          res.send({ rows });
        }));
    }));
});

app.delete('/posts/:id', (req, res) => {
  let id = req.params;
  let header = req.headers;
  console.log(id.id);
  console.log(header.userid);

  isNaN(id.id) ? res.send({ answer: 'Send a correct id number' }) : (
    conn.query(`SELECT * FROM posts WHERE ID = ${id.id}`, (err, deletedrow) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      };
      conn.query(`DELETE FROM posts WHERE id = ${id.id} AND owner = (SELECT userName FROM users WHERE id = ${(header.userid)});`, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send();
          return;
        };
        rows.affectedRows < 1 ? res.send({ answer: `You can\'t delete this post!` }) : res.send({ deletedrow });
      });
    }));


});