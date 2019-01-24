'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function LinePlay(stepSize: number) {

  for (let x = 0; x < canvas.height; x = x + stepSize) {
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(0, x);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  
  for (let x = 0; x < canvas.width; x = x + stepSize) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(canvas.width, x);
    ctx.stroke();
  }


}

LinePlay(5);