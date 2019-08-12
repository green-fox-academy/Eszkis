// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the resul


function sum(numbers:number[],sumnumber:number) {
  let sums:number=0;
    for (let x:number=0;x<=sumnumber-1;x++){
      sums=sums+numbers[x];
    }
      return sums;
}

console.log(sum([1,2,3,4,5,6,7,8,4,2134],6));