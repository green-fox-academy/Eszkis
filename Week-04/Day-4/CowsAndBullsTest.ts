'use strict';

let test = require('tape')

import { CAB } from './CowsAndBulls';
import { error } from 'util';

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

// couldn't find out how to make it work
/* test('every given number smaller then 9', function (t: any): any {
  let CAB1 = new CAB([11, 3, 4, 5])
  t.err('One or more of the numbers are bigger then 9');
  t.end();
}); */

test('random generated numbers are smaller then 10', function (t: any): any {
  let CAB1 = new CAB()
  t.equal(CAB1.digits[0] < 10 && CAB1.digits[1] < 10 && CAB1.digits[2] < 10 && CAB1.digits[3] < 10, true);
  t.end();
});