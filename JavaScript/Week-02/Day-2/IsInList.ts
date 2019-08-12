'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

function checkNums(originalArray: number[], findNumber: number[]) {
  let indicator: boolean = true;
  for (let x: number = 0; x < findNumb.length; x++)
    if (originalArray.indexOf(findNumb[x]) === -1) {
      indicator = false;
    } else {
    }
  return indicator
}

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let findNumb: number[] = [4, 8, 12, 16]
console.log(checkNums(listOfNumbers, findNumb));
