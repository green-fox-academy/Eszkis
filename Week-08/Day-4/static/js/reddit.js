let upvoteArrow = document.querySelectorAll('.upVote');
let downvoteArrow = document.querySelectorAll('.downVote');
let button = document.querySelector('.submit');
let edit = document.querySelectorAll('.edit');
let del = document.querySelectorAll('.delete');

upvoteArrow.forEach(element => {
  element.onclick = () => {
    let id = element.parentNode.parentElement.getAttribute('data-postid');
    const req = new XMLHttpRequest();
    req.open('PUT', `http://localhost:3000/posts/${id}/upvote`);
    req.addEventListener('load', function (event) {
      let response = JSON.parse(event.target.response);
      element.parentElement.querySelector('.vote').innerHTML = response.rows[0].score;
    });
    req.setRequestHeader('Content-Type', 'application/json');
    req.send();
  };
});

downvoteArrow.forEach(element => {
  element.onclick = () => {
    let id = element.parentNode.parentElement.getAttribute('data-postid');
    const req = new XMLHttpRequest();
    req.open('PUT', `http://localhost:3000/posts/${id}/downvote`);
    req.addEventListener('load', function (event) {
      let response = JSON.parse(event.target.response);
      element.parentElement.querySelector('.vote').innerHTML = response.rows[0].score;
    });
    req.setRequestHeader('Content-Type', 'application/json');
    req.send();
  };
});

del.forEach(element => {
  element.onclick = () => {
    let id = element.parentNode.parentNode.parentElement.getAttribute('data-postid');
    console.log('delete');
    console.log(id);
    const req = new XMLHttpRequest();
    req.open('DELETE', `http://localhost:3000/posts/${id}`);
    req.addEventListener('load', (event) => {
      window.location = 'http://localhost:3000/posts';
    });
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('userid', 6);
    req.send();
  };
});