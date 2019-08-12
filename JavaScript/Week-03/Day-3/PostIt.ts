'use strict';

//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;
}

let postIt1= new postIt()
postIt1.backgroundColor='orange'
postIt1.text='Idea 1'
postIt1.textColor='Blue'

let postIt2= new postIt()
postIt2.backgroundColor='pink'
postIt2.text='Awesome'
postIt2.textColor='Black'

let postIt3= new postIt()
postIt3.backgroundColor='Yellow'
postIt3.text='Superb'
postIt3.textColor='green'

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);