'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

function purpleSteps(stepNumber: number, size:number) {
  for (let x = 0; x < stepNumber; x++) {
    ctx.fillStyle = 'Purple'
    ctx.fillRect(size * x, size * x, size, size)
  }
}

purpleSteps(5,50);