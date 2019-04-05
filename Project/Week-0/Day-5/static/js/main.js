let button = document.querySelector('.button');

button.addEventListener('click', event => {
  console.log(getData());
  //const req = new XMLHttpRequest();
  //req.open('POST', 'http://localhost:3000/api/users');
  //req.setRequestHeader('Content-Type', 'application/json');
  //req.send(JSON.stringify(getData()));
})

function getData() {
  let userName = `proba${Math.floor(Math.random()*100)}`;
  return {
    userName: userName
  };
}
