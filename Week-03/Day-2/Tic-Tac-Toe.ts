'use strict';

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

let fs = require('fs');

function ticTacResult(fileName: string) {
  let content: string[] = fs.readFileSync(fileName, 'utf-8').split('\r\n');
  let array: string[][] = [];
  let winner: string = 'Draw';
  content.forEach(function (value) {
    array.push(value.split(''))
  })

  if (array[0][0] === array[1][1] && array[0][0] === array[2][2]) {
    winner = array[0][0];
  } else if (array[0][3] === array[1][1] && array[0][3] === array[3][0]) {
    winner = array[0][3];
  }
  for (let x: number = 0; x < 3; x++) {
    if (array[x][0] === array[x][1] && array[x][1] === array[x][2]) {
      winner = array[x][0];
    } else if (array[0][x] === array[1][x] && array[1][x] === array[2][x]) {
      winner = array[0][x];
    }
  }
  return winner;
}

console.log(ticTacResult('win-o.txt'))
// Should print "O"

console.log(ticTacResult('win-x.txt'))
// Should print "X"

console.log(ticTacResult('draw.txt'))
// Should print "Draw"