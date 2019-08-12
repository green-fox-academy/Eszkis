'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(originalString: string[], extraString: string, afterString: string) {
  let where: number = 0;
  where = originalString.indexOf(afterString);
  let stringEnd: string[] = [];
  stringEnd = originalString.slice(where + 1, originalString.length);
  originalString = originalString.slice(0, where + 1);
  originalString = originalString.concat(extraString, stringEnd);
  return originalString;
}

console.log(putSaturn(planetList, 'Saturn', 'Jupiter'));

