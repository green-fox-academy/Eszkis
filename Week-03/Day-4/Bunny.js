// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively 
//(without loops or multiplication).

function bunnyEars(bunnyNumber) {
  if (bunnyNumber <= 1) {
    return 2
  } else {
    return bunnyEars(bunnyNumber - 1) + 2
  }
}

console.log(bunnyEars(2));
console.log(bunnyEars(3));
console.log(bunnyEars(5));


