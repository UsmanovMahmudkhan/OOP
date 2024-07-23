'use strict';
//arrow function does not work as it does not have its own this keyword
// but in this ""cuntroctor"" function we need this keyword
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const alan = new person('Alan', 2003);
const jack = new person('Jack', 2002);
const jonas = new person('Jonas', 2001);
console.log(alan instanceof person, jack, jonas instanceof person);

// next level .
// prototypes
// this is how we can create prototype 👇
person.prototype.calcAge = function (person) {
  console.log(2024 - this.birthYear);
};

alan.calcAge();

const m = {
  birthYear: this.birthYear,
  firstName: this.firstName,
};
// m.calcAge(); //error chunki calcAge function can be called only with person va instanceof person object
//
// Binding calcAge method to m
const calcAgeForM = person.prototype.calcAge.bind(m);
calcAgeForM();
console.log(alan.hasOwnProperty('firstName')); //true
console.log(jack.hasOwnProperty('firstName')); //true
person.prototype.kerakliCode = 2321;
console.log(alan); //person {firstName: 'Alan', birthYear: 2003}
// birthYear: 2003
// firstName: "Alan"
// [[Prototype]]: Object
// calcAge: ƒ (person)
// kerakliCode: 2321 mana biz yasagan++
// constructor : ƒ (firstName birthYear)
// [[Prototype]] : Object
console.log(jonas.__proto__); //{kerakliCode: 2321, calcAge: ƒ}
//bu jonas va boshqa personning bolalarini ozizni proto si
//calcAge : ƒ (person)
//kerakliCode: 2321
person.prototype.alan = 2003; // alan qoshildi object bolp
console.log(jonas.__proto__);

console.log(person.prototype.isPrototypeOf(jonas)); //true
//prototyeOfLinkedObjects
console.log(jonas.kerakliCode); //2321
