'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let remainingseconds: number = null;

remainingseconds = ((24 - currentHours) * 3600 + (60 - currentMinutes) * 60 + (60 - currentSeconds));
console.log(remainingseconds);
