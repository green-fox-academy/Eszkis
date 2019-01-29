// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(yourNumber: number) {
  if (yourNumber === 0) {
    console.log('fail');
  } else {
    let result: number = 10 / yourNumber;
    console.log(result);

  }
}
divide(0);