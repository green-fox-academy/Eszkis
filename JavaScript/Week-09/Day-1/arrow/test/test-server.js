'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../server');

test('yondu endpoint with input', (t) => {
  request(app)
    .get('/yondu?distance=100&time=10')
    .expect(200, {
      distance: "100",
      time: "10",
      speed: 10
    })
    .end(function (err, res) {
      if (err) throw err;
    });
  t.end();
});

test('yondu endpoint with time=0', (t) => {
  request(app)
    .get('/yondu?distance=100&time=0')
    .expect(200, {
      distance: "100",
      time: "0",
      speed: null
    })
    .end(function (err, res) {
      if (err) throw err;
    });
  t.end();
});

test('yondu endpoint with no input', (t) => {
  request(app)
    .get('/yondu')
    .expect(200, {
      error: "give proper input"
    })
    .end(function (err, res) {
      if (err) throw err;
    });
  t.end();
});