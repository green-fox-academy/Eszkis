'use strict'

class Flower {
  type: string;
  currentWater: number;
  needWater: boolean;

  constructor(typeInput: string) {
    this.type = typeInput;
    this.currentWater = 10;
    this.needWater = true;
  }

  water(waterAmmount: number) {
    this.currentWater -= waterAmmount * 0.75;
    if (this.currentWater > 5) {
      this.needWater = true;
    } else {
      this.needWater = false;
    }
  }
}

class Tree {
  type: string;
  currentWater: number;
  needWater: boolean;

  constructor(typeInput: string) {
    this.type = typeInput;
    this.currentWater = 25;
    this.needWater = true;
  }

  water(waterAmmount: number) {
    this.currentWater -= waterAmmount * 0.4;
    if (this.currentWater > 10) {
      this.needWater = true;
    } else {
      this.needWater = false;
    }
  }
}

class Garden {
  flowers: Flower[];
  trees: Tree[];

  constructor() {
    this.flowers = [];
    this.trees = [];
  }

  water(waterAmmount: number) {
    console.log(`Wateing with ${waterAmmount}`);
    let wateringFlower: number = 0;
    let wateringTree: number = 0;
    this.flowers.forEach(flower => flower.needWater ? wateringFlower++ : null);
    this.trees.forEach(tree => tree.needWater ? wateringTree++ : null);
    if (wateringFlower !== 0) {
      this.flowers.forEach(flower => flower.water(waterAmmount / (wateringFlower + wateringTree)))
    }
    if (wateringTree !== 0) {
      this.trees.forEach(tree => tree.water(waterAmmount / (wateringFlower + wateringTree)))
    }
  }

  getInfo() {
    this.flowers.forEach(flower => flower.needWater ? console.log(`The ${flower.type} Flower needs water.`) : console.log(`The ${flower.type} Flower doesn't need water.`));
    this.trees.forEach(tree => tree.needWater ? console.log(`The ${tree.type} Tree needs water.`) : console.log(`The ${tree.type} Tree doesn't need water.`));
  }
}

let flower1 = new Flower('yellow');
let flower2 = new Flower('blue');
let tree1 = new Tree('purple');
let tree2 = new Tree('orange');
let garden1 = new Garden;

garden1.flowers.push(flower1);
garden1.flowers.push(flower2);
garden1.trees.push(tree1);
garden1.trees.push(tree2);

garden1.getInfo();
garden1.water(40);
garden1.getInfo();
garden1.water(70);
garden1.getInfo();