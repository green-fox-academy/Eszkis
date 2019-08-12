'use strict'

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  bookingCode: string;
  bookingDate: string;

  constructor() {
    this.bookingCode = this.getCodeBooking();
    this.bookingDate = this.getDowBooking();
  }

  getDowBooking() {
    let arrayDOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    return arrayDOW[Math.floor(Math.random() * 7)]
  };

  getCodeBooking() {
    let code: string = '';
    for (let index = 0; index < 8; index++) {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        code += String.fromCharCode(Math.floor(Math.random() * 10) + 48)
      } else {
        code += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      }
    }
    return code
  };

  getInfo() {
    return `Booking# ${this.bookingCode} for ${this.bookingDate}`;
  }
}

let bookingDat: Reservation[] = [];

for (let count: number = 0; count < 10; count++) {
  bookingDat.push(new Reservation)
}

bookingDat.forEach(elements => console.log(elements.getInfo()));