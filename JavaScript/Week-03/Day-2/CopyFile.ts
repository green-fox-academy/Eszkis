'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let fs = require('fs');

function copyContent(fileName: string) {
  try {
    let content: string = fs.readFileSync(fileName, 'UTF-8');
    fs.writeFileSync(fileName.slice(0, -4).concat('_Copy.txt'), content)
    console.log(true);
  } catch (err) { }
}


copyContent('MultipleLine.txt')