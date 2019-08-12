'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function hexagon(size: number, borderSize: number, x: number, y: number, color = randomColor()) {

  ctx.lineWidth = borderSize
  ctx.strokeStyle = color;
  ctx.strokeRect(x - size / 2, y - size / 2, size, size);
  ctx.stroke;
  if (size > 10) {
    color = randomColor()
    setTimeout(function () {
      hexagon(size / 2 - Math.random() * 10, borderSize / 2, x - size / 2, y - size / 2, color);//felső bal
      hexagon(size / 2 - Math.random() * 10, borderSize / 2, x + size / 2, y - size / 2, color);//felső jobb
      hexagon(size / 2 - Math.random() * 10, borderSize / 2, x - size / 2, y + size / 2, color);//alsó bal
      hexagon(size / 2 - Math.random() * 10, borderSize / 2, x + size / 2, y + size / 2, color);//alsó jobb
    }, 500);
  }
}

hexagon(150, 10, (canvas.width) / 2, canvas.height / 2);