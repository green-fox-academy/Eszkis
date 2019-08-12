// Write a recursive function that takes one parameter: n and counts down from n.

function counter(startNumber) {
  if (startNumber <= 1) {
    console.log(1);
  } else {
    console.log(startNumber);
    startNumber = counter(startNumber - 1)
  }
}

counter(1)
