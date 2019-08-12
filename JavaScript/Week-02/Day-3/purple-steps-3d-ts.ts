'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
function purpleSteps(stepNumber: number, size:number) {
  let start:number=0;
  for (let x = 0; x <= stepNumber; x++) {
    ctx.fillStyle = 'Purple'
    ctx.fillRect(start,start, size*(x+1), size*(x+1))
    start+=size*(x+1);
  }
}

purpleSteps(5,10);