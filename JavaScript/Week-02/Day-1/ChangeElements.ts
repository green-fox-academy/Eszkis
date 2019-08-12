// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6]

let test = numList.map(function (num) {
  if (num == 8) {
    return num = 4
  }
  else {
    return num = num;
  }
});

for (let x: number = 0; x <= 4; x++) {
  console.log(test[x]);

}