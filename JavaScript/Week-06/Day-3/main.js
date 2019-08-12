//select highlighted line
let inProgressList = document.getElementsByClassName('inProgress')[0];
let finised = document.getElementsByClassName('finished')[0];
let selected = document.getElementsByClassName('selected')[0];

//down
let buttondown = document.getElementById('down');
buttondown.onclick = () => {
  if (inProgressList.children[inProgressList.childElementCount - 1] === selected) {
    undefined
  } else {
    for (let index = 0; index < inProgressList.childElementCount; index++) {
      inProgressList.children[index].classList.value === 'selected' ? (
        inProgressList.children[index].classList.remove('selected'),
        inProgressList.children[index + 1].classList.add('selected'),
        selected = document.getElementsByClassName('selected')[0],
        index = inProgressList.childElementCount
      ) : undefined;
    }
  };
}

//up
let buttonup = document.getElementById('up');
buttonup.onclick = () => {
  if (inProgressList.children[0] === selected) {
    undefined
  } else {
    for (let index = 0; index < inProgressList.childElementCount; index++) {
      inProgressList.children[index].classList.value === 'selected' ? (
        inProgressList.children[index].classList.remove('selected'),
        inProgressList.children[index - 1].classList.add('selected'),
        selected = document.getElementsByClassName('selected')[0],
        index = inProgressList.childElementCount
      ) : undefined;
    }
  };
}

//delete
let buttondelete = document.getElementById('delete');
buttondelete.onclick = () => {
  for (let index = 0; index < inProgressList.childElementCount; index++) {
    inProgressList.children[index].classList.value === 'selected' ? (
      inProgressList.children[index].remove(),
      index = inProgressList.childElementCount
    ) : undefined;
  }
  inProgressList.childElementCount === 0 ? undefined :
    inProgressList.children[0].classList.add('selected'),
    selected = document.getElementsByClassName('selected')[0];
}

//other
let buttonother = document.getElementById('other');
buttonother.onclick = () => {
  for (let index = 0; index < inProgressList.childElementCount; index++) {
    inProgressList.children[index].classList.value === 'selected' ? (
      inProgressList.children[index].classList.remove('selected'),
      inProgressList.children[index].remove(),
      finised.appendChild(selected),
      index = inProgressList.childElementCount
    ) : undefined;
  }
  inProgressList.childElementCount === 0 ? undefined :
    inProgressList.children[0].classList.add('selected'),
    selected = document.getElementsByClassName('selected')[0];
}