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
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

app.use(express.json())

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})

app.get('/', (req, res) => {
  lastRegistered()
    .then((rows) =>
      res.render('main', { rows })
    )
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    })
});

app.post('/api/users', (req, res) => {
  let numberOfUsers;
  let data = req.body;

  checkEmail(data.email)
    .then((rows) => {
      return userNumber()
    })
    .then((dataNumber) => {
      numberOfUsers = dataNumber;
      return register(data, numberOfUsers)
    })
    .then((rows) => {
      console.log('successful registration');
      res.status(201).send('successful registration');
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send();
    })
});

app.get('/api/users', (req, res) => {
  getUsers()
    .then((rows) => {
      res.status(201).send(rows)
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send();
    })
});

const getUsers = () => {
  return new Promise((res, rej) => {
    conn.query('SELECT email, balance FROM users', (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows)
      }
    });
  });
};

const lastRegistered = () => {
  return new Promise((res, rej) => {
    conn.query('SELECT userName FROM users ORDER BY id DESC LIMIT 5', (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows)
      }
    });
  });
};

const userNumber = () => {
  return new Promise((res, rej) => {
    conn.query('SELECT COUNT(*) FROM users;', (err, rows) => {
      if (err) {
        rej(err);
      } else {
        res(rows[0]['COUNT(*)'])
      }
    });
  });
};

const checkEmail = (email) => {
  return new Promise((res, rej) => {
    conn.query('SELECT * FROM users WHERE email=?;', [email], (err, rows) => {
      if (err) {
        rej(err);
      } else {
        rows.length > 0 ? rej({ message: "email is already in use" }) : res(rows)
      }
    });
  });
};

const register = (data, usernumber) => {
  return new Promise((res, rej) => {
    let balance = 0;
    data.cupon === 'FIRST100' && usernumber < 101 ?
      balance = 1000 : (console.log({ message: 'Invalid cupon code' }),
        balance = 0);
    conn.query(`INSERT INTO users (userName, password, email, cupon, balance) VALUES (${mysql.escape(data.userName)}, ${mysql.escape(data.password)}, ${mysql.escape(data.email)}, ${mysql.escape(data.cupon)}, ${mysql.escape(balance)})`, (err, insInfo) => {
      if (err) {
        rej(err);
      } else {
        res(insInfo);
      }
    });
  });
};