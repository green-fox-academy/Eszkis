'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('see drax', (t) => {
  request(app)
    .get('/drax')
    .expect(200, {
      "table": [
        {
          "name": "bolognai",
          "amount": 1,
          "calorie": 100
        },
        {
          "name": "milanoi",
          "amount": 1,
          "calorie": 100
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('add element', (t) => {
  request(app)
    .get('/drax/add?name=asdf&amount=123&calorie=2')
    .expect(200, {
      "table": [
        {
          "name": "bolognai",
          "amount": 1,
          "calorie": 100
        },
        {
          "name": "milanoi",
          "amount": 1,
          "calorie": 100
        },
        {
          "name": "asdf",
          "amount": 123,
          "calorie": 2
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('edit element', (t) => {
  request(app)
    .get('/drax/edit?id=1&amount=500')
    .expect(200, {
      "table": [
        {
          "name": "bolognai",
          "amount": 501,
          "calorie": 100
        },
        {
          "name": "milanoi",
          "amount": 1,
          "calorie": 100
        },
        {
          "name": "asdf",
          "amount": 123,
          "calorie": 2
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('remove element', (t) => {
  request(app)
    .get('/drax/remove3')
    .expect(200, {
      "table": [
        {
          "name": "bolognai",
          "amount": 501,
          "calorie": 100
        },
        {
          "name": "milanoi",
          "amount": 1,
          "calorie": 100
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});