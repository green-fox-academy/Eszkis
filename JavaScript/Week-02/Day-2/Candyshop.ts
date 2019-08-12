'use strict';

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

function sweets(array: any[]) {
  for (let x: number = 0; x < array.length; x++) {
    if (array[x] === 2) {
      array[x] = 'Croissant'
    }
    if (array[x] === false) {
      array[x] = 'Ice cream'
    }
  }
  return array;
}

console.log(sweets(shopItems));
