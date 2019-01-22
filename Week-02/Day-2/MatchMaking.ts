'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane','Alice'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(array1: string[], array2: string[]) {
  let length1: number = array1.length;
  let length2: number = array2.length;
  let finalArray: String[] = [];
  if (length1 === length2) {
    for (let x: number = 0; x < length1; x++) {
      finalArray.push(array1[x], array2[x]);
    }
    return finalArray;
  } if (length1 > length2) {
    for (let x: number = 0; x < length2; x++) {
      finalArray.push(array1[x], array2[x]);
    }
    for (let x: number = length2; x < length1; x++) {
      finalArray.push(array1[x]);
    }
    return finalArray;
  } else {
    for (let x: number = 0; x < length1; x++) {
      finalArray.push(array1[x], array2[x]);
    }
    for (let x: number = length1; x < length2; x++) {
      finalArray.push(array2[x]);
    }
    return finalArray;
  }
}
console.log(makingMatches(girls, boys));