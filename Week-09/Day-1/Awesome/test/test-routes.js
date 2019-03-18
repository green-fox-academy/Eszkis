'use strict';
​
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
​
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