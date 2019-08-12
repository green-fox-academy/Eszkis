import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}
function putInOrder(dominosRand: Domino[], dominosOrder: Domino[]) {
  for (let outer: number = 0; outer < dominosRand.length; outer++) {
    if (outer === 0) {
      dominosOrder.push(dominosRand[0]);
    } else {
      for (let inner: number = 1; inner < dominosRand.length; inner++) {
        if (dominosOrder[(outer - 1)].values[1] === dominosRand[inner].values[0]) {
          dominosOrder.push(dominosRand[inner]);
        } else { }
      }
    }
  }
  return dominosOrder
}

let dominoes = initializeDominoes();
let dominoesInOrder: Domino[] = [];
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(putInOrder(dominoes, dominoesInOrder));