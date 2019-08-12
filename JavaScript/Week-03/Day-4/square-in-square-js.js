'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//chose how to color th hexagon(1 color, different color for every circle, each of the different)

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

function square(size, x, y, color = randomColor()) {

  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, size, size);
  if (size > 10) {
    color = randomColor()
    square(size / 3, x + size / 3, y, color);
    square(size / 3, x, y + size / 3, color);
    square(size / 3, x + size / 3, y + 2 * size / 3, color);
    square(size / 3, x + 2 * size / 3, y + size / 3, color);
  }
}

square(canvas.height, 0, 0);