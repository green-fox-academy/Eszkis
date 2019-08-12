let button = document.querySelector('button');

button.onclick = (event) => {
  event.preventDefault();
  const req = new XMLHttpRequest();
  req.open('POST', `http://localhost:3000/posts`);
  req.addEventListener('load', event => {
    window.location = 'http://localhost:3000/posts';
  });
  req.setRequestHeader('Content-Type', 'application/json');
  req.setRequestHeader('userid', 2);
  req.send(JSON.stringify(getData()));
}

function getData() {
  return {
    title: document.querySelector('.titleData').value,
    url: document.querySelector('.url').value
  }
}