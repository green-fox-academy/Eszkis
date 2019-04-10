const button = document.querySelector('.add');
const refresh= document.querySelector('.refresh')

refresh.addEventListener('click', event => {
  location.reload();
});

button.addEventListener('click', event => {
  let newData=getData();
  console.log(newData);
  const req = new XMLHttpRequest();
  req.open('POST', `${document.URL}api/users`);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(newData));
});

function getData() {
  let userName = `proba${Math.floor(Math.random()*100)}`;
  return {
    userName: userName
  };
}
