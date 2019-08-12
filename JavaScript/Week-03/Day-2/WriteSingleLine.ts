'use strict';

import { fileURLToPath } from "url";

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let fs = require('fs');

function CountLines(fileName: string,message:string) {
  try {
    let content: string = fs.readFileSync(fileName, 'utf-8');
    fs.writeFileSync(fileName,message)
  } catch (err) {
    console.log('Unable to write file: '.concat(fileName));
  }
}

CountLines('my-file.txt','Sz. Kis László');
CountLines('not-valid.txt','Sz. Kis László')