'use strict'

export function fibonacci(n) {
  if (typeof (n) === 'number') {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2)
    }
  } else {
    return `${n} is not a number`
  }
}