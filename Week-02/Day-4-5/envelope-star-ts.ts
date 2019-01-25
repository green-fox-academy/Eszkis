'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function LinePlay(stepSize: number) {
  let size: number = canvas.height / 2

  for (let draw = 0; draw < (canvas.height / 2); draw += stepSize) {
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(draw, size);
    ctx.lineTo(size, size - draw);
    ctx.stroke();
  }
  for (let draw = 0; draw < (canvas.width / 2); draw += stepSize) {
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(size, draw);
    ctx.lineTo(size + draw, size);
    ctx.stroke();
  }
  for (let draw = 0; draw < (canvas.height / 2); draw += stepSize) {
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(size * 2 - draw, size);
    ctx.lineTo(size, size + draw);
    ctx.stroke();
  }
  for (let draw = 0; draw < (canvas.width / 2); draw += stepSize) {
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(size, size * 2 - draw);
    ctx.lineTo(size - draw, size);
    ctx.stroke();
  }
}

LinePlay(10);