'use strict'
// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

let section = document.querySelector('section');
for (let index = 1; index <= 100; index++) {
  let newElement = document.createElement('div');
  newElement.innerText = index.toString();
  section.appendChild(newElement);
}

function isPrime(element) {
  primeNumbers.indexOf(parseInt(element.innerText)) === -1 ? element.classList.add('not-prime') : element.classList.add('prime');
}

let allSquare = document.querySelectorAll('div')
let counter = 0;

setInterval(() => {
  counter < allSquare.length ? (
    isPrime(allSquare[counter]),
    counter++) : undefined;
}, 100)