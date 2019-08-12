'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../server');

test('print out cargo', (t) => {
  request(app)
    .get('/rocket')
    .expect(200, {
      "caliber25": 0,
      "caliber30": 0,
      "caliber50": 0,
      "shipstatus": 'empty',
      "ready": false
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('print fill when empty', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.30&amount=5000')
    .expect(200, {
      "caliber25": 0,
      "caliber30": 5000,
      "caliber50": 0,
      "shipstatus": '40%',
      "ready": false
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('will be full after fill', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=7500')
    .expect(200, {
      "caliber25": 0,
      "caliber30": 5000,
      "caliber50": 7500,
      "shipstatus": 'full',
      "ready": true
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('fill when full', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=7500')
    .expect(200, {
      "caliber25": 0,
      "caliber30": 5000,
      "caliber50": 7500,
      "shipstatus": 'full',
      "ready": true
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});