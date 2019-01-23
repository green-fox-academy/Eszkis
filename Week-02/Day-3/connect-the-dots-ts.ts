'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]
let list1: number[][] = [[10, 10], [290, 10], [290, 290], [10, 290]];
let list2: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connect(array: number[][]) {
  for (let x: number = 0; x < array.length; x++) {
    if (x === (array.length - 1)) {
      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(array[x][0], array[x][1]);
      ctx.lineTo(array[0][0], array[0][1]);
      ctx.stroke();
    } else {
      ctx.strokeStyle = "green";
      ctx.beginPath();
      ctx.moveTo(array[x][0], array[x][1]);
      ctx.lineTo(array[x + 1][0], array[x + 1][1]);
      ctx.stroke();
    }
  }
}

connect(list1);
connect(list2);