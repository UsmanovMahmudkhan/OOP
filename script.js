'use strict';
// //arrow function does not work as it does not have its own this keyword
// // but in this ""cuntroctor"" function we need this keyword
// const person = function (fullName, birthYear) {
//   this.fullName = fullName;
//   this.birthYear = birthYear;
// };
// // 'new ' === []
// const alan = new person('Alan', 2003);
// const jack = new person('Jack', 2002);
// const jonas = new person('Jonas', 2001);
// console.log(alan instanceof person, jack, jonas instanceof person);

// // next level .
// // prototypes
// // this is how we can create prototype 👇
// person.prototype.calcAge = function (person) {
//   console.log(2024 - this.birthYear);
// };

// alan.calcAge();

// const m = {
//   birthYear: this.birthYear,
//   fullName: this.fullName,
// };
// // m.calcAge(); //error chunki calcAge function can be called only with person va instanceof person object
// //
// // Binding calcAge method to m
// const calcAgeForM = person.prototype.calcAge.bind(m);
// calcAgeForM();
// console.log(alan.hasOwnProperty('fullName')); //true
// console.log(jack.hasOwnProperty('fullName')); //true
// person.prototype.kerakliCode = 2321;
// console.log(alan); //person {fullName: 'Alan', birthYear: 2003}
// // birthYear: 2003
// // fullName: "Alan"
// // [[Prototype]]: Object
// // calcAge: ƒ (person)
// // kerakliCode: 2321 mana biz yasagan++
// // constructor : ƒ (fullName birthYear)
// // [[Prototype]] : Object
// console.log(jonas.__proto__); //{kerakliCode: 2321, calcAge: ƒ}
// //bu jonas va boshqa personning bolalarini ozizni proto si
// //calcAge : ƒ (person)
// //kerakliCode: 2321
// person.prototype.alan = 2003; // alan qoshildi object bolp
// console.log(jonas.__proto__);
// //top of prototype chain
// console.log(jonas.__proto__.__proto__);
// console.log(person.prototype.isPrototypeOf(jonas)); //true
// //prototyeOfLinkedObjects
// console.log(jonas.kerakliCode); //2321
// console.dir(person.prototype.constructor);

// //next level
// // prototypes
// const arr = [4, 5, 5, 3, 4, 34, 2];
// /// yangi method yratdim yeeees bu hozir Array prototypeda mavjud va shu yol bilan biz ozimizga kerakli bolgan functiondi prototypega method sidatida qoshib olishmiz mumkin.
// Array.prototype.deleteSame = function () {
//   return [...new Set(this)];
// };

// console.log(arr.deleteSame());
// //all dom elements are objects behind the scenes
// const h1 = document.querySelector('h1');
// console.dir(h1);
// // functions are objects

// console.log(Array.prototype.constructor(...arr));

// const Car = function (car, speed) {
//   this.car = Car;
//   this.speed = speed;
// };
// Car.prototype.accelerete = function () {
//   this.speed += 10;
//   console.log(`${this.speed}km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed}km/h`);
// };
// const bMW = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bMW);
// console.log(mercedes);

// bMW.brake();
// mercedes.accelerete();
// mercedes.brake();
// bMW.accelerete();
// bMW.accelerete();
// bMW.accelerete();

// const PersonCL = class {
//   // so we use constructor proto to cteate this function
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Methods will be added to .prototype property
//   get age() {
//     return 2024 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   greet() {
//     console.log(`Hello ${this.fullName}`);
//   }
//   calcAgeFunc() {
//     console.log(2024 - this.birthYear);
//   } // as you can see we can create method right inside here and it is now the prototype property of PersonCl object and its adobted children . Alan has just been newly adopted as the child of PersonCL👇😅

//   // static methods
//   static hey() {
//     console.log('hello there 👑'); // static methods can only be acceses through the main class object . does not work with children
//   }
// };
// const Alan = new PersonCL('Muhammadaziz Kholdarov', 2003); // mana
// Alan.calcAgeFunc(); // 21
// Alan.greet(); // Hello Alan
// console.log(Alan.fullName, 'this owner');
// console.log(Alan.age, 'this.owner');
// PersonCL.hey(); // static methods can only be acceses through the main class object . does not work with children
// //1  Classes are Not hoisted
// //2  Classes are first-class citizens
// //3  Classes are executed in 'strict' mode

// const owner = {
//   owner: 'Alan',
//   transactions: [200, 231, 300, 600],

//   get latest() {
//     return this.transactions.slice().pop();
//   },
//   set latest(mov) {
//     return this.transactions.unshift(mov);
//   },
// };
// console.log(owner.latest);
// owner.latest = 50;
// console.log(owner.transactions);
// const personProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   adds(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// let james = Object.create(personProto);
// console.log(james); //{}
// james.adds('Alan', 2003);
// console.log(james);
// james.calcAge();
// const jessy = Object.create(personProto);
// jessy.adds('Jessy', 2006);
// jessy.calcAge();
// console.log(jessy); //
// // birthYear: 2006
// // firstName: "Jessy"
// // [[Prototype]]: Object
// // adds: ƒ adds(firstName, birthYear)
// // calcAge: ƒ calcAge()

// // challenge
// class Cars {
//   constructor(brandName, speed) {
//     this.brandName = brandName;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.speed}km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.speed}km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speedInKm) {
//     return (this.speed = speedInKm * 1.6);
//     // console.log(`Car's current speed is ${this.speed.toFixed(2)} km/h`);
//   }
// }
// const Ford = new Cars();
// console.log(Ford);
// Ford.brandName = 'Ford';
// Ford.speed = 120;

// console.log(Ford);
// Ford.accelerate();
// Ford.accelerate();
// Ford.accelerate();
// Ford.accelerate();
// Ford.brake();
// Ford.brake();
// Ford.brake();
// Ford.speedUS = 40; // means getter gets the value from the object itselft while setter is the value entered later like here speedUS = 40 we are setting a new value for the property
// console.log(Ford);

// lesson

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcage = function () {
  console.log(`hello ${this.firstName}`);
};
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); //Shaxs.call(this, ism, tugilganYili) chaqirilganda, Shaxs konstruktori ichidagi this konteksti hozirgi Talaba instansiyasiga o'rnatiladi.
  // Xususiyatlarni meros qilib olish:
  // Shaxs.call(this, ism, tugilganYili) ishlatilganda, Shaxs konstruktori chaqiriladi, lekin Shaxs ichidagi this hozirda yaratilayotgan Talaba instansiyasiga tegishli bo'ladi.
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(
    `hello my name is ${this.firstName} and i am currently studying ${this.course}`
  );
};

const alan = new Student('Alan', 2003, 'JavaScript');
console.dir(alan);
alan.calcage();
alan.introduce();
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
// console.log();
