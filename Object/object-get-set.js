
// *** Using Getters & Setters ***

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "en",

//   get lang() {
//     return this.language.toUpperCase();
//   },

//   set lang(lang) {
//     this.language = lang.toLowerCase();
//   },

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// person.lang = "am";

// console.log(person.lang);

// console.log(person.fullName);


// --------------------------------------------------------------------------
// *** Object.defineProperty() Function ***

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  counter: 30,
  
  get lang() {
    return this.language.toUpperCase();
  },

  set lang(lang) {
    this.language = lang.toLowerCase();
  },

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

Object.defineProperty(person, "reset", {
  get: function () {this.counter = 0;}
});
Object.defineProperty(person, "increment", {
  get: function () {this.counter++;}
});
Object.defineProperty(person, "decrement", {
  get: function () {this.counter--;}
});
Object.defineProperty(person, "add", {
  set: function (value) {this.counter += value;}
});
Object.defineProperty(person, "subtract", {
  set: function (value) {this.counter -= value;}
});

person.reset;
person.add = 5000;
person.subtract = 1000;
person.increment;
person.increment;
person.increment;

person.decrement;

console.log(person.counter);

