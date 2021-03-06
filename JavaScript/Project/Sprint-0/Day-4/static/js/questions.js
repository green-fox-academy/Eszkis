let submit = document.querySelector('.button');
let deleteButtons = document.querySelectorAll('.delete')
const servername= 'http://quiztest.us-east-2.elasticbeanstalk.com'

function getQuestion() {
  let question = document.querySelector('.quest');
  return question.value;
}

function getAnswers() {
  let answers = document.querySelectorAll('.answer');
  let correct = document.querySelectorAll('.correct');
  let data = [];
  for (let index = 0; index < answers.length; index++) {
    let newAnswer = {
      answer: answers[index].value,
      is_correct: correct[index].checked ? 1 : 0
    };
    data.push(newAnswer);
  };
  return data;
};

function getData() {
  let data = {
    question: getQuestion(),
    answers: getAnswers(),
  }
  return data;
}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const req = new XMLHttpRequest();
  req.open('POST', `${servername}`);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify(getData()));
});

deleteButtons.forEach(element => {
  element.addEventListener('click', () => {
    let id = element.parentElement.getAttribute('data-id');
    element.parentElement.parentElement.removeChild(element.parentElement);
    const req = new XMLHttpRequest();
    req.open('DELETE', `${servername}/${id}`);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send();
    console.log(`${servername}/${id}`);
  });
});