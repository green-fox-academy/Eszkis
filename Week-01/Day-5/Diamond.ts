'use strict';

let lineCount: number = 11;
let maxline: number = 0;
let line: string = "";

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

for (let i: number = 1; i <= maxline; i++) {
    for (let y: number = (maxline - i - 1); y >= 0; y--) {
        line = line + " ";
    }
    for (let x: number = 1; x <= ((i - 1) * 2 + 1); x++) {
        line = line + "*";
    }
    console.log(line);
    line = "";

}
if (lineCount % 2 === 0) {
    for (let i: number = (lineCount - maxline); i > 0; i--) {
        for (let y: number = 0; y < (lineCount - maxline - i); y++) {
            line = line + " ";
        }
        for (let x: number = 1; x <= ((i - 1) * 2 + 1); x++) {
            line = line + "*";
        }
        console.log(line);
        line = "";
    }
} else
    for (let i: number = (lineCount - maxline); i > 0; i--) {
        for (let y: number = 0; y <= (lineCount - maxline - i); y++) {
            line = line + " ";
        }
        for (let x: number = 1; x <= ((i - 1) * 2 + 1); x++) {
            line = line + "*";
        }
        console.log(line);
        line = "";
    }