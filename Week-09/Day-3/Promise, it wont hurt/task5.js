'use strict'

let promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
})

promise.then(fulfill => console.log(fulfill));
console.log('MAIN PROGRAM');
