// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEars(bunnyNumber) {
  if (bunnyNumber <= 1) {
    return 2
  } else {
    if (bunnyNumber % 2 === 0) {
      return bunnyEars(bunnyNumber - 1) + 3
    } else {
      return bunnyEars(bunnyNumber - 1) + 2
    }
  }
}

console.log(bunnyEars(2));
console.log(bunnyEars(3));
console.log(bunnyEars(5));


