'use strict';

let i:number=0;
let x:number=8;
let y:number=0;
let line:string;
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

function even(x:number){
    if(x%2===0){
        return true;
    }else{
        return false;
    }
}

for(i=1;i<=x;i++){
    if(even(i)){
        line="";
        for(y=1;y<=(x/2);y++){
            line=line+" %";
        }
        console.log(line);
        line="";
    }else{
        line="";
        for(y=1;y<=(x/2);y++){
            line=line+"% ";
        }
        console.log(line);
        line="";
    }

}