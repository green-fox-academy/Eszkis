'use strict'

// The way you have learned: create promise through the constructor.

var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

// Introducing: Promise.resolve
// It does the exact same thing as above:

var promise = Promise.resolve('SECRET VALUE');


// Likewise...

var promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));

promise.catch(reject => console.log(reject));