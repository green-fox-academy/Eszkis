'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function triangles(size: number, x: number, y: number, color: string = randomColor()) {
  const triangleHight: number = Math.sin(Math.PI / 3) * size;
  const triangelCenter: number = Math.tan(Math.PI / 6) * (size / 2)
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x - size / 2, y - triangelCenter);
  ctx.lineTo(x, y + triangleHight - triangelCenter);
  ctx.lineTo(x + size / 2, y - triangelCenter);
  ctx.closePath();
  ctx.stroke();
  if (size > 10) {
    color = randomColor()
    setTimeout(function () {
      triangles(size / 2 - Math.random() * 5, x, y + triangelCenter);
      triangles(size / 2 - Math.random() * 5, x + size / 4, y - triangelCenter / 2);
      triangles(size / 2 - Math.random() * 5, x - size / 4, y - triangelCenter / 2);
    }, 500);
  }
}

triangles(400, canvas.width / 2, Math.tan(Math.PI / 6) * (400 / 2))

