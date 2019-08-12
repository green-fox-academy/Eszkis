'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint with input', (t) => {
  request(app)
    .get('/groot?message=asdf')
    .expect(200, {
      received: 'asdf',
      translated: 'I am Groot!'
    })
    .end(function (err, res) {
      if (err) throw err;
    });
  t.end();
});

test('groot endpoint with no input', (t) => {
  request(app)
    .get('/groot')
    .expect(200, {
      error: 'I am Groot!'
    })
    .end(function (err, res) {
      if (err) throw err;
    });
  t.end();
});