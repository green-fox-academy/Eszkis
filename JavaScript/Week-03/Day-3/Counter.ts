'use strict';

/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter {

  value: number;
  originalValue: number;

  constructor(originalValueInput = 0) {
    this.originalValue = originalValueInput;
    this.value = originalValueInput;
  }

  add(valueInput = 1) {
    this.value += valueInput;
  }

  get() {
    console.log(this.value);
  }

  reset() {
    this.value = this.originalValue
  }
}

let Counter1 = new Counter(5);

Counter1.get();
Counter1.add();
Counter1.get();
Counter1.add(10)
Counter1.get();
Counter1.reset();
Counter1.get();