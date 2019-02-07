import { Sum } from './Sum';

let test = require('tape')

test('Sum a list of number', t => {
  const listOfNumbers = new Sum;
  listOfNumbers.addNumber(5);
  t.equal(listOfNumbers.sumNumber(), 5);
  t.end();
});
