
// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num: number) {
  let nums: number = 1;
  for (let x: number = 1; x <= num; x++) {
    nums *= x;
  }
  return nums;
}

let myNumber: number = 5;
console.log(factorio(myNumber));
