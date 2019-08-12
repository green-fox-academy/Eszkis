// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let matrixsize: number = 4;
let matrix: number[][] = [];

for (let x: number = 0; x < matrixsize; x++) {
  matrix.push([]);
  for (let y: number = 0; y < matrixsize; y++) {
    if (y === (matrixsize - x - 1)) {
      matrix[x].push(1);
    } else {
      matrix[x].push(0);
    }
  }
  console.log(matrix[x]);
}




