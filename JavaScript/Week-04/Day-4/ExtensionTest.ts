'use strict';

let test = require('tape')

import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 5 is 7', function (t: any): any {
  t.equal(add(2, 5), 7);
  t.end();
});

test('add: 1 and 3 is 4', function (t: any): any {
  t.equal(add(1, 3), 4);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(3, 84, 15), 84);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(8, 45, -3), 45);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([4, 3, 0, 1]), 2);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([16, 14, 0, 8, 6]), 8.8);
  t.end();
});

test('is vowel: a', function (t: any): any {
  t.ok(isVowel('a'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test("is vowel: k", function (t: any): any {
  t.notOk(isVowel("k"));
  t.end();
});

test('translate: integet', function (t: any): any {
  t.equal(translate('integet'), 'wave');
  t.end();
});

test('translate: zsír', function (t: any): any {
  t.equal(translate('szír'), 'fat');
  t.end();
});