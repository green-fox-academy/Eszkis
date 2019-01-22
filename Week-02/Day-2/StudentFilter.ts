'use strict';


// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

function nameMoreThen4(array: any[]) {
  let list: string[] = [];
  array.forEach(function (nameList) {
    if (nameList.candies > 4) {
      list.push(nameList.name);
    }
  })
  return list;
}

function avgCandies(array: any[]) {
  let sum: number = 0;
  array.forEach(function (sums) {
    sum += sums.candies;
  })
  return (sum / students.length);
}

console.log(nameMoreThen4(students));
console.log(avgCandies(students));
