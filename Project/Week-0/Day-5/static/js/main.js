let submit = document.querySelector('.submit');
const url='http://quiztest.us-east-2.elasticbeanstalk.com/'

submit.addEventListener('click', event => {
  const req = new XMLHttpRequest();
  req.open('POST', `${url}api/users`);
  req.setRequestHeader('Content-Type', 'application/json');
  console.log(Error);
  req.send(JSON.stringify(getData()));
})

function getData() {
  let email = document.querySelector('.email');
  let password = document.querySelector('.password');
  let cupon = document.querySelector('.cupon');
  let userName = email.value.split('@')[0];
  return {
    userName: userName,
    password: cipher(password.value),
    email: email.value,
    cupon: cupon.value
  };
}

function cipher(password) {
  let key = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm',
  }

  let rawPassword = password.split('');
  let newPassword = '';
  rawPassword.forEach(element => newPassword += key[element]);
  return newPassword;
}