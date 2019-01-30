import { Animal } from './Animal'

/* Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal */

class Farm {
  animals: Animal[]
  size: number

  constructor() {
    this.size = 5
    this.animals = []
  }

  add(newAnimal: Animal) {
    this.animals.push(newAnimal)

  }

  breed() {
    console.log(this.size);
    console.log(this.animals.length);
    if (this.size > this.animals.length) {
      let newAnimal = new Animal;
      this.animals.push(newAnimal);
    }
  }

  slaughter() {
    let slaughterIndex = 0;
    for (let index: number = 1; index < this.animals.length; index++) {
      if (this.animals[slaughterIndex].hunger > this.animals[index].hunger) {
        slaughterIndex = index;
      }
    }
    this.animals.splice(slaughterIndex, 1);
  }
}

let farm1 = new Farm;
let cat1 = new Animal;
let cat2 = new Animal;
let cat3 = new Animal;
let cat4 = new Animal;
farm1.add(cat1);
farm1.add(cat2);
farm1.add(cat3);
farm1.add(cat4);
farm1.breed();
farm1.breed();
cat1.eat();
farm1.slaughter();
console.log(farm1);

