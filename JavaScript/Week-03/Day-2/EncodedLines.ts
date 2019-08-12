'use strict';

// Create a method that decrypts encoded-lines.txt

let fs = require('fs');

function reversedLines(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r');
  let array: string[][] = [];
  let sentences: string = '';
  content.forEach(function (value) {
    array.push(value.split(''))
  })
  for (let x: number = 0; x < array.length; x++) {
    for (let y: number = 0; y < array[x].length; y++) {
      if (array[x][y] === '\n' || array[x][y] === ' ') {
        sentences += array[x][y]
      } else {
        sentences += String.fromCharCode(array[x][y].charCodeAt(0) - 1)
      }
    }
  }
  console.log(sentences);
}
reversedLines('EncodedLines.txt')