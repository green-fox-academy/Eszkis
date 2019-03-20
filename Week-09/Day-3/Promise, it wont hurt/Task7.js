'use strick'

function first() {
  return Promise.resolve('asdfaslidfbaskdzmgahtnvazkcslz');
}

function second(value) {
  console.log(value);
}

first().then(second);