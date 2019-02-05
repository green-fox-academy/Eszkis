'use strict'

class Aircraft {
  type: string;
  ammoStorage: number;
  maxAmmo: number;
  baseDMG: number;
  allDmg: number;
  pirority: boolean;

  constructor(typeInput: string) {
    this.ammoStorage = 0;
    this.allDmg = 0;
    this.type = typeInput;
    if (this.type === 'F16') {
      this.maxAmmo = 8;
      this.baseDMG = 30;
      this.pirority = false;
    } else if (this.type === 'F35') {
      this.maxAmmo = 12;
      this.baseDMG = 50;
      this.pirority = true;
    }
  }

  fight() {
    this.ammoStorage = 0;
    return this.allDmg
  }

  refill(ammoNumber: number) {
    if (ammoNumber > this.maxAmmo) {
      ammoNumber = ammoNumber - this.maxAmmo + this.ammoStorage;
      this.ammoStorage = this.maxAmmo;
      this.allDmg = this.ammoStorage * this.baseDMG;
      return ammoNumber;
    } else {
      this.ammoStorage = ammoNumber
      this.allDmg = this.ammoStorage * this.baseDMG;
      ammoNumber = 0;
      return ammoNumber;

    }

  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDMG}, All Damage: ${this.allDmg}`;
  }

  isPriority() {
    return this.pirority;
  }
}

class Carrier {
  aircrafts: Aircraft[];
  ammoStorage: number;
  HP: number;
  allDmg: number;

  constructor(ammoStorageInput: number, HPInput: number) {
    this.aircrafts = [];
    this.ammoStorage = ammoStorageInput;
    this.HP = HPInput;
    this.allDmg = 0;
  }

  add(aircraft: Aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {
    try {
      if (this.ammoStorage === 0) {
        throw "The ammostorage is empty Sir!";
      } else {
        this.aircrafts.forEach(aircraft => {
          if (this.ammoStorage > 0 && aircraft.pirority) {
            if (this.ammoStorage > aircraft.maxAmmo - aircraft.ammoStorage) {
              aircraft.refill(aircraft.maxAmmo - aircraft.ammoStorage);
              this.ammoStorage -= aircraft.ammoStorage;
            } else {
              aircraft.refill(this.ammoStorage);
              this.ammoStorage = 0
            }
          }
        })
        this.aircrafts.forEach(aircraft => {
          if (this.ammoStorage > 0 && !aircraft.pirority) {
            if (this.ammoStorage > aircraft.maxAmmo - aircraft.ammoStorage) {
              aircraft.refill(aircraft.maxAmmo - aircraft.ammoStorage);
              this.ammoStorage -= aircraft.ammoStorage;
            } else {
              aircraft.refill(this.ammoStorage);
              this.ammoStorage = 0
            }
          }
        })
      }
      this.aircrafts.forEach(aircraft => this.allDmg += aircraft.allDmg);
    }
    catch (err) {
      console.log(err);
    }
  }

  fight(otherCarrier: Carrier) {
    let allDmg: number = 0;
    this.aircrafts.forEach(aircraft => allDmg += aircraft.allDmg);
    otherCarrier.HP -= allDmg;
    this.allDmg = 0;
  }

  getStatus() {
    if (this.HP <= 0) {
      console.log(`It's dead Jim`);
    } else {
      console.log(`HP: ${this.HP}, Aircraft count: ${this.aircrafts.length}, AmmoStorage: ${this.ammoStorage}, Total damage: ${this.allDmg}`);
      this.aircrafts.forEach(aircraft => console.log(aircraft.getStatus()));
    }
  }
}

let airC1 = new Aircraft('F16');
let airC2 = new Aircraft('F16');
let airC3 = new Aircraft('F35');
let Carrier1 = new Carrier(50, 1000);
let airC4 = new Aircraft('F16');
let airC5 = new Aircraft('F16');
let airC6 = new Aircraft('F35');
let Carrier2 = new Carrier(14, 1000);
Carrier1.add(airC1);
Carrier1.add(airC2);
Carrier1.add(airC3);
Carrier1.fill();
Carrier1.getStatus();
Carrier2.add(airC4);
Carrier2.add(airC5);
Carrier2.add(airC6);
Carrier2.fill();
Carrier2.getStatus();
Carrier1.fight(Carrier2);
Carrier1.getStatus();
Carrier2.getStatus();