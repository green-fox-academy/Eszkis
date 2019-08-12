'use strict'

let input = document.querySelector('#inputField').value;
const list = document.querySelector('ul');

const http = new XMLHttpRequest();
http.open('GET', `https://swapi.co/api/people`, true);
http.onload = () => {
  const response = JSON.parse(http.responseText);
  response.results.forEach(data => {
    if (data.name === input) {
      let keys = Object.keys(data);
      keys.forEach(element => {
        let listElement = document.createElement('li');
        listElement.innerText = `${element}: ${data[element]}`;
        list.appendChild(listElement);
      });
    } else {
    }
  });
}

const button = document.querySelector('#search');

button.addEventListener('click', () => {
  while (list.firstChild) { list.removeChild(list.firstChild) };
  input = document.querySelector('#inputField').value;
  http.open('GET', `https://swapi.co/api/people`, true);
  http.send(null);
  http.onload = () => {
    const response = JSON.parse(http.responseText);
    response.results.forEach(data => {
      if (data.name === input) {
        let keys = Object.keys(data);
        keys.forEach(element => {
          let listElement = document.createElement('li');
          listElement.innerText = `${element}: ${data[element]}`;
          element === 'name' ? listElement.onclick = () => {
            let elementList = document.querySelectorAll('li');
            console.log(elementList);
            elementList.forEach(element => element.innerText.split(' ')[0] === 'films:' ? element.style.display = 'block' : element.style.display = 'none');
          } : undefined;
          list.appendChild(listElement);
        });
      } else {
      }
    });
  }
});