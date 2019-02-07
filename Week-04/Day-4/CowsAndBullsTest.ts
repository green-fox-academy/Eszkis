'use strict';

let test = require('tape')

import { CAB } from './CowsAndBulls';

test('generate a CAB object', function (t: any): any {
  let CAB1 = new CAB([1, 2, 3, 4])
  t.deepEqual(CAB1.getInfo(), { state: 'playing', digits: [1, 2, 3, 4], numberOffGuesses: 0 });
  t.end();
});

test('check for guess input', function (t: any): any {
  let CAB1 = new CAB([1, 2, 3, 4])
  t.deepEqual(CAB1.guess([5, 6, 7, 8]), ['', '', '', '']);
  t.end();
});

test('check for guess input', function (t: any): any {
  let CAB1 = new CAB([1, 2, 3, 4])
  t.deepEqual(CAB1.guess([4, 3, 0, 9]), ['bull', 'bull', '', '']);
  t.end();
});

test('check for guess input', function (t: any): any {
  let CAB1 = new CAB([1, 2, 3, 4])
  t.deepEqual(CAB1.guess([4, 3, 0, 9]), ['bull', 'bull', '', '']);
  t.end();
});

test('check for game finish', function (t: any): any {
  let CAB1 = new CAB([1, 2, 3, 4])
  t.deepEqual(CAB1.guess([1, 2, 3, 4]), ['cow', 'cow', 'cow', 'cow']);
  t.end();
});

test('finish state after 3 guess, last one is correct', function (t: any): any {
  let CAB1 = new CAB([1, 2, 3, 4])
  CAB1.guess([1, 2, 3, 4])
  CAB1.guess([1, 2, 3, 4])
  CAB1.guess([1, 2, 3, 4])
  t.deepEqual(CAB1.getInfo(), {
    state: 'finished',
    digits: [1, 2, 3, 4],
    numberOffGuesses: 3
  });
  t.end();
});

/* test('input number smaller then 10', function (t: any): any {
  let CAB1 = new CAB([1, 2, 3, 4])
  t.deepEqual(CAB1.getInfo(), { state: 'playing', digits: [1, 2, 3, 4], numberOffGuesses: 0 });
  t.end();
}); */