let div = document.querySelector('.password');
div.children[1].addEventListener('click', () => {
  div.children[1].getAttribute('src') === './closedeye.jpg' ?
    (div.children[1].setAttribute('src', './openeye.svg'),
      div.children[0].setAttribute('type', 'text')) :
    (div.children[1].setAttribute('src', './closedeye.jpg'),
      div.children[0].setAttribute('type', 'password'));
});