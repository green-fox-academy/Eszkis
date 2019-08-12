'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function rainbow(size: number, color: string) {

  ctx.fillStyle = color;
  ctx.fillRect((canvas.width - size) / 2, (canvas.height - size) / 2, size, size);
}

for (let x: number = 600; x >1; x -=2) {
  let red: number = Math.floor(Math.random() * 256);
  let green: number = Math.floor(Math.random() * 256);
  let blue: number = Math.floor(Math.random() * 256);
  let color: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  rainbow(x, color);
}