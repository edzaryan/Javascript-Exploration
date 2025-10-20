
// *** Object Constructor Function ***

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.nationality = "English";

  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  }
}

const karen = new Person("Karen", "Smith", 30);
// console.log(karen.firstName);
// console.log(karen.nationality);

// karen.favFruits = ["apple", "pear", "orange"];

// console.log(karen);
// console.log(karen.getFullName());

karen.setFirstName = function(name) {
    this.firstName = name;
}

karen.setFirstName("George");
console.log(karen.firstName);

// const joe = new Person("Joe", "Doe", 25);
// console.log(joe.age);

// --------------------------------------------------------------------------
// *** Adding a property to a constructor ***

Person.prototype.country = "US";

Person.prototype.setLastNamne = function (lastName) {
    this.lastName = lastName;
}

