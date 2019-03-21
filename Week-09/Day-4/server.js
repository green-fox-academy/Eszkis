'use strict'

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

app.get('/game', (req, res) => {
  let specID
  let question
  allID()
    .then((idList) => {
      specID = idList[getARandomNumber(0, idList.length - 1)];
      return randQuest(specID);
    })
    .then((rows) => {
      question = rows;
      return answer(specID);
    })
    .then((answers) => {
      res.render('main', {
        score: 0,
        question: question,
        answers: answers
      });
    })
});

app.get('/questions', (req, res) => {
  allQuestion()
    .then((rows) => {
      res.render('questions', { rows })
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
});

app.get('/api/questions', (req, res) => {
  allQuestion()
    .then((rows) => {
      res.send({ rows });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
});

app.get('/api/game', (req, res) => {
  let specID
  let question
  allID()
    .then((idList) => {
      specID = idList[getARandomNumber(0, idList.length - 1)];
      return randQuest(specID);
    })
    .then((rows) => {
      question = rows;
      return answer(specID);
    })
    .then((answers) => {
      res.send({
        id: specID,
        question: question[0].question,
        answer: answers
      });
    })
});

const allID = () => {
  return new Promise((res, rej) => {
    conn.query(`SELECT id FROM questions`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        let idList = rows.map(element => element.id)
        res(idList)
      }
    });
  });
}

const allQuestion = () => {
  return new Promise((res, rej) => {
    conn.query(`SELECT * FROM questions`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows)
      }
    });
  });
}

const randQuest = (id) => {
  return new Promise((res, rej) => {
    conn.query(`SELECT id, question FROM questions WHERE id=?;`, [id],
      (err, rows) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
  });
};

function getARandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const answer = (id) => {
  return new Promise((res, rej) => {
    conn.query(`SELECT * FROM answers WHERE question_id=?;`, [id],
      (err, rows) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
  });
};