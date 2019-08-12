let forms = document.querySelectorAll('input');
let password = document.querySelector("#password")
let confirm_password = document.querySelector("#repassword");
let button = document.querySelector('button');
let data = document.querySelector('form');

console.log(button);


forms.forEach(element => {
  element.addEventListener('click', () => {
    forms.forEach(element => element.style.borderColor = 'grey');
    element.style.borderColor = 'green';
  });
});

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = () => validatePassword();
confirm_password.onkeyup = () => validatePassword();

button.addEventListener('click', event => {
  event.preventDefault();
  forms.forEach(element => console.log(element.value))
});