'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

//chose how to color th hexagon(1 color, different color for every circle, each of the different)

function randomColor() {
  const r = function () { return Math.floor(Math.random() * 256).toString() };
  return 'rgb('.concat(r(), ', ', r(), ', ', r(), ')');
}

function superHexagon(stepSize: number, layerNumber: number, colorStyle: boolean = false, color: string = randomColor()) {
  const hexagonHeight: number = Math.sin(Math.PI / 3) * stepSize;
  const loopWidhtMod: number = 1.5 * stepSize * (layerNumber);
  const loopHeightMod: number = hexagonHeight * (layerNumber)
  const widhtmod: number = (canvas.width - 2 * stepSize * (layerNumber - 1) * 1.5) / 2;
  const heightmod: number = (canvas.height + (1 - layerNumber) * 2 * hexagonHeight) / 2;

  for (let lineGrow: number = 0; lineGrow < layerNumber; lineGrow++) {
    for (let hexagonGrow: number = 0; hexagonGrow < Math.min(layerNumber + lineGrow, (layerNumber - 1) * 2 + 1); hexagonGrow++) {
      if (colorStyle === true) {
        color = randomColor()
      }
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.moveTo(widhtmod + (1.5 * lineGrow - 1) * stepSize, heightmod + (2 * hexagonGrow - lineGrow) * hexagonHeight);
      ctx.lineTo(widhtmod + (1.5 * lineGrow - 0.5) * stepSize, heightmod + (2 * hexagonGrow + 1 - lineGrow) * hexagonHeight);
      ctx.lineTo(widhtmod + (1.5 * lineGrow + 0.5) * stepSize, heightmod + (2 * hexagonGrow + 1 - lineGrow) * hexagonHeight);
      ctx.lineTo(widhtmod + (1.5 * lineGrow + 1) * stepSize, heightmod + (2 * hexagonGrow - lineGrow) * hexagonHeight);
      ctx.lineTo(widhtmod + (1.5 * lineGrow + 0.5) * stepSize, heightmod - (1 - 2 * hexagonGrow + lineGrow) * hexagonHeight);
      ctx.lineTo(widhtmod + (1.5 * lineGrow - 0.5) * stepSize, heightmod - (1 - 2 * hexagonGrow + lineGrow) * hexagonHeight);
      ctx.closePath();
      ctx.stroke();
    }
  }
  for (let lineLess: number = 0; lineLess < (layerNumber - 1); lineLess++) {
    for (let hexagonLess: number = 0; hexagonLess < ((layerNumber - 1) * 2 - lineLess); hexagonLess++) {
      if (colorStyle === true) {
        color = randomColor()
      }
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.moveTo(widhtmod + (1.5 * lineLess - 1) * stepSize + loopWidhtMod, heightmod + (2 * (1 + hexagonLess) + lineLess) * hexagonHeight - loopHeightMod);
      ctx.lineTo(widhtmod + (1.5 * lineLess - 0.5) * stepSize + loopWidhtMod, heightmod + (2 * (1 + hexagonLess) + 1 + lineLess) * hexagonHeight - loopHeightMod);
      ctx.lineTo(widhtmod + (1.5 * lineLess + 0.5) * stepSize + loopWidhtMod, heightmod + (2 * (1 + hexagonLess) + 1 + lineLess) * hexagonHeight - loopHeightMod);
      ctx.lineTo(widhtmod + (1.5 * lineLess + 1) * stepSize + loopWidhtMod, heightmod + (2 * (1 + hexagonLess) + lineLess) * hexagonHeight - loopHeightMod);
      ctx.lineTo(widhtmod + (1.5 * lineLess + 0.5) * stepSize + loopWidhtMod, heightmod - (1 - 2 * (1 + hexagonLess) - lineLess) * hexagonHeight - loopHeightMod);
      ctx.lineTo(widhtmod + (1.5 * lineLess - 0.5) * stepSize + loopWidhtMod, heightmod - (1 - 2 * (1 + hexagonLess) - lineLess) * hexagonHeight - loopHeightMod);
      ctx.closePath();
      ctx.stroke();
    }
  }
}

superHexagon(10, 3,true);