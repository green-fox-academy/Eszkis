// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function counter(startNumber) {
  if (startNumber <=1) {
    return 1
  } else {
    return startNumber + counter(startNumber - 1)
  }
}

console.log(counter(4));