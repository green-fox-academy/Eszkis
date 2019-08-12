'use strict';

import { fileURLToPath } from "url";

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

let fs = require('fs');

function printEachLine(fileName: string) {
  try {
    let content = fs.readFileSync(fileName, 'utf-8');
    console.log(content);
  } catch (err) {
    console.log('Unable to read file: '.concat(fileName));

  } finally {
    //    console.log('why');
  }
}

printEachLine('my-file.txt');