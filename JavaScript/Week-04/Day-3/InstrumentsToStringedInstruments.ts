'use strict'

abstract class Instrument {
  abstract name: string;
  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  constructor(numberOfStringsInput: number) {
    super();
    this.numberOfStrings = numberOfStringsInput;
  }

  sound() {
    this.play();
  }
}

class ElectricGuitar extends StringedInstrument {
  name: string

  constructor(numberOfStringsInput = 6, nameInput = 'Electric Guitar') {
    super(numberOfStringsInput);
    this.name = nameInput
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Twang`);
  }
}

class BassGuitar extends StringedInstrument {
  name: string

  constructor(numberOfStringsInput = 4, nameInput = 'Bass Guitar') {
    super(numberOfStringsInput);
    this.name = nameInput
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Duum-duum-duum`);
  }
}

class Violin extends StringedInstrument {
  name: string

  constructor(nameInput = 'Violin', numberOfStringsInput = 4) {
    super(numberOfStringsInput);
    this.name = nameInput
  }

  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes Screech`);
  }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();