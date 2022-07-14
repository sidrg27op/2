"use strict";

function op(p, n) {
  console.log(p, n);
}

op("sa,sa");

// function declaration

// function nuni(p, n) {
//   const op = p + n;
//   return op;
// }

// const consty = nuni("bod", "mashi");

// console.log(consty);

// function exp

// const nuni = function (p, n) {
//   const op = p + n;
//   return op;
// };

// const consty = nuni("bod", "mashi");

// console.log(consty);

// arrow function

// const nuni = (p) => console.log(`${p} is op`);

// nuni("oooo");

// functions calling others functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
