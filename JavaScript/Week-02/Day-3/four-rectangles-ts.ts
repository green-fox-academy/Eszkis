'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.


function square(count: number) {
  for (let x: number = 0; x < count; x++) {
    let red: number = Math.floor(Math.random() * 256);
    let green: number = Math.floor(Math.random() * 256);
    let blue: number = Math.floor(Math.random() * 256);
    let color: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    console.log(color);
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(Math.random() * 400), Math.floor(Math.random() * 300), Math.floor(Math.random() * 200), Math.floor(Math.random() * 200));
  }
}

square(4);