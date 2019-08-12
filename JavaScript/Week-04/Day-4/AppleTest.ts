import { Apple } from './Apple';

let test = require('tape')

test('log out string', t => {
  const apple1 = new Apple;

  t.equal(apple1.getApple(), 'apple');
  t.end();
});

test('log out string', t => {
  const apple1 = new Apple;

  t.equal(apple1.getApple(), 'carrot');
  t.end();
});

test('log out string', t => {
  const apple1 = new Apple;

  t.equal(apple1.getApple(), 'apple');
  t.end();
});