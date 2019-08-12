'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});

const leftEvent = new CustomEvent('left-side-click');
const rightEvent = new CustomEvent('right-side-click');

myDiv.addEventListener('click', (e) => {
  console.log(typeof e.layerX);
  console.log(e);
  if (e.layerX < 200) {
    myDiv.dispatchEvent(leftEvent);
  } else {
    myDiv.dispatchEvent(rightEvent);
  }
});