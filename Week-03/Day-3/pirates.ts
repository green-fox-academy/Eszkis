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
  score: number;
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
    this.aliveCheck();
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

class BattleApp {

  ship1: Ship;
  ship2: Ship;

  constructor(ship1Input: Ship, ship2Input: Ship) {
    this.ship1 = ship1Input;
    this.ship2 = ship2Input;
    this.ship1.fillShip(5);
    this.ship2.fillShip(6);
  }

  startBattle() {
    this.ship1.battle(this.ship2)
  }
}

class Armada {
  ships: Ship[] = []

  constructor() {
    this.ships = []
  }

  fillArmada(numberOfShips: number, numberOfCrew: number) {
    for (let index: number = 0; index < numberOfShips; index++) {
      this.ships.push(new Ship);
      this.ships[index].fillShip(numberOfCrew);
      this.ships[index].calculateScore();
    }
  }

  war(Armada: Armada) {
    for (let armada1Ready: number = 0; armada1Ready < this.ships.length; armada1Ready++) {
      this.ships[armada1Ready].calculateScore();
    }

    for (let armada2Ready: number = 0; armada2Ready < Armada.ships.length; armada2Ready++) {
      Armada.ships[armada2Ready].calculateScore();
    }

    let armada1ShipNumber: number = 0;
    let armada2ShipNumber: number = 0;
    let winner: boolean = true;

    while (armada1ShipNumber < this.ships.length && armada2ShipNumber < Armada.ships.length) {
      if (this.ships[armada1ShipNumber].score > Armada.ships[armada2ShipNumber].score) {
        ++armada2ShipNumber;
        winner = true;
      } else {
        ++armada1ShipNumber;
        winner = false;
      }
    }
    return winner;
  }
}

class WarApp {
  armada1: Armada;
  armada2: Armada;

  constructor(armada1Input: Armada, armada2Input: Armada) {
    this.armada1 = armada1Input;
    this.armada2 = armada2Input;
  }

  war() {
    return this.armada1.war(this.armada2)
  }
}

let armada1 = new Armada;
let armada2 = new Armada;
armada1.fillArmada(3, 6);
armada2.fillArmada(3, 5);
let WarApp1 = new WarApp(armada1, armada2);
console.log(WarApp1.war());