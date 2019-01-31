// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function switchX(string) {
  if (string === '') {
    return ''
  } else {
    return string.substr(0, 1).concat('*', switchX(string.substr(1)));
  }
}

console.log(switchX('XxXxXxXasdv'));