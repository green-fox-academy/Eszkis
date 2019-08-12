'use strict'

// Obtain an API key
// Search/Find the images in the API
// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF

let body = document.querySelector('body')
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=car&api_key=1ahP9PbwRV866L0S1UOsOMh8raxvP2JO&limit=16', true);
httpRequest.send(null);

httpRequest.onload = () => {
  let data = JSON.parse(httpRequest.responseText);
  for (let index = 0; index < 16; index++) {
    let newElement = document.createElement('img');
    newElement.setAttribute('src', data.data[index].images['original_still'].url)
    newElement.addEventListener('click', function () {
      newElement.setAttribute('src', data.data[index].images.fixed_height.url)
    })
    body.appendChild(newElement)
  }
}