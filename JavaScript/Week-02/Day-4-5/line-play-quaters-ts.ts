'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function LinePlayQuaters(stepSize: number, quaterNumber: number) {
  for (let moveY: number = 0; moveY < canvas.height; moveY += ((canvas.height / Math.sqrt(quaterNumber)))) {
    for (let moveX: number = 0; moveX < canvas.width; moveX += ((canvas.width / Math.sqrt(quaterNumber)))) {
      for (let drawX = 0; drawX < (canvas.height / Math.sqrt(quaterNumber)); drawX += stepSize) {
        ctx.strokeStyle = "darkred";
        ctx.beginPath();
        ctx.moveTo(moveX, moveY + drawX);
        ctx.lineTo(moveX + drawX, moveY + (canvas.height / (Math.sqrt(quaterNumber))));
        ctx.stroke();
      }
      for (let drawY = 0; drawY < (canvas.width / Math.sqrt(quaterNumber)); drawY += stepSize) {
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(moveX + drawY, moveY);
        ctx.lineTo(moveX + (canvas.width / Math.sqrt(quaterNumber)), moveY + drawY);
        ctx.stroke();
      }
    }
  }
}

LinePlayQuaters(5, 100);