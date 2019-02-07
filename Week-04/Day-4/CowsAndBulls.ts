'use strict';

class CAB {
  state: String;
  digits: number[];
  guesCounter: number;

  constructor(digitsInput: number[] = [Math.floor(Math.random() * 9 + 1),
  Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1),
  Math.floor(Math.random() * 9 + 1)]) {
    this.state = 'playing'
    this.guesCounter = 0;
    this.digits = digitsInput;
  }

  guess(quessNumber: number[]): string[] {
    let answer: string[] = [];
    for (let index: number = 0; index < 4; index++) {
      this.digits[index] === quessNumber[index] ? answer.push('cow') :
        this.digits.indexOf(quessNumber[index]) >= 0 ? answer.push('bull') : answer.push('')
    }
    answer.forEach(elements => elements === 'cow' ? this.state = 'finished' : this.state = 'playing')
    this.guesCounter++;
    return answer;
  }

  getInfo() {
    let info: any = new Object()
    info.state = this.state;
    info.digits = this.digits;
    info.numberOffGuesses = this.guesCounter;

    return info
  }
}

let CAB1 = new CAB([1, 2, 3, 4])
console.log(CAB1.getInfo());
console.log(CAB1.guess([5, 6, 7, 8]));
console.log(CAB1.guess([4, 3, 9, 0]));
console.log(CAB1.getInfo());
console.log(CAB1.guess([1, 2, 3, 4]));
console.log(CAB1.getInfo());