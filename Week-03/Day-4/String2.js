// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function switchX(string) {
  if (string === '') {
    return ''
  } else if (string.substr(0, 1) === 'x' || string.substr(0, 1) === 'X') {
    return ('' + switchX(string.substr(1)));
  } else {
    return string.substr(0, 1) + switchX(string.substr(1))
  }
}

console.log(switchX('XxXxXxXasdv'));