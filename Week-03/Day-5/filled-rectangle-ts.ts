'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//chose how to color th hexagon(1 color, different color for every circle, each of the different)

function hexagon(size: number, x: number, y: number, color = randomColor()) {

  ctx.fillStyle = color;
  ctx.fillRect(x - size / 2, y - size / 2, size, size);

  if (size > 10) {
    color = randomColor()
    setTimeout(function () {
      hexagon(size / 3/*  - Math.random() * 10 */, x - size, y - size, color);//felső bal
      hexagon(size / 3/*  - Math.random() * 10 */, x + size, y - size, color);//felső jobb
      hexagon(size / 3/*  - Math.random() * 10 */, x - size, y + size, color);//alsó bal
      hexagon(size / 3/*  - Math.random() * 10 */, x + size, y + size, color);//alsó jobb
      hexagon(size / 3/*  - Math.random() * 10 */, x - size, y, color);// bal
      hexagon(size / 3/*  - Math.random() * 10 */, x + size, y, color);// jobb
      hexagon(size / 3/*  - Math.random() * 10 */, x, y + size, color);//alsó 
      hexagon(size / 3/*  - Math.random() * 10 */, x, y - size, color);//felső 
    }, 500);
  }
}

hexagon(100, (canvas.width) / 2, canvas.height / 2);