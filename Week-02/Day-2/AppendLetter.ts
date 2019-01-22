'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.


function appendA(array: string[], stringToAdd: string) {
  for (let x: number = 0; x < array.length; x++) {
    array[x] = array[x].concat(stringToAdd)
  }
  return array;
}

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(appendA(far, 'a'));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'