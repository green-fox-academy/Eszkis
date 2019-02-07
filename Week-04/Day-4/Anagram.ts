'use strict'

export function AnagramCheck(firstWord: string, secondWord: string): boolean {
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();
  let firstWordReversed = '';
  for (let index: number = firstWord.length - 1; index >= 0; index--) {
    firstWordReversed += firstWord.slice(index, index + 1);
  }
  return firstWordReversed === secondWord ? true : false;
}

console.log(AnagramCheck('ASDF', 'fdsa'));
