import { Sum } from './Sum';

let test = require('tape')

test('Sum a list of number', t => {
  const listOfNumbers = new Sum;
  listOfNumbers.addNumber(2);
  listOfNumbers.addNumber(4);
  listOfNumbers.addNumber(5);
  listOfNumbers.addNumber(8);

  t.equal(listOfNumbers.sumNumber(), 19);
  t.end();
});
