'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function containsSeven(array: number[]) {
  if (array.indexOf(7) === -1) {
    return 'Noooooo'
  } else {
    return 'Hoorray'
  }
}

function containsSeven2(array: number[]) {
  for (let x: number = 0; x < array.length; x++) {
    if (array[x] % 7 === 0) {
      return 'Hoorray'
    } else {
      return 'Noooooo'
    }
  }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
console.log(containsSeven2(numbers));