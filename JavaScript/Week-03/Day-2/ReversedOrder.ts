'use strict';

// Create a method that decrypts reversed-order.txt

let fs = require('fs');

function reversedLines(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r');
  let sentences: string = '';
 
  for (let x: number = (content.length-1); x >= 0; x--) {
    sentences+=content[x];
  }
  console.log(sentences);
}

reversedLines('ReversedOrder.txt')