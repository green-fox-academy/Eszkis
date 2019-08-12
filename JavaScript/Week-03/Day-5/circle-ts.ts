'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function circle(size: number, x: number, y: number, color: string = randomColor()) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.stroke();
  if (size > 10) {
    color = randomColor()
    setTimeout(function () {
      ctx.strokeStyle = color;
      circle(size / 2 - Math.random() * 5, x, y - size / 2);
      circle(size / 2 - Math.random() * 5, x - Math.sin(Math.PI / 3) * size / 2, y + Math.sin(Math.PI / 6) * size / 2);
      circle(size / 2 - Math.random() * 5, x + Math.sin(Math.PI / 3) * size / 2, y + Math.sin(Math.PI / 6) * size / 2);
    }, 500);
  }
}

circle(canvas.width / 2, canvas.width / 2, canvas.height / 2)

