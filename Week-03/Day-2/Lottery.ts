'use strict';

// Create a method that find the 5 most common lottery numbers in lottery.csv

let fs = require('fs');

function reversedLines(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r\n');
  let array: string[][] = [];
  let allNumber: string[] = [];
  let topNumber:string[][]=[];
  content.forEach(function (value) {
    array.push(value.split(';'))
  })

  for (let outerLoop: number = 1; outerLoop < array.length; outerLoop++) {
    for (let innerLoop: number = (array[outerLoop].length - 5); innerLoop < array[outerLoop].length; innerLoop++) {
      allNumber.push(array[outerLoop][innerLoop]);
      allNumber.sort();
    }
  }

  console.log(allNumber);
}

reversedLines('Lottery.txt')