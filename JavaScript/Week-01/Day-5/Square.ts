'use strict';

let lineCount: number = 6;
let i: number = 0;
let x: number = 0;
let y: number = 0;
let line: string = "";

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (i = 1; i <= lineCount; i++) {
    if (i === 1) {
        for (x = 1; x <= lineCount; x++) {
            line = line + "%";
        }
        console.log(line);
        line = "";
    } else if (i === lineCount) {
        for (x = 1; x <= lineCount; x++) {
            line = line + "%";
        }
        console.log(line);
        line = "";
    } else {
        line = "%"
        for (y = 1; y <= (lineCount - 2); y++) {
            line = line + " ";
        }
        line = line + "%";
        console.log(line);
        line = ""
    }
}
