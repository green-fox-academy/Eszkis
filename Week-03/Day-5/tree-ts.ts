'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function tree(size: number, x: number, y: number, angle: number, color = randomColor()) {

  let xStart: number = x;
  let yStart: number = y;
  let xEnd: number = x + Math.sin(angle) * size;
  let yEnd: number = y - Math.cos(angle) * size;

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();

  if (size > 10) {
    color = randomColor();
    setTimeout(function () {
      tree(size * 0.7, xEnd, yEnd, 0)
      tree(size * 0.7, xEnd, yEnd, angle + Math.PI / 8)
      tree(size * 0.7, xEnd, yEnd, angle - Math.PI / 8)
    }, 500)
  }
}

tree(50, canvas.width / 2, canvas.height, 0, 'black');