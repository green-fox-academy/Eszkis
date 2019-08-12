'use strict'

let promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onReject(error) {
  return error
};

promise.then(fulfill => console.log(fulfill), reject => console.log(onReject(reject)));