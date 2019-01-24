'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

function superHexagon(stepSize: number, layerNumber: number, color: string = randomColor()) {
  const hexagonWidht: number = Math.sin(Math.PI / 3) * stepSize;
  const center:number=(canvas.height-stepSize)/2;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.moveTo(0 + center, 0 + center);
  ctx.lineTo(0 + center, stepSize + center);
  ctx.lineTo(hexagonWidht + center, stepSize * 1.5 + center);
  ctx.lineTo(hexagonWidht * 2 + center, stepSize + center);
  ctx.lineTo(hexagonWidht * 2 + center, 0 + center);
  ctx.lineTo(hexagonWidht + center, center - stepSize * 0.5);
  ctx.closePath();
  ctx.stroke();

}


superHexagon(20, 2);


