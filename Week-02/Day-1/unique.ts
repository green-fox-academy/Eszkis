//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(arr: number[]) {
  let returnArray: number[] = [];
  for (let x: number = 0; x <= (arr.length - 1); x++) {
    if (arr.indexOf(arr[x]) === x) {
      returnArray.push(arr[x])
    }
  }
  return returnArray;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`