'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
let colors: string[] = ['gainsboro', 'lightgray ', 'silver', 'darkgray ', 'gray ', 'dimgray ', 'lightslategray ', 'slategray ', 'darkslategray ']

function square(count: number) {
  for (let x: number = 0; x < count; x++) {
    let color: string = '';
    color = colors[x % colors.length];
    let size: number = Math.floor(Math.random() * 20);
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(Math.random() * 580), Math.floor(Math.random() * 380), size, size);
  }
}

square(150);