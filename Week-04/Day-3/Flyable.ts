'use strict'

import {Animal} from './AnimalsInTheZoo'
import {genderBender} from './AnimalsInTheZoo'

interface Flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {
  size: number;
  weight: number;
  speed: number;
}

class Helicopter extends Vehicle implements Flyable {

  constructor() {
    super();
    this.size = 100;
    this.weight = 500;
    this.speed = 50;
  }

  land() {
    return 'On the ground.'
  }

  fly() {
    return 'In the air.'
  }

  takeOff() {
    return 'It is taking off.'
  }
}

class Bird extends Animal implements Flyable{

  constructor(nameInput: string) {
    super(nameInput)
    this.age = Math.floor(Math.random() * 10) + 1;
    this.gender = genderBender();
    this.hunger = 50;
  }

  land() {
    return 'On the ground.'
  }

  fly() {
    return 'In the air.'
  }

  takeOff() {
    return 'It is taking off.'
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