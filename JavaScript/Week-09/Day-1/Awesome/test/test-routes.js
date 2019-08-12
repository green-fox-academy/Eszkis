'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('see all', (t) => {
  request(app)
    .get('/awesome')
    .expect(200, {
      "table": [
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 3
        },
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 5
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 2
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 7
        },
        {
          "author": "RHCP3",
          "title": "Californication",
          "genre": "classic",
          "year": "2005",
          "rating": 1
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('add', (t) => {
  request(app)
    .get('/awesome/add?author=asd&title=asd&genre=hip-hop&year=2000&rating=6')
    .expect(200, {
      "table": [
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 3
        },
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 5
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 2
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 7
        },
        {
          "author": "RHCP3",
          "title": "Californication",
          "genre": "classic",
          "year": "2005",
          "rating": 1
        },
        {
          "author": "asd",
          "title": "asd",
          "genre": "hip-hop",
          "year": "2000",
          "rating": 6
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('remove', (t) => {
  request(app)
    .get('/awesome/remove1')
    .expect(200, {
      "table": [
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 5
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 2
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 7
        },
        {
          "author": "RHCP3",
          "title": "Californication",
          "genre": "classic",
          "year": "2005",
          "rating": 1
        },
        {
          "author": "asd",
          "title": "asd",
          "genre": "hip-hop",
          "year": "2000",
          "rating": 6
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('change rating', (t) => {
  request(app)
    .get('/awesome/rating?id=1&number=10')
    .expect(200, {
      "table": [
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 10
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 2
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 7
        },
        {
          "author": "RHCP3",
          "title": "Californication",
          "genre": "classic",
          "year": "2005",
          "rating": 1
        },
        {
          "author": "asd",
          "title": "asd",
          "genre": "hip-hop",
          "year": "2000",
          "rating": 6
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('top 3', (t) => {
  request(app)
    .get('/awesome/top3')
    .expect(200, {
      "newTable": [
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 10
        },
        {
          "author": "RHCP2",
          "title": "Californication",
          "genre": "hip-hop",
          "year": "2001",
          "rating": 7
        },
        {
          "author": "asd",
          "title": "asd",
          "genre": "hip-hop",
          "year": "2000",
          "rating": 6
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});

test('filter to date', (t) => {
  request(app)
    .get('/awesome/filter?year=2000')
    .expect(200, {
      "newTable": [
        {
          "author": "RHCP",
          "title": "Californication",
          "genre": "rock",
          "year": "2000",
          "rating": 10
        },
        {
          "author": "asd",
          "title": "asd",
          "genre": "hip-hop",
          "year": "2000",
          "rating": 6
        }
      ]
    })
    .end(function (err, res) {
      t.error(err)
      t.end();
    });
});