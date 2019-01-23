'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function center(x:number,y:number){
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(300,200);
ctx.stroke();
}

for(let x:number=0;x<=canvas.width;x=x+20){
  center(x,0);
}
for(let x:number=0;x<=canvas.width;x=x+20){
  center(x,400);
}
for(let y:number=0;y<=canvas.height;y=y+20){
  center(0,y);
}
for(let y:number=0;y<=canvas.height;y=y+20){
  center(600,y);
}