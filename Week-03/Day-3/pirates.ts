'use strict';

class Pirate {

  private rumNumber: number;
  private status: string;

  constructor() {
    this.rumNumber = 0;
    this.status = 'awake';
  }

  drinksome() {
    if (this.status === 'dead') {
      console.log('He\'s dead');
    } else if (this.status === 'sleep') {
      console.log('This pirate is asleep.');
    } else {
      this.rumNumber++;
    }
    if (this.rumNumber > 4) {
      this.status = 'sleep';
    }
  }

  howItGoingMate() {
    if (this.status === 'dead') {
      console.log('This pirate is dead');
    } else if (this.status === 'sleep') {
      console.log('This pirate is asleep.');
    } else if (this.rumNumber < 5) {
      for (let x: number = 0; x < (Math.random() * 4); x++) {
        console.log('Pour me anudder');
        this.rumNumber++;
      }
    } else {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.status = 'sleep';
      this.rumNumber = 0;
    }
  }

  die() {
    this.status = 'dead';
    this.rumNumber = 0;
  }

  brawl(Pirate) {
    if (this.status === 'dead' || this.status === 'sleep' || Pirate.status === 'dead' || Pirate.status === 'sleep') {
      console.log('one of the pirate is dead/asleep');
    } else {
      let chance: number = Math.ceil(Math.random() * 3)
      if (chance === 1) {
        this.status = 'dead';
        console.log('First pirate died');
      } else if (chance === 2) {
        Pirate.status = 'dead';
        console.log('Second pirate died');
      } else {
        this.status = 'sleep';
        Pirate.status = 'sleep';
        console.log('Both pirate passed out');
      }
    }
  }

  getInfo() {
    let info = {
      status: this.status,
      rumNumber: this.rumNumber,
    }
    return info
  }

  wakeUp() {
    this.status = 'awake';
  }
}

class Ship {
  crew: Pirate[];
  private score: number;
  private captian: Pirate;
  private aliveCrew: number;

  constructor() {
    this.crew = [];
  }

  fillShip(crewNumber: number) {
    for (let x: number = 0; x < crewNumber; x++) {
      this.crew.push(new Pirate);
    }
    this.captian = this.crew[0];
  }

  shipStatus() {
    this.captian.getInfo();
    this.aliveCheck();
    console.log(this.captian.getInfo());
    console.log(`${this.aliveCrew} crew member alive in this ship`);
  }

  aliveCheck() {
    this.aliveCrew = this.crew.filter(value => value.getInfo().status !== 'dead').length;
  }

  calculateScore() {
    this.score = this.aliveCrew - this.captian.getInfo().rumNumber
  }

  party() {
    for (let index: number = 0; index < this.crew.length; index++) {
      for (let drinknumber: number = 0; drinknumber < 1 + Math.floor(Math.random() * 5); drinknumber++) {
        this.crew[index].drinksome();
      }
    }
  }

  death() {
    for (let deathNumber: number = 1; deathNumber < 1 + Math.floor(this.crew.length * Math.random()); deathNumber++) {
      this.crew[deathNumber].die();
    }
  }

  battle(ship: Ship) {
    this.calculateScore();
    ship.calculateScore();
    if (this.score > ship.score) {
      this.party();
      ship.death();
      console.log(true);
    } else {
      this.death();
      ship.party();
      console.log(false);
    }
  }
}

