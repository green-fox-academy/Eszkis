'use strict';

// Create a method that decrypts reversed-lines.txt

let fs = require('fs');

function reversedLines(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r');
  let array: string[][] = [];
  let sentences: string = '';
  content.forEach(function (value) {
    array.push(value.split(''))
  })
  for (let x: number = 0; x < array.length; x++) {
    for (let y: number = (array[x].length - 1); y >= 0; y--) {
      sentences += array[x][y]
    }
  }
  console.log(sentences);
}

reversedLines('ReversedLines.txt')