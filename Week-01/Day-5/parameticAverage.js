'use strict';

let i=2;
let sum=0;
let currentnumb=0;

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4



while(process.argv[i]!==undefined){
    currentnumb=process.argv[i];
    sum+=Number(process.argv[i]);
    i++;
}
console.log("Sum: "+sum+", Average: "+(sum/(i-2)))
