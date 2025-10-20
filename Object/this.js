
// *** call() method ***

// const person1 = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person2 = {
//   firstName:"John",
//   lastName: "Doe",
// }

// console.log(person1.fullName.call(person2));

// --------------------------------------------------------------------------
// *** bind() method ***

// const person = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const member = {
//   firstName:"Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);
// console.log(fullName());

function greet(greet) {
    console.log(greet + ", " + this.name);
}

const user = { name: "Alice" };

const greetUser = greet.bind(user, "Hi");

greetUser();


