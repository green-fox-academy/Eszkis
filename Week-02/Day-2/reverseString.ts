'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse(string: string) {
  let letters: string[] = string.split("");
  letters = letters.reverse();
  let string2: string = "";
  for (let x: number = 0; x <= letters.length - 1; x++) {
    string2 += letters[x]
  };
  return string2;
}
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
console.log(reverse(reversed));
