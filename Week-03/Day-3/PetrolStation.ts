/* Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

class Station {
  gasAmount: number;

  constructor(gasAmountInput) {
    this.gasAmount = gasAmountInput
  }

  refill(car) {
    this.gasAmount -= car.capacity;
    car.gasAmount = car.capacity;
  }
}

class Car {
  gasAmount: number;
  capacity: number;

  constructor() {
    this.capacity = 100;
    this.gasAmount = 0;
  }
}

let station1 = new Station(10000);
let car1= new Car();

console.log(station1);
console.log(car1);
station1.refill(car1);
console.log(station1);
console.log(car1);

