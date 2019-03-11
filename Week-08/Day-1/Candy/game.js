const createCandy = document.getElementsByClassName('create-candies')[0];
const buyLolly = document.getElementsByClassName('buy-lollypops')[0];
const machine = document.getElementsByClassName('candy-machine')[0];
const candyCount = document.getElementsByClassName('candies')[0];
const lollyCount = document.getElementsByClassName('lollypops')[0];
const speed = document.getElementsByClassName('speed')[0];
let candy = 0;
let lolly = '';
let generateSpeed = 0;
let price = 1;

createCandy.addEventListener('click', () => {
  candy++;
  candyCount.innerHTML = Math.floor(candy);
});

buyLolly.addEventListener('click', () => {
  candy >= price ? (
    candy -= price,
    candyCount.innerHTML = Math.floor(candy),
    lolly += '🍭',
    lollyCount.innerHTML = lolly,
    generateSpeed += 0.1,
    speed.innerHTML = Math.round(generateSpeed * 10) / 10
  ) : console.log('You dont have enough candy to buy lollypops.');
});
machine.addEventListener('click', () => {
  console.log('Make it RAIN.');
  generateSpeed *= 10;
  speed.innerHTML = Math.round(generateSpeed * 10) / 10;
  setTimeout(() => {
    generateSpeed /= 10;
    speed.innerHTML = Math.round(generateSpeed * 10) / 10;
    console.log('Rain stoped.');
  }, 10000);
});

let makeYouOwn = setInterval(() => {
  let currentSpeed = generateSpeed;
  candy += currentSpeed;
  candyCount.innerHTML = Math.floor(candy);
}, 1000);