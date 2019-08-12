// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function switchX(string) {
  if (string === '') {
    return ''
  } else if (string.substr(0, 1) === 'x') {
    return ('y' + switchX(string.substr(1)));
  } else {
    return string.substr(0, 1) + switchX(string.substr(1))
  }
}

console.log(switchX('XxXxXxXasdv'));