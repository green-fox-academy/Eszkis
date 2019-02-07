import { Sum } from './Sum';

let test = require('tape')

test('Sum a list of number', t => {
  const listOfNumbers = new Sum;
  listOfNumbers.addNumber(null);
  t.equal(listOfNumbers.sumNumber(), 0);
  t.end();
});
