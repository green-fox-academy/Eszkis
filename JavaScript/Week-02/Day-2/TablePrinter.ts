'use strict';
// Create a function that prints the ingredient list of 
//    dictionaries to the console in the following format:
// 
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key

function basicLines(maxLength: number) {
  let line: string = '+';
  for (let x: number = 0; x < (maxLength + 2); x++) {
    line += '-';
  }
  line += '+';
  for (let x: number = 0; x < 15; x++) {
    line += '-';
  }
  line += '+';
  for (let x: number = 0; x < 10; x++) {
    line += '-';
  }
  line += '+';
  return line;
}
function headLine(maxLength: number) {
  let line: string = '| Ingredient';
  for (let x: number = 0; x < (maxLength - 9); x++) {
    line += ' ';
  }
  line += '| Needs cooling | In stock |';
  return line;
}
function writeList(array: any[], maxLength: number) {
  let line: string = '| ';
  for (let x: number = 0; x < array.length; x++) {
    line = '| ' + (array[x].name);
    for (let y: number = 0; y < (maxLength - array[x].name.length); y++) {
      line += (' ')
    }
    if (array[x].needsCooling === true) {
      line += (' | Yes           | ');
    } else {
      line += (' | No            | ');
    }
    if (array[x].inStock > 0) {
      line += (array[x].inStock);
    } else {
      line += ('-');
    }
    line += ('        |');
    console.log(line);
  }
}

const ingredients: any[] = [
  { name: 'vodka', inStock: 1, needsCooling: true },
  { name: 'coffee_liqueur', inStock: 0, needsCooling: true },
  { name: 'fresh_cream', inStock: 1, needsCooling: true },
  { name: 'captain_morgan_rum', inStock: 2, needsCooling: true },
  { name: 'mint_leaves', inStock: 0, needsCooling: false },
  { name: 'sugar', inStock: 0, needsCooling: false },
  { name: 'lime juice', inStock: 0, needsCooling: true },
  { name: 'soda', inStock: 0, needsCooling: true }
];

let maxLength: number = 0;

for (let x = 0; x < ingredients.length; x++) {
  if (ingredients[x].name.length > maxLength) {
    maxLength = ingredients[x].name.length;
  }
}


console.log(basicLines(maxLength));
console.log(headLine(maxLength));
console.log(basicLines(maxLength));
writeList(ingredients, maxLength);
console.log(basicLines(maxLength));

