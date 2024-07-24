'use strict';
//arrow function does not work as it does not have its own this keyword
// but in this ""cuntroctor"" function we need this keyword
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
// 'new ' === []
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
//top of prototype chain
console.log(jonas.__proto__.__proto__);
console.log(person.prototype.isPrototypeOf(jonas)); //true
//prototyeOfLinkedObjects
console.log(jonas.kerakliCode); //2321
console.dir(person.prototype.constructor);

//next level
// prototypes
const arr = [4, 5, 5, 3, 4, 34, 2];
/// yangi method yratdim yeeees bu hozir Array prototypeda mavjud va shu yol bilan biz ozimizga kerakli bolgan functiondi prototypega method sidatida qoshib olishmiz mumkin.
Array.prototype.deleteSame = function () {
  return [...new Set(this)];
};

console.log(arr.deleteSame());
//all dom elements are objects behind the scenes
const h1 = document.querySelector('h1');
console.dir(h1);
// functions are objects

console.log(Array.prototype.constructor(...arr));

const Car = function (car, speed) {
  this.car = Car;
  this.speed = speed;
};
Car.prototype.accelerete = function () {
  this.speed += 10;
  console.log(`${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.speed}km/h`);
};
const bMW = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bMW);
console.log(mercedes);

bMW.brake();
mercedes.accelerete();
mercedes.brake();
bMW.accelerete();
bMW.accelerete();
bMW.accelerete();

const PersonCL = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAgeFunc() {
    console.log(2024 - this.birthYear);
  } // as you can see we can create method right inside here and it is now the prototype property of PersonCl object and its adobted children . Alan has just been newly adopted as the child of PersonCL👇😅
};
const Alan = new PersonCL('Alan', 2003);
Alan.calcAgeFunc(); // 21
