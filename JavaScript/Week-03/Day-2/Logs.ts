'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


let fs = require('fs');


function unique(value, index, self) {
  return self.indexOf(value) === index;
};


function uniqueIP(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r\n').map(value => value.split('   ')); //Read file, and put every line in an array. Every line in different index. Then split up every line into smaller parts, and put then in one array.In the and we have an array in an array.
  let uniqueIPList = content.map(value => value[1]).filter(unique); //Get the 2 cells in the inner array, and check if it is unique
  console.log(uniqueIPList);
};

function Ratio(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r\n').map(value => value.split('   ')); //Read file, and put every line in an array. Every line in different index. Then split up every line into smaller parts, and put then in one array.In the and we have an array in an array.
  let requestArray = content.map(value => value[2]);
  let POSTCount: number = 0;
  requestArray.forEach(function (value) {
    if (value === 'POST /') {
      POSTCount++
    }
  })
  console.log('GET/POST request ratio is : ' + (requestArray.length - POSTCount) / POSTCount);

}
uniqueIP('logs.txt');
Ratio('logs.txt')