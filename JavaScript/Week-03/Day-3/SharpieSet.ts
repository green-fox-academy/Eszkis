/* Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies */

class sharpie {
  color: string;
  widht: number;
  inkAmount: number;
  usuable: boolean;

  constructor(colorInput, widhtInput) {
    this.color = colorInput,
      this.widht = widhtInput;
    this.inkAmount = 1;
  }

  use() {
    this.inkAmount--
  }
}

class SharpieSet {
  sharpie: sharpie[]

  constructor() {
    this.sharpie = []
  }

  countUsable(sharpie: sharpie) {
    if (sharpie.inkAmount > 0) {
      sharpie.usuable = true
    } else {
      sharpie.usuable = false
    }
  }

  add(sharpie) {
    this.sharpie.push(sharpie);
  }

  removeTrash() {
    let indexList: number[] = []
    for (let index: number = 0; index < this.sharpie.length; index++) {
      if (this.sharpie[index].usuable) {
      } else {
        indexList.push(index);
      }
    }
    for (let indexDel: number = (indexList.length - 1); indexDel >= 0; indexDel--) {
      this.sharpie.splice(indexList[indexDel], 1);
    }
  }

}

let SharpieSet1 = new SharpieSet;
let sharpie1 = new sharpie('Black1', 10);
let sharpie2 = new sharpie('Black2', 10);
let sharpie3 = new sharpie('Black3', 10);
let sharpie4 = new sharpie('Black4', 10);
let sharpie5 = new sharpie('Black5', 10);
SharpieSet1.add(sharpie1);
SharpieSet1.add(sharpie2);
SharpieSet1.add(sharpie3);
SharpieSet1.add(sharpie4);
SharpieSet1.add(sharpie5);
console.log(SharpieSet1);
sharpie1.use()
sharpie2.use()
sharpie3.use()
SharpieSet1.countUsable(sharpie1);
SharpieSet1.countUsable(sharpie2);
SharpieSet1.countUsable(sharpie3);
SharpieSet1.countUsable(sharpie4);
SharpieSet1.countUsable(sharpie5);
console.log(SharpieSet1);
SharpieSet1.removeTrash();
console.log(SharpieSet1);




