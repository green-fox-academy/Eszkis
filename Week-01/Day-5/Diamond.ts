'use strict';

let lineCount: number = 7;
let i: number = 0;
let x: number = 0;
let y: number = 0;
let maxline: number = 0;
let line: string = "";
let lineü: string = "";

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

maxline = Math.ceil(lineCount / 2);
//console.log(maxline);

for (i = 1; i <= maxline; i++) {
    for (y = (maxline - i - 1); y >= 0; y--) {
        lineü = lineü + " ";
    }
    for (x = 1; x <= ((i - 1) * 2 + 1); x++) {
        line = line + "*";
    }
    console.log(lineü + line);
    line = "";
    lineü = "";
}

for (i = (lineCount-maxline); i >=0; i--) {
    for (y =0 ; y <= (lineCount-maxline-i); y++) {
        lineü = lineü + " ";
    }
    for (x = 1; x <= ((i - 1) * 2 + 1); x++) {
        line = line + "*";
    }
    console.log(lineü + line);
    line = "";
    lineü = "";
}
