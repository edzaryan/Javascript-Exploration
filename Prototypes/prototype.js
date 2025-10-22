
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}


Person.prototype.country = "US";

Person.prototype.setLastName = function (lastName) {
    this.lastName = lastName;
}

const karen = new Person("Karen", "Smith", 25, "brown");
const john = new Person("John", "Adams", 35, "black");

karen.setLastName("Anderson");

console.log(karen.country);
console.log(john.country);
