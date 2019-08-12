'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

let color: boolean = true;
for (let x: number = 0; x <= 600; x++) {
  for (let y: number = 0; y <= 400; y++) {
    if (color) {
      ctx.fillStyle = 'black';
      ctx.fillRect(x * 50, y * 50, 50, 50);
      color = false;
    } else {
      ctx.fillStyle = 'white';
      ctx.fillRect(x * 50, y * 50, 50, 50);
      color = true;
    }
  }
}