'use strict';

let lineCount: number = 4;
let i:number=0;
let x:number=0;
let y:number=0;
let line:string="";
let lineü:string="";

// Write a program that draws a triangle like this:
//
//  *
// ***
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for(i=1;i<=lineCount;i++){
    for(y=(lineCount-i-1);y>=0;y--){
        lineü=lineü+" ";
    }
    for(x=0;x<i;x++){
        line=line+"*";
    }
    console.log(lineü+line);
    line="";
    lineü="";
}