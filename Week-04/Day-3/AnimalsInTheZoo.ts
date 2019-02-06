'use strict'

import { extname } from "path";

function genderBender() {
  if (Math.floor(Math.random() * 10) % 2 === 0) {
    return 'male'
  } else {
    return 'female'
  }

}

abstract class Animal {
  name: string;
  age: number;
  gender: string;
  hunger: number;

  constructor(nameInput: string) {
    this.name = nameInput;
  }

  abstract getName(): void;
  abstract breed(): void;
  abstract eat(): void;
  abstract poop(): void;
}

class Bird extends (Animal) {

  constructor(nameInput: string) {
    super(nameInput)
    this.age = Math.floor(Math.random() * 10) + 1;
    this.gender = genderBender();
    this.hunger = 10;
  }

  getName() {
    return this.name;
  }

  breed() {
    return 'eggs'
  }
  eat() {
    this.hunger--
  }

  poop() {
    this.hunger++
  }
}
class Mammal extends (Animal) {

  constructor(nameInput: string) {
    super(nameInput)
    this.age = Math.floor(Math.random() * 10) + 1;
    this.gender = genderBender();
    this.hunger = 10;
  }

  getName() {
    return this.name;
  }

  breed() {
    return 'pushing miniature versions out'
  }
  eat() {
    this.hunger--
  }

  poop() {
    this.hunger++
  }
}

class Reptile extends (Animal) {

  constructor(nameInput: string) {
    super(nameInput)
    this.age = Math.floor(Math.random() * 10) + 1;
    this.gender = genderBender();
    this.hunger = 50;
  }

  getName() {
    return this.name;
  }

  breed() {
    return 'eggs'
  }
  eat() {
    this.hunger--
  }

  poop() {
    this.hunger++
  }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed() + '.');
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed() + '.');
console.log("A " + bird.getName() + " is breeding by " + bird.breed() + '.');

export { Animal }
export { genderBender }