'use strict'

function attachTitle(value) {
  return 'DR. ' + value;
}

let promise = new Promise((fulill, reject) => {
  fulill('MANHATTAN');
});

promise.then(attachTitle).then(console.log)