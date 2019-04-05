let buttons = document.querySelectorAll('button');
const servername= 'http://quiztest.us-east-2.elasticbeanstalk.com'

buttons.forEach(element => {
  element.addEventListener('click', event => {
    if (element.getAttribute('data-correct') === "1") {
      element.style.backgroundColor = 'green';
      console.log('good answer');
      setTimeout(() => {
        nextQuestion()
      }, 5000);
    }
  });
})
console.log(buttons);


const nextQuestion = () => {
  const req = new XMLHttpRequest();
  req.open('GET', `${servername}`);
  req.addEventListener('load', (event) => {
    console.log('good answer');
  });
  req.setRequestHeader('Content-Type', 'application/json');
  req.send();
}