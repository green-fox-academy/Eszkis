// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

let myName: string = 'Greenfox';

function greet(x?: string) {
  if (x === undefined) {
    x = 'name'
    console.log('Greetings, dear ' + x);
  } else {
    console.log('Greetings, dear ' + x);
  }

}

greet(myName);