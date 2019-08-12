'use strict';

let a: number = 3;
a += 10;
console.log(a);

let b: number = 100;
b -= 7;
console.log(b);

let c: number = 44;
c *= 2;
console.log(c);

let d: number = 125;
d /= 5;
console.log(d);

let e: number = 8;
e *= e;
console.log(e);

let f1: number = 123;
let f2: number = 345;
let q: boolean = f1 > f2;
console.log(q);

let g1: number = 350;
let g2: number = 200;
let q2: boolean = (g2 *= 2) > g1;
console.log(q2);

let h: number = 1357988018575474;
let q3: boolean = (h % 11) > 0
console.log(q3);

let i1: number = 10;
let i2: number = 3;
let q4: boolean = i1 > i2 ** 2 && i1 < i2 ** 3;
console.log(q4);

let j: number = 1521;
let q5: boolean = j % 3 > 0 || j % 5 > 0;
console.log(q5);

let k: string = 'Apple';
k=k+k+k+k;
console.log(   k);
