import { fibonacci } from './Fibonacci';

let test = require('tape')

test('counts all the letters', t => {
  t.deepEqual(fibonacci(5),5 );
  t.end();
});

test('counts all the letters', t => {
  t.deepEqual(fibonacci(1),1 );
  t.end();
});
/* 
test('counts all the letters', t => {
  t.deepEqual(fibonacci('a'),1 );
  t.end();
}); */