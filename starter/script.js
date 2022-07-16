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

// functions calling others functions////

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

///////////////////////////////////////
// Reviewing Functions
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// arrays

// const os = ["fd", "fd", "gf"];

// console.log(os[1]);
// console.log(os.length);
// console.log(os[os.length > 2 ? os.length - 1 : 1]);
// os[2] = "ddddddd";
// console.log(os[2]);

// const age = 18;
// let nuni = true;
// const nuniop = [
//   "ww",
//   "ewe",
//   age < 18 ? (nuni = false) : (nuni = true),
//   os,
//   age,+
// ];

// console.log(nuniop[3]);
// console.log(nuniop);

// arrays methods ////

// const os = ["fd", "fgd", "gf"];

// const ooooo = os.push("dd");
// const oooo = os.pop();
// const ooo = os.shift();
// const oo = os.unshift("kkkk");

// console.log(os);
// console.log(ooooo);
// console.log(oooo);
// console.log(ooo);
// console.log(oo);
// console.log(os.indexOf("fgd"));
// console.log(os.includes("pp"));

// coding challange

// let bill = 125;
// const calctip = (bill) => (bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2);

// console.log(bill + calctip(125));

// const bills = [125, 555, 44];
// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
// console.log(tips, bills);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas["age"]);

// // const mmmm = prompt("oop");
// // console.log(mmmm);

// // console.log(jonas[mmmm] ? console.log(jonas[mmmm]) : console.log("notfound"));

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} frinds,and his bestfriend is called ${jonas.friends[0]}`
// );

// objects methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   // age: 2037 - 1991,
//   birtgyear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   sid: function () {
//     this.age = 2037 - this.birtgyear;
//     return this.age;
//   },
//   hasdl: false,
//   jonas: function () {
//     return `${this.firstName} is a ${this.sid()} old techare ,and he has ${
//       this.hasdl === true ? "a" : "no"
//     } drivers licence`;
//   },
// };

// console.log(jonas.sid());
// console.log(jonas.age);

// console.log(jonas.jonas());

// coding challanges

// const john = {
//   fullname: "john smit",
//   mass: 92,
//   height: 1.95,
//   calbmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const mark = {
//   fullname: "mark miller",
//   mass: 78,
//   height: 1.69,
//   calbmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// console.log(
//   john.calbmi() > mark.calbmi()
//     ? `john smith's Bmi ${john.calbmi()}is higher than Mark miller ${mark.calbmi()}`
//     : `Maek miller Bmi ${Math.floor(
//         mark.calbmi()
//       )} is higher than john smith ${john.calbmi()}`
// );

// iteration loops

// for (let i = 1; i <= 10; i++) {
//   console.log(`4 x ${i} = ${4 * i}`);
// }

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   // types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1992, 2001, 2003, 1892];

// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2022 - years[i]);
// }

// console.log(age);

// continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// loop for and backward

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let ex = 1; ex < 4; ex++) {
  console.log(`---------excersize ${ex}`);

  for (let rep = 1; rep < 16; rep++) {
    console.log(`pushups ${rep}`);
  }
}
