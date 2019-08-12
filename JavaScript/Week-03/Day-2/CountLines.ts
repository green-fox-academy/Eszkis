'use strict';

import { fileURLToPath } from "url";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

function CountLines(fileName: string) {
  try {
    let content: string = fs.readFileSync(fileName, 'utf-8');
    let lineCount: string[] = content.split('\n')
    console.log(lineCount.length);
  } catch (err) {
    console.log('0');
  }
}

CountLines('my-file.txt');
CountLines('not-valid.txt')