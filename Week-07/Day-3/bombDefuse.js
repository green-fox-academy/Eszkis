'use strict'

// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display

let counter = document.getElementsByClassName('display')[0];
let button = document.querySelector('button');

button.onclick = () => {
  clearInterval(counterTimer);
}

let counterTimer = setInterval(() => {
  counter.textContent > 0 ?
    counter.textContent-- : counter.textContent = 'BOOM'
}, 1000);
