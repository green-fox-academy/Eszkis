// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

function myReverse(array: number[]) {
  let array2: number[] = [];
  for (let x: number = array.length-1; x >= 0; x--) {
    array2.push(array[x])
  }
  return array2;
}

let numList: number[] = [3, 4, 5, 6, 7];

numList = numList.reverse();
console.log(numList);

numList = [3, 4, 5, 6, 7];
numList = myReverse(numList);
console.log(numList);

