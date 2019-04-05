'use strict'

const express = require('express');
const app = express();
const port = 8080;
const mysql = require('mysql');
const path = require('path');
const env = require('dotenv');
env.config();
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

app.use(express.json())

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})

app.get('/',(req,res)=>{
  res.json({answer: 'Hello World'})
});

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

app.post('/api/questions', (req, res) => {
  let data = req.body
  let newId
  addNewQuestion(data.question)
    .then((id) => {
      newId = id
      return addNewAnswers(data.answers, newId)
    })
    .then((event) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
});

app.delete('/api/questions/:id', (req, res) => {
  console.log('start to delete');
  const id = req.params;
  delQuestion(id)
    .then(() => delAnwers(id))
    .then(() => {
      res.send('OK');
      console.log('ok');

    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
  });

const delQuestion = (id) => {
  return new Promise((res, rej) => {
    conn.query(`DELETE FROM questions WHERE id=${mysql.escape(id)};`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows)
      }
    });
  });
}

const delAnwers = (id) => {
  return new Promise((res, rej) => {
    conn.query(`DELETE FROM answers WHERE question_id=${mysql.escape(id)};`, (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows)
      }
    });
  });
}

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

const addNewQuestion = (question) => {
  return new Promise((res, rej) => {
    conn.query('INSERT INTO questions (question) VALUES (?);', [question], (err, insInfo) => {
      if (err) {
        rej(err);
      } else {
        res(insInfo.insertId);
      }
    });
  });
};

const addNewAnswers = (answers, id) => {
  return new Promise((res, rej) => {
    conn.query(`INSERT INTO answers(question_id, answer, is_correct) VALUES (${conn.escape(id)}, ${conn.escape(answers[0].answer)}, ${conn.escape(answers[0].is_correct)}), (${conn.escape(id)}, ${conn.escape(answers[1].answer)}, ${conn.escape(answers[1].is_correct)}), (${conn.escape(id)}, ${conn.escape(answers[2].answer)}, ${conn.escape(answers[2].is_correct)}), (${conn.escape(id)}, ${conn.escape(answers[3].answer)}, ${conn.escape(answers[3].is_correct)})`,
      (err, rows) => {
        if (err) {
          rej(err);
        } else {
          res(rows);
        }
      });
  });
};