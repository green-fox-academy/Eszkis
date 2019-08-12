'use strict';

import { fileURLToPath } from "url";
import { writeFile } from "fs";

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

let fs = require('fs');

function CountLines(path: string, message: string, lineNumber: number) {
  try {
    let writeLine = fs.readFileSync(path, 'UTF-8')
    for (let count: number = 0; count < lineNumber; count++) {
      writeLine += message.concat('\r\n');
      fs.writeFileSync(path, writeLine);
    }
  } catch (err) {
    console.log('fck');
  }
}

CountLines('C:/Eszkis/Greenfox/Eszkis/Week-03/Day-2/MultipleLine.txt', 'apple', 5);
CountLines('C:/Eszkis/Greenfox/Eszkis/Week-03/Day-2/not-valid.txt', 'apple', 5)