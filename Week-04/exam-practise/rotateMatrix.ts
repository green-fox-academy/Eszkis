'use strict'


function rotateMatrix(matix: number[][]): number[][] {
  let newMatrix: number[][] = [];
  let line: number[] = [];

  for (let vertical = 0; vertical < matrix.length; vertical++) {
    for (let horizontal = matrix.length - 1; horizontal >= 0; horizontal--) {
      line.push(matrix[horizontal][vertical])
    }
    newMatrix.push(line)
    line = []
  }
  return newMatrix
}

const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotateMatrix(matrix));