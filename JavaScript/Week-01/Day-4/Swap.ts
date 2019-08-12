'use strict';

let a: number = 123;
let b: number = 526;
let c: number = 0;

console.log(a);
console.log(b);

c = a;
a = b;
b = c;

console.log(a);
console.log(b);