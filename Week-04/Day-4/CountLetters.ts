'use strict'

export function genCharArray(char1: string, char2: string) {
  let array: any[][] = [];
  for (let index: number = char1.charCodeAt(0); index <= char2.charCodeAt(0); index++) {
    array.push([String.fromCharCode(index), 0]);
  }
  return array
}

export function CountLetters(sentence: string) {
  let content: string[] = [];
  for (let index: number = 0; index < sentence.length; index++) {
    content.push(sentence.charAt(index).toLowerCase())
  }
  let lowerCase: any[] = content.map(value => value.charCodeAt(0) - 97);
  let charArray: any[][] = genCharArray('a', 'z');
  for (let index: number = 0; index < lowerCase.length; index++) {
    if (lowerCase[index] >= 0) {
      charArray[lowerCase[index]][1]++;
    } else { }
  }
  charArray.sort(function (a, b) {
    return b[1] - a[1];
  })
  let usedChars = charArray.filter(array => array[1] > 0);
  usedChars.sort();
  return usedChars;
}