'use strict';

let fstr:string="This is a simple task, that is have to finish soon";
let sstr:string="that";
let startindex:number;

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string) : number {
 if(fstr.search(sstr)>=0){
    startindex=fstr.search(sstr)
    return startindex;
 } else{
    return -1;
 }
}

/*
//  Example
console.log(substr("this is what I'm searching in", "searching"));
// should print: `17`
console.log(substr("this is what I'm searching in", "not"));
// should print: `-1`
*/

fstr="this is what I'm searching in";
sstr="searching"
console.log(substr(fstr,sstr));
sstr="not"
console.log(substr(fstr,sstr));