let icons = document.querySelectorAll('.hover');
icons.forEach(element => {
  element.addEventListener('mouseover', () => {
    let data = element.parentElement.parentElement.childNodes[5].classList
    element.parentElement.parentElement.childNodes[5].style.display = 'flex';
    data[1] === 'sure' ? element.style.color = 'green' : element.style.color = 'red';
  });
  element.addEventListener('mouseout', () => {
    element.parentElement.parentElement.childNodes[5].style.display = 'none';
    element.style.color = 'white';
  });
});