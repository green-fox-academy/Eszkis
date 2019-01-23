'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function square(x: number, y: number) {
  let red: number = Math.floor(Math.random() * 256);
  let green: number = Math.floor(Math.random() * 256);
  let blue: number = Math.floor(Math.random() * 256);
  let color: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  console.log(color);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 50, 50);

}

square(123,123);
square(345,321);
square(513,234)