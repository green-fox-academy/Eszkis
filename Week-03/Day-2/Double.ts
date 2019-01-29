'use strict';

// Create a method that decrypts duplicated-chars.txt
let fs = require('fs');

function double(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r');
  let array: string[][] = [];
  let sentences: string = '';
  content.forEach(function (value) {
    array.push(value.split(''))
  })
  console.log(array)
  console.log(array.length);
  for (let outerArray: number = 0; outerArray < array.length; outerArray++) {
    for (let innerArray: number = 0; innerArray < array[outerArray].length; innerArray += 2) {
      sentences += array[outerArray][innerArray]
    }
  }
  console.log(sentences);
  
}


double('Double.txt');