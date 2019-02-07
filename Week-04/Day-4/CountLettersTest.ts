import { CountLetters } from './CountLetters';

let test = require('tape')

test('counts all the letters', t => {
  t.deepEqual(CountLetters('asdsdd'), [['a', 1], ['d', 3], ['s', 2]]);
  t.end();
});
