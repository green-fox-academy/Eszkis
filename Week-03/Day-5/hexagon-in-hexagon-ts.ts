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

  const hexagonHeight: number = Math.sin(Math.PI / 3) * size;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(x - size, y);//bal 
  ctx.lineTo(x - 0.5 * size, y + hexagonHeight);//alsó bal
  ctx.lineTo(x + 0.5 * size, y + hexagonHeight);//alsó jobb
  ctx.lineTo(x + size, y);//jobb
  ctx.lineTo(x + 0.5 * size, y - hexagonHeight);//felső jobb
  ctx.lineTo(x - 0.5 * size, y - hexagonHeight);//felső bal
  ctx.closePath();
  ctx.stroke();
  if (size > 10) {
    color = randomColor()
    setTimeout(function () {
      hexagon(size / 3 - Math.random() * 10, x - (2 * size) / 3, y, color);//bal
      hexagon(size / 3 - Math.random() * 10, x - size / 3, y + 2 * hexagonHeight / 3);//alsó bal
      hexagon(size / 3 - Math.random() * 10, x + size / 3, y + 2 * hexagonHeight / 3, color);//alsó jobb
      hexagon(size / 3 - Math.random() * 10, x + (2 * size) / 3, y, color);// jobb
      hexagon(size / 3 - Math.random() * 10, x + size / 3, y - 2 * hexagonHeight / 3);//felső jobb
      hexagon(size / 3 - Math.random() * 10, x - size / 3, y - 2 * hexagonHeight / 3);// felső bal

    }, 500);
  }
}

hexagon(150, (canvas.width) / 2, canvas.height / 2);