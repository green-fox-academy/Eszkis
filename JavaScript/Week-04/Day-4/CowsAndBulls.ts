'use strict';

export class CAB {
  state: String;
  digits: number[];
  guesCounter: number;

  constructor(digitsInput: number[] = [Math.floor(Math.random() * 9 + 1),
  Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1),
  Math.floor(Math.random() * 9 + 1)]) {
    this.state = 'playing'
    this.guesCounter = 0;
    this.digits = digitsInput;
    try {
      if (this.digits[0] < 10 && this.digits[1] < 10 && this.digits[2] < 10 && this.digits[3] < 10) {
        ''
      } else {
        throw new Error('One or more of the numbers are bigger then 9');
      }
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
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