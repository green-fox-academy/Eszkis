'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function kochline(size: number, xstart: number, ystart: number, angle: number, color = randomColor()) {
  let x1: number = xstart;
  let y1: number = ystart;
  let x2: number = 0;
  let y2: number = 0;
  let xend: number = Math.sin(angle) * size;
  let yend: number = Math.cos(angle) * size;

  //draw one line
  ctx.lineWidth = 1;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(xstart + xend, ystart - yend);
  ctx.stroke();
  ctx.closePath();

  if (size > 10) {
    color = randomColor();
    x1 = xstart + xend / 3;
    y1 = ystart - yend / 3;
    x2 = xstart + xend / 3 * 2;
    y2 = ystart - yend / 3 * 2;
    //delete middle
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    //draw triangle
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + Math.sin(angle - Math.PI / 3) * size / 3, y1 - Math.cos(angle - Math.PI / 3) * size / 3);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    setTimeout(function () {
      kochline(size / 3 - Math.random() * 5, xstart, ystart, angle, color);
      kochline(size / 3 - Math.random() * 5, x2, y2, angle, color);
      kochline(size / 3 - Math.random() * 5, x1, y1, angle + 5 * Math.PI / 3, color);
      kochline(size / 3 - Math.random() * 5, x1 + Math.sin(angle - Math.PI / 3) * size / 3, y1 - Math.cos(angle - Math.PI / 3) * size / 3, angle + Math.PI / 3, color);
    }, 500)
  }
}

const size: number = 250

kochline(size, (canvas.width - size) / 2, (canvas.height - size * Math.sin(Math.PI / 3) + (size / 3) * Math.sin(Math.PI / 3)) / 2, Math.PI / 2, 'black');
kochline(size, canvas.width - (canvas.width - size) / 2, (canvas.height - size * Math.sin(Math.PI / 3) + (size / 3) * Math.sin(Math.PI / 3)) / 2, (Math.PI / 6) * 7, 'black');
kochline(size, canvas.width / 2, canvas.height - (canvas.height - size * Math.sin(Math.PI / 3) - (size / 3) * Math.sin(Math.PI / 3)) / 2, -(Math.PI / 6), 'black');