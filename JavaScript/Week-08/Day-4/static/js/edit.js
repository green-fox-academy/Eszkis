let button = document.querySelector('button');

button.onclick = (event) => {
  event.preventDefault();
  let id = button.parentElement.getAttribute('data-postid');
  console.log(id);
  console.log(getData());
  
  const req = new XMLHttpRequest();
  req.open('PUT', `http://localhost:3000/posts/${id}`);
  req.addEventListener('load', event => {
    window.location = 'http://localhost:3000/posts';
  });
  req.setRequestHeader('Content-Type', 'application/json');
  req.setRequestHeader('userid', 6);
  req.send(JSON.stringify(getData()));
}

function getData() {
  return {
    title: document.querySelector('.titleData').value,
    url: document.querySelector('.url').value
  }
}