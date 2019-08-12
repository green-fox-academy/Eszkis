let animals = document.querySelector('.animals');
let answers = document.querySelector('.answers');
let buttons = document.querySelector('.buttons');
let inputs = document.querySelectorAll('input');
console.log(inputs);


inputs.forEach(elemnet => elemnet.addEventListener('change', () => {
  signUpCheck();
  catFacts();
}))

function signUpCheck() {
  animals.children[0].children[0].checked || animals.children[1].children[0].checked || (animals.children[2].children[0].checked && answers.children[1].children[0].checked) ?
    buttons.children[1].disabled = false :
    buttons.children[1].disabled = true;
};

function catFacts() {
  answers.children[0].children[0].checked ?
    buttons.children[0].disabled = false :
    buttons.children[0].disabled = true;
}

buttons.children[0].addEventListener('click', (e) => {
  e.preventDefault();
  alert("Thank you, you've successfully signed up for cat facts")
});

buttons.children[1].addEventListener('click', (e) => {
  e.preventDefault();
  alert("Sigh, we still added you to the cat facts")
});
