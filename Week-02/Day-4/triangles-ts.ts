'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function triangles(stepSize: number, maxSize: number, color: string = rgb) {
  const triangleHight: number = Math.sin(Math.PI / 3) * stepSize;
  const widhtMod: number = (canvas.width - maxSize * stepSize) / 2;
  const heightMod: number = (canvas.height - maxSize * triangleHight) / 2;

  for (let lineIn: number = 0; lineIn <= maxSize; lineIn++) {

    for (let x: number = 0; x <= (maxSize - lineIn) - 1; x++) {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.moveTo((x + 0.5 * lineIn) * stepSize + widhtMod, canvas.height - heightMod - lineIn * triangleHight);
      ctx.lineTo((x + 1 + 0.5 * lineIn) * stepSize + widhtMod, canvas.height - heightMod - lineIn * triangleHight);
      ctx.lineTo((x + 0.5 * (1 + lineIn)) * stepSize + widhtMod, (canvas.height - heightMod - (1 + lineIn) * triangleHight));
      ctx.closePath();
      ctx.stroke();
    }
  }
}

const red: number = Math.floor(Math.random() * 256);
const green: number = Math.floor(Math.random() * 256);
const blue: number = Math.floor(Math.random() * 256);
const rgb: string = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

triangles(20, 20,);


