import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();
let thing1 = new Thing('Get milk');
let thing2 = new Thing('Remove the obstacles');
let thing3 = new Thing('Stand up');
let thing4 = new Thing('Eat lunch');

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

thing3.complete();
thing4.complete();
fleet.add(thing3);
fleet.add(thing2);
fleet.add(thing4);
fleet.add(thing1);
console.log('Original order');
fleet.print();
fleet.things.sort(function (a: Thing, b: Thing) {
  return a.stringCompareTo(b);
});
fleet.print();
fleet.things.sort(function (a: Thing, b: Thing) {
  return a.statusCompareTo(b);
});
console.log('Sorted order');

fleet.print();
fleet.things.forEach(element => console.log(element.printAllFields()));