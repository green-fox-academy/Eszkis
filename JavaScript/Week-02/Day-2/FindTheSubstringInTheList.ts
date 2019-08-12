
'use strict';
//  Create a function that takes a string and a list of string as a parameter
//  Returns the index of the string in the list where the first string is part of
//  Only need to find the first occurence and return the index of that
//  Returns `-1` if the string is not part any of the strings in the list

//  Example


function substrlist(word: string, list: string[]) {
  let stringList = list.filter(str => {
    if (str.indexOf(word) >= 0) {
      return word;
    }
  });
  if (stringList.length > 0) {
    return stringList.map(index => list.indexOf(index));
  }
  return '-1';
}







console.log(substrlist('ching', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `4`
console.log(substrlist('not', ['this', 'is', 'what', 'I\'m', 'searching', 'in']));
//  should print: `-1`




/*'use strict';
//  Create a function that takes a number and a list of numbers as a parameter
//  Returns the indeces of the numbers in the list where the first number is part of
//  Returns an empty list if the number is not part any of the numbers in the list

// Example
//console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'

function subint(findNumb: number, numbArray: number[]) {
  let stringArray: number[] = numbArray.filter(actualNumb => {
    let actualString: string = actualNumb.toString();
    if (actualString.indexOf(findNumb.toString()) >= 0) {
      return actualString;
    }
  });
  return stringArray.map(num => numbArray.indexOf(num));
}

console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'
*/