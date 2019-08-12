'use strict'

export class Sum {
  listOfNumber: number[];

  constructor() {
    this.listOfNumber = []
  }

  addNumber(newNumber: number) {
    this.listOfNumber.push(newNumber)
  }

  sumNumber() {
    let sums: number = 0;
    this.listOfNumber.forEach(value => sums += value)
    return sums
  }
}