import { AnagramCheck } from './Anagram';

let test = require('tape')

test('Check if two word are anagrams', t => {
  t.equal(AnagramCheck('asdf', 'fdsa'), true);
  t.end();
});

test('Check if two word are anagrams', t => {
  t.equal(AnagramCheck('asDf', 'fdsa'), true);
  t.end();
});

test('Check if two word are anagrams', t => {
  t.equal(AnagramCheck('asdf', 'jfjkfdvagb'), false);
  t.end();
});

test('Check if two word are anagrams', t => {
  t.equal(AnagramCheck('jfjkfdvagb', 'asdf'), false);
  t.end();
});

test('Check if two word are anagrams', t => {
  t.equal(AnagramCheck('asdf0', '0fdsa'), true);
  t.end();
});
