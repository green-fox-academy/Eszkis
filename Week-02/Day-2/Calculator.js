'use strict';
// Create a simple calculator application which does read the parameters from the standard input
// and prints the result to the console.

// It should support the following operations, create function called "calculate()" :
// +, -, *, /, % and it should support two operands:

// The format of the expressions must be: {operation} {operand} {operand}.
// Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

// You should use the command line arguments to accept user input

// It should work like this:

// Start the program with "node calculator.js + 5 6"
// If number of arguments are not correct, print some nice errors
// Else print the result
// Say goodbye

// Just a helper for you to get started
let operat = process.argv[2];
let numb1 = parseInt(process.argv[3]);
let numb2 = parseInt(process.argv[4]);
console.log('Your arguments: '+operat+' '+numb1+' '+numb2)


if ((numb1 !== numb1 || numb2 !== numb2) && operat !== '+' && operat !== '-' && operat !== 'm' && operat !== 'd' && operat !== '%') {
  console.log('One of arguments are invalid. Please start the program again, and give right arguments. *=m, /=d')
} else {
  switch (operat) {
    case '+':
      console.log('Result: ' + (numb1 + numb2));
      console.log('Goodbye');
      break;
    case '-':
      console.log('Result: ' + (numb1 - numb2));
      console.log('Goodbye');
      break;
    case 'm':
      console.log('Result: ' + (numb1 * numb2));
      console.log('Goodbye');
      break;
    case 'd':
      console.log('Result: ' + (numb1 / numb2));
      console.log('Goodbye');
      break;
    case '%':
      console.log('Result: ' + (numb1 % numb2));
      console.log('Goodbye');
      break;
    default:
  }
}

