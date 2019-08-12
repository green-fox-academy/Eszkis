'use strict';

// Create a method that find the 5 most common lottery numbers in lottery.csv

let fs = require('fs');

function reversedLines(fileName: string, top: number) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r\n');
  let array: string[][] = [];
  let allNumber: number[] = [];
  content.forEach(function (value) {
    array.push(value.split(';'))
  })
  let topNumber: number[][] = [];
  for (let x: number = 0; x < 101; x++) {
    topNumber.push([(x + 1), 0])
  }
  for (let outerLoop: number = 1; outerLoop < array.length; outerLoop++) {
    for (let innerLoop: number = (array[outerLoop].length - 5); innerLoop < array[outerLoop].length; innerLoop++) {
      allNumber.push(parseInt(array[outerLoop][innerLoop]));
    }
  }
  for (let numberCount: number = 0; numberCount < allNumber.length; numberCount++) {
    topNumber[allNumber[numberCount]][1]++;
  }
  topNumber.sort(function (a, b) {
    return b[1] - a[1]
  })
  console.log('Top '.concat(top.toString(), ' number used:'));
  for (let x: number = 0; x < top; x++) {
    console.log('Number '.concat(topNumber[x][0].toString(), ' was used ', topNumber[x][1].toString(), ' times.'));
  }
}

reversedLines('Lottery.txt', 5)