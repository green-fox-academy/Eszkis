// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sumDigits(number) {
  if (number < 10) {
    return number % 10;
  } else {

    return (number % 10) + sumDigits(Math.floor(number / 10))

  }

}


console.log(sumDigits(123));
