'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function candiesSum(array: any[]) {
  let sum: number = 0;
  array.forEach(function (count) {
    sum += count.candies;
  })
  return sum;
}

function candiesMoreThen5(array: any[]) {
  let sum: number = 0;
  array.forEach(function (count) {
    if (count.candies < 5) {
      sum += count.age;
    }
  })
  return sum;
}

console.log('Students have ' + candiesSum(students) + ' candies.');
console.log('Sum age for students who have less then 5 candies is ' + candiesMoreThen5(students));
