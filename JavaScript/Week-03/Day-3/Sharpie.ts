'use strict';

/* Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount */

class sharpie {
  color: string;
  widht: number;
  inkAmount: number;

  constructor(colorInput, widhtInput) {
    this.color = colorInput,
      this.widht = widhtInput;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount--
  }
}

let sharpie1 = new sharpie('Red', 10);

console.log(sharpie1);
sharpie1.use()
sharpie1.use()
console.log(sharpie1);