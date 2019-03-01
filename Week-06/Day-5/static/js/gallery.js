console.log('Gallery is loaded');
let mainImage = document.getElementById('image')
let mainHead = document.getElementById('head')
let mainText = document.getElementById('text')

const images = [
  { name: 'Logo', description: 'Darksiders game series logo', img: `static\\images\\Logo.jpg` },
  { name: 'War1', description: 'First horseman you can play', img: 'static\\images\\War1.jpg' },
  { name: 'War2', description: 'He is the one who found out, that the angels broke the final seal', img: 'static\\images\\War2.jpg' },
  { name: 'Death1', description: 'The one who rides the pale horse. Main caracter in the second game.', img: 'static\\images\\Death1.jpg' },
  { name: 'Death2', description: 'Do anything to save his brother war. Even sacrifice his own, and fellow nephalems life for him. ', img: 'static\\images\\Death2.jpg' },
  { name: 'Fury1', description: 'The most egoist from the four. Only live for the thrill of the fights.', img: 'static\\images\\Fury1.jpg' },
  { name: 'Fury2', description: 'She saves a lot of the remaining humans from earth during her quest.', img: 'static\\images\\Fury2.jpg' },
];

let selected = images[0];

function changeMains(image, head, text, currentOne) {
  text.innerText = currentOne.description;
  head.innerText = currentOne.name;
  image.setAttribute('src', currentOne.img);
}

//leftB
let buttonLeft = document.getElementById('left');
buttonLeft.onclick = () => {
  images.indexOf(selected) === 0 ?
    selected = images[images.length - 1] :
    selected = images[images.indexOf(selected) - 1];
  changeMains(mainImage, mainHead, mainText, selected);

}

//leftR
let buttonRight = document.getElementById('right');
buttonRight.onclick = () => {
  images.indexOf(selected) === (images.length - 1) ?
    selected = images[0] :
    selected = images[images.indexOf(selected) + 1];
  changeMains(mainImage, mainHead, mainText, selected);
}

//smallButton
let tumbNailList = document.getElementsByClassName('smallButton');
for (let index = 0; index < tumbNailList.length; index++) {
  tumbNailList[index].onclick = () => {
    let currentImg = tumbNailList[index].getElementsByTagName('img')[0].getAttribute('src');
    let current = images.find(element => element.img === currentImg);
    selected = current;
    changeMains(mainImage, mainHead, mainText, current);
  }
}