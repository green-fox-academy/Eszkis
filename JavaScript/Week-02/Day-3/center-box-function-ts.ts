'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.


function squareCenter(size:number) {
  let red: number = Math.floor(Math.random() * 256);
  let green: number = Math.floor(Math.random() * 256);
  let blue: number = Math.floor(Math.random() * 256);
  let color: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  ctx.fillStyle = color;
  ctx.fillRect(canvas.width/2-size/2,canvas.height/2-size/2 ,size,size);  
}

squareCenter(200);
squareCenter(150);
squareCenter(50);