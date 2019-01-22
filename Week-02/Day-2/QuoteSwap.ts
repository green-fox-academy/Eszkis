'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

// Expected output: "What I cannot create I do not understand."

function quoteSwap(originlArray: string[], swapString1: string, swapString2: string) {
  [originlArray[originlArray.indexOf(swapString1)], originlArray[originlArray.indexOf(swapString2)]] = [originlArray[originlArray.indexOf(swapString2)], originlArray[originlArray.indexOf(swapString1)]]
  let returnString:string='';
  for(let x:number=0;x<originlArray.length;x++){
    returnString=returnString.concat(originlArray[x]);
    returnString= returnString.concat(' ')
  }
  return returnString;
}

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
console.log(quoteSwap(words, 'cannot', 'do'));