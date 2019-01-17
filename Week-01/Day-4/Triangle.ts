'use strict';

let lineCount: number = 4;
let i:number=0;
let x:number=0;
let line:string="";

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for(i=1;i<=lineCount;i++){
    for(x=1;x<=i;x++){
        line=line+"*";
    }
    console.log(line);
    line="";
}