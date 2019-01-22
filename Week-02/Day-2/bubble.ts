//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending
//  Example:
//console.log(bubble([34, 12, 24, 9, 5, 10]));
//  should print [5, 9, 10, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 12, 9, 5,]

function bubble(array: number[], Sortif?: boolean) {
  for (let x: number = 0; x <= array.length - 2; x++) {
    for (let y: number = x + 1; y <= array.length - 1; y++) {
      if (array[x] > array[y]) {
        [array[x], array[y]] = [array[y], array[x]];
      } else { }
    }
  }
  if (Sortif) {
    array.reverse();
    return array;
  } else {
    return array;
  }
}

let myList: number[] = [34, 12, 24, 9, 5, 10, 12, 43, 51, 26, 34];
console.log(bubble(myList, false));