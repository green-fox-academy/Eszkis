'use strict'

class plants {
  type: string;
  currentWater: number;
  needWater: boolean;
  waterNeedLimit: number;
  usePercente: number;

  constructor(typeInput: string, currentWaterInput: number, waterNeedLimitInput: number, usePerteceInput: number) {
    this.type = typeInput;
    this.currentWater = currentWaterInput;
    this.needWater = true;
    this.waterNeedLimit = waterNeedLimitInput;
    this.usePercente = usePerteceInput;
  }

  water(waterAmmount: number) {
    this.currentWater -= waterAmmount * this.usePercente;
    if (this.currentWater > this.waterNeedLimit) {
      this.needWater = true;
    } else {
      this.needWater = false;
    }
  }
}

class Flower extends (plants) {

  constructor(typeInput: string, currentWaterInput: number, waterNeedLimitInput: number, usePerteceInput: number) {
    super(typeInput, currentWaterInput, waterNeedLimitInput, usePerteceInput)
  }
}

class Tree extends (plants) {

  constructor(typeInput: string, currentWaterInput: number, waterNeedLimitInput: number, usePerteceInput: number) {
    super(typeInput, currentWaterInput, waterNeedLimitInput, usePerteceInput)
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

let flower1 = new Flower('Yellow', 10, 5, 0.76);
let flower2 = new Flower('Blue', 10, 5, 0.76);
let tree1 = new Tree('Purple', 25, 10, 0.4);
let tree2 = new Tree('Orange', 25, 10, 0.4);
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